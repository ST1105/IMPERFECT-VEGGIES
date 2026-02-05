import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import ScrollAnimationWrapper from "../../components/ScrollAnimationWrapper";

const newsData: Record<string, {
  date: string;
  title: string;
  content: string[];
}> = {
  "1": {
    date: "2025.01.27",
    title: "公式ウェブサイトをリニューアルしました",
    content: [
      "いつも imperfect veggies をご利用いただき、誠にありがとうございます。",
      "この度、より使いやすく、見やすいデザインを目指して、公式ウェブサイトを全面リニューアルいたしました。",
      "新しいサイトでは、商品の検索やカート機能がより便利になり、スマートフォンからも快適にお買い物いただけるようになりました。",
      "今後とも imperfect veggies をよろしくお願いいたします。",
    ],
  },
  "2": {
    date: "2025.01.15",
    title: "季節の野菜ボックス、冬の新商品を追加しました",
    content: [
      "冬の美味しい野菜をたっぷり詰め込んだ、新しい季節の野菜ボックスが登場しました。",
      "今回のボックスには、甘みが増した冬野菜（白菜、大根、ほうれん草など）を中心にお届けします。",
      "見た目は不揃いでも、寒さで甘みが凝縮された美味しい野菜たちです。",
      "ぜひこの機会にお試しください。",
    ],
  },
  "3": {
    date: "2025.01.01",
    title: "新年のご挨拶",
    content: [
      "新年あけましておめでとうございます。",
      "旧年中は格別のご愛顧を賜り、厚く御礼申し上げます。",
      "2025年も「もったいない」を「おいしい」に変える活動を続けてまいります。",
      "本年も imperfect veggies をどうぞよろしくお願いいたします。",
    ],
  },
};

type Props = {
  params: Promise<{ id: string }>;
};

export default async function NewsDetailPage({ params }: Props) {
  const { id } = await params;
  const news = newsData[id];

  if (!news) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <ScrollAnimationWrapper>
        <main className="pt-24 pb-16">
          <div className="max-w-3xl mx-auto px-6">
            {/* Back Link */}
            <Link
              href="/news"
              className="scroll-animate scroll-fade-up inline-flex items-center gap-2 text-foreground/60 hover:text-green-primary transition-colors mb-8"
            >
              <span>←</span>
              <span>ニュース一覧に戻る</span>
            </Link>

            {/* Article */}
            <article>
              <p className="scroll-animate scroll-fade-up scroll-delay-100 text-green-primary text-sm mb-4">{news.date}</p>
              <h1 className="scroll-animate scroll-fade-up scroll-delay-200 text-2xl md:text-3xl font-klee mb-8">{news.title}</h1>

              <div className="scroll-animate scroll-fade-up scroll-delay-300 prose prose-lg max-w-none">
                {news.content.map((paragraph, index) => (
                  <p key={index} className="text-foreground/70 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>

            {/* Share / Back */}
            <div className="scroll-animate scroll-fade-up mt-12 pt-8 border-t border-beige-dark">
              <Link
                href="/news"
                className="inline-block border-2 border-green-primary text-green-primary px-6 py-3 rounded-full text-sm hover:bg-green-primary hover:text-white transition-colors"
              >
                ニュース一覧へ
              </Link>
            </div>
          </div>
        </main>
      </ScrollAnimationWrapper>

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
