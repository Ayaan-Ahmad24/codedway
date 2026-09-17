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

import { Reveal } from "@/components/ui/Reveal";

export function JournalPreviewSection() {
  return (
    <section id="blog" className="pt-32 pb-32 px-6 sm:px-12 max-w-[1560px] mx-auto">
      <Reveal direction="up">
        <div className="mb-16">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#666666] font-mono mb-4">
            004 / Blog
          </p>
          <h2 className="text-[40px] sm:text-[48px] font-light tracking-tight text-[#F0EDE8]">
            From the engineering desk.
          </h2>
          <p className="text-[16px] text-[#888888] mt-3 font-normal">
            Real architectural retrospectives, benchmark analyses, and production learnings.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ARTICLES.map((article, idx) => (
          <Reveal key={article.slug} delay={idx * 120} direction="up" scale>
            <Link
              href={`/blog/${article.slug}`}
              className="journal-card bg-[#141414] border border-[#222222] p-8 flex flex-col justify-between cursor-pointer block group h-full glow-on-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] uppercase font-mono text-accentLime tracking-widest">
                    {article.category}
                  </span>
                  <span className="text-[11px] font-mono text-[#555555]">
                    [ PERSPECTIVE ]
                  </span>
                </div>
                <h3 className="text-[19px] font-bold text-[#F0EDE8] leading-snug line-clamp-2 mb-8 group-hover:text-accentLime transition-colors font-sans">
                  {article.title}
                </h3>
              </div>
              <div>
                <div className="text-[12px] text-[#777777] font-mono mb-6 pt-4 border-t border-[#1F1F1F]">
                  {article.meta}
                </div>
                <span className="inline-flex items-center gap-2 text-[13px] text-[#F0EDE8] group-hover:text-accentLime font-medium transition-colors">
                  <span>Read publication</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal delay={250} direction="up">
        <div className="mt-14 text-center">
          <Link
            href="/blog"
            className="inline-block text-[14px] text-[#888888] hover:text-accentLime tracking-wide transition-colors"
          >
            View all blog posts &rarr;
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
