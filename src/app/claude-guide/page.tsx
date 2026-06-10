import type { Metadata } from "next";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";

export const metadata: Metadata = {
  title: "Claude（クロード）完全ガイド2026年版【使い方・ChatGPTとの違い・無料プランで使える機能】",
  description:
    "Claude（クロード）の使い方を2026年版で完全解説。ChatGPTとの違い・無料プランの制限・Claude 3.5/4の機能・ビジネス活用・コーディング・文章生成を徹底ガイド。",
  openGraph: {
    title: "Claude完全ガイド2026年版【使い方・ChatGPTとの違い】",
    description: "Claude（クロード）の使い方・機能・ChatGPTとの比較を徹底解説。無料プランで使える全機能ガイド。",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude完全ガイド2026年版",
    description: "Claude（クロード）の使い方・ChatGPTとの違いを完全解説。",
  },
};

interface Feature {
  title: string;
  icon: string;
  description: string;
  example: string;
}

interface Comparison {
  aspect: string;
  claude: string;
  chatgpt: string;
  winner: "claude" | "chatgpt" | "tie";
}

interface FaqItem {
  q: string;
  a: string;
}

const FEATURES: Feature[] = [
  {
    title: "長文・複雑な文書処理",
    icon: "📄",
    description: "最大200,000トークン（約15万文字）のコンテキストウィンドウ。長い書類・論文・コードベース全体をまとめて分析可能。",
    example: "「この100ページのPDFを要約して」「このソースコード全体のバグを見つけて」",
  },
  {
    title: "高度なコーディング支援",
    icon: "💻",
    description: "複雑なコードの生成・デバッグ・リファクタリングが得意。Claude Codeというコーディング専用CLIツールも存在する。",
    example: "「このPythonコードをTypeScriptに変換して」「このバグの原因を特定して修正して」",
  },
  {
    title: "自然で人間らしい文章生成",
    icon: "✍️",
    description: "ブログ記事・メール・レポート・小説など幅広い文章生成が得意。AIらしい不自然な言い回しが少ない。",
    example: "「このメールを丁寧なビジネス文体に書き直して」「SEO記事の構成を作って」",
  },
  {
    title: "画像・ドキュメント分析",
    icon: "🖼️",
    description: "画像・PDF・Wordファイルをアップロードして内容を分析・要約・質問に回答。マルチモーダル対応。",
    example: "「このグラフのデータを表にまとめて」「この図面の問題点を指摘して」",
  },
  {
    title: "安全性・倫理的な回答",
    icon: "🛡️",
    description: "Anthropicの安全性研究に基づいた設計。有害なコンテンツ生成に対して慎重な判断を行う。",
    example: "「法的リスクを考慮した上でのアドバイスが欲しい」「倫理的な観点からの意見も聞きたい」",
  },
];

const COMPARISONS: Comparison[] = [
  {
    aspect: "コンテキストウィンドウ",
    claude: "最大200,000トークン（約15万文字）",
    chatgpt: "最大128,000トークン（GPT-4o）",
    winner: "claude",
  },
  {
    aspect: "日本語の自然さ",
    claude: "非常に自然。文脈を理解した回答が得意",
    chatgpt: "自然だが長文では時々不自然な表現",
    winner: "tie",
  },
  {
    aspect: "コーディング能力",
    claude: "複雑なコードの生成・デバッグに強い",
    chatgpt: "幅広い言語に対応、プラグインで拡張可能",
    winner: "tie",
  },
  {
    aspect: "画像生成",
    claude: "非対応（画像分析は可能）",
    chatgpt: "DALL-E 3で高品質な画像生成が可能",
    winner: "chatgpt",
  },
  {
    aspect: "ウェブ検索",
    claude: "Claude.aiのProプランで利用可能",
    chatgpt: "ChatGPT PlusでBing検索対応",
    winner: "tie",
  },
  {
    aspect: "無料プランの制限",
    claude: "1日あたりのメッセージ数に制限あり",
    chatgpt: "GPT-3.5は無制限、GPT-4oは制限あり",
    winner: "chatgpt",
  },
  {
    aspect: "API・開発者向け",
    claude: "Anthropic APIで利用可能。SDK充実",
    chatgpt: "OpenAI APIで利用可能。エコシステムが豊富",
    winner: "chatgpt",
  },
  {
    aspect: "安全性・倫理",
    claude: "Constitutional AIで安全性を重視した設計",
    chatgpt: "RLHF・安全性フィルターを実装",
    winner: "tie",
  },
];

