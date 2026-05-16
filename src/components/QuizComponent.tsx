"use client";
import { useState, useMemo } from "react";
import type { VocabItem, Expression } from "@/types";

type Card = VocabItem | Expression;

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

// ── 문제 유형 ──────────────────────────────────────────────
type QuestionType = "de→ko" | "ko→de" | "fill" | "match";

type Question =
  | { type: "de→ko" | "ko→de"; question: string; answer: string; options: string[] }
  | { type: "fill"; prompt: string; blanked: string; answer: string; hint: string }
  | { type: "match"; pairs: { german: string; korean: string }[]; answers: Record<string, string> };

function buildQuestion(card: Card, allCards: Card[]): Question | null {
  const pool = allCards.filter((c) => c.korean !== card.korean);
  if (pool.length < 3) return null;

  const types: QuestionType[] = ["de→ko", "ko→de", "fill"];
  const type = shuffle(types)[0];

  if (type === "de→ko") {
    const distractors = shuffle(pool).slice(0, 3).map((c) => c.korean);
    return {
      type,
      question: card.german,
      answer: card.korean,
      options: shuffle([card.korean, ...distractors]),
    };
  }

  if (type === "ko→de") {
    const distractors = shuffle(pool).slice(0, 3).map((c) => c.german);
    return {
      type,
      question: card.korean,
      answer: card.german,
      options: shuffle([card.german, ...distractors]),
    };
  }

  // fill: 단어 중간 부분 빈칸
  const word = card.german;
  const mid = Math.floor(word.length / 2);
  const blanked = word.slice(0, mid) + "_".repeat(Math.max(1, word.length - mid));
  return {
    type: "fill",
    prompt: card.korean,
    blanked,
    answer: word,
    hint: word[0],
  };
}

function buildQuestions(cards: Card[]): Question[] {
  if (cards.length < 2) return [];
  const picked = shuffle(cards).slice(0, Math.min(12, cards.length));
  return picked.map((c) => buildQuestion(c, cards)).filter(Boolean) as Question[];
}

// ── 컴포넌트 ───────────────────────────────────────────────
type Props = { cards: Card[]; onComplete: (score: number) => void };

export default function QuizComponent({ cards, onComplete }: Props) {
  const questions = useMemo(() => buildQuestions(cards), [cards]);
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [fillInput, setFillInput] = useState("");
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [showHint, setShowHint] = useState(false);

  if (cards.length < 2) return (
    <div className="flex items-center justify-center h-48 text-slate-400 text-sm">
      퀴즈를 하려면 단어/표현이 2개 이상 필요합니다.
    </div>
  );

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    const emoji = pct >= 90 ? "🏆" : pct >= 70 ? "🎉" : pct >= 50 ? "👍" : "📚";
    return (
      <div className="flex flex-col items-center gap-4 py-8">
        <div className="text-6xl">{emoji}</div>
        <div className="text-center">
          <p className="text-3xl font-black text-slate-800">{pct}점</p>
          <p className="text-slate-400 text-sm mt-1">{score}/{questions.length} 정답</p>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-2 max-w-xs overflow-hidden">
          <div className="h-full bg-blue-500 rounded-full progress-bar" style={{ width: `${pct}%` }} />
        </div>
        <button
          onClick={() => { setQIndex(0); setSelected(null); setFillInput(""); setScore(0); setDone(false); setShowHint(false); }}
          className="mt-2 px-6 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
        >
          다시 풀기
        </button>
      </div>
    );
  }

  const q = questions[qIndex];

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
        setFillInput("");
        setShowHint(false);
      }
    }, 800);
  }

  function chooseOption(opt: string, answer: string) {
    if (selected !== null) return;
    setSelected(opt);
    advance(opt === answer);
  }

  function submitFill() {
    if (selected !== null) return;
    const q2 = q as Extract<Question, { type: "fill" }>;
    const correct = fillInput.trim().toLowerCase() === q2.answer.toLowerCase();
    setSelected(fillInput || "__");
    advance(correct);
  }

  const pct = Math.round((qIndex / questions.length) * 100);

  return (
    <div className="flex flex-col gap-5">
      {/* Progress */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500 rounded-full progress-bar" style={{ width: `${pct}%` }} />
        </div>
        <span className="text-xs text-slate-400">{qIndex + 1}/{questions.length}</span>
      </div>

      {/* Multiple choice */}
      {(q.type === "de→ko" || q.type === "ko→de") && (
        <>
          <div className="card p-5 text-center border border-slate-100">
            <p className="text-xs font-semibold text-slate-400 mb-2">
              {q.type === "de→ko" ? "🇩🇪 독일어 → 한국어" : "🇰🇷 한국어 → 독일어"}
            </p>
            <p className="text-2xl font-bold text-slate-800">{q.question}</p>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {q.options.map((opt) => {
              let cls = "w-full text-left px-4 py-3.5 rounded-xl text-sm font-medium transition-all border ";
              if (selected === null) {
                cls += "border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-700";
              } else if (opt === q.answer) {
                cls += "border-emerald-400 bg-emerald-50 text-emerald-700";
              } else if (opt === selected) {
                cls += "border-red-400 bg-red-50 text-red-600";
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
        </>
      )}

      {/* Fill in the blank */}
      {q.type === "fill" && (() => {
        const fq = q as Extract<Question, { type: "fill" }>;
        const correct = selected !== null && fillInput.trim().toLowerCase() === fq.answer.toLowerCase();
        const wrong = selected !== null && !correct;
        return (
          <>
            <div className="card p-5 text-center border border-slate-100">
              <p className="text-xs font-semibold text-slate-400 mb-2">✏️ 빈칸을 채우세요</p>
              <p className="text-lg text-slate-500 mb-1">{fq.prompt}</p>
              <p className="text-2xl font-bold text-slate-800 tracking-widest">{fq.blanked}</p>
              {showHint && (
                <p className="text-xs text-blue-400 mt-2">힌트: 첫 글자는 &quot;{fq.hint}&quot;</p>
              )}
            </div>
            <div className="flex gap-2">
              <input
                className={`flex-1 border rounded-xl px-4 py-3 text-sm outline-none transition-colors ${
                  selected === null ? "border-slate-200 focus:border-blue-400" :
                  correct ? "border-emerald-400 bg-emerald-50" : "border-red-400 bg-red-50"
                }`}
                placeholder="독일어 단어 입력..."
                value={fillInput}
                onChange={(e) => setFillInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && selected === null && submitFill()}
                disabled={selected !== null}
                autoFocus
              />
              {selected === null && (
                <button
                  onClick={submitFill}
                  className="px-4 py-3 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
                >
                  확인
                </button>
              )}
            </div>
            {selected === null && !showHint && (
              <button onClick={() => setShowHint(true)} className="text-xs text-slate-400 hover:text-blue-400 self-start">
                힌트 보기
              </button>
            )}
            {wrong && (
              <p className="text-sm text-red-500 text-center">
                정답: <span className="font-bold">{fq.answer}</span>
              </p>
            )}
          </>
        );
      })()}
    </div>
  );
}
