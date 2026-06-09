"use client";

import { useState } from "react";

type Props = {
  /** サイドバーの場合はコンパクト表示 */
  compact?: boolean;
};

export default function NewsletterSignup({ compact = false }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    // TODO: 実際のメール登録APIに置き換える
    await new Promise((r) => setTimeout(r, 700));
    setStatus("done");
    setEmail("");
  };

  if (compact) {
    return (
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-4 text-white">
        <p className="text-sm font-bold mb-0.5">📬 週1AIニュースまとめ</p>
        <p className="text-xs text-blue-200 mb-3 leading-relaxed">
          毎週月曜日、厳選した最新AIニュースをメールでお届け
        </p>
        {status === "done" ? (
          <div className="text-sm font-medium text-green-300 py-1">
            ✅ 登録ありがとうございます！
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-lg text-sm text-gray-900 placeholder-gray-400 bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-2 rounded-lg bg-white text-blue-700 text-sm font-bold hover:bg-blue-50 transition-colors disabled:opacity-60"
            >
              {status === "loading" ? "登録中..." : "無料で登録する"}
            </button>
          </form>
        )}
      </div>
    );
  }

  // フル版（記事詳細ページ・ランディング用）
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-6 sm:p-8 text-white shadow-lg">
      {/* 背景装飾 */}
      <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-white/5" />
      <div className="absolute -bottom-8 -left-4 w-24 h-24 rounded-full bg-white/5" />

      <div className="relative">
        {/* ヘッダー */}
        <div className="flex items-start gap-3 mb-4">
          <span className="text-2xl shrink-0">📬</span>
          <div>
            <h3 className="text-lg font-extrabold leading-tight">
              AI最新情報を毎週メールでお届け
            </h3>
            <p className="text-blue-200 text-sm mt-0.5">
              無料 · 毎週月曜日 · いつでも解除OK
            </p>
          </div>
        </div>

        {/* ベネフィット一覧 */}
        <ul className="mb-5 space-y-1.5">
          {[
            "海外100媒体から厳選した週間トップニュース",
            "注目のAIツール・新機能の使い方レポート",
            "AIビジネス活用の事例と実践ノウハウ",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-blue-100">
              <span className="text-emerald-300 mt-0.5 shrink-0">✓</span>
              {item}
            </li>
          ))}
        </ul>

        {/* フォーム */}
        {status === "done" ? (
          <div className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
            <span className="text-emerald-300 text-xl">✅</span>
            <div>
              <p className="font-bold text-sm">登録ありがとうございます！</p>
              <p className="text-blue-200 text-xs mt-0.5">来週月曜日から配信開始です</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-xl text-sm text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-white/50 transition"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="shrink-0 px-5 py-2.5 rounded-xl bg-white text-blue-700 text-sm font-extrabold hover:bg-blue-50 active:scale-95 transition-all disabled:opacity-60 shadow-sm"
            >
              {status === "loading" ? "登録中..." : "無料登録"}
            </button>
          </form>
        )}

        {/* 注記 */}
        <p className="mt-3 text-xs text-blue-300/80 text-center">
          スパムは送りません。いつでも1クリックで解除できます。
        </p>
      </div>
    </div>
  );
}
