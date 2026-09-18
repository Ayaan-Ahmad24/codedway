import type { Metadata } from "next";
import { constructMetadata, getBreadcrumbSchema } from "@/lib/seo";
import { AboutHeroSection } from "@/components/sections/about/AboutHeroSection";
import { OriginSection } from "@/components/sections/about/OriginSection";
import { ValuesSection } from "@/components/sections/about/ValuesSection";
import { TeamSection } from "@/components/sections/about/TeamSection";
import { AboutMetricsSection } from "@/components/sections/about/AboutMetricsSection";
import { AboutCtaSection } from "@/components/sections/about/AboutCtaSection";

export const metadata: Metadata = constructMetadata({
  title: "About Codedway — Enterprise Software House & AI Architects",
  description:
    "Discover Codedway's origins, engineering philosophy, and senior team. We build high-throughput product architectures, custom AI systems, and cloud infrastructure from Lahore for global scale.",
  canonical: "/about",
});

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "About", item: "/about" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutHeroSection />
      <OriginSection />
      <ValuesSection />
      <TeamSection />
      <AboutMetricsSection />
      <AboutCtaSection />
    </>
  );
}
