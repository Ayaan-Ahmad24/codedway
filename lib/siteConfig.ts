export const siteConfig = {
  name: "Codedway",
  legalName: "Codedway Software House",
  tagline: "Boutique Software House",
  description:
    "Boutique software house specializing in full-lifecycle product engineering, practical AI systems, and high-throughput production architectures.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://codedway.com",
  ogImage: "/images/og-default.png",
  locale: "en_US",
  email: "enquiries@codedway.com",
  phone: "+92 42 3578 9000",
  address: {
    streetAddress: "Gulberg III",
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    postalCode: "54000",
    addressCountry: "PK",
  },
  social: {
    linkedin: "https://linkedin.com/company/codedway",
    twitter: "https://twitter.com/codedway",
    github: "https://github.com/codedway",
  },
  navItems: [
    { label: "Work", href: "/case-studies" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Journal", href: "/blog" },
  ],
  footerNav: {
    services: [
      { label: "Product Engineering", href: "/services/product-engineering" },
      { label: "AI & LLM Systems", href: "/services/ai-integration" },
      { label: "Staff Augmentation", href: "/services/staff-augmentation" },
      { label: "DevOps & QA", href: "/services/qa-devops" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Philosophy", href: "/about#philosophy" },
      { label: "Careers (We're hiring)", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
    work: [
      { label: "Fintech Dashboard", href: "/case-studies/fintech-dashboard" },
      { label: "Autonomous Logistics", href: "/case-studies/autonomous-logistics" },
      { label: "Cognitive Search", href: "/case-studies/cognitive-search" },
      { label: "Commerce Engine", href: "/case-studies/global-commerce-api" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Security", href: "/security" },
      { label: "NDA Guarantee", href: "/nda" },
    ],
  },
} as const;
