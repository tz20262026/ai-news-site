import type { Metadata } from "next";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";
import Link from "next/link";

export const metadata: Metadata = {
  title: "動画生成AI完全ガイド2026年版【Sora・RunwayML・Pika・無料ツール比較・使い方】",
  description:
    "動画生成AIの使い方を2026年版で完全解説。OpenAI Sora・RunwayML・Pika・Kling・HailGenなど最新ツール比較・無料で使える方法・ビジネス活用まで詳しく解説します。",
  openGraph: {
    title: "動画生成AI完全ガイド2026年版【Sora・RunwayML・Pika比較】",
    description: "Sora・RunwayML・Pika・Klingなど動画生成AIを徹底比較。無料で使える方法も解説。",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "動画生成AI完全ガイド2026年版",
    description: "Sora・RunwayML・Pika・Klingなど動画生成AIを徹底比較。",
  },
};

interface VideoTool {
  name: string;
  maker: string;
  icon: string;
  free: boolean;
  maxLen: string;
  quality: "最高" | "高" | "中";
  best: string;
  desc: string;
}

interface FaqItem {
  q: string;
  a: string;
}

const VIDEO_TOOLS: VideoTool[] = [
  {
    name: "Sora",
    maker: "OpenAI",
    icon: "🎬",
    free: false,
    maxLen: "最大20秒",
    quality: "最高",
    best: "映像品質重視・商用利用",
    desc: "OpenAIが開発した世界最高水準の動画生成AI。テキストから写実的な動画を生成できる。ChatGPT Plusで利用可能。",
  },
  {
    name: "RunwayML Gen-3",
    maker: "Runway",
    icon: "✈️",
    free: true,
    maxLen: "最大10秒",
    quality: "最高",
    best: "クリエイター・映像制作者",
    desc: "ハリウッド映画スタジオも採用する高品質な動画生成AI。無料プランで毎月125クレジット（約25秒分）利用可能。",
  },
  {
    name: "Kling AI",
    maker: "Kuaishou",
    icon: "🎭",
    free: true,
    maxLen: "最大3分",
    quality: "高",
    best: "長尺動画・コストパフォーマンス",
    desc: "中国QuaishouのAI。無料プランで高品質な動画が生成できコスパ最強。最大3分の動画生成が可能。",
  },
  {
    name: "Pika 2.2",
    maker: "Pika Labs",
    icon: "🌊",
    free: true,
    maxLen: "最大15秒",
    quality: "高",
    best: "初心者・SNS用動画",
    desc: "シンプルなUIで初心者でも使いやすい動画生成AI。無料プランあり。水・炎・煙などのエフェクト表現が得意。",
  },
  {
    name: "HailuoAI（MiniMax）",
    maker: "MiniMax",
    icon: "🎯",
    free: true,
    maxLen: "最大6秒",
    quality: "高",
    best: "無料で高品質・コスト0円",
    desc: "完全無料で使えるにもかかわらず高品質な動画生成が可能。初心者の入門にも最適。",
  },
];

