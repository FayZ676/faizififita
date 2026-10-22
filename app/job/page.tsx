import type { Metadata } from "next";
import { GitHubIcon } from "../icons";
import { Footer, Nav } from "../site";

const source = "https://github.com/slashjob/job";

const description =
  "/job is a free, open-source job search tool that runs on Claude Code: it finds companies building what you've built, their openings, and who to write to.";

export const metadata: Metadata = {
  title: "/job — automate your job search, for free",
  description,
  openGraph: { title: "/job — automate your job search, for free", description, url: "/job", siteName: "Faizi Fifita", type: "website" },
};

const features = [
  { title: "Companies building what you've built", text: "Reads the news for companies working on the same problems as your projects." },
  { title: "Openings that fit", text: "Their jobs, judged against your profile and the instructions you give it in plain words." },
  { title: "Who to write to", text: "The people at each company worth reaching, and their email addresses." },
  { title: "Cold emails, drafted with you", text: "Written in your voice from what you've actually done, and left for you to send." },
  { title: "A resume for every job", text: "Tailored to the posting, without stretching a single fact." },
  { title: "Applications filled in", text: "Left open in your browser for you to check and submit. It never clicks submit." },
  { title: "Never makes things up", text: "A question your profile can't answer gets asked, not guessed." },
  { title: "Runs on your computer", text: "No account and no server. Your data stays on your machine." },
];

const install =
  "Install /job: clone https://github.com/slashjob/job.git into ~/.claude/skills/job, then follow ~/.claude/skills/job/references/install.md";

export default function JobPage() {
  return (
    <>
      <Nav />

      <main>
        <header className="intro">
          <img className="app-icon" src="/job/icon.svg" alt="/job's icon" width={256} height={256} />
          <h1>
            /job. <span>Automate your job search, for free.</span>
          </h1>
          <p className="bio">
            /job is a free, open-source job search and networking tool that runs on Claude Code. Instead of scrolling
            job boards, it finds companies in the news building what you've already built, the openings there that fit
            you, and the people to write to, then helps you write to them.
          </p>
          <p className="bio">
            You'll need <a href="https://code.claude.com/docs/en/quickstart">Claude Code</a> and Chrome or Edge. Paste
            this into Claude Code and it walks you through the rest in about 10 to 15 minutes.
          </p>
          <p className="snippet">{install}</p>
          <div className="actions">
            <a className="button secondary" href={source}>
              <GitHubIcon className="icon" />
              Source
            </a>
          </div>
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
          <h2 className="section-title">The dashboard</h2>
          <div className="showcase-text">
            <p>
              Every company /job finds, with the news that turned it up and which of your projects it matches. Type to
              /job at the bottom of the page, or start a run from a button, without opening a terminal.
            </p>
          </div>
          <div className="stage">
            <img
              className="mac"
              src="/job/feed.webp"
              alt="The /job dashboard: a feed of companies found in the news, each with why it matches one of your projects, above the /job message box."
              width={1600}
              height={1440}
            />
          </div>
          <div className="showcase-text">
            <p>Each company gets a page of its own: the news, the openings that fit you, and the people to write to.</p>
          </div>
          <div className="stage">
            <img
              className="mac"
              src="/job/company.webp"
              alt="Deepgram's page in /job: a news story about its voice AI matched to a transcription project, and a Solutions Architect opening."
              width={1600}
              height={992}
              loading="lazy"
            />
          </div>
          <div className="showcase-text">
            <p>And each opening is one click from a tailored resume, a filled-in application, or a note to someone there.</p>
          </div>
          <div className="stage">
            <img
              className="mac"
              src="/job/job.webp"
              alt="A Solutions Architect opening at Deepgram in /job, with its location, pay and posting, and buttons to apply or contact someone."
              width={1600}
              height={1072}
              loading="lazy"
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
