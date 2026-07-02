import type { Metadata } from "next";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI音楽生成完全ガイド2026年版【Suno・Udio・Stable Audio・無料で曲を作る方法を解説】",
  description:
    "AI音楽生成ツール2026年版完全ガイド。Suno AI・Udio・Stable Audio・MusicGen・Beatoven.aiの特徴・無料枠・使い方・著作権を初心者向けに徹底比較解説。",
  alternates: {
    canonical: "https://ai-news-site-wheat.vercel.app/ai-music-guide",
  },
  openGraph: {
    title: "AI音楽生成完全ガイド2026年版【Suno・Udio・Stable Audio比較】",
    description: "Suno AI・Udio・Stable Audioなど最新AI音楽生成ツールを比較解説。",
    type: "article",
    locale: "ja_JP",
    url: "https://ai-news-site-wheat.vercel.app/ai-music-guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI音楽生成完全ガイド2026年版",
    description: "Suno・Udio・Stable Audioを比較。無料で使えるAI作曲ツールを解説。",
  },
};

interface MusicTool {
  name: string;
  icon: string;
  freePlan: string;
  style: "テキスト→曲" | "テキスト→歌" | "テキスト→BGM" | "ハミング→曲";
  quality: "プロ級" | "高品質" | "標準";
  copyright: string;
  best: string;
}

interface FaqItem {
  q: string;
  a: string;
}

const MUSIC_TOOLS: MusicTool[] = [
  {
    name: "Suno AI",
    icon: "🎵",
    freePlan: "1日50クレジット（約10曲）",
    style: "テキスト→歌",
    quality: "プロ級",
    copyright: "個人利用は無料・商用はProプラン必要",
    best: "歌詞付き楽曲を作りたい場合。ボーカル・歌詞・メロディを一括生成。日本語歌詞にも対応。最も人気のAI音楽ツール。",
  },
  {
    name: "Udio",
    icon: "🎼",
    freePlan: "月40曲（無料プラン）",
    style: "テキスト→歌",
    quality: "プロ級",
    copyright: "個人・商用利用可（要利用規約確認）",
    best: "高音質なAI音楽生成。SunoよりもリアルなボーカルとプロレベルのMIXが特徴。英語ポップス・ロック・EDMが得意。",
  },
  {
    name: "Stable Audio",
    icon: "🔊",
    freePlan: "月20曲（無料プラン）",
    style: "テキスト→BGM",
    quality: "高品質",
    copyright: "個人利用は無料・商用はProプラン必要",
    best: "BGM・インスト曲の生成が得意。Stability AI開発。ゲーム・動画BGM用途に最適。楽器別の細かいプロンプト指定が可能。",
  },
  {
    name: "MusicGen（Meta）",
    icon: "🎸",
    freePlan: "完全無料（オープンソース）",
    style: "テキスト→BGM",
    quality: "標準",
    copyright: "商用利用可（ライセンス確認要）",
    best: "Metaが開発したオープンソースAI音楽モデル。ローカル実行・API連携が可能でエンジニア向け。無料で商用利用できる。",
  },
  {
    name: "Beatoven.ai",
    icon: "🥁",
    freePlan: "月15分（無料プラン）",
    style: "テキスト→BGM",
    quality: "高品質",
    copyright: "商用利用可（プラン要確認）",
    best: "動画・Podcast・ゲーム用BGMの自動生成に特化。ムード・テンポ・楽器を細かく指定できる。著作権フリー楽曲の生成に強い。",
  },
];

