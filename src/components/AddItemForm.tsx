"use client";
import { useState } from "react";

type Kind = "표현" | "단어";

export type NewItem = {
  kind: Kind;
  german: string;
  korean: string;
  note?: string;
};

export default function AddItemForm({
  onAdd,
}: {
  onAdd: (item: NewItem) => void;
}) {
  const [open, setOpen] = useState(false);
  const [kind, setKind] = useState<Kind>("표현");
  const [german, setGerman] = useState("");
  const [korean, setKorean] = useState("");
  const [note, setNote] = useState("");

  function reset() {
    setGerman("");
    setKorean("");
    setNote("");
  }

  function handleSubmit() {
    const g = german.trim();
    const k = korean.trim();
    if (!g || !k) return;
    onAdd({
      kind,
      german: g,
      korean: k,
      note: kind === "표현" && note.trim() ? note.trim() : undefined,
    });
    reset();
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="w-full border-2 border-dashed border-slate-200 rounded-2xl py-3 text-sm font-semibold text-slate-400 hover:border-indigo-300 hover:text-indigo-500 transition-colors"
      >
        + 내 표현 / 단어 추가
      </button>
    );
  }

  return (
    <div className="border border-slate-200 rounded-2xl p-4 flex flex-col gap-3 bg-slate-50">
      {/* Kind toggle */}
      <div className="flex gap-1 bg-white rounded-xl p-1">
        {(["표현", "단어"] as Kind[]).map((t) => (
          <button
            key={t}
            onClick={() => setKind(t)}
            className={`flex-1 py-1.5 rounded-lg text-sm font-semibold transition-all ${
              kind === t
                ? "bg-indigo-600 text-white"
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <input
        value={german}
        onChange={(e) => setGerman(e.target.value)}
        placeholder={kind === "표현" ? "독일어 표현 (예: Ich bin Arzt.)" : "독일어 단어 (예: der Arzt)"}
        className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-indigo-300 transition-colors"
      />
      <input
        value={korean}
        onChange={(e) => setKorean(e.target.value)}
        placeholder="한국어 뜻"
        className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-indigo-300 transition-colors"
        onKeyDown={(e) => {
          if (e.key === "Enter" && kind === "단어") handleSubmit();
        }}
      />
      {kind === "표현" && (
        <input
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="메모 (선택, 예: 존댓말)"
          className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-indigo-300 transition-colors"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
        />
      )}

      <div className="flex gap-2">
        <button
          onClick={() => {
            setOpen(false);
            reset();
          }}
          className="flex-1 py-2 rounded-xl text-sm font-semibold text-slate-500 bg-white hover:bg-slate-100 transition-colors"
        >
          닫기
        </button>
        <button
          onClick={handleSubmit}
          disabled={!german.trim() || !korean.trim()}
          className="flex-1 py-2 rounded-xl text-sm font-semibold btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
        >
          추가
        </button>
      </div>
    </div>
  );
}
