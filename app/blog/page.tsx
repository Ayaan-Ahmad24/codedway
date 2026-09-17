import type { Metadata } from "next";
import { getAllContent, type BlogPostFrontmatter } from "@/lib/mdx";
import { constructMetadata, getBreadcrumbSchema, getFAQSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import { BlogIndexContainer } from "@/components/sections/blog/BlogIndexContainer";

export const metadata: Metadata = constructMetadata({
  title: "Engineering Blog",
  description:
    "Technical essays, architecture teardowns, and engineering post-mortems written by practitioners at Codedway software house.",
  canonical: "/blog",
});

const BLOG_FAQS = [
  {
    question: "What topics are covered in the Codedway Blog?",
    answer:
      "We publish in-depth technical post-mortems, distributed systems architecture guides, AI & RAG integration benchmarks, DevOps checklists, and async engineering culture essays.",
  },
  {
    question: "Who writes the articles in the Blog?",
    answer:
      "Every article is written directly by senior software engineers, systems architects, and technical leaders at Codedway based on actual production experiences.",
  },
];

export default async function BlogIndexPage() {
  const allPosts = await getAllContent<BlogPostFrontmatter>("blog");
  const articles = allPosts.map((p) => p.frontmatter);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Blog", item: "/blog" },
  ]);

  const faqSchema = getFAQSchema(BLOG_FAQS);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Codedway Blog",
    description:
      "Technical essays, architecture teardowns, and engineering post-mortems written by practitioners at Codedway.",
    url: `${siteConfig.url}/blog`,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <BlogIndexContainer initialArticles={articles} />
    </>
  );
}
