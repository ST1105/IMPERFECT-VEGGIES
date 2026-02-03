"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Header from "../components/Header";
import NewsSection from "../components/NewsSection";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: 1,
    title: "季節の野菜ボックス S",
    description: "1〜2人用の旬の規格外野菜セット。初めての方におすすめ。",
    price: "¥2,480",
    category: "セット",
    image: "/products/seasonal-box-s.jpg",
  },
  {
    id: 2,
    title: "季節の野菜ボックス M",
    description: "3〜4人用のファミリー向けセット。週末の料理に最適。",
    price: "¥3,980",
    category: "セット",
    image: "/products/seasonal-box-m.jpg",
  },
  {
    id: 3,
    title: "季節の野菜ボックス L",
    description: "大家族やまとめ買い派に。たっぷり届く満足サイズ。",
    price: "¥5,480",
    category: "セット",
    image: "/products/seasonal-box-l.jpg",
  },
  {
    id: 4,
    title: "ドライベジタブル にんじん",
    description: "甘みが凝縮された乾燥にんじん。おやつやサラダのトッピングに。",
    price: "¥580",
    category: "ドライ",
    image: "/products/dry-carrot.jpg",
  },
  {
    id: 5,
    title: "ドライベジタブル れんこん",
    description: "サクサク食感の乾燥れんこんチップス。そのまま食べられます。",
    price: "¥680",
    category: "ドライ",
    image: "/products/dry-lotus.jpg",
  },
  {
    id: 6,
    title: "ドライベジタブル ミックス",
    description: "いろんな野菜を少しずつ楽しめるお得なミックスパック。",
    price: "¥980",
    category: "ドライ",
    image: "/products/dry-mix.jpg",
  },
  {
    id: 7,
    title: "野菜スムージーキット グリーン",
    description: "ほうれん草とケールベース。毎朝の健康習慣に。",
    price: "¥1,680",
    category: "スムージー",
    image: "/products/smoothie-green.jpg",
  },
  {
    id: 8,
    title: "野菜スムージーキット オレンジ",
    description: "にんじんとかぼちゃベース。甘くて飲みやすい。",
    price: "¥1,680",
    category: "スムージー",
    image: "/products/smoothie-orange.jpg",
  },
  {
    id: 9,
    title: "野菜スムージーキット パープル",
    description: "紫キャベツとビーツベース。アンチエイジングに。",
    price: "¥1,880",
    category: "スムージー",
    image: "/products/smoothie-purple.jpg",
  },
];

const categories = ["すべて", "セット", "ドライ", "スムージー"];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("すべて");
  const { addItem } = useCart();

  const filteredProducts =
    selectedCategory === "すべて"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="products" />

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
                <div className="bg-beige rounded-xl aspect-square mb-6 flex items-center justify-center overflow-hidden relative">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  ) : (
                    <div className="text-center text-green-primary/40 group-hover:scale-110 transition-transform">
                      <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                </div>
                <span className="inline-block bg-beige text-green-primary text-xs px-3 py-1 rounded-full mb-3">
                  {product.category}
                </span>
                <h3 className="text-lg font-medium mb-2">{product.title}</h3>
                <p className="text-foreground/60 text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-green-primary font-medium">{product.price}</p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-green-primary text-white px-4 py-2 rounded-full text-sm hover:bg-green-dark transition-colors"
                  >
                    カートに追加
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* News Section */}
      <section className="py-16 bg-beige/30">
        <div className="max-w-4xl mx-auto px-6">
          <NewsSection maxItems={2} />
        </div>
      </section>

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
