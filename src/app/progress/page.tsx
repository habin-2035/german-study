"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BAND_TITLES, getLektionsByBand, TOTAL_BANDS } from "@/data/curriculum";
import { getAllProgress } from "@/lib/storage";
import { getDailyStats, getDeck, type DailyStats } from "@/lib/srs";
import { downloadBackup, parseBackup, restoreBackup, type Backup } from "@/lib/backup";
import GermanText from "@/components/GermanText";
import type { AllProgress, SrsCard } from "@/types";

export default function ProgressPage() {
  const [progress, setProgress] = useState<AllProgress>({});
  const [stats, setStats] = useState<DailyStats | null>(null);
  const [hardest, setHardest] = useState<SrsCard[]>([]);
  const [pending, setPending] = useState<Backup | null>(null);
  const [backupMsg, setBackupMsg] = useState("");

  function load() {
    setProgress(getAllProgress());
    setStats(getDailyStats());
    setHardest(
      Object.values(getDeck())
        .filter((c) => c.lapses > 0)
        .sort((a, b) => b.lapses - a.lapses || a.ease - b.ease)
        .slice(0, 12),
    );
  }

  useEffect(() => {
    load();
  }, []);

  async function onPickFile(file: File | undefined) {
    if (!file) return;
    try {
      setPending(parseBackup(await file.text()));
      setBackupMsg("");
    } catch (e) {
      setPending(null);
      setBackupMsg(e instanceof Error ? e.message : "파일을 읽을 수 없어요");
    }
  }

  const totalCompleted = Object.values(progress).filter((p) => p.completed).length;
  const totalVideos = Object.values(progress).filter((p) => p.videoWatched).length;
  const totalNotes = Object.values(progress).filter((p) => !!p.note).length;

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-black tracking-tight text-slate-900">학습 현황</h1>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
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

      {/* 자주 틀리는 카드 */}
      {hardest.length > 0 && (
        <section>
          <h2 className="text-xs font-bold text-slate-400 tracking-widest px-1 mb-3">자주 틀리는 카드</h2>
          <div className="card grid sm:grid-cols-2 divide-y sm:divide-y-0 divide-slate-100">
            {hardest.map((c) => (
              <div key={c.german} className="flex items-center justify-between gap-3 px-4 py-2.5 sm:border-b border-slate-100">
                <div className="min-w-0">
                  <GermanText german={c.german} className="font-semibold text-slate-800" />
                  <p className="text-xs text-slate-400 truncate">{c.korean}</p>
                </div>
                <span className="text-xs text-red-500 bg-red-50 px-2 py-0.5 rounded-md flex-shrink-0">{c.lapses}회 틀림</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Per Band */}
      <div className="grid md:grid-cols-2 gap-3">
        <h2 className="md:col-span-2 text-xs font-bold text-slate-400 tracking-widest uppercase px-1">밴드별 진도</h2>
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

      {/* 백업 */}
      <section className="card p-5 flex flex-col gap-3">
        <div>
          <h2 className="text-sm font-bold text-slate-800">기록 백업 · 옮기기</h2>
          <p className="text-xs text-slate-400 mt-0.5">
            학습 기록은 이 브라우저에만 저장돼요. 다른 컴퓨터로 옮기려면 백업 파일을 내려받아 그쪽에서 불러오세요.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button onClick={downloadBackup} className="btn-primary px-4 py-2 rounded-xl text-sm font-semibold">
            백업 파일 내려받기
          </button>
          <label className="px-4 py-2 rounded-xl text-sm font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200 cursor-pointer">
            백업 불러오기…
            <input type="file" accept="application/json,.json" className="hidden"
              onChange={(e) => { onPickFile(e.target.files?.[0]); e.target.value = ""; }} />
          </label>
        </div>
        {backupMsg && <p className="text-xs text-slate-500">{backupMsg}</p>}
        {pending && (
          <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 text-sm flex flex-col gap-3">
            <p className="text-amber-800">
              {pending.exportedAt.slice(0, 10)}에 만든 백업이에요. 불러오면 <b>지금 이 브라우저의 기록이 백업 내용으로 바뀌어요.</b>
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => { restoreBackup(pending); setPending(null); setBackupMsg("불러오기 완료 ✓"); load(); }}
                className="px-4 py-2 rounded-xl text-sm font-semibold bg-amber-500 text-white hover:bg-amber-600"
              >
                바꾸고 불러오기
              </button>
              <button onClick={() => setPending(null)} className="px-4 py-2 rounded-xl text-sm font-semibold bg-white text-slate-600 border border-slate-200">
                취소
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
