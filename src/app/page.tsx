"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BAND_TITLES, getLektionsByBand, TOTAL_BANDS, TOTAL_LEKTIONS } from "@/data/curriculum";
import { getAllProgress } from "@/lib/storage";
import { getDailyStats, type DailyStats } from "@/lib/srs";
import type { AllProgress } from "@/types";

const BAND_COLORS: Record<number, { bg: string; bar: string }> = {
  1: { bg: "bg-blue-500",    bar: "bg-blue-500" },
  2: { bg: "bg-cyan-500",    bar: "bg-cyan-500" },
  3: { bg: "bg-teal-500",    bar: "bg-teal-500" },
  4: { bg: "bg-emerald-500", bar: "bg-emerald-500" },
  5: { bg: "bg-amber-500",   bar: "bg-amber-500" },
  6: { bg: "bg-orange-500",  bar: "bg-orange-500" },
  7: { bg: "bg-rose-500",    bar: "bg-rose-500" },
  8: { bg: "bg-violet-500",  bar: "bg-violet-500" },
};

function GoalRing({ pct }: { pct: number }) {
  const r = 26;
  const c = 2 * Math.PI * r;
  const off = c - (Math.min(100, pct) / 100) * c;
  return (
    <svg width="68" height="68" viewBox="0 0 68 68" className="-rotate-90">
      <circle cx="34" cy="34" r={r} fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="6" />
      <circle
        cx="34" cy="34" r={r} fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round"
        strokeDasharray={c} strokeDashoffset={off}
        style={{ transition: "stroke-dashoffset 0.7s cubic-bezier(.4,0,.2,1)" }}
      />
    </svg>
  );
}

export default function HomePage() {
  const [progress, setProgress] = useState<AllProgress>({});
  const [stats, setStats] = useState<DailyStats | null>(null);

  useEffect(() => {
    setProgress(getAllProgress());
    setStats(getDailyStats());
  }, []);

  const totalCompleted = Object.values(progress).filter((p) => p.completed).length;
  const totalPct = Math.round((totalCompleted / TOTAL_LEKTIONS) * 100);

  const goalPct = stats ? Math.min(100, Math.round((stats.doneToday / stats.goal) * 100)) : 0;
  const toReview = stats ? stats.dueCount + stats.newRemainingToday : 0;

  return (
    <div className="flex flex-col gap-5">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-700 p-6 text-white shadow-lg shadow-indigo-200/60 fade-up">
        <div className="absolute -top-10 -right-8 w-40 h-40 rounded-full bg-white/10 blur-xl" />
        <div className="absolute -bottom-10 -left-6 w-32 h-32 rounded-full bg-white/5" />
        <div className="relative">
          <p className="text-indigo-200 text-xs font-semibold tracking-widest uppercase mb-1">독일어 A1 · Zusammen</p>
          <h1 className="text-3xl font-black tracking-tight">함께 독일어</h1>

          <div className="mt-5">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-indigo-200">전체 진도</span>
              <span className="font-bold text-white">{totalCompleted} / {TOTAL_LEKTIONS} 강</span>
            </div>
            <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-white rounded-full progress-bar" style={{ width: `${totalPct}%` }} />
            </div>
            <p className="text-right text-xs text-indigo-200 mt-1">{totalPct}%</p>
          </div>
        </div>
      </div>

      {/* 오늘의 복습 */}
      <Link href="/review" className="block fade-up" style={{ animationDelay: "60ms" }}>
        <div className="card card-hover relative overflow-hidden p-5 bg-gradient-to-br from-slate-900 to-slate-800 border-slate-800">
          <div className="absolute -right-6 -bottom-8 text-[7rem] opacity-10 select-none">🔥</div>
          <div className="relative flex items-center gap-4">
            <div className="relative flex items-center justify-center flex-shrink-0">
              <GoalRing pct={goalPct} />
              <span className="absolute text-xs font-bold text-white tabular-nums">
                {stats ? stats.doneToday : 0}/{stats ? stats.goal : "–"}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-white font-bold">오늘의 복습</p>
                {stats && stats.streak > 0 && (
                  <span className="chip bg-amber-400/20 text-amber-300 px-2 py-0.5 text-xs">🔥 {stats.streak}일</span>
                )}
              </div>
              <p className="text-slate-300 text-sm mt-0.5">
                {toReview > 0
                  ? <>복습 {stats?.dueCount ?? 0}장 · 새 카드 {stats?.newRemainingToday ?? 0}장</>
                  : "오늘 학습을 완료했어요 ✨"}
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className={`inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-bold ${
                toReview > 0 ? "bg-white text-slate-900" : "bg-white/10 text-white"
              }`}>
                {toReview > 0 ? "시작 →" : "복습 →"}
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* 빠른 메뉴 */}
      <div className="grid grid-cols-2 gap-3 fade-up" style={{ animationDelay: "100ms" }}>
        <Link href="/practice" className="card card-hover p-4 flex items-center gap-3">
          <span className="text-2xl">🎴</span>
          <div>
            <p className="text-sm font-bold text-slate-800">묶음 연습</p>
            <p className="text-xs text-slate-400">플래시카드 · 퀴즈</p>
          </div>
        </Link>
        <Link href="/progress" className="card card-hover p-4 flex items-center gap-3">
          <span className="text-2xl">📊</span>
          <div>
            <p className="text-sm font-bold text-slate-800">학습 현황</p>
            <p className="text-xs text-slate-400">진도 · 통계</p>
          </div>
        </Link>
      </div>

      {/* 밴드 목록 */}
      <div className="flex flex-col gap-2.5">
        <h2 className="text-xs font-bold text-slate-400 tracking-widest uppercase px-1 mt-1">교재 목차</h2>
        {Array.from({ length: TOTAL_BANDS }, (_, i) => i + 1).map((band) => {
          const lektions = getLektionsByBand(band);
          const completed = lektions.filter((l) => progress[l.id]?.completed).length;
          const pct = lektions.length > 0 ? Math.round((completed / lektions.length) * 100) : 0;
          const color = BAND_COLORS[band];

          return (
            <Link key={band} href={`/band/${band}`}>
              <div className="card card-hover flex items-center gap-4 p-4 cursor-pointer">
                <div className={`${color.bg} w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm`}>
                  <span className="text-white font-black text-xs">{band}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <div>
                      <span className="text-xs font-bold text-slate-400 tracking-wider">BAND {band}</span>
                      <p className="text-sm font-semibold text-slate-800 leading-tight">{BAND_TITLES[band]}</p>
                    </div>
                    <span className="text-xs text-slate-400 ml-2 flex-shrink-0">{completed}/{lektions.length}</span>
                  </div>
                  <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full ${color.bar} rounded-full progress-bar`} style={{ width: `${pct}%` }} />
                  </div>
                </div>
                <span className="text-slate-300 text-sm flex-shrink-0">›</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
