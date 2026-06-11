import { ImageResponse } from "next/og";
import {
  getAllArticles,
  getArticleById as getMicroCMSArticleById,
  adaptMicroCMSArticle,
} from "@/lib/microcms";
import { allArticles as localArticles } from "@/lib/articles";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function fetchArticleTitle(id: string): Promise<{ title: string; tags: string[] }> {
  try {
    const remote = await getMicroCMSArticleById(id);
    const adapted = adaptMicroCMSArticle(remote);
    return { title: adapted.title, tags: adapted.tags };
  } catch {
    const local = localArticles.find((a) => a.id === id);
    return { title: local?.title ?? "AI News Japan", tags: local?.tags ?? [] };
  }
}

export default async function ArticleOGImage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { title, tags } = await fetchArticleTitle(id);

  const displayTitle = title.length > 52 ? title.slice(0, 52) + "…" : title;
  const tagLabel = tags.slice(0, 3).join(" · ");

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 60%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "56px 64px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* 背景グリッド */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.07) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* サイト名バッジ */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              background: "#2563eb",
              color: "#fff",
              fontWeight: 900,
              fontSize: 22,
              padding: "4px 14px",
              borderRadius: 8,
            }}
          >
            AI
          </div>
          <span style={{ color: "#94a3b8", fontSize: 22, fontWeight: 700 }}>
            News Japan
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(74,222,128,0.15)",
              border: "1px solid rgba(74,222,128,0.3)",
              borderRadius: 999,
              padding: "4px 14px",
              marginLeft: 12,
            }}
          >
            <div
              style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80" }}
            />
            <span style={{ color: "#4ade80", fontSize: 16, fontWeight: 700 }}>
              自動更新
            </span>
          </div>
        </div>

        {/* 記事タイトル */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              color: "#ffffff",
              fontSize: displayTitle.length > 30 ? 46 : 54,
              fontWeight: 900,
              lineHeight: 1.35,
              letterSpacing: "-0.01em",
              margin: 0,
              marginBottom: 28,
            }}
          >
            {displayTitle}
          </p>

          {tagLabel && (
            <p style={{ color: "#64748b", fontSize: 22, margin: 0 }}>
              {tagLabel}
            </p>
          )}
        </div>

        {/* フッター */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(99,102,241,0.25)",
            paddingTop: 24,
          }}
        >
          <span style={{ color: "#475569", fontSize: 18 }}>
            ai-news-site-wheat.vercel.app
          </span>
          <span style={{ color: "#6366f1", fontSize: 18, fontWeight: 700 }}>
            海外100媒体から自動収集 →
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
