import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const noto = Noto_Sans_KR({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Zusammen A1 독일어 공부",
  description: "Zusammen A1 교재 기반 독일어 학습 사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${noto.variable} h-full`}>
      <body className="min-h-full font-[var(--font-noto)]">
        <div className="lg:flex">
          <Navigation />
          <main className="flex-1 min-w-0 px-4 sm:px-8 py-6 lg:py-10 pb-16">
            <div className="max-w-5xl mx-auto">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
