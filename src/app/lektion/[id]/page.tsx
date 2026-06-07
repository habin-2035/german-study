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
import SpeakerButton from "@/components/SpeakerButton";
import type { LektionProgress } from "@/types";

type Tab = "표현" | "플래시카드" | "퀴즈" | "메모";
const TABS: Tab[] = ["표현", "플래시카드", "퀴즈", "메모"];

export default function LektionPage() {
  const { id } = useParams();
  const lektionId = Number(id);
  const lektion = getLektionById(lektionId);
  const [tab, setTab] = useState<Tab>("표현");
  const [prog, setProg] = useState<LektionProgress>({
    completed: false, videoWatched: false, note: "",
    flashcardKnown: [], quizScore: 0,
  });
  const [noteDraft, setNoteDraft] = useState("");
  const [noteSaved, setNoteSaved] = useState(false);

  useEffect(() => {
    const p = getLektionProgress(lektionId);
    setProg(p);
    setNoteDraft(p.note);
  }, [lektionId]);

  if (!lektion) return (
    <div className="text-center py-20 text-slate-400">Lektion을 찾을 수 없습니다.</div>
  );

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
      <Link href={`/band/${lektion.band}`} className="text-sm text-slate-400 hover:text-indigo-500 transition-colors w-fit">
        ← BAND {lektion.band}
      </Link>

      {/* Header card */}
      <div className="card p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-slate-400 tracking-widest">
              LEKTION {String(lektionId).padStart(2, "0")}
            </p>
            <h1 className="text-xl font-black text-slate-900 mt-0.5 leading-tight">
              {lektion.title}
            </h1>
            {lektion.subtitle && (
              <p className="text-slate-400 text-sm mt-0.5">{lektion.subtitle}</p>
            )}
          </div>
          <button
            onClick={handleToggleCompleted}
            className={`flex-shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              prog.completed
                ? "bg-emerald-100 text-emerald-600"
                : "bg-slate-100 text-slate-500 hover:bg-slate-200"
            }`}
          >
            {prog.completed ? "✓ 완료" : "완료 체크"}
          </button>
        </div>

        {/* Status badges */}
        <div className="flex flex-wrap items-center gap-2 mt-3">
          <button
            onClick={handleToggleVideo}
            className={`flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-lg font-medium transition-all ${
              prog.videoWatched
                ? "bg-violet-100 text-violet-600"
                : "bg-slate-100 text-slate-400 hover:bg-slate-200"
            }`}
          >
            ▶ {prog.videoWatched ? "영상 시청 완료" : "영상 미시청"}
          </button>
          {prog.quizScore > 0 && (
            <span className="text-xs text-indigo-500 bg-indigo-50 px-2.5 py-1.5 rounded-lg font-medium">
              📝 최고 {prog.quizScore}점
            </span>
          )}
          {prog.flashcardKnown.length > 0 && (
            <span className="text-xs text-emerald-600 bg-emerald-50 px-2.5 py-1.5 rounded-lg font-medium">
              🃏 {prog.flashcardKnown.length}개 숙지
            </span>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-slate-100 rounded-2xl p-1">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-all ${
              tab === t
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="card p-5">
        {tab === "표현" && (
          <div className="flex flex-col gap-6">
            {lektion.expressions.length > 0 && (
              <section>
                <h2 className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-3">핵심 표현</h2>
                <div className="flex flex-col gap-0.5">
                  {lektion.expressions.map((expr, i) => (
                    <div key={i} className="flex items-start gap-3 py-3 border-b border-slate-50 last:border-0">
                      <SpeakerButton text={expr.german} size="sm" />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-slate-800">{expr.german}</p>
                        <p className="text-slate-500 text-sm mt-0.5">{expr.korean}</p>
                      </div>
                      {expr.note && (
                        <span className="text-xs text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded-lg flex-shrink-0">
                          {expr.note}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {lektion.vocabulary.length > 0 && (
              <section>
                <h2 className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-3">단어</h2>
                <div className="grid grid-cols-2 gap-2">
                  {lektion.vocabulary.map((v, i) => (
                    <div key={i} className="bg-slate-50 rounded-xl p-3 hover:bg-indigo-50 transition-colors flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="font-semibold text-slate-800 text-sm">{v.german}</p>
                        <p className="text-slate-400 text-xs mt-0.5">{v.korean}</p>
                      </div>
                      <SpeakerButton text={v.german} size="sm" />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {lektion.conversations.length > 0 && (
              <section>
                <h2 className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-3">실전 회화</h2>
                <div className="flex flex-col gap-4">
                  {lektion.conversations.map((conv, ci) => (
                    <div key={ci} className="bg-slate-50 rounded-2xl p-4 flex flex-col gap-3">
                      {conv.map((line, li) => (
                        <div key={li} className={`flex gap-2 ${line.speaker === "B" ? "flex-row-reverse" : ""}`}>
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                            line.speaker === "A" ? "bg-indigo-600 text-white" : "bg-slate-200 text-slate-600"
                          }`}>
                            {line.speaker}
                          </div>
                          <div className={`max-w-[78%] flex flex-col gap-0.5 ${line.speaker === "B" ? "items-end" : "items-start"}`}>
                            <div className={`flex items-center gap-1.5 ${line.speaker === "B" ? "flex-row-reverse" : ""}`}>
                              <div className={`px-3.5 py-2 rounded-2xl text-sm ${
                                line.speaker === "A"
                                  ? "bg-indigo-600 text-white rounded-tl-sm"
                                  : "bg-white border border-slate-200 text-slate-800 rounded-tr-sm"
                              }`}>
                                {line.german}
                              </div>
                              <SpeakerButton text={line.german} size="sm" />
                            </div>
                            <p className="text-xs text-slate-400 px-1">{line.korean}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {lektion.grammarNotes.length > 0 && (
              <section>
                <h2 className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-3">문법 노트</h2>
                <div className="flex flex-col gap-2">
                  {lektion.grammarNotes.map((note, i) => (
                    <div key={i} className="border-l-4 border-amber-400 bg-amber-50 rounded-r-xl px-4 py-3">
                      <p className="text-xs font-bold text-amber-700 mb-1">{note.title}</p>
                      <p className="text-sm text-slate-700">{note.content}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {lektion.expressions.length === 0 && lektion.vocabulary.length === 0 && (
              <p className="text-center text-slate-400 text-sm py-8">내용을 준비 중입니다.</p>
            )}
          </div>
        )}

        {tab === "플래시카드" && (
          <FlashCard cards={allCards} known={prog.flashcardKnown} onKnownChange={handleKnownChange} />
        )}

        {tab === "퀴즈" && (
          <QuizComponent cards={allCards} onComplete={handleQuizComplete} />
        )}

        {tab === "메모" && (
          <div className="flex flex-col gap-3">
            <p className="text-xs text-slate-400">이 강의 메모를 남겨보세요.</p>
            <textarea
              value={noteDraft}
              onChange={(e) => setNoteDraft(e.target.value)}
              className="w-full h-48 border border-slate-200 rounded-xl p-3.5 text-sm text-slate-700 resize-none focus:outline-none focus:border-indigo-300 transition-colors"
              placeholder="메모를 입력하세요..."
            />
            <button
              onClick={handleSaveNote}
              className={`self-end px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                noteSaved
                  ? "bg-emerald-100 text-emerald-600"
                  : "btn-primary"
              }`}
            >
              {noteSaved ? "저장됨 ✓" : "저장"}
            </button>
          </div>
        )}
      </div>

      {/* Prev / Next */}
      <div className="flex items-center justify-between pb-4">
        {prevId ? (
          <Link href={`/lektion/${prevId}`} className="flex items-center gap-1 text-sm text-slate-400 hover:text-indigo-500 transition-colors">
            ← L{String(prevId).padStart(2, "0")}
          </Link>
        ) : <span />}
        {nextId ? (
          <Link href={`/lektion/${nextId}`} className="flex items-center gap-1 text-sm text-slate-400 hover:text-indigo-500 transition-colors">
            L{String(nextId).padStart(2, "0")} →
          </Link>
        ) : <span />}
      </div>
    </div>
  );
}
