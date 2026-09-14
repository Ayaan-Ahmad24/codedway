import Link from "next/link";

interface ArticleItem {
  slug: string;
  category: string;
  title: string;
  meta: string;
}

const ARTICLES: ArticleItem[] = [
  {
    slug: "cut-api-latency-redis",
    category: "Engineering",
    title: "How we cut API response time by 60% using Redis caching",
    meta: "Oct 24, 2025 · 6 min read",
  },
  {
    slug: "ai-integrations-b2b-saas-2025",
    category: "Artificial Intelligence",
    title: "AI integrations that actually make sense for B2B SaaS in 2025",
    meta: "Nov 12, 2025 · 8 min read",
  },
  {
    slug: "the-real-cost-of-technical-debt",
    category: "Architecture",
    title: "The honest cost of technical debt — and how to pay it down",
    meta: "Dec 03, 2025 · 5 min read",
  },
];

export function JournalPreviewSection() {
  return (
    <section id="journal" className="pt-32 pb-32 px-6 sm:px-12 max-w-[1560px] mx-auto">
      <div className="mb-16">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#666666] font-mono mb-4">
          004 / Journal
        </p>
        <h2 className="text-[40px] font-light tracking-tight text-[#F0EDE8]">
          From the build log.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ARTICLES.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="journal-card bg-[#141414] border border-[#222222] p-8 flex flex-col justify-between cursor-pointer block group"
          >
            <div>
              <div className="text-[11px] uppercase font-mono text-[#C8FF57] tracking-widest mb-4">
                {article.category}
              </div>
              <h3 className="text-[18px] font-bold text-[#F0EDE8] leading-snug line-clamp-2 mb-8 group-hover:text-[#F0EDE8] transition-colors">
                {article.title}
              </h3>
            </div>
            <div>
              <div className="text-[12px] text-[#666666] font-mono mb-6">{article.meta}</div>
              <span className="text-[13px] text-[#F0EDE8] group-hover:text-[#C8FF57] font-medium transition-colors">
                Read &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-14 text-center">
        <Link
          href="/blog"
          className="inline-block text-[14px] text-[#888888] hover:text-[#C8FF57] tracking-wide transition-colors"
        >
          View all journal entries &rarr;
        </Link>
      </div>
    </section>
  );
}
