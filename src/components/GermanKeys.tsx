"use client";
import type { RefObject } from "react";

const KEYS = ["ä", "ö", "ü", "ß", "Ä", "Ö", "Ü"];

type Field = HTMLInputElement | HTMLTextAreaElement;

export default function GermanKeys({
  targetRef,
  onChange,
  className = "",
}: {
  targetRef: RefObject<Field | null>;
  onChange: (next: string) => void;
  className?: string;
}) {
  function insert(ch: string) {
    const el = targetRef.current;
    if (!el) return;
    const start = el.selectionStart ?? el.value.length;
    const end = el.selectionEnd ?? el.value.length;
    const next = el.value.slice(0, start) + ch + el.value.slice(end);
    onChange(next);
    // React가 값을 갱신한 뒤 커서를 삽입 위치 다음으로 이동
    requestAnimationFrame(() => {
      el.focus();
      const pos = start + ch.length;
      el.setSelectionRange(pos, pos);
    });
  }

  return (
    <div className={`flex flex-wrap gap-1.5 ${className}`}>
      {KEYS.map((k) => (
        <button
          key={k}
          type="button"
          // 버튼 클릭 시 입력란의 포커스/커서 위치가 유지되도록 mousedown 기본동작 차단
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => insert(k)}
          className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 font-semibold hover:bg-indigo-100 hover:text-indigo-600 active:scale-95 transition-all"
        >
          {k}
        </button>
      ))}
    </div>
  );
}
