"use client";

interface BlogHeroSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalArticles: number;
}

export function BlogHeroSection({
  searchQuery,
  onSearchChange,
  totalArticles,
}: BlogHeroSectionProps) {
  return (
    <section className="min-h-[46vh] flex flex-col justify-center border-b border-[#1A1A1A] relative px-6 md:px-12 max-w-[1400px] mx-auto py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        {/* Left: Typographic Title */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center space-x-3 text-xs uppercase font-mono tracking-wider">
            <span className="text-[#666666]">Home / Journal</span>
            <span className="text-[#333333]">/</span>
            <span className="px-2.5 py-1 border border-[#222222] text-[#C8FF57] text-[11px] font-mono tracking-widest bg-[#141414]">
              ENGINEERING &middot; PRODUCT &middot; CULTURE
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-[#F0EDE8] tracking-tight leading-[1.05] font-sans">
            Thoughts from
            <br />
            <span className="font-editorial italic font-bold text-[#C8FF57]">
              inside the build.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#888888] max-w-2xl font-normal leading-relaxed">
            Written by engineers, for engineers. Occasionally useful to founders.
          </p>
        </div>

        {/* Right: Search Bar */}
        <div className="lg:col-span-4 w-full flex flex-col justify-end">
          <div className="relative w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search articles..."
              className="w-full bg-[#141414] border border-[#333333] text-[#F0EDE8] placeholder-[#555555] font-mono text-sm px-4 py-3.5 pr-12 focus:outline-none focus:border-[#C8FF57] transition-colors"
            />
            <div className="absolute right-0 top-0 h-full px-4 text-[#C8FF57] font-mono flex items-center justify-center pointer-events-none">
              &rarr;
            </div>
          </div>
          <div className="mt-2 text-[11px] font-mono text-[#555555] flex justify-between">
            <span>
              {searchQuery ? `INDEX_QUERY: "${searchQuery}"` : "INDEX_QUERY: ALL_ENTRIES"}
            </span>
            <span>{totalArticles} ARTICLES FOUND</span>
          </div>
        </div>
      </div>
    </section>
  );
}
