import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        // microCMS のアイキャッチ画像
        protocol: "https",
        hostname: "images.microcms-assets.io",
      },
      {
        // GCS（Imagen 3 生成画像）
        protocol: "https",
        hostname: "storage.googleapis.com",
      },
    ],
  },
};

export default nextConfig;
