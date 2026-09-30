"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";
import { getGrammar, GRAMMAR } from "@/data/grammar";
import { getLektionById } from "@/data/curriculum";
import { GLOSSES } from "@/data/gloss";
import SpeakerButton from "@/components/SpeakerButton";
import SentenceBreakdown from "@/components/SentenceBreakdown";

/** 교재 문장 → 한국어 뜻·강 번호 */
function useSentenceIndex() {
  return useMemo(() => {
    const map = new Map<string, { korean: string; lektionId: number }>();
    for (let id = 1; id <= 56; id++) {
      const l = getLektionById(id);
      if (!l) continue;
      for (const x of [...l.expressions, ...l.vocabulary])
        if (!map.has(x.german.trim())) map.set(x.german.trim(), { korean: x.korean, lektionId: l.id });
      for (const c of l.conversations)
        for (const line of c)
          if (!map.has(line.german.trim())) map.set(line.german.trim(), { korean: line.korean, lektionId: l.id });
    }
    return map;
  }, []);
}

export default function GrammarTopicPage() {
  const { id } = useParams<{ id: string }>();
  const topic = getGrammar(id);
  const index = useSentenceIndex();
  const [openSentence, setOpenSentence] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  // 이 문법이 쓰인 교재 문장들
  const used = useMemo(
    () =>
      Object.entries(GLOSSES)
        .filter(([, g]) => g.grammar?.includes(id))
        .map(([german]) => ({ german, ...(index.get(german) ?? { korean: "", lektionId: 0 }) }))
        .sort((a, b) => a.lektionId - b.lektionId),
    [id, index],
  );

  if (!topic) {
    return (
      <div className="text-center py-20 text-slate-400">
        문법 주제를 찾을 수 없어요. <Link href="/grammar" className="text-indigo-500 underline">문법 사전으로</Link>
      </div>
    );
  }

  const pos = GRAMMAR.findIndex((g) => g.id === id);
  const prev = GRAMMAR[pos - 1];
  const next = GRAMMAR[pos + 1];
  const visibleUsed = showAll ? used : used.slice(0, 12);

  return (
    <div className="flex flex-col gap-5 max-w-3xl">
      <Link href="/grammar" className="text-sm text-slate-400 hover:text-indigo-500 w-fit">← 문법 사전</Link>

      <header className="card p-6">
        <p className="text-xs font-bold text-indigo-500 tracking-widest">{topic.category}</p>
        <h1 className="text-2xl font-black text-slate-900 mt-1">{topic.title}</h1>
        <p className="text-slate-500 mt-1.5">{topic.summary}</p>
        {topic.lessons.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {topic.lessons.map((l) => {
              const lek = getLektionById(l);
              return (
                <Link key={l} href={`/lektion/${l}`} className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600">
                  L{String(l).padStart(2, "0")} {lek?.title}
                </Link>
              );
            })}
          </div>
        )}
      </header>

      {topic.sections.map((sec, i) => (
        <section key={i} className="card p-6 flex flex-col gap-4">
          {sec.heading && <h2 className="text-base font-bold text-slate-800">{sec.heading}</h2>}
          {sec.text && (
            <div className="flex flex-col gap-2">
              {sec.text.split("\n").filter(Boolean).map((para, j) => (
                <p key={j} className="text-[15px] leading-relaxed text-slate-700">{para}</p>
              ))}
            </div>
          )}
          {sec.table && (
            <div className="overflow-x-auto -mx-1">
              <table className="w-full text-sm border-collapse">
                {sec.table.caption && <caption className="text-xs text-slate-400 text-left mb-2">{sec.table.caption}</caption>}
                <thead>
                  <tr>
                    {sec.table.head.map((h, j) => (
                      <th key={j} className="text-left font-semibold text-slate-500 bg-slate-50 px-3 py-2 border-b border-slate-200 whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sec.table.rows.map((row, r) => (
                    <tr key={r} className="border-b border-slate-100 last:border-0">
                      {row.map((cell, c) => (
                        <td key={c} className={`px-3 py-2 whitespace-nowrap ${c === 0 ? "text-slate-500 font-medium" : "text-slate-800"}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {sec.examples && (
            <div className="flex flex-col divide-y divide-slate-100">
              {sec.examples.map((ex, j) => (
                <div key={j} className="flex items-start gap-3 py-2.5">
                  <SpeakerButton text={ex.de} size="sm" />
                  <div className="min-w-0">
                    <p className="font-semibold text-slate-800">{ex.de}</p>
                    <p className="text-sm text-slate-500">{ex.ko}</p>
                    {ex.note && <p className="text-xs text-indigo-500 mt-0.5">{ex.note}</p>}
                  </div>
                </div>
              ))}
            </div>
          )}
          {sec.tip && (
            <p className="text-sm text-amber-900 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 whitespace-pre-line leading-relaxed">⚠️ {sec.tip}</p>
          )}
        </section>
      ))}

      {used.length > 0 && (
        <section className="card p-6 flex flex-col gap-3">
          <div>
            <h2 className="text-base font-bold text-slate-800">교재에서 이 문법이 쓰인 문장 <span className="text-slate-400 font-medium">{used.length}</span></h2>
            <p className="text-xs text-slate-400 mt-0.5">문장을 누르면 단어별로 풀어 보여줘요.</p>
          </div>
          <div className="flex flex-col divide-y divide-slate-100">
            {visibleUsed.map((s) => (
              <div key={s.german} className="py-2.5">
                <div className="flex items-start gap-3">
                  <SpeakerButton text={s.german} size="sm" />
                  <button className="flex-1 min-w-0 text-left group" onClick={() => setOpenSentence(openSentence === s.german ? null : s.german)}>
                    <p className="font-semibold text-slate-800 group-hover:text-indigo-600">{s.german}</p>
                    <p className="text-sm text-slate-500">{s.korean}</p>
                  </button>
                  {s.lektionId > 0 && (
                    <Link href={`/lektion/${s.lektionId}`} className="text-[11px] text-slate-400 hover:text-indigo-500 flex-shrink-0 mt-1">
                      L{String(s.lektionId).padStart(2, "0")}
                    </Link>
                  )}
                </div>
                {openSentence === s.german && (
                  <SentenceBreakdown german={s.german} showGrammar={false} className="mt-2.5 ml-10 bg-slate-50 rounded-xl p-3 fade-up" />
                )}
              </div>
            ))}
          </div>
          {used.length > 12 && (
            <button onClick={() => setShowAll((v) => !v)} className="self-start text-sm text-indigo-500 hover:underline">
              {showAll ? "접기" : `${used.length - 12}개 더 보기`}
            </button>
          )}
        </section>
      )}

      {topic.related && topic.related.length > 0 && (
        <section>
          <h2 className="text-xs font-bold text-slate-400 tracking-widest mb-2 px-1">함께 보면 좋은 문법</h2>
          <div className="flex flex-wrap gap-2">
            {topic.related.map((r) => {
              const g = getGrammar(r);
              return g ? (
                <Link key={r} href={`/grammar/${r}`} className="text-sm px-3 py-1.5 rounded-xl bg-indigo-50 text-indigo-600 hover:bg-indigo-100 font-semibold">
                  📘 {g.title}
                </Link>
              ) : null;
            })}
          </div>
        </section>
      )}

      <div className="flex items-center justify-between text-sm pb-4">
        {prev ? <Link href={`/grammar/${prev.id}`} className="text-slate-400 hover:text-indigo-500">← {prev.title}</Link> : <span />}
        {next ? <Link href={`/grammar/${next.id}`} className="text-slate-400 hover:text-indigo-500">{next.title} →</Link> : <span />}
      </div>
    </div>
  );
}
