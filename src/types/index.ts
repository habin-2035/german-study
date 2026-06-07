export type VocabItem = {
  german: string;
  korean: string;
  example?: string;
  exampleKorean?: string;
};

export type Expression = {
  german: string;
  korean: string;
  note?: string;
};

export type ConversationLine = {
  speaker: "A" | "B";
  german: string;
  korean: string;
};

export type GrammarNote = {
  title: string;
  content: string;
};

export type Level = "A1" | "A2" | "B1";

export type LektionData = {
  id: number;
  level?: Level;
  band: number;
  title: string;
  subtitle?: string;
  vocabulary: VocabItem[];
  expressions: Expression[];
  conversations: ConversationLine[][];
  grammarNotes: GrammarNote[];
};

export type LektionProgress = {
  completed: boolean;
  videoWatched: boolean;
  note: string;
  flashcardKnown: number[];
  quizScore: number;
  lastStudied?: string;
};

export type AllProgress = {
  [lektionId: number]: LektionProgress;
};

// ── Spaced repetition ────────────────────────────────
export type SrsGrade = "again" | "hard" | "good" | "easy";

export type SrsCard = {
  german: string;
  korean: string;
  note?: string;
  lektionId: number;
  ease: number;        // 난이도 계수 (1.3 ~ 2.6)
  intervalDays: number; // 다음 복습까지 간격(일)
  due: string;          // 다음 복습 예정일 yyyy-mm-dd
  reps: number;         // 연속 정답 횟수
  lapses: number;       // 틀린 횟수
  last?: string;        // 마지막 복습일 yyyy-mm-dd
};

export type SrsDeck = {
  [german: string]: SrsCard;
};

export type DailyLog = {
  reviews: number; // 복습한 카드 수
  news: number;    // 새로 학습한 카드 수
};

export type DailyStore = {
  goal: number;       // 하루 목표 카드 수
  newPerDay: number;  // 하루 새 카드 한도
  days: { [date: string]: DailyLog };
};
