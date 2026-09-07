import { guideOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-guide";

export const runtime = "edge";
export const alt = "公共Wi-FiでAIツールを安全に使うNordVPN活用ガイド2026";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OGImage() {
  return guideOgImage({
    title: "公共Wi-Fi × AIツールを安全に使う",
    subtitle: "カフェ・空港・ホテルのWi-FiでChatGPT等を使うときのNordVPN活用法",
    accent: "#38bdf8",
    tags: ["NordVPN", "公共Wi-Fi", "セキュリティ", "AIツール"],
  });
}
