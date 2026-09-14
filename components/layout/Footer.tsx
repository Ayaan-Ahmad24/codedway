import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  return (
    <footer className="w-full bg-[#080808] border-t border-[#1A1A1A] pt-24 pb-16 px-6 sm:px-12">
      <div className="max-w-[1560px] mx-auto">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-20">
          {/* Wordmark & NAP left */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="text-[#F0EDE8] font-medium text-[16px] tracking-tight mb-4 inline-block hover:text-[#C8FF57] transition-colors"
            >
              {siteConfig.name}
            </Link>
            <p className="text-[13px] text-[#555555] max-w-xs leading-relaxed mb-6">
              Senior software engineering house. Disciplined craft, production architectures.
            </p>

            {/* Machine-readable NAP for GEO */}
            <div
              className="text-[11px] text-[#444444] font-mono leading-relaxed space-y-1"
              itemScope
              itemType="https://schema.org/LocalBusiness"
            >
              <meta itemProp="name" content={siteConfig.name} />
              <div
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <span itemProp="addressLocality">{siteConfig.address.addressLocality}</span>,{" "}
                <span itemProp="addressCountry">{siteConfig.address.addressCountry}</span>
              </div>
              <div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  itemProp="email"
                  className="hover:text-[#888888] transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>

          {/* 4 Columns Right */}
          <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Col 1: Services */}
            <div>
              <h4 className="text-[11px] uppercase tracking-widest text-[#666666] font-mono mb-4">
                Services
              </h4>
              <ul className="text-[13px] text-[#888888] space-y-3 font-normal">
                {siteConfig.footerNav.services.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="hover:text-[#F0EDE8] transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 2: Company */}
            <div>
              <h4 className="text-[11px] uppercase tracking-widest text-[#666666] font-mono mb-4">
                Company
              </h4>
              <ul className="text-[13px] text-[#888888] space-y-3 font-normal">
                {siteConfig.footerNav.company.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="hover:text-[#F0EDE8] transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Work */}
            <div>
              <h4 className="text-[11px] uppercase tracking-widest text-[#666666] font-mono mb-4">
                Work
              </h4>
              <ul className="text-[13px] text-[#888888] space-y-3 font-normal">
                {siteConfig.footerNav.work.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="hover:text-[#F0EDE8] transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Legal */}
            <div>
              <h4 className="text-[11px] uppercase tracking-widest text-[#666666] font-mono mb-4">
                Legal
              </h4>
              <ul className="text-[13px] text-[#888888] space-y-3 font-normal">
                {siteConfig.footerNav.legal.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="hover:text-[#F0EDE8] transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Second row divider */}
        <div className="w-full border-t border-[#1A1A1A] my-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#444444] font-mono">
          <div>&copy; 2026 {siteConfig.name}. Built by us, for you.</div>
          <div className="flex items-center gap-6">
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#888888] transition-colors"
            >
              LinkedIn
            </a>
            <span>·</span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-[#888888] transition-colors"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
