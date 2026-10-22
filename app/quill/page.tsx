import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DownloadIcon, GitHubIcon, LaptopIcon, PhoneIcon } from "../icons";
import { latestRelease } from "../release";
import { ReleaseNote } from "../release-note";
import { Footer, Nav } from "../site";
import { quillDownload, quillRelease, quillSource } from "./release";

const description =
  "Quill is a minimal Markdown editor for the Mac, iPhone and iPad, with focus mode and typewriter scrolling.";

export const metadata: Metadata = {
  title: "Quill — a quiet place to write",
  description,
  openGraph: { title: "Quill — a quiet place to write", description, url: "/quill", siteName: "Faizi Fifita", type: "website" },
};

const features: { title: string; text: ReactNode }[] = [
  { title: "Focus mode", text: "Dims everything except the sentence or paragraph you're writing." },
  { title: "Typewriter scrolling", text: "The line you're on stays in the middle of the screen." },
  { title: "Plain Markdown files", text: "Your writing lives in a folder you choose, organized however you like." },
  {
    title: "iCloud sync",
    text: (
      <>
        Keep your library in iCloud Drive and your files are there on every Mac, and soon your{" "}
        <a href="#iphone-and-ipad">iPhone and iPad</a>.
      </>
    ),
  },
  { title: "Formatting shortcuts", text: "Bold, italic, links and more from the keyboard, highlighted as you type." },
  { title: "iA Writer fonts", text: "Write in Mono, Duo or Quattro, at whatever size you like." },
  { title: "Word count", text: "Words and reading time at the bottom of the page." },
];

const phones = [
  { src: "/quill/iphone-focus.webp", alt: "Quill on iPhone in focus mode: one sentence is sharp and the rest of the page is dimmed." },
  { src: "/quill/iphone-markdown-dark.webp", alt: "Quill on iPhone in dark mode, showing an essay with Markdown headings, bold and italics." },
  { src: "/quill/iphone-library.webp", alt: "Quill's library on iPhone: folders for essays, a journal and notes, and two drafts." },
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
            <a href="https://ia.net/writer">iA Writer</a> and <a href="https://obsidian.md">Obsidian</a>. Everything
            you write is a plain Markdown file in a folder you choose, so it opens in any other app, today or twenty
            years from now.
          </p>
        </header>

        <section className="showcase">
          <h2 className="section-title">Features</h2>
          <ul className="features">
            {features.map((feature) => (
              <li key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="showcase">
          <h2 className="section-title">
            <LaptopIcon className="icon" />
            Mac
          </h2>
          <div className="showcase-text">
            <p>Your folders and files in a sidebar, the page in the middle, and nothing else in the way.</p>
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
          <div className="stage">
            <img
              className="mac"
              src="/projects/quill.webp"
              alt="Quill on the Mac in dark mode with focus mode on: the heading is sharp and the paragraphs below are dimmed."
              width={1600}
              height={1058}
            />
          </div>
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
          <div className="stage phones">
            {phones.map((phone) => (
              <img key={phone.src} className="phone" src={phone.src} alt={phone.alt} width={736} height={1600} loading="lazy" />
            ))}
          </div>
          <div className="stage">
            <img
              className="tablet"
              src="/quill/ipad-focus.webp"
              alt="Quill on iPad in focus mode, with the Markdown toolbar above the keyboard."
              width={1200}
              height={1600}
              loading="lazy"
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
