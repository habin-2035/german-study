"use client";

import { WORDS, TOPICS, type Word, type TopicId } from "@/data/words-a1";
import { todayStr, addDays } from "@/lib/srs";

// A1 단어장 플래시카드 기록. 교재 SRS 덱(gs_srs_v1)과는 따로 저장한다.
const KEY = "gs_words_v1";

/** 상자(box)별 다음 복습까지 간격(일). 0 = 오늘 다시 */
const BOX_DAYS = [0, 1, 2, 4, 8, 16, 32];
export const MASTERED_BOX = 4;

export type WordRecord = {
  box: number;
  due: string;   // yyyy-mm-dd
  right: number;
  wrong: number;
  last: string;
};
export type WordProgress = Record<string, WordRecord>;

export function getWordProgress(): WordProgress {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as WordProgress) : {};
  } catch {
    return {};
  }
}

function save(p: WordProgress): void {
  localStorage.setItem(KEY, JSON.stringify(p));
}

/** 알아요/모름 기록. 알면 상자 한 칸 위로, 모르면 맨 아래로 */
export function gradeWord(id: string, known: boolean): WordRecord {
  const p = getWordProgress();
  const today = todayStr();
  const prev = p[id];
  const box = known ? Math.min((prev?.box ?? 0) + 1, BOX_DAYS.length - 1) : 0;
  const rec: WordRecord = {
    box,
    due: addDays(today, BOX_DAYS[box]),
    right: (prev?.right ?? 0) + (known ? 1 : 0),
    wrong: (prev?.wrong ?? 0) + (known ? 0 : 1),
    last: today,
  };
  p[id] = rec;
  save(p);
  return rec;
}

export function resetTopic(topic: TopicId): void {
  const p = getWordProgress();
  for (const w of WORDS) if (w.topic === topic) delete p[w.id];
  save(p);
}

export type TopicStat = { total: number; seen: number; mastered: number; due: number };

export function topicStats(p: WordProgress = getWordProgress()): Record<TopicId, TopicStat> {
  const today = todayStr();
  const out = Object.fromEntries(
    TOPICS.map((t) => [t.id, { total: 0, seen: 0, mastered: 0, due: 0 }]),
  ) as Record<TopicId, TopicStat>;
  for (const w of WORDS) {
    const s = out[w.topic];
    s.total += 1;
    const r = p[w.id];
    if (!r) continue;
    s.seen += 1;
    if (r.box >= MASTERED_BOX) s.mastered += 1;
    if (r.due <= today) s.due += 1;
  }
  return out;
}

export type SessionMode = "smart" | "new" | "weak" | "all";

export const MODE_LABELS: Record<SessionMode, { label: string; desc: string }> = {
  smart: { label: "추천", desc: "복습할 때가 된 단어 먼저, 남는 자리는 새 단어" },
  new: { label: "새 단어", desc: "아직 안 본 단어만" },
  weak: { label: "약한 단어", desc: "한 번이라도 틀렸거나 아직 익숙하지 않은 단어" },
  all: { label: "전체", desc: "고른 주제의 단어를 전부 섞어서" },
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** 고른 주제에서 이번 세션에 낼 단어들 */
export function buildWordSession(topics: TopicId[], mode: SessionMode, limit: number): Word[] {
  const p = getWordProgress();
  const today = todayStr();
  const pool = WORDS.filter((w) => topics.includes(w.topic));
  const cap = (ws: Word[]) => (limit > 0 ? ws.slice(0, limit) : ws);

  if (mode === "new") return cap(shuffle(pool.filter((w) => !p[w.id])));
  if (mode === "all") return cap(shuffle(pool));
  if (mode === "weak") {
    const weak = pool.filter((w) => p[w.id] && (p[w.id].wrong > 0 || p[w.id].box < 2));
    // 많이 틀린 것, 상자가 낮은 것부터
    weak.sort((a, b) => p[a.id].box - p[b.id].box || p[b.id].wrong - p[a.id].wrong);
    return shuffle(cap(weak));
  }
  const due = shuffle(pool.filter((w) => p[w.id] && p[w.id].due <= today)).sort(
    (a, b) => p[a.id].box - p[b.id].box,
  );
  const fresh = shuffle(pool.filter((w) => !p[w.id]));
  return shuffle(cap([...due, ...fresh]));
}
