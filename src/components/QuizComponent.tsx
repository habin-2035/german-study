"use client";
import { useState, useMemo, useEffect } from "react";
import type { VocabItem, Expression } from "@/types";
import SpeakerButton from "@/components/SpeakerButton";
import { isSpeechSupported, speak } from "@/lib/speech";

type Card = VocabItem | Expression;

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

/** 움라우트 없는 키보드 대응: ä→ae, ß→ss 등 정규화 후 비교 */
function normalizeDe(s: string): string {
  return s
    .trim()
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/\s+/g, " ");
}

// ── 문제 유형 ──────────────────────────────────────────────
// de→ko/ko→de/listen = 객관식, fill = 빈칸채우기, type = 직접 타이핑
type MCType = "de→ko" | "ko→de" | "listen";
type TextType = "fill" | "type";

type MCQuestion = {
  kind: "mc";
  type: MCType;
  promptText?: string; // 화면에 보여줄 문제 텍스트
  audioText?: string;  // 듣기 문제에서 재생할 독일어
  german: string;      // 발음 재생용 원본 독일어
  answer: string;
  options: string[];
};

type TextQuestion = {
  kind: "text";
  type: TextType;
  promptKorean: string;
  german: string;
  blanked?: string; // fill 전용
  answer: string;
  hint: string;
};

type Question = MCQuestion | TextQuestion;

function buildQuestion(card: Card, allCards: Card[], canListen: boolean): Question | null {
  const pool = allCards.filter((c) => c.korean !== card.korean);
  if (pool.length < 3) return null;

  const types: (MCType | TextType)[] = ["de→ko", "ko→de", "fill", "type"];
  if (canListen) types.push("listen");
  const type = shuffle(types)[0];

  if (type === "de→ko") {
    const distractors = shuffle(pool).slice(0, 3).map((c) => c.korean);
    return {
      kind: "mc", type, promptText: card.german, german: card.german,
      answer: card.korean, options: shuffle([card.korean, ...distractors]),
    };
  }

  if (type === "ko→de") {
    const distractors = shuffle(pool).slice(0, 3).map((c) => c.german);
    return {
      kind: "mc", type, promptText: card.korean, german: card.german,
      answer: card.german, options: shuffle([card.german, ...distractors]),
    };
  }

  if (type === "listen") {
    const distractors = shuffle(pool).slice(0, 3).map((c) => c.korean);
    return {
      kind: "mc", type, audioText: card.german, german: card.german,
      answer: card.korean, options: shuffle([card.korean, ...distractors]),
    };
  }

  if (type === "type") {
    return {
      kind: "text", type, promptKorean: card.korean, german: card.german,
      answer: card.german, hint: card.german[0],
    };
  }

  // fill: 단어 뒷부분 빈칸
  const word = card.german;
  const mid = Math.floor(word.length / 2);
  const blanked = word.slice(0, mid) + "_".repeat(Math.max(1, word.length - mid));
  return {
    kind: "text", type: "fill", promptKorean: card.korean, german: word,
    blanked, answer: word, hint: word[0],
  };
}

function buildQuestions(cards: Card[], canListen: boolean): Question[] {
  if (cards.length < 2) return [];
  const picked = shuffle(cards).slice(0, Math.min(12, cards.length));
  return picked.map((c) => buildQuestion(c, cards, canListen)).filter(Boolean) as Question[];
}

const TYPE_LABEL: Record<MCType | TextType, string> = {
  "de→ko": "🇩🇪 독일어 → 한국어",
  "ko→de": "🇰🇷 한국어 → 독일어",
  listen: "🎧 듣고 뜻 고르기",
  fill: "✏️ 빈칸 채우기",
  type: "⌨️ 독일어로 입력",
};

// ── 컴포넌트 ───────────────────────────────────────────────
type Props = { cards: Card[]; onComplete: (score: number) => void };