const FAQS: FaqItem[] = [
  {
    q: "ClaudeとChatGPTどちらを使うべきですか？",
    a: "用途によります。長文処理・詳細な分析・安全性を重視するならClaude、画像生成・プラグイン・ウェブ検索・豊富なエコシステムを求めるならChatGPTが向いています。両方の無料プランを試して、自分の用途に合った方を選ぶことをおすすめします。多くのヘビーユーザーは両方を使い分けています。",
  },
  {
    q: "Claudeは日本語に対応していますか？",
    a: "はい、日本語に完全対応しています。日本語での質問・回答・文章生成・翻訳・コード生成などすべての機能を日本語で利用できます。Claude 3.5以降では日本語の自然さが大きく向上しており、自然な日本語での会話・文書作成が可能です。",
  },
  {
    q: "Claude無料プランでできることは何ですか？",
    a: "Claude.ai の無料プランでは、1日あたりのメッセージ数に制限がありますが、テキスト生成・コーディング支援・文章校正・翻訳・要約・画像分析・PDF分析などの基本機能を利用できます。制限をなくしてより多くのメッセージを送りたい場合はPlan（月20ドル）への移行が必要です。",
  },
  {
    q: "ClaudeはコーディングでChatGPTより優れていますか？",
    a: "一般的にClaudeはコードの理解・生成・デバッグの精度が高く、特に長いコードベースの分析や複雑なリファクタリングが得意です。「Claude Code」というコーディング専用のCLIツールも存在します。ただしChatGPTもコーディングに優れており、どちらが「優れているか」は具体的な課題によります。",
  },
  {
    q: "Claude APIを使ったアプリ開発は難しいですか？",
    a: "基本的な利用なら比較的簡単です。Anthropic公式のPython・TypeScript SDKが提供されており、数行のコードでAPIを呼び出せます。APIキーはAnthropicのコンソールから取得でき、従量課金制（トークン数ベース）です。詳しい実装方法はAnthropicの公式ドキュメントに日本語リソースもあります。",
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

export default function ClaudeGuidePage() {
  return (
    <main className="bg-gray-950 min-h-screen text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 py-12">

        {/* ヒーロー */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded-full px-4 py-1 mb-4">
            🤖 2026年最新版
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            Claude（クロード）<br />
            <span className="text-orange-400">完全ガイド2026年版</span>
            <br />
            <span className="text-xl text-gray-300 font-bold">【使い方・ChatGPTとの違い・無料機能】</span>
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Anthropicが開発するAI「Claude（クロード）」の使い方・特徴・<br />
            ChatGPTとの違いを2026年版で完全解説します。
          </p>
        </div>

        {/* 主要機能 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-orange-500 pl-3">
            🚀 Claude の主要機能・得意なこと
          </h2>
          <div className="space-y-4">
            {FEATURES.map((f, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{f.icon}</span>
                  <h3 className="text-white font-black text-base">{f.title}</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-2">{f.description}</p>
                <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg px-3 py-2">
                  <span className="text-orange-400 text-xs font-bold">💡 活用例: </span>
                  <span className="text-gray-300 text-xs">{f.example}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Claude vs ChatGPT 比較表 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-orange-500 pl-3">
            ⚔️ Claude vs ChatGPT 徹底比較
          </h2>
          <div className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-800 text-xs font-bold text-gray-300 p-3">
              <div>比較項目</div>
              <div className="text-orange-400">🤖 Claude</div>
              <div className="text-green-400">💬 ChatGPT</div>
            </div>
            {COMPARISONS.map((c, i) => (
              <div key={i} className={`grid grid-cols-3 p-3 text-xs border-t border-gray-700/50 ${i % 2 === 0 ? "bg-gray-900" : "bg-gray-800/30"}`}>
                <div className="text-gray-400 font-bold pr-2">{c.aspect}</div>
                <div className={`pr-2 ${c.winner === "claude" ? "text-orange-300 font-bold" : "text-gray-400"}`}>
                  {c.winner === "claude" && <span className="text-orange-400">✓ </span>}
                  {c.claude}
                </div>
                <div className={`${c.winner === "chatgpt" ? "text-green-300 font-bold" : "text-gray-400"}`}>
                  {c.winner === "chatgpt" && <span className="text-green-400">✓ </span>}
                  {c.chatgpt}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 bg-gradient-to-r from-orange-900/20 to-cyan-900/20 border border-orange-500/30 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            📚 ChatGPTの使い方も学ぼう
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            ClaudeとChatGPTを使い分けることで生産性が大幅に向上します。<br />
            ChatGPTの全機能ガイドはこちら。
          </p>
          <a
            href="/chatgpt-guide"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            ChatGPT完全ガイドを読む →
          </a>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-orange-500 pl-3">
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

        {/* アフィリエイト */}
        <AffiliateSectionAiNews />
      </div>
    </main>
  );
}
