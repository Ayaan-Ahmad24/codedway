# Codedway — Production Next.js 14 Web Application Walkthrough

All 10 approved pages and dynamic sub-routes have been converted from raw HTML into a production-ready Next.js 14 App Router application with zero-radius design system fidelity, static prerendering, dynamic metadata, and comprehensive Schema.org JSON-LD structured data.

---

## Complete Pages Index & Static Prerendering (30 Routes)

| # | Route | Purpose & Components | Status | Prerender Type |
|---|---|---|---|---|
| **1** | `/` | **Home**: Hero, Ticker, Selected Work, Services, Trust Strip, Process, Founder Quote, Journal Preview, Closing CTA | Complete | Static (`○`) |
| **2** | `/about` | **About Us**: Hero, Origin & Backstory, Values, Engineering Team Grid, Metrics, Closing CTA | Complete | Static (`○`) |
| **3** | `/services` | **Services Index**: Hero, Product Engineering, AI & LLM Systems, Staff Augmentation, DevOps & QA, Engagement Models, Services CTA | Complete | Static (`○`) |
| **4** | `/services/[slug]` | **Service Detail (4 routes)**: Product Engineering, AI Integration, Staff Augmentation, QA & DevOps with MDX deep dives | Complete | SSG (`●`) |
| **5** | `/blog` | **Blog Index**: Hero, Featured Article, 3-Column Article Grid, Category Filters, Terminal Newsletter Subscription | Complete | Static (`○`) |
| **6** | `/blog/[slug]` | **Blog Post (10 routes)**: Article Header, Markdown/MDX content, TOC Sidebar, Author Bio, Related Articles | Complete | SSG (`●`) |
| **7** | `/case-studies` | **Case Studies Index**: Hero & Filter Bar (`ALL [06]`, `WEB [03]`, `MOBILE [02]`, `AI & ML [02]`, `INFRA [02]`), 2-Column Showcase Grid, Proof Inset, Testimonial, Lime CTA | Complete | Static (`○`) |
| **8** | `/case-studies/[slug]` | **Case Study Detail (6 routes)**: Vaultly, FleetMatrix, CortexSearch, NexaCommerce, Vitalis, SynapseStudio with Telemetry Visual Canvas, 4-Phase Delivery Track, 6 Feature Cards, Results Matrix, Next Project Teaser | Complete | SSG (`●`) |
| **9** | `/careers` | **Careers**: Meta Bar, Hero (*"Work on things that ship. Not decks."*), Core Values (*"The Deal"*), Interactive Role Filter, 4-Step Hiring Pipeline, Open Application Strip, Closing Banner | Complete | Static (`○`) |
| **10** | `/contact` | **Contact**: Hero (*"Tell us what you're building."*), Split Layout (Find Us, What to Expect, FAQ Accordion), Interactive 3-Minute Project Brief Form, Trust Strip | Complete | Static (`○`) |

---

## Design System & Performance Characteristics

- **Zero-Radius Rule**: `borderRadius: 0 !important` enforced across buttons, badges, cards, inputs, tabs, avatars, and containers.
- **Monochromatic Noise Texture**: 3.5% monochromatic noise overlay persistent across background surfaces.
- **Color Palette Tokens**: `#0C0C0C` (bgDark), `#141414` (card), `#111111` (surface), `#C8FF57` / `#bef44d` (accentLime), `#F0EDE8` (textLight), `#222222` (borderDark).
- **Typography Pairing**: Inter (clean sans body and technical mono headers), JetBrains Mono (labels, tags, badges, telemetry headers), and DM Serif Display / EB Garamond (editorial accents, quotes, headlines).
- **SEO & Structured Data**:
  - `Organization` and `WebSite` (with `SearchAction`)
  - `BreadcrumbList` on every route
  - `FAQPage` on Services, About, and Contact
  - `TechArticle` / `BlogPosting` on all MDX detail routes
  - `CollectionPage` and `ItemList` with `JobPosting` on Careers and Portfolio
- **Automated Sitemaps & Robots**: `public/sitemap.xml` and `public/robots.txt` automatically generated post-build.
