import { DemoVideo } from "./demo-video";

type Link = { label: string; href: string };

type Project = {
  name: string;
  description: string;
  action: Link & { note?: string };
  source?: string;
  media:
    | { kind: "image"; src: string; alt: string; width: number; height: number }
    | { kind: "video"; src: string; poster: string; label: string };
};

const projects: Project[] = [
  {
    name: "/job",
    description:
      "A free, open-source Claude Code skill that searches job boards, tailors your resume to each posting, and fills in the application for you to submit.",
    action: { label: "Visit slashjob.co", href: "https://slashjob.co" },
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
    description:
      "A minimal Markdown editor for the Mac, with focus mode and typewriter scrolling. Your writing stays as plain-text files in a folder.",
    action: {
      label: "Download for Mac",
      href: "https://github.com/FayZ676/quill/releases/download/v1.0.0/Quill-1.0.0.dmg",
      note: "macOS 13 or later, 1.5 MB",
    },
    source: "https://github.com/FayZ676/quill",
    media: {
      kind: "image",
      src: "/projects/quill.webp",
      alt: "Quill in dark mode with focus mode on: the heading is sharp and the paragraphs below are dimmed.",
      width: 1600,
      height: 1105,
    },
  },
  {
    name: "Verses",
    description:
      "An iPhone and iPad app for memorizing Bahá'í prayers, the Hidden Words, and Ruhi quotations. Hide a word, recite what's left, and hide a few more each time.",
    action: {
      label: "View on the App Store",
      href: "https://apps.apple.com/us/app/verses-bah%C3%A1%C3%AD-memorization/id6788610583",
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
      "Turns a book into a multi-voice audiobook. It clones a narrator's voice from ten seconds of audio and gives every character in the text its own voice.",
    action: { label: "View on GitHub", href: "https://github.com/FayZ676/audiobook-generator" },
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

export default function Home() {
  return (
    <main>
      <header className="intro">
        <h1>Faizi</h1>
        <p className="lede">I build apps and tools. These are some of my favorites.</p>
        <p className="social">
          <a href="https://x.com/faizif5a">X</a>
          <a href="https://www.youtube.com/@faizif5a">YouTube</a>
        </p>
      </header>

      <h2 className="visually-hidden">Projects</h2>
      {projects.map((project) => (
        <article key={project.name} className="project">
          <div className="plate">
            <Media media={project.media} />
          </div>
          <div className="details">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="actions">
              <a className="button" href={project.action.href}>
                {project.action.label}
              </a>
              {project.source && <a href={project.source}>Source</a>}
            </div>
            {project.action.note && <p className="note">{project.action.note}</p>}
          </div>
        </article>
      ))}
    </main>
  );
}
