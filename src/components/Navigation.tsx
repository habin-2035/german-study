"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getDailyStats, type DailyStats } from "@/lib/srs";

const links = [
  { href: "/", label: "홈", icon: "⌂" },
  { href: "/review", label: "오늘의 학습", short: "학습", icon: "▶" },
  { href: "/practice", label: "묶음 연습", short: "연습", icon: "◫" },
  { href: "/grammar", label: "문법 사전", short: "문법", icon: "§" },
  { href: "/progress", label: "학습 현황", short: "현황", icon: "▤" },
  { href: "/notepad", label: "메모", icon: "✎" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [stats, setStats] = useState<DailyStats | null>(null);

  useEffect(() => {
    setStats(getDailyStats());
  }, [pathname]);

  const due = stats ? stats.dueCount + stats.newRemainingToday : 0;
  const goalPct = stats ? Math.min(100, Math.round((stats.doneToday / stats.goal) * 100)) : 0;
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      {/* 데스크톱: 왼쪽 사이드바 */}
      <aside className="hidden lg:flex flex-col w-60 flex-shrink-0 h-screen sticky top-0 border-r border-slate-100 bg-white/60 px-4 py-6">
        <Link href="/" className="flex items-center gap-2.5 px-2 mb-8">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center shadow-sm shadow-indigo-200">
            <span className="text-white text-sm font-black">Z</span>
          </div>
          <div className="leading-tight">
            <p className="text-slate-900 font-black text-sm tracking-tight">ZUSAMMEN</p>
            <p className="text-indigo-600 text-[11px] font-bold">독일어 A1</p>
          </div>
        </Link>

        <nav className="flex flex-col gap-1">
          {links.map(({ href, label, icon }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  active ? "bg-indigo-50 text-indigo-700" : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span className={`w-5 text-center ${active ? "text-indigo-500" : "text-slate-300"}`}>{icon}</span>
                <span className="flex-1">{label}</span>
                {href === "/review" && due > 0 && (
                  <span className="min-w-5 h-5 px-1.5 rounded-full bg-indigo-500 text-white text-[11px] font-bold flex items-center justify-center tabular-nums">
                    {due > 99 ? "99+" : due}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {stats && (
          <div className="mt-auto rounded-2xl bg-slate-50 p-4">
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="text-slate-500 font-medium">오늘 목표</span>
              <span className="font-bold text-slate-800 tabular-nums">{stats.doneToday}/{stats.goal}</span>
            </div>
            <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full progress-bar ${goalPct >= 100 ? "bg-emerald-500" : "bg-indigo-500"}`}
                style={{ width: `${goalPct}%` }}
              />
            </div>
            <p className="text-xs text-slate-500 mt-3">🔥 {stats.streak}일 연속 · 덱 {stats.deckSize}장</p>
          </div>
        )}
      </aside>

      {/* 모바일·태블릿: 상단 바 */}
      <header className="lg:hidden sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="px-4 h-14 flex items-center justify-between gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center">
              <span className="text-white text-xs font-black">Z</span>
            </div>
            <span className="hidden sm:inline text-slate-900 font-black text-sm tracking-tight">ZUSAMMEN</span>
          </Link>
          <nav className="flex items-center gap-0.5">
            {links.map(({ href, label, short }) => {
              const active = isActive(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative px-2.5 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    active ? "bg-indigo-50 text-indigo-600" : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {short ?? label}
                  {href === "/review" && due > 0 && !active && (
                    <span className="absolute -top-0.5 -right-0.5 min-w-4 h-4 px-1 rounded-full bg-indigo-500 text-white text-[10px] font-bold flex items-center justify-center">
                      {due > 99 ? "99+" : due}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}
