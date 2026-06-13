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
    images: [
      {
        url: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80&fit=crop",
        width: 1200,
        height: 630,
        alt: "AIツール比較・おすすめ一覧",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIツール比較・おすすめ一覧 | AI News Japan",
    description:
      "AIが自律的に精査したカテゴリー別ベストAIツール一覧。開発・事務効率化・クリエイティブ・推論の4分野で最適ツールを比較。",
    images: ["https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80&fit=crop"],
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
