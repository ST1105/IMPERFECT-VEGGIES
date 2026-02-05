"use client";

import Link from "next/link";
import Header from "../components/Header";
import { useScrollAnimationAll } from "../hooks/useScrollAnimation";

const newsItems = [
  {
    id: "1",
    date: "2025.01.27",
    title: "公式ウェブサイトをリニューアルしました",
    summary: "より使いやすく、見やすいデザインに生まれ変わりました。",
  },
  {
    id: "2",
    date: "2025.01.15",
    title: "季節の野菜ボックス、冬の新商品を追加しました",
    summary: "冬野菜をたっぷり詰め込んだ新しいボックスが登場。",
  },
  {
    id: "3",
    date: "2025.01.01",
    title: "新年のご挨拶",
    summary: "2025年も imperfect veggies をよろしくお願いいたします。",
  },
];

export default function NewsPage() {
  useScrollAnimationAll();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Page Header */}
          <div className="text-center mb-12">
            <p className="scroll-animate scroll-fade-up text-green-primary text-sm tracking-widest mb-4">NEWS</p>
            <h1 className="scroll-animate scroll-fade-up scroll-delay-100 text-3xl font-klee">お知らせ</h1>
          </div>

          {/* News List */}
          <div className="space-y-4">
            {newsItems.map((item, index) => (
              <Link
                key={item.id}
                href={`/news/${item.id}`}
                className="scroll-animate scroll-fade-up block bg-beige/30 rounded-xl p-6 hover:bg-beige/50 transition-colors"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-green-primary mb-2">{item.date}</p>
                    <p className="text-foreground/80 font-medium mb-1">{item.title}</p>
                    <p className="text-foreground/60 text-sm">{item.summary}</p>
                  </div>
                  <span className="text-green-primary shrink-0">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-primary text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Link href="/" className="text-xl font-light tracking-wider">
            imperfect veggies
          </Link>
          <p className="mt-4 text-white/60 text-sm">
            &copy; 2025 imperfect veggies. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
