"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BAND_TITLES, getLektionsByBand, TOTAL_BANDS, TOTAL_LEKTIONS } from "@/data/curriculum";
import { getAllProgress } from "@/lib/storage";
import type { AllProgress } from "@/types";

const BAND_COLORS: Record<number, { bg: string; text: string; bar: string }> = {
  1: { bg: "bg-blue-500",   text: "text-blue-500",   bar: "bg-blue-500" },
  2: { bg: "bg-cyan-500",   text: "text-cyan-500",   bar: "bg-cyan-500" },
  3: { bg: "bg-teal-500",   text: "text-teal-500",   bar: "bg-teal-500" },
  4: { bg: "bg-emerald-500",text: "text-emerald-500",bar: "bg-emerald-500" },
  5: { bg: "bg-amber-500",  text: "text-amber-500",  bar: "bg-amber-500" },
  6: { bg: "bg-orange-500", text: "text-orange-500", bar: "bg-orange-500" },
  7: { bg: "bg-rose-500",   text: "text-rose-500",   bar: "bg-rose-500" },
  8: { bg: "bg-violet-500", text: "text-violet-500", bar: "bg-violet-500" },
};

export default function HomePage() {
  const [progress, setProgress] = useState<AllProgress>({});

  useEffect(() => {
    setProgress(getAllProgress());
  }, []);

  const totalCompleted = Object.values(progress).filter((p) => p.completed).length;
  const totalPct = Math.round((totalCompleted / TOTAL_LEKTIONS) * 100);

  return (
    <div className="flex flex-col gap-5">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-700 p-6 text-white shadow-lg">
        {/* decorative circles */}
        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/5" />
        <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/5" />
        <div className="relative">
          <p className="text-blue-200 text-xs font-semibold tracking-widest uppercase mb-1">독일어 A1</p>
          <h1 className="text-3xl font-black tracking-tight">ZUSAMMEN</h1>
          <p className="text-blue-200 text-sm mt-1">교재 기반 단계별 독일어 학습</p>

          <div className="mt-5">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-blue-200">전체 진도</span>
              <span className="font-bold text-white">{totalCompleted} / {TOTAL_LEKTIONS} 강</span>
            </div>
            <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-white rounded-full progress-bar" style={{ width: `${totalPct}%` }} />
            </div>
            <p className="text-right text-xs text-blue-200 mt-1">{totalPct}%</p>
          </div>
        </div>
      </div>

      {/* Band List */}
      <div className="flex flex-col gap-2.5">
        {Array.from({ length: TOTAL_BANDS }, (_, i) => i + 1).map((band) => {
          const lektions = getLektionsByBand(band);
          const completed = lektions.filter((l) => progress[l.id]?.completed).length;
          const pct = lektions.length > 0 ? Math.round((completed / lektions.length) * 100) : 0;
          const color = BAND_COLORS[band];

          return (
            <Link key={band} href={`/band/${band}`}>
              <div className="card card-hover flex items-center gap-4 p-4 cursor-pointer">
                {/* Band badge */}
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
