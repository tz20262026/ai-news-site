import type { Metadata } from "next";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Grok（グロック）完全ガイド2026年版【xAI・使い方・ChatGPTとの違い・X（Twitter）連携】",
  description:
    "xAIが開発したGrokの使い方を2026年版で完全解説。ChatGPT・Claude・Geminiとの比較・X（Twitter）連携でリアルタイムデータを活用する方法を詳しく解説します。",
  openGraph: {
    title: "Grok（グロック）完全ガイド2026年版【xAI・ChatGPTとの違い】",
    description: "Grokの使い方・ChatGPTとの比較・X連携を解説。",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grok（グロック）完全ガイド2026年版",
    description: "Grokの使い方・ChatGPTとの違い・X連携機能を解説。",
  },
};

interface CompareRow {
  feature: string;
  grok: string;
  chatgpt: string;
  claude: string;
}

interface FaqItem {
  q: string;
  a: string;
}

const COMPARE_ROWS: CompareRow[] = [
  { feature: "開発元", grok: "xAI（Elon Musk）", chatgpt: "OpenAI", claude: "Anthropic" },
  { feature: "最新情報", grok: "✅ X（Twitter）リアルタイム", chatgpt: "△ 知識カットオフあり", claude: "△ 知識カットオフあり" },
  { feature: "無料プラン", grok: "✅ Xアカウントで利用可能", chatgpt: "✅ GPT-4oの一部機能", claude: "✅ Claude 3.5 Sonnet" },
  { feature: "画像生成", grok: "✅ Aurora（高品質）", chatgpt: "✅ DALL-E 3", claude: "❌ なし" },
  { feature: "コーディング", grok: "◎ 高性能", chatgpt: "◎ 高性能", claude: "◎ 最高水準" },
  { feature: "ユーモア・個性", grok: "◎ ユーモア/辛口回答も可", chatgpt: "△ 中立的", claude: "△ 丁寧・安全重視" },
  { feature: "X（Twitter）連携", grok: "◎ 最強（ポスト分析・トレンド）", chatgpt: "△ 一部対応", claude: "❌ なし" },
  { feature: "音声モード", grok: "✅ 音声会話対応", chatgpt: "✅ 高品質な音声モード", claude: "❌ なし" },
];

const FAQS: FaqItem[] = [
  {
    q: "GrokはChatGPTと何が違いますか？",
    a: "最大の違いは①X（Twitter）のリアルタイムデータにアクセスできる（2024年以降の最新情報が使える）②ユーモアのある・辛口な回答スタイルが選べる③画像生成モデル「Aurora」が組み込まれている点です。ChatGPTより自由度が高い反面、Anthropicが安全性に力を入れているClaudeよりは不正確な回答が出やすいこともあります。",
  },
  {
    q: "Grokは無料で使えますか？",
    a: "はい、Xのアカウント（無料）があれば基本的なGrokの機能を無料で利用できます。ただし無料版は利用回数に制限があります。X Premium（月額980円）でGrokの高度な機能・より多くの利用回数が解放されます。最上位のX Premium+では画像生成・最新モデルなどが追加で利用できます。",
  },
  {
    q: "Grokをスマホで使うにはどうすればいいですか？",
    a: "①XアプリのDM画面からGrokアイコンをタップして起動②Grok公式サイト（grok.com）にスマホブラウザでアクセスして利用する方法があります。AndroidとiOSどちらでも対応しています。Xのアカウントでログインするだけで今すぐ使い始められます。",
  },
  {
    q: "GrokでX（Twitter）のトレンドを調べる方法を教えてください。",
    a: "Grokに「現在のXでトレンドになっている話題を教えて」「日本のXで〇〇について何が話されているか教えて」と入力するだけです。Grokは自動的にXのリアルタイムデータを参照して最新のトレンド・投稿を分析して回答します。競合分析・市場調査・ニュース収集に活用できる強力な機能です。",
  },
  {
    q: "Grokの画像生成機能「Aurora」はどのくらい優れていますか？",
    a: "Grokに搭載されているAurora（Aurora Image Generation）は2026年現在、写真のようにリアルな画像生成が得意で、人物・風景・商品モデルなど高品質な画像を生成できます。DALL-E 3（ChatGPT）と比較して、より写実的な人物表現が得意とされています。X Premium（有料）加入でより高品質・多くの枚数が生成できます。",
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

export default function GrokGuidePage() {
  return (
    <main className="bg-gray-950 min-h-screen text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 py-12">

        {/* ヒーロー */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold bg-gray-500/20 text-gray-300 border border-gray-500/30 rounded-full px-4 py-1 mb-4">
            🤖 2026年最新版
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            Grok（グロック）<br />
            <span className="text-gray-300">完全ガイド2026年版</span>
            <br />
            <span className="text-xl text-gray-400 font-bold">【xAI・使い方・ChatGPTとの違い・X連携】</span>
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Elon MuskのxAIが開発したGrokの使い方・<br />
            ChatGPTとの比較・X連携機能を2026年版で解説。
          </p>
        </div>

        {/* 比較表 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-gray-500 pl-3">
            🤖 Grok vs ChatGPT vs Claude 比較表
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-gray-800">
                  <th className="text-left p-2.5 text-gray-300 font-bold border border-gray-700">機能</th>
                  <th className="text-center p-2.5 text-gray-200 font-bold border border-gray-700">Grok</th>
                  <th className="text-center p-2.5 text-yellow-300 font-bold border border-gray-700">ChatGPT</th>
                  <th className="text-center p-2.5 text-orange-300 font-bold border border-gray-700">Claude</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-900" : "bg-gray-900/50"}>
                    <td className="p-2.5 text-gray-400 border border-gray-700 font-semibold">{row.feature}</td>
                    <td className="p-2.5 text-center text-gray-200 border border-gray-700">{row.grok}</td>
                    <td className="p-2.5 text-center text-gray-300 border border-gray-700">{row.chatgpt}</td>
                    <td className="p-2.5 text-center text-gray-300 border border-gray-700">{row.claude}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-600/30 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            🤖 他のAIツールも活用しよう
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            GrokはX連携に強い。汎用的な作業にはChatGPT・<br />
            文書分析にはClaude・情報収集にはPerplexityが向いています。
          </p>
          <Link
            href="/ai-tools-guide"
            className="inline-block bg-gray-600 hover:bg-gray-500 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            無料AIツール15選を見る →
          </Link>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 border-l-4 border-gray-500 pl-3">
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
