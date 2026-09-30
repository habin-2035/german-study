"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BAND_TITLES, curriculum, getLektionsByBand, TOTAL_BANDS, TOTAL_LEKTIONS } from "@/data/curriculum";
import { getAllProgress } from "@/lib/storage";
import { getAllCards, getDailyStats, type DailyStats } from "@/lib/srs";
import type { AllProgress } from "@/types";

const BAND_COLORS: Record<number, string> = {
  1: "bg-blue-500", 2: "bg-cyan-500", 3: "bg-teal-500", 4: "bg-emerald-500",
  5: "bg-amber-500", 6: "bg-orange-500", 7: "bg-rose-500", 8: "bg-violet-500",
};

function GoalRing({ pct, children }: { pct: number; children: React.ReactNode }) {
  const r = 38;
  const c = 2 * Math.PI * r;
  const off = c - (Math.min(100, pct) / 100) * c;
  return (
    <div className="relative w-24 h-24 flex items-center justify-center flex-shrink-0">
      <svg width="96" height="96" viewBox="0 0 96 96" className="absolute inset-0 -rotate-90">
        <circle cx="48" cy="48" r={r} fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="8" />
        <circle
          cx="48" cy="48" r={r} fill="none" stroke="#fff" strokeWidth="8" strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={off}
          style={{ transition: "stroke-dashoffset 0.7s cubic-bezier(.4,0,.2,1)" }}
        />
      </svg>
      <div className="relative text-center">{children}</div>
    </div>
  );
}

