type Link = { label: string; href: string; note?: string };

type Project = {
  name: string;
  description: string;
  links: Link[];
};

const projects: Project[] = [
  {
    name: "/job",
    description:
      "A free, open-source Claude Code skill that searches job boards, tailors your resume to each posting, and fills in the application for you to submit.",
    links: [
      { label: "slashjob.co", href: "https://slashjob.co" },
      { label: "Source", href: "https://github.com/slashjob/job" },
    ],
  },
  {
    name: "Quill",
    description:
      "A minimal Markdown editor for the Mac, with focus mode and typewriter scrolling. Your writing stays as plain-text files in a folder.",
    links: [
      {
        label: "Download for Mac",
        href: "https://github.com/FayZ676/quill/releases/download/v1.0.0/Quill-1.0.0.dmg",
        note: "macOS 13+, 1.5 MB",
      },
      { label: "Source", href: "https://github.com/FayZ676/quill" },
    ],
  },
  {
    name: "Verses",
    description:
      "An iPhone and iPad app for memorizing Bahá'í prayers, the Hidden Words, and Ruhi quotations. Hide a word, recite what's left, and hide a few more each time.",
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/verses-bah%C3%A1%C3%AD-memorization/id6788610583",
      },
    ],
  },
  {
    name: "Audiobook generator",
    description:
      "Turns a book into a multi-voice audiobook. It clones a narrator's voice from ten seconds of audio and gives every character in the text its own voice.",
    links: [{ label: "Source", href: "https://github.com/FayZ676/audiobook-generator" }],
  },
];

const elsewhere: Link[] = [
  { label: "X", href: "https://x.com/faizif5a" },
  { label: "YouTube", href: "https://www.youtube.com/@faizif5a" },
];

function Links({ links }: { links: Link[] }) {
  return (
    <ul className="links">
      {links.map((link) => (
        <li key={link.href}>
          <a href={link.href}>{link.label}</a>
          {link.note && <span className="note">{link.note}</span>}
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <main>
      <header>
        <h1>Faizi</h1>
        <p>I build apps and tools. These are some of my favorites.</p>
      </header>

      <section className="section">
        <h2>Projects</h2>
        <div>
          {projects.map((project) => (
            <article key={project.name} className="project">
              <h3>{project.name}</h3>
              <div>
                <p>{project.description}</p>
                <Links links={project.links} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Elsewhere</h2>
        <Links links={elsewhere} />
      </section>
    </main>
  );
}
