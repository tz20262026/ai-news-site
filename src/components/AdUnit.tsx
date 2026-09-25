"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function AdUnit({ slot }: { slot: string }) {
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
  const insRef = useRef<HTMLModElement>(null);

  // 親要素が `hidden lg:flex` 等でCSS非表示（幅0）の状態でpush()すると
  // AdSense側が "No slot size for availableWidth=0" で失敗し、その広告枠が二度と読み込まれない。
  // ResizeObserverで実際に幅を持つまで待ってからpushする（レスポンシブでサイドバーが後から出現するケースに対応）。
  useEffect(() => {
    if (!clientId || !insRef.current) return;
    const el = insRef.current;
    let pushed = false;

    const tryPush = () => {
      if (pushed || el.offsetWidth === 0) return;
      pushed = true;
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch {
        // AdSense初期化エラーを無視
      }
    };

    tryPush();
    const observer = new ResizeObserver(tryPush);
    observer.observe(el);
    return () => observer.disconnect();
  }, [clientId]);

  if (!clientId) {
    return (
      <div className="rounded-xl border border-dashed border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 flex items-center justify-center h-20 text-xs text-gray-300 dark:text-gray-300">
        広告スペース
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      <ins
        ref={insRef}
        className="adsbygoogle block"
        data-ad-client={clientId}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
