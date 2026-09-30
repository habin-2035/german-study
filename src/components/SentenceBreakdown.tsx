"use client";
import Link from "next/link";
import { getGloss } from "@/lib/gloss";
import { getGrammar } from "@/data/grammar";
import { lookupNoun } from "@/data/nouns";
import { GENDER_STYLE } from "@/components/GermanText";

type Props = {
  german: string;
  /** 문법 칩 표시 여부 */
  showGrammar?: boolean;
  className?: string;
};

/** 문장을 단어별로 나눠 뜻·문법 정보를 아래에 붙여 보여준다 (행간 해석) */
export default function SentenceBreakdown({ german, showGrammar = true, className = "" }: Props) {
  const gloss = getGloss(german);
  if (!gloss) return null;

  return (
    <div className={`flex flex-col gap-2.5 ${className}`}>
      <div className="flex flex-wrap gap-x-1.5 gap-y-2">
        {gloss.words.map(([word, meaning, info], i) => {
          const noun = /^[A-ZÄÖÜ]/.test(word) ? lookupNoun(word) : null;
          // 문장 안에서 복수로 쓰였으면 복수 색
          const g = noun && !noun.info.bare ? (info?.includes("복수") ? "pl" : noun.info.g) : null;
          const color = g ? GENDER_STYLE[g].text : "text-slate-800";
          return (
            <div key={i} className="flex flex-col items-start rounded-lg bg-white border border-slate-100 px-2 py-1.5 min-w-0">
              <span className={`text-[15px] font-semibold leading-tight ${color}`}>{word}</span>
              <span className="text-xs text-slate-600 leading-snug mt-0.5">{meaning}</span>
              {info && <span className="text-[10.5px] text-indigo-500/90 leading-snug mt-0.5">{info}</span>}
            </div>
          );
        })}
      </div>
      {gloss.note && (
        <p className="text-xs text-slate-600 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">💡 {gloss.note}</p>
      )}
      {showGrammar && gloss.grammar && gloss.grammar.length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[11px] text-slate-400">관련 문법</span>
          {gloss.grammar.map((id) => {
            const g = getGrammar(id);
            return (
              <Link
                key={id}
                href={`/grammar/${id}`}
                className="text-[11px] font-semibold px-2 py-1 rounded-md bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
              >
                📘 {g?.title ?? id}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
