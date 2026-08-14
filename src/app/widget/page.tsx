import type { Metadata } from "next";
import Link from "next/link";
import WidgetCopyButton from "@/components/WidgetCopyButton";

const BASE_URL = "https://ai-news-site-wheat.vercel.app";
const EMBED_CODE = `<iframe src="${BASE_URL}/widget/ai-term.html" width="320" height="220" style="border:0; max-width:100%;" loading="lazy" title="今日のAI用語1日1語"></iframe>`;

export const metadata: Metadata = {
  title: "【無料】AI用語1日1語ウィジェット｜ブログ・サイトに貼れる埋め込みパーツ",
  description:
    "生成AI・LLM関連の用語が毎日自動で切り替わる無料の埋め込みウィジェット。コピペ1行でブログ・サイトに設置でき、更新の手間は一切かかりません。商用サイトでも無料で利用できます。",
  alternates: {
    canonical: `${BASE_URL}/widget`,
  },
  openGraph: {
    title: "【無料】AI用語1日1語ウィジェット｜AI News Japan",
    description: "生成AI・LLM関連の用語が毎日自動で切り替わる無料ウィジェット。コピペ1行で設置でき、メンテナンスは不要です。",
    type: "website",
    url: `${BASE_URL}/widget`,
    images: [
      {
        url: "https://ai-news-site-wheat.vercel.app/opengraph-image",
        width: 1200,
        height: 630,
        alt: "AI用語1日1語ウィジェット",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "【無料】AI用語1日1語ウィジェット｜AI News Japan",
    description: "生成AI・LLM関連の用語が毎日自動で切り替わる無料ウィジェット。コピペ1行で設置できます。",
    images: ["https://ai-news-site-wheat.vercel.app/opengraph-image"],
  },
};

const FAQS = [
  {
    q: "ウィジェットの設置は無料ですか？",
    a: "はい、完全無料です。会員登録やAPIキーの発行も不要で、下記のコードをそのままコピー＆ペーストするだけで設置できます。",
  },
  {
    q: "商用サイトやアフィリエイトブログに設置してもいいですか？",
    a: "問題ありません。個人ブログ・法人サイト・アフィリエイトサイトなど、用途を問わず自由に設置していただけます。ウィジェット下部の「AI News Japan」クレジット表記のみ残してください。",
  },
  {
    q: "内容は自分で更新する必要がありますか？",
    a: "不要です。表示されるAI用語は日付にあわせて自動で切り替わるため、一度貼り付ければメンテナンスフリーで運用できます。",
  },
  {
    q: "どんな用語が表示されますか？",
    a: "LLM・プロンプトエンジニアリング・RAG・ハルシネーションなど、生成AIを理解するうえで重要な用語を24種類収録し、日替わりで表示します。",
  },
];

export default function WidgetPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
        >
          ← 記事一覧に戻る
        </Link>
      </div>

      {/* ヘッダー */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-7 text-white mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold bg-white/20 px-2 py-0.5 rounded">無料配布</span>
        </div>
        <h1 className="text-2xl font-extrabold mb-2">AI用語1日1語ウィジェット</h1>
        <p className="text-blue-100 text-sm leading-relaxed">
          生成AI・LLM関連の重要用語が毎日自動で切り替わる、貼るだけの無料パーツです。<br />
          コピペ1行で設置でき、更新の手間は一切かかりません。
        </p>
      </div>

      <div className="space-y-4">
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            「AI用語1日1語」は、LLM・プロンプトエンジニアリング・RAG・ハルシネーションなど、生成AIを理解するうえで重要な用語を毎日ひとつ紹介する埋め込みウィジェットです。ブログやホームページに<strong className="text-gray-900 dark:text-white">コピー＆ペースト1回</strong>で設置でき、会員登録もAPIキーも不要。一度貼り付ければ日付に応じて内容が自動更新されるため、メンテナンスの手間はかかりません。ITブログ・ビジネス系サイトのサイドバーや記事末尾に、読者への「豆知識コーナー」としてご活用いただけます。
          </p>
        </div>

        {/* プレビュー */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-base font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <span className="text-lg">👀</span> プレビュー
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">実際に表示されるウィジェットです（本日のAI用語が表示されます）。</p>
          <div className="flex justify-center">
            <iframe
              src="/widget/ai-term.html"
              width={320}
              height={220}
              style={{ border: 0, maxWidth: "100%" }}
              loading="lazy"
              title="AI用語1日1語ウィジェットのプレビュー"
            />
          </div>
        </div>

        {/* 設置方法 */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-base font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <span className="text-lg">🔧</span> 設置方法
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">
            下のコードをコピーして、ブログやサイトのHTMLに貼り付けるだけです。サイドバー・記事末尾・フッターなど、お好きな場所に設置できます。
          </p>
          <div className="bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
            <pre className="text-xs leading-relaxed text-blue-700 dark:text-blue-300 whitespace-pre-wrap break-all mb-4 font-mono">
              {EMBED_CODE}
            </pre>
            <WidgetCopyButton code={EMBED_CODE} />
          </div>
        </div>

        {/* 利用条件 */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-base font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <span className="text-lg">📋</span> ご利用条件
          </h2>
          <ul className="space-y-2">
            {[
              "個人ブログ・法人サイト・アフィリエイトサイトなど、商用・非商用を問わず無料でご利用いただけます。",
              "ウィジェット下部の「AI News Japan」クレジット表記は残したままご利用ください。",
              "サイズ（width / height）はお使いのデザインに合わせて調整していただいて構いません。",
              "過度なアクセスが集中した場合など、予告なく提供を停止する場合があります。",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                <span className="text-emerald-500 shrink-0 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-base font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="text-lg">❓</span> よくある質問
          </h2>
          <div className="space-y-4">
            {FAQS.map((item) => (
              <div key={item.q}>
                <p className="text-sm font-bold text-gray-900 dark:text-white mb-1">{item.q}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 text-center">
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            ウィジェットで紹介している用語をもっと詳しく学びたい方はこちら。
          </p>
          <Link
            href="/ai-beginner-guide"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-8 py-3 rounded-full transition-colors shadow-sm"
          >
            AI初心者完全ガイドを読む →
          </Link>
        </div>
      </div>

      {/* JSON-LD: WebApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "AI用語1日1語ウィジェット",
            applicationCategory: "EducationApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "0", priceCurrency: "JPY" },
            url: `${BASE_URL}/widget`,
            description: "生成AI・LLM関連の用語が毎日自動で切り替わる無料の埋め込みウィジェット。ブログやサイトにコピペ1行で設置できる。",
            publisher: { "@type": "Organization", name: "AI News Japan" },
            inLanguage: "ja",
          }),
        }}
      />
      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />
    </div>
  );
}
