"use client";

import Link from "next/link";
import Header from "../components/Header";

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="shop" />

      {/* Shop Hero Section */}
      <section className="pt-32 pb-16 bg-beige/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-green-primary text-sm tracking-widest mb-4">SHOP</p>
          <h1 className="text-4xl font-klee mb-6">店舗情報</h1>
          <p className="text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            規格外野菜の魅力を直接お伝えする、imperfect veggiesの実店舗です。
            <br className="hidden md:block" />
            新鮮な野菜との出会いをお楽しみください。
          </p>
        </div>
      </section>

      {/* Shop Concept Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-green-primary text-sm tracking-widest mb-4">CONCEPT</p>
            <h2 className="text-3xl font-klee mb-6">店舗のこだわり</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-beige rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-3">産地直送の新鮮野菜</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                契約農家から毎朝届く新鮮な規格外野菜。
                形は不揃いでも、味と鮮度は折り紙付きです。
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-beige rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-3">スタッフの丁寧な対応</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                野菜の特徴やおすすめの調理法など、
                スタッフが親身にアドバイスいたします。
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-beige rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-3">環境にやさしいお店</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                包装資材は再生紙やバイオマス素材を使用。
                マイバッグ持参でさらにお得に。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Info Section */}
      <section className="py-24 bg-beige/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-green-primary text-sm tracking-widest mb-4">ACCESS</p>
            <h2 className="text-3xl font-klee">アクセス・営業案内</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden aspect-video shadow-lg">
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

              <div className="pt-6 border-t border-beige-dark">
                <h4 className="text-sm text-green-primary font-medium mb-3">設備・サービス</h4>
                <ul className="text-foreground/70 text-sm space-y-2">
                  <li>・駐車場：近隣コインパーキングをご利用ください</li>
                  <li>・クレジットカード・電子マネー対応</li>
                  <li>・車椅子でのご来店可能</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products in Store Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-green-primary text-sm tracking-widest mb-4">IN STORE</p>
            <h2 className="text-3xl font-klee mb-6">店頭でのお取り扱い</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              店舗では、オンラインショップの商品に加え、店頭限定の商品もご用意しています。
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "旬の規格外野菜", desc: "その日届いた新鮮な野菜をバラ売りで" },
              { title: "野菜ボックス", desc: "人気のセット商品を店頭でも販売" },
              { title: "加工品", desc: "ドライベジタブル、ジャム、ピクルスなど" },
              { title: "店頭限定品", desc: "お惣菜やスムージーなど、店舗だけの商品" },
            ].map((item, index) => (
              <div key={index} className="bg-beige/50 rounded-xl p-6 text-center">
                <h3 className="font-medium mb-2">{item.title}</h3>
                <p className="text-foreground/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-block border-2 border-green-primary text-green-primary px-6 py-3 rounded-full text-sm hover:bg-green-primary hover:text-white transition-colors"
            >
              オンラインショップを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Notice Section */}
      <section className="py-16 bg-beige/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 md:p-12">
            <h2 className="text-xl font-medium mb-6 text-center">ご来店のお客様へ</h2>
            <ul className="space-y-4 text-foreground/70">
              <li className="flex items-start gap-3">
                <span className="text-green-primary mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>マイバッグのご持参にご協力ください。レジ袋は有料（1枚5円）となります。</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-primary mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>規格外野菜は日によって入荷状況が異なります。お目当ての野菜がある場合は、事前にお電話でご確認ください。</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-primary mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>店内での撮影はご遠慮いただいております。SNS投稿用の撮影をご希望の場合はスタッフにお声がけください。</span>
              </li>
            </ul>
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
            <Link href="/" className="text-2xl font-light tracking-wider hover:opacity-80 transition-opacity">
              imperfect veggies
            </Link>
            <p className="text-white/50 text-sm">
              &copy; 2025 imperfect veggies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
