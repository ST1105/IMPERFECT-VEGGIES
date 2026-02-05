"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

type HeaderProps = {
  currentPage?: "home" | "about" | "products" | "shop";
};

export default function Header({ currentPage = "home" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { openCart, totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      // 100px以上スクロールしたらヘッダーを表示
      const scrollThreshold = 100;
      setIsVisible(window.scrollY > scrollThreshold);
    };

    // 初期状態をチェック
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: currentPage === "home" ? "#about" : "/#about", label: "私たちについて", key: "about" },
    { href: "/products", label: "商品紹介", key: "products" },
    { href: "/shop", label: "店舗情報", key: "shop" },
    { href: currentPage === "home" ? "#contact" : "/#contact", label: "お問い合わせ", key: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-40 border-b border-beige-dark transition-transform duration-500 ease-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center">
        <Link href="/" className="flex items-center gap-3 text-2xl font-light tracking-wider text-green-primary">
          <Image
            src="/logo-icon.png"
            alt="imperfect veggies"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          imperfect veggies
        </Link>

        {/* デスクトップナビゲーション */}
        <ul className="hidden md:flex items-center gap-8 text-sm ml-auto mr-6">
          {navLinks.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                className={
                  currentPage === link.key
                    ? "text-green-primary font-medium"
                    : "text-foreground/70 hover:text-green-primary transition-colors"
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* 右側のアイコン群 */}
        <div className="flex items-center">
          {/* ショッピングカート */}
          <button
            onClick={openCart}
            className="p-2 text-foreground/70 hover:text-green-primary transition-colors relative"
            aria-label="ショッピングカート"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-green-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                {totalItems > 99 ? "99+" : totalItems}
              </span>
            )}
          </button>

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
          {navLinks.map((link, index) => (
            <li
              key={link.key}
              className={`transform transition-all duration-500 ${
                isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              }`}
              style={{ transitionDelay: `${(index + 1) * 50}ms` }}
            >
              <Link
                href={link.href}
                className={
                  currentPage === link.key
                    ? "block text-green-primary font-medium"
                    : "block text-foreground/70 hover:text-green-primary transition-colors"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
