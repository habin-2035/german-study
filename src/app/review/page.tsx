"use client";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import StudySession from "@/components/StudySession";
import {
  buildDailySession, buildLektionSession, getDailyStats, setDailyGoal, setNewRange, getAllCards, getDeck,
  DEFAULT_GOAL, DEFAULT_NEW_PER_DAY, type DailyStats, type SessionItem,
} from "@/lib/srs";
import { curriculum, getLektionById } from "@/data/curriculum";

const LAST_LEKTION = curriculum[curriculum.length - 1].id;
const pad = (n: number) => String(n).padStart(2, "0");

export default function ReviewPage() {
  return (
    <Suspense fallback={<div className="h-96" />}>
      <Review />
    </Suspense>
  );
}

function Review() {
  const params = useSearchParams();
  const lektionId = Number(params.get("lektion")) || null;
  const lektion = lektionId ? getLektionById(lektionId) : undefined;

  const [queue, setQueue] = useState<SessionItem[] | null>(null);
  // 설정을 바꿔 세션을 새로 만들 때마다 증가 → StudySession을 새로 시작
  const [sessionNo, setSessionNo] = useState(0);
  const [stats, setStats] = useState<DailyStats | null>(null);
  const [editing, setEditing] = useState(false);
  const [goal, setGoal] = useState(DEFAULT_GOAL);
  const [newPerDay, setNewPerDay] = useState(DEFAULT_NEW_PER_DAY);
  const [rangeFrom, setRangeFrom] = useState(1);
  const [rangeTo, setRangeTo] = useState(LAST_LEKTION);

  useEffect(() => {
    const s = getDailyStats();
    setStats(s);
    setGoal(s.goal);
    setNewPerDay(s.newPerDay);
    setRangeFrom(s.rangeFrom);
    setRangeTo(s.rangeTo);
    setQueue(lektionId ? buildLektionSession(lektionId) : buildDailySession());
  }, [lektionId]);

  function saveGoal() {
    setDailyGoal(goal, newPerDay);
    setNewRange(rangeFrom, rangeTo);
    const s = getDailyStats();
    setStats(s);
    setEditing(false);
    if (!lektionId) {
      setQueue(buildDailySession());
      setSessionNo((n) => n + 1);
    }
  }

  return (
    <div className="flex flex-col gap-5 max-w-3xl mx-auto w-full">
      <div className="flex items-start justify-between gap-4">
        <div>
          {lektion ? (
            <>
              <Link href={`/lektion/${lektion.id}`} className="text-xs text-slate-400 hover:text-indigo-500">
                ← L{String(lektion.id).padStart(2, "0")} {lektion.title}
              </Link>
              <h1 className="text-2xl font-black tracking-tight text-slate-900 mt-1">이 강 집중 학습</h1>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-black tracking-tight text-slate-900">오늘의 학습</h1>
              <p className="text-sm text-slate-400 mt-0.5">
                복습할 카드와 새 카드를 섞어서 · 한국어를 보고 독일어로 떠올리기
              </p>
              {stats && (
                <button
                  onClick={() => setEditing(true)}
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
                >
                  새 카드 범위 L{pad(stats.rangeFrom)} – L{pad(stats.rangeTo)}
                  {stats.rangeFrom === 1 && stats.rangeTo === LAST_LEKTION ? " (전체)" : ""} · 바꾸기
                </button>
              )}
            </>
          )}
        </div>
        {!lektion && stats && (
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="hidden sm:flex items-center gap-3 text-xs text-slate-500">
              <span>오늘 <b className="text-slate-800 tabular-nums">{stats.doneToday}</b>/{stats.goal}</span>
              <span>🔥 <b className="text-slate-800">{stats.streak}</b>일</span>
            </div>
            <button
              onClick={() => setEditing((v) => !v)}
              className="text-slate-400 hover:text-indigo-500 transition-colors text-sm px-2 py-1 rounded-lg hover:bg-slate-100"
            >
              ⚙ 목표·범위
            </button>
          </div>
        )}
      </div>

      {editing && (
        <div className="card p-5 flex flex-col gap-5 fade-up">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-bold text-slate-800">새 카드 범위</p>
            <p className="text-xs text-slate-400 -mt-1">
              이 범위의 강에서만 새 카드가 나와요. 이미 배운 카드의 복습은 범위와 상관없이 계속 나와요.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <select value={rangeFrom} onChange={(e) => setRangeFrom(Number(e.target.value))}
                className="border border-slate-200 rounded-lg px-2 py-1.5 text-sm outline-none focus:border-indigo-400 bg-white max-w-[16rem]">
                {curriculum.map((l) => <option key={l.id} value={l.id}>L{pad(l.id)} {l.title}</option>)}
              </select>
              <span className="text-slate-400 text-sm">부터</span>
              <select value={rangeTo} onChange={(e) => setRangeTo(Number(e.target.value))}
                className="border border-slate-200 rounded-lg px-2 py-1.5 text-sm outline-none focus:border-indigo-400 bg-white max-w-[16rem]">
                {curriculum.map((l) => <option key={l.id} value={l.id}>L{pad(l.id)} {l.title}</option>)}
              </select>
              <span className="text-slate-400 text-sm">까지</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                { label: "전체", from: 1, to: LAST_LEKTION },
                { label: "알파벳(L01) 빼고", from: 2, to: LAST_LEKTION },
                ...Array.from(new Set(curriculum.map((l) => l.band))).map((b) => {
                  const ids = curriculum.filter((l) => l.band === b).map((l) => l.id);
                  return { label: `BAND ${b}`, from: Math.min(...ids), to: Math.max(...ids) };
                }),
              ].map((p) => (
                <button key={p.label} onClick={() => { setRangeFrom(p.from); setRangeTo(p.to); }}
                  className={`text-xs px-2.5 py-1 rounded-lg font-medium transition-colors ${
                    rangeFrom === p.from && rangeTo === p.to ? "bg-indigo-500 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}>
                  {p.label}
                </button>
              ))}
            </div>
            <RangePreview from={Math.min(rangeFrom, rangeTo)} to={Math.max(rangeFrom, rangeTo)} />
          </div>
        <div className="flex flex-wrap items-end gap-4 pt-4 border-t border-slate-100">
          <label className="flex flex-col gap-1 text-xs text-slate-500">
            하루 목표 카드
            <input type="number" min={5} max={200} value={goal}
              onChange={(e) => setGoal(Number(e.target.value))}
              className="w-24 border border-slate-200 rounded-lg px-2 py-1.5 text-sm text-right outline-none focus:border-indigo-400" />
          </label>
          <label className="flex flex-col gap-1 text-xs text-slate-500">
            하루 새 카드 한도
            <input type="number" min={0} max={100} value={newPerDay}
              onChange={(e) => setNewPerDay(Number(e.target.value))}
              className="w-24 border border-slate-200 rounded-lg px-2 py-1.5 text-sm text-right outline-none focus:border-indigo-400" />
          </label>
          <button onClick={saveGoal} className="btn-primary px-4 py-2 rounded-xl text-sm font-semibold">저장하고 다시 시작</button>
          <button onClick={() => setEditing(false)} className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-500 hover:bg-slate-100">취소</button>
        </div>
        </div>
      )}

      {queue && (
        <StudySession
          key={`${lektionId ?? "daily"}-${sessionNo}`}
          initialQueue={queue}
          title={lektion ? `L${String(lektion.id).padStart(2, "0")}` : undefined}
          onMore={lektionId ? undefined : () => buildDailySession(10)}
        />
      )}
    </div>
  );
}

/** 선택한 범위에서 아직 안 배운 카드 수와 처음 나올 카드 미리보기 */
function RangePreview({ from, to }: { from: number; to: number }) {
  const deck = getDeck();
  const pool = getAllCards().filter((c) => c.lektionId >= from && c.lektionId <= to);
  const fresh = pool.filter((c) => !deck[c.german]);
  return (
    <p className="text-xs text-slate-500">
      범위 안 카드 {pool.length}장 · 아직 안 배운 카드 <b className="text-slate-800">{fresh.length}장</b>
      {fresh.length > 0 && (
        <span className="text-slate-400"> · 다음으로 나올 카드: {fresh.slice(0, 4).map((c) => c.german).join(", ")}…</span>
      )}
    </p>
  );
}
