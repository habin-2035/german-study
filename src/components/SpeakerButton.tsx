"use client";
import { useEffect, useState } from "react";
import { isSpeechSupported, speak } from "@/lib/speech";

type Props = {
  text: string;
  size?: "sm" | "md";
  /** 부모 클릭(카드 뒤집기 등)으로 이벤트가 전파되지 않도록 */
  stop?: boolean;
  className?: string;
};

export default function SpeakerButton({ text, size = "md", stop = true, className = "" }: Props) {
  const [supported, setSupported] = useState(true);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setSupported(isSpeechSupported());
  }, []);

  if (!supported) return null;

  const dim = size === "sm" ? "w-7 h-7 text-[13px]" : "w-9 h-9 text-base";

  return (
    <button
      type="button"
      aria-label="발음 듣기"
      onClick={(e) => {
        if (stop) e.stopPropagation();
        speak(text, {
          onStart: () => setPlaying(true),
          onEnd: () => setPlaying(false),
        });
      }}
      className={`${dim} inline-flex items-center justify-center rounded-full border transition-colors flex-shrink-0
        ${playing
          ? "bg-indigo-500 border-indigo-500 text-white sound-playing"
          : "bg-white border-slate-200 text-slate-400 hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50"} ${className}`}
    >
      <span aria-hidden>🔊</span>
    </button>
  );
}
