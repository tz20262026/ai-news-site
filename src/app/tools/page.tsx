import type { Metadata } from "next";
import ToolsClient, { type Segment, type Tool } from "./ToolsClient";
import marketData from "@/data/ai_market_intelligence.json";

/**
 * src/data/ai_market_intelligence.json は毎日AI（Gemini）が自動生成・上書きするファイル。
 * トークン上限で出力が途中で切れるなどの理由で reason・tools が欠落することがあるため、
 * 描画前に防御的に正規化する（欠落フィールドはデフォルト値で補い、ビルドが壊れないようにする）。
 */
function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function normalizeTool(raw: unknown): Tool | null {
  if (!isRecord(raw)) return null;
  const { id, name, price, newFeature, rating, badge, summary } = raw;
  if (typeof id !== "string" || typeof name !== "string") return null;
  return {
    id,
    name,
    price: typeof price === "string" ? price : "",
    newFeature: typeof newFeature === "string" ? newFeature : "",
    rating: typeof rating === "number" ? rating : 0,
    badge: typeof badge === "string" ? badge : null,
    summary: typeof summary === "string" ? summary : "",
  };
}

function normalizeSegment(raw: unknown): Segment | null {
  if (!isRecord(raw)) return null;
  const { id, label, icon, winner, reason, tools } = raw;
  if (typeof id !== "string" || typeof label !== "string") return null;
  if (!isRecord(winner) || typeof winner.name !== "string") return null;
  return {
    id,
    label,
    icon: typeof icon === "string" ? icon : "sparkles",
    winner: {
      name: winner.name,
      tagline: typeof winner.tagline === "string" ? winner.tagline : "今月の最強選択",
    },
    reason: typeof reason === "string" ? reason : "",
    tools: Array.isArray(tools) ? tools.map(normalizeTool).filter((t): t is Tool => t !== null) : [],
  };
}

const normalizedSegments: Segment[] = Array.isArray(marketData.segments)
  ? marketData.segments.map(normalizeSegment).filter((s): s is Segment => s !== null)
  : [];

export const metadata: Metadata = {
  title: "AIツール比較・おすすめ一覧",
  description:
    "AIが自律的に精査したカテゴリー別ベストAIツール一覧。開発・事務効率化・クリエイティブ・推論の4分野で最適ツールを比較。",
  alternates: {
    canonical: "https://ai-news-site-wheat.vercel.app/tools",
  },
  openGraph: {
    title: "AIツール比較・おすすめ一覧 | AI News Japan",
    description:
      "AIが自律的に精査したカテゴリー別ベストAIツール一覧。開発・事務効率化・クリエイティブ・推論の4分野で最適ツールを比較。",
    type: "website",
    url: "https://ai-news-site-wheat.vercel.app/tools",
    images: [
      {
        url: "https://ai-news-site-wheat.vercel.app/opengraph-image",
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
    images: ["https://ai-news-site-wheat.vercel.app/opengraph-image"],
  },
};

export default function ToolsPage() {
  return (
    <ToolsClient
      segments={normalizedSegments}
      updatedAt={marketData.updatedAt}
    />
  );
}
