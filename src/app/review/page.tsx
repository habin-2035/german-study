"use client";
import { useEffect, useState } from "react";
import ReviewSession from "@/components/ReviewSession";
import { getDailyStats, setDailyGoal, DEFAULT_GOAL, DEFAULT_NEW_PER_DAY, type DailyStats } from "@/lib/srs";

export default function ReviewPage() {
  const [stats, setStats] = useState<DailyStats | null>(null);
  const [editing, setEditing] = useState(false);
  const [goal, setGoal] = useState(DEFAULT_GOAL);
  const [newPerDay, setNewPerDay] = useState(DEFAULT_NEW_PER_DAY);

  useEffect(() => {
    const s = getDailyStats();
    setStats(s);
    setGoal(s.goal);
    setNewPerDay(s.newPerDay);
  }, []);

  function saveGoal() {
    setDailyGoal(goal, newPerDay);
    setStats(getDailyStats());
    setEditing(false);
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-900">복습</h1>
          <p className="text-sm text-slate-400 mt-0.5">간격 반복으로 오늘 외울 것만 콕 집어서</p>
        </div>
        <button
          onClick={() => setEditing((v) => !v)}
          className="text-slate-300 hover:text-indigo-500 transition-colors text-lg"
          aria-label="목표 설정"
        >
          ⚙
        </button>
      </div>

      {/* 목표 설정 */}
      {editing && (
        <div className="card p-4 flex flex-col gap-3 fade-up">
          <label className="flex items-center justify-between text-sm">
            <span className="text-slate-600">하루 목표 카드</span>
            <input type="number" min={5} max={200} value={goal}
              onChange={(e) => setGoal(Number(e.target.value))}
              className="w-20 border border-slate-200 rounded-lg px-2 py-1 text-right outline-none focus:border-indigo-400" />
          </label>
          <label className="flex items-center justify-between text-sm">
            <span className="text-slate-600">하루 새 카드 한도</span>
            <input type="number" min={0} max={100} value={newPerDay}
              onChange={(e) => setNewPerDay(Number(e.target.value))}
              className="w-20 border border-slate-200 rounded-lg px-2 py-1 text-right outline-none focus:border-indigo-400" />
          </label>
          <button onClick={saveGoal} className="btn-primary self-end px-4 py-2 rounded-xl text-sm font-semibold">저장</button>
        </div>
      )}

      {/* 오늘 현황 */}
      {stats && (
        <div className="grid grid-cols-3 gap-2.5">
          {[
            { label: "복습 대기", value: stats.dueCount, color: "text-amber-600 bg-amber-50" },
            { label: "오늘 새 카드", value: stats.newRemainingToday, color: "text-indigo-600 bg-indigo-50" },
            { label: "연속 학습", value: `${stats.streak}일`, color: "text-emerald-600 bg-emerald-50" },
          ].map((s) => (
            <div key={s.label} className={`${s.color} rounded-2xl p-3.5 text-center`}>
              <p className="text-2xl font-black tabular-nums">{s.value}</p>
              <p className="text-[11px] font-medium mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      )}

      <div className="card p-5 sm:p-6">
        <ReviewSession />
      </div>

      {stats && stats.deckSize === 0 && (
        <p className="text-center text-xs text-slate-400">
          카드는 복습을 시작하면 자동으로 덱에 등록돼요. 묶음연습이나 강 페이지에서도 학습할 수 있어요.
        </p>
      )}
    </div>
  );
}
