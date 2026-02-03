"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";
import NewsSection from "./components/NewsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="home" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* 背景：シンプルなグラデーション */}
        <div className="absolute inset-0 bg-gradient-to-b from-beige/50 via-white to-beige/20" />

        {/* 装飾要素（控えめなぼかし円） */}
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-green-primary/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-beige-dark/30 rounded-full blur-3xl" />

        {/* メインコンテンツ */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
          {/* タグライン */}
          <p className="text-green-primary/70 text-xs sm:text-sm tracking-[0.3em] uppercase mb-6 sm:mb-8 font-medium animate-fade-in-up">
            Imperfect is Beautiful
          </p>

          {/* メインコピー（大幅にサイズアップ） */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-klee font-semibold text-foreground leading-[1.2] tracking-tight mb-8 sm:mb-12 animate-fade-in-up animation-delay-200">
            <span className="block mb-2">食材の命を</span>
            <span className="relative inline-block text-green-primary">
              生かし切る。
              <span className="absolute -bottom-1 sm:-bottom-2 left-1/2 -translate-x-1/2 w-16 sm:w-24 h-0.5 sm:h-1 bg-green-light/50 rounded-full" />
            </span>
          </h1>

          {/* サブテキスト */}
          <p className="text-foreground/50 text-sm sm:text-base max-w-md mx-auto mb-10 sm:mb-14 leading-relaxed animate-fade-in-up animation-delay-400">
            規格外野菜をもっと身近に。<br className="hidden sm:block" />
            地球にやさしく、食卓をゆたかに。
          </p>

          {/* CTA（アイコン追加、ホバーエフェクト強化） */}
          <div className="animate-fade-in-up animation-delay-600">
            <Link
              href="#products"
              className="inline-flex items-center gap-2 bg-green-primary text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-green-light transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              商品を見る
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* スクロールインジケーター */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in-up animation-delay-800">
          <div className="flex flex-col items-center gap-2 text-foreground/30">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-foreground/30 to-transparent relative overflow-hidden">
              <div className="absolute inset-0 bg-green-primary/60 animate-scroll-line" />
            </div>
          </div>
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
            <div className="hidden md:flex bg-beige rounded-2xl aspect-square items-center justify-center">
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
                image: "/products/seasonal-box-m.png",
              },
              {
                title: "ドライベジタブル",
                description: "規格外野菜を丁寧に乾燥させた、長期保存可能なスナック。",
                price: "¥980〜",
                image: "/products/dry-carrot.png",
              },
              {
                title: "野菜スムージーキット",
                description: "忙しい朝にぴったり。カット野菜の冷凍パック。",
                price: "¥1,680〜",
                image: "/products/smoothie-green.png",
              },
            ].map((product, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow ${index > 0 ? "hidden md:block" : ""}`}
              >
                <div className="bg-beige rounded-xl aspect-square mb-6 overflow-hidden relative">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover scale-110 object-top"
                  />
                </div>
                <h3 className="text-lg font-medium mb-2">{product.title}</h3>
                <p className="text-foreground/60 text-sm mb-4">{product.description}</p>
                <p className="text-green-primary font-medium">{product.price}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-block border-2 border-green-primary text-green-primary px-6 py-3 rounded-full text-sm hover:bg-green-primary hover:text-white transition-colors"
            >
              すべての商品を見る
            </Link>
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

      {/* News Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-green-primary text-sm tracking-widest mb-4">NEWS</p>
            <h2 className="text-3xl font-klee">お知らせ</h2>
          </div>
          <NewsSection showTitle={false} />
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
