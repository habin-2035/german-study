// A1 문법 사전. 문장 해부(gloss)의 grammar 필드가 여기 id를 가리킨다.

export type GrammarTable = {
  caption?: string;
  head: string[];
  rows: string[][];
};

export type GrammarExample = { de: string; ko: string; note?: string };

export type GrammarSection = {
  heading?: string;
  /** 설명 문단. 줄바꿈은 문단 구분 */
  text?: string;
  table?: GrammarTable;
  examples?: GrammarExample[];
  /** 한국어 화자가 자주 하는 실수 / 주의 */
  tip?: string;
};

export type GrammarTopic = {
  id: string;
  title: string;
  /** 한 줄 요약 (칩·목록에 표시) */
  summary: string;
  category: GrammarCategory;
  /** 이 문법이 처음/주로 나오는 강 */
  lessons: number[];
  sections: GrammarSection[];
  related?: string[];
};

export type GrammarCategory = "기초" | "동사" | "명사·관사" | "문장 구조" | "전치사" | "시간·숫자" | "표현";

export const GRAMMAR_CATEGORIES: GrammarCategory[] = ["기초", "동사", "명사·관사", "문장 구조", "전치사", "시간·숫자", "표현"];

export { GRAMMAR } from "./grammar-content";

import { GRAMMAR } from "./grammar-content";

export function getGrammar(id: string): GrammarTopic | undefined {
  return GRAMMAR.find((g) => g.id === id);
}
