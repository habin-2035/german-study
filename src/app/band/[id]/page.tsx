"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getLektionsByBand, BAND_TITLES } from "@/data/curriculum";
import { getAllProgress } from "@/lib/storage";
import type { AllProgress } from "@/types";

export default function BandPage() {
  const { id } = useParams();
  const band = Number(id);
  const lektions = getLektionsByBand(band);
  const [progress, setProgress] = useState<AllProgress>({});

  useEffect(() => {
    setProgress(getAllProgress());
  }, []);

  if (lektions.length === 0) {
    return (
      <div className="text-center py-20 text-gray-400">
        BAND를 찾을 수 없습니다.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Link href="/" className="text-gray-400 hover:text-gray-600 text-sm">
          ← 홈
        </Link>
      </div>

      <div>
        <h1 className="text-xl font-black text-gray-800">BAND {band}</h1>
        <p className="text-gray-500 text-sm">{BAND_TITLES[band]} — Lektion {lektions[0].id}~{lektions[lektions.length - 1].id}</p>
      </div>

      {/* Lektion List */}
      <div className="flex flex-col gap-2">
        {lektions.map((lektion) => {
          const p = progress[lektion.id];
          const completed = p?.completed ?? false;
          const videoWatched = p?.videoWatched ?? false;
          const hasNote = !!p?.note;

          return (
            <Link key={lektion.id} href={`/lektion/${lektion.id}`}>
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-4 flex items-center gap-4">
                {/* Number */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                    completed
                      ? "bg-green-100 text-green-600"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {String(lektion.id).padStart(2, "0")}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-800 text-sm truncate">
                    {lektion.title}
                    {lektion.subtitle && (
                      <span className="text-gray-400 font-normal ml-1">— {lektion.subtitle}</span>
                    )}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    {lektion.vocabulary.length > 0 && (
                      <span className="text-xs text-gray-400">{lektion.vocabulary.length}단어</span>
                    )}
                    {lektion.expressions.length > 0 && (
                      <span className="text-xs text-gray-400">{lektion.expressions.length}표현</span>
                    )}
                  </div>
                </div>

                {/* Badges */}
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  {videoWatched && (
                    <span className="text-xs bg-purple-50 text-purple-500 px-1.5 py-0.5 rounded-md">▶</span>
                  )}
                  {hasNote && (
                    <span className="text-xs bg-yellow-50 text-yellow-600 px-1.5 py-0.5 rounded-md">📝</span>
                  )}
                  {completed && (
                    <span className="text-xs bg-green-50 text-green-600 px-1.5 py-0.5 rounded-md">✓</span>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
