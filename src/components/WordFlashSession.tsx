"use client";
import { useCallback, useEffect, useState } from "react";
import type { Word } from "@/data/words-a1";
import { POS_LABEL } from "@/data/words-a1";
import { gradeWord } from "@/lib/words";
import { speak } from "@/lib/speech";
import SpeakerButton from "@/components/SpeakerButton";
import { GENDER_STYLE } from "@/components/GermanText";

export type Direction = "de-ko" | "ko-de";

type Item = { word: Word; retry: boolean };

type Props = {
  words: Word[];
  direction: Direction;
  onExit: () => void;
  /** 모른 단어만 새 세션으로 다시 */
  onRestart: (words: Word[]) => void;
};

/** 명사는 관사를 성별 색으로 */
export function WordDe({ word, className = "" }: { word: Word; className?: string }) {
  const m = word.g && word.de.match(/^(der|die|das)\s+(.+)$/);
  if (!m || !word.g) return <span className={className}>{word.de}</span>;
  const s = GENDER_STYLE[word.g];
  return (
    <span className={className}>
      <span className={`${s.text} font-semibold`}>{m[1]}</span> <span className={s.text}>{m[2]}</span>
    </span>
  );
}

/** 성·복수, 동사 변화, 여성형 같은 문법 정보 한 줄 */
export function WordForms({ word, light = false }: { word: Word; light?: boolean }) {
  const chip = light ? "bg-white/15 text-white" : "bg-slate-100 text-slate-600";
  const parts: string[] = [];
  if (word.pos === "noun") {
    if (word.g === "pl") parts.push("복수로만 씀");
    else if (word.pl) parts.push(`복수 ${word.pl}`);
  }
  if (word.fem) parts.push(`여성 ${word.fem}`);
  if (word.pres3) parts.push(`er/sie ${word.pres3}`);
  if (word.perf) parts.push(`완료 ${word.perf}`);
  if (parts.length === 0) return null;
  return (
    <div className="flex flex-wrap justify-center gap-1.5">
      {parts.map((p) => (
        <span key={p} className={`text-xs px-2 py-0.5 rounded-md ${chip}`}>{p}</span>
      ))}
    </div>
  );
}

