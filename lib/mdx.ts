import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export type ContentType = "services" | "blog" | "case-studies";

export interface BaseFrontmatter {
  title: string;
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: string;
  publishedAt?: string;
  [key: string]: any;
}

export interface ServiceFrontmatter extends BaseFrontmatter {
  description: string;
  icon?: string;
}

export interface BlogPostFrontmatter extends BaseFrontmatter {
  excerpt: string;
  author: string;
  updatedAt?: string;
  category: string;
  tags?: string[];
}

export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface CaseStudyHeroTitle {
  line1: string;
  line2?: string;
  accent: string;
}

export interface CaseStudyMetadataStrip {
  client?: string;
  timeline?: string;
  role?: string;
}

export interface CaseStudyTelemetry {
  screen?: string;
  latency?: string;
  status?: string;
  loc?: string;
  enc?: string;
  title?: string;
  subtitle?: string;
}

export interface CaseStudyProblem {
  headline?: string;
  paragraphs?: string[];
  stats?: { value: string; label: string }[];
}

export interface CaseStudyPhase {
  phase: string;
  title: string;
  desc: string;
  tag: string;
}

export interface CaseStudyApproach {
  headline?: string;
  phases?: CaseStudyPhase[];
  quote?: { text: string; author: string };
}

export interface CaseStudyFeature {
  title: string;
  desc: string;
  tech: string;
}

export interface CaseStudyResultsData {
  stats?: { value: string; label: string }[];
  quote?: { text: string; author: string };
}

export interface CaseStudyFrontmatter extends BaseFrontmatter {
  client: string;
  industry: string;
  services: string[];
  results?: string[];
  statusBadge?: string;
  indexNumber?: string;
  monogram?: string;
  order?: number;
  categoryBadge?: string;
  filterCategories?: string[];
  subtitle?: string;
  metrics?: CaseStudyMetric[];
  stack?: string[];
  heroTitle?: CaseStudyHeroTitle;
  metadataStrip?: CaseStudyMetadataStrip;
  telemetry?: CaseStudyTelemetry;
  problem?: CaseStudyProblem;
  approach?: CaseStudyApproach;
  features?: CaseStudyFeature[];
  resultsData?: CaseStudyResultsData;
}

export interface ContentItem<T = Record<string, any>> {
  slug: string;
  frontmatter: T;
  content: string;
}

/**
 * Ensure directory exists to prevent runtime crashes
 */
function ensureDirExists(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

/**
 * Returns all items for a given content type sorted by publishedAt descending
 */
export async function getAllContent<T = Record<string, any>>(
  type: ContentType
): Promise<ContentItem<T>[]> {
  const dirPath = path.join(contentDirectory, type);
  ensureDirExists(dirPath);

  const fileNames = fs.readdirSync(dirPath).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const items = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx?$/, "");
    const fullPath = path.join(dirPath, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: (data.slug as string) || slug,
      frontmatter: {
        ...data,
        slug: (data.slug as string) || slug,
      } as T,
      content,
    };
  });

  return items.sort((a: any, b: any) => {
    if (a.frontmatter.order !== undefined && b.frontmatter.order !== undefined) {
      return a.frontmatter.order - b.frontmatter.order;
    }
    const dateA = a.frontmatter.publishedAt ? new Date(a.frontmatter.publishedAt).getTime() : 0;
    const dateB = b.frontmatter.publishedAt ? new Date(b.frontmatter.publishedAt).getTime() : 0;
    return dateB - dateA;
  });
}

/**
 * Returns a single item with full MDX content by slug
 */
export async function getContentBySlug<T = Record<string, any>>(
  type: ContentType,
  slug: string
): Promise<ContentItem<T> | null> {
  const dirPath = path.join(contentDirectory, type);
  ensureDirExists(dirPath);

  const candidates = [
    path.join(dirPath, `${slug}.mdx`),
    path.join(dirPath, `${slug}.md`),
  ];

  for (const filePath of candidates) {
    if (fs.existsSync(filePath)) {
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug: (data.slug as string) || slug,
        frontmatter: {
          ...data,
          slug: (data.slug as string) || slug,
        } as T,
        content,
      };
    }
  }

  // Fallback check: find if any file inside dir has matching slug in frontmatter
  const all = await getAllContent<T>(type);
  const matched = all.find((item) => item.slug === slug);
  return matched || null;
}

/**
 * Returns related items by category or shared tags
 */
export async function getRelatedContent<T extends Record<string, any>>(
  type: ContentType,
  currentSlug: string,
  limit: number = 3
): Promise<ContentItem<T>[]> {
  const all = await getAllContent<T>(type);
  const current = all.find((item) => item.slug === currentSlug);

  if (!current) {
    return all.filter((item) => item.slug !== currentSlug).slice(0, limit);
  }

  const otherItems = all.filter((item) => item.slug !== currentSlug);

  return otherItems
    .sort((a: any, b: any) => {
      let scoreA = 0;
      let scoreB = 0;

      if (a.frontmatter.category && a.frontmatter.category === current.frontmatter.category) {
        scoreA += 2;
      }
      if (b.frontmatter.category && b.frontmatter.category === current.frontmatter.category) {
        scoreB += 2;
      }

      const currentTags = current.frontmatter.tags || [];
      const tagsA = a.frontmatter.tags || [];
      const tagsB = b.frontmatter.tags || [];

      scoreA += tagsA.filter((t: string) => currentTags.includes(t)).length;
      scoreB += tagsB.filter((t: string) => currentTags.includes(t)).length;

      return scoreB - scoreA;
    })
    .slice(0, limit);
}
