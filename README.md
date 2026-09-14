# Codedway 2.0 &mdash; Senior Software Engineering House

> Modern, high-performance web platform built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **MDX**. Features high-density technical aesthetics, dynamic case studies, engineering journals, interactive inquiry systems, and automated SEO.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Quick Start Guide (Beginner Friendly)](#-quick-start-guide-beginner-friendly)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Install Dependencies](#2-install-dependencies)
  - [3. Configure Environment Variables (Optional)](#3-configure-environment-variables-optional)
  - [4. Start the Local Development Server](#4-start-the-local-development-server)
- [Available Scripts](#-available-scripts)
- [Project Directory Structure](#-project-directory-structure)
- [Adding & Editing Content (MDX)](#-adding--editing-content-mdx)
  - [Adding a New Blog Article](#adding-a-new-blog-article)
  - [Adding a New Case Study](#adding-a-new-case-study)
- [Building for Production](#-building-for-production)
- [Troubleshooting & FAQs](#-troubleshooting--faqs)
- [Deployment](#-deployment)
- [License](#-license)

---

## ⚡ Overview

Codedway 2.0 is the digital headquarters for **Codedway**, a boutique software engineering house specializing in production-grade cloud architectures, AI & LLM integration, high-scale web systems, and dedicated engineering pods.

### Key Highlights
- **100% Static / Server-Side Generation (SSG)**: Blazing fast load times with pre-rendered pages.
- **Dynamic MDX Content Pipeline**: Markdown + React components for blog posts, case studies, and services.
- **Precision Dark Architectural Theme**: 0px radius brutalist design system with neon accent `#C8FF57` and custom spring-lerp cursor.
- **Enterprise SEO & Structured Data**: Automated JSON-LD (`schema-dts`), dynamic OpenGraph cards, `sitemap.xml`, and `robots.txt`.
- **Interactive Inquiries**: Multi-modal contact system supporting instant call scheduling, scoped project intake, and voice/video notes.

---

## 🛠 Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router) | Server components, routing, static optimization |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | End-to-end type safety |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) | High-density styling & design tokens |
| **Content** | [MDX](https://mdxjs.com/) + [gray-matter](https://github.com/jonschlinkert/gray-matter) | Markdown content with embedded React components |
| **Sitemap** | [next-sitemap](https://github.com/iamvishnusankar/next-sitemap) | Automated production sitemap & robots.txt generation |
| **Icons** | Custom inline SVG & SVG-based UI | Zero-dependency, lightweight vector icons |

---

## 📦 Prerequisites

Before running this project, ensure you have the following installed on your machine:

1. **Node.js**: Version **18.17.0** or higher (Node 20 LTS is recommended).
   - Check if installed:
     ```bash
     node -v
     ```
   - If not installed, download from [nodejs.org](https://nodejs.org/).
2. **Git**: Version control system.
   - Check if installed:
     ```bash
     git --version
     ```
   - If not installed, download from [git-scm.com](https://git-scm.com/).
3. **Package Manager**: `npm` (comes bundled with Node.js), or optionally `pnpm` / `yarn`.

---

## 🚀 Quick Start Guide (Beginner Friendly)

Follow these steps to get the project running locally in under 2 minutes:

### 1. Clone the Repository

Open your terminal (PowerShell, Command Prompt, macOS Terminal, or Linux Bash) and run:

```bash
git clone https://github.com/Ayaan-Ahmad24/codedway.git
```

Move into the project folder:

```bash
cd codedway
```

---

### 2. Install Dependencies

Install the required npm packages by running:

```bash
npm install
```

> **Note**: This will create a `node_modules` folder containing all project dependencies.

---

### 3. Configure Environment Variables (Optional)

The project works out of the box with sensible defaults! 

If you want to customize your local domain or deploy with a specific canonical URL, create a file named `.env.local` in the root directory:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

### 4. Start the Local Development Server

Run the development command:

```bash
npm run dev
```

Once the terminal outputs:
```
  ▲ Next.js 14.2.xx
  - Local:        http://localhost:3000
```

Open your favorite web browser and navigate to:
👉 **[http://localhost:3000](http://localhost:3000)**

Any changes you make to the code or content will automatically refresh in your browser in real time (Fast Refresh)!

---

## 📜 Available Scripts

In the project root, you can run the following commands:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the development server at `http://localhost:3000` with hot-reloading. |
| `npm run build` | Compiles and optimizes all 30+ static routes for production. |
| `npm run postbuild` | Automatically runs `next-sitemap` to update `sitemap.xml` and `robots.txt`. |
| `npm run start` | Serves the production build locally (run `npm run build` first). |
| `npm run lint` | Runs ESLint to identify code quality or syntax issues. |

---

## 📂 Project Directory Structure

```
codedway/
├── app/                          # Next.js App Router (pages & layouts)
│   ├── layout.tsx                # Root layout (Header, CustomCursor, Noise overlay, Footer)
│   ├── page.tsx                  # Homepage
│   ├── about/                    # About page
│   ├── services/                 # Services directory & dynamic routes ([slug])
│   ├── case-studies/             # Portfolio directory & dynamic routes ([slug])
│   ├── blog/                     # Engineering journal & dynamic routes ([slug])
│   ├── careers/                  # Careers & open positions
│   ├── contact/                  # Multi-tab inquiry form
│   ├── privacy/                  # Privacy policy page
│   ├── terms/                    # Terms of service page
│   ├── security/                 # Security standards page
│   └── nda/                      # Mutual NDA guarantee page
│
├── components/                   # Reusable React components
│   ├── layout/                   # Header, Footer, Navigation
│   ├── mdx/                      # Custom MDX components (Callout, TechStack, ResultCard)
│   ├── sections/                 # Modular page sections (hero, process, testimonials, etc.)
│   └── ui/                       # Base UI primitives (Button, Badge, Card, Reveal, CustomCursor)
│
├── content/                      # Content repository (MDX files)
│   ├── blog/                     # Markdown articles (.mdx)
│   ├── case-studies/             # Case study reports (.mdx)
│   └── services/                 # Service offerings (.mdx)
│
├── lib/                          # Core business logic & utility modules
│   ├── mdx.ts                    # MDX parsing, frontmatter extraction, reading time
│   ├── seo.ts                    # JSON-LD structured data & metadata generators
│   ├── siteConfig.ts             # Global site metadata, navigation, contact information
│   └── jobsData.ts               # Open career roles & descriptions
│
├── public/                       # Static public assets (icons, images, robots.txt, sitemap.xml)
├── styles/                       # Global CSS & Tailwind styling
│   └── globals.css               # Design system tokens, keyframe animations, custom utility classes
│
├── DESIGN.md                     # Technical design system specification
├── next.config.mjs               # Next.js configuration
├── tailwind.config.ts            # Tailwind color palette, typography & plugins
└── tsconfig.json                 # TypeScript compiler configuration
```

---

## ✍️ Adding & Editing Content (MDX)

All articles, case studies, and services are managed via clean **MDX** (Markdown + JSX) files located in the `/content` folder. You do not need to write code to publish new content!

### Adding a New Blog Article

1. Create a new `.mdx` file in `content/blog/`, for example: `my-new-post.mdx`.
2. Add the frontmatter header at the very top:

```markdown
---
title: "Building Resilient Distributed Systems with Redis & Go"
publishedAt: "2026-03-15"
author:
  name: "Ayaan Ahmad"
  role: "Lead Architect"
  avatar: "/images/authors/ayaan.jpg"
summary: "A practical guide to designing high-throughput caching and message brokers."
category: "Backend & Systems"
readTime: "6 min read"
featured: true
---

# Your Article Title

Write your article content here in standard markdown...

You can also use custom interactive components:

<Callout type="insight">
  Redis cluster replication ensures sub-millisecond read times under 100k req/sec.
</Callout>
```

3. Save the file. It will automatically appear on `/blog` and be available at `/blog/my-new-post`!

---

### Adding a New Case Study

Create a new file in `content/case-studies/[slug].mdx` with the corresponding frontmatter:

```markdown
---
title: "Fintech Real-Time Ledger"
client: "Nexus Capital"
industry: "Financial Services"
duration: "4 Months"
year: "2026"
summary: "Scaled a multi-region transaction ledger handling 45,000 TPS with zero data loss."
heroStats:
  - value: "45k"
    label: "TPS Throughput"
  - value: "99.999%"
    label: "Uptime SLA"
---

## The Challenge
Describe the architectural problem...

## The Architecture
Describe the tech stack and solution...
```

---

## 🏗 Building for Production

To test or generate the production-ready build:

```bash
npm run build
```

This will:
1. Compile and type-check all TypeScript code.
2. Statically pre-render all 30+ pages (SSG).
3. Automatically execute `next-sitemap` to generate `public/sitemap.xml` and `public/robots.txt`.

To test the generated build locally:

```bash
npm run start
```

Open `http://localhost:3000` to inspect the production site.

---

## ❓ Troubleshooting & FAQs

#### 1. Port 3000 is already in use
If another application is using port 3000, you can run Next.js on a different port:
```bash
npm run dev -- -p 3001
```
Then visit `http://localhost:3001`.

#### 2. `node_modules` or `.next` cache conflicts
If you encounter unexpected build errors after switching branches, reset the build cache:
```bash
# Windows PowerShell
Remove-Item -Recurse -Force .next, node_modules; npm install

# macOS / Linux
rm -rf .next node_modules && npm install
```

#### 3. Execution Policy Error (Windows PowerShell)
If you get `File ...\npm.ps1 cannot be loaded because running scripts is disabled on this system`:
Run PowerShell as Administrator and execute:
```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

---

## 🌐 Deployment

### Deploy with Vercel (Recommended)

The easiest way to deploy Codedway is using [Vercel](https://vercel.com/):

1. Push your repository to GitHub (already configured!).
2. Log into [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import the `Ayaan-Ahmad24/codedway` repository.
4. Leave build settings as default (`npm run build`).
5. Click **Deploy**. Your site will be live on a global CDN with SSL in under 60 seconds!

---

## 📄 License

This project is licensed under the **MIT License** &mdash; see the codebase for details.

---

**Codedway** &mdash; Senior software engineering house. Disciplined craft, production architectures.  
Created and maintained by [Ayaan Ahmad](https://github.com/Ayaan-Ahmad24).
