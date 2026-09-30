"use client";

// 이 사이트가 localStorage에 저장하는 모든 키는 gs_ 로 시작한다
const PREFIX = "gs_";

export type Backup = { app: "german-study"; exportedAt: string; data: Record<string, string> };

export function exportBackup(): Backup {
  const data: Record<string, string> = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith(PREFIX)) data[key] = localStorage.getItem(key) ?? "";
  }
  return { app: "german-study", exportedAt: new Date().toISOString(), data };
}

export function downloadBackup(): void {
  const backup = exportBackup();
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `german-study-backup-${backup.exportedAt.slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

/** 백업 파일 내용을 검사한다. 올바르면 키 개수를 돌려준다 */
export function parseBackup(text: string): Backup {
  const parsed = JSON.parse(text) as Partial<Backup>;
  if (parsed.app !== "german-study" || typeof parsed.data !== "object" || !parsed.data)
    throw new Error("이 사이트의 백업 파일이 아니에요");
  return parsed as Backup;
}

/** 현재 기록을 백업 내용으로 통째로 바꾼다 */
export function restoreBackup(backup: Backup): void {
  const existing: string[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith(PREFIX)) existing.push(key);
  }
  existing.forEach((k) => localStorage.removeItem(k));
  for (const [k, v] of Object.entries(backup.data)) {
    if (k.startsWith(PREFIX)) localStorage.setItem(k, v);
  }
}
