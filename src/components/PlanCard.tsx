"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BAND_TITLES } from "@/data/curriculum";
import { TOPICS } from "@/data/words-a1";
import {
  PLAN_END, PLAN_STAGES, bandStatus, daysLeft, getPlanPhase, suggestedNewPerDay,
  type LektionStatus, type PlanPhase,
} from "@/lib/plan";
import { getDailyStats, setDailyGoal, setNewRange, type DailyStats } from "@/lib/srs";
import { setWordTopics, topicStats, type TopicStat } from "@/lib/words";
import type { TopicId } from "@/data/words-a1";

const pad = (n: number) => String(n).padStart(2, "0");
const md = (d: string) => `${Number(d.slice(5, 7))}/${Number(d.slice(8, 10))}`;

type State = {
  phase: PlanPhase;
  lektions: LektionStatus[];
  daily: DailyStats;
  words: Record<TopicId, TopicStat>;
};

function load(): State {
  const phase = getPlanPhase();
  return {
    phase,
    lektions: phase.kind === "stage" ? bandStatus(phase.stage.band) : [],
    daily: getDailyStats(),
    words: topicStats(),
  };
}

export default function PlanCard() {
  const router = useRouter();
  const [s, setS] = useState<State | null>(null);

  useEffect(() => {
    setS(load());
  }, []);

  if (!s || s.phase.kind === "before") return null;
  const { phase } = s;

  if (phase.kind === "final" || phase.kind === "done") {
    return (
      <section className="card p-6 fade-up">
        <p className="text-xs font-bold text-slate-400 tracking-widest">2달 A1 계획</p>
        {phase.kind === "final" ? (
          <>
            <p className="text-lg font-black text-slate-900 mt-2">마무리 기간 · D-{daysLeft(PLAN_END)}</p>
            <p className="text-sm text-slate-500 mt-1">
              복습 대기 카드를 0으로 만들고, 단어장 &lsquo;약한 단어&rsquo;를 돌리고, Goethe A1 연습 시험지(Übungssatz)로 듣기·읽기·쓰기·말하기를 점검해요.
            </p>
          </>
        ) : (
          <p className="text-lg font-black text-slate-900 mt-2">계획 완주 🎉 A1 끝!</p>
        )}
      </section>
    );
  }

  const { stage, index, days, dayIndex, expectedDone, expectedBefore } = phase;
  const doneCount = s.lektions.filter((l) => l.done).length;
  const behind = expectedBefore - doneCount; // 어제까지 분량 중 못 한 강
  const todayLeft = expectedDone - doneCount; // 오늘 끝내야 할 남은 강
  const pace =
    behind > 0
      ? { text: `${behind}강 밀렸어요`, cls: "bg-amber-50 text-amber-700" }
      : todayLeft > 0
        ? { text: `오늘 ${todayLeft}강 남았어요`, cls: "bg-indigo-50 text-indigo-700" }
        : todayLeft < 0
          ? { text: `${-todayLeft}강 앞서가요`, cls: "bg-emerald-50 text-emerald-700" }
          : { text: "오늘 분량 완료 ✓", cls: "bg-emerald-50 text-emerald-700" };
  const next = s.lektions.find((l) => !l.done);
  const firstId = s.lektions[0]?.id ?? 1;
  const lastId = s.lektions[s.lektions.length - 1]?.id ?? firstId;
  const perDay = Math.round((s.lektions.length / days) * 10) / 10;
  const suggested = suggestedNewPerDay(stage);
  const settingsOk =
    s.daily.rangeFrom === firstId && s.daily.rangeTo === lastId && s.daily.newPerDay >= suggested;

  const wordTotal = stage.topics.reduce((a, t) => a + s.words[t].total, 0);
  const wordMastered = stage.topics.reduce((a, t) => a + s.words[t].mastered, 0);
  const wordSeen = stage.topics.reduce((a, t) => a + s.words[t].seen, 0);

  function applySettings() {
    setNewRange(firstId, lastId);
    setDailyGoal(Math.max(s!.daily.goal, suggested + 10), suggested);
    setS(load());
  }

  function studyWords() {
    setWordTopics(stage.topics);
    router.push("/words");
  }

  return (
    <section className="card p-6 fade-up" style={{ animationDelay: "90ms" }}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <p className="text-xs font-bold text-slate-400 tracking-widest">
          2달 A1 계획 · {index + 1}/{PLAN_STAGES.length}단계
        </p>
        <p className="text-xs text-slate-400 tabular-nums">
          {md(stage.start)}–{md(stage.end)} · {dayIndex + 1}/{days}일째 · 완주까지 D-{daysLeft(PLAN_END)}
        </p>
      </div>

      <div className="flex flex-wrap items-end justify-between gap-3 mt-2">
        <div>
          <p className="text-lg font-black text-slate-900 leading-tight">
            BAND {stage.band} · {BAND_TITLES[stage.band]}
          </p>
          <p className="text-sm text-slate-500 mt-0.5">하루 {perDay}강 · 오늘까지 L{pad(firstId + expectedDone - 1)} 목표</p>
        </div>
        <span className={`chip px-2.5 py-1 text-xs font-semibold ${pace.cls}`}>{pace.text}</span>
      </div>

      {/* 강별 진행 */}
      <div className="grid grid-cols-7 gap-1.5 mt-4">
        {s.lektions.map((l) => {
          const isNext = next?.id === l.id;
          return (
            <Link
              key={l.id}
              href={`/lektion/${l.id}`}
              title={`L${pad(l.id)} ${l.title} · 카드 ${l.learned}/${l.total}`}
              className={`rounded-lg py-2 text-center text-xs font-bold tabular-nums transition-colors ${
                l.done
                  ? "bg-indigo-600 text-white"
                  : isNext
                    ? "bg-indigo-50 text-indigo-700 ring-2 ring-indigo-300"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200"
              }`}
            >
              L{pad(l.id)}
            </Link>
          );
        })}
      </div>

      <div className="grid sm:grid-cols-2 gap-3 mt-4">
        {/* 교재 */}
        <div className="rounded-2xl bg-slate-50 p-4 flex flex-col gap-2">
          <p className="text-[11px] font-bold text-slate-400 tracking-wider">교재 {doneCount}/{s.lektions.length}강</p>
          {next ? (
            <p className="text-sm font-semibold text-slate-800 leading-snug">
              다음: L{pad(next.id)} {next.title}
              <span className="text-slate-400 font-normal"> · 카드 {next.learned}/{next.total}</span>
            </p>
          ) : (
            <p className="text-sm font-semibold text-emerald-700">이 밴드 다 했어요 — 복습 위주로!</p>
          )}
          <div className="flex gap-2 mt-auto pt-1">
            {next && (
              <Link href={`/review?lektion=${next.id}`} className="flex-1 text-center btn-primary px-3 py-2 rounded-xl text-sm font-semibold">
                L{pad(next.id)} 집중 학습
              </Link>
            )}
            {!settingsOk && (
              <button
                onClick={applySettings}
                className="flex-1 px-3 py-2 rounded-xl text-sm font-semibold bg-white text-indigo-700 ring-1 ring-indigo-200 hover:bg-indigo-50"
                title={`오늘의 학습 새 카드: L${pad(firstId)}–L${pad(lastId)}, 하루 ${suggested}장`}
              >
                새 카드 맞추기
              </button>
            )}
          </div>
          {!settingsOk && (
            <p className="text-[11px] text-slate-400">
              오늘의 학습 새 카드를 L{pad(firstId)}–L{pad(lastId)}, 하루 {suggested}장으로 맞춰요
            </p>
          )}
        </div>

        {/* 단어장 */}
        <div className="rounded-2xl bg-slate-50 p-4 flex flex-col gap-2">
          <p className="text-[11px] font-bold text-slate-400 tracking-wider">
            단어 외움 {wordMastered}/{wordTotal} · 본 단어 {wordSeen}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {stage.topics.map((t) => {
              const meta = TOPICS.find((x) => x.id === t)!;
              const st = s.words[t];
              return (
                <span key={t} className="chip bg-white text-slate-600 px-2 py-1 text-xs ring-1 ring-slate-200">
                  {meta.icon} {meta.label} <span className="text-slate-400 tabular-nums">{st.mastered}/{st.total}</span>
                </span>
              );
            })}
          </div>
          <button
            onClick={studyWords}
            className="mt-auto px-3 py-2 rounded-xl text-sm font-semibold bg-white text-indigo-700 ring-1 ring-indigo-200 hover:bg-indigo-50"
          >
            이번 단계 단어 학습 (하루 약 {Math.ceil(wordTotal / days)}개)
          </button>
        </div>
      </div>
    </section>
  );
}
