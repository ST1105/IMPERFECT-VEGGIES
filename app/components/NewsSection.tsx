import Link from "next/link";

const newsItems = [
  {
    date: "2025.01.27",
    title: "公式ウェブサイトをリニューアルしました",
    href: "/news/1",
  },
  {
    date: "2025.01.15",
    title: "季節の野菜ボックス、冬の新商品を追加しました",
    href: "/news/2",
  },
  {
    date: "2025.01.01",
    title: "新年のご挨拶",
    href: "/news/3",
  },
];

type NewsSectionProps = {
  showTitle?: boolean;
  maxItems?: number;
  className?: string;
};

export default function NewsSection({
  showTitle = true,
  maxItems = 3,
  className = "",
}: NewsSectionProps) {
  const displayItems = newsItems.slice(0, maxItems);

  return (
    <div className={className}>
      {showTitle && (
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-klee text-green-primary">ニュース</h2>
          <Link
            href="/news"
            className="text-sm text-foreground/60 hover:text-green-primary transition-colors"
          >
            すべて見る →
          </Link>
        </div>
      )}
      <div className="space-y-4">
        {displayItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="block bg-beige/30 rounded-xl p-6 hover:bg-beige/50 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-green-primary mb-2">{item.date}</p>
                <p className="text-foreground/80">{item.title}</p>
              </div>
              <span className="text-green-primary shrink-0">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
