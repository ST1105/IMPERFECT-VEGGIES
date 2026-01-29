"use client";

import Link from "next/link";
import { useState } from "react";

const products = [
  {
    id: 1,
    title: "季節の野菜ボックス S",
    description: "1〜2人用の旬の規格外野菜セット。初めての方におすすめ。",
    price: "¥2,480",
    category: "セット",
  },
  {
    id: 2,
    title: "季節の野菜ボックス M",
    description: "3〜4人用のファミリー向けセット。週末の料理に最適。",
    price: "¥3,980",
    category: "セット",
  },
  {
    id: 3,
    title: "季節の野菜ボックス L",
    description: "大家族やまとめ買い派に。たっぷり届く満足サイズ。",
    price: "¥5,480",
    category: "セット",
  },
  {
    id: 4,
    title: "ドライベジタブル にんじん",
    description: "甘みが凝縮された乾燥にんじん。おやつやサラダのトッピングに。",
    price: "¥580",
    category: "ドライ",
  },
  {
    id: 5,
    title: "ドライベジタブル れんこん",
    description: "サクサク食感の乾燥れんこんチップス。そのまま食べられます。",
    price: "¥680",
    category: "ドライ",
  },
  {
    id: 6,
    title: "ドライベジタブル ミックス",
    description: "いろんな野菜を少しずつ楽しめるお得なミックスパック。",
    price: "¥980",
    category: "ドライ",
  },
  {
    id: 7,
    title: "野菜スムージーキット グリーン",
    description: "ほうれん草とケールベース。毎朝の健康習慣に。",
    price: "¥1,680",
    category: "スムージー",
  },
  {
    id: 8,
    title: "野菜スムージーキット オレンジ",
    description: "にんじんとかぼちゃベース。甘くて飲みやすい。",
    price: "¥1,680",
    category: "スムージー",
  },
  {
    id: 9,
    title: "野菜スムージーキット パープル",
    description: "紫キャベツとビーツベース。アンチエイジングに。",
    price: "¥1,880",
    category: "スムージー",
  },
];

const categories = ["すべて", "セット", "ドライ", "スムージー"];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("すべて");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredProducts =
    selectedCategory === "すべて"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-beige-dark">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-light tracking-wider text-green-primary">
            imperfect veggies
          </Link>

          {/* デスクトップナビゲーション */}
          <ul className="hidden md:flex items-center gap-8 text-sm">
            <li>
              <Link href="/#about" className="text-foreground/70 hover:text-green-primary transition-colors">
                私たちについて
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-green-primary font-medium">
                商品紹介
              </Link>
            </li>
            <li>
              <Link href="/#shop" className="text-foreground/70 hover:text-green-primary transition-colors">
                店舗情報
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="text-foreground/70 hover:text-green-primary transition-colors">
                お問い合わせ
              </Link>
            </li>
          </ul>

          {/* 右側のアイコン群 */}
          <div className="flex items-center gap-2">
            {/* ショッピングカート */}
            <Link
              href="/cart"
              className="p-2 text-foreground/70 hover:text-green-primary transition-colors relative"
              aria-label="ショッピングカート"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </Link>

            {/* ハンバーガーメニューボタン（モバイル） */}
            <button
              className="md:hidden p-2 -mr-2 text-foreground/70 hover:text-green-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="メニュー"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* モバイルメニュー */}
        <div
          className={`md:hidden bg-white border-t border-beige-dark overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="px-6 py-4 space-y-4">
            <li>
              <Link href="/#about" className="block text-foreground/70 hover:text-green-primary transition-colors">
                私たちについて
              </Link>
            </li>
            <li>
              <Link href="/products" className="block text-green-primary font-medium">
                商品紹介
              </Link>
            </li>
            <li>
              <Link href="/#shop" className="block text-foreground/70 hover:text-green-primary transition-colors">
                店舗情報
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="block text-foreground/70 hover:text-green-primary transition-colors">
                お問い合わせ
              </Link>
            </li>
          </ul>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Page Header */}
          <div className="text-center mb-12">
            <p className="text-green-primary text-sm tracking-widest mb-4">PRODUCTS</p>
            <h1 className="text-3xl font-klee mb-4">商品一覧</h1>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              規格外だけど味は一級品。見た目がちょっと違うだけで廃棄されてしまう野菜たちを、
              お手頃価格でお届けします。
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm transition-colors ${
                  selectedCategory === category
                    ? "bg-green-primary text-white"
                    : "bg-beige text-foreground/70 hover:bg-beige-dark"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-beige-dark rounded-2xl p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="bg-beige rounded-xl aspect-square mb-6 flex items-center justify-center overflow-hidden">
                  <div className="text-center text-green-primary/40 group-hover:scale-110 transition-transform">
                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <span className="inline-block bg-beige text-green-primary text-xs px-3 py-1 rounded-full mb-3">
                  {product.category}
                </span>
                <h3 className="text-lg font-medium mb-2">{product.title}</h3>
                <p className="text-foreground/60 text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-green-primary font-medium">{product.price}</p>
                  <button className="bg-green-primary text-white px-4 py-2 rounded-full text-sm hover:bg-green-dark transition-colors">
                    カートに追加
                  </button>
                </div>
              </div>
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
            &copy; 2024 imperfect veggies. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
