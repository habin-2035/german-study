"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  getDueCards, getNewCardPool, getDailyStats, gradeCard, getDeck,
  intervalLabel, type GlobalCard,
} from "@/lib/srs";
import { speak } from "@/lib/speech";
import SpeakerButton from "@/components/SpeakerButton";
import type { SrsGrade } from "@/types";

type QueueItem = GlobalCard & { isNew: boolean };

const GRADES: { grade: SrsGrade; label: string; cls: string }[] = [
  { grade: "again", label: "다시", cls: "bg-red-50 text-red-600 border-red-200 hover:bg-red-100" },
  { grade: "hard",  label: "어려움", cls: "bg-amber-50 text-amber-600 border-amber-200 hover:bg-amber-100" },
  { grade: "good",  label: "좋음", cls: "bg-emerald-50 text-emerald-600 border-emerald-200 hover:bg-emerald-100" },
  { grade: "easy",  label: "쉬움", cls: "bg-indigo-50 text-indigo-600 border-indigo-200 hover:bg-indigo-100" },
];

function buildInitialQueue(): QueueItem[] {
  const stats = getDailyStats();
  const due: QueueItem[] = getDueCards().map((c) => ({
    german: c.german, korean: c.korean, note: c.note, lektionId: c.lektionId, isNew: false,
  }));
  // due 카드는 섞고, 새 카드는 교재 순서 유지
  const dueShuffled = [...due].sort(() => Math.random() - 0.5);
  const news: QueueItem[] = getNewCardPool()
    .slice(0, stats.newRemainingToday)
    .map((c) => ({ ...c, isNew: true }));
  return [...dueShuffled, ...news];
}

export default function ReviewSession() {
  const [queue, setQueue] = useState<QueueItem[]>([]);
  const [revealed, setRevealed] = useState(false);
  const [ready, setReady] = useState(false);
  const [reviewed, setReviewed] = useState(0); // 이번 세션 처리 수

  useEffect(() => {
    setQueue(buildInitialQueue());
    setReady(true);
  }, []);

  const current = queue[0];
  const deckCard = useMemo(
    () => (current ? getDeck()[current.german] : undefined),
    [current],
  );

  // 카드가 바뀌면 발음 자동 재생
  useEffect(() => {
    if (current) {
      const t = setTimeout(() => speak(current.german), 200);
      return () => clearTimeout(t);
    }
  }, [current?.german]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!ready) return <div className="h-48" />;

  // 세션 종료 화면
  if (!current) {
    const stats = getDailyStats();
    const goalPct = Math.min(100, Math.round((stats.doneToday / stats.goal) * 100));
    const goalMet = stats.doneToday >= stats.goal;
    return (
      <div className="flex flex-col items-center gap-5 py-8 pop text-center">
        <div className="text-6xl">{reviewed === 0 ? "☕" : goalMet ? "🏆" : "🎉"}</div>
        <div>
          <p className="text-xl font-black text-slate-800">
            {reviewed === 0 ? "지금은 복습할 카드가 없어요" : "복습 완료!"}
          </p>
          <p className="text-sm text-slate-400 mt-1">
            {reviewed > 0 && `이번 세션 ${reviewed}장 · `}오늘 누적 {stats.doneToday}장
          </p>
        </div>

        {/* 오늘 목표 */}
        <div className="w-full max-w-xs">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-slate-400">오늘 목표</span>
            <span className="font-bold text-slate-600">{stats.doneToday}/{stats.goal}</span>
          </div>
          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
            <div className={`h-full rounded-full progress-bar ${goalMet ? "bg-emerald-500" : "bg-indigo-500"}`} style={{ width: `${goalPct}%` }} />
          </div>
          <p className="text-xs text-slate-400 mt-2">🔥 {stats.streak}일 연속 학습 중</p>
        </div>

        {/* 더 학습하기 (일일 한도 무시하고 새 카드 추가) */}
        {stats.newPoolCount > 0 && (
          <button
            onClick={() => {
              const extra = getNewCardPool().slice(0, 10).map((c) => ({ ...c, isNew: true }));
              setQueue(extra);
              setRevealed(false);
            }}
            className="btn-primary px-5 py-2.5 rounded-xl text-sm font-semibold"
          >
            새 카드 10장 더 학습하기
          </button>
        )}
        <Link href="/" className="text-sm text-slate-400 hover:text-indigo-500">홈으로</Link>
      </div>
    );
  }

  function onGrade(grade: SrsGrade) {
    if (!current) return;
    gradeCard(current, grade);
    setReviewed((n) => n + 1);
    setRevealed(false);
    setQueue((q) => {
      const [head, ...rest] = q;
      // '다시'는 같은 세션 끝에 다시 등장
      return grade === "again" ? [...rest, { ...head, isNew: false }] : rest;
    });
  }

  const remaining = queue.length;

  return (
    <div className="flex flex-col items-center gap-5">
      {/* 상단 진행 */}
      <div className="w-full flex items-center justify-between text-xs">
        <span className="text-slate-400">남은 카드 <span className="font-bold text-slate-600">{remaining}</span></span>
        <div className="flex items-center gap-2">
          {current.isNew && <span className="chip bg-indigo-50 text-indigo-600 px-2 py-1 text-[11px]">새 카드</span>}
          <span className="text-slate-400">L{String(current.lektionId).padStart(2, "0")}</span>
        </div>
      </div>

      {/* 카드 */}
      <div className="card w-full max-w-sm p-7 flex flex-col items-center gap-3 min-h-[13rem] justify-center fade-up" key={current.german}>
        <div className="flex items-center gap-2">
          <p className="text-[1.7rem] font-bold text-slate-800 text-center leading-snug">{current.german}</p>
          <SpeakerButton text={current.german} size="sm" stop={false} />
        </div>

        {revealed ? (
          <div className="flex flex-col items-center gap-1.5 pop">
            <div className="w-10 h-px bg-slate-100 my-1" />
            <p className="text-lg text-slate-600">{current.korean}</p>
            {current.note && (
              <span className="text-xs text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded-md">{current.note}</span>
            )}
          </div>
        ) : (
          <button
            onClick={() => setRevealed(true)}
            className="mt-1 text-sm text-slate-400 hover:text-indigo-500 underline underline-offset-4"
          >
            뜻 보기
          </button>
        )}
      </div>

      {/* 채점 버튼 */}
      {revealed ? (
        <div className="w-full max-w-sm grid grid-cols-4 gap-2 fade-up">
          {GRADES.map(({ grade, label, cls }) => (
            <button
              key={grade}
              onClick={() => onGrade(grade)}
              className={`flex flex-col items-center gap-0.5 py-2.5 rounded-xl border text-sm font-semibold transition-colors ${cls}`}
            >
              <span>{label}</span>
              <span className="text-[10px] font-medium opacity-70">{intervalLabel(grade, deckCard)}</span>
            </button>
          ))}
        </div>
      ) : (
        <button
          onClick={() => setRevealed(true)}
          className="btn-primary w-full max-w-sm py-3.5 rounded-2xl text-sm font-bold"
        >
          뜻 확인하기
        </button>
      )}
    </div>
  );
}