export default function QuizComponent({ cards, onComplete }: Props) {
  const [canListen, setCanListen] = useState(false);
  useEffect(() => setCanListen(isSpeechSupported()), []);

  const questions = useMemo(() => buildQuestions(cards, canListen), [cards, canListen]);
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [textInput, setTextInput] = useState("");
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const q = questions[qIndex];

  // 듣기 문제는 자동 재생
  useEffect(() => {
    if (q?.kind === "mc" && q.type === "listen" && q.audioText) {
      const t = setTimeout(() => speak(q.audioText!), 250);
      return () => clearTimeout(t);
    }
  }, [qIndex, q]);

  if (cards.length < 2) return (
    <div className="flex items-center justify-center h-48 text-slate-400 text-sm">
      퀴즈를 하려면 단어/표현이 2개 이상 필요합니다.
    </div>
  );

  if (done) {
    const pct = questions.length ? Math.round((score / questions.length) * 100) : 0;
    const emoji = pct >= 90 ? "🏆" : pct >= 70 ? "🎉" : pct >= 50 ? "👍" : "📚";
    return (
      <div className="flex flex-col items-center gap-4 py-8 pop">
        <div className="text-6xl">{emoji}</div>
        <div className="text-center">
          <p className="text-4xl font-black text-slate-800">{pct}점</p>
          <p className="text-slate-400 text-sm mt-1">{score}/{questions.length} 정답</p>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-2 max-w-xs overflow-hidden">
          <div className="h-full bg-indigo-500 rounded-full progress-bar" style={{ width: `${pct}%` }} />
        </div>
        <button
          onClick={() => { setQIndex(0); setSelected(null); setTextInput(""); setScore(0); setDone(false); setShowHint(false); }}
          className="btn-primary mt-2 px-6 py-2.5 rounded-xl text-sm font-semibold"
        >
          다시 풀기
        </button>
      </div>
    );
  }

  function advance(correct: boolean) {
    if (correct) setScore((s) => s + 1);
    setTimeout(() => {
      if (qIndex + 1 >= questions.length) {
        const final = score + (correct ? 1 : 0);
        onComplete(Math.round((final / questions.length) * 100));
        setDone(true);
      } else {
        setQIndex((i) => i + 1);
        setSelected(null);
        setTextInput("");
        setShowHint(false);
      }
    }, 900);
  }

  function chooseOption(opt: string, answer: string) {
    if (selected !== null) return;
    setSelected(opt);
    advance(opt === answer);
  }

  function submitText() {
    if (selected !== null || q.kind !== "text") return;
    const correct = normalizeDe(textInput) === normalizeDe(q.answer);
    setSelected(textInput || "__");
    if (correct) speak(q.german); // 정답이면 발음 들려주기
    advance(correct);
  }

  const pct = Math.round((qIndex / questions.length) * 100);

  return (
    <div className="flex flex-col gap-5">
      {/* Progress */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-indigo-500 rounded-full progress-bar" style={{ width: `${pct}%` }} />
        </div>
        <span className="text-xs text-slate-400 tabular-nums">{qIndex + 1}/{questions.length}</span>
      </div>

      {/* 객관식 (de→ko / ko→de / listen) */}
      {q.kind === "mc" && (
        <div className="fade-up" key={qIndex}>
          <div className="card p-5 text-center mb-3">
            <p className="text-xs font-semibold text-slate-400 mb-2">{TYPE_LABEL[q.type]}</p>
            {q.type === "listen" ? (
              <div className="flex flex-col items-center gap-2 py-2">
                <SpeakerButton text={q.audioText!} size="md" stop={false} />
                <span className="text-xs text-slate-400">다시 들으려면 탭</span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">
                <p className="text-2xl font-bold text-slate-800">{q.promptText}</p>
                {q.type === "de→ko" && <SpeakerButton text={q.german} size="sm" stop={false} />}
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 gap-2">
            {q.options.map((opt) => {
              let cls = "w-full text-left px-4 py-3.5 rounded-xl text-sm font-medium transition-all border ";
              if (selected === null) {
                cls += "border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 text-slate-700";
              } else if (opt === q.answer) {
                cls += "border-emerald-400 bg-emerald-50 text-emerald-700";
              } else if (opt === selected) {
                cls += "border-red-400 bg-red-50 text-red-600 shake";
              } else {
                cls += "border-slate-100 text-slate-300";
              }
              return (
                <button key={opt} className={cls} onClick={() => chooseOption(opt, q.answer)}>
                  {selected !== null && opt === q.answer && <span className="mr-2">✓</span>}
                  {selected === opt && opt !== q.answer && <span className="mr-2">✗</span>}
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 텍스트 입력 (fill / type) */}
      {q.kind === "text" && (() => {
        const correct = selected !== null && normalizeDe(textInput) === normalizeDe(q.answer);
        const wrong = selected !== null && !correct;
        return (
          <div className="fade-up" key={qIndex}>
            <div className="card p-5 text-center mb-3">
              <p className="text-xs font-semibold text-slate-400 mb-2">{TYPE_LABEL[q.type]}</p>
              <p className="text-lg text-slate-500 mb-1">{q.promptKorean}</p>
              {q.type === "fill" && (
                <p className="text-2xl font-bold text-slate-800 tracking-widest">{q.blanked}</p>
              )}
              {showHint && (
                <p className="text-xs text-indigo-400 mt-2">힌트: 첫 글자는 &quot;{q.hint}&quot;</p>
              )}
            </div>
            <div className="flex gap-2">
              <input
                className={`flex-1 border rounded-xl px-4 py-3 text-sm outline-none transition-colors ${
                  selected === null ? "border-slate-200 focus:border-indigo-400" :
                  correct ? "border-emerald-400 bg-emerald-50" : "border-red-400 bg-red-50"
                }`}
                placeholder="독일어 단어 입력..."
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && selected === null && submitText()}
                disabled={selected !== null}
                autoFocus
              />
              {selected === null && (
                <button onClick={submitText} className="btn-primary px-4 py-3 rounded-xl text-sm font-semibold">
                  확인
                </button>
              )}
            </div>
            {selected === null && !showHint && (
              <button onClick={() => setShowHint(true)} className="text-xs text-slate-400 hover:text-indigo-400 self-start mt-2">
                힌트 보기
              </button>
            )}
            {wrong && (
              <p className="text-sm text-red-500 text-center mt-2 flex items-center justify-center gap-2">
                정답: <span className="font-bold">{q.answer}</span>
                <SpeakerButton text={q.german} size="sm" stop={false} />
              </p>
            )}
          </div>
        );
      })()}
    </div>
  );
}
