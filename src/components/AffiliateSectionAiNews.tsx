"use client";

const items = [
  {
    href: "https://px.a8.net/svt/ejp?a8mat=4B5RS7+1L5MUQ+40GA+61C2P",
    badge: "🌍 英語でAI情報を収集",
    badgeColor: "#2563eb",
    title: "スパルタ英会話",
    tagline: "英語でAI最新情報を読む｜海外ソース直読みスキル",
    desc: "OpenAI・Google・Anthropicの最新AIニュースは英語が早い。英語力を習得して一次情報に直接アクセスできるようになろう。",
    cta: "無料体験レッスンを受ける →",
    color: "#2563eb",
  },
  {
    href: "https://px.a8.net/svt/ejp?a8mat=4B5RS6+G7GTMA+3YFI+674EQ",
    badge: "🛡️ セキュリティ最強",
    badgeColor: "#4f46e5",
    title: "NordVPN",
    tagline: "世界No.1 VPN ｜ AIツール安全利用に必須",
    desc: "海外のAIサービス・GPT系ツールを安心して使うために。プライバシー保護とログなし方針で情報漏洩リスクを最小化。",
    cta: "63%オフ・今すぐ保護する →",
    color: "#4f46e5",
  },
  {
    href: "https://px.a8.net/svt/ejp?a8mat=4B5RS6+G6VE0I+5JSS+5YRHE",
    badge: "⚡ 高速接続",
    badgeColor: "#0891b2",
    title: "ExpressVPN",
    tagline: "高速VPN ｜ 海外AI・テックサービス制限突破",
    desc: "ChatGPTや海外AIツールへの制限なしアクセス。業界最速の接続速度で大容量AIファイル転送もストレスなし。",
    cta: "30日間返金保証で試す →",
    color: "#0891b2",
  },
  {
    href: "https://px.a8.net/svt/ejp?a8mat=4B3G6D+E0VLRM+CO4+61C2Q",
    badge: "🏆 シェアNo.1",
    badgeColor: "#f97316",
    title: "エックスサーバー",
    tagline: "国内最強レンタルサーバー ｜ AIブログ開設に",
    desc: "AIニュースを発信するブログ・メディアを立ち上げるなら。表示速度・安定性・SEOスコアどれも業界トップ水準。",
    cta: "10日間無料お試し →",
    color: "#f97316",
  },
  {
    href: "https://px.a8.net/svt/ejp?a8mat=4B5RS6+G994FM+5L2C+5YJRM",
    badge: "✈️ 海外旅行に最適",
    badgeColor: "#059669",
    title: "Saily eSIM",
    tagline: "海外用eSIM ｜ テックカンファレンス・出張に",
    desc: "CES・MWCなど海外テックイベントに参加するなら。SIMなし・アプリだけで現地データ通信。北米・欧州・アジア対応。",
    cta: "渡航先のプランを確認 →",
    color: "#059669",
  },
  {
    href: "https://px.a8.net/svt/ejp?a8mat=4B5RS6+G5OISY+4R3G+61C2Q",
    badge: "🇯🇵 国産VPN",
    badgeColor: "#6b7280",
    title: "スイカVPN",
    tagline: "日本サーバーVPN ｜ シンプル・安心",
    desc: "操作が難しいVPNが苦手な方に。日本語サポート充実・月額500円台〜の低コストで始められる国産VPNサービス。",
    cta: "まず無料で試す →",
    color: "#6b7280",
  },
  {
    href: "https://px.a8.net/svt/ejp?a8mat=4B5RS6+G53376+3JTE+HV7V6",
    badge: "💡 コスパ重視",
    badgeColor: "#d97706",
    title: "MillenVPN",
    tagline: "格安VPN ｜ 初心者向け・月額176円〜",
    desc: "とにかく安くVPNを始めたい方に。国内最安クラスの月額料金でも接続速度は十分。AI系サービスの安全利用に。",
    cta: "最安プランを見る →",
    color: "#d97706",
  },
  {
    href: "https://px.a8.net/svt/ejp?a8mat=45A0UT+9CDXKI+5R1M+5YJRM",
    badge: "💻 AI副業・フリーランス",
    badgeColor: "#7c3aed",
    title: "フリーランスボード",
    tagline: "AIエンジニア・フリーランス案件を探すなら",
    desc: "AI活用エンジニア向けフリーランス案件多数。ChatGPT・LLM開発などのAI系案件も豊富。新規無料会員登録で30,000円報酬。",
    cta: "無料で案件を探す →",
    color: "#7c3aed",
  },
  {
    href: "https://px.a8.net/svt/ejp?a8mat=4B1R5T+4Q9ZSI+4NIK+5YJRM",
    badge: "🖥️ AIサーバー・VPS",
    badgeColor: "#0f766e",
    title: "ABLENET VPS",
    tagline: "格安・高品質VPS ｜ AIアプリ・自動化に最適",
    desc: "AIチャットボットや自動化スクリプトのホスティングに。高コスパVPSで自前のAI環境を構築しよう。最高16,000円報酬。",
    cta: "VPSプランを確認する →",
    color: "#0f766e",
  },
  {
    href: "https://px.a8.net/svt/ejp?a8mat=4B5RS6+GGEBOY+4LJQ+614CY",
    badge: "🎬 AI動画・副業スクール",
    badgeColor: "#be185d",
    title: "クリエイターズジャパン",
    tagline: "最短1ヶ月で動画編集スキルを習得",
    desc: "AIツールを活用した動画編集スキルが身につくスクール。副業・フリーランス転職を目指す方に。現役プロが徹底指導。",
    cta: "無料説明会に申し込む →",
    color: "#be185d",
  },
];

export default function AffiliateSectionAiNews() {
  return (
    <section className="py-14 bg-slate-900 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-400/10 px-4 py-1.5 rounded-full mb-3">
            PR / 広告
          </span>
          <h2 className="text-xl md:text-2xl font-black text-white mb-2">
            AIツールをもっと安全・快適に使うために
          </h2>
          <p className="text-slate-400 text-sm">海外AIサービスを安全に使うためのツールを厳選</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <a
              key={item.title}
              href={item.href}
              rel="nofollow sponsored noopener"
              target="_blank"
              className="group flex flex-col gap-3 p-5 rounded-2xl border border-slate-700 bg-slate-800/60 hover:border-slate-500 hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: `${item.badgeColor}20`, color: item.badgeColor, border: `1px solid ${item.badgeColor}35` }}
                >
                  {item.badge}
                </span>
              </div>
              <div>
                <p className="font-black text-white text-base leading-tight">{item.title}</p>
                <p className="text-xs text-slate-500 mt-0.5">{item.tagline}</p>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed flex-1">{item.desc}</p>
              <span
                className="inline-flex items-center text-xs font-bold mt-auto py-2 px-4 rounded-xl transition-all group-hover:opacity-80"
                style={{ background: `${item.color}18`, color: item.color, border: `1px solid ${item.color}30` }}
              >
                {item.cta}
              </span>
            </a>
          ))}
        </div>
        <p className="text-center text-xs text-slate-600 mt-6">※ 本コンテンツはPR・広告を含みます</p>
      </div>
    </section>
  );
}
