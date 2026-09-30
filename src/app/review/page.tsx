"use client";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import StudySession from "@/components/StudySession";
import {
  buildDailySession, buildLektionSession, getDailyStats, setDailyGoal,
  DEFAULT_GOAL, DEFAULT_NEW_PER_DAY, type DailyStats, type SessionItem,
} from "@/lib/srs";
import { getLektionById } from "@/data/curriculum";

export default function ReviewPage() {
  return (
    <Suspense fallback={<div className="h-96" />}>
      <Review />
    </Suspense>
  );
}

function Review() {
  const params = useSearchParams();
  const lektionId = Number(params.get("lektion")) || null;
  const lektion = lektionId ? getLektionById(lektionId) : undefined;

  const [queue, setQueue] = useState<SessionItem[] | null>(null);
  const [stats, setStats] = useState<DailyStats | null>(null);
  const [editing, setEditing] = useState(false);
  const [goal, setGoal] = useState(DEFAULT_GOAL);
  const [newPerDay, setNewPerDay] = useState(DEFAULT_NEW_PER_DAY);

  useEffect(() => {
    const s = getDailyStats();
    setStats(s);
    setGoal(s.goal);
    setNewPerDay(s.newPerDay);
    setQueue(lektionId ? buildLektionSession(lektionId) : buildDailySession());
  }, [lektionId]);

  function saveGoal() {
    setDailyGoal(goal, newPerDay);
    const s = getDailyStats();
    setStats(s);
    setEditing(false);
    if (!lektionId) setQueue(buildDailySession());
  }

  return (
    <div className="flex flex-col gap-5 max-w-3xl mx-auto w-full">
      <div className="flex items-start justify-between gap-4">
        <div>
          {lektion ? (
            <>
              <Link href={`/lektion/${lektion.id}`} className="text-xs text-slate-400 hover:text-indigo-500">
                ← L{String(lektion.id).padStart(2, "0")} {lektion.title}
              </Link>
              <h1 className="text-2xl font-black tracking-tight text-slate-900 mt-1">이 강 집중 학습</h1>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-black tracking-tight text-slate-900">오늘의 학습</h1>
              <p className="text-sm text-slate-400 mt-0.5">
                복습할 카드와 새 카드를 섞어서 · 한국어를 보고 독일어로 떠올리기
              </p>
            </>
          )}
        </div>
        {!lektion && stats && (
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="hidden sm:flex items-center gap-3 text-xs text-slate-500">
              <span>오늘 <b className="text-slate-800 tabular-nums">{stats.doneToday}</b>/{stats.goal}</span>
              <span>🔥 <b className="text-slate-800">{stats.streak}</b>일</span>
            </div>
            <button
              onClick={() => setEditing((v) => !v)}
              className="text-slate-400 hover:text-indigo-500 transition-colors text-sm px-2 py-1 rounded-lg hover:bg-slate-100"
            >
              ⚙ 목표
            </button>
          </div>
        )}
      </div>

      {editing && (
        <div className="card p-4 flex flex-wrap items-end gap-4 fade-up">
          <label className="flex flex-col gap-1 text-xs text-slate-500">
            하루 목표 카드
            <input type="number" min={5} max={200} value={goal}
              onChange={(e) => setGoal(Number(e.target.value))}
              className="w-24 border border-slate-200 rounded-lg px-2 py-1.5 text-sm text-right outline-none focus:border-indigo-400" />
          </label>
          <label className="flex flex-col gap-1 text-xs text-slate-500">
            하루 새 카드 한도
            <input type="number" min={0} max={100} value={newPerDay}
              onChange={(e) => setNewPerDay(Number(e.target.value))}
              className="w-24 border border-slate-200 rounded-lg px-2 py-1.5 text-sm text-right outline-none focus:border-indigo-400" />
          </label>
          <button onClick={saveGoal} className="btn-primary px-4 py-2 rounded-xl text-sm font-semibold">저장</button>
        </div>
      )}

      {queue && (
        <StudySession
          key={`${lektionId ?? "daily"}-${queue.length}-${queue[0]?.card.german ?? ""}`}
          initialQueue={queue}
          title={lektion ? `L${String(lektion.id).padStart(2, "0")}` : undefined}
          onMore={lektionId ? undefined : () => buildDailySession(10)}
        />
      )}
    </div>
  );
}
