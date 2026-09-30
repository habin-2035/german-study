"use client";
import Link from "next/link";
import { useState } from "react";
import { GRAMMAR, GRAMMAR_CATEGORIES } from "@/data/grammar";

export default function GrammarIndexPage() {
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();
  const match = (text: string) => text.toLowerCase().includes(query);
  const topics = query
    ? GRAMMAR.filter((g) => match(g.title) || match(g.summary) || match(g.id))
    : GRAMMAR;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-900">문법 사전</h1>
          <p className="text-sm text-slate-400 mt-0.5">A1 문법 {GRAMMAR.length}개 주제 · 표와 예문, 교재 문장까지 한곳에</p>
        </div>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="검색 (예: 4격, 분리동사, Perfekt)"
          className="w-full sm:w-72 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-indigo-400 bg-white"
        />
      </div>

      {GRAMMAR_CATEGORIES.map((cat) => {
        const list = topics.filter((g) => g.category === cat);
        if (list.length === 0) return null;
        return (
          <section key={cat}>
            <h2 className="text-xs font-bold text-slate-400 tracking-widest mb-3 px-1">{cat}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {list.map((g) => (
                <Link key={g.id} href={`/grammar/${g.id}`} className="card card-hover p-4 flex flex-col gap-1">
                  <span className="text-sm font-bold text-slate-800">{g.title}</span>
                  <span className="text-xs text-slate-500 leading-relaxed">{g.summary}</span>
                  {g.lessons.length > 0 && (
                    <span className="text-[11px] text-slate-400 mt-1">
                      {g.lessons.slice(0, 5).map((l) => `L${String(l).padStart(2, "0")}`).join(" · ")}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      {topics.length === 0 && (
        <p className="text-center text-sm text-slate-400 py-10">
          {GRAMMAR.length === 0 ? "문법 사전을 준비 중이에요." : "검색 결과가 없어요."}
        </p>
      )}
    </div>
  );
}
