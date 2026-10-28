import type { Metadata } from "next";
import type { ComponentType, ReactNode } from "react";
import {
  CloudIcon,
  DownloadIcon,
  EyeIcon,
  FileTextIcon,
  GitHubIcon,
  GraphIcon,
  LaptopIcon,
  PhoneIcon,
  TerminalIcon,
  TextCursorIcon,
} from "../icons";
import { latestRelease } from "../release";
import { Gallery, type Shot } from "../gallery";
import { ReleaseNote } from "../release-note";
import { Footer, Nav } from "../site";
import { quillDownload, quillRelease, quillSource } from "./release";

const description =
  "Quill is a minimal Markdown editor for the Mac, iPhone and iPad, with focus mode, typewriter scrolling and a terminal for Claude Code or Codex.";

export const metadata: Metadata = {
  title: "Quill — a quiet place to write",
  description,
  openGraph: { title: "Quill — a quiet place to write", description, url: "/quill", siteName: "Faizi Fifita", type: "website" },
};

// The standouts, each with a line of its own
const features: { title: string; icon: ComponentType<{ className?: string }>; text: ReactNode }[] = [
  { title: "Focus mode", icon: EyeIcon, text: "Dims everything except the sentence or paragraph you're writing." },
  { title: "Typewriter scrolling", icon: TextCursorIcon, text: "The line you're on stays in the middle of the screen." },
  {
    title: "Wikilinks and graph",
    icon: GraphIcon,
    text: "Link one note to another with [[double brackets]], as in Obsidian, and see them all as a map you can wander around.",
  },
  {
    title: "Terminal",
    icon: TerminalIcon,
    text: "Open a terminal under the page on the Mac and Claude Code or Codex starts knowing which note you have open, so you can ask about this note or your whole library.",
  },
  {
    title: "Plain Markdown files",
    icon: FileTextIcon,
    text: "Your writing lives in a folder you choose, organized however you like. Open an Obsidian vault and it just works.",
  },
  {
    title: "iCloud sync",
    icon: CloudIcon,
    text: (
      <>
        Keep your library in iCloud Drive and your files are there on every Mac, and soon your{" "}
        <a href="#iphone-and-ipad">iPhone and iPad</a>.
      </>
    ),
  },
];

// Everything else, listed in brief under the standouts
const moreFeatures = [
  "Go To any note by typing part of its name",
  "Markdown cheat sheet",
  "Formatting shortcuts",
  "Markdown highlighted as you type",
  "Task lists you tick with a click",
  "Numbered lists and dividers",
  "Sans, Serif and Mono typefaces",
  "Word count and reading time",
  "Light, Dark or System appearance",
  "Folder counts in the library",
  "Move notes by typing a folder's path",
  "Spelling and substitution options",
  "Automatic updates on the Mac",
];

// Each gallery runs from the calmest screen to the busiest.
const macShots: Shot[] = [
  {
    src: "/quill/mac-focusmode.webp",
    alt: "Quill on the Mac in focus mode with the sidebar and toolbar hidden: only the sentence being written is sharp.",
  },
  {
    src: "/quill/mac-filetree.webp",
    alt: "Quill on the Mac with an Obsidian journal open: nested folders in the sidebar, each with a count of what it holds.",
  },
  {
    src: "/quill/mac-knowledgegraph.webp",
    alt: "Quill's graph on the Mac: hundreds of notes as dots, with lines for the links between them.",
  },
  {
    src: "/quill/mac-terminal.webp",
    alt: "Quill on the Mac with an essay open and the terminal under it, where Claude Code suggests which other notes the essay should link to.",
  },
].map((shot) => ({ ...shot, width: 1600, height: 1135, className: "mac" }));

const phone = { width: 736, height: 1600, className: "phone" };

const deviceShots: Shot[] = [
  {
    src: "/quill/iphone-focus.webp",
    alt: "Quill on iPhone in focus mode: the first sentence of an essay is sharp and the rest of the page is dimmed.",
    ...phone,
  },
  {
    src: "/quill/iphone-library.webp",
    alt: "Quill's library on iPhone: folders for drafts, essays, family, a journal, notes and recipes, each with a count.",
    ...phone,
  },
  {
    src: "/quill/iphone-journal-dark.webp",
    alt: "A journal entry in Quill on iPhone in dark mode, with ticked tasks and links to other notes.",
    ...phone,
  },
  {
    src: "/quill/ipad-markdown-dark.webp",
    alt: "An essay in Quill on iPad in dark mode, with Markdown headings, a list, a quote and links to other notes.",
    width: 1200,
    height: 1600,
    className: "tablet",
  },
  {
    src: "/quill/iphone-graph-dark.webp",
    alt: "Quill's graph on iPhone in dark mode: a cluster of linked notes, with a few on their own around it.",
    ...phone,
  },
];

export default async function QuillPage() {
  const release = await latestRelease(quillRelease.repo, quillRelease.asset);

  return (
    <>
      <Nav />

      <main>
        <header className="intro">
          <img className="app-icon" src="/quill/icon.webp" alt="Quill's icon" width={256} height={256} />
          <h1>
            Quill. <span>A quiet place to write.</span>
          </h1>
          <p className="bio">
            Quill is a minimal Markdown editor that combines my favorite parts of{" "}
            <a href="https://ia.net/writer">iA Writer</a> and <a href="https://obsidian.md">Obsidian</a> plus some of
            my own thoughtful conveniences. Everything you write is a plain Markdown file in a folder you choose, so it opens in any other app, today or twenty
            years from now.
          </p>
        </header>

        <section className="showcase">
          <h2 className="section-title">Features</h2>
          <ul className="features">
            {features.map((feature) => (
              <li key={feature.title}>
                <feature.icon className="feature-icon" />
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </li>
            ))}
          </ul>
          <h3 className="more-features-title">And also</h3>
          <ul className="more-features">
            {moreFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className="showcase">
          <h2 className="section-title">
            <LaptopIcon className="icon" />
            Mac
          </h2>
          <div className="showcase-text">
            <p>
              Your folders and files in a sidebar, the page in the middle, and nothing else in the way. When you want a
              second opinion, open the terminal under the page and ask Claude Code or Codex about the note you're on.
            </p>
            <div className="actions">
              <a className="button" href={quillDownload}>
                <DownloadIcon className="icon" />
                Download for Mac
              </a>
              <a className="button secondary" href={quillSource}>
                <GitHubIcon className="icon" />
                Source
              </a>
            </div>
            <ReleaseNote {...quillRelease} note="macOS 13 or later" initial={release} />
          </div>
          <Gallery shots={macShots} label="Quill on the Mac" className="stage" />
        </section>

        <section className="showcase" id="iphone-and-ipad">
          <h2 className="section-title">
            <PhoneIcon className="icon" />
            iPhone and iPad
          </h2>
          <div className="showcase-text">
            <p>
              Open the same library from iCloud Drive and pick up a draft wherever you left it, with the same focus mode
              and a Markdown toolbar above the keyboard.
            </p>
            <div className="actions">
              <span className="button secondary soon" aria-disabled="true">
                Coming soon to the App Store
              </span>
            </div>
          </div>
          <Gallery shots={deviceShots} label="Quill on iPhone and iPad" className="stage devices" />
        </section>
      </main>

      <Footer />
    </>
  );
}
