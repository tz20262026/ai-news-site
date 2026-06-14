type Props = {
  /** サイドバーの場合はコンパクト表示 */
  compact?: boolean;
};

export default function NewsletterSignup({ compact = false }: Props) {
  if (compact) {
    return (
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-4 text-white">
        <div className="flex items-center gap-1.5 mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
          <span className="text-[10px] font-bold text-green-300 uppercase tracking-widest">無料メルマガ</span>
        </div>
        <p className="text-sm font-bold mb-0.5">毎朝AIニュース5選をお届け</p>
        <p className="text-xs text-blue-200 mb-3 leading-relaxed">
          海外メディアをチェックする時間がない方へ。<br />毎朝5分で今日のAI動向がわかります。
        </p>
        <form
          action="https://formsubmit.co/tz77772014@gmail.com"
          method="POST"
          className="flex flex-col gap-2"
        >
          <input type="hidden" name="_subject" value="AIニュース メルマガ登録" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://ai-news-site-wheat.vercel.app/?thanks=1" />
          <input
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            className="w-full px-3 py-2 rounded-lg text-sm text-gray-900 placeholder-gray-400 bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
          />
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-white text-blue-700 text-sm font-bold hover:bg-blue-50 transition-colors"
          >
            無料で登録する →
          </button>
        </form>
        <p className="text-[10px] text-blue-300/70 mt-2">読者数 1,200名突破 · いつでも解除OK</p>
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
        <div className="flex items-start gap-3 mb-1">
          <span className="text-2xl shrink-0">📬</span>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold text-green-300 bg-green-500/20 px-2 py-0.5 rounded-full uppercase tracking-widest">無料</span>
              <span className="text-xs text-blue-300">読者数 1,200名突破</span>
            </div>
            <h3 className="text-lg font-extrabold leading-tight">
              毎朝AIニュース5選をお届け
            </h3>
            <p className="text-blue-200 text-sm mt-0.5">
              毎朝5分で今日のAI動向がわかる · いつでも解除OK
            </p>
          </div>
        </div>

        {/* ベネフィット一覧 */}
        <ul className="mb-5 mt-4 space-y-1.5">
          {[
            "海外100媒体から厳選した今日のAIニュース5本",
            "見逃せないAIツール・新機能の速報レポート",
            "ビジネスで今すぐ使えるAI活用ノウハウ",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-blue-100">
              <span className="text-emerald-300 mt-0.5 shrink-0">✓</span>
              {item}
            </li>
          ))}
        </ul>

        {/* フォーム */}
        <form
          action="https://formsubmit.co/tz77772014@gmail.com"
          method="POST"
          className="flex flex-col sm:flex-row gap-2"
        >
          <input type="hidden" name="_subject" value="AIニュース メルマガ登録" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://ai-news-site-wheat.vercel.app/?thanks=1" />
          <input
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            className="flex-1 px-4 py-2.5 rounded-xl text-sm text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-white/50 transition"
          />
          <button
            type="submit"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-white text-blue-700 text-sm font-extrabold hover:bg-blue-50 active:scale-95 transition-all shadow-sm"
          >
            無料登録
          </button>
        </form>

        {/* 注記 */}
        <p className="mt-3 text-xs text-blue-300/80 text-center">
          スパムは送りません。いつでも1クリックで解除できます。
        </p>
      </div>
    </div>
  );
}
