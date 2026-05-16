"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { getLektionById } from "@/data/curriculum";
import {
  getLektionProgress,
  toggleCompleted,
  toggleVideoWatched,
  saveNote,
  saveFlashcardKnown,
  saveQuizScore,
} from "@/lib/storage";
import FlashCard from "@/components/FlashCard";
import QuizComponent from "@/components/QuizComponent";
import type { LektionProgress } from "@/types";

type Tab = "표현" | "플래시카드" | "퀴즈" | "메모";
const TABS: Tab[] = ["표현", "플래시카드", "퀴즈", "메모"];

export default function LektionPage() {
  const { id } = useParams();
  const lektionId = Number(id);
  const lektion = getLektionById(lektionId);

  const [tab, setTab] = useState<Tab>("표현");
  const [prog, setProg] = useState<LektionProgress>({
    completed: false,
    videoWatched: false,
    note: "",
    flashcardKnown: [],
    quizScore: 0,
  });
  const noteRef = useRef<HTMLTextAreaElement>(null);
  const [noteDraft, setNoteDraft] = useState("");
  const [noteSaved, setNoteSaved] = useState(false);

  useEffect(() => {
    const p = getLektionProgress(lektionId);
    setProg(p);
    setNoteDraft(p.note);
  }, [lektionId]);

  if (!lektion) {
    return (
      <div className="text-center py-20 text-gray-400">
        Lektion을 찾을 수 없습니다.
      </div>
    );
  }

  const allCards = [...lektion.expressions, ...lektion.vocabulary];

  function handleToggleCompleted() {
    toggleCompleted(lektionId);
    setProg((p) => ({ ...p, completed: !p.completed }));
  }

  function handleToggleVideo() {
    toggleVideoWatched(lektionId);
    setProg((p) => ({ ...p, videoWatched: !p.videoWatched }));
  }

  function handleKnownChange(known: number[]) {
    saveFlashcardKnown(lektionId, known);
    setProg((p) => ({ ...p, flashcardKnown: known }));
  }

  function handleQuizComplete(score: number) {
    saveQuizScore(lektionId, score);
    setProg((p) => ({ ...p, quizScore: Math.max(p.quizScore, score) }));
  }

  function handleSaveNote() {
    saveNote(lektionId, noteDraft);
    setProg((p) => ({ ...p, note: noteDraft }));
    setNoteSaved(true);
    setTimeout(() => setNoteSaved(false), 1500);
  }

  const prevId = lektionId > 1 ? lektionId - 1 : null;
  const nextId = lektionId < 56 ? lektionId + 1 : null;

  return (
    <div className="flex flex-col gap-4">
      {/* Back */}
      <Link href={`/band/${lektion.band}`} className="text-gray-400 hover:text-gray-600 text-sm w-fit">
        ← BAND {lektion.band}
      </Link>

      {/* Header */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs text-gray-400 font-medium">Lektion {String(lektionId).padStart(2, "0")}</p>
            <h1 className="text-lg font-black text-gray-800 mt-0.5">
              {lektion.title}
              {lektion.subtitle && (
                <span className="text-gray-400 font-normal text-base ml-1">— {lektion.subtitle}</span>
              )}
            </h1>
          </div>
          <button
            onClick={handleToggleCompleted}
            className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              prog.completed
                ? "bg-green-100 text-green-600"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
          >
            {prog.completed ? "✓ 완료" : "완료 체크"}
          </button>
        </div>

        {/* Status row */}
        <div className="flex items-center gap-3 mt-3">
          <button
            onClick={handleToggleVideo}
            className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg transition-colors ${
              prog.videoWatched
                ? "bg-purple-100 text-purple-600"
                : "bg-gray-100 text-gray-400 hover:bg-gray-200"
            }`}
          >
            ▶ 영상 {prog.videoWatched ? "시청 완료" : "시청 전"}
          </button>
          {prog.quizScore > 0 && (
            <span className="text-xs text-blue-500 bg-blue-50 px-2.5 py-1 rounded-lg">
              퀴즈 최고 {prog.quizScore}점
            </span>
          )}
          {prog.flashcardKnown.length > 0 && (
            <span className="text-xs text-green-500 bg-green-50 px-2.5 py-1 rounded-lg">
              플래시카드 {prog.flashcardKnown.length}개 숙지
            </span>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-gray-100 rounded-xl p-1">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
              tab === t
                ? "bg-white text-gray-800 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
        {tab === "표현" && (
          <div className="flex flex-col gap-6">
            {/* Expressions */}
            {lektion.expressions.length > 0 && (
              <section>
                <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">핵심 표현</h2>
                <div className="flex flex-col divide-y divide-gray-50">
                  {lektion.expressions.map((expr, i) => (
                    <div key={i} className="py-3 flex items-start gap-3">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800">{expr.german}</p>
                        <p className="text-gray-500 text-sm mt-0.5">{expr.korean}</p>
                      </div>
                      {expr.note && (
                        <span className="text-xs text-blue-400 bg-blue-50 px-2 py-0.5 rounded-md flex-shrink-0">
                          {expr.note}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Vocabulary */}
            {lektion.vocabulary.length > 0 && (
              <section>
                <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">단어</h2>
                <div className="grid grid-cols-2 gap-2">
                  {lektion.vocabulary.map((v, i) => (
                    <div key={i} className="bg-gray-50 rounded-lg p-3">
                      <p className="font-semibold text-gray-800 text-sm">{v.german}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{v.korean}</p>
                      {v.example && (
                        <p className="text-gray-400 text-xs mt-1 italic">{v.example}</p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Conversations */}
            {lektion.conversations.length > 0 && (
              <section>
                <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">실전 회화</h2>
                <div className="flex flex-col gap-4">
                  {lektion.conversations.map((conv, ci) => (
                    <div key={ci} className="bg-gray-50 rounded-xl p-4 flex flex-col gap-2">
                      {conv.map((line, li) => (
                        <div
                          key={li}
                          className={`flex gap-2 ${line.speaker === "B" ? "flex-row-reverse" : ""}`}
                        >
                          <span
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                              line.speaker === "A"
                                ? "bg-blue-100 text-blue-600"
                                : "bg-gray-200 text-gray-600"
                            }`}
                          >
                            {line.speaker}
                          </span>
                          <div className={`max-w-[80%] ${line.speaker === "B" ? "items-end" : "items-start"} flex flex-col gap-0.5`}>
                            <div
                              className={`px-3 py-2 rounded-xl text-sm ${
                                line.speaker === "A"
                                  ? "bg-blue-500 text-white"
                                  : "bg-white border border-gray-200 text-gray-800"
                              }`}
                            >
                              {line.german}
                            </div>
                            <p className="text-xs text-gray-400 px-1">{line.korean}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Grammar Notes */}
            {lektion.grammarNotes.length > 0 && (
              <section>
                <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">문법 노트</h2>
                <div className="flex flex-col gap-2">
                  {lektion.grammarNotes.map((note, i) => (
                    <div key={i} className="border border-yellow-100 bg-yellow-50 rounded-xl p-4">
                      <p className="text-xs font-bold text-yellow-700 mb-1">{note.title}</p>
                      <p className="text-sm text-gray-700">{note.content}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {lektion.expressions.length === 0 && lektion.vocabulary.length === 0 && (
              <p className="text-center text-gray-400 text-sm py-8">내용을 준비 중입니다.</p>
            )}
          </div>
        )}

        {tab === "플래시카드" && (
          <FlashCard
            cards={allCards}
            known={prog.flashcardKnown}
            onKnownChange={handleKnownChange}
          />
        )}

        {tab === "퀴즈" && (
          <QuizComponent cards={allCards} onComplete={handleQuizComplete} />
        )}

        {tab === "메모" && (
          <div className="flex flex-col gap-3">
            <p className="text-xs text-gray-400">이 강의 메모를 남겨보세요.</p>
            <textarea
              ref={noteRef}
              value={noteDraft}
              onChange={(e) => setNoteDraft(e.target.value)}
              className="w-full h-48 border border-gray-200 rounded-xl p-3 text-sm text-gray-700 resize-none focus:outline-none focus:border-blue-300"
              placeholder="메모를 입력하세요..."
            />
            <button
              onClick={handleSaveNote}
              className="self-end px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors"
            >
              {noteSaved ? "저장됨 ✓" : "저장"}
            </button>
          </div>
        )}
      </div>

      {/* Prev / Next nav */}
      <div className="flex items-center justify-between pb-4">
        {prevId ? (
          <Link
            href={`/lektion/${prevId}`}
            className="text-sm text-gray-400 hover:text-blue-500 transition-colors"
          >
            ← Lektion {String(prevId).padStart(2, "0")}
          </Link>
        ) : (
          <span />
        )}
        {nextId ? (
          <Link
            href={`/lektion/${nextId}`}
            className="text-sm text-gray-400 hover:text-blue-500 transition-colors"
          >
            Lektion {String(nextId).padStart(2, "0")} →
          </Link>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}
