"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getDailyStats } from "@/lib/srs";

const links = [
  { href: "/", label: "홈" },
  { href: "/review", label: "복습" },
  { href: "/practice", label: "연습" },
  { href: "/progress", label: "진도" },
  { href: "/notepad", label: "메모" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [due, setDue] = useState(0);

  useEffect(() => {
    const s = getDailyStats();
    setDue(s.dueCount + s.newRemainingToday);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white/75 backdrop-blur-xl border-b border-slate-100">
      <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center shadow-sm shadow-indigo-200">
            <span className="text-white text-xs font-black">Z</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-slate-900 font-black text-sm tracking-tight">ZUSAMMEN</span>
            <span className="text-indigo-600 text-xs font-bold">A1</span>
          </div>
        </Link>

        <nav className="flex items-center gap-0.5">
          {links.map(({ href, label }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            const showBadge = href === "/review" && due > 0 && !active;
            return (
              <Link
                key={href}
                href={href}
                className={`relative px-2.5 sm:px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  active
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                }`}
              >
                {label}
                {showBadge && (
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
  );
}
