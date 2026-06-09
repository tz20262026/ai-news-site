"use client";

const programs = [
  {
    id: 1,
    icon: "🛡️",
    badge: "世界6,000万人利用",
    name: "NordVPN",
    desc: "世界最大級のVPN。ハッカーや追跡から完全保護。ワールドカップの海外配信視聴にも活躍中！",
    tags: ["30日間返金保証", "6デバイス同時接続", "世界111ヶ国対応"],
    cta: "今すぐ割引プランで始める",
    url: "https://px.a8.net/svt/ejp?a8mat=4B5RS6+G7GTMA+3YFI+674EQ",
    glow: "cyan",
  },
  {
    id: 2,
    icon: "⚡",
    badge: "最高速VPN",
    name: "ExpressVPN",
    desc: "DAZNやNetflixも快適！業界最速クラスのVPN。高セキュリティ・プライバシー保護の最高峰。",
    tags: ["業界最速", "30日間返金保証", "ルーター対応"],
    cta: "高速VPNを今すぐ試す",
    url: "https://px.a8.net/svt/ejp?a8mat=4B5RS6+G6VE0I+5JSS+5YRHE",
    glow: "blue",
  },
  {
    id: 3,
    icon: "🌸",
    badge: "国産VPN・14年実績",
    name: "スイカVPN",
    desc: "海外から日本のテレビ・動画が見れる！日本語サポートで安心。14年の信頼と実績の国産VPN。",
    tags: ["日本語サポート", "海外からNetflix OK", "お試し100円〜"],
    cta: "海外からも日本のテレビを見る",
    url: "https://px.a8.net/svt/ejp?a8mat=4B5RS6+G5OISY+4R3G+61C2Q",
    glow: "emerald",
  },
  {
    id: 4,
    icon: "🏠",
    badge: "国産・固定IP対応",
    name: "MillenVPN（ミレンVPN）",
    desc: "大手レンタルサーバーmixhostが提供する信頼のVPN。固定IPでセキュリティ業務にも最適。",
    tags: ["固定IP対応", "国産で安心", "サブスク月200円〜"],
    cta: "お試し100円で始める",
    url: "https://px.a8.net/svt/ejp?a8mat=4B5RS6+G53376+3JTE+HV7V6",
    glow: "violet",
  },
  {
    id: 5,
    icon: "🚀",
    badge: "国内シェアNo.1",
    name: "エックスサーバー",
    desc: "AIメディア・ニュースサイト運営ならエックスサーバー。表示速度・安定性・サポートが業界最高水準。",
    tags: ["国内最速クラス", "WordPress自動導入", "最大30,000円キャッシュバック"],
    cta: "今すぐ申し込む（初月無料）",
    url: "https://px.a8.net/svt/ejp?a8mat=4B3G6D+E0VLRM+CO4+61C2Q",
    glow: "orange",
  },
  {
    id: 6,
    icon: "📱",
    badge: "海外旅行必携",
    name: "Saily eSIM",
    desc: "現地SIM不要！海外旅行をもっとスマートに。スマホで即購入・即開通できるeSIM。",
    tags: ["200以上の国・地域対応", "SIM交換不要", "購入後すぐ使える"],
    cta: "海外旅行前に今すぐ準備",
    url: "https://px.a8.net/svt/ejp?a8mat=4B5RS6+G994FM+5L2C+5YJRM",
    glow: "sky",
  },
];

const glowMap: Record<string, string> = {
  cyan: "hover:shadow-cyan-900/40 hover:border-cyan-500/50",
  blue: "hover:shadow-blue-900/40 hover:border-blue-500/50",
  emerald: "hover:shadow-emerald-900/40 hover:border-emerald-500/50",
  violet: "hover:shadow-violet-900/40 hover:border-violet-500/50",
  orange: "hover:shadow-orange-900/40 hover:border-orange-500/50",
  sky: "hover:shadow-sky-900/40 hover:border-sky-500/50",
};

const badgeMap: Record<string, string> = {
  cyan: "text-cyan-300 border-cyan-500/30 bg-cyan-500/10",
  blue: "text-blue-300 border-blue-500/30 bg-blue-500/10",
  emerald: "text-emerald-300 border-emerald-500/30 bg-emerald-500/10",
  violet: "text-violet-300 border-violet-500/30 bg-violet-500/10",
  orange: "text-orange-300 border-orange-500/30 bg-orange-500/10",
  sky: "text-sky-300 border-sky-500/30 bg-sky-500/10",
};

const ctaMap: Record<string, string> = {
  cyan: "bg-cyan-600 hover:bg-cyan-500",
  blue: "bg-blue-600 hover:bg-blue-500",
  emerald: "bg-emerald-600 hover:bg-emerald-500",
  violet: "bg-violet-600 hover:bg-violet-500",
  orange: "bg-orange-600 hover:bg-orange-500",
  sky: "bg-sky-600 hover:bg-sky-500",
};

export default function AffiliateSectionAiNews() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold text-cyan-400 border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 rounded-full mb-4">
            PR・おすすめサービス
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            AIニュースを読む人が<span className="text-cyan-400">次に使うべき</span>サービス
          </h2>
          <p className="text-slate-400 text-sm">セキュリティ・プライバシー・インフラを万全に整えるための厳選サービス。</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {programs.map((p) => (
            <a
              key={p.id}
              href={p.url}
              rel="nofollow sponsored"
              target="_blank"
              className={`group flex flex-col bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ${glowMap[p.glow]}`}
            >
              <div className="p-5 flex flex-col flex-1 gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">{p.icon}</span>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${badgeMap[p.glow]}`}>
                    {p.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white leading-snug">{p.name}</h3>
                <p className="text-xs text-slate-400 leading-relaxed flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-[10px] text-slate-300 bg-slate-700/50 border border-slate-600/50 px-2 py-0.5 rounded-full">
                      ✓ {tag}
                    </span>
                  ))}
                </div>
                <div className={`mt-1 text-center text-sm font-bold text-white py-2.5 rounded-xl ${ctaMap[p.glow]} transition-colors`}>
                  {p.cta} →
                </div>
              </div>
            </a>
          ))}
        </div>
        <p className="text-center text-[10px] text-slate-600 mt-6">※ 本セクションはPR・広告を含みます</p>
      </div>
    </section>
  );
}
