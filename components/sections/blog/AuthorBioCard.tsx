import type { BlogPostFrontmatter } from "@/lib/mdx";

interface AuthorBioCardProps {
  post: BlogPostFrontmatter;
}

export function AuthorBioCard({ post }: AuthorBioCardProps) {
  const authorHandle = post.author.toLowerCase().replace(/\s+/g, "");

  return (
    <section className="w-full max-w-[720px] mx-auto px-6 sm:px-0 my-16">
      <div className="p-6 sm:p-8 bg-[#1c1b1b] border border-[#201f1f] flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <div className="w-[72px] h-[72px] bg-[#2a2a2a] flex items-center justify-center text-[#F0EDE8] font-mono text-2xl font-medium shrink-0 border border-[#201f1f] select-none">
          {post.authorInitials || post.author.slice(0, 2).toUpperCase()}
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-baseline gap-2 mb-2">
            <h3 className="text-lg text-[#F0EDE8] font-bold font-sans">
              {post.author}
            </h3>
            <span className="font-mono text-[11px] text-[#8d937c] uppercase">
              {post.authorRole || "Engineering Lead, Codedway"}
            </span>
          </div>
          <p className="text-[14px] text-[#c9c6c1] leading-relaxed mb-4 font-normal">
            Senior engineering practitioner at Codedway. Specializing in fault-tolerant systems architecture, distributed database topologies, and deterministic runtime reliability.
          </p>
          <a
            className="inline-flex items-center gap-1 font-mono text-[11px] text-[#bef44d] hover:underline tracking-wider"
            href={`https://linkedin.com/in/${authorHandle}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            &rarr; linkedin.com/in/{authorHandle}
          </a>
        </div>
      </div>
    </section>
  );
}
