import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-beige-dark">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-light tracking-wider text-green-primary">
            imperfect veggies
          </Link>
          <ul className="hidden md:flex items-center gap-8 text-sm">
            <li>
              <Link href="/#about" className="text-foreground/70 hover:text-green-primary transition-colors">
                私たちについて
              </Link>
            </li>
            <li>
              <Link href="/#products" className="text-foreground/70 hover:text-green-primary transition-colors">
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
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-8 bg-beige/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-green-primary text-sm tracking-widest mb-4">OUR STORY</p>
          <h1 className="text-3xl md:text-4xl font-klee mb-8">私たちについて</h1>
        </div>
      </section>

      {/* キャッチコピー */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-klee leading-tight mb-8">
            「もったいない」を
            <br />
            <span className="text-green-primary">「おいしい」に。</span>
          </h2>
        </div>
      </section>

      {/* 詳細 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-foreground/70 leading-loose text-lg">
              私たちは、「もったいない」を「おいしい」に変えることで、
              持続可能な食の未来を創造します。形が不揃いでも、
              傷があっても、野菜本来のおいしさは変わりません。
              むしろ、その個性こそが自然の恵みの証です。
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-klee text-green-primary mb-6">私たちが解決したい課題</h2>
            <div className="bg-beige/50 rounded-2xl p-8 mb-8">
              <p className="text-4xl font-klee text-green-primary mb-2">年間 600万トン</p>
              <p className="text-foreground/70">日本で廃棄される食品の量</p>
            </div>
            <p className="text-foreground/70 leading-loose">
              日本では年間約600万トンもの食品が廃棄されています。
              その中には、味や品質には全く問題がないにもかかわらず、
              見た目の理由だけで市場に出回ることができない野菜が大量に含まれています。
            </p>
            <p className="text-foreground/70 leading-loose mt-4">
              農家の方々が丹精込めて育てた野菜が、
              ただ形が規格に合わないというだけで廃棄される現状。
              私たちはこの問題に真正面から向き合い、解決策を提案します。
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-klee text-green-primary mb-6">私たちのアプローチ</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🥬</span>
                </div>
                <h3 className="font-klee text-lg mb-2">直接買い取り</h3>
                <p className="text-foreground/60 text-sm">
                  農家から規格外野菜を適正価格で直接買い取り、農家の収入を支援します。
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="font-klee text-lg mb-2">価値の再定義</h3>
                <p className="text-foreground/60 text-sm">
                  見た目ではなく、味や栄養価という本質的な価値にフォーカスした商品開発。
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="font-klee text-lg mb-2">意識の変革</h3>
                <p className="text-foreground/60 text-sm">
                  消費者の皆様と共に、食に対する意識を変え、持続可能な社会を目指します。
                </p>
              </div>
            </div>
          </div>

          {/* News */}
          <div className="mb-16">
            <h2 className="text-2xl font-klee text-green-primary mb-6">ニュース</h2>
            <div className="space-y-4">
              <a href="#" className="block bg-beige/30 rounded-xl p-6 hover:bg-beige/50 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-green-primary mb-2">2025.01.27</p>
                    <p className="text-foreground/80">公式ウェブサイトをリニューアルしました</p>
                  </div>
                  <span className="text-green-primary shrink-0">→</span>
                </div>
              </a>
              <a href="#" className="block bg-beige/30 rounded-xl p-6 hover:bg-beige/50 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-green-primary mb-2">2025.01.15</p>
                    <p className="text-foreground/80">季節の野菜ボックス、冬の新商品を追加しました</p>
                  </div>
                  <span className="text-green-primary shrink-0">→</span>
                </div>
              </a>
              <a href="#" className="block bg-beige/30 rounded-xl p-6 hover:bg-beige/50 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-green-primary mb-2">2025.01.01</p>
                    <p className="text-foreground/80">新年のご挨拶</p>
                  </div>
                  <span className="text-green-primary shrink-0">→</span>
                </div>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-klee mb-4">一緒に食の未来を変えませんか？</h2>
          <p className="text-white/70 mb-8">
            私たちの活動に興味を持っていただけた方、ぜひお気軽にお問い合わせください。
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-white text-green-primary px-8 py-3 rounded-full hover:bg-beige transition-colors"
          >
            お問い合わせ
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-foreground text-white/50 text-center text-sm">
        <p>&copy; 2025 imperfect veggies. All rights reserved.</p>
      </footer>
    </div>
  );
}
