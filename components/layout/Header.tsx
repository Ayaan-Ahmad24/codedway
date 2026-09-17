"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/siteConfig";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Work", href: "/case-studies", active: pathname.startsWith("/case-studies") },
    { label: "Services", href: "/services", active: pathname.startsWith("/services") },
    { label: "About", href: "/about", active: pathname.startsWith("/about") },
    { label: "Blog", href: "/blog", active: pathname.startsWith("/blog") },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0C0C0C]/95 backdrop-blur-md z-50 border-b border-[#1A1A1A]">
      <div className="max-w-[1560px] mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        {/* Left: Wordmark & Technical Monogram */}
        <div className="flex items-center space-x-6">
          <Link
            href="/"
            className="text-[#F0EDE8] font-medium text-[16px] tracking-tight hover:text-accentLime transition-colors"
          >
            {siteConfig.name}
          </Link>
          <span className="hidden sm:inline-block text-[11px] font-mono uppercase text-[#555555] tracking-widest border-l border-[#222222] pl-4 select-none">
            CODEDWAY_V2.0
          </span>
        </div>

        {/* Right: Desktop Links & CTA */}
        <div className="flex items-center gap-8 sm:gap-10">
          <div className="hidden md:flex items-center gap-8 text-[14px]">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`pb-1 border-b-2 transition-colors ${
                  link.active
                    ? "text-[#F0EDE8] border-accentLime font-medium"
                    : "text-[#888888] hover:text-[#F0EDE8] border-transparent font-normal"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className={`px-4 py-2 text-[13px] font-mono uppercase tracking-wider transition-all duration-200 ${
              pathname === "/contact"
                ? "bg-accentLime text-[#0C0C0C] font-semibold border border-accentLime"
                : "border border-accentLime text-accentLime hover:bg-accentLime hover:text-[#0C0C0C] font-medium"
            }`}
          >
            Start a project &rarr;
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#888888] hover:text-[#F0EDE8] p-1 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0C0C0C] border-b border-[#1A1A1A] px-6 py-6 flex flex-col gap-4 text-[15px]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`py-1 transition-colors ${
                link.active ? "text-accentLime font-medium" : "text-[#888888] hover:text-[#F0EDE8]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="pt-2 text-accentLime font-mono text-[13px] uppercase tracking-wider"
          >
            Start a project &rarr;
          </Link>
        </div>
      )}
    </nav>
  );
}
