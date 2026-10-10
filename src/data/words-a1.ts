// A1 단어장 — Goethe-Zertifikat A1 (Start Deutsch 1) 공식 Wortliste 기준.
// 뜻·예문은 직접 작성, 성·복수·동사 변화는 de.wiktionary와 대조해 검증함.
// 데이터 본문은 words-a1.json (검증 스크립트로 다시 만들 수 있게 JSON으로 둔다)

import raw from "./words-a1.json";
import type { Gender } from "@/data/nouns";

export type TopicId =
  | "greetings" | "people" | "personal" | "numbers" | "time" | "home" | "food"
  | "shopping" | "city" | "travel" | "work" | "school" | "body" | "leisure"
  | "nature" | "communication" | "verbs" | "describe" | "function";

export type WordPos =
  | "noun" | "verb" | "adj" | "adv" | "prep" | "conj" | "pron" | "num" | "art" | "phrase" | "other";

export type Word = {
  /** 고유 키 = de (학습 기록 키라서 바꾸면 기록이 끊김) */
  id: string;
  de: string;
  ko: string;
  pos: WordPos;
  topic: TopicId;
  g?: Gender;
  pl?: string;
  fem?: string;
  pres3?: string;
  perf?: string;
  note?: string;
  ex?: string;
  exKo?: string;
};

export const TOPICS: { id: TopicId; label: string; icon: string }[] = [
  { id: "greetings", label: "인사·기본 표현", icon: "👋" },
  { id: "people", label: "사람·가족", icon: "👪" },
  { id: "personal", label: "개인 정보·서류", icon: "🪪" },
  { id: "numbers", label: "숫자·단위", icon: "🔢" },
  { id: "time", label: "시간·날짜", icon: "🕒" },
  { id: "home", label: "집·주거", icon: "🏠" },
  { id: "food", label: "음식·식당", icon: "🍞" },
  { id: "shopping", label: "쇼핑·돈·옷", icon: "🛍️" },
  { id: "city", label: "도시·장소", icon: "🏙️" },
  { id: "travel", label: "교통·여행", icon: "🚆" },
  { id: "work", label: "일·직업", icon: "💼" },
  { id: "school", label: "학교·공부", icon: "📚" },
  { id: "body", label: "몸·건강", icon: "🩺" },
  { id: "leisure", label: "여가·취미", icon: "⚽" },
  { id: "nature", label: "날씨·자연", icon: "🌦️" },
  { id: "communication", label: "연락·통신", icon: "📱" },
  { id: "verbs", label: "기본 동사", icon: "🏃" },
  { id: "describe", label: "형용사·색", icon: "🎨" },
  { id: "function", label: "기능어", icon: "🔗" },
];

export const POS_LABEL: Record<WordPos, string> = {
  noun: "명사", verb: "동사", adj: "형용사", adv: "부사", prep: "전치사", conj: "접속사",
  pron: "대명사", num: "수사", art: "관사", phrase: "표현", other: "기타",
};

export const WORDS: Word[] = raw as Word[];

export function topicLabel(id: TopicId): string {
  return TOPICS.find((t) => t.id === id)?.label ?? id;
}
