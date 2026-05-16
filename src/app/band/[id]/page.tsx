"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getLektionsByBand, BAND_TITLES } from "@/data/curriculum";
import { getAllProgress } from "@/lib/storage";
import type { AllProgress } from "@/types";

const BAND_COLORS: Record<number, string> = {
  1: "bg-blue-500", 2: "bg-cyan-500", 3: "bg-teal-500", 4: "bg-emerald-500",
  5: "bg-amber-500", 6: "bg-orange-500", 7: "bg-rose-500", 8: "bg-violet-500",
};

export default function BandPage() {
  const { id } = useParams();
  const band = Number(id);
  const lektions = getLektionsByBand(band);
  const [progress, setProgress] = useState<AllProgress>({});

  useEffect(() => { setProgress(getAllProgress()); }, []);

  if (lektions.length === 0) return (
    <div className="text-center py-20 text-slate-400">BAND를 찾을 수 없습니다.</div>
  );

  const completed = lektions.filter((l) => progress[l.id]?.completed).length;

  return (
    <div className="flex flex-col gap-4">
      <Link href="/" className="text-sm text-slate-400 hover:text-blue-500 transition-colors w-fit">
        ← 홈
      </Link>

      {/* Header */}
      <div className="card p-5">
        <div className="flex items-center gap-3">
          <div className={`${BAND_COLORS[band]} w-12 h-12 rounded-xl flex items-center justify-center shadow-sm`}>
            <span className="text-white font-black">{band}</span>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 tracking-wider">BAND {band}</p>
            <h1 className="text-xl font-black text-slate-900">{BAND_TITLES[band]}</h1>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className={`h-full ${BAND_COLORS[band]} rounded-full progress-bar`}
              style={{ width: `${Math.round((completed / lektions.length) * 100)}%` }}
            />
          </div>
          <span className="text-xs text-slate-400">{completed}/{lektions.length} 완료</span>
        </div>
      </div>

      {/* Lektion List */}
      <div className="flex flex-col gap-2">
        {lektions.map((lektion) => {
          const p = progress[lektion.id];
          const isCompleted = p?.completed ?? false;
          const isStudied = !!p?.lastStudied && !isCompleted;

          return (
            <Link key={lektion.id} href={`/lektion/${lektion.id}`}>
              <div className="card card-hover flex items-center gap-4 p-4 cursor-pointer">
                {/* Number */}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0 transition-colors ${
                  isCompleted ? "bg-emerald-100 text-emerald-600" :
                  isStudied ? "bg-blue-50 text-blue-500" :
                  "bg-slate-100 text-slate-400"
                }`}>
                  {isCompleted ? "✓" : String(lektion.id).padStart(2, "0")}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-800 text-sm">
                    {lektion.title}
                    {lektion.subtitle && (
                      <span className="text-slate-400 font-normal"> — {lektion.subtitle}</span>
                    )}
                  </p>
                  <div className="flex items-center gap-2 mt-0.5">
                    {lektion.vocabulary.length > 0 && (
                      <span className="text-xs text-slate-400">{lektion.vocabulary.length}단어</span>
                    )}
                    {lektion.expressions.length > 0 && (
                      <span className="text-xs text-slate-400">{lektion.expressions.length}표현</span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 flex-shrink-0">
                  {p?.videoWatched && <span className="text-xs bg-violet-50 text-violet-400 px-1.5 py-0.5 rounded-md font-medium">▶</span>}
                  {p?.note && <span className="text-xs bg-amber-50 text-amber-500 px-1.5 py-0.5 rounded-md">✎</span>}
                  {p?.quizScore > 0 && <span className="text-xs bg-blue-50 text-blue-400 px-1.5 py-0.5 rounded-md">{p.quizScore}점</span>}
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
