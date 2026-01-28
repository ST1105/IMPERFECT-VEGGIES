"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-beige-dark">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* ハンバーガーメニューボタン（モバイル） */}
          <button
            className="md:hidden p-2 -ml-2 text-foreground/70 hover:text-green-primary transition-colors"
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

          <Link href="/" className="text-2xl font-light tracking-wider text-green-primary">
            imperfect veggies
          </Link>

          {/* デスクトップナビゲーション */}
          <ul className="hidden md:flex items-center gap-8 text-sm">
            <li>
              <Link href="#about" className="text-foreground/70 hover:text-green-primary transition-colors">
                私たちについて
              </Link>
            </li>
            <li>
              <Link href="#products" className="text-foreground/70 hover:text-green-primary transition-colors">
                商品紹介
              </Link>
            </li>
            <li>
              <Link href="#shop" className="text-foreground/70 hover:text-green-primary transition-colors">
                店舗情報
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-foreground/70 hover:text-green-primary transition-colors">
                お問い合わせ
              </Link>
            </li>
          </ul>

          {/* モバイル用の空白スペース（バランス用） */}
          <div className="w-10 md:hidden" />
        </nav>

        {/* モバイルメニュー */}
        <div
          className={`md:hidden bg-white border-t border-beige-dark overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="px-6 py-4 space-y-4">
            <li className={`transform transition-all duration-500 ${isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`} style={{ transitionDelay: "100ms" }}>
              <Link
                href="#about"
                className="block text-foreground/70 hover:text-green-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                私たちについて
              </Link>
            </li>
            <li className={`transform transition-all duration-500 ${isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`} style={{ transitionDelay: "200ms" }}>
              <Link
                href="#products"
                className="block text-foreground/70 hover:text-green-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                商品紹介
              </Link>
            </li>
            <li className={`transform transition-all duration-500 ${isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`} style={{ transitionDelay: "300ms" }}>
              <Link
                href="#shop"
                className="block text-foreground/70 hover:text-green-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                店舗情報
              </Link>
            </li>
            <li className={`transform transition-all duration-500 ${isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`} style={{ transitionDelay: "400ms" }}>
              <Link
                href="#contact"
                className="block text-foreground/70 hover:text-green-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                お問い合わせ
              </Link>
            </li>
          </ul>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {(() => {
          const heroImages = [
            "/hero/field1.png",
            "/hero/rice_field.jpg",
            "/hero/vegges_kikakugai.jpg",
          ];
          return (
            <div className="absolute inset-0 z-0">
              {heroImages.map((src, index) => (
                <div
                  key={index}
                  className="absolute inset-0 bg-cover bg-center hero-slide"
                  style={{
                    backgroundImage: `url(${src})`,
                    animationDelay: `${index * 4}s`,
                  }}
                />
              ))}
              {/* オーバーレイ（テキストを読みやすくする） */}
              <div className="absolute inset-0 bg-white/70" />
            </div>
          );
        })()}

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
          <p className="text-green-primary text-sm tracking-widest mb-4 font-medium">
            IMPERFECT IS BEAUTIFUL
          </p>
          <h1 className="text-4xl md:text-6xl font-klee font-semibold text-foreground mb-6 leading-tight">
            食材の命を
            <br />
            <span className="text-green-primary">生かし切る。</span>
          </h1>
          <p className="text-foreground/70 max-w-xl mx-auto mb-10 leading-relaxed">
            規格外野菜をもっと身近に。
            <br />
            地球にやさしく、食卓をゆたかに。
          </p>
          <Link
            href="#products"
            className="inline-block bg-green-primary text-white px-8 py-3 rounded-full text-sm hover:bg-green-light transition-colors"
          >
            商品を見る
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-green-primary text-sm tracking-widest mb-4">OUR STORY</p>
              <h2 className="text-3xl font-klee mb-6">
                「もったいない」を
                <br />
                「おいしい」に。
              </h2>
              <p className="text-foreground/60 leading-relaxed mb-6">
                日本では年間約600万トンもの食品が廃棄されています。
                その多くは、味や品質に問題がないにもかかわらず、
                見た目の理由だけで市場に出回ることができない野菜たちです。
              </p>
              <p className="text-foreground/60 leading-relaxed mb-8">
                私たちimperfect veggiesは、
                そんな規格外野菜に新しい価値を与え、
                食品ロスの削減と持続可能な社会の実現に貢献します。
              </p>
              <Link
                href="/about"
                className="inline-block border-2 border-green-primary text-green-primary px-6 py-3 rounded-full text-sm hover:bg-green-primary hover:text-white transition-colors"
              >
                もっと見る
              </Link>
            </div>
            <div className="bg-beige rounded-2xl aspect-square flex items-center justify-center">
              <div className="text-center text-green-primary/40">
                <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm">Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-beige/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-green-primary text-sm tracking-widest mb-4">PRODUCTS</p>
            <h2 className="text-3xl font-klee">商品紹介</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "季節の野菜ボックス",
                description: "旬の規格外野菜を詰め合わせた、お得なセット。",
                price: "¥2,480〜",
              },
              {
                title: "ドライベジタブル",
                description: "規格外野菜を丁寧に乾燥させた、長期保存可能なスナック。",
                price: "¥980〜",
              },
              {
                title: "野菜スムージーキット",
                description: "忙しい朝にぴったり。カット野菜の冷凍パック。",
                price: "¥1,680〜",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="bg-beige rounded-xl aspect-square mb-6 flex items-center justify-center">
                  <div className="text-center text-green-primary/40">
                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-medium mb-2">{product.title}</h3>
                <p className="text-foreground/60 text-sm mb-4">{product.description}</p>
                <p className="text-green-primary font-medium">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-green-primary text-sm tracking-widest mb-4">SHOP</p>
            <h2 className="text-3xl font-klee">店舗情報</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden aspect-video">
              <iframe
                src="https://www.google.com/maps?q=セブンイレブン+渋谷駅前店&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="店舗所在地"
              />
            </div>

            {/* Shop Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-4">imperfect veggies 本店</h3>
                <dl className="space-y-4 text-foreground/70">
                  <div className="flex gap-4">
                    <dt className="w-20 shrink-0 text-green-primary font-medium">住所</dt>
                    <dd>〒150-0001<br />東京都渋谷区神宮前1-2-3</dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="w-20 shrink-0 text-green-primary font-medium">営業時間</dt>
                    <dd>10:00 - 19:00</dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="w-20 shrink-0 text-green-primary font-medium">定休日</dt>
                    <dd>毎週水曜日</dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="w-20 shrink-0 text-green-primary font-medium">電話</dt>
                    <dd>03-1234-5678</dd>
                  </div>
                </dl>
              </div>

              <div className="pt-6 border-t border-beige-dark">
                <h4 className="text-sm text-green-primary font-medium mb-3">アクセス</h4>
                <ul className="text-foreground/70 text-sm space-y-2">
                  <li>・JR山手線「原宿駅」より徒歩5分</li>
                  <li>・東京メトロ千代田線「明治神宮前駅」より徒歩3分</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer id="contact" className="py-24 bg-green-primary text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-klee mb-6">お問い合わせ</h2>
              <p className="text-white/70 leading-relaxed mb-8">
                商品に関するご質問、法人様からのお問い合わせなど、
                お気軽にご連絡ください。
              </p>
              <a
                href="mailto:hello@imperfect-veggies.com"
                className="inline-block border border-white/30 px-6 py-3 rounded-full text-sm hover:bg-white hover:text-green-primary transition-colors"
              >
                hello@imperfect-veggies.com
              </a>
            </div>
            <div>
              <h3 className="text-lg font-light mb-6">Follow Us</h3>
              <div className="flex gap-4">
                {["Instagram", "Twitter", "Facebook"].map((sns) => (
                  <a
                    key={sns}
                    href="#"
                    className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-sm hover:bg-white hover:text-green-primary transition-colors"
                  >
                    {sns[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-2xl font-light tracking-wider">imperfect veggies</p>
            <p className="text-white/50 text-sm">
              &copy; 2025 imperfect veggies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
