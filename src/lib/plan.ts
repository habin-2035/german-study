"use client";

// 2달 A1 완주 계획 (2026-11-06 시작 → 2027-01-06, 하루 30–40분).
// 밴드 1·2는 한 번 해 본 범위라 하루 2강, 어려운 6(화법조동사)·7(과거)은 9일씩.
// 단어장은 하루 약 15개가 되도록 주제를 나눔. 날짜는 로컬 기준 yyyy-mm-dd.

import { getLektionsByBand } from "@/data/curriculum";
import type { TopicId } from "@/data/words-a1";
import { getAllCards, getDeck, todayStr, daysBetween } from "@/lib/srs";
import { getAllProgress } from "@/lib/storage";

export type PlanStage = { band: number; start: string; end: string; topics: TopicId[] };

export const PLAN_STAGES: PlanStage[] = [
  { band: 1, start: "2026-11-06", end: "2026-11-09", topics: ["greetings", "people"] },
  { band: 2, start: "2026-11-10", end: "2026-11-13", topics: ["time"] },
  { band: 3, start: "2026-11-14", end: "2026-11-20", topics: ["food", "shopping", "personal"] },
  { band: 4, start: "2026-11-21", end: "2026-11-27", topics: ["home", "city", "travel"] },
  { band: 5, start: "2026-11-28", end: "2026-12-04", topics: ["numbers", "nature", "leisure"] },
  { band: 6, start: "2026-12-05", end: "2026-12-13", topics: ["verbs", "work", "school"] },
  { band: 7, start: "2026-12-14", end: "2026-12-22", topics: ["describe", "body", "communication"] },
  { band: 8, start: "2026-12-23", end: "2026-12-29", topics: ["function"] },
];
export const PLAN_START = PLAN_STAGES[0].start;
export const FINAL_START = "2026-12-30";
export const PLAN_END = "2027-01-06";

export type PlanPhase =
  | { kind: "before" }
  | {
      kind: "stage"; stage: PlanStage; index: number;
      days: number;      // 이 단계 총 일수
      dayIndex: number;  // 오늘이 몇 번째 날 (0부터)
      expectedDone: number; // 오늘이 끝날 때까지 끝낼 강 수
      expectedBefore: number; // 어제까지 끝냈어야 할 강 수
    }
  | { kind: "final" }
  | { kind: "done" };

export function getPlanPhase(today: string = todayStr()): PlanPhase {
  if (today < PLAN_START) return { kind: "before" };
  const index = PLAN_STAGES.findIndex((s) => today >= s.start && today <= s.end);
  if (index >= 0) {
    const stage = PLAN_STAGES[index];
    const days = daysBetween(stage.start, stage.end) + 1;
    const dayIndex = daysBetween(stage.start, today);
    const total = getLektionsByBand(stage.band).length;
    return {
      kind: "stage", stage, index, days, dayIndex,
      expectedDone: Math.ceil((total * (dayIndex + 1)) / days),
      expectedBefore: Math.ceil((total * dayIndex) / days),
    };
  }
  if (today <= PLAN_END) return { kind: "final" };
  return { kind: "done" };
}

export function daysLeft(end: string, today: string = todayStr()): number {
  return daysBetween(today, end) + 1;
}

export type LektionStatus = { id: number; title: string; done: boolean; learned: number; total: number };

/** 강을 끝낸 것으로 보는 기준: '완료 체크'를 했거나 그 강 카드를 전부 한 번 이상 학습함 */
export function bandStatus(band: number): LektionStatus[] {
  const deck = getDeck();
  const progress = getAllProgress();
  const cards = getAllCards();
  return getLektionsByBand(band).map((l) => {
    const mine = cards.filter((c) => c.lektionId === l.id);
    const learned = mine.filter((c) => deck[c.german]).length;
    return {
      id: l.id, title: l.title, learned, total: mine.length,
      done: !!progress[l.id]?.completed || (mine.length > 0 && learned === mine.length),
    };
  });
}

/** 이 단계 밴드 카드 수 ÷ 일수 → 하루 새 카드 권장량 */
export function suggestedNewPerDay(stage: PlanStage): number {
  const ids = new Set(getLektionsByBand(stage.band).map((l) => l.id));
  const n = getAllCards().filter((c) => ids.has(c.lektionId)).length;
  const days = daysBetween(stage.start, stage.end) + 1;
  return Math.max(5, Math.ceil(n / days));
}