export default function HomePage() {
  const router = useRouter();
  const [progress, setProgress] = useState<AllProgress>({});
  const [stats, setStats] = useState<DailyStats | null>(null);

  useEffect(() => {
    setProgress(getAllProgress());
    setStats(getDailyStats());
  }, []);

  // Enter → 바로 오늘의 학습 시작
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const tag = (document.activeElement?.tagName ?? "").toLowerCase();
      if (e.key === "Enter" && tag !== "input" && tag !== "textarea" && tag !== "a" && tag !== "button") {
        router.push("/review");
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router]);

  const totalCompleted = Object.values(progress).filter((p) => p.completed).length;
  const totalPct = Math.round((totalCompleted / TOTAL_LEKTIONS) * 100);
  const goalPct = stats ? Math.min(100, Math.round((stats.doneToday / stats.goal) * 100)) : 0;
  const toStudy = stats ? stats.dueCount + stats.newRemainingToday : 0;
  const totalCards = getAllCards().length;
  const learnedPct = stats ? Math.round((stats.deckSize / totalCards) * 100) : 0;

  // 이어서 할 강: 완료 체크 안 된 첫 강
  const nextLektion = curriculum.find((l) => !progress[l.id]?.completed) ?? curriculum[0];

  return (
    <div className="flex flex-col gap-8">
      <div className="grid lg:grid-cols-3 gap-4">
        {/* 오늘의 학습 */}
        <Link
          href="/review"
          className="lg:col-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-700 p-7 text-white shadow-lg shadow-indigo-200/60 fade-up"
        >
          <div className="absolute -top-16 -right-10 w-56 h-56 rounded-full bg-white/10 blur-2xl" />
          <div className="relative flex items-center gap-6">
            <GoalRing pct={goalPct}>
              <p className="text-xl font-black tabular-nums leading-none">{stats?.doneToday ?? 0}</p>
              <p className="text-[10px] text-indigo-200 mt-0.5">/ {stats?.goal ?? "–"}</p>
            </GoalRing>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-indigo-200 text-xs font-semibold tracking-widest">오늘의 학습</p>
                {stats && stats.streak > 0 && (
                  <span className="chip bg-white/15 text-white px-2 py-0.5 text-[11px]">🔥 {stats.streak}일 연속</span>
                )}
              </div>
              <p className="text-2xl sm:text-3xl font-black tracking-tight">
                {toStudy > 0 ? <>{toStudy}장 준비됐어요</> : "오늘 분량 완료 ✨"}
              </p>
              <p className="text-indigo-100/90 text-sm mt-1">
                {stats ? <>복습 {stats.dueCount} · 새 카드 {stats.newRemainingToday} · 한국어 보고 독일어 입력</> : " "}
              </p>
            </div>
            <div className="hidden sm:flex flex-col items-end gap-1.5 flex-shrink-0">
              <span className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-indigo-700 text-sm font-bold group-hover:scale-[1.03] transition-transform">
                {toStudy > 0 ? "시작" : "더 하기"} →
              </span>
              <span className="text-[11px] text-indigo-200">
                <kbd className="px-1.5 py-0.5 rounded bg-white/15">Enter</kbd>
              </span>
            </div>
          </div>
        </Link>

        {/* 이어서 공부 */}
        <div className="card p-6 flex flex-col fade-up" style={{ animationDelay: "60ms" }}>
          <p className="text-xs font-bold text-slate-400 tracking-widest">이어서 공부</p>
          <p className="text-xs text-slate-400 mt-3">BAND {nextLektion.band} · L{String(nextLektion.id).padStart(2, "0")}</p>
          <p className="text-lg font-black text-slate-900 leading-tight mt-0.5">{nextLektion.title}</p>
          {nextLektion.subtitle && <p className="text-sm text-slate-400">{nextLektion.subtitle}</p>}
          <div className="flex gap-2 mt-auto pt-5">
            <Link href={`/lektion/${nextLektion.id}`} className="flex-1 text-center px-3 py-2.5 rounded-xl text-sm font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200">
              강 보기
            </Link>
            <Link href={`/review?lektion=${nextLektion.id}`} className="flex-1 text-center btn-primary px-3 py-2.5 rounded-xl text-sm font-semibold">
              집중 학습
            </Link>
          </div>
        </div>
      </div>

      {/* 숫자 요약 */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "외운 카드", value: stats ? `${stats.deckSize}` : "–", sub: `/ ${totalCards}장 (${learnedPct}%)` },
          { label: "복습 대기", value: stats ? `${stats.dueCount}` : "–", sub: "장" },
          { label: "완료한 강", value: `${totalCompleted}`, sub: `/ ${TOTAL_LEKTIONS}강 (${totalPct}%)` },
          { label: "연속 학습", value: stats ? `${stats.streak}` : "–", sub: "일" },
        ].map((s) => (
          <div key={s.label} className="card px-4 py-3.5">
            <p className="text-[11px] font-semibold text-slate-400">{s.label}</p>
            <p className="mt-0.5">
              <span className="text-2xl font-black text-slate-900 tabular-nums">{s.value}</span>
              <span className="text-xs text-slate-400 ml-1">{s.sub}</span>
            </p>
          </div>
        ))}
      </div>

      {/* 교재 목차 */}
      <section>
        <h2 className="text-xs font-bold text-slate-400 tracking-widest mb-3 px-1">교재 목차</h2>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3">
          {Array.from({ length: TOTAL_BANDS }, (_, i) => i + 1).map((band) => {
            const lektions = getLektionsByBand(band);
            const completed = lektions.filter((l) => progress[l.id]?.completed).length;
            const pct = lektions.length > 0 ? Math.round((completed / lektions.length) * 100) : 0;
            return (
              <Link key={band} href={`/band/${band}`} className="card card-hover p-4 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className={`${BAND_COLORS[band]} w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-black text-xs">{band}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-slate-400 tracking-wider">BAND {band}</p>
                    <p className="text-sm font-semibold text-slate-800 leading-tight truncate">{BAND_TITLES[band]}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full ${BAND_COLORS[band]} rounded-full progress-bar`} style={{ width: `${pct}%` }} />
                  </div>
                  <span className="text-[11px] text-slate-400 tabular-nums">{completed}/{lektions.length}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
