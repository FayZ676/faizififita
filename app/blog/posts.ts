// Every post, newest first, shared by the blog's index and each post's own page
export type Post = { slug: string; title: string; description: string; date: string };

export const posts: Post[] = [
  {
    slug: "verses",
    title: "The Verses I meant to build",
    description:
      "Verses began as an afternoon's experiment to help me pray from memory. It took four months, a new way of listening, and a lot of taking things away to become the app I wanted all along.",
    date: "2026-10-30",
  },
];

export function post(slug: string) {
  return posts.find((post) => post.slug === slug)!;
}

// "2026-10-30" reads as "October 30, 2026", in UTC so the day never shifts with the build machine's time zone
export function formatDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
