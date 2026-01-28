import type { Metadata } from "next";
import { Klee_One, Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";

const kleeOne = Klee_One({
  weight: ["400", "600"],
  variable: "--font-klee",
  subsets: ["latin"],
  preload: false,
});

const zenMaru = Zen_Maru_Gothic({
  weight: ["400", "500"],
  variable: "--font-zen-maru",
  subsets: ["latin"],
  preload: false,
});

export const metadata: Metadata = {
  title: "imperfect veggies | 規格外野菜をもっと身近に",
  description: "形は不完全でも、味は完璧。規格外野菜で食品ロスを減らし、地球にやさしい食卓を。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${kleeOne.variable} ${zenMaru.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
