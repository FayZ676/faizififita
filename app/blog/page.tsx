import type { Metadata } from "next";
import { Footer, Nav } from "../site";
import { formatDate, posts } from "./posts";

const description = "Claude interviews me about the things I build, then writes up what I said.";

export const metadata: Metadata = {
  title: "Blog — Faizi Fifita",
  description,
  openGraph: { title: "Blog — Faizi Fifita", description, url: "/blog", siteName: "Faizi Fifita", type: "website" },
};

export default function BlogPage() {
  return (
    <>
      <Nav section="blog" />
      <main>
        <header className="intro">
          <h1>
            Blog. <span>Interviews about what I build.</span>
          </h1>
          <p className="bio">
            For each piece, Claude interviews me about one of my projects, then writes it up.
            The quotes are mine, and the questions and the writing are Claude's.
          </p>
        </header>

        <h2 className="section-title">Posts</h2>
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.slug}>
              <a href={`/blog/${post.slug}`}>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </a>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
