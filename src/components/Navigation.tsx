"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "홈" },
  { href: "/progress", label: "진도" },
  { href: "/notepad", label: "메모장" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-blue-500 font-black text-lg tracking-tight">ZUSAMMEN</span>
          <span className="text-xs text-gray-400 font-medium">A1</span>
        </Link>
        <nav className="flex items-center gap-1">
          {links.map(({ href, label }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
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
