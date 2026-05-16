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
      <body className="min-h-full bg-gray-50 font-[var(--font-noto)]">
        <Navigation />
        <main className="max-w-2xl mx-auto px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
