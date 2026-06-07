"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BAND_TITLES, getLektionsByBand, TOTAL_BANDS } from "@/data/curriculum";
import { getAllProgress } from "@/lib/storage";
import { getDailyStats, type DailyStats } from "@/lib/srs";
import type { AllProgress } from "@/types";

export default function ProgressPage() {
  const [progress, setProgress] = useState<AllProgress>({});
  const [stats, setStats] = useState<DailyStats | null>(null);

  useEffect(() => {
    setProgress(getAllProgress());
    setStats(getDailyStats());
  }, []);

  const totalCompleted = Object.values(progress).filter((p) => p.completed).length;
  const totalVideos = Object.values(progress).filter((p) => p.videoWatched).length;
  const totalNotes = Object.values(progress).filter((p) => !!p.note).length;

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-black tracking-tight text-slate-900">학습 현황</h1>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "완료한 강", value: totalCompleted, icon: "✓", color: "text-emerald-600 bg-emerald-50" },
          { label: "연속 학습", value: `${stats?.streak ?? 0}일`, icon: "🔥", color: "text-amber-600 bg-amber-50" },
          { label: "학습한 카드", value: stats?.deckSize ?? 0, icon: "🎴", color: "text-indigo-600 bg-indigo-50" },
          { label: "복습 대기", value: stats?.dueCount ?? 0, icon: "⏰", color: "text-rose-600 bg-rose-50" },
          { label: "영상 시청", value: totalVideos, icon: "▶", color: "text-violet-600 bg-violet-50" },
          { label: "메모 작성", value: totalNotes, icon: "📝", color: "text-cyan-600 bg-cyan-50" },
        ].map(({ label, value, icon, color }) => (
          <div key={label} className={`${color} rounded-2xl p-4`}>
            <p className="text-2xl font-black tabular-nums">{value}</p>
            <p className="text-xs font-medium mt-0.5">{icon} {label}</p>
          </div>
        ))}
      </div>

      {/* Per Band */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xs font-bold text-slate-400 tracking-widest uppercase px-1">밴드별 진도</h2>
        {Array.from({ length: TOTAL_BANDS }, (_, i) => i + 1).map((band) => {
          const lektions = getLektionsByBand(band);
          const completed = lektions.filter((l) => progress[l.id]?.completed).length;
          const pct = lektions.length > 0 ? Math.round((completed / lektions.length) * 100) : 0;

          return (
            <div key={band} className="card p-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="text-sm font-bold text-slate-700">BAND {band}</span>
                  <span className="text-xs text-slate-400 ml-2">{BAND_TITLES[band]}</span>
                </div>
                <span className="text-xs text-slate-400">{completed}/{lektions.length}</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 rounded-full progress-bar" style={{ width: `${pct}%` }} />
              </div>

              {/* Lektion dots */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {lektions.map((l) => {
                  const p = progress[l.id];
                  return (
                    <Link key={l.id} href={`/lektion/${l.id}`} title={`Lektion ${l.id}: ${l.title}`}>
                      <div
                        className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center transition-colors ${
                          p?.completed
                            ? "bg-emerald-100 text-emerald-600"
                            : p?.lastStudied
                            ? "bg-indigo-50 text-indigo-400"
                            : "bg-slate-100 text-slate-400 hover:bg-slate-200"
                        }`}
                      >
                        {l.id}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
