"use client";
import { useState } from "react";
import type { VocabItem, Expression } from "@/types";

type Card = VocabItem | Expression;

type Props = {
  cards: Card[];
  known: number[];
  onKnownChange: (known: number[]) => void;
};

export default function FlashCard({ cards, known, onKnownChange }: Props) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [showAll, setShowAll] = useState(false);
  // "ko→de" = 한국어가 앞, "de→ko" = 독일어가 앞
  const [direction, setDirection] = useState<"de→ko" | "ko→de">("de→ko");

  const displayCards = showAll ? cards : cards.filter((_, i) => !known.includes(i));
  const total = displayCards.length;

  if (cards.length === 0) return (
    <div className="flex items-center justify-center h-48 text-slate-400 text-sm">
      이 강에는 플래시카드 항목이 없습니다.
    </div>
  );

  if (total === 0) return (
    <div className="flex flex-col items-center gap-4 py-10">
      <div className="text-5xl">🎉</div>
      <p className="font-bold text-slate-700">모든 카드를 알고 있어요!</p>
      <button
        onClick={() => { setShowAll(true); setIndex(0); setFlipped(false); }}
        className="text-sm text-blue-500 underline"
      >
        처음부터 다시
      </button>
    </div>
  );

  const card = displayCards[Math.min(index, total - 1)];
  const realIndex = cards.indexOf(card);

  const front = direction === "de→ko" ? card.german : card.korean;
  const back  = direction === "de→ko" ? card.korean : card.german;
  const frontLabel = direction === "de→ko" ? "DE" : "KO";
  const backLabel  = direction === "de→ko" ? "KO" : "DE";
  const note = (card as Expression).note;

  function go(delta: number) {
    setFlipped(false);
    setTimeout(() => setIndex((i) => (i + delta + total) % total), 150);
  }

  function markKnown() {
    const newKnown = [...new Set([...known, realIndex])];
    onKnownChange(newKnown);
    go(1);
  }

  function markUnknown() {
    onKnownChange(known.filter((i) => i !== realIndex));
    go(1);
  }

  function toggleDirection() {
    setFlipped(false);
    setDirection((d) => (d === "de→ko" ? "ko→de" : "de→ko"));
  }

  const isKnown = known.includes(realIndex);

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Controls row */}
      <div className="w-full flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span>{Math.min(index + 1, total)} / {total}</span>
          {known.length > 0 && !showAll && (
            <span className="text-emerald-500 font-medium">{known.length}개 숙지</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {/* 방향 전환 버튼 */}
          <button
            onClick={toggleDirection}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium"
          >
            <span>{direction}</span>
            <span>⇄</span>
          </button>
          <button
            onClick={() => { setShowAll(!showAll); setIndex(0); setFlipped(false); }}
            className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            {showAll ? "모르는 것만" : "전체 보기"}
          </button>
        </div>
      </div>

      {/* Card */}
      <div
        className="flip-card w-full max-w-sm h-52 cursor-pointer select-none"
        onClick={() => setFlipped((f) => !f)}
      >
        <div className={`flip-inner w-full h-full ${flipped ? "flipped" : ""}`}>
          {/* Front */}
          <div className="flip-face absolute inset-0 card flex flex-col items-center justify-center gap-2 p-6 border-2 border-slate-100">
            <span className="absolute top-3 left-4 text-xs font-bold text-slate-300">{frontLabel}</span>
            {isKnown && <span className="absolute top-3 right-4 text-xs text-emerald-400 font-medium">✓ 숙지</span>}
            <p className="text-2xl font-bold text-slate-800 text-center leading-snug">{front}</p>
            <p className="text-xs text-slate-300 mt-1">탭해서 뒤집기</p>
          </div>
          {/* Back */}
          <div className="flip-face flip-back absolute inset-0 rounded-2xl flex flex-col items-center justify-center gap-2 p-6 bg-blue-600">
            <span className="absolute top-3 left-4 text-xs font-bold text-blue-300">{backLabel}</span>
            <p className="text-2xl font-bold text-white text-center leading-snug">{back}</p>
            {note && <p className="text-xs text-blue-200 bg-blue-500/50 px-2 py-0.5 rounded-md">{note}</p>}
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-2 w-full max-w-sm">
        <button
          onClick={() => go(-1)}
          className="flex-1 py-2.5 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors text-sm font-medium"
        >
          ←
        </button>
        <button
          onClick={markUnknown}
          className="flex-1 py-2.5 rounded-xl bg-red-50 text-red-500 hover:bg-red-100 transition-colors text-sm font-semibold border border-red-100"
        >
          모름
        </button>
        <button
          onClick={markKnown}
          className="flex-1 py-2.5 rounded-xl bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors text-sm font-semibold border border-emerald-100"
        >
          알아요
        </button>
        <button
          onClick={() => go(1)}
          className="flex-1 py-2.5 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors text-sm font-medium"
        >
          →
        </button>
      </div>
    </div>
  );
}