const FAQS: FaqItem[] = [
  {
    q: "動画生成AIで無料で使えるものはありますか？",
    a: "無料で利用できる動画生成AIは複数あります。①RunwayML（月125クレジット無料）②Kling AI（無料プランで毎日数本生成可能）③Pika 2.2（無料プランあり）④HailuoAI（完全無料）が代表的です。まずはHailuoAIかKling AIの無料版から始めることをおすすめします。",
  },
  {
    q: "動画生成AIはどのくらいの品質の動画が作れますか？",
    a: "2026年現在のトップレベルのAI（Sora・RunwayML Gen-3）は、映画制作に使われるほどの高品質な動画を生成できます。ただし10〜20秒程度の短い動画が主流で、人物の細かい動き・複雑な物理現象などはまだ不自然になることがあります。SNS用の短尺動画であれば十分実用的な品質です。",
  },
  {
    q: "動画生成AIを使った副業・ビジネス活用は可能ですか？",
    a: "はい、すでに多くの活用事例があります。①SNSショート動画制作（YouTube Shorts・TikTok・Reels）②広告動画の制作②企業向け商品紹介動画③YouTube自動化チャンネル④映像制作フリーランスの効率化、などが代表的です。各ツールの利用規約で商用利用が許可されているか確認した上で活用しましょう。",
  },
  {
    q: "Soraは日本から使えますか？",
    a: "はい、2025年以降は日本でも利用可能です。ChatGPT Plus（月額20ドル）またはChatGPT Pro（月額200ドル）のサブスクリプションが必要です。利用量に応じたクレジット制で、Proプランでは高品質・長尺の動画が生成できます。",
  },
  {
    q: "動画生成AIにはどんなリスクや注意点がありますか？",
    a: "主な注意点は①著作権：他人の著作物を学習データとした問題・生成した動画の著作権帰属の確認が必要②フェイク動画：人物の顔や発言を偽造するディープフェイク利用は法的・倫理的問題がある③商用利用：ツールの利用規約で商用利用の可否を確認する、の3点です。2026年現在、各国でAI生成コンテンツへの規制整備が進んでいます。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const qualityStyle: Record<VideoTool["quality"], string> = {
  "最高": "bg-purple-500/20 text-purple-300 border-purple-500/30",
  "高": "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "中": "bg-gray-500/20 text-gray-300 border-gray-500/30",
};

export default function AiVideoGuidePage() {
  return (
    <main className="bg-gray-950 min-h-screen text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 py-12">

        {/* ヒーロー */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold bg-red-500/20 text-red-400 border border-red-500/30 rounded-full px-4 py-1 mb-4">
            🎬 2026年最新版
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            動画生成AI<br />
            <span className="text-red-400">完全ガイド2026年版</span>
            <br />
            <span className="text-xl text-gray-300 font-bold">【Sora・RunwayML・Pika・無料ツール比較】</span>
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            最新の動画生成AIツールを徹底比較。<br />
            無料で使える方法からビジネス活用まで2026年版で解説。
          </p>
        </div>

        {/* ツール比較 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-red-500 pl-3">
            🎬 動画生成AI5選 徹底比較
          </h2>
          <div className="space-y-4">
            {VIDEO_TOOLS.map((tool, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-2xl">{tool.icon}</span>
                  <div>
                    <h3 className="text-white font-black text-sm">{tool.name}</h3>
                    <p className="text-gray-500 text-xs">{tool.maker}</p>
                  </div>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${qualityStyle[tool.quality]}`}>
                    品質：{tool.quality}
                  </span>
                  {tool.free && (
                    <span className="text-xs font-bold bg-green-500/20 text-green-300 border border-green-500/30 px-2 py-0.5 rounded-full">
                      無料あり
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="bg-gray-800 rounded px-2.5 py-1.5 text-xs">
                    <span className="text-gray-400 block mb-0.5">⏱ 最大長さ</span>
                    <span className="text-gray-200">{tool.maxLen}</span>
                  </div>
                  <div className="bg-gray-800 rounded px-2.5 py-1.5 text-xs">
                    <span className="text-gray-400 block mb-0.5">🎯 おすすめ用途</span>
                    <span className="text-gray-200">{tool.best}</span>
                  </div>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">{tool.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            🤖 ChatGPTで動画制作を効率化しよう
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            動画生成AIと組み合わせてChatGPTで<br />
            台本・タイトル・説明文も自動生成できます。
          </p>
          <Link
            href="/chatgpt-guide"
            className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            ChatGPT使い方ガイドを見る →
          </Link>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 border-l-4 border-red-500 pl-3">
            よくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-4">
                <p className="text-white font-bold text-sm mb-2">Q. {faq.q}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <AffiliateSectionAiNews />
      </div>
    </main>
  );
}
