# AI News Japan

## 基本情報
- URL: https://ai-news-site-wheat.vercel.app
- フレームワーク: Next.js (App Router)
- 実流入あり(オーガニック流入が実際にある数少ないサイトの一つ)
- デプロイ: `git push` → `npx vercel --prod --yes`

## SEO監査履歴(2026-08-18)
- スコア: 58→80/100
- 🔴修正: `/about` `/partners` `/privacy` `/rss` `/tags` `/tokushoho` `/tools` の7ページでcanonical未設定(ルートlayoutのトップページURLを継承していた)
- 🟠修正: sitemapから`/rss`が漏れていた(過去2回同じ漏れが発生した再発パターン、注意)
- 🟠修正: ホームページHTMLが2.2MB→664KB(70%削減)。451記事の本文全文を一覧表示用に丸ごと渡していたのが原因。読了時間は事前計算し`body`は空にして渡す方式に変更

## 既知の注意点
- 画像生成モデルは`gemini-3.1-flash-image`系を使う想定だが、記事生成スクリプト(`scripts/post_one_article.py`)の`IMAGE_MODEL`はまだ旧世代の`imagen-3.0-generate-001`。今のところ動いているが、Google側の仕様変更で急に壊れる可能性あり([[fact_gemini_imagen_quota]]参照、note_autoの同種バグ事例あり)
- 未着手の宿題: セキュリティヘッダー未設定、`/tags`ページのHTML容量527KB、JSON-LDの`dateModified`が常に`datePublished`と同値
