import type { ReactNode } from "react";
import { latestRelease } from "./release";
import { ReleaseNote } from "./release-note";
import { DownloadIcon, ExternalIcon, GitHubIcon, MailIcon } from "./icons";
import { quillDownload, quillRelease, quillSource } from "./quill/release";
import { triviaUrl } from "./trivia/release";
import { versesAppStore } from "./verses/release";
import { ContactLink } from "./contact";
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
  // The app's icon, shown beside its name
  icon?: string;
  // A page of its own that the name and screenshot link to
  page?: string;
  media: { src: string; alt: string; width: number; height: number };
};

const projects: Project[] = [
  {
    name: "Quill",
    description: (
      <>
        Quill is a minimal Markdown editor that combines my favorite parts of{" "}
        <a href="https://ia.net/writer">iA Writer</a> and <a href="https://obsidian.md">Obsidian</a> plus some of my own
        thoughtful conveniences. Everything you write is a plain Markdown file in a folder you choose.
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
    icon: "/quill/icon.webp",
    media: {
      src: "/quill/mac-filetree.webp",
      alt: "Quill on the Mac with an Obsidian journal open: nested folders in the sidebar, each with a count of what it holds.",
      width: 1600,
      height: 1135,
    },
  },
  {
    name: "Verses",
    description:
      "An iPhone and iPad app for memorizing Bahá'í prayers by hiding the words you know and saying them out loud.",
    action: {
      label: "View on the App Store",
      href: versesAppStore,
      kind: "external",
    },
    page: "/verses",
    icon: "/verses/icon.webp",
    media: {
      src: "/verses/prayer.webp",
      alt: "A prayer in Verses on iPhone, with the words already hidden shown lighter, above the Hide and Recite buttons.",
      width: 736,
      height: 1600,
    },
  },
  {
    name: "Bahá'í Daily Trivia",
    description:
      "A daily Bahá'í trivia game. Five new questions every day, from easy to hard, and everyone gets the same ones. Every question cites its source in the Bahá'í Reference Library.",
    action: { label: "Play today's questions", href: triviaUrl, kind: "external" },
    page: "/trivia",
    icon: "/trivia/icon.svg",
    media: {
      src: "/trivia/answered.webp",
      alt: "A question answered right in Bahá'í Daily Trivia, with why it's right and a link to the passage in the Will and Testament of 'Abdu'l-Bahá.",
      width: 1600,
      height: 1135,
    },
  },
  {
    name: "/job",
    description:
      "A free, open-source job search and networking tool that runs on Claude Code and Next JS. It finds leads, their email addresses, and helps you draft cold emails.",
    action: { label: "View on GitHub", href: "https://github.com/slashjob/job", kind: "github" },
    page: "/job",
    icon: "/job/icon.svg",
    media: {
      src: "/job/feed.webp",
      alt: "The /job dashboard: a feed of companies found in the news, each with why it matches one of your projects.",
      width: 1600,
      height: 1440,
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
      src: "/projects/audiobook.webp",
      alt: "The audiobook generator generating narration for a chapter, with each line of dialogue assigned to a character's voice.",
      width: 1600,
      height: 1197,
    },
  },
];

function Media({ media }: { media: Project["media"] }) {
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

// The project's anchor, for links straight to it: "Audiobook generator" is #audiobook-generator, "Bahá'í" is #bahai
function slug(name: string) {
  return name
    .normalize("NFD")
    .replace(/[̀-ͯ'’]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
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
          <div className="actions">
            <ContactLink className="button secondary" icon={<MailIcon className="icon" />}>
              Email me
            </ContactLink>
          </div>
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
                {project.icon && (
                  <img className="project-icon" src={project.icon} alt="" width={256} height={256} loading="lazy" />
                )}
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
