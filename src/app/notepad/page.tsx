"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { curriculum } from "@/data/curriculum";
import { getAllProgress, saveNote } from "@/lib/storage";

export default function NotepadPage() {
  const [notes, setNotes] = useState<Record<number, string>>({});
  const [globalNote, setGlobalNote] = useState("");
  const [globalSaved, setGlobalSaved] = useState(false);

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
      <h1 className="text-xl font-black text-gray-800">메모장</h1>

      {/* Global Note */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
        <h2 className="text-sm font-bold text-gray-600 mb-2">전체 메모</h2>
        <textarea
          value={globalNote}
          onChange={(e) => setGlobalNote(e.target.value)}
          className="w-full h-32 border border-gray-200 rounded-lg p-3 text-sm text-gray-700 resize-none focus:outline-none focus:border-blue-300"
          placeholder="자유롭게 메모하세요..."
        />
        <button
          onClick={saveGlobal}
          className="mt-2 float-right px-4 py-1.5 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600"
        >
          {globalSaved ? "저장됨 ✓" : "저장"}
        </button>
      </div>

      {/* Per-Lektion Notes */}
      {lektionsWithNotes.length === 0 ? (
        <div className="text-center py-10 text-gray-400 text-sm">
          아직 각 강에 메모가 없어요.<br />
          강 페이지에서 메모를 작성해 보세요.
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-bold text-gray-500">강별 메모</h2>
          {lektionsWithNotes.map((l) => (
            <Link key={l.id} href={`/lektion/${l.id}`}>
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition-shadow">
                <p className="text-xs text-gray-400 mb-1">
                  Lektion {String(l.id).padStart(2, "0")} — {l.title}
                </p>
                <p className="text-sm text-gray-600 line-clamp-3">{notes[l.id]}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
