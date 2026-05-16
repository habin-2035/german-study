"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BAND_TITLES, getLektionsByBand, TOTAL_BANDS, TOTAL_LEKTIONS } from "@/data/curriculum";
import { getAllProgress } from "@/lib/storage";
import type { AllProgress } from "@/types";

const BAND_COLORS: Record<number, string> = {
  1: "from-blue-400 to-blue-500",
  2: "from-cyan-400 to-cyan-500",
  3: "from-teal-400 to-teal-500",
  4: "from-green-400 to-green-500",
  5: "from-yellow-400 to-yellow-500",
  6: "from-orange-400 to-orange-500",
  7: "from-red-400 to-red-500",
  8: "from-purple-400 to-purple-500",
};

export default function HomePage() {
  const [progress, setProgress] = useState<AllProgress>({});

  useEffect(() => {
    setProgress(getAllProgress());
  }, []);

  const totalCompleted = Object.values(progress).filter((p) => p.completed).length;
  const totalPct = Math.round((totalCompleted / TOTAL_LEKTIONS) * 100);

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-6 text-white">
        <h1 className="text-2xl font-black tracking-tight">ZUSAMMEN A1</h1>
        <p className="text-blue-100 text-sm mt-1">독일어 A1 단계 완성</p>
        <div className="mt-4">
          <div className="flex items-center justify-between text-sm mb-1">
            <span className="text-blue-100">전체 진도</span>
            <span className="font-bold">{totalCompleted}/{TOTAL_LEKTIONS} 강</span>
          </div>
          <div className="h-2 bg-blue-400/40 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all"
              style={{ width: `${totalPct}%` }}
            />
          </div>
          <p className="text-right text-xs text-blue-100 mt-1">{totalPct}%</p>
        </div>
      </div>

      {/* Band Grid */}
      <div className="grid grid-cols-1 gap-3">
        {Array.from({ length: TOTAL_BANDS }, (_, i) => i + 1).map((band) => {
          const lektions = getLektionsByBand(band);
          const completed = lektions.filter((l) => progress[l.id]?.completed).length;
          const pct = lektions.length > 0 ? Math.round((completed / lektions.length) * 100) : 0;

          return (
            <Link key={band} href={`/band/${band}`}>
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="flex items-center gap-4 p-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${BAND_COLORS[band]} flex items-center justify-center text-white font-black text-sm flex-shrink-0`}
                  >
                    B{band}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-gray-800 text-sm">BAND {band}</p>
                      <span className="text-xs text-gray-400">{completed}/{lektions.length}</span>
                    </div>
                    <p className="text-gray-500 text-xs mt-0.5">{BAND_TITLES[band]}</p>
                    <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${BAND_COLORS[band]} rounded-full transition-all`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <p className="text-center text-xs text-gray-400 pb-4">
        Lektion을 탭해서 학습을 시작하세요
      </p>
    </div>
  );
}
