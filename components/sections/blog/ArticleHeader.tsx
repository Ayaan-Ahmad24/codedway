import Link from "next/link";
import type { BlogPostFrontmatter } from "@/lib/mdx";

interface ArticleHeaderProps {
  post: BlogPostFrontmatter;
}

export function ArticleHeader({ post }: ArticleHeaderProps) {
  const docRef = `DOC_REF: ${post.slug.slice(0, 4).toUpperCase()}-${post.publishedAt?.slice(2, 4) || "26"}`;

  return (
    <header className="w-full max-w-[860px] mx-auto px-6 sm:px-8 pt-12 md:pt-16 pb-8">
      {/* Breadcrumb & Category Meta */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <nav
          aria-label="Breadcrumbs"
          className="flex items-center gap-2 font-mono text-[11px] tracking-widest text-[#8d937c] uppercase"
        >
          <Link href="/blog" className="hover:text-[#F0EDE8] transition-colors">
            Blog
          </Link>
          <span className="text-[#353534]">/</span>
          <span className="text-[#c9c6c1]">{post.category}</span>
        </nav>

        <span className="inline-block bg-[#bef44d] text-[#253600] px-2 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wider">
          {post.category}
        </span>

        <span className="ml-auto font-mono text-[11px] text-[#8d937c] tracking-wider hidden sm:inline">
          {docRef}
        </span>
      </div>

      {/* Main Title */}
      <h1 className="text-3xl sm:text-4xl md:text-[52px] md:leading-[1.18] text-[#F0EDE8] font-medium tracking-tight mb-8 font-sans">
        {post.title}
      </h1>

      {/* Byline Row */}
      <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-[#201f1f]">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-[#2a2a2a] flex items-center justify-center text-[#F0EDE8] font-mono text-[14px] font-semibold shrink-0 select-none">
            {post.authorInitials || post.author.slice(0, 2).toUpperCase()}
          </div>
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[14px] text-[#c9c6c1]">
            <span className="text-[#F0EDE8] font-medium font-sans">{post.author}</span>
            <span className="text-[#8d937c]">{post.authorRole || "Engineering"}</span>
            <span className="text-[#353534]">&middot;</span>
            <span>{post.publishedAt}</span>
            <span className="text-[#353534]">&middot;</span>
            <span className="font-mono text-[11px] text-[#bef44d] bg-[#201f1f] px-1.5 py-0.5">
              {post.readTime || "8 min read"}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-[#8d937c] font-mono text-[11px]">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-[#bef44d] inline-block" />
            VERIFIED BENCHMARK
          </span>
        </div>
      </div>
    </header>
  );
}
