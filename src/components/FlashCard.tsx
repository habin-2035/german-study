"use client";
import { useState } from "react";
import type { VocabItem, Expression } from "@/types";

type Card = VocabItem | Expression;

function isVocab(card: Card): card is VocabItem {
  return "example" in card || !("note" in card) || true;
}

function getFront(card: Card): string {
  return card.german;
}

function getBack(card: Card): string {
  return card.korean + ((card as Expression).note ? `\n(${(card as Expression).note})` : "");
}

type Props = {
  cards: Card[];
  known: number[];
  onKnownChange: (known: number[]) => void;
};

export default function FlashCard({ cards, known, onKnownChange }: Props) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const displayCards = showAll ? cards : cards.filter((_, i) => !known.includes(i));
  const total = displayCards.length;

  if (cards.length === 0) {
    return (
      <div className="flex items-center justify-center h-48 text-gray-400 text-sm">
        이 강에는 플래시카드 항목이 없습니다.
      </div>
    );
  }

  if (total === 0) {
    return (
      <div className="flex flex-col items-center gap-4 py-8">
        <div className="text-4xl">🎉</div>
        <p className="text-gray-600 font-medium">모든 카드를 알고 있어요!</p>
        <button
          onClick={() => { setShowAll(true); setIndex(0); setFlipped(false); }}
          className="text-sm text-blue-500 underline"
        >
          처음부터 다시
        </button>
      </div>
    );
  }

  const card = displayCards[Math.min(index, total - 1)];
  const realIndex = cards.indexOf(card);

  function next() {
    setFlipped(false);
    setTimeout(() => setIndex((i) => (i + 1) % total), 150);
  }

  function prev() {
    setFlipped(false);
    setTimeout(() => setIndex((i) => (i - 1 + total) % total), 150);
  }

  function markKnown() {
    const newKnown = [...new Set([...known, realIndex])];
    onKnownChange(newKnown);
    next();
  }

  function markUnknown() {
    const newKnown = known.filter((i) => i !== realIndex);
    onKnownChange(newKnown);
    next();
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <span>{Math.min(index + 1, total)} / {total}</span>
        {!showAll && known.length > 0 && (
          <span className="text-green-600">({known.length}개 알고 있음)</span>
        )}
        <button
          onClick={() => { setShowAll(!showAll); setIndex(0); setFlipped(false); }}
          className="ml-2 text-xs text-blue-500 underline"
        >
          {showAll ? "모르는 것만 보기" : "전체 보기"}
        </button>
      </div>

      {/* Card */}
      <div
        className="w-full max-w-sm h-44 cursor-pointer"
        style={{ perspective: "1000px" }}
        onClick={() => setFlipped((f) => !f)}
      >
        <div
          className="relative w-full h-full transition-transform duration-500"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-white border-2 border-blue-100 shadow-md p-6"
            style={{ backfaceVisibility: "hidden" }}
          >
            <p className="text-2xl font-bold text-gray-800 text-center">{getFront(card)}</p>
            <p className="text-xs text-gray-400 mt-3">탭하면 뒤집기</p>
          </div>
          {/* Back */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-blue-50 border-2 border-blue-200 shadow-md p-6"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <p className="text-xl font-semibold text-blue-800 text-center whitespace-pre-line">{getBack(card)}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-3">
        <button
          onClick={prev}
          className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm"
        >
          ← 이전
        </button>
        <button
          onClick={markUnknown}
          className="px-4 py-2 rounded-lg bg-red-50 border border-red-200 text-red-600 hover:bg-red-100 text-sm"
        >
          ✗ 모름
        </button>
        <button
          onClick={markKnown}
          className="px-4 py-2 rounded-lg bg-green-50 border border-green-200 text-green-600 hover:bg-green-100 text-sm"
        >
          ✓ 알아요
        </button>
        <button
          onClick={next}
          className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm"
        >
          다음 →
        </button>
      </div>
    </div>
  );
}
