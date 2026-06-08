<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="ja">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>RSS フィード — AI News Japan</title>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; background: #0f172a; color: #e2e8f0; min-height: 100vh; }
          .header { background: linear-gradient(135deg, #2563eb, #4f46e5); padding: 24px 20px; }
          .header-inner { max-width: 640px; margin: 0 auto; }
          .badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.15); border-radius: 999px; padding: 4px 12px; font-size: 12px; color: #bfdbfe; margin-bottom: 12px; }
          .dot { width: 8px; height: 8px; background: #4ade80; border-radius: 50%; display: inline-block; }
          h1 { font-size: 22px; font-weight: 700; color: #fff; }
          .subtitle { font-size: 13px; color: #bfdbfe; margin-top: 4px; }
          .info { background: #1e293b; border: 1px solid #334155; border-radius: 12px; padding: 14px 16px; max-width: 640px; margin: 20px auto; font-size: 13px; color: #94a3b8; line-height: 1.6; }
          .info strong { color: #e2e8f0; }
          .items { max-width: 640px; margin: 0 auto 40px; padding: 0 20px; }
          .item { background: #1e293b; border: 1px solid #334155; border-radius: 12px; padding: 16px; margin-bottom: 12px; }
          .item-title { font-size: 15px; font-weight: 600; color: #e2e8f0; margin-bottom: 6px; line-height: 1.4; }
          .item-desc { font-size: 13px; color: #94a3b8; line-height: 1.5; margin-bottom: 10px; }
          .item-meta { display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap; }
          .item-date { font-size: 11px; color: #64748b; }
          .item-link { font-size: 12px; color: #60a5fa; text-decoration: none; }
          .item-link:hover { text-decoration: underline; }
          .section-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #475569; margin: 24px 0 12px; padding: 0 20px; }
          @media (min-width: 640px) { .header { padding: 32px 20px; } .header-inner, .items, .info { padding-left: 0; padding-right: 0; max-width: 640px; } }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="header-inner">
            <div class="badge"><span class="dot"/>RSSフィード</div>
            <h1>AI News Japan</h1>
            <p class="subtitle">海外AIツール・最新ニュースを日本語で毎日お届け</p>
          </div>
        </div>

        <div style="max-width:640px;margin:0 auto;padding:0 20px;">
          <div class="info" style="margin-top:20px;">
            <strong>このページについて</strong><br/>
            RSSフィードを購読するには、<strong>Feedly</strong>・<strong>Inoreader</strong> などのRSSリーダーアプリにこのページのURLを登録してください。新着記事が自動で届きます。
          </div>
        </div>

        <p class="section-label">最新記事</p>

        <div class="items">
          <xsl:for-each select="rss/channel/item">
            <div class="item">
              <div class="item-title"><xsl:value-of select="title"/></div>
              <div class="item-desc"><xsl:value-of select="description"/></div>
              <div class="item-meta">
                <span class="item-date"><xsl:value-of select="pubDate"/></span>
                <a class="item-link">
                  <xsl:attribute name="href"><xsl:value-of select="link"/></xsl:attribute>
                  記事を読む →
                </a>
              </div>
            </div>
          </xsl:for-each>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
