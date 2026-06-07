"use client";

import { curriculum } from "@/data/curriculum";
import type { SrsCard, SrsDeck, SrsGrade, DailyStore, DailyLog } from "@/types";

const SRS_KEY = "gs_srs_v1";
const DAILY_KEY = "gs_daily_v1";

export const DEFAULT_GOAL = 20;
export const DEFAULT_NEW_PER_DAY = 10;

// ── 날짜 유틸 (로컬 기준 yyyy-mm-dd) ──────────────────────
export function todayStr(d: Date = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function addDays(dateStr: string, n: number): string {
  const [y, m, d] = dateStr.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  dt.setDate(dt.getDate() + n);
  return todayStr(dt);
}

function daysBetween(from: string, to: string): number {
  const [ay, am, ad] = from.split("-").map(Number);
  const [by, bm, bd] = to.split("-").map(Number);
  const a = new Date(ay, am - 1, ad).getTime();
  const b = new Date(by, bm - 1, bd).getTime();
  return Math.round((b - a) / 86400000);
}

// ── 전역 카드 목록 (교재 순서, german 기준 중복 제거) ─────
export type GlobalCard = { german: string; korean: string; note?: string; lektionId: number };

let _globalCards: GlobalCard[] | null = null;
export function getAllCards(): GlobalCard[] {
  if (_globalCards) return _globalCards;
  const seen = new Set<string>();
  const out: GlobalCard[] = [];
  for (const lek of curriculum) {
    for (const c of [...lek.expressions, ...lek.vocabulary]) {
      const g = c.german.trim();
      if (!g || seen.has(g)) continue;
      seen.add(g);
      out.push({
        german: g,
        korean: c.korean,
        note: (c as { note?: string }).note,
        lektionId: lek.id,
      });
    }
  }
  _globalCards = out;
  return out;
}

// ── 덱 저장/로드 ──────────────────────────────────────────
export function getDeck(): SrsDeck {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(SRS_KEY);
    return raw ? (JSON.parse(raw) as SrsDeck) : {};
  } catch {
    return {};
  }
}

function saveDeck(deck: SrsDeck): void {
  localStorage.setItem(SRS_KEY, JSON.stringify(deck));
}

// ── 일일 기록 저장/로드 ───────────────────────────────────
export function getDaily(): DailyStore {
  const fallback: DailyStore = { goal: DEFAULT_GOAL, newPerDay: DEFAULT_NEW_PER_DAY, days: {} };
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(DAILY_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw) as Partial<DailyStore>;
    return {
      goal: parsed.goal ?? DEFAULT_GOAL,
      newPerDay: parsed.newPerDay ?? DEFAULT_NEW_PER_DAY,
      days: parsed.days ?? {},
    };
  } catch {
    return fallback;
  }
}

function saveDaily(store: DailyStore): void {
  localStorage.setItem(DAILY_KEY, JSON.stringify(store));
}

export function setDailyGoal(goal: number, newPerDay?: number): void {
  const store = getDaily();
  store.goal = Math.max(5, Math.round(goal));
  if (newPerDay != null) store.newPerDay = Math.max(0, Math.round(newPerDay));
  saveDaily(store);
}

function logDay(kind: "review" | "new"): void {
  const store = getDaily();
  const today = todayStr();
  const entry: DailyLog = store.days[today] ?? { reviews: 0, news: 0 };
  if (kind === "review") entry.reviews += 1;
  else entry.news += 1;
  store.days[today] = entry;
  saveDaily(store);
}

// ── 큐 구성 ───────────────────────────────────────────────
/** 오늘(또는 그 이전)이 복습 예정일인 카드들 */
export function getDueCards(): SrsCard[] {
  const deck = getDeck();
  const today = todayStr();
  return Object.values(deck)
    .filter((c) => c.due <= today)
    .sort((a, b) => (a.due < b.due ? -1 : a.due > b.due ? 1 : a.lapses - b.lapses));
}

/** 아직 덱에 없는 새 카드들 (교재 순서) */
export function getNewCardPool(): GlobalCard[] {
  const deck = getDeck();
  return getAllCards().filter((c) => !deck[c.german]);
}

export type DailyStats = {
  goal: number;
  newPerDay: number;
  doneToday: number;      // 오늘 복습+새카드 합
  reviewsToday: number;
  newsToday: number;
  dueCount: number;       // 복습 대기 카드 수
  newRemainingToday: number; // 오늘 더 학습 가능한 새 카드 수
  newPoolCount: number;   // 전체 미학습 새 카드 수
  deckSize: number;
  streak: number;
};

