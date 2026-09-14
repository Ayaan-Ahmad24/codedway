import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  getAllContent,
  getContentBySlug,
  type CaseStudyFrontmatter,
} from "@/lib/mdx";
import { constructMetadata, getBreadcrumbSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import { mdxComponents } from "@/components/mdx/MDXComponents";
import { CaseStudyHeader } from "@/components/sections/case-study/CaseStudyHeader";
import { CaseStudyProblemSection } from "@/components/sections/case-study/CaseStudyProblemSection";
import { CaseStudyApproachSection } from "@/components/sections/case-study/CaseStudyApproachSection";
import { CaseStudyBuildSection } from "@/components/sections/case-study/CaseStudyBuildSection";
import { CaseStudyResultsSection } from "@/components/sections/case-study/CaseStudyResultsSection";
import { CaseStudyNextTeaser } from "@/components/sections/case-study/CaseStudyNextTeaser";
import { PortfolioCtaSection } from "@/components/sections/portfolio/PortfolioCtaSection";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const projects = await getAllContent<CaseStudyFrontmatter>("case-studies");
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = await getContentBySlug<CaseStudyFrontmatter>("case-studies", params.slug);

  if (!project) {
    return constructMetadata({
      title: "Case Study Not Found",
      noIndex: true,
    });
  }

  const { frontmatter } = project;
  return constructMetadata({
    title: frontmatter.metaTitle || frontmatter.title,
    description: frontmatter.metaDescription || frontmatter.subtitle,
    canonical: `/case-studies/${frontmatter.slug}`,
    ogType: "article",
    ogImage: frontmatter.ogImage,
    publishedTime: frontmatter.publishedAt,
  });
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const project = await getContentBySlug<CaseStudyFrontmatter>("case-studies", params.slug);

  if (!project) {
    notFound();
  }

  const { frontmatter, content } = project;
  const allProjects = await getAllContent<CaseStudyFrontmatter>("case-studies");
  const currentIndex = allProjects.findIndex((p) => p.slug === params.slug);
  const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % allProjects.length : 0;
  const nextProject = allProjects[nextIndex];

  const shortName = frontmatter.title.split("—")[0].trim();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Work", item: "/case-studies" },
    { name: shortName, item: `/case-studies/${frontmatter.slug}` },
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: frontmatter.title,
    description: frontmatter.metaDescription || frontmatter.subtitle,
    url: `${siteConfig.url}/case-studies/${frontmatter.slug}`,
    image: frontmatter.ogImage ? `${siteConfig.url}${frontmatter.ogImage}` : undefined,
    datePublished: frontmatter.publishedAt,
    author: {
      "@type": "Organization",
      name: "Codedway",
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: "Codedway",
      url: siteConfig.url,
      logo: `${siteConfig.url}/images/logo.png`,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="w-full bg-[#0C0C0C] text-[#F0EDE8] min-h-screen">
        {/* SECTION 1: HEADER & TELEMETRY CANVAS */}
        <CaseStudyHeader frontmatter={frontmatter} />

        {/* SECTION 2: THE PROBLEM */}
        <CaseStudyProblemSection frontmatter={frontmatter} />

        {/* SECTION 3: OUR APPROACH */}
        <CaseStudyApproachSection frontmatter={frontmatter} />

        {/* SECTION 4: WHAT WE BUILT */}
        <CaseStudyBuildSection frontmatter={frontmatter} />

        {/* SECTION 5: RESULTS */}
        <CaseStudyResultsSection frontmatter={frontmatter} />

        {/* SECTION: ARCHITECTURAL DEEP DIVE & BENCHMARKS (MDX) */}
        {content && content.trim().length > 0 && (
          <section
            className="w-full py-20 lg:py-28 border-b border-[#222222] bg-[#0C0C0C]"
            style={{ paddingLeft: "8vw", paddingRight: "8vw" }}
          >
            <div className="max-w-[1440px] mx-auto">
              <div className="font-mono text-[12px] uppercase tracking-widest text-accentLime mb-8">
                05 {"//"} ARCHITECTURAL DEEP DIVE &amp; BENCHMARKS
              </div>
              <div className="prose prose-invert max-w-4xl font-light text-[#D0CCC4] leading-relaxed">
                <MDXRemote source={content} components={mdxComponents} />
              </div>
            </div>
          </section>
        )}

        {/* SECTION 6: NEXT PROJECT TEASER */}
        {nextProject && <CaseStudyNextTeaser nextProject={nextProject} />}

        {/* CLOSING CTA */}
        <PortfolioCtaSection />
      </main>
    </>
  );
}
