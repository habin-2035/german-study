"use client";

// 브라우저 내장 음성 합성(Web Speech API)으로 독일어 발음 재생.
// 설치/비용 없이 동작하며, 음질은 OS·브라우저에 따라 다릅니다.

let cachedVoices: SpeechSynthesisVoice[] = [];

function loadVoices(): SpeechSynthesisVoice[] {
  if (typeof window === "undefined" || !window.speechSynthesis) return [];
  const v = window.speechSynthesis.getVoices();
  if (v.length) cachedVoices = v;
  return cachedVoices;
}

// 일부 브라우저는 voices를 비동기로 로드하므로 미리 깨워둔다.
if (typeof window !== "undefined" && window.speechSynthesis) {
  loadVoices();
  window.speechSynthesis.addEventListener?.("voiceschanged", loadVoices);
}

export function isSpeechSupported(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

function pickGermanVoice(): SpeechSynthesisVoice | undefined {
  const voices = loadVoices();
  return (
    voices.find((v) => /^de(-|_|$)/i.test(v.lang)) ??
    voices.find((v) => v.lang?.toLowerCase().includes("de"))
  );
}

type SpeakOptions = {
  rate?: number;
  onStart?: () => void;
  onEnd?: () => void;
};

export function speak(text: string, opts: SpeakOptions = {}): void {
  if (!isSpeechSupported() || !text.trim()) {
    opts.onEnd?.();
    return;
  }
  const synth = window.speechSynthesis;
  // 이전 재생 중단 (연타 대응)
  synth.cancel();

  const u = new SpeechSynthesisUtterance(text);
  u.lang = "de-DE";
  u.rate = opts.rate ?? 0.92;
  u.pitch = 1;
  const voice = pickGermanVoice();
  if (voice) u.voice = voice;

  if (opts.onStart) u.onstart = opts.onStart;
  if (opts.onEnd) {
    u.onend = opts.onEnd;
    u.onerror = opts.onEnd;
  }

  synth.speak(u);
}

export function stopSpeaking(): void {
  if (isSpeechSupported()) window.speechSynthesis.cancel();
}
