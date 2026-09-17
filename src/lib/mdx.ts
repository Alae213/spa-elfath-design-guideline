import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type GuidelineFrontmatter = {
  title: string;
  description?: string;
  category?: string;
  platforms?: string[];
  order?: number;
};

export type GuidelineDoc = {
  slug: string[];
  slugString: string;
  frontmatter: GuidelineFrontmatter;
  content: string;
};

const CONTENT_DIR = path.join(process.cwd(), "src/content/guidelines");

export function getAllSlugs(): string[][] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const slugs: string[][] = [];
  function walk(dir: string, prefix: string[]) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      if (e.isDirectory()) walk(path.join(dir, e.name), [...prefix, e.name]);
      else if (e.isFile() && (e.name.endsWith(".mdx") || e.name.endsWith(".md"))) {
        const name = e.name.replace(/\.mdx?$/, "");
        slugs.push([...prefix, name]);
      }
    }
  }
  walk(CONTENT_DIR, []);
  return slugs;
}

export function getDocBySlug(slug: string[]): GuidelineDoc | null {
  const base = path.join(CONTENT_DIR, ...slug);
  const mdxPath = `${base}.mdx`;
  const mdPath = `${base}.md`;
  let filePath: string | null = null;
  if (fs.existsSync(mdxPath)) filePath = mdxPath;
  else if (fs.existsSync(mdPath)) filePath = mdPath;
  else {
    // try index.mdx inside folder
    const idxMdx = path.join(base, "index.mdx");
    const idxMd = path.join(base, "index.md");
    if (fs.existsSync(idxMdx)) filePath = idxMdx;
    else if (fs.existsSync(idxMd)) filePath = idxMd;
  }
  if (!filePath) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    slugString: slug.join("/"),
    frontmatter: data as GuidelineFrontmatter,
    content,
  };
}

export function getAllDocs(): GuidelineDoc[] {
  return getAllSlugs()
    .map((s) => getDocBySlug(s))
    .filter((d): d is GuidelineDoc => d !== null)
    .sort((a, b) => (a.frontmatter.order ?? 999) - (b.frontmatter.order ?? 999));
}
