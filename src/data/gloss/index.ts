// 문장 해부 데이터 (밴드별 파일을 합침). key = 교재의 독일어 문장 원문
import type { SentenceGloss } from "@/lib/gloss";
import { BAND1 } from "./band1";
import { BAND2 } from "./band2";
import { BAND3 } from "./band3";
import { BAND4 } from "./band4";
import { BAND5 } from "./band5";
import { BAND6 } from "./band6";
import { BAND7 } from "./band7";
import { BAND8 } from "./band8";

export const GLOSSES: Record<string, SentenceGloss> = {
  ...BAND1, ...BAND2, ...BAND3, ...BAND4, ...BAND5, ...BAND6, ...BAND7, ...BAND8,
};
