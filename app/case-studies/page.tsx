import { Metadata } from "next";
import { getAllContent, CaseStudyFrontmatter } from "@/lib/mdx";
import { constructMetadata, getBreadcrumbSchema, getCollectionPageSchema } from "@/lib/seo";
import { PortfolioIndexContainer } from "@/components/sections/portfolio/PortfolioIndexContainer";

export const metadata: Metadata = constructMetadata({
  title: "Selected Work & Case Studies",
  description:
    "Explore Codedway's engineering case studies across fintech, autonomous logistics, cognitive search, headless commerce, and healthtech.",
  canonical: "/case-studies",
  ogType: "website",
});

export default async function CaseStudiesPage() {
  const projects = await getAllContent<CaseStudyFrontmatter>("case-studies");

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Work", item: "/case-studies" },
  ];

  const collectionSchema = getCollectionPageSchema({
    title: "Selected Work & Case Studies | Codedway",
    description:
      "Explore Codedway's engineering case studies across fintech, autonomous logistics, cognitive search, headless commerce, and healthtech.",
    url: "/case-studies",
    items: projects.map((p) => ({
      name: p.frontmatter.title,
      url: `/case-studies/${p.slug}`,
      description: p.frontmatter.subtitle || p.frontmatter.metaDescription,
    })),
  });

  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="w-full">
        <PortfolioIndexContainer initialProjects={projects} />
      </main>
    </>
  );
}
