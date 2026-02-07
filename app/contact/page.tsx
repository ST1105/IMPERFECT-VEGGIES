"use client";

import Link from "next/link";
import Header from "../components/Header";
import { useScrollAnimationAll } from "../hooks/useScrollAnimation";

export default function ContactPage() {
  useScrollAnimationAll();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-beige/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="scroll-animate scroll-fade-up text-green-primary text-sm tracking-widest mb-4">CONTACT</p>
          <h1 className="scroll-animate scroll-fade-up scroll-delay-100 text-4xl font-klee mb-6">お問い合わせ</h1>
          <p className="scroll-animate scroll-fade-up scroll-delay-200 text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            商品に関するご質問、法人様からのお問い合わせなど、
            <br className="hidden md:block" />
            お気軽にご連絡ください。
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <form className="space-y-8">
            <div className="scroll-animate scroll-fade-up">
              <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-2">
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-beige-dark rounded-xl focus:outline-none focus:ring-2 focus:ring-green-primary/50 focus:border-green-primary transition-colors"
                placeholder="山田 太郎"
              />
            </div>

            <div className="scroll-animate scroll-fade-up scroll-delay-100">
              <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-2">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-beige-dark rounded-xl focus:outline-none focus:ring-2 focus:ring-green-primary/50 focus:border-green-primary transition-colors"
                placeholder="example@email.com"
              />
            </div>

            <div className="scroll-animate scroll-fade-up scroll-delay-200">
              <label htmlFor="category" className="block text-sm font-medium text-foreground/70 mb-2">
                お問い合わせ種別
              </label>
              <select
                id="category"
                name="category"
                className="w-full px-4 py-3 border border-beige-dark rounded-xl focus:outline-none focus:ring-2 focus:ring-green-primary/50 focus:border-green-primary transition-colors bg-white"
              >
                <option value="">選択してください</option>
                <option value="product">商品について</option>
                <option value="order">ご注文について</option>
                <option value="corporate">法人のお客様</option>
                <option value="media">取材・メディア関連</option>
                <option value="other">その他</option>
              </select>
            </div>

            <div className="scroll-animate scroll-fade-up scroll-delay-300">
              <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-2">
                お問い合わせ内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 border border-beige-dark rounded-xl focus:outline-none focus:ring-2 focus:ring-green-primary/50 focus:border-green-primary transition-colors resize-none"
                placeholder="お問い合わせ内容をご記入ください"
              />
            </div>

            <div className="scroll-animate scroll-fade-up scroll-delay-400 text-center pt-4">
              <button
                type="submit"
                className="inline-block bg-green-primary text-white px-12 py-4 rounded-full text-sm font-medium hover:bg-green-primary/90 transition-colors"
              >
                送信する
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Other Contact Methods */}
      <section className="py-24 bg-beige/30">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="scroll-animate scroll-fade-up text-2xl font-klee text-center mb-12">その他のお問い合わせ方法</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="scroll-animate scroll-fade-up scroll-delay-100 bg-white rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">メール</h3>
              <a
                href="mailto:hello@imperfect-veggies.com"
                className="text-green-primary hover:underline"
              >
                hello@imperfect-veggies.com
              </a>
            </div>

            <div className="scroll-animate scroll-fade-up scroll-delay-200 bg-white rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">電話</h3>
              <p className="text-foreground/70 mb-1">03-1234-5678</p>
              <p className="text-foreground/50 text-sm">営業時間: 10:00 - 19:00（水曜定休）</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="scroll-animate scroll-fade-up text-foreground/60 mb-4">
            よくあるご質問は下記をご確認ください
          </p>
          <Link
            href="/about"
            className="scroll-animate scroll-fade-up scroll-delay-100 inline-block border-2 border-green-primary text-green-primary px-6 py-3 rounded-full text-sm hover:bg-green-primary hover:text-white transition-colors"
          >
            私たちについて
          </Link>
        </div>
      </section>

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
