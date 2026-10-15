import fs from "node:fs";
import path from "node:path";
import { Marked } from "marked";

const CONTENT_DIR = path.join(/* turbopackIgnore: true */ process.cwd(), "content");

// Maps a URL slug to its Markdown file: [] -> index.md, ["blog", "x"] -> blog/x.md or blog/x/index.md
function resolveFile(slug: string[]): string | null {
  const base = path.join(CONTENT_DIR, ...slug);
  for (const candidate of [`${base}.md`, path.join(base, "index.md")]) {
    if (fs.existsSync(candidate)) return candidate;
  }
  return null;
}

export function getAllSlugs(dir = CONTENT_DIR, prefix: string[] = []): string[][] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (entry.isDirectory()) return getAllSlugs(path.join(dir, entry.name), [...prefix, entry.name]);
    if (!entry.name.endsWith(".md")) return [];
    const name = entry.name.replace(/\.md$/, "");
    return [name === "index" ? prefix : [...prefix, name]];
  });
}

// Rewrites relative links like "blog/post.md" to clean absolute routes like "/blog/post"
function rewriteHref(href: string, fileDir: string): string {
  if (!href || /^[a-z]+:|^#|^\//i.test(href) || !href.endsWith(".md")) return href;
  const route = path.posix
    .join("/", path.relative(CONTENT_DIR, fileDir), href)
    .replace(/\.md$/, "")
    .replace(/\/index$/, "");
  return route || "/";
}

export function getPage(slug: string[]): { title: string | null; html: string } | null {
  const file = resolveFile(slug);
  if (!file) return null;
  const markdown = fs.readFileSync(file, "utf8");
  const fileDir = path.dirname(file);
  const marked = new Marked({
    walkTokens(token) {
      if (token.type === "link") token.href = rewriteHref(token.href, fileDir);
    },
  });
  const title = markdown.match(/^#\s+(.+)$/m)?.[1] ?? null;
  return { title, html: marked.parse(markdown, { async: false }) };
}
