import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSlugs, getPage } from "@/lib/content";

type Props = { params: Promise<{ slug?: string[] }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug = [] } = await params;
  const title = getPage(slug)?.title;
  return title ? { title } : {};
}

export default async function Page({ params }: Props) {
  const { slug = [] } = await params;
  const page = getPage(slug);
  if (!page) notFound();
  return <article className="markdown-body" dangerouslySetInnerHTML={{ __html: page.html }} />;
}
