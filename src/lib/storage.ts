"use client";
import type { AllProgress, LektionProgress } from "@/types";

const STORAGE_KEY = "gs_progress_v1";

function defaultProgress(): LektionProgress {
  return {
    completed: false,
    videoWatched: false,
    note: "",
    flashcardKnown: [],
    quizScore: 0,
  };
}

export function getAllProgress(): AllProgress {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function getLektionProgress(id: number): LektionProgress {
  const all = getAllProgress();
  return all[id] ?? defaultProgress();
}

export function updateLektionProgress(
  id: number,
  update: Partial<LektionProgress>
): void {
  const all = getAllProgress();
  all[id] = {
    ...(all[id] ?? defaultProgress()),
    ...update,
    lastStudied: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}

export function toggleCompleted(id: number): void {
  const current = getLektionProgress(id);
  updateLektionProgress(id, { completed: !current.completed });
}

export function toggleVideoWatched(id: number): void {
  const current = getLektionProgress(id);
  updateLektionProgress(id, { videoWatched: !current.videoWatched });
}

export function saveNote(id: number, note: string): void {
  updateLektionProgress(id, { note });
}

export function saveFlashcardKnown(id: number, known: number[]): void {
  updateLektionProgress(id, { flashcardKnown: known });
}

export function saveQuizScore(id: number, score: number): void {
  const current = getLektionProgress(id);
  const best = Math.max(current.quizScore, score);
  updateLektionProgress(id, { quizScore: best });
}