export default function WordFlashSession({ words, direction, onExit, onRestart }: Props) {
  const [queue, setQueue] = useState<Item[]>(() => words.map((w) => ({ word: w, retry: false })));
  const [pos, setPos] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState(0);
  const [missed, setMissed] = useState<Word[]>([]);

  const item = queue[pos];
  const done = pos >= queue.length;
  const firstTotal = words.length;
  const answered = queue.slice(0, pos).filter((i) => !i.retry).length;

  const answer = useCallback(
    (isKnown: boolean) => {
      if (!item) return;
      // 처음 나온 카드만 기록에 반영, 다시 나온 카드는 연습
      if (!item.retry) {
        gradeWord(item.word.id, isKnown);
        if (isKnown) setKnown((k) => k + 1);
        else setMissed((m) => [...m, item.word]);
      }
      if (!isKnown) {
        // 몰랐던 카드는 조금 뒤에 한 번 더
        setQueue((q) => {
          const next = [...q];
          const at = Math.min(next.length, pos + 4);
          next.splice(at, 0, { word: item.word, retry: true });
          return next;
        });
      }
      setFlipped(false);
      setPos((p) => p + 1);
    },
    [item, pos],
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (done || !item) return;
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.tagName === "SELECT")) return;
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        setFlipped((f) => !f);
      } else if (flipped && (e.key === "1" || e.key === "ArrowLeft")) answer(false);
      else if (flipped && (e.key === "2" || e.key === "ArrowRight")) answer(true);
      else if (e.key === "r" || e.key === "R") speak(item.word.de);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [answer, done, flipped, item]);

  if (words.length === 0) {
    return (
      <div className="card p-10 flex flex-col items-center gap-3 text-center">
        <p className="text-4xl">🎉</p>
        <p className="font-bold text-slate-700">지금 학습할 단어가 없어요</p>
        <p className="text-sm text-slate-400">다른 주제나 &lsquo;전체&rsquo; 모드를 골라 보세요.</p>
        <button onClick={onExit} className="mt-2 text-sm text-indigo-500 underline">주제 고르기로</button>
      </div>
    );
  }

  if (done) {
    const pct = Math.round((known / firstTotal) * 100);
    return (
      <div className="flex flex-col gap-4 fade-up">
        <div className="card p-8 flex flex-col items-center gap-2 text-center">
          <p className="text-4xl">{pct >= 80 ? "🎉" : pct >= 50 ? "👍" : "💪"}</p>
          <p className="text-xl font-black text-slate-800">{firstTotal}개 중 {known}개 알았어요</p>
          <p className="text-sm text-slate-400">
            모른 단어는 오늘 다시, 아는 단어는 점점 긴 간격으로 복습에 나와요.
          </p>
          <div className="flex gap-2 mt-3">
            <button onClick={onExit} className="px-4 py-2 rounded-xl bg-indigo-500 text-white text-sm font-semibold hover:bg-indigo-600">
              주제 고르기로
            </button>
            {missed.length > 0 && (
              <button
                onClick={() => onRestart(missed)}
                className="px-4 py-2 rounded-xl bg-red-50 text-red-600 text-sm font-semibold border border-red-100 hover:bg-red-100"
              >
                모른 것만 한 번 더
              </button>
            )}
          </div>
        </div>
        {missed.length > 0 && (
          <section>
            <h2 className="text-xs font-bold text-slate-400 tracking-widest px-1 mb-2">이번에 모른 단어</h2>
            <div className="card divide-y divide-slate-100">
              {missed.map((w) => (
                <div key={w.id} className="flex items-center justify-between gap-3 px-4 py-2.5">
                  <div className="min-w-0">
                    <WordDe word={w} className="font-semibold text-slate-800" />
                    <p className="text-xs text-slate-500">{w.ko}</p>
                  </div>
                  <SpeakerButton text={w.de} size="sm" />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    );
  }

  const w = item.word;
  const deFront = direction === "de-ko";

  return (
    <div className="flex flex-col items-center gap-4">
      {/* 진행 */}
      <div className="w-full max-w-lg flex items-center gap-3 text-xs text-slate-400">
        <button onClick={onExit} className="hover:text-indigo-500">✕ 그만</button>
        <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-indigo-500 rounded-full progress-bar" style={{ width: `${(answered / firstTotal) * 100}%` }} />
        </div>
        <span className="tabular-nums">{Math.min(answered + (item.retry ? 0 : 1), firstTotal)} / {firstTotal}</span>
      </div>

      {/* 카드 */}
      {/* key로 카드마다 새로 그려서, 되돌아가는 애니메이션 중에 다음 정답이 비치지 않게 */}
      <div
        key={pos}
        className="flip-card w-full max-w-lg h-80 cursor-pointer select-none"
        onClick={() => setFlipped((f) => !f)}
      >
        <div className={`flip-inner w-full h-full ${flipped ? "flipped" : ""}`}>
          {/* 앞면 */}
          <div className="flip-face absolute inset-0 card flex flex-col items-center justify-center gap-3 p-6">
            <span className="absolute top-3 left-4 text-xs font-bold text-slate-300">{deFront ? "DE" : "KO"}</span>
            <span className="absolute top-3 right-4 text-xs text-slate-300">
              {item.retry ? "다시 한 번" : POS_LABEL[w.pos]}
            </span>
            {deFront ? (
              <WordDe word={w} className="text-3xl font-bold text-slate-800 text-center leading-snug" />
            ) : (
              <p className="text-2xl font-bold text-slate-800 text-center leading-snug">{w.ko}</p>
            )}
            <div className="absolute bottom-4 flex items-center gap-2">
              {deFront && <SpeakerButton text={w.de} size="sm" />}
              <span className="text-xs text-slate-300">탭 또는 Space로 뒤집기</span>
            </div>
          </div>
          {/* 뒷면 */}
          <div className="flip-face flip-back absolute inset-0 rounded-[18px] flex flex-col items-center justify-center gap-3 p-6 bg-gradient-to-br from-indigo-500 to-indigo-700 text-white">
            <span className="absolute top-3 left-4 text-xs font-bold text-indigo-200">{deFront ? "KO" : "DE"}</span>
            {deFront ? (
              <p className="text-2xl font-bold text-center leading-snug">{w.ko}</p>
            ) : (
              <p className="text-3xl font-bold text-center leading-snug">{w.de}</p>
            )}
            <WordForms word={w} light />
            {w.note && <p className="text-xs text-indigo-100 text-center max-w-sm">💡 {w.note}</p>}
            {w.ex && (
              <div className="mt-1 text-center max-w-md">
                <p className="text-sm font-medium">{w.ex}</p>
                <p className="text-xs text-indigo-200 mt-0.5">{w.exKo}</p>
              </div>
            )}
            <div className="absolute bottom-4 flex items-center gap-2">
              <SpeakerButton text={w.de} size="sm" className="bg-white/15 border-white/25 text-white hover:bg-white/25 hover:text-white hover:border-white/40" />
              {w.ex && (
                <button
                  onClick={(e) => { e.stopPropagation(); speak(w.ex!); }}
                  className="text-xs px-2.5 py-1 rounded-full bg-white/15 hover:bg-white/25"
                >
                  예문 듣기
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 버튼 */}
      {flipped ? (
        <div className="flex gap-2 w-full max-w-lg">
          <button
            onClick={() => answer(false)}
            className="flex-1 py-3 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition-colors font-semibold border border-red-100"
          >
            모름 <span className="text-xs font-normal opacity-60">1</span>
          </button>
          <button
            onClick={() => answer(true)}
            className="flex-1 py-3 rounded-xl bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors font-semibold border border-emerald-100"
          >
            알아요 <span className="text-xs font-normal opacity-60">2</span>
          </button>
        </div>
      ) : (
        <button
          onClick={() => setFlipped(true)}
          className="w-full max-w-lg py-3 rounded-xl bg-indigo-500 text-white hover:bg-indigo-600 transition-colors font-semibold"
        >
          정답 보기 <span className="text-xs font-normal opacity-70">Space</span>
        </button>
      )}
      <p className="hidden sm:block text-xs text-slate-300">Space 뒤집기 · 1 모름 · 2 알아요 · R 발음</p>
    </div>
  );
}
