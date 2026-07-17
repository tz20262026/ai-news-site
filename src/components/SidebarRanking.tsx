import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/lib/articles";
import { getArticleImageUrl } from "@/lib/articles";

export default function SidebarRanking({ articles }: { articles: Article[] }) {
  const top5 = articles.slice(0, 5);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-4">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-sm font-bold text-gray-900 dark:text-white">🔥 注目記事</span>
        <span className="text-xs text-gray-500 dark:text-gray-300 ml-auto">最新5件</span>
      </div>
      <ol className="flex flex-col gap-3">
        {top5.map((a, i) => (
          <li key={a.id}>
            <Link
              href={`/articles/${a.id}`}
              className="flex items-start gap-2.5 group"
            >
              <span className={`text-[11px] font-black w-5 h-5 flex items-center justify-center rounded-full shrink-0 mt-0.5 ${
                i === 0 ? "bg-yellow-400 text-yellow-900" :
                i === 1 ? "bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200" :
                i === 2 ? "bg-orange-300 text-orange-900" :
                "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-300"
              }`}>{i + 1}</span>
              <div className="flex gap-2 flex-1 min-w-0 overflow-hidden">
                <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src={getArticleImageUrl(a)}
                    alt={a.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="48px"
                  />
                </div>
                <p className="text-xs text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-3 leading-snug transition-colors self-start">
                  {a.title}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