export function getDailyStats(): DailyStats {
  const store = getDaily();
  const deck = getDeck();
  const today = todayStr();
  const todayLog = store.days[today] ?? { reviews: 0, news: 0 };
  const newPool = getNewCardPool();
  const newRemaining = Math.max(0, store.newPerDay - todayLog.news);

  return {
    goal: store.goal,
    newPerDay: store.newPerDay,
    reviewsToday: todayLog.reviews,
    newsToday: todayLog.news,
    doneToday: todayLog.reviews + todayLog.news,
    dueCount: getDueCards().length,
    newRemainingToday: Math.min(newRemaining, newPool.length),
    newPoolCount: newPool.length,
    deckSize: Object.keys(deck).length,
    streak: computeStreak(store),
  };
}

/** 오늘부터 거꾸로 활동(복습 또는 새카드)이 끊기지 않은 연속 일수 */
export function computeStreak(store: DailyStore = getDaily()): number {
  let streak = 0;
  let cursor = todayStr();
  // 오늘 활동이 없으면 어제부터 카운트 시작 (오늘은 아직 진행 중)
  const todayLog = store.days[cursor];
  if (!todayLog || todayLog.reviews + todayLog.news === 0) {
    cursor = addDays(cursor, -1);
  }
  while (true) {
    const log = store.days[cursor];
    if (log && log.reviews + log.news > 0) {
      streak += 1;
      cursor = addDays(cursor, -1);
    } else break;
  }
  return streak;
}

// ── 채점 / 스케줄링 (SM-2 간소화) ─────────────────────────
const MIN_EASE = 1.3;
const MAX_INTERVAL = 365;

function freshCard(card: GlobalCard): SrsCard {
  return {
    german: card.german,
    korean: card.korean,
    note: card.note,
    lektionId: card.lektionId,
    ease: 2.3,
    intervalDays: 0,
    due: todayStr(),
    reps: 0,
    lapses: 0,
  };
}

/**
 * 카드를 채점하고 다음 복습 일정을 계산해 저장한다.
 * 덱에 없던 카드면 새 카드로 등록(새 학습으로 기록).
 */
export function gradeCard(card: GlobalCard, grade: SrsGrade): SrsCard {
  const deck = getDeck();
  const existing = deck[card.german];
  const isNew = !existing;
  const c: SrsCard = existing ?? freshCard(card);
  const today = todayStr();

  let { ease, intervalDays, reps, lapses } = c;

  switch (grade) {
    case "again":
      lapses += 1;
      reps = 0;
      ease = Math.max(MIN_EASE, ease - 0.2);
      intervalDays = 0; // 오늘 다시
      break;
    case "hard":
      ease = Math.max(MIN_EASE, ease - 0.15);
      intervalDays = reps === 0 ? 1 : Math.max(1, Math.round(intervalDays * 1.2));
      reps += 1;
      break;
    case "good":
      intervalDays =
        reps === 0 ? 1 : reps === 1 ? 3 : Math.round(intervalDays * ease);
      reps += 1;
      break;
    case "easy":
      ease += 0.15;
      intervalDays =
        reps === 0 ? 4 : Math.round(intervalDays * ease * 1.3);
      reps += 1;
      break;
  }

  intervalDays = Math.min(intervalDays, MAX_INTERVAL);
  const due = intervalDays <= 0 ? today : addDays(today, intervalDays);

  const updated: SrsCard = { ...c, ease, intervalDays, reps, lapses, due, last: today };
  deck[card.german] = updated;
  saveDeck(deck);

  logDay(isNew ? "new" : "review");
  return updated;
}

/** 사람이 읽기 쉬운 다음 복습 간격 텍스트 */
export function intervalLabel(grade: SrsGrade, card?: SrsCard): string {
  // 버튼에 미리보기로 보여줄 대략적 간격
  if (grade === "again") return "10분";
  const reps = card?.reps ?? 0;
  const ease = card?.ease ?? 2.3;
  const prev = card?.intervalDays ?? 0;
  let days: number;
  if (grade === "hard") days = reps === 0 ? 1 : Math.max(1, Math.round(prev * 1.2));
  else if (grade === "good") days = reps === 0 ? 1 : reps === 1 ? 3 : Math.round(prev * ease);
  else days = reps === 0 ? 4 : Math.round(prev * ease * 1.3);
  days = Math.min(days, MAX_INTERVAL);
  if (days >= 30) return `${Math.round(days / 30)}개월`;
  return `${days}일`;
}

export { daysBetween };
