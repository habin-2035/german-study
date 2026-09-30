import { lookupNoun, type Gender } from "@/data/nouns";
import { cleanGerman } from "@/lib/german";

// 관사 색: der 파랑 · die 빨강 · das 초록 · 복수 보라
export const GENDER_STYLE: Record<Gender, { text: string; chip: string; label: string }> = {
  m: { text: "text-sky-600", chip: "bg-sky-50 text-sky-700 ring-sky-200", label: "남성" },
  f: { text: "text-rose-600", chip: "bg-rose-50 text-rose-700 ring-rose-200", label: "여성" },
  n: { text: "text-emerald-600", chip: "bg-emerald-50 text-emerald-700 ring-emerald-200", label: "중성" },
  pl: { text: "text-violet-600", chip: "bg-violet-50 text-violet-700 ring-violet-200", label: "복수" },
};

type Props = {
  german: string;
  /** 복수형을 아래에 함께 표시 */
  showPlural?: boolean;
  className?: string;
};

/** 독일어 표기. 명사면 관사를 붙이고 성별 색으로 칠한다 */
export default function GermanText({ german, showPlural = false, className = "" }: Props) {
  const noun = lookupNoun(cleanGerman(german));
  // 나라·언어·요일처럼 보통 관사 없이 쓰는 말은 그대로
  if (!noun || noun.info.bare) return <span className={className}>{german}</span>;

  const style = GENDER_STYLE[noun.info.g];
  const pl = noun.info.pl;
  return (
    <span className={`inline-block ${className}`}>
      <span>
        <span className={`${style.text} font-semibold`}>{noun.article}</span>{" "}
        <span className={style.text}>{noun.bare}</span>
      </span>
      {showPlural && noun.info.g !== "pl" && (
        <span className="block text-[max(11px,0.5em)] font-medium text-slate-400 tracking-normal mt-0.5">
          {pl ? <>복수 die {pl}</> : "복수 없음"}
        </span>
      )}
    </span>
  );
}
