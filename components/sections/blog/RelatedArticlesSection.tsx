import Link from "next/link";
import type { BlogPostFrontmatter } from "@/lib/mdx";

interface RelatedArticlesSectionProps {
  articles: BlogPostFrontmatter[];
}

export function RelatedArticlesSection({ articles }: RelatedArticlesSectionProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="w-full max-w-[1080px] mx-auto px-6 sm:px-8 pt-12 pb-24 border-t border-[#201f1f]">
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="text-2xl sm:text-3xl font-light text-[#F0EDE8] tracking-tight font-sans">
          Keep reading
        </h2>
        <Link
          className="font-mono text-[11px] text-[#bef44d] hover:text-[#F0EDE8] transition-colors uppercase tracking-widest"
          href="/blog"
        >
          VIEW_ALL_ARTICLES &rarr;
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.slice(0, 3).map((article, idx) => (
          <article
            key={article.slug}
            className="group bg-[#1c1b1b] border border-[#201f1f] p-6 flex flex-col justify-between hover:border-[#bef44d] transition-all block"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] text-[#bef44d] font-semibold uppercase tracking-wider">
                  {article.category}
                </span>
                <span className="font-mono text-[11px] text-[#8d937c]">
                  #{String(idx + 1).padStart(3, "0")}
                </span>
              </div>
              <h3 className="text-base font-medium text-[#F0EDE8] group-hover:text-[#bef44d] transition-colors mb-3 leading-snug font-sans">
                <Link href={`/blog/${article.slug}`}>
                  {article.title}
                </Link>
              </h3>
              <p className="text-[13px] text-[#c9c6c1] leading-relaxed mb-6 line-clamp-2 font-normal">
                {article.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-[#201f1f] flex items-center justify-between font-mono text-[11px]">
              <span className="text-[#8d937c]">
                {article.authorInitials || "CW"} &middot; {article.author.split(" ")[0]} &middot;{" "}
                {article.readTime || "6 min"}
              </span>
              <Link
                href={`/blog/${article.slug}`}
                className="text-[#bef44d] group-hover:translate-x-1 transition-transform inline-flex items-center"
              >
                Read &rarr;
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
