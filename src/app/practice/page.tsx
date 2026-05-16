"use client";
import { useState } from "react";
import { curriculum, getLektionsByBand, BAND_TITLES, TOTAL_BANDS } from "@/data/curriculum";
import FlashCard from "@/components/FlashCard";
import QuizComponent from "@/components/QuizComponent";
import { saveQuizScore } from "@/lib/storage";

type Mode = "select" | "flashcard" | "quiz";

const BAND_COLORS: Record<number, string> = {
  1: "bg-blue-500", 2: "bg-cyan-500", 3: "bg-teal-500", 4: "bg-emerald-500",
  5: "bg-amber-500", 6: "bg-orange-500", 7: "bg-rose-500", 8: "bg-violet-500",
};
const BAND_TEXT: Record<number, string> = {
  1: "text-blue-600", 2: "text-cyan-600", 3: "text-teal-600", 4: "text-emerald-600",
  5: "text-amber-600", 6: "text-orange-600", 7: "text-rose-600", 8: "text-violet-600",
};
const BAND_LIGHT: Record<number, string> = {
  1: "bg-blue-50", 2: "bg-cyan-50", 3: "bg-teal-50", 4: "bg-emerald-50",
  5: "bg-amber-50", 6: "bg-orange-50", 7: "bg-rose-50", 8: "bg-violet-50",
};

