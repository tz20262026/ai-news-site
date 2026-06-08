import type { Metadata } from "next";
import ToolsClient from "./ToolsClient";
import marketData from "@/data/ai_market_intelligence.json";

export const metadata: Metadata = {
  title: "AIツール比較・おすすめ一覧 | AI News Japan",
  description:
    "AIが自律的に精査したカテゴリー別ベストAIツール一覧。開発・事務効率化・クリエイティブ・推論の4分野で最適ツールを比較。",
  openGraph: {
    title: "AIツール比較・おすすめ一覧 | AI News Japan",
    description:
      "AIが自律的に精査したカテゴリー別ベストAIツール一覧。開発・事務効率化・クリエイティブ・推論の4分野で最適ツールを比較。",
    type: "website",
    url: "https://ai-news-site-wheat.vercel.app/tools",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIツール比較・おすすめ一覧 | AI News Japan",
    description:
      "AIが自律的に精査したカテゴリー別ベストAIツール一覧。開発・事務効率化・クリエイティブ・推論の4分野で最適ツールを比較。",
  },
};

export default function ToolsPage() {
  return (
    <ToolsClient
      segments={marketData.segments}
      updatedAt={marketData.updatedAt}
    />
  );
}
