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
