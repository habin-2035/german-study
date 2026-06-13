"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { curriculum } from "@/data/curriculum";
import { getAllProgress } from "@/lib/storage";
import GermanKeys from "@/components/GermanKeys";

export default function NotepadPage() {
  const [notes, setNotes] = useState<Record<number, string>>({});
  const [globalNote, setGlobalNote] = useState("");
  const [globalSaved, setGlobalSaved] = useState(false);
  const globalRef = useRef<HTMLTextAreaElement>(null);

  const GLOBAL_KEY = "gs_global_note";

  useEffect(() => {
    const all = getAllProgress();
    const n: Record<number, string> = {};
    for (const [id, p] of Object.entries(all)) {
      if (p.note) n[Number(id)] = p.note;
    }
    setNotes(n);
    setGlobalNote(localStorage.getItem(GLOBAL_KEY) ?? "");
  }, []);

  function saveGlobal() {
    localStorage.setItem(GLOBAL_KEY, globalNote);
    setGlobalSaved(true);
    setTimeout(() => setGlobalSaved(false), 1500);
  }

  const lektionsWithNotes = curriculum.filter((l) => notes[l.id]);

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-black tracking-tight text-slate-900">메모장</h1>

      {/* Global Note */}
      <div className="card p-5">
        <h2 className="text-sm font-bold text-slate-600 mb-2">전체 메모</h2>
        <textarea
          ref={globalRef}
          value={globalNote}
          onChange={(e) => setGlobalNote(e.target.value)}
          className="w-full h-32 border border-slate-200 rounded-xl p-3 text-sm text-slate-700 resize-none focus:outline-none focus:border-indigo-300 transition-colors"
          placeholder="자유롭게 메모하세요..."
        />
        <div className="mt-2">
          <GermanKeys targetRef={globalRef} onChange={setGlobalNote} />
        </div>
        <button
          onClick={saveGlobal}
          className={`mt-2 float-right px-4 py-1.5 text-sm rounded-xl font-semibold transition-all ${
            globalSaved ? "bg-emerald-100 text-emerald-600" : "btn-primary"
          }`}
        >
          {globalSaved ? "저장됨 ✓" : "저장"}
        </button>
      </div>

      {/* Per-Lektion Notes */}
      {lektionsWithNotes.length === 0 ? (
        <div className="text-center py-10 text-slate-400 text-sm">
          아직 각 강에 메모가 없어요.<br />
          강 페이지에서 메모를 작성해 보세요.
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <h2 className="text-xs font-bold text-slate-400 tracking-widest uppercase px-1">강별 메모</h2>
          {lektionsWithNotes.map((l) => (
            <Link key={l.id} href={`/lektion/${l.id}`}>
              <div className="card card-hover p-4">
                <p className="text-xs text-slate-400 mb-1">
                  Lektion {String(l.id).padStart(2, "0")} — {l.title}
                </p>
                <p className="text-sm text-slate-600 line-clamp-3 whitespace-pre-wrap">{notes[l.id]}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
