"use client";

import { useCart } from "../context/CartContext";

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, totalItems } = useCart();

  // 合計金額を計算（¥を除いて数値に変換）
  const totalPrice = items.reduce((sum, item) => {
    const price = parseInt(item.price.replace(/[¥,]/g, ""), 10);
    return sum + price * item.quantity;
  }, 0);

  return (
    <>
      {/* オーバーレイ */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />

      {/* カートドロワー */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* ヘッダー */}
        <div className="flex items-center justify-between p-6 border-b border-beige-dark">
          <h2 className="text-xl font-medium">
            カート
            {totalItems > 0 && (
              <span className="ml-2 text-sm text-foreground/60">({totalItems}点)</span>
            )}
          </h2>
          <button
            onClick={closeCart}
            className="p-2 text-foreground/70 hover:text-foreground transition-colors"
            aria-label="閉じる"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* カート内容 */}
        <div className="flex flex-col h-[calc(100%-80px)]">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-foreground/50 p-6">
              <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p>カートは空です</p>
            </div>
          ) : (
            <>
              {/* 商品リスト */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 bg-beige/30 rounded-xl"
                  >
                    {/* 商品画像プレースホルダー */}
                    <div className="w-20 h-20 bg-beige rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-8 h-8 text-green-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>

                    {/* 商品情報 */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm mb-1 truncate">{item.title}</h3>
                      <p className="text-green-primary font-medium text-sm">{item.price}</p>

                      {/* 数量調整 */}
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 rounded-full border border-beige-dark flex items-center justify-center text-foreground/70 hover:border-green-primary hover:text-green-primary transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                        <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 rounded-full border border-beige-dark flex items-center justify-center text-foreground/70 hover:border-green-primary hover:text-green-primary transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* 削除ボタン */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-foreground/40 hover:text-red-500 transition-colors self-start"
                      aria-label="削除"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>

              {/* フッター（合計・購入ボタン） */}
              <div className="p-6 border-t border-beige-dark bg-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-foreground/70">合計</span>
                  <span className="text-xl font-medium">¥{totalPrice.toLocaleString()}</span>
                </div>
                <button className="w-full bg-green-primary text-white py-4 rounded-full font-medium hover:bg-green-dark transition-colors">
                  購入手続きへ
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
