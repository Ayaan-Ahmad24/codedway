import { Metadata } from "next";
import { constructMetadata, getBreadcrumbSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import { OPEN_ROLES } from "@/lib/jobsData";
import { CareersMetaBar } from "@/components/sections/careers/CareersMetaBar";
import { CareersHeroSection } from "@/components/sections/careers/CareersHeroSection";
import { CareersValuesSection } from "@/components/sections/careers/CareersValuesSection";
import { CareersRolesContainer } from "@/components/sections/careers/CareersRolesContainer";
import { CareersHiringProcessSection } from "@/components/sections/careers/CareersHiringProcessSection";
import { CareersOpenApplicationSection } from "@/components/sections/careers/CareersOpenApplicationSection";
import { CareersCtaBanner } from "@/components/sections/careers/CareersCtaBanner";

export const metadata: Metadata = constructMetadata({
  title: "Careers — Engineering, Design & Operations",
  description:
    "Join Codedway. We hire engineers who think, designers who code, and managers who get out of the way. Remote-first, async culture, and transparent comp bands.",
  canonical: "/careers",
  ogType: "website",
});

export default function CareersPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Careers", item: "/careers" },
  ]);

  const jobListingsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Open Positions at Codedway",
    description: "Current engineering, design, and operations job openings at Codedway.",
    url: `${siteConfig.url}/careers`,
    itemListElement: OPEN_ROLES.map((role, idx) => ({
      "@type": "JobPosting",
      position: idx + 1,
      title: role.title,
      description: `${role.title} position at Codedway. ${role.type}, ${role.location}.`,
      employmentType: "FULL_TIME",
      hiringOrganization: {
        "@type": "Organization",
        name: "Codedway",
        sameAs: siteConfig.url,
      },
      jobLocationType: role.location.toLowerCase().includes("remote")
        ? "TELECOMMUTE"
        : undefined,
      applicantLocationRequirements: {
        "@type": "Country",
        name: "Global",
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobListingsSchema) }}
      />
      <main className="w-full bg-[#0C0C0C] text-[#F0EDE8] min-h-screen">
        <CareersMetaBar />
        <CareersHeroSection totalRoles={OPEN_ROLES.length} />
        <CareersValuesSection />
        <CareersRolesContainer />
        <CareersHiringProcessSection />
        <CareersOpenApplicationSection />
        <CareersCtaBanner />
      </main>
    </>
  );
}
