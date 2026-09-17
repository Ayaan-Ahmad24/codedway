// LEGAL NOTICE: The terms on this page reflect operational engineering practices for Codedway (Lahore, Pakistan) servicing international clients. A qualified legal professional should review and adapt these terms prior to formal production execution.

import { Metadata } from "next";
import Link from "next/link";
import { constructMetadata, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Security Architecture & Cryptographic Standards",
  description: "Codedway security architecture, encryption benchmarks, SOC2 Type 2 attestation, and zero-trust engineering standards.",
  canonical: "/security",
  ogType: "website",
});

export default function SecurityPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Security", item: "/security" },
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
            <span className="text-[#F0EDE8]">Security</span>
          </div>

          <div className="mb-12 border-b border-[#222222] pb-10">
            <span className="font-mono text-[11px] uppercase tracking-widest text-accentLime block mb-3">
              ATTESTATION // ZERO_TRUST_STD
            </span>
            <h1 className="text-[40px] sm:text-[56px] font-light text-[#F0EDE8] tracking-tight mb-4">
              Security Standards.
            </h1>
            <p className="text-[16px] text-[#888888] font-light">
              AES-GCM-256 Encryption · SOC2 Type 2 Standards · Zero-Trust Principles
            </p>
          </div>

          <div className="space-y-12 text-[#D0CCC4] font-light leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-[22px] font-medium text-[#F0EDE8] font-mono">{"// 01. Cryptographic Enclaves"}</h2>
              <p className="text-[15px]">
                All production systems architected by Codedway default to strict envelope encryption using AES-GCM-256 at rest and TLS 1.3 in transit. Client data keys are managed through dedicated hardware security modules (AWS KMS, GCP Cloud KMS, or HashiCorp Vault) with automated cryptographic key rotation.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-[22px] font-medium text-[#F0EDE8] font-mono">{"// 02. Continuous Vulnerability Scanning"}</h2>
              <p className="text-[15px]">
                Every commit, pull request, and container image undergoes automated static application security testing (SAST), software composition analysis (SCA), and container vulnerability scans before deployment. We maintain a zero-critical-CVE policy across all production releases.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-[22px] font-medium text-[#F0EDE8] font-mono">{"// 03. Responsible Disclosure"}</h2>
              <p className="text-[15px]">
                We maintain an active security bug bounty program and welcome reports from independent researchers. If you discover a potential vulnerability in our infrastructure or open-source tooling, please report it directly to{" "}
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
