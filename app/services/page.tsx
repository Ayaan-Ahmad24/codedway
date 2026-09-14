import type { Metadata } from "next";
import { constructMetadata, getBreadcrumbSchema, getFAQSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import { ServicesHeroSection } from "@/components/sections/services/ServicesHeroSection";
import { ProductEngineeringSection } from "@/components/sections/services/ProductEngineeringSection";
import { AiIntegrationSection } from "@/components/sections/services/AiIntegrationSection";
import { StaffAugmentationSection } from "@/components/sections/services/StaffAugmentationSection";
import { QaDevopsSection } from "@/components/sections/services/QaDevopsSection";
import { EngagementModelsSection } from "@/components/sections/services/EngagementModelsSection";
import { ServicesCtaSection } from "@/components/sections/services/ServicesCtaSection";

export const metadata: Metadata = constructMetadata({
  title: "Software Engineering Services",
  description:
    "Explore Codedway's engineering disciplines: full-stack web and mobile apps, custom AI & RAG pipelines, autonomous staff augmentation, and automated DevOps.",
  canonical: "/services",
});

const SERVICES_FAQS = [
  {
    question: "What are Codedway's commercial engagement models?",
    answer:
      "We offer three structured models: Project-based (fixed scope and milestones), Retainer (ongoing monthly partnership with dedicated team slices and weekly sprints), and Embedded (autonomous senior engineers integrated directly into client squads).",
  },
  {
    question: "How quickly can Codedway engineers ramp up and ship?",
    answer:
      "Our average ramp-up time for embedded engineers is under 1 week. For full-lifecycle MVPs, we take products from zero to production in under 12 weeks with zero technical debt.",
  },
  {
    question: "How do Codedway AI integrations work in production?",
    answer:
      "We build custom LLM workflows, retrieval-augmented generation (RAG) topologies, vector search embeddings, and deterministic output schema validation with strict latency budgets.",
  },
];

export default function ServicesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" },
  ]);

  const faqSchema = getFAQSchema(SERVICES_FAQS);

  // Service schema for GEO
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Service",
        name: "Product Engineering",
        serviceType: "Software Development",
        provider: { "@id": `${siteConfig.url}/#organization` },
        description:
          "Full-stack web and mobile application engineering built on modern, scalable stacks.",
        url: `${siteConfig.url}/services/product-engineering`,
      },
      {
        "@type": "Service",
        name: "AI Integration",
        serviceType: "Artificial Intelligence Development",
        provider: { "@id": `${siteConfig.url}/#organization` },
        description:
          "Practical machine learning, custom RAG architectures, and fine-tuned model integrations.",
        url: `${siteConfig.url}/services/ai-integration`,
      },
      {
        "@type": "Service",
        name: "Staff Augmentation",
        serviceType: "Technical Staffing",
        provider: { "@id": `${siteConfig.url}/#organization` },
        description:
          "Senior autonomous engineers embedded directly into existing engineering squads.",
        url: `${siteConfig.url}/services/staff-augmentation`,
      },
      {
        "@type": "Service",
        name: "QA & DevOps",
        serviceType: "DevOps & Infrastructure",
        provider: { "@id": `${siteConfig.url}/#organization` },
        description:
          "Automated test harnesses, hardened container orchestration, and zero-downtime CI/CD workflows.",
        url: `${siteConfig.url}/services/qa-devops`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      <ServicesHeroSection />
      <ProductEngineeringSection />
      <AiIntegrationSection />
      <StaffAugmentationSection />
      <QaDevopsSection />
      <EngagementModelsSection />
      <ServicesCtaSection />
    </>
  );
}
