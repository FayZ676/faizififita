import type { Metadata } from "next";
import {
  BarChartIcon,
  BookOpenIcon,
  CalendarIcon,
  ExternalIcon,
  LaptopIcon,
  LockIcon,
  MailIcon,
  SignalIcon,
} from "../icons";
import { Gallery, type Shot } from "../gallery";
import { Features, Intro, ProductPage, Showcase, ShowcaseText, type Feature } from "../product";
import { triviaUrl } from "./release";

const description =
  "Bahá'í Daily Trivia is a daily trivia game: five new questions every day, from easy to hard, each citing its source in the Bahá'í Reference Library.";

export const metadata: Metadata = {
  title: "Bahá'í Daily Trivia — five new questions every day",
  description,
  openGraph: {
    title: "Bahá'í Daily Trivia — five new questions every day",
    description,
    url: "/trivia",
    siteName: "Faizi Fifita",
    type: "website",
  },
};

const features: Feature[] = [
  {
    title: "Easy to hard",
    icon: SignalIcon,
    text: "Two easy questions, two medium and one hard, about the Central Figures, the heroes of the Faith, its history, its teachings and its holy places.",
  },
  {
    title: "Every answer has its source",
    icon: BookOpenIcon,
    text: "Each answer links to the paragraph in the Bahá'í Reference Library it comes from, so you can read the passage for yourself.",
  },
  {
    title: "Everyone gets the same five",
    icon: BarChartIcon,
    text: "When you finish, see how your score stacks up against everyone who played today.",
  },
  {
    title: "Holy Days and Feasts",
    icon: CalendarIcon,
    text: "On a Holy Day, a Nineteen Day Feast or the first day of Ayyám-i-Há, the day's five become 19 questions about it. The calendar lays out the Badí' month, so you can play a Feast's set whenever your community holds it.",
  },
  {
    title: "A note in the morning",
    icon: MailIcon,
    text: "Leave your email on the results screen and get a note when the new questions are ready.",
  },
  {
    title: "No account",
    icon: LockIcon,
    text: "Nothing to sign up for and nothing to install. Open the page and play.",
  },
];

const moreFeatures = [
  "Over 500 questions, and growing every month",
  "No question comes back within a year",
  "A countdown to tomorrow's questions",
  "Review your answers",
  "Try again as many times as you like",
  "On your phone or your computer",
];

const shot = { width: 1600, height: 1135, className: "mac" };

// From the calmest screen to the busiest
const shots: Shot[] = [
  {
    src: "/trivia/question.webp",
    alt: "The day's first question in Bahá'í Daily Trivia, with four answers to choose from and five stars for the questions, easy to hard.",
    ...shot,
  },
  {
    src: "/trivia/answered.webp",
    alt: "A question answered right in Bahá'í Daily Trivia, with why it's right and a link to the passage in the Will and Testament of 'Abdu'l-Bahá.",
    ...shot,
  },
  {
    src: "/trivia/results.webp",
    alt: "Bahá'í Daily Trivia's results: 4 of 5 right, how everyone else scored today, and a countdown to tomorrow's questions.",
    ...shot,
  },
  {
    src: "/trivia/events.webp",
    alt: "Bahá'í Daily Trivia's events calendar: the Badí' month of 'Ilm laid out as 19 days, with the Feast of 'Ilm ready to play.",
    ...shot,
  },
];

export default function TriviaPage() {
  return (
    <ProductPage>
      <Intro icon="/trivia/icon.svg" name="Bahá'í Daily Trivia" tagline="Five new questions every day.">
        <p className="bio">
          A daily Bahá'í trivia game. Every day brings five new questions, from easy to hard, and everyone gets the
          same ones. Every question is drawn from a passage in the Bahá'í Reference Library, and links you to it once
          you've answered.
        </p>
      </Intro>

      <Features features={features} more={moreFeatures} />

      <Showcase title="In your browser" icon={LaptopIcon}>
        <ShowcaseText
          actions={
            <div className="actions">
              <a className="button" href={triviaUrl}>
                Play today's questions
                <ExternalIcon className="icon" />
              </a>
            </div>
          }
        >
          A few minutes a day, on your phone or your computer. Come back tomorrow for five more.
        </ShowcaseText>
        <Gallery shots={shots} label="Bahá'í Daily Trivia" className="stage" />
      </Showcase>
    </ProductPage>
  );
}
