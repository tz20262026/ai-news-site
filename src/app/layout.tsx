import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI News Japan — 海外AIツール最新情報",
  description: "海外の最新AIツール・ニュースを日本語でお届けします",
  metadataBase: new URL("https://ai-news-site-wheat.vercel.app"),
  openGraph: {
    siteName: "AI News Japan",
    title: "AI News Japan — 海外AIツール最新情報",
    description: "海外の最新AIツール・ニュースを日本語でお届けします",
    type: "website",
    locale: "ja_JP",
    url: "https://ai-news-site-wheat.vercel.app",
    images: [
      {
        url: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80&fit=crop",
        width: 1200,
        height: 630,
        alt: "AI News Japan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI News Japan — 海外AIツール最新情報",
    description: "海外の最新AIツール・ニュースを日本語でお届けします",
    images: ["https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80&fit=crop"],
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased transition-colors">
        {/* ─── Google Analytics 4 ─────────────────────────── */}
        {GA_ID && GA_ID !== "G-XXXXXXXXXX" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

        <Header />
        <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
