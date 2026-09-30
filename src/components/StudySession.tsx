"use client";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  getDeck, gradeCard, getDailyStats, getNewCardPool, intervalLabel,
  type SessionItem,
} from "@/lib/srs";
import { answerFor, checkAnswer, diffChars, hasHangul, isTemplate, type CheckResult } from "@/lib/german";
import { speak } from "@/lib/speech";
import GermanText from "@/components/GermanText";
import SpeakerButton from "@/components/SpeakerButton";
import GermanKeys from "@/components/GermanKeys";
import SentenceBreakdown from "@/components/SentenceBreakdown";
import type { SrsGrade } from "@/types";

type Mode = "type" | "flip";
const MODE_KEY = "gs_study_mode";

const GRADES: { grade: SrsGrade; label: string; key: string; cls: string; on: string }[] = [
  { grade: "again", label: "다시", key: "1", cls: "border-red-200 text-red-600 hover:bg-red-50", on: "bg-red-500 border-red-500 text-white" },
  { grade: "hard", label: "어려움", key: "2", cls: "border-amber-200 text-amber-600 hover:bg-amber-50", on: "bg-amber-500 border-amber-500 text-white" },
  { grade: "good", label: "좋음", key: "3", cls: "border-emerald-200 text-emerald-600 hover:bg-emerald-50", on: "bg-emerald-500 border-emerald-500 text-white" },
  { grade: "easy", label: "쉬움", key: "4", cls: "border-indigo-200 text-indigo-600 hover:bg-indigo-50", on: "bg-indigo-500 border-indigo-500 text-white" },
];

type Props = {
  initialQueue: SessionItem[];
  /** 세션을 다시 만들 때 (새 카드 더 하기 등) */
  onMore?: () => SessionItem[];
  title?: string;
};

type Missed = { german: string; korean: string };

