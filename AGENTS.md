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
- **画像生成モデル(2026-08-30 修正済み)**: Googleが`imagen-3.0-generate-001`を8月中旬に廃止(404 NOT_FOUND)。8/20以降の全記事がpicsum.photosの仮画像に無言フォールバックして「画像が同じ」状態になっていた。`scripts/post_one_article.py`は`IMAGE_MODELS`(`imagen-4.0-fast-generate-001`→`imagen-4.0-generate-001`→`imagen-3.0-generate-002`の順で自動リトライ)に変更済み。**次のワークフロー実行(翌JST 10:00頃)で本物のAI画像が復活しているかログで必ず確認すること**(`gh run view <id> --log | grep -i "画像生成: 成功"`)。3モデルとも404なら現行のVertex Imagenモデル名をcontext7かGCPドキュメントで再確認して差し替える
- 画像フォールバックはpicsum.photos廃止 → `scripts/image_utils.py`の`_FALLBACK_POOL`(実在確認済みUnsplash 31枚)+記事IDハッシュ分散。`src/lib/articles.ts`の`FALLBACK_IMAGE_POOL`と同一内容を保つこと。picsum URLはgetArticleImageUrl側で無視してプールに寄せる実装
- 未着手の宿題: `/tags`ページのHTML容量527KB
