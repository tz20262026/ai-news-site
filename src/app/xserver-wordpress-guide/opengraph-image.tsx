import { guideOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-guide";

export const runtime = "edge";
export const alt = "XServer for WordPress 完全ガイド2026";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OGImage() {
  return guideOgImage({
    title: "XServer for WordPress ガイド",
    subtitle: "AIブログ運用に最適なWordPress専用サーバーの選び方・料金・始め方",
    accent: "#22c55e",
    tags: ["WordPress", "レンタルサーバー", "AIブログ", "初心者"],
  });
}
