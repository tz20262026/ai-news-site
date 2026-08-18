// 楽天アフィリエイト「AI時代の持ち物・ガジェット収納」ウィジェット（2026-08-19新設）
// A8/もしも/VC/ATに次ぐ5つ目の収益源。既存の他ASPセクションのコードには一切触れないこと。
// 商品データは threads_auto/site/new_site_products.json の "ainews" キーを移植
// （アフィリエイトID: 55a43f8e.d3c105e6.55a43f8f.a9af72fc。楽天×Threads自動投稿で実収益が出ている同一IDを使い回す）
//
// 画像は next/image ではなく素の <img> タグを使用。
// 理由：VercelチームのImage Optimizationが無料枠上限に達しており、next/image経由だと本番で402になり画像が表示されないため
// （beauty-tech-japan/otsumamiの既存ウィジェットと同じ回避策）。楽天CDN側で既に300x300にリサイズ済み。

/** 商品カード1件分のデータ型 */
type RakutenProduct = {
  /** 商品名（楽天の元データ。長い・セール文言入りのため表示側でtruncateする） */
  name: string;
  /** 商品画像URL（楽天CDN） */
  img: string;
  /** 楽天アフィリエイトのトラッキングリンク */
  link: string;
};

/** セクションのProps型（現状は追加クラスのみ受け付ける） */
type RakutenAiNewsPicksProps = {
  className?: string;
};

const products: RakutenProduct[] = [
  {
    name: "＼全品最大24%OFF!早い者勝ち／ ガジェットポーチ ガジェットケース トラベルポーチ 小物ポーチ 旅行ポーチ 収納ポーチ パスポート 収納 カメラ周辺収納",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/lumeland/cabinet/bag/bag_104/bag-1040_00.jpg?_ex=300x300",
    link: "https://hb.afl.rakuten.co.jp/hgc/55a43f8e.d3c105e6.55a43f8f.a9af72fc/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Flumeland%2Fse-bag-1040%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Flumeland%2Fse-bag-1040%2F&link_type=picttext",
  },
  {
    name: "【まっぷる掲載・CA監修】 圧縮 トラベルポーチ EXCITECH エキサイテック 圧縮ポーチ 旅行用圧縮袋 出張 吸引機 衣類収納 電動ポンプ付き",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/excitech/cabinet/excitech/compresspouch/compresspouch_th01.jpg?_ex=300x300",
    link: "https://hb.afl.rakuten.co.jp/hgc/55a43f8e.d3c105e6.55a43f8f.a9af72fc/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fexcitech%2Fexci-compbag-001%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fexcitech%2Fexci-compbag-001%2F&link_type=picttext",
  },
  {
    name: "＼見逃し厳禁★DEAL30%P還元／ ミニ ガジェット ポーチ トラベルポーチ 多機能 ガジェットポーチ 持ち運び 小さい 充電器 モバイルバッテリー",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/futurebox/cabinet/bag/bag_104/bag-1040_00.jpg?_ex=300x300",
    link: "https://hb.afl.rakuten.co.jp/hgc/55a43f8e.d3c105e6.55a43f8f.a9af72fc/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ffuturebox%2Ffb-bag-1040%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Ffuturebox%2Ffb-bag-1040%2F&link_type=picttext",
  },
  {
    name: "【まっぷる掲載・現役CA監修】 トラベルポーチ YKK 圧縮ポーチ EXCITECH エキサイテック 旅行用圧縮袋 撥水 国内品質試験実施済",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/excitech/cabinet/excitech/travelpouch/travelpouch_th_003.jpg?_ex=300x300",
    link: "https://hb.afl.rakuten.co.jp/hgc/55a43f8e.d3c105e6.55a43f8f.a9af72fc/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fexcitech%2Fexci-pouch-001%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fexcitech%2Fexci-pouch-001%2F&link_type=picttext",
  },
  {
    name: "[注目度UP]20%DEAL売り尽くしセール ガジェットポーチ 大容量 充電器 おしゃれ 小物ポーチ コンパクト ケーブル PC周辺収納",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/goodlifestyle/cabinet/col/gds/010/gds-0094-s-gry.jpg?_ex=300x300",
    link: "https://hb.afl.rakuten.co.jp/hgc/55a43f8e.d3c105e6.55a43f8f.a9af72fc/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fgoodlifestyle%2Fts-gds-0094%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fgoodlifestyle%2Fts-gds-0094%2F&link_type=picttext",
  },
  {
    name: "【お得チャンス★MAX21%OFF】 収納ポーチ トラベルポーチ 旅行ポーチ ガジェットケース 小物ポーチ スマホ ハード アクセサリーケース",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/luluhope/cabinet/bag/bag_103/bag-1039_00.jpg?_ex=300x300",
    link: "https://hb.afl.rakuten.co.jp/hgc/55a43f8e.d3c105e6.55a43f8f.a9af72fc/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fluluhope%2Fgs-bag-1039%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fluluhope%2Fgs-bag-1039%2F&link_type=picttext",
  },
  {
    name: "【限定数量★最大30%クーポン】 ガジェットポーチ ガジェットケース トラベルポーチ 小物ポーチ シンプル ケーブル収納",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/creamchic/cabinet/bag/bag_104/bag-1040_00.jpg?_ex=300x300",
    link: "https://hb.afl.rakuten.co.jp/hgc/55a43f8e.d3c105e6.55a43f8f.a9af72fc/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fcreamchic%2Fgs-bag-1040%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fcreamchic%2Fgs-bag-1040%2F&link_type=picttext",
  },
  {
    name: "全店限定価格◎【MAX26%OFF】【楽天1位】 トラベルポーチ ガジェットポーチ 多機能 充電器 モバイルバッテリー ケーブル バッグイン",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/bestselectmart/cabinet/bag/bag_104/bag-1040_00.jpg?_ex=300x300",
    link: "https://hb.afl.rakuten.co.jp/hgc/55a43f8e.d3c105e6.55a43f8f.a9af72fc/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbestselectmart%2Fse-bag-1040%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fbestselectmart%2Fse-bag-1040%2F&link_type=picttext",
  },
  {
    name: "【最大22%クーポン♪超目玉】 ガジェットポーチ コンパクト PC周辺小物 収納ケース 大容量 トラベルポーチ モバイルバッテリー 充電器",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/goodcarsstyle/cabinet/col/gds/010/gds-0094-s-gry.jpg?_ex=300x300",
    link: "https://hb.afl.rakuten.co.jp/hgc/55a43f8e.d3c105e6.55a43f8f.a9af72fc/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fgoodcarsstyle%2Fts-gds-0094%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fgoodcarsstyle%2Fts-gds-0094%2F&link_type=picttext",
  },
  {
    name: "【8/26迄限定★20%OFFキャンペーン】 ガジェットポーチ ガジェットケース トラベルポーチ 小物入れ USB 便利グッズ",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/ra-vega/cabinet/bag/bag_104/bag-1040_00.jpg?_ex=300x300",
    link: "https://hb.afl.rakuten.co.jp/hgc/55a43f8e.d3c105e6.55a43f8f.a9af72fc/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fra-vega%2Fse-bag-1040%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fra-vega%2Fse-bag-1040%2F&link_type=picttext",
  },
];

