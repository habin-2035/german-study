"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "홈" },
  { href: "/practice", label: "묶음연습" },
  { href: "/progress", label: "진도" },
  { href: "/notepad", label: "메모" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
            <span className="text-white text-xs font-black">Z</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-slate-900 font-black text-sm tracking-tight">ZUSAMMEN</span>
            <span className="text-blue-600 text-xs font-bold">A1</span>
          </div>
        </Link>

        <nav className="flex items-center gap-0.5">
          {links.map(({ href, label }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  active
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
