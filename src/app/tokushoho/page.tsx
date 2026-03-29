import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | AI News Japan",
  description: "AI News Japan の特定商取引法に基づく表記ページです。",
};

const rows: { label: string; value: React.ReactNode }[] = [
  { label: "事業者名", value: "Kコンサルタント" },
  { label: "運営責任者", value: "瑞慶覧 達成（ズケラン タツナリ）" },
  { label: "所在地", value: "〒903-0815　沖縄県那覇市首里当蔵町１丁目１５番地" },
  { label: "電話番号", value: "080-8191-0100" },
  { label: "メールアドレス", value: "tz77772014@gmail.com" },
  { label: "お問い合わせ対応時間", value: "平日 10:00〜18:00（土日祝日を除く）" },
  {
    label: "販売価格",
    value: "各プランページに記載の金額（消費税込み）",
  },
  {
    label: "追加手数料",
    value: "商品代金以外に追加費用は発生しません。",
  },
  {
    label: "利用可能な決済手段",
    value: "クレジットカード（Visa・Mastercard・American Express・JCB）",
  },
  {
    label: "決済期間",
    value: "クレジットカード決済はただちに処理されます。",
  },
  {
    label: "サービス提供時期",
    value: "決済完了後、即時ご利用いただけます。",
  },
  {
    label: "返品・キャンセルポリシー",
    value: (
      <span>
        デジタルコンテンツの性質上、サービス提供開始後の返金・キャンセルは原則お受けできません。
        <br />
        ただし、サービスに重大な不具合があった場合は、
        <a
          href="mailto:tz77772014@gmail.com"
          className="text-blue-500 hover:underline"
        >
          tz77772014@gmail.com
        </a>{" "}
        までご連絡ください。内容を確認のうえ、個別に対応いたします。
      </span>
    ),
  },
];

export default function TokushohoPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
        >
          ← 記事一覧に戻る
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-8">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          特定商取引法に基づく表記
        </h1>

        <table className="w-full text-sm leading-relaxed">
          <tbody>
            {rows.map(({ label, value }) => (
              <tr
                key={label}
                className="border-t border-gray-100 dark:border-gray-800"
              >
                <th className="py-3 pr-4 text-left font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap align-top w-36">
                  {label}
                </th>
                <td className="py-3 text-gray-800 dark:text-gray-200">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
