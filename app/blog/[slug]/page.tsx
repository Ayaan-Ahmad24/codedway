import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  getAllContent,
  getContentBySlug,
  getRelatedContent,
  type BlogPostFrontmatter,
} from "@/lib/mdx";
import { constructMetadata, getBreadcrumbSchema, getFAQSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import { mdxComponents } from "@/components/mdx/MDXComponents";
import { ArticleHeader } from "@/components/sections/blog/ArticleHeader";
import { ArticleSidebar } from "@/components/sections/blog/ArticleSidebar";
import { AuthorBioCard } from "@/components/sections/blog/AuthorBioCard";
import { RelatedArticlesSection } from "@/components/sections/blog/RelatedArticlesSection";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await getAllContent<BlogPostFrontmatter>("blog");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getContentBySlug<BlogPostFrontmatter>("blog", params.slug);

  if (!post) {
    return constructMetadata({
      title: "Article Not Found",
      noIndex: true,
    });
  }

  const { frontmatter } = post;
  return constructMetadata({
    title: frontmatter.metaTitle || frontmatter.title,
    description: frontmatter.metaDescription || frontmatter.excerpt,
    canonical: `/blog/${frontmatter.slug}`,
    ogType: "article",
    ogImage: frontmatter.ogImage,
    publishedTime: frontmatter.publishedAt,
    modifiedTime: frontmatter.updatedAt || frontmatter.publishedAt,
    authors: [frontmatter.author],
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getContentBySlug<BlogPostFrontmatter>("blog", params.slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, content } = post;
  const relatedPosts = await getRelatedContent<BlogPostFrontmatter>("blog", params.slug, 3);
  const relatedFrontmatter = relatedPosts.map((p) => p.frontmatter);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Journal", item: "/blog" },
    { name: frontmatter.title, item: `/blog/${frontmatter.slug}` },
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description: frontmatter.excerpt,
    datePublished: frontmatter.publishedAt,
    dateModified: frontmatter.updatedAt || frontmatter.publishedAt,
    author: {
      "@type": "Person",
      name: frontmatter.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${frontmatter.slug}`,
    },
  };

  const articleFaqs = [
    {
      question: `What is the core takeaway of "${frontmatter.title}"?`,
      answer: frontmatter.excerpt,
    },
    {
      question: `Who wrote this technical breakdown?`,
      answer: `${frontmatter.author}, ${frontmatter.authorRole || "Engineer"} at Codedway.`,
    },
  ];

  const faqSchema = getFAQSchema(articleFaqs);

  // Extract simple TOC from content if H2 headers are present
  const headingMatches = content.match(/^##\s+(.+)$/gm) || [];
  const toc = headingMatches.map((h) => {
    const rawTitle = h.replace(/^##\s+/, "").trim();
    const id = rawTitle
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    return { id, title: rawTitle };
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Article Header */}
      <ArticleHeader post={frontmatter} />

      {/* Reading Layout & Interactive Rail */}
      <div className="w-full max-w-[1080px] mx-auto px-6 sm:px-8 pb-20 flex flex-col lg:flex-row items-start justify-between">
        {/* Core Reading Column */}
        <article className="w-full lg:max-w-[720px] flex-1">
          <MDXRemote source={content} components={mdxComponents} />
        </article>

        {/* Sticky Table of Contents & Share Sidebar */}
        <ArticleSidebar toc={toc} title={frontmatter.title} />
      </div>

      {/* Author Bio Card */}
      <AuthorBioCard post={frontmatter} />

      {/* Related Articles */}
      <RelatedArticlesSection articles={relatedFrontmatter} />
    </>
  );
}