export default function PracticePage() {
  const [mode, setMode] = useState<Mode>("select");
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());
  const [expandedBand, setExpandedBand] = useState<number | null>(1);
  const [practiceType, setPracticeType] = useState<"flashcard" | "quiz">("flashcard");
  const [flashcardKnown, setFlashcardKnown] = useState<number[]>([]);

  const allCards = curriculum
    .filter((l) => selectedIds.has(l.id))
    .flatMap((l) => [...l.expressions, ...l.vocabulary]);

  function toggleLektion(id: number) {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function toggleBand(band: number) {
    const ids = getLektionsByBand(band).map((l) => l.id);
    const allSelected = ids.every((id) => selectedIds.has(id));
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (allSelected) ids.forEach((id) => next.delete(id));
      else ids.forEach((id) => next.add(id));
      return next;
    });
  }

  function selectAll() {
    setSelectedIds(new Set(curriculum.map((l) => l.id)));
  }
  function clearAll() {
    setSelectedIds(new Set());
  }

  if (mode !== "select") {
    return (
      <div className="flex flex-col gap-4">
        <button
          onClick={() => setMode("select")}
          className="text-sm text-slate-400 hover:text-blue-500 transition-colors w-fit"
        >
          ← 범위 선택으로
        </button>

        <div className="card p-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-400">선택한 범위</p>
            <p className="text-sm font-bold text-slate-800">
              {selectedIds.size}개 강 · {allCards.length}개 카드
            </p>
          </div>
          <span className={`text-xs px-2.5 py-1 rounded-lg font-semibold ${
            practiceType === "flashcard"
              ? "bg-blue-50 text-blue-600"
              : "bg-violet-50 text-violet-600"
          }`}>
            {practiceType === "flashcard" ? "🃏 플래시카드" : "📝 퀴즈"}
          </span>
        </div>

        <div className="card p-5">
          {mode === "flashcard" && (
            <FlashCard
              cards={allCards}
              known={flashcardKnown}
              onKnownChange={setFlashcardKnown}
            />
          )}
          {mode === "quiz" && (
            <QuizComponent
              cards={allCards}
              onComplete={(score) => {
                Array.from(selectedIds).forEach((id) => saveQuizScore(id, score));
              }}
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-xl font-black text-slate-900">묶음 연습</h1>
          <p className="text-sm text-slate-400 mt-0.5">원하는 강을 골라서 한번에 연습하세요</p>
        </div>
        <div className="flex gap-1.5 text-xs">
          <button onClick={selectAll} className="px-2.5 py-1.5 rounded-lg bg-slate-100 text-slate-500 hover:bg-slate-200">전체 선택</button>
          <button onClick={clearAll} className="px-2.5 py-1.5 rounded-lg bg-slate-100 text-slate-500 hover:bg-slate-200">초기화</button>
        </div>
      </div>

      {/* Practice type */}
      <div className="flex gap-2">
        {(["flashcard", "quiz"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setPracticeType(t)}
            className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              practiceType === t
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-white text-slate-400 border border-slate-200 hover:border-blue-300 hover:text-blue-500"
            }`}
          >
            {t === "flashcard" ? "🃏 플래시카드" : "📝 퀴즈"}
          </button>
        ))}
      </div>

      {/* Band accordion */}
      <div className="flex flex-col gap-2">
        {Array.from({ length: TOTAL_BANDS }, (_, i) => i + 1).map((band) => {
          const lektions = getLektionsByBand(band);
          const selCount = lektions.filter((l) => selectedIds.has(l.id)).length;
          const allSel = selCount === lektions.length;
          const isOpen = expandedBand === band;

          return (
            <div key={band} className="card overflow-hidden border border-slate-100">
              {/* Band header */}
              <div
                className="flex items-center gap-3 p-3.5 cursor-pointer hover:bg-slate-50 transition-colors"
                onClick={() => setExpandedBand(isOpen ? null : band)}
              >
                <div className={`${BAND_COLORS[band]} w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white text-xs font-black">{band}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-semibold text-slate-800">{BAND_TITLES[band]}</span>
                  {selCount > 0 && (
                    <span className={`ml-2 text-xs font-medium ${BAND_TEXT[band]}`}>
                      {selCount}/{lektions.length} 선택
                    </span>
                  )}
                </div>
                {/* Band select all toggle */}
                <button
                  onClick={(e) => { e.stopPropagation(); toggleBand(band); }}
                  className={`text-xs px-2.5 py-1 rounded-lg font-medium transition-colors ${
                    allSel
                      ? `${BAND_LIGHT[band]} ${BAND_TEXT[band]}`
                      : "bg-slate-100 text-slate-400 hover:bg-slate-200"
                  }`}
                >
                  {allSel ? "전체 해제" : "전체 선택"}
                </button>
                <span className="text-slate-300 text-sm transition-transform" style={{ transform: isOpen ? "rotate(90deg)" : "" }}>›</span>
              </div>

              {/* Lektion list */}
              {isOpen && (
                <div className="border-t border-slate-50 p-3 flex flex-col gap-1.5">
                  {lektions.map((l) => {
                    const sel = selectedIds.has(l.id);
                    const cardCount = l.expressions.length + l.vocabulary.length;
                    return (
                      <button
                        key={l.id}
                        onClick={() => toggleLektion(l.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all ${
                          sel
                            ? `${BAND_LIGHT[band]} border border-current ${BAND_TEXT[band]}`
                            : "hover:bg-slate-50 border border-transparent text-slate-600"
                        }`}
                      >
                        {/* Checkbox */}
                        <div className={`w-4.5 h-4.5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                          sel ? `border-current bg-current` : "border-slate-300"
                        }`}>
                          {sel && <span className="text-white text-xs leading-none">✓</span>}
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-xs font-bold opacity-50">L{String(l.id).padStart(2, "0")}</span>
                          <span className="text-sm font-medium ml-1.5">{l.title}</span>
                          {l.subtitle && <span className="text-xs opacity-60 ml-1">— {l.subtitle}</span>}
                        </div>
                        {cardCount > 0 && (
                          <span className="text-xs opacity-50 flex-shrink-0">{cardCount}개</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Floating start button */}
      <div className="sticky bottom-4 pt-2">
        <button
          onClick={() => { setFlashcardKnown([]); setMode(practiceType); }}
          disabled={allCards.length < 2}
          className={`w-full py-4 rounded-2xl text-sm font-bold transition-all shadow-lg ${
            allCards.length >= 2
              ? "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200"
              : "bg-slate-200 text-slate-400 cursor-not-allowed shadow-none"
          }`}
        >
          {allCards.length >= 2
            ? `${practiceType === "flashcard" ? "🃏 플래시카드" : "📝 퀴즈"} 시작 — ${selectedIds.size}강 / ${allCards.length}카드`
            : "강의를 2개 이상 선택하세요"}
        </button>
      </div>
    </div>
  );
}
