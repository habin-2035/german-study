"use client";
import type { Expression, VocabItem } from "@/types";

const STORAGE_KEY = "gs_usercontent_v1";

export type UserContent = {
  expressions: Expression[];
  vocabulary: VocabItem[];
};

type UserContentStore = {
  [lektionId: number]: UserContent;
};

function emptyContent(): UserContent {
  return { expressions: [], vocabulary: [] };
}

function getStore(): UserContentStore {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function setStore(store: UserContentStore): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

export function getUserContent(id: number): UserContent {
  const store = getStore();
  const c = store[id];
  return {
    expressions: c?.expressions ?? [],
    vocabulary: c?.vocabulary ?? [],
  };
}

export function addUserExpression(id: number, expr: Expression): UserContent {
  const store = getStore();
  const current = store[id] ?? emptyContent();
  current.expressions = [...(current.expressions ?? []), expr];
  store[id] = current;
  setStore(store);
  return getUserContent(id);
}

export function addUserVocab(id: number, vocab: VocabItem): UserContent {
  const store = getStore();
  const current = store[id] ?? emptyContent();
  current.vocabulary = [...(current.vocabulary ?? []), vocab];
  store[id] = current;
  setStore(store);
  return getUserContent(id);
}

export function removeUserExpression(id: number, index: number): UserContent {
  const store = getStore();
  const current = store[id] ?? emptyContent();
  current.expressions = (current.expressions ?? []).filter((_, i) => i !== index);
  store[id] = current;
  setStore(store);
  return getUserContent(id);
}

export function removeUserVocab(id: number, index: number): UserContent {
  const store = getStore();
  const current = store[id] ?? emptyContent();
  current.vocabulary = (current.vocabulary ?? []).filter((_, i) => i !== index);
  store[id] = current;
  setStore(store);
  return getUserContent(id);
}
