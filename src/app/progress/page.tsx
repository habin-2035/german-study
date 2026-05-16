"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { curriculum, BAND_TITLES, getLektionsByBand, TOTAL_BANDS } from "@/data/curriculum";
import { getAllProgress } from "@/lib/storage";
import type { AllProgress } from "@/types";

export default function ProgressPage() {
  const [progress, setProgress] = useState<AllProgress>({});

  useEffect(() => {
    setProgress(getAllProgress());
  }, []);

  const totalCompleted = Object.values(progress).filter((p) => p.completed).length;
  const totalVideos = Object.values(progress).filter((p) => p.videoWatched).length;
  const totalNotes = Object.values(progress).filter((p) => !!p.note).length;
  const totalCards = Object.values(progress).reduce((sum, p) => sum + (p.flashcardKnown?.length ?? 0), 0);

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-xl font-black text-gray-800">전체 진도</h1>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "완료한 강", value: totalCompleted, icon: "✓", color: "text-green-600 bg-green-50" },
          { label: "영상 시청", value: totalVideos, icon: "▶", color: "text-purple-600 bg-purple-50" },
          { label: "메모 작성", value: totalNotes, icon: "📝", color: "text-yellow-600 bg-yellow-50" },
          { label: "숙지한 카드", value: totalCards, icon: "🃏", color: "text-blue-600 bg-blue-50" },
        ].map(({ label, value, icon, color }) => (
          <div key={label} className={`${color} rounded-xl p-4`}>
            <p className="text-2xl font-black">{value}</p>
            <p className="text-xs font-medium mt-0.5">{icon} {label}</p>
          </div>
        ))}
      </div>

      {/* Per Band */}
      <div className="flex flex-col gap-3">
        {Array.from({ length: TOTAL_BANDS }, (_, i) => i + 1).map((band) => {
          const lektions = getLektionsByBand(band);
          const completed = lektions.filter((l) => progress[l.id]?.completed).length;
          const pct = lektions.length > 0 ? Math.round((completed / lektions.length) * 100) : 0;

          return (
            <div key={band} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="text-sm font-bold text-gray-700">BAND {band}</span>
                  <span className="text-xs text-gray-400 ml-2">{BAND_TITLES[band]}</span>
                </div>
                <span className="text-xs text-gray-400">{completed}/{lektions.length}</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 rounded-full transition-all"
                  style={{ width: `${pct}%` }}
                />
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
                            ? "bg-green-100 text-green-600"
                            : p?.lastStudied
                            ? "bg-blue-50 text-blue-400"
                            : "bg-gray-100 text-gray-400"
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
