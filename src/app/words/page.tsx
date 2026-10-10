"use client";
import { useEffect, useMemo, useState } from "react";
import { TOPICS, WORDS, POS_LABEL, type TopicId, type Word } from "@/data/words-a1";
import {
  buildWordSession, getWordProgress, topicStats, MODE_LABELS, MASTERED_BOX,
  type SessionMode, type TopicStat, type WordProgress,
} from "@/lib/words";
import WordFlashSession, { WordDe, WordForms, type Direction } from "@/components/WordFlashSession";
import SpeakerButton from "@/components/SpeakerButton";

const PREF_KEY = "gs_words_pref_v1";
const LIMITS = [10, 20, 30, 0];

type Prefs = { topics: TopicId[]; mode: SessionMode; direction: Direction; limit: number };
const DEFAULT_PREFS: Prefs = { topics: [], mode: "smart", direction: "de-ko", limit: 20 };

function loadPrefs(): Prefs {
  try {
    const raw = localStorage.getItem(PREF_KEY);
    return raw ? { ...DEFAULT_PREFS, ...(JSON.parse(raw) as Partial<Prefs>) } : DEFAULT_PREFS;
  } catch {
    return DEFAULT_PREFS;
  }
}

export default function WordsPage() {
  const [prefs, setPrefs] = useState<Prefs>(DEFAULT_PREFS);
  const [stats, setStats] = useState<Record<TopicId, TopicStat> | null>(null);
  const [progress, setProgress] = useState<WordProgress>({});
  const [session, setSession] = useState<Word[] | null>(null);
  const [sessionNo, setSessionNo] = useState(0);
  const [view, setView] = useState<"topics" | "list">("topics");
  const [query, setQuery] = useState("");

  function refresh() {
    const p = getWordProgress();
    setProgress(p);
    setStats(topicStats(p));
  }

  useEffect(() => {
    setPrefs(loadPrefs());
    refresh();
  }, []);

  function updatePrefs(patch: Partial<Prefs>) {
    setPrefs((prev) => {
      const next = { ...prev, ...patch };
      try {
        localStorage.setItem(PREF_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  }

  function toggleTopic(id: TopicId) {
    const has = prefs.topics.includes(id);
    updatePrefs({ topics: has ? prefs.topics.filter((t) => t !== id) : [...prefs.topics, id] });
  }

  function startWith(words: Word[]) {
    setSession(words);
    setSessionNo((n) => n + 1);
    window.scrollTo({ top: 0 });
  }

  function start(topics: TopicId[] = prefs.topics) {
    startWith(buildWordSession(topics, prefs.mode, prefs.limit));
  }

  function exitSession() {
    setSession(null);
    refresh();
  }

  const selectedCount = useMemo(
    () => WORDS.filter((w) => prefs.topics.includes(w.topic)).length,
    [prefs.topics],
  );

  const totals = useMemo(() => {
    if (!stats) return null;
    return Object.values(stats).reduce(
      (a, s) => ({ seen: a.seen + s.seen, mastered: a.mastered + s.mastered, due: a.due + s.due }),
      { seen: 0, mastered: 0, due: 0 },
    );
  }, [stats]);

  const listWords = useMemo(() => {
    const q = query.trim().toLowerCase();
    const base = prefs.topics.length ? WORDS.filter((w) => prefs.topics.includes(w.topic)) : WORDS;
    if (!q) return base;
    return WORDS.filter((w) => w.de.toLowerCase().includes(q) || w.ko.includes(q));
  }, [prefs.topics, query]);

  if (session) {
    return (
      <div className="max-w-3xl mx-auto w-full">
        <WordFlashSession
          key={sessionNo}
          words={session}
          direction={prefs.direction}
          onExit={exitSession}
          onRestart={startWith}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 max-w-4xl mx-auto w-full pb-16 lg:pb-0">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-900">A1 단어장</h1>
          <p className="text-sm text-slate-400 mt-0.5">
            Goethe-Zertifikat A1 공식 단어 목록 {WORDS.length}개 · 주제별 플래시카드
          </p>
        </div>
        {totals && (
          <div className="flex gap-3 text-xs text-slate-500">
            <span>본 단어 <b className="text-slate-800 tabular-nums">{totals.seen}</b></span>
            <span>외운 단어 <b className="text-emerald-600 tabular-nums">{totals.mastered}</b></span>
            <span>복습 대기 <b className="text-indigo-600 tabular-nums">{totals.due}</b></span>
          </div>
        )}
      </div>

      <div className="flex gap-1 p-1 bg-slate-100 rounded-xl w-fit text-sm">
        {(["topics", "list"] as const).map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
              view === v ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-800"
            }`}
          >
            {v === "topics" ? "카드 학습" : "단어 목록"}
          </button>
        ))}
      </div>

      {/* 주제 고르기 */}
      <section className="flex flex-col gap-2">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-xs font-bold text-slate-400 tracking-widest">주제 · 여러 개 고를 수 있어요</h2>
          <div className="flex gap-2 text-xs">
            <button onClick={() => updatePrefs({ topics: TOPICS.map((t) => t.id) })} className="text-indigo-500 hover:underline">전체 선택</button>
            <button onClick={() => updatePrefs({ topics: [] })} className="text-slate-400 hover:underline">선택 해제</button>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {TOPICS.map((t) => {
            const s = stats?.[t.id];
            const on = prefs.topics.includes(t.id);
            const masteredPct = s && s.total ? (s.mastered / s.total) * 100 : 0;
            const seenPct = s && s.total ? (s.seen / s.total) * 100 : 0;
            return (
              <button
                key={t.id}
                onClick={() => toggleTopic(t.id)}
                className={`text-left rounded-2xl p-3 border transition-colors ${
                  on ? "border-indigo-400 bg-indigo-50/60 ring-1 ring-indigo-200" : "border-slate-100 bg-white hover:border-slate-200"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-xl leading-none">{t.icon}</span>
                  <span className={`w-4 h-4 rounded-md border flex items-center justify-center text-[10px] ${
                    on ? "bg-indigo-500 border-indigo-500 text-white" : "border-slate-300"
                  }`}>{on ? "✓" : ""}</span>
                </div>
                <p className="text-sm font-bold text-slate-800 mt-2">{t.label}</p>
                <p className="text-[11px] text-slate-400 tabular-nums">
                  {s ? <>{s.total}개 · 외움 {s.mastered}{s.due > 0 && <span className="text-indigo-500"> · 복습 {s.due}</span>}</> : " "}
                </p>
                <div className="relative h-1 bg-slate-100 rounded-full overflow-hidden mt-2">
                  <div className="absolute inset-y-0 left-0 bg-indigo-200 rounded-full" style={{ width: `${seenPct}%` }} />
                  <div className="absolute inset-y-0 left-0 bg-emerald-500 rounded-full" style={{ width: `${masteredPct}%` }} />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {view === "topics" ? (
        <section className="card p-4 flex flex-col gap-4 lg:sticky lg:bottom-3">
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold text-slate-400">모드</span>
              <div className="flex gap-1 flex-wrap">
                {(Object.keys(MODE_LABELS) as SessionMode[]).map((m) => (
                  <button
                    key={m}
                    title={MODE_LABELS[m].desc}
                    onClick={() => updatePrefs({ mode: m })}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                      prefs.mode === m ? "bg-indigo-500 text-white" : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                    }`}
                  >
                    {MODE_LABELS[m].label}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold text-slate-400">방향</span>
              <div className="flex gap-1">
                {([["de-ko", "독일어 → 뜻"], ["ko-de", "뜻 → 독일어"]] as const).map(([d, label]) => (
                  <button
                    key={d}
                    onClick={() => updatePrefs({ direction: d })}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                      prefs.direction === d ? "bg-indigo-500 text-white" : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold text-slate-400">한 번에</span>
              <div className="flex gap-1">
                {LIMITS.map((n) => (
                  <button
                    key={n}
                    onClick={() => updatePrefs({ limit: n })}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold tabular-nums ${
                      prefs.limit === n ? "bg-indigo-500 text-white" : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                    }`}
                  >
                    {n === 0 ? "전부" : `${n}장`}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <p className="text-xs text-slate-400">{MODE_LABELS[prefs.mode].desc}</p>
            <button
              disabled={prefs.topics.length === 0}
              onClick={() => start()}
              className="flex-shrink-0 px-5 py-2.5 rounded-xl bg-indigo-500 text-white text-sm font-bold hover:bg-indigo-600 disabled:bg-slate-200 disabled:text-slate-400"
            >
              {prefs.topics.length === 0 ? "주제를 골라 주세요" : `시작 · ${prefs.topics.length}개 주제 ${selectedCount}단어`}
            </button>
          </div>
        </section>
      ) : null}

      {/* 모바일: 주제 고르는 중에도 바로 시작 */}
      {view === "topics" && prefs.topics.length > 0 && (
        <button
          onClick={() => start()}
          className="lg:hidden fixed bottom-4 right-4 z-40 px-5 py-3 rounded-full bg-indigo-500 text-white text-sm font-bold shadow-lg shadow-indigo-300/50"
        >
          ▶ 시작 · {selectedCount}단어
        </button>
      )}

      {view === "list" && (
        <section className="flex flex-col gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="독일어나 한국어로 검색 (전체 주제에서)"
            className="border border-slate-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-indigo-400 bg-white"
          />
          <p className="text-xs text-slate-400 px-1">
            {query ? `검색 결과 ${listWords.length}개` : prefs.topics.length ? `고른 주제 ${listWords.length}개` : `전체 ${listWords.length}개`}
          </p>
          <div className="card divide-y divide-slate-100">
            {listWords.map((w) => {
              const r = progress[w.id];
              return (
                <div key={w.id} className="flex items-start gap-3 px-4 py-3">
                  <SpeakerButton text={w.de} size="sm" />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-2">
                      <WordDe word={w} className="font-semibold text-slate-800" />
                      <span className="text-sm text-slate-600">{w.ko}</span>
                      <span className="text-[11px] text-slate-300">{POS_LABEL[w.pos]}</span>
                    </div>
                    <div className="mt-1 [&>div]:justify-start"><WordForms word={w} /></div>
                    {w.ex && <p className="text-xs text-slate-500 mt-1">{w.ex} <span className="text-slate-400">— {w.exKo}</span></p>}
                    {w.note && <p className="text-xs text-amber-600 mt-0.5">💡 {w.note}</p>}
                  </div>
                  {r && (
                    <span className={`text-[11px] px-1.5 py-0.5 rounded-md flex-shrink-0 ${
                      r.box >= MASTERED_BOX ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-500"
                    }`}>
                      {r.box >= MASTERED_BOX ? "외움" : `${r.right}/${r.right + r.wrong}`}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