export default function StudySession({ initialQueue, onMore, title }: Props) {
  const [queue, setQueue] = useState<SessionItem[]>(initialQueue);
  const [mode, setMode] = useState<Mode>("type");
  const [input, setInput] = useState("");
  const [result, setResult] = useState<CheckResult | null>(null);
  const [revealed, setRevealed] = useState(false); // flip 모드에서 뜻 공개
  const [hintLevel, setHintLevel] = useState(0);
  const [done, setDone] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [missed, setMissed] = useState<Missed[]>([]);
  const [total, setTotal] = useState(initialQueue.length);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(MODE_KEY);
      if (saved === "type" || saved === "flip") setMode(saved);
    } catch {}
  }, []);

  function changeMode(m: Mode) {
    setMode(m);
    try { localStorage.setItem(MODE_KEY, m); } catch {}
  }

  const current = queue[0];
  const card = current?.card;
  const answer = useMemo(() => (card ? answerFor(card.german) : null), [card]);
  const deckCard = useMemo(() => (card ? getDeck()[card.german] : undefined), [card]);
  // 입력 모드: 한국어를 보고 독일어를 떠올림 / 카드 모드: 독일어를 보고 뜻을 떠올림
  const promptKorean = mode === "type";
  // "... bestellen" 같은 틀 문장은 입력 대신 떠올리고 스스로 채점
  const selfGrade = mode === "flip" || (!!card && isTemplate(card.german));
  const answered = selfGrade ? revealed : result !== null;
  const showingAnswer = current?.stage === "intro" || answered;

  // 소개 카드·카드 모드는 나오자마자 발음 재생
  useEffect(() => {
    if (!current) return;
    const playNow = current.stage === "intro" || !promptKorean;
    if (playNow) {
      const t = setTimeout(() => speak(current.card.german), 180);
      return () => clearTimeout(t);
    }
  }, [current, promptKorean]);

  // 입력 문제에서는 항상 입력창에 포커스
  useEffect(() => {
    if (current?.stage === "test" && !selfGrade && !result) inputRef.current?.focus();
  }, [current, selfGrade, result]);

  const reveal = useCallback(() => {
    setRevealed(true);
    if (card && promptKorean) speak(card.german);
  }, [card, promptKorean]);

  const advance = useCallback((grade: SrsGrade | null) => {
    if (!current) return;
    const item = current;
    setInput("");
    setResult(null);
    setRevealed(false);
    setHintLevel(0);
    if (item.stage === "test" && grade) {
      if (!item.practice && !item.retry) gradeCard(item.card, grade);
      setDone((n) => n + 1);
      if (grade === "good" || grade === "easy") setCorrect((n) => n + 1);
      if (grade === "again")
        setMissed((m) => (m.some((x) => x.german === item.card.german) ? m : [...m, { german: item.card.german, korean: item.card.korean }]));
    }
    if (item.stage === "test" && grade === "again") setTotal((t) => t + 1);
    setQueue((q) => {
      const [head, ...rest] = q;
      // 새 카드 소개 → 몇 장 뒤에 떠올리기 문제로 다시
      if (head.stage === "intro") {
        const at = Math.min(3, rest.length);
        return [...rest.slice(0, at), { ...head, stage: "test" }, ...rest.slice(at)];
      }
      // 틀린 카드 → 4장 뒤에 다시 (일정에는 이미 반영됨)
      if (grade === "again") {
        const at = Math.min(4, rest.length);
        return [...rest.slice(0, at), { ...head, isNew: false, retry: true }, ...rest.slice(at)];
      }
      return rest;
    });
  }, [current]);

  const submit = useCallback(() => {
    if (!card || result) return;
    if (!input.trim()) {
      // 빈 입력으로 Enter → 모르겠음
      setResult({ verdict: "wrong", suggested: "again", message: "정답을 확인하세요", closest: answer?.answer ?? card.german });
    } else {
      const r = checkAnswer(input, card.german);
      // 힌트를 썼으면 '좋음' 이상은 주지 않음
      if (hintLevel > 0 && r.suggested === "good") r.suggested = "hard";
      setResult(r);
    }
    speak(card.german);
  }, [card, input, result, hintLevel, answer]);

  // 키보드 단축키
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!current || e.metaKey || e.ctrlKey || e.altKey || e.isComposing) return;
      const typing = document.activeElement === inputRef.current && !result;

      if (current.stage === "intro") {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); advance(null); }
        else if (e.key.toLowerCase() === "r") speak(current.card.german);
        return;
      }
      if (typing) {
        if (e.key === "Tab") { e.preventDefault(); setHintLevel((h) => h + 1); }
        return; // Enter는 input onKeyDown에서 처리
      }
      if (!answered) {
        if (selfGrade && (e.key === " " || e.key === "Enter")) { e.preventDefault(); reveal(); }
        if (e.key.toLowerCase() === "r") speak(current.card.german);
        return;
      }
      const g = GRADES.find((x) => x.key === e.key);
      if (g) { e.preventDefault(); advance(g.grade); return; }
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        advance(selfGrade ? "good" : result!.suggested);
      } else if (e.key.toLowerCase() === "r") speak(current.card.german);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, answered, selfGrade, result, advance, reveal]);

  // ── 세션 종료 ────────────────────────────────────────────
  if (!current) {
    const stats = getDailyStats();
    const acc = done ? Math.round((correct / done) * 100) : 0;
    return (
      <div className="flex flex-col items-center gap-6 py-10 text-center pop">
        <div className="text-6xl">{done === 0 ? "☕" : acc >= 80 ? "🏆" : "🎉"}</div>
        <div>
          <p className="text-2xl font-black text-slate-800">
            {done === 0 ? "지금은 학습할 카드가 없어요" : "세션 완료!"}
          </p>
          {done > 0 && (
            <p className="text-sm text-slate-500 mt-1.5">
              {done}문제 · 한 번에 맞힌 비율 {acc}% · 오늘 누적 {stats.doneToday}장
            </p>
          )}
        </div>
        {missed.length > 0 && (
          <div className="w-full max-w-md text-left">
            <p className="text-xs font-bold text-slate-400 tracking-widest mb-2">이번에 틀린 것</p>
            <div className="card divide-y divide-slate-100">
              {missed.map((m) => (
                <div key={m.german} className="flex items-center justify-between gap-3 px-4 py-2.5">
                  <GermanText german={m.german} className="font-semibold text-slate-800" />
                  <span className="text-sm text-slate-500 text-right">{m.korean}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {onMore && getNewCardPool().length > 0 && (
            <button
              onClick={() => {
                const next = onMore();
                setQueue(next);
                setTotal(next.length);
                setDone(0); setCorrect(0); setMissed([]);
              }}
              className="btn-primary px-5 py-2.5 rounded-xl text-sm font-semibold"
            >
              새 카드 10장 더
            </button>
          )}
          <Link href="/" className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200">
            홈으로
          </Link>
        </div>
      </div>
    );
  }

  const progressPct = total ? Math.min(100, Math.round((done / total) * 100)) : 0;
  const newLeft = queue.filter((q) => q.isNew).length;

  return (
    <div className="flex flex-col gap-5">
      {/* 상단: 진행 + 모드 */}
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
            <span>
              {title && <span className="font-bold text-slate-600 mr-2">{title}</span>}
              남은 {queue.length}장{newLeft > 0 && <> · 새 카드 {newLeft}</>}
            </span>
            <span className="tabular-nums">L{String(card.lektionId).padStart(2, "0")}</span>
          </div>
          <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-indigo-500 rounded-full progress-bar" style={{ width: `${progressPct}%` }} />
          </div>
        </div>
        <div className="flex bg-slate-100 rounded-xl p-0.5 text-xs font-semibold flex-shrink-0">
          {(["type", "flip"] as Mode[]).map((m) => (
            <button
              key={m}
              onClick={() => changeMode(m)}
              className={`px-3 py-1.5 rounded-lg transition-colors ${mode === m ? "bg-white text-slate-800 shadow-sm" : "text-slate-400 hover:text-slate-600"}`}
            >
              {m === "type" ? "⌨️ 입력" : "🃏 카드"}
            </button>
          ))}
        </div>
      </div>

      {/* 카드 본문 */}
      <div className="card p-8 sm:p-10 min-h-[18rem] flex flex-col items-center justify-center text-center gap-4 fade-up" key={`${card.german}-${current.stage}`}>
        {current.stage === "intro" && (
          <span className="chip bg-indigo-50 text-indigo-600 px-2.5 py-1 text-xs">{/\s/.test(card.german) ? "새 표현" : "새 단어"}</span>
        )}
        {current.retry ? (
          <span className="chip bg-amber-50 text-amber-600 px-2.5 py-1 text-xs">다시 한 번</span>
        ) : current.practice && (
          <span className="chip bg-slate-100 text-slate-500 px-2.5 py-1 text-xs">연습 (일정 반영 안 함)</span>
        )}

        {/* 문제 면 */}
        {promptKorean && current.stage === "test" ? (
          <>
            <p className="text-2xl sm:text-3xl font-bold text-slate-800 leading-snug">{card.korean}</p>
            {selfGrade && !revealed && (
              <p className="text-xs text-slate-400">빈칸(…)이 있는 틀 문장 · 떠올린 뒤 정답을 확인하세요</p>
            )}
            {!selfGrade && answer?.needsArticle && !result && (
              <p className="text-xs text-slate-400">명사 · 관사까지 입력 (der / die / das)</p>
            )}
            {card.note && <span className="text-xs text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded-md">{card.note}</span>}
          </>
        ) : (
          <div className="flex items-center gap-3">
            <GermanText german={card.german} showPlural={showingAnswer} className="text-3xl sm:text-4xl font-bold text-slate-800 leading-snug" />
            <SpeakerButton text={card.german} size="md" stop={false} />
          </div>
        )}

        {/* 정답 면 */}
        {showingAnswer && (
          <div className="flex flex-col items-center gap-2 pop w-full">
            {promptKorean && current.stage === "test" ? (
              <>
                <div className="w-12 h-px bg-slate-100 my-1" />
                <div className="flex items-center gap-3">
                  <GermanText german={card.german} showPlural className="text-3xl font-bold text-slate-800" />
                  <SpeakerButton text={card.german} size="md" stop={false} />
                </div>
              </>
            ) : (
              <>
                <div className="w-12 h-px bg-slate-100 my-1" />
                <p className="text-xl text-slate-600">{card.korean}</p>
                {card.note && <span className="text-xs text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded-md">{card.note}</span>}
              </>
            )}
            <SentenceBreakdown german={card.german} className="mt-3 w-full max-w-2xl text-left bg-slate-50 rounded-xl p-3" />
            {card.example && (
              <div className="mt-2 text-sm bg-slate-50 rounded-xl px-4 py-2.5 max-w-md">
                <p className="text-slate-700">{card.example}</p>
                {card.exampleKorean && <p className="text-slate-400 text-xs mt-0.5">{card.exampleKorean}</p>}
              </div>
            )}
          </div>
        )}
      </div>

      {/* 하단 조작부 */}
      {current.stage === "intro" ? (
        <div className="flex flex-col items-center gap-2">
          <button onClick={() => advance(null)} className="btn-primary w-full max-w-md py-3.5 rounded-2xl text-sm font-bold">
            외웠어요 — 곧 문제로 나와요
          </button>
          <KeyHint items={[["Enter", "다음"], ["R", "다시 듣기"]]} />
        </div>
      ) : !selfGrade && !result ? (
        <div className="flex flex-col items-center gap-2.5">
          <div className="w-full max-w-md flex gap-2">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.nativeEvent.isComposing) {
                  // 같은 Enter가 window 단축키(다음 카드)까지 가지 않도록
                  e.preventDefault();
                  e.stopPropagation();
                  submit();
                }
              }}
              placeholder="독일어로 입력…"
              autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck={false}
              lang="de"
              className="flex-1 border border-slate-200 rounded-xl px-4 py-3 text-lg outline-none focus:border-indigo-400 bg-white"
            />
            <button onClick={submit} className="btn-primary px-5 rounded-xl text-sm font-semibold">확인</button>
          </div>
          {hasHangul(input) && (
            <p className="text-xs text-amber-600 bg-amber-50 px-3 py-1.5 rounded-lg">한글이 입력되고 있어요 — 한/영 키로 전환하세요</p>
          )}
          {hintLevel > 0 && answer && (
            <p className="text-sm text-indigo-500 font-mono tracking-wider">
              {answer.answer.split("").map((ch, i) => (i < hintLevel + (answer.needsArticle ? 4 : 0) || ch === " " ? ch : "_")).join("")}
            </p>
          )}
          <GermanKeys targetRef={inputRef} onChange={setInput} />
          <KeyHint items={[["Enter", "확인 (빈칸이면 모름)"], ["Tab", "힌트"], ["ae oe ue ss", "= ä ö ü ß"]]} />
        </div>
      ) : selfGrade && !revealed ? (
        <div className="flex flex-col items-center gap-2">
          <button onClick={reveal} className="btn-primary w-full max-w-md py-3.5 rounded-2xl text-sm font-bold">
            {promptKorean ? "정답 확인" : "뜻 확인"}
          </button>
          <KeyHint items={[["Space", "확인"], ...(promptKorean ? [] : [["R", "다시 듣기"] as [string, string]])]} />
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3">
          {!selfGrade && result && (
            <div className="flex flex-col items-center gap-1.5">
              <p className={`text-sm font-bold ${
                result.verdict === "correct" ? "text-emerald-600" : result.verdict === "wrong" ? "text-red-500" : "text-amber-600"
              }`}>
                {result.verdict === "correct" ? "✓ " : result.verdict === "wrong" ? "✗ " : "△ "}{result.message}
              </p>
              {result.verdict !== "correct" && input.trim() && answer && (
                <p className="text-sm font-mono">
                  <span className="text-slate-400 mr-2">내 답: {input.trim()}</span>
                  <span className="text-slate-300 mr-2">→</span>
                  {diffChars(input, result.closest).map((d, i) => (
                    <span key={i} className={d.ok ? "text-slate-700" : "text-red-500 font-bold underline decoration-2"}>{d.ch}</span>
                  ))}
                </p>
              )}
            </div>
          )}
          {current.practice || current.retry ? (
            <button
              onClick={() => advance(result && result.suggested === "again" ? "again" : "good")}
              className="btn-primary w-full max-w-md py-3 rounded-2xl text-sm font-bold"
            >
              다음
            </button>
          ) : (
            <div className="w-full max-w-md grid grid-cols-4 gap-2">
              {GRADES.map(({ grade, label, key, cls, on }) => {
                const suggested = selfGrade ? grade === "good" : result?.suggested === grade;
                return (
                  <button
                    key={grade}
                    onClick={() => advance(grade)}
                    className={`flex flex-col items-center gap-0.5 py-2.5 rounded-xl border text-sm font-semibold transition-colors ${suggested ? on : cls}`}
                  >
                    <span>{label} <span className="opacity-60 text-[11px]">{key}</span></span>
                    <span className="text-[10px] font-medium opacity-75">{intervalLabel(grade, deckCard)}</span>
                  </button>
                );
              })}
            </div>
          )}
          <KeyHint items={[["Enter", current.practice || current.retry ? "다음" : "추천 등급으로 다음"], ["1–4", "등급 직접 선택"], ["R", "다시 듣기"]]} />
        </div>
      )}
    </div>
  );
}

function KeyHint({ items }: { items: [string, string][] }) {
  return (
    <p className="hidden sm:flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] text-slate-400">
      {items.map(([k, label]) => (
        <span key={k} className="inline-flex items-center gap-1">
          <kbd className="px-1.5 py-0.5 rounded-md border border-slate-200 bg-white font-sans text-[10px] text-slate-500">{k}</kbd>
          {label}
        </span>
      ))}
    </p>
  );
}
