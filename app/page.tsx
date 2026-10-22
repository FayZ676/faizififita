import type { ReactNode } from "react";
import { DemoVideo } from "./demo-video";
import { latestRelease } from "./release";
import { ReleaseNote } from "./release-note";
import { DownloadIcon, ExternalIcon, GitHubIcon } from "./icons";
import { quillDownload, quillRelease, quillSource } from "./quill/release";
import { Footer, Nav } from "./site";

type Link = { label: string; href: string };

type Project = {
  name: string;
  description: ReactNode;
  // "download" saves a file, "github" opens the repo, "external" opens another site
  action: Link & { kind: "download" | "github" | "external"; note?: string };
  // A GitHub repo and release download whose version and size join the note
  release?: { repo: string; asset: string };
  source?: string;
  // A page of its own that the name and screenshot link to
  page?: string;
  media:
    | { kind: "image"; src: string; alt: string; width: number; height: number }
    | { kind: "video"; src: string; poster: string; label: string };
};

const projects: Project[] = [
  {
    name: "/job",
    description:
      "A free, open-source job search and networking tool that runs on Claude Code and Next JS. It finds leads, their email addresses, and helps you draft cold emails.",
    action: { label: "Visit slashjob.co", href: "https://slashjob.co", kind: "external" },
    source: "https://github.com/slashjob/job",
    media: {
      kind: "video",
      src: "/projects/job.mp4",
      poster: "/projects/job-poster.webp",
      label: "Play the /job demo video",
    },
  },
  {
    name: "Quill",
    description: (
      <>
        A minimal Markdown editor for the Mac (and soon iPhone and iPad) that combines my favorite features from my two favorite writing apps;{" "}
        <a href="https://ia.net/writer">iA Writer</a> and <a href="https://obsidian.md">Obsidian</a>
      </>
    ),
    action: {
      label: "Download for Mac",
      href: quillDownload,
      kind: "download",
      note: "macOS 13 or later",
    },
    release: quillRelease,
    source: quillSource,
    page: "/quill",
    media: {
      kind: "image",
      src: "/projects/quill.webp",
      alt: "Quill in dark mode with focus mode on: the heading is sharp and the paragraphs below are dimmed.",
      width: 1600,
      height: 1058,
    },
  },
  {
    name: "Verses",
    description:
      "An iPhone and iPad app for memorizing Bahá'í scripture by reciting out loud or in your head.",
    action: {
      label: "View on the App Store",
      href: "https://apps.apple.com/us/app/verses-bah%C3%A1%C3%AD-memorization/id6788610583",
      kind: "external",
    },
    media: {
      kind: "image",
      src: "/projects/verses.webp",
      alt: "Verses on iPhone, showing a prayer with some words hidden as blanks.",
      width: 736,
      height: 1600,
    },
  },
  {
    name: "Audiobook generator",
    description:
      "An AI generated audiobook studio. Put in your your text and get an audiobook in minutes. Every character has their own voice, and you can add new voices with 10 seconds of audio.",
    action: {
      label: "View on GitHub",
      href: "https://github.com/FayZ676/audiobook-generator",
      kind: "github",
    },
    media: {
      kind: "image",
      src: "/projects/audiobook.webp",
      alt: "The audiobook generator generating narration for a chapter, with each line of dialogue assigned to a character's voice.",
      width: 1600,
      height: 1197,
    },
  },
];

function Media({ media }: { media: Project["media"] }) {
  if (media.kind === "video") {
    return <DemoVideo src={media.src} poster={media.poster} label={media.label} />;
  }
  const portrait = media.height > media.width;
  return (
    <img
      src={media.src}
      alt={media.alt}
      width={media.width}
      height={media.height}
      loading="lazy"
      className={portrait ? "portrait" : undefined}
    />
  );
}

function ActionButton({ action }: { action: Project["action"] }) {
  return (
    <a className="button" href={action.href}>
      {action.kind === "download" && <DownloadIcon className="icon" />}
      {action.kind === "github" && <GitHubIcon className="icon" />}
      {action.label}
      {action.kind === "external" && <ExternalIcon className="icon" />}
    </a>
  );
}

// The project's anchor, for links straight to it: "Audiobook generator" is #audiobook-generator
function slug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export default async function Home() {
  const releases = await Promise.all(
    projects.map((project) => project.release && latestRelease(project.release.repo, project.release.asset)),
  );

  return (
    <>
      <Nav />

      <main>
        <header className="intro">
          <img className="portrait-photo" src="/faizi.webp" alt="Faizi, smiling, against an orange background" width={400} height={400} />
          <h1>Building is my love language.</h1>
          <p className="bio">
            I'm Faizi, a software engineer, husband, and dad of two boys. My day job is
            building AI tools for banking and finance. Outside of work I build things to make my life and the lives of
            the people I care about a little better.
          </p>
          <p className="bio">
            Every app I make is my way of saying <i>I have this problem too and I made you something</i>.
          </p>
        </header>

        <h2 className="section-title">Projects</h2>
        {projects.map((project, i) => (
          <article key={project.name} id={slug(project.name)} className="project">
            {project.page ? (
              <a className="plate" href={project.page} aria-label={`More about ${project.name}`}>
                <Media media={project.media} />
              </a>
            ) : (
              <div className="plate">
                <Media media={project.media} />
              </div>
            )}
            <div className="details">
              <h3>
                <a
                  className={project.page ? "anchor page" : "anchor"}
                  href={project.page ?? `#${slug(project.name)}`}
                >
                  {project.name}
                </a>
              </h3>
              <p>{project.description}</p>
              <div className="actions">
                <ActionButton action={project.action} />
                {project.source && (
                  <a className="button secondary" href={project.source}>
                    <GitHubIcon className="icon" />
                    Source
                  </a>
                )}
              </div>
              {project.release ? (
                <ReleaseNote {...project.release} note={project.action.note ?? ""} initial={releases[i] ?? null} />
              ) : (
                project.action.note && <p className="note">{project.action.note}</p>
              )}
            </div>
          </article>
        ))}
      </main>

      <Footer />
    </>
  );
}