export default function RakutenAiNewsPicks({ className = "" }: RakutenAiNewsPicksProps) {
  return (
    <section className={`py-14 bg-gradient-to-b from-indigo-50/50 to-white ${className}`}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <span className="inline-block text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-4 py-1.5 rounded-full mb-3 border border-indigo-100">
            [PR] 楽天市場の商品を紹介しています
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
            楽天market｜AI時代の持ち物・ガジェット収納
          </h2>
          <p className="text-gray-700 text-sm">
            ノートPC・モバイルバッテリー・ケーブル類をスマートにまとめる、楽天市場の人気ガジェットポーチを厳選
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <a
              key={product.link}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="group flex flex-col rounded-2xl border border-indigo-100 bg-white overflow-hidden hover:shadow-lg hover:border-indigo-200 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="relative w-full aspect-square bg-gray-50 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.img}
                  alt={product.name}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col flex-1 p-3">
                <p className="text-xs sm:text-sm font-bold text-gray-900 leading-snug line-clamp-2 flex-1">
                  {product.name}
                </p>
                <span className="inline-flex items-center justify-center w-full min-h-[40px] text-xs font-bold mt-3 py-2 px-3 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 group-hover:bg-indigo-100 transition-colors">
                  楽天市場で見る »
                </span>
              </div>
            </a>
          ))}
        </div>
        <p className="text-center text-xs text-gray-600 mt-6">
          ※ 本セクションは広告（楽天アフィリエイト）を含みます。価格・在庫は変動するためリンク先の最新情報をご確認ください
        </p>
      </div>
    </section>
  );
}
