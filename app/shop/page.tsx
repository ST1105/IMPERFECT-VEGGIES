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
          <h1 className="text-4xl font-klee">店舗情報</h1>
        </div>
      </section>

      {/* Shop Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
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
                <h2 className="text-xl font-medium mb-4">imperfect veggies 本店</h2>
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
                <h3 className="text-sm text-green-primary font-medium mb-3">アクセス</h3>
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
