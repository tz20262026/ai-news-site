import { guideOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-guide";

export const runtime = "edge";
export const alt = "Saily eSIMの使い方【AI旅行・海外出張の通信を1つにまとめる実践ガイド2026】";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OGImage() {
  return guideOgImage({
    title: "Saily eSIM で海外の通信を1つに",
    subtitle: "AI旅行・海外出張の通信手段をアプリだけで完結させる実践ガイド",
    accent: "#a78bfa",
    tags: ["Saily", "eSIM", "海外旅行", "海外出張"],
  });
}
