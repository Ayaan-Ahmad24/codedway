import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllContent, getContentBySlug, getRelatedContent, type ServiceFrontmatter } from "@/lib/mdx";
import { constructMetadata, getBreadcrumbSchema, getFAQSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import { mdxComponents } from "@/components/mdx/MDXComponents";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const services = await getAllContent<ServiceFrontmatter>("services");
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = await getContentBySlug<ServiceFrontmatter>("services", params.slug);

  if (!service) {
    return constructMetadata({
      title: "Service Not Found",
      noIndex: true,
    });
  }

  const { frontmatter } = service;
  return constructMetadata({
    title: frontmatter.metaTitle || frontmatter.title,
    description: frontmatter.metaDescription || frontmatter.description,
    canonical: `/services/${frontmatter.slug}`,
    ogImage: frontmatter.ogImage,
    publishedTime: frontmatter.publishedAt,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const service = await getContentBySlug<ServiceFrontmatter>("services", params.slug);

  if (!service) {
    notFound();
  }

  const { frontmatter, content } = service;
  const relatedServices = await getRelatedContent<ServiceFrontmatter>("services", params.slug, 2);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" },
    { name: frontmatter.title, item: `/services/${frontmatter.slug}` },
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: frontmatter.title,
    serviceType: frontmatter.title,
    description: frontmatter.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    url: `${siteConfig.url}/services/${frontmatter.slug}`,
  };

  const serviceFaqs = [
    {
      question: `How does Codedway deliver ${frontmatter.title}?`,
      answer: frontmatter.description,
    },
    {
      question: `What is the expected engagement timeline for ${frontmatter.title}?`,
      answer: `Typically ${frontmatter.timeline || "6-12 weeks"} depending on architectural scope and sprint cadences.`,
    },
    {
      question: `What commercial model applies to ${frontmatter.title}?`,
      answer: `Offered under ${frontmatter.model || "Project-based or Retainer"} arrangements with zero lock-in contracts.`,
    },
  ];

  const faqSchema = getFAQSchema(serviceFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Header */}
      <header className="relative w-full pt-16 pb-20 px-6 sm:px-12 lg:px-[8vw] border-b border-[#1A1A1A]">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.2em] text-[#666666] mb-8">
          <Link href="/" className="hover:text-[#F0EDE8] transition-colors">
            HOME
          </Link>
          <span className="text-[#333333]">/</span>
          <Link href="/services" className="hover:text-[#F0EDE8] transition-colors">
            SERVICES
          </Link>
          <span className="text-[#333333]">/</span>
          <span className="text-[#C8FF57]">{frontmatter.title}</span>
        </div>

        {/* Discipline Tag */}
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#141414] border border-[#222222] mb-6">
          <span className="w-1.5 h-1.5 bg-[#C8FF57]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#C8FF57] font-semibold">
            DISCIPLINE_SPEC // {frontmatter.slug}
          </span>
        </div>

        {/* H1 Headline */}
        <h1 className="text-[44px] sm:text-[60px] lg:text-[72px] font-light text-[#F0EDE8] tracking-tight leading-[1.05] mb-8 font-sans max-w-4xl">
          {frontmatter.title}
        </h1>

        {/* Definition Paragraph (AIO target) */}
        <p className="text-[18px] sm:text-[20px] text-[#888888] max-w-3xl leading-relaxed font-normal mb-12">
          {frontmatter.description}
        </p>

        {/* Specifications Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#1E1E1E]">
          <div className="bg-[#141414] border border-[#222222] p-4">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#666666] block mb-1">
              ESTIMATED TIMELINE
            </span>
            <span className="text-[15px] font-medium text-[#F0EDE8]">
              {frontmatter.timeline || "6 - 12 Weeks"}
            </span>
          </div>

          <div className="bg-[#141414] border border-[#222222] p-4">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#666666] block mb-1">
              ENGAGEMENT MODEL
            </span>
            <span className="text-[15px] font-medium text-[#F0EDE8]">
              {frontmatter.model || "Project / Retainer"}
            </span>
          </div>

          <div className="bg-[#141414] border border-[#222222] p-4">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#666666] block mb-1">
              STATUS
            </span>
            <span className="text-[15px] font-medium text-[#C8FF57] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#C8FF57] inline-block" />
              Accepting New Sprints
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <article className="w-full px-6 sm:px-12 lg:px-[8vw] py-20 border-b border-[#1A1A1A]">
        <div className="max-w-4xl">
          <MDXRemote source={content} components={mdxComponents} />
        </div>
      </article>

      {/* Related Disciplines */}
      {relatedServices.length > 0 && (
        <section className="w-full px-6 sm:px-12 lg:px-[8vw] py-20 border-b border-[#1A1A1A] bg-[#111111]">
          <div className="mb-10">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#666666] block mb-2">
              {"//"} ADJACENT DISCIPLINES
            </span>
            <h2 className="text-[28px] font-light text-[#F0EDE8] tracking-tight font-sans">
              Complementary Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                href={`/services/${rel.slug}`}
                className="bg-[#141414] border border-[#222222] p-8 flex flex-col justify-between hover:border-[#C8FF57] transition-colors group block"
              >
                <div>
                  <span className="font-mono text-[11px] uppercase text-[#C8FF57] tracking-wider block mb-3">
                    DISCIPLINE
                  </span>
                  <h3 className="text-[22px] font-medium text-[#F0EDE8] group-hover:text-[#C8FF57] transition-colors mb-3">
                    {rel.frontmatter.title}
                  </h3>
                  <p className="text-[14px] text-[#888888] leading-relaxed line-clamp-2">
                    {rel.frontmatter.description}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[#222222] flex items-center justify-between text-[13px] text-[#F0EDE8] font-mono">
                  <span>Explore discipline</span>
                  <span className="text-[#C8FF57] group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Conversion CTA */}
      <section className="w-full bg-[#C8FF57] text-[#0C0C0C] px-6 sm:px-12 lg:px-[8vw] py-20">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          <div className="max-w-[620px]">
            <h2 className="text-[36px] sm:text-[44px] font-bold text-[#0C0C0C] leading-tight mb-3 font-sans">
              Ready to architect {frontmatter.title}?
            </h2>
            <p className="text-[16px] text-[#0C0C0C] font-normal leading-relaxed">
              Speak directly with an engineering lead. No sales reps, no discovery games.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              className="inline-flex items-center justify-center font-mono text-[12px] font-bold uppercase tracking-wider bg-[#0C0C0C] text-[#F0EDE8] px-8 py-4 hover:bg-[#222222] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] select-none"
              href="/contact?type=call"
            >
              Schedule technical review
            </Link>
            <Link
              className="inline-flex items-center justify-center font-mono text-[12px] font-bold uppercase tracking-wider border border-[#0C0C0C] text-[#0C0C0C] px-8 py-4 bg-transparent hover:bg-[#0C0C0C] hover:text-[#C8FF57] transition-colors select-none"
              href="/case-studies"
            >
              Inspect related work &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
