"""
記事のタグとIDからUnsplash画像URLを確定的に選択するユーティリティ。
imageUrlが空のとき（Imagen 3失敗時・sync_ai_market等）に使う。
"""

CATEGORY_IMAGES: dict[str, str] = {
    # 企業・ブランド
    "OpenAI":           "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80&fit=crop",
    "Anthropic":        "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&fit=crop",
    "Google":           "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&q=80&fit=crop",
    "Meta":             "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80&fit=crop",
    "Microsoft":        "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=800&q=80&fit=crop",
    "Apple":            "https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=800&q=80&fit=crop",
    "Samsung":          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80&fit=crop",
    "Tesla":            "https://images.unsplash.com/photo-1561580125-028ee3bd62eb?w=800&q=80&fit=crop",
    "Adobe":            "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80&fit=crop",
    "Nvidia":           "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&fit=crop",
    "Amazon":           "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&q=80&fit=crop",
    # コンテンツ種別（日本語）
    "画像生成":         "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80&fit=crop",
    "動画生成":         "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80&fit=crop",
    "動画編集":         "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80&fit=crop",
    "音声AI":           "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80&fit=crop",
    "LLM":              "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80&fit=crop",
    "生産性":           "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fit=crop",
    "オープンソース":   "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80&fit=crop",
    "開発ツール":       "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80&fit=crop",
    "コーディング":     "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80&fit=crop",
    "クリエイティブ":   "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&fit=crop",
    "デザイン":         "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80&fit=crop",
    "ロボット":         "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80&fit=crop",
    "自動運転":         "https://images.unsplash.com/photo-1549317661-bd32c8ce0729?w=800&q=80&fit=crop",
    "会議AI":           "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80&fit=crop",
    "マーケティング":   "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fit=crop",
    "語学学習":         "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80&fit=crop",
    "メンタルヘルス":   "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80&fit=crop",
    "SNS":              "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80&fit=crop",
    "プレゼン":         "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&q=80&fit=crop",
    "エンタープライズ": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&fit=crop",
    "翻訳":             "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80&fit=crop",
    "多言語":           "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80&fit=crop",
    "ビジネス":         "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&fit=crop",
    "文章AI":           "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80&fit=crop",
    "AI":               "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&fit=crop",
    # 英語タグ対応
    "Artificial Intelligence": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80&fit=crop",
    "artificial intelligence":  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80&fit=crop",
    "Agentic AI":    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80&fit=crop",
    "Startups":      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80&fit=crop",
    "Apps":          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80&fit=crop",
    "App":           "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80&fit=crop",
    "Business":      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&fit=crop",
    "Security":      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80&fit=crop",
    "Finance AI":    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fit=crop",
    "Policy":        "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&q=80&fit=crop",
    "Video Games":   "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80&fit=crop",
    "Applications":  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80&fit=crop",
    "AI Infrastructure": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&fit=crop",
    "Government & Policy": "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&q=80&fit=crop",
    "Robotics":      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80&fit=crop",
    "Healthcare":    "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80&fit=crop",
    "Education":     "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80&fit=crop",
    "Voice":         "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80&fit=crop",
    "Audio":         "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80&fit=crop",
    "Design":        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80&fit=crop",
    "Marketing":     "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fit=crop",
    "Developer Tools": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80&fit=crop",
    "Open Source":   "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80&fit=crop",
    "Productivity":  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fit=crop",
    "Coding":        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80&fit=crop",
    "Writing":       "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80&fit=crop",
    "Social Media":  "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80&fit=crop",
    "Autonomous":    "https://images.unsplash.com/photo-1549317661-bd32c8ce0729?w=800&q=80&fit=crop",
    "Finance":       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fit=crop",
    "Legal":         "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&fit=crop",
    "Translation":   "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80&fit=crop",
    "Image Generation": "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80&fit=crop",
    "Video":         "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80&fit=crop",
    "Enterprise":    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&fit=crop",
}

# Imagen 生成が失敗したときに使う、実在確認済み（2026-08-30時点で全URL 200）の
# テック/AI系フォトプール。picsum.photos は毎回無関係な写真が出て「同じに見える」
# 苦情の原因になったため廃止。記事IDのハッシュで分散させ重複を最小化する。
_FALLBACK_POOL: list[str] = sorted({
    v for v in CATEGORY_IMAGES.values()
    # 404 になった1枚を除外
    if "photo-1549317661-bd32c8ce0729" not in v
})


def pick_image(article_id: str, tags: list[str]) -> str:
    """記事ID（なければタグ）のハッシュで、確定的にフォトプールから1枚選ぶ。"""
    # タグがプールの特定カテゴリに一致すればそれを優先しつつ、
    # 同じタグの記事同士が被らないよう記事IDのハッシュでずらす。
    seed = article_id or "".join(tags) or "ainews"
    h = 0
    for ch in seed:
        h = (h * 31 + ord(ch)) & 0xFFFFFFFF

    base = 0
    for t in tags:
        if t in CATEGORY_IMAGES and CATEGORY_IMAGES[t] in _FALLBACK_POOL:
            base = _FALLBACK_POOL.index(CATEGORY_IMAGES[t])
            break

    idx = (base + h) % len(_FALLBACK_POOL)
    return _FALLBACK_POOL[idx]
