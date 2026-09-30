import { lookupNoun } from "@/data/nouns";
import type { SrsGrade } from "@/types";

/** 비교용 정규화: 대소문자·문장부호 무시, ä→ae/ß→ss 입력 허용 */
export function normalizeDe(s: string): string {
  return s
    .toLowerCase()
    .replace(/[.,!?;:"„“”'’()…]/g, " ")
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/\s+/g, " ")
    .trim();
}

/** 한글이 섞여 있으면 한/영 전환을 안 한 것 */
export function hasHangul(s: string): boolean {
  return /[ㄱ-ㆎ가-힣]/.test(s);
}

function levenshtein(a: string, b: string): number {
  const dp = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let prev = dp[0];
    dp[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const tmp = dp[j];
      dp[j] = Math.min(dp[j] + 1, dp[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = tmp;
    }
  }
  return dp[b.length];
}

/** 발음 규칙·알파벳 나열 같은 설명용 항목 (예: "ei / ey → [아이]") → 카드로 쓰지 않음 */
export function isRuleItem(german: string): boolean {
  return /→|\[|^[A-Z](, [A-Z])+/.test(german);
}

/** "Ich möchte ... bestellen." 처럼 빈칸이 있는 틀 → 입력 대신 떠올리고 스스로 채점 */
export function isTemplate(german: string): boolean {
  return /\.\.\.|…/.test(german);
}

/** 띄어 쓴 괄호 설명 제거: "das Auge (-n)" → "das Auge", "der Liter (l)" → "der Liter" */
export function cleanGerman(german: string): string {
  return german.replace(/\s+\([^)]*\)/g, "").trim();
}

/** 허용되는 정답 표기들: "A / B", "der/die X", "Lehrer(in)" 등을 펼친다 */
function expandVariants(german: string): string[] {
  const out: string[] = [];
  for (const alt of cleanGerman(german).split(/\s+\/\s+/)) {
    let variants = [""];
    for (const token of alt.split(" ")) {
      // 붙여 쓴 괄호 = 생략 가능: Lehrer(in) → Lehrer, Lehrerin
      const opt = token.match(/^(.*)\(([^)]+)\)(.*)$/);
      const forms = opt
        ? [opt[1] + opt[3], opt[1] + opt[2] + opt[3]]
        : token.includes("/") ? token.split("/") : [token];
      variants = variants.flatMap((v) => forms.map((f) => (v ? `${v} ${f}` : f))).slice(0, 16);
    }
    out.push(...variants);
  }
  return out;
}

/** 카드의 정답. 관사를 알 수 있는 명사는 관사를 붙인다 (예: Auto → das Auto) */
export function answerFor(german: string): { answer: string; variants: string[]; needsArticle: boolean } {
  const cleaned = cleanGerman(german);
  const noun = lookupNoun(cleaned);
  if (noun && !noun.info.bare) {
    const answer = `${noun.article} ${noun.bare}`;
    return { answer, variants: [answer], needsArticle: true };
  }
  const variants = expandVariants(german);
  return { answer: variants[0] ?? cleaned, variants, needsArticle: false };
}

export type CheckResult = {
  verdict: "correct" | "typo" | "article" | "wrong";
  suggested: SrsGrade;
  message: string;
  /** 입력과 가장 가까운 정답 표기 (틀린 글자 표시용) */
  closest: string;
};

/** 직접 입력한 답을 채점하고 SRS 등급을 제안한다 */
export function checkAnswer(input: string, german: string): CheckResult {
  const { answer, variants, needsArticle } = answerFor(german);
  const got = normalizeDe(input);
  const scored = variants
    .map((v) => ({ v, d: levenshtein(got, normalizeDe(v)) }))
    .sort((a, b) => a.d - b.d);
  const closest = scored[0]?.v ?? answer;

  if (scored[0]?.d === 0)
    return { verdict: "correct", suggested: "good", message: "정답!", closest };

  if (needsArticle) {
    const want = normalizeDe(answer);
    const [wantArt, ...rest] = want.split(" ");
    const wantBare = rest.join(" ");
    const parts = got.split(" ");
    const gotArt = ["der", "die", "das"].includes(parts[0]) ? parts[0] : null;
    const gotBare = gotArt ? parts.slice(1).join(" ") : got;
    const bareOk = gotBare === wantBare || isTypo(gotBare, wantBare);
    if (bareOk && !gotArt)
      return { verdict: "article", suggested: "hard", message: `단어는 맞아요. 관사까지: ${wantArt}`, closest };
    if (bareOk && gotArt !== wantArt)
      return { verdict: "article", suggested: "again", message: `관사가 달라요: ${gotArt} → ${wantArt}`, closest };
  }

  if (isTypo(got, normalizeDe(closest)))
    return { verdict: "typo", suggested: "hard", message: "거의 맞았어요 (철자 확인)", closest };
  return { verdict: "wrong", suggested: "again", message: "틀렸어요", closest };
}

function isTypo(got: string, want: string): boolean {
  if (!got) return false;
  const allowed = want.length <= 4 ? 0 : want.length <= 10 ? 1 : Math.floor(want.length / 8) + 1;
  return levenshtein(got, want) <= allowed;
}

/** 정답과 입력을 글자 단위로 비교해 틀린 위치를 표시하기 위한 조각 */
export function diffChars(input: string, answer: string): { ch: string; ok: boolean }[] {
  const a = input.trim();
  const b = answer;
  // LCS 기반으로 정답 글자 중 입력과 일치하는 글자 표시
  const n = a.length, m = b.length;
  const dp: number[][] = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
  const eq = (x: string, y: string) => normalizeDe(x) === normalizeDe(y) || x.toLowerCase() === y.toLowerCase();
  for (let i = n - 1; i >= 0; i--)
    for (let j = m - 1; j >= 0; j--)
      dp[i][j] = eq(a[i], b[j]) ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const out: { ch: string; ok: boolean }[] = [];
  let i = 0, j = 0;
  while (j < m) {
    if (i < n && eq(a[i], b[j])) { out.push({ ch: b[j], ok: true }); i++; j++; }
    else if (i < n && dp[i + 1][j] >= dp[i][j + 1]) i++;
    else { out.push({ ch: b[j], ok: /[\s.,!?]/.test(b[j]) }); j++; }
  }
  return out;
}
