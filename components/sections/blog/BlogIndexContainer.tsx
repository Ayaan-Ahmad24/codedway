"use client";

import { useState, useMemo } from "react";
import type { BlogPostFrontmatter } from "@/lib/mdx";
import { BlogHeroSection } from "./BlogHeroSection";
import { FeaturedArticleSection } from "./FeaturedArticleSection";
import { ArticleGridSection } from "./ArticleGridSection";
import { NewsletterSection } from "./NewsletterSection";

interface BlogIndexContainerProps {
  initialArticles: BlogPostFrontmatter[];
}

export function BlogIndexContainer({ initialArticles }: BlogIndexContainerProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const featuredArticle = useMemo(() => {
    return (
      initialArticles.find((a) => a.isFeatured) ||
      initialArticles[0]
    );
  }, [initialArticles]);

  const filteredArticles = useMemo(() => {
    return initialArticles.filter((article) => {
      // Category filter
      const matchesCategory =
        selectedCategory === "All" ||
        article.category.toLowerCase() === selectedCategory.toLowerCase();

      // Search filter
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        (article.tags && article.tags.some((t) => t.toLowerCase().includes(query))) ||
        article.author.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [initialArticles, selectedCategory, searchQuery]);

  return (
    <>
      <BlogHeroSection
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalArticles={filteredArticles.length}
      />

      {/* Show featured only when not actively searching */}
      {!searchQuery && selectedCategory === "All" && featuredArticle && (
        <FeaturedArticleSection post={featuredArticle} />
      )}

      <ArticleGridSection
        articles={filteredArticles}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <NewsletterSection />
    </>
  );
}
