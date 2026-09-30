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
import GermanText from "@/components/GermanText";
import SentenceBreakdown from "@/components/SentenceBreakdown";
import { getGloss } from "@/lib/gloss";
import { GRAMMAR } from "@/data/grammar";
import AddItemForm, { type NewItem } from "@/components/AddItemForm";
import GermanKeys from "@/components/GermanKeys";
import {
  getUserContent,
  addUserExpression,
  addUserVocab,
  removeUserExpression,
  removeUserVocab,
  type UserContent,
} from "@/lib/userContent";
import type { LektionProgress } from "@/types";

type Tab = "표현" | "플래시카드" | "퀴즈" | "메모";
const TABS: Tab[] = ["표현", "플래시카드", "퀴즈", "메모"];

export default function LektionPage() {
  const { id } = useParams();
  const lektionId = Number(id);
  const lektion = getLektionById(lektionId);
  const [tab, setTab] = useState<Tab>("표현");
  // 문장 해부 펼침 상태
  const [openAll, setOpenAll] = useState(false);
  const [openSet, setOpenSet] = useState<Set<string>>(new Set());
  const isOpen = (g: string) => openAll || openSet.has(g);
  function toggleOpen(g: string) {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(g)) next.delete(g);
      else next.add(g);
      return next;
    });
  }
  const [prog, setProg] = useState<LektionProgress>({
    completed: false, videoWatched: false, note: "",
    flashcardKnown: [], quizScore: 0,
  });
  const [noteDraft, setNoteDraft] = useState("");
  const [noteSaved, setNoteSaved] = useState(false);
  const noteRef = useRef<HTMLTextAreaElement>(null);
  const [userContent, setUserContent] = useState<UserContent>({
    expressions: [],
    vocabulary: [],
  });

  useEffect(() => {
    const p = getLektionProgress(lektionId);
    setProg(p);
    setNoteDraft(p.note);
    setUserContent(getUserContent(lektionId));
  }, [lektionId]);

  if (!lektion) return (
    <div className="text-center py-20 text-slate-400">Lektion을 찾을 수 없습니다.</div>
  );

  const allExpressions = [...lektion.expressions, ...userContent.expressions];
  const allVocabulary = [...lektion.vocabulary, ...userContent.vocabulary];
  const allCards = [...allExpressions, ...allVocabulary];

  function handleAddItem(item: NewItem) {
    if (item.kind === "표현") {
      setUserContent(
        addUserExpression(lektionId, {
          german: item.german,
          korean: item.korean,
          note: item.note,
        })
      );
    } else {
      setUserContent(
        addUserVocab(lektionId, { german: item.german, korean: item.korean })
      );
    }
  }
  function handleRemoveExpression(index: number) {
    setUserContent(removeUserExpression(lektionId, index));
  }
  function handleRemoveVocab(index: number) {
    setUserContent(removeUserVocab(lektionId, index));
  }

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
          <div className="flex items-center gap-2 flex-shrink-0">
          <Link
            href={`/review?lektion=${lektionId}`}
            className="btn-primary px-4 py-2 rounded-xl text-sm font-bold"
          >
            ▶ 집중 학습
          </Link>
          <button
            onClick={handleToggleCompleted}
            className={`flex-shrink-0 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
              prog.completed
                ? "bg-emerald-100 text-emerald-600"
                : "bg-slate-100 text-slate-500 hover:bg-slate-200"
            }`}
          >
            {prog.completed ? "✓ 완료" : "완료 체크"}
          </button>
          </div>
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
            {allExpressions.length > 0 && (
              <section>
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-xs font-bold text-slate-400 tracking-widest uppercase">핵심 표현</h2>
                  <button
                    onClick={() => { setOpenAll((v) => !v); setOpenSet(new Set()); }}
                    className={`text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors ${
                      openAll ? "bg-indigo-500 text-white" : "bg-slate-100 text-slate-500 hover:bg-indigo-50 hover:text-indigo-600"
                    }`}
                  >
                    🔍 모든 문장 해부 {openAll ? "접기" : "펼치기"}
                  </button>
                </div>
                <p className="text-[11px] text-slate-400 -mt-1 mb-2">문장을 누르면 단어별 뜻과 관련 문법이 펼쳐져요.</p>
                <div className="flex flex-col gap-0.5">
                  {lektion.expressions.map((expr, i) => {
                    const hasGloss = !!getGloss(expr.german);
                    const open = hasGloss && isOpen(expr.german);
                    return (
                      <div key={`b${i}`} className="py-3 border-b border-slate-50 last:border-0">
                        <div className="flex items-start gap-3">
                          <SpeakerButton text={expr.german} size="sm" />
                          <div
                            className={`flex-1 min-w-0 ${hasGloss ? "cursor-pointer group" : ""}`}
                            onClick={hasGloss ? () => toggleOpen(expr.german) : undefined}
                          >
                            <div className="flex items-center gap-2">
                              <GermanText german={expr.german} className={`font-semibold text-slate-800 ${hasGloss ? "group-hover:text-indigo-600" : ""}`} />
                              {hasGloss && (
                                <span className={`text-[10px] transition-colors ${open ? "text-indigo-500" : "text-slate-300 group-hover:text-indigo-400"}`}>
                                  {open ? "▲" : "▼ 해부"}
                                </span>
                              )}
                            </div>
                            <p className="text-slate-500 text-sm mt-0.5">{expr.korean}</p>
                          </div>
                          {expr.note && (
                            <span className="text-xs text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded-lg flex-shrink-0">
                              {expr.note}
                            </span>
                          )}
                        </div>
                        {open && (
                          <SentenceBreakdown german={expr.german} className="mt-3 ml-10 bg-slate-50 rounded-xl p-3 fade-up" />
                        )}
                      </div>
                    );
                  })}
                  {userContent.expressions.map((expr, i) => (
                    <div key={`u${i}`} className="flex items-start gap-3 py-3 border-b border-slate-50 last:border-0">
                      <SpeakerButton text={expr.german} size="sm" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <p className="font-semibold text-slate-800">{expr.german}</p>
                          <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md flex-shrink-0">내 추가</span>
                        </div>
                        <p className="text-slate-500 text-sm mt-0.5">{expr.korean}</p>
                      </div>
                      {expr.note && (
                        <span className="text-xs text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded-lg flex-shrink-0">
                          {expr.note}
                        </span>
                      )}
                      <button
                        onClick={() => handleRemoveExpression(i)}
                        className="flex-shrink-0 text-slate-300 hover:text-rose-500 transition-colors text-sm leading-none px-1"
                        aria-label="삭제"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {allVocabulary.length > 0 && (
              <section>
                <h2 className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-3">단어</h2>
                <p className="text-[11px] text-slate-400 -mt-1 mb-3">
                  관사 색: <span className="text-sky-600 font-semibold">der</span> ·{" "}
                  <span className="text-rose-600 font-semibold">die</span> ·{" "}
                  <span className="text-emerald-600 font-semibold">das</span> ·{" "}
                  <span className="text-violet-600 font-semibold">복수</span>
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {lektion.vocabulary.map((v, i) => (
                    <div key={`b${i}`} className="bg-slate-50 rounded-xl p-3 hover:bg-indigo-50 transition-colors flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <GermanText german={v.german} showPlural className="font-semibold text-slate-800 text-[15px]" />
                        <p className="text-slate-400 text-xs mt-0.5">{v.korean}</p>
                      </div>
                      <SpeakerButton text={v.german} size="sm" />
                    </div>
                  ))}
                  {userContent.vocabulary.map((v, i) => (
                    <div key={`u${i}`} className="bg-emerald-50/50 ring-1 ring-emerald-100 rounded-xl p-3 hover:bg-emerald-50 transition-colors flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="font-semibold text-slate-800 text-sm">{v.german}</p>
                        <p className="text-slate-400 text-xs mt-0.5">{v.korean}</p>
                      </div>
                      <div className="flex flex-col items-center gap-1 flex-shrink-0">
                        <SpeakerButton text={v.german} size="sm" />
                        <button
                          onClick={() => handleRemoveVocab(i)}
                          className="text-slate-300 hover:text-rose-500 transition-colors text-xs leading-none"
                          aria-label="삭제"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <AddItemForm onAdd={handleAddItem} />

            {lektion.conversations.length > 0 && (
              <section>
                <h2 className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-3">실전 회화</h2>
                <div className="flex flex-col gap-4">
                  {lektion.conversations.map((conv, ci) => (
                    <div key={ci} className="bg-slate-50 rounded-2xl p-4 flex flex-col gap-3">
                      {conv.map((line, li) => (
                        <div key={li} className="flex flex-col gap-2">
                        <div className={`flex gap-2 ${line.speaker === "B" ? "flex-row-reverse" : ""}`}>
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                            line.speaker === "A" ? "bg-indigo-600 text-white" : "bg-slate-200 text-slate-600"
                          }`}>
                            {line.speaker}
                          </div>
                          <div className={`max-w-[78%] flex flex-col gap-0.5 ${line.speaker === "B" ? "items-end" : "items-start"}`}>
                            <div className={`flex items-center gap-1.5 ${line.speaker === "B" ? "flex-row-reverse" : ""}`}>
                              <button
                                type="button"
                                onClick={() => getGloss(line.german) && toggleOpen(line.german)}
                                className={`px-3.5 py-2 rounded-2xl text-sm text-left transition-shadow ${
                                  line.speaker === "A"
                                    ? "bg-indigo-600 text-white rounded-tl-sm"
                                    : "bg-white border border-slate-200 text-slate-800 rounded-tr-sm"
                                } ${getGloss(line.german) ? "cursor-pointer hover:ring-2 hover:ring-indigo-200" : "cursor-default"}`}
                              >
                                {line.german}
                              </button>
                              <SpeakerButton text={line.german} size="sm" />
                            </div>
                            <p className="text-xs text-slate-400 px-1">{line.korean}</p>
                          </div>
                        </div>
                        {getGloss(line.german) && isOpen(line.german) && (
                          <SentenceBreakdown german={line.german} className="bg-white rounded-xl p-3 border border-slate-100 fade-up" />
                        )}
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

            {GRAMMAR.some((g) => g.lessons.includes(lektionId)) && (
              <section>
                <h2 className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-3">문법 사전에서 자세히</h2>
                <div className="grid sm:grid-cols-2 gap-2">
                  {GRAMMAR.filter((g) => g.lessons.includes(lektionId)).map((g) => (
                    <Link key={g.id} href={`/grammar/${g.id}`} className="card card-hover px-4 py-3 flex flex-col">
                      <span className="text-sm font-bold text-slate-800">📘 {g.title}</span>
                      <span className="text-xs text-slate-400 mt-0.5">{g.summary}</span>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {allExpressions.length === 0 && allVocabulary.length === 0 && (
              <p className="text-center text-slate-400 text-sm py-2">
                아직 표현·단어가 없어요. 직접 추가해 보세요.
              </p>
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
              ref={noteRef}
              value={noteDraft}
              onChange={(e) => setNoteDraft(e.target.value)}
              className="w-full h-48 border border-slate-200 rounded-xl p-3.5 text-sm text-slate-700 resize-none focus:outline-none focus:border-indigo-300 transition-colors"
              placeholder="메모를 입력하세요..."
            />
            <GermanKeys targetRef={noteRef} onChange={setNoteDraft} />
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
