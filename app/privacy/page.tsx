// LEGAL NOTICE: The terms on this page reflect operational engineering practices for Codedway (Lahore, Pakistan) servicing international clients. A qualified legal professional should review and adapt these terms prior to formal production execution.

import { Metadata } from "next";
import Link from "next/link";
import { constructMetadata, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Architecture & Policy",
  description: "Codedway privacy architecture, data governance principles, and GDPR compliance policies.",
  canonical: "/privacy",
  ogType: "website",
});

export default function PrivacyPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Privacy Policy", item: "/privacy" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="w-full bg-[#0C0C0C] text-[#F0EDE8] min-h-screen pt-32 pb-24" style={{ paddingLeft: "8vw", paddingRight: "8vw" }}>
        <div className="max-w-[960px] mx-auto">
          {/* Breadcrumb */}
          <div className="font-mono text-[12px] uppercase tracking-widest text-[#666666] mb-8">
            <Link href="/" className="hover:text-accentLime transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#F0EDE8]">Privacy Policy</span>
          </div>

          <div className="mb-12 border-b border-[#222222] pb-10">
            <span className="font-mono text-[11px] uppercase tracking-widest text-accentLime block mb-3">
              LEGAL // SEC_POLICY_V2.6
            </span>
            <h1 className="text-[40px] sm:text-[56px] font-light text-[#F0EDE8] tracking-tight mb-4">
              Privacy Architecture.
            </h1>
            <p className="text-[16px] text-[#888888] font-light">
              Effective Date: January 1, 2026 · Last Audited: Q1 2026
            </p>
          </div>

          <div className="space-y-12 text-[#D0CCC4] font-light leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-[22px] font-medium text-[#F0EDE8] font-mono">{"// 01. Zero Data Harvesting Principle"}</h2>
              <p className="text-[15px]">
                At Codedway, privacy is engineered into our architecture, not appended as an afterthought. We do not sell, license, or monetize client data, code repositories, telemetry feeds, or user interactions. All data exchanged between your organization and Codedway exists solely to fulfill contracted engineering obligations.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-[22px] font-medium text-[#F0EDE8] font-mono">{"// 02. Client Code & Intellectual Property"}</h2>
              <p className="text-[15px]">
                All software, schemas, vector embeddings, documentation, and technical assets developed during an engagement belong exclusively to the client upon invoice settlement. Codedway enforces strict isolated VPC enclaves and never uses client codebases or proprietary training data to train external AI models.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-[22px] font-medium text-[#F0EDE8] font-mono">{"// 03. Telemetry & Analytics"}</h2>
              <p className="text-[15px]">
                Our website utilizes minimal, privacy-respecting analytics without third-party tracking cookies or fingerprinting scripts. We log only technical connection parameters required for DDoS mitigation and infrastructure availability monitoring.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-[22px] font-medium text-[#F0EDE8] font-mono">{"// 04. Contact & Data Access"}</h2>
              <p className="text-[15px]">
                For questions regarding data processing or to request data erasure under GDPR/CCPA, contact our engineering security office at{" "}
                <a href="mailto:security@codedway.com" className="text-accentLime underline underline-offset-4">
                  security@codedway.com
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