const FAQS: FaqItem[] = [
  {
    q: "Suno AIの無料版でできることを教えてください。",
    a: "Suno AIの無料版（Basic Plan）では1日50クレジットが付与され、約10曲を生成できます。主な機能：①テキストプロンプトから歌詞付きの楽曲を生成②様々なジャンル・スタイルを指定③生成した曲のダウンロード（MP3）ただし無料版では商用利用は不可で、生成した楽曲はSuno帰属（Attribution）が必要です。月額10ドルのProプランでは月500クレジットに増え、商用利用が可能になります。",
  },
  {
    q: "AI音楽生成ツールで作った曲の著作権は誰のものですか？",
    a: "AI音楽生成ツールで作った曲の著作権は各ツールの利用規約によって異なります。一般的な考え方：①Suno AI：商用プランでは生成曲の著作権はユーザーに帰属②Udio：利用規約に基づきユーザーに権利あり③MusicGen（Meta）：オープンソースで比較的自由な利用が可能。重要なのは「完全にAIのみが生成した場合、著作権法上の保護を受けられない可能性がある」という点です。人間が創作的な判断を加えること（歌詞作成・編集など）で著作権が認められやすくなります。",
  },
  {
    q: "AI音楽をYouTubeや商業利用に使えますか？",
    a: "AI音楽をYouTubeや商業利用に使う場合は注意が必要です。①Suno AI・Udio：有料プラン（Pro/Premier）にアップグレードすれば商用利用可②Stable Audio：有料プランで商用利用可③MusicGen：ライセンス確認が必要④Beatoven.ai：プランにより商用OK。YouTubeでは現在AI生成音楽の扱いに明確なルールがまだ整備途中です。収益化する場合は利用規約を必ず確認し、AI生成であることの開示が推奨されています。",
  },
  {
    q: "SunoとUdioはどちらがおすすめですか？",
    a: "用途によって選び方が変わります。日本語で歌う楽曲を作りたい→Suno AI（日本語対応が強い）。英語の高音質ポップス・ロックを作りたい→Udio（音質がSunoより高い傾向）。BGM・インスト曲を作りたい→Stable Audio・Beatoven.ai（ボーカルなし曲が得意）。まず両方の無料版を試して、自分の目的に合うほうを選ぶことをおすすめします。",
  },
  {
    q: "AI音楽生成ツールで副業・収益化はできますか？",
    a: "AI音楽生成ツールを使った収益化は可能ですが条件があります。①ロイヤルティフリー音楽の販売（Pond5・Audiojungle等への出品）②YouTube BGMチャンネル（著作権フリー音楽として投稿）③クライアント向けBGM制作（Canva動画・企業PR動画等）で収益化できます。重要なのは必ず商用利用OKのプランで生成すること、AI生成であることを開示すること、の2点です。",
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

const qualityColors: Record<MusicTool["quality"], string> = {
  プロ級: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  高品質: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  標準: "bg-amber-500/20 text-amber-300 border-amber-500/30",
};

export default function AiMusicGuidePage() {
  return (
    <main className="bg-gray-950 min-h-screen text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 py-12">

        {/* ヒーロー */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold bg-violet-500/20 text-violet-400 border border-violet-500/30 rounded-full px-4 py-1 mb-4">
            🎵 2026年最新版
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            AI音楽生成 完全ガイド<br />
            <span className="text-violet-400">2026年版</span>
            <br />
            <span className="text-xl text-gray-300 font-bold">【Suno・Udio・Stable Audio比較】</span>
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            最新AI音楽生成ツールの特徴・無料枠・著作権を<br />
            初心者向けに徹底比較解説します。
          </p>
        </div>

        {/* ツール比較 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-violet-500 pl-3">
            🎵 AI音楽生成ツール5選 比較
          </h2>
          <div className="space-y-4">
            {MUSIC_TOOLS.map((tool, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-2xl">{tool.icon}</span>
                  <h3 className="text-white font-black text-sm">{tool.name}</h3>
                  <span className={`text-xs border px-2 py-0.5 rounded-full ${qualityColors[tool.quality]}`}>{tool.quality}</span>
                  <span className="text-xs bg-violet-500/20 text-violet-300 border border-violet-500/30 px-2 py-0.5 rounded-full">{tool.style}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3 text-xs">
                  <div className="bg-gray-800 rounded px-2.5 py-1.5">
                    <span className="text-gray-400">🆓 無料プラン：</span>
                    <span className="text-gray-200">{tool.freePlan}</span>
                  </div>
                  <div className="bg-gray-800 rounded px-2.5 py-1.5">
                    <span className="text-gray-400">©️ 著作権：</span>
                    <span className="text-gray-200">{tool.copyright}</span>
                  </div>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">{tool.best}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 bg-gradient-to-r from-violet-900/20 to-blue-900/20 border border-violet-500/30 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            🤖 画像生成AIも組み合わせてみよう
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            AI音楽+AI動画+AI画像を組み合わせれば<br />
            完全AI制作のコンテンツが作れます。
          </p>
          <Link
            href="/ai-video-guide"
            className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            動画生成AIガイドを見る →
          </Link>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 border-l-4 border-violet-500 pl-3">
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
