import { readFile } from "node:fs/promises";
import { extname, join } from "node:path";

// Link previews use 1200×630, the size every platform crops to
export const size = { width: 1200, height: 630 };

// next/og can't decode WebP, so the previews read PNG (or SVG) copies kept here
export async function ogAsset(name: string) {
  const data = await readFile(join(process.cwd(), "app/_og", name));
  const type = extname(name) === ".svg" ? "image/svg+xml" : "image/png";
  return `data:${type};base64,${data.toString("base64")}`;
}
