"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 600));
    setStatus("done");
    setEmail("");
  };

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
