import { GLOSSES } from "@/data/gloss";
export { tokenize } from "@/lib/tokenize";

/** 문장 속 단어 하나: [표기, 뜻, 문법 정보?] */
export type GlossWord = [word: string, meaning: string, info?: string];

export type SentenceGloss = {
  words: GlossWord[];
  /** 관련 문법 주제 id (src/data/grammar.ts) */
  grammar?: string[];
  /** 문장 전체에 대한 짧은 설명 (어순·뉘앙스 등) */
  note?: string;
};

/** 해부가 필요한 문장인가 (띄어쓰기가 있는 표현) */
export function isSentence(german: string): boolean {
  return /\s/.test(german.trim());
}

export function getGloss(german: string): SentenceGloss | undefined {
  return GLOSSES[german.trim()];
}
