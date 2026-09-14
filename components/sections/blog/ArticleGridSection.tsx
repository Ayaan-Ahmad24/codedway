"use client";

import { useState } from "react";
import Link from "next/link";
import type { BlogPostFrontmatter } from "@/lib/mdx";

const TOPICS = ["All", "Engineering", "AI", "Product", "Culture", "DevOps"];

interface ArticleGridSectionProps {
  articles: BlogPostFrontmatter[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function ArticleGridSection({
  articles,
  selectedCategory,
  onCategoryChange,
}: ArticleGridSectionProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const totalPages = Math.ceil(articles.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedArticles = articles.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 border-t border-[#1A1A1A]">
      {/* Topic Filter Row */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-12">
        <div className="flex items-center space-x-6 sm:space-x-8 text-sm overflow-x-auto pb-2 scrollbar-none">
          {TOPICS.map((topic) => {
            const isActive = selectedCategory.toLowerCase() === topic.toLowerCase();
            return (
              <button
                key={topic}
                onClick={() => {
                  onCategoryChange(topic);
                  setCurrentPage(1);
                }}
                className={`tracking-wide whitespace-nowrap transition-colors ${
                  isActive
                    ? "text-[#F0EDE8] font-medium relative lime-underline"
                    : "text-[#555555] hover:text-[#F0EDE8]"
                }`}
              >
                {topic}
              </button>
            );
          })}
        </div>

        <div className="text-[11px] font-mono text-[#555555]">
          PAGE {String(currentPage).padStart(2, "0")} {"//"} {String(articles.length).padStart(2, "0")} ENTRIES
        </div>
      </div>

      {/* Grid of Articles */}
      {paginatedArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedArticles.map((article) => (
            <article
              key={article.slug}
              className="article-card bg-[#141414] border border-[#222222] p-7 flex flex-col justify-between h-full hover:border-[#C8FF57] transition-all group"
            >
              <div className="space-y-3.5">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#C8FF57] block">
                  {article.category}
                </span>
                <h3 className="text-lg font-medium text-[#F0EDE8] leading-snug line-clamp-2 group-hover:text-[#F0EDE8]">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="hover:text-[#C8FF57] transition-colors"
                  >
                    {article.title}
                  </Link>
                </h3>
                <p className="text-[13px] text-[#666666] line-clamp-2 leading-relaxed font-normal">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#1D1D1D] flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className="w-6 h-6 bg-[#1E1E1E] border border-[#333333] flex items-center justify-center text-[10px] font-mono font-bold text-[#F0EDE8]">
                    {article.authorInitials || article.author.slice(0, 2).toUpperCase()}
                  </div>
                  <span className="text-[12px] font-mono text-[#555555]">
                    {article.author} &middot; {article.publishedAt} &middot;{" "}
                    {article.readTime || "6 min"}
                  </span>
                </div>
                <Link
                  href={`/blog/${article.slug}`}
                  className="read-link text-[13px] font-mono text-[#C8FF57] transition-transform inline-flex items-center"
                >
                  Read &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center text-[#888888] font-mono text-sm border border-[#222222] bg-[#141414]">
          NO_MATCHING_ENTRIES // Try modifying your search or filter criteria.
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-16 pt-8 border-t border-[#1A1A1A] flex items-center justify-between font-mono text-sm">
          <div className="text-[12px] text-[#555555]">
            SHOWING {startIndex + 1}&ndash;{Math.min(startIndex + itemsPerPage, articles.length)} OF{" "}
            {articles.length} ESSAYS
          </div>
          <div className="flex items-center space-x-6">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-1 transition-colors ${
                  currentPage === page
                    ? "text-[#F0EDE8] font-medium relative lime-underline"
                    : "text-[#555555] hover:text-[#F0EDE8]"
                }`}
              >
                {page}
              </button>
            ))}
            {currentPage < totalPages && (
              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                className="text-[#555555] hover:text-[#F0EDE8] transition-colors px-1"
              >
                Next &rarr;
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
