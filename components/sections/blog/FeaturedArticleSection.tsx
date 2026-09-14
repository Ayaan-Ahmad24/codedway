import Link from "next/link";
import type { BlogPostFrontmatter } from "@/lib/mdx";

interface FeaturedArticleSectionProps {
  post: BlogPostFrontmatter;
}

export function FeaturedArticleSection({ post }: FeaturedArticleSectionProps) {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-[11px] font-mono uppercase tracking-widest text-[#555555]">
          FEATURED // LEAD_STORY
        </span>
        <span className="text-[11px] font-mono text-[#C8FF57] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-[#C8FF57] inline-block" />
          PINNED ENTRY
        </span>
      </div>

      <div className="article-card bg-[#141414] border border-[#222222] p-8 md:p-10 lg:p-12 transition-all hover:border-[#C8FF57]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left 65% (8 cols) */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Category Tag */}
              <span className="inline-block bg-[#C8FF57] text-[#0C0C0C] font-mono text-[11px] font-bold uppercase tracking-widest px-2.5 py-1">
                {post.category}
              </span>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#F0EDE8] tracking-tight leading-snug font-sans">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-white transition-colors"
                >
                  {post.title}
                </Link>
              </h2>

              {/* Excerpt */}
              <p className="text-base sm:text-lg text-[#888888] leading-relaxed max-w-3xl font-normal">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-6 border-t border-[#1F1F1F] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              {/* Author Row */}
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 bg-[#1E1E1E] border border-[#333333] flex items-center justify-center text-xs font-mono font-bold text-[#F0EDE8]">
                  {post.authorInitials || "AK"}
                </div>
                <div className="text-[13px] text-[#555555] font-mono flex items-center flex-wrap gap-x-2">
                  <span className="text-[#F0EDE8] font-sans font-medium">
                    {post.author} &middot; {post.authorRole || "Lead"}
                  </span>
                  <span>&middot;</span>
                  <span>{post.publishedAt}</span>
                  <span>&middot;</span>
                  <span>{post.readTime || "8 min read"}</span>
                </div>
              </div>

              {/* Read Link */}
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-sm text-[#F0EDE8] font-medium lime-underline hover:text-white transition-colors self-start sm:self-auto"
              >
                Read article &rarr;
              </Link>
            </div>
          </div>

          {/* Right 35% Flat block with 01 thin serif */}
          <div className="lg:col-span-4 bg-[#1A1F2E] border border-[#222222] min-h-[220px] lg:min-h-full flex flex-col items-center justify-center p-8 relative overflow-hidden">
            <span className="text-[10px] font-mono text-[#555555] tracking-widest uppercase absolute top-4 left-4">
              FIG_01 // EDITORIAL_BLOCK
            </span>
            <div className="font-editorial italic text-7xl md:text-8xl text-[#6B7280]/60 font-light select-none">
              {post.figNumber || "01"}
            </div>
            <span className="text-[11px] font-mono text-[#888888] mt-2 uppercase tracking-wider">
              {post.figLabel || "ROADMAP_ECONOMICS"}
            </span>
            <span className="text-[10px] font-mono text-[#555555] absolute bottom-4 right-4">
              LOC: ARCH_LOGS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
