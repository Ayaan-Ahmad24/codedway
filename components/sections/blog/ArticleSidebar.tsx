"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  title: string;
}

interface ArticleSidebarProps {
  toc?: TocItem[];
  title: string;
}

export function ArticleSidebar({ toc = [], title }: ArticleSidebarProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, Math.round((window.scrollY / totalHeight) * 100)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareOnLinkedIn = () => {
    if (typeof window !== "undefined") {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(title);
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${text}`,
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  return (
    <aside className="w-full lg:w-[240px] lg:sticky lg:top-24 lg:ml-10 self-start mt-8 lg:mt-0 pt-4">
      {/* Table of Contents */}
      {toc.length > 0 && (
        <>
          <div className="font-mono text-[11px] text-[#bef44d] font-semibold uppercase tracking-widest mb-4 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-[#bef44d] inline-block" />
            IN THIS ARTICLE
          </div>
          <nav className="flex flex-col space-y-2.5 border-l border-[#201f1f] pl-4 mb-8">
            {toc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="font-sans text-[14px] text-[#8d937c] hover:text-[#F0EDE8] transition-colors tracking-tight"
              >
                {item.title}
              </a>
            ))}
          </nav>
          <div className="h-[1px] w-full bg-[#201f1f] my-6" />
        </>
      )}

      {/* Share Controls */}
      <div className="font-mono text-[11px] text-[#8d937c] uppercase tracking-widest mb-3">
        SHARE THIS
      </div>
      <div className="flex flex-col space-y-2">
        <button
          onClick={handleCopyLink}
          className="text-left font-mono text-[12px] text-[#c9c6c1] hover:text-[#F0EDE8] transition-colors flex items-center gap-1.5 group select-none"
        >
          <span className="text-[#bef44d] font-bold group-hover:translate-x-0.5 transition-transform">
            &gt;
          </span>
          <span>{copied ? "Link Copied!" : "Copy link"}</span>
        </button>
        <button
          onClick={shareOnLinkedIn}
          className="text-left font-mono text-[12px] text-[#c9c6c1] hover:text-[#F0EDE8] transition-colors flex items-center gap-1.5 group select-none"
        >
          <span className="text-[#bef44d] font-bold group-hover:translate-x-0.5 transition-transform">
            &gt;
          </span>
          <span>Share on LinkedIn</span>
        </button>
      </div>

      {/* Reading Progress Indicator */}
      <div className="mt-8 p-4 bg-[#1c1b1b] border border-[#201f1f] hidden lg:block">
        <div className="flex justify-between items-center font-mono text-[11px] text-[#8d937c] uppercase mb-2">
          <span>PROGRESS</span>
          <span className="text-[#bef44d] font-bold">{scrollProgress}%</span>
        </div>
        <div className="w-full h-1 bg-[#201f1f] overflow-hidden">
          <div
            className="h-full bg-[#bef44d] transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>
    </aside>
  );
}
