// 의존성 없는 파일 (검증 스크립트에서도 그대로 불러 씀)

/** 문장을 단어로 나눈다. 앞뒤 문장부호는 떼고, 부호만 있는 토큰(… / 등)은 버린다 */
export function tokenize(sentence: string): string[] {
  return sentence
    .split(/\s+/)
    .map((t) => {
      let w = t.replace(/^[.,!?;:"„“”'’(…/]+|[.,!?;:"„“”'’)…/]+$/g, "");
      // Lehrer(in) 처럼 단어 안의 괄호는 유지
      if (w.includes("(") && !w.includes(")")) w += ")";
      return w;
    })
    .filter((t) => t.length > 0 && !/^\.+$/.test(t));
}
