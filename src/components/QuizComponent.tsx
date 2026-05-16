"use client";
import { useState, useMemo } from "react";
import type { VocabItem, Expression } from "@/types";

type Card = VocabItem | Expression;

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

type Question = {
  question: string;
  answer: string;
  options: string[];
};

function buildQuestions(cards: Card[]): Question[] {
  if (cards.length < 2) return [];
  const all = shuffle(cards).slice(0, Math.min(10, cards.length));
  return all.map((card) => {
    const correct = card.korean;
    const distractors = shuffle(cards.filter((c) => c.korean !== correct))
      .slice(0, 3)
      .map((c) => c.korean);
    const options = shuffle([correct, ...distractors]);
    return { question: card.german, answer: correct, options };
  });
}

type Props = {
  cards: Card[];
  onComplete: (score: number) => void;
};

export default function QuizComponent({ cards, onComplete }: Props) {
  const questions = useMemo(() => buildQuestions(cards), [cards]);
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  if (cards.length < 2) {
    return (
      <div className="flex items-center justify-center h-48 text-gray-400 text-sm">
        퀴즈를 하려면 단어/표현이 2개 이상 필요합니다.
      </div>
    );
  }

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="flex flex-col items-center gap-4 py-8">
        <div className="text-5xl">{pct >= 80 ? "🏆" : pct >= 50 ? "👍" : "📚"}</div>
        <p className="text-xl font-bold text-gray-800">
          {score} / {questions.length} 정답
        </p>
        <p className="text-2xl font-bold text-blue-600">{pct}점</p>
        <button
          onClick={() => {
            setQIndex(0);
            setSelected(null);
            setScore(0);
            setDone(false);
          }}
          className="mt-2 px-6 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600"
        >
          다시 풀기
        </button>
      </div>
    );
  }

  const q = questions[qIndex];

  function choose(option: string) {
    if (selected !== null) return;
    setSelected(option);
    const correct = option === q.answer;
    if (correct) setScore((s) => s + 1);
    setTimeout(() => {
      if (qIndex + 1 >= questions.length) {
        const finalScore = score + (correct ? 1 : 0);
        onComplete(Math.round((finalScore / questions.length) * 100));
        setDone(true);
      } else {
        setQIndex((i) => i + 1);
        setSelected(null);
      }
    }, 900);
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>문제 {qIndex + 1} / {questions.length}</span>
        <span className="text-green-600">{score}점</span>
      </div>

      <div className="bg-blue-50 rounded-xl p-5 text-center">
        <p className="text-xs text-gray-400 mb-2">다음 독일어의 뜻은?</p>
        <p className="text-2xl font-bold text-gray-800">{q.question}</p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {q.options.map((opt) => {
          let cls =
            "w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-colors ";
          if (selected === null) {
            cls += "border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700";
          } else if (opt === q.answer) {
            cls += "border-green-400 bg-green-50 text-green-700";
          } else if (opt === selected) {
            cls += "border-red-400 bg-red-50 text-red-700";
          } else {
            cls += "border-gray-100 text-gray-400";
          }
          return (
            <button key={opt} className={cls} onClick={() => choose(opt)}>
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
