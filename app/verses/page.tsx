import type { Metadata } from "next";
import {
  AudioLinesIcon,
  BookOpenIcon,
  ExternalIcon,
  EyeOffIcon,
  FileTextIcon,
  LockIcon,
  MicIcon,
  PhoneIcon,
} from "../icons";
import { Gallery, type Shot } from "../gallery";
import { Features, Intro, ProductPage, Showcase, ShowcaseText, type Feature } from "../product";
import { versesAppStore } from "./release";

const description =
  "Verses is an iPhone and iPad app for learning Bahá'í prayers by heart: hide the words you know, then say the prayer out loud while it listens on your iPhone.";

export const metadata: Metadata = {
  title: "Verses — learn prayers by heart",
  description,
  openGraph: {
    title: "Verses — learn prayers by heart",
    description,
    url: "/verses",
    siteName: "Faizi Fifita",
    type: "website",
  },
};

const features: Feature[] = [
  {
    title: "Hide what you know",
    icon: EyeOffIcon,
    text: "Tap a word to hide it, or glide across a line to hide several. Or tap Hide and it picks a few in the paragraph you're on.",
  },
  {
    title: "It hears every word",
    icon: AudioLinesIcon,
    text: "Say the prayer out loud and a listener that runs entirely on your iPhone follows you word by word. It can tell Thy from my, and if you miss a word twice, it shows it to you.",
  },
  {
    title: "Just you and the prayer",
    icon: MicIcon,
    text: "Tap Recite and everything else fades away, so only the prayer is left. Tap the page when you want to stop.",
  },
  {
    title: "The whole prayer on one page",
    icon: FileTextIcon,
    text: "Words you hide stay on the page, a little lighter, so you can always see what you've hidden. They go away only while you recite.",
  },
  {
    title: "The writings, built in",
    icon: BookOpenIcon,
    text: "225 prayers, all 153 Hidden Words and 249 Ruhi quotations, plus other writings of Bahá'u'lláh, 'Abdu'l-Bahá and the Báb. Search for a line you half remember, or paste your own.",
  },
  {
    title: "Stays on your iPhone",
    icon: LockIcon,
    text: "No account, no sign-in and no ads. Your prayers, your progress and your voice never leave your iPhone.",
  },
];

const moreFeatures = [
  "Start from any paragraph",
  "Achievements for each kind of prayer",
  "Daily reminders",
  "Archive the prayers you know",
  "Small, Medium or Large text",
  "Light, Dark or System appearance",
  "Names like Aḥmad set in the prayer's own type",
  "A welcome tour",
];

const phone = { width: 736, height: 1600, className: "phone" };

// From the calmest screen to the busiest
const shots: Shot[] = [
  {
    src: "/verses/recite.webp",
    alt: "Verses on iPhone while reciting: everything but the prayer has faded away, and the hidden words wait as lines for you to say them.",
    ...phone,
  },
  {
    src: "/verses/prayer.webp",
    alt: "A prayer in Verses on iPhone, with the words already hidden shown lighter, above the Hide and Recite buttons.",
    ...phone,
  },
  {
    src: "/verses/library-dark.webp",
    alt: "The Verses library on iPhone in dark mode: six prayers, each with how much of it is hidden.",
    ...phone,
  },
  {
    src: "/verses/writings.webp",
    alt: "The writings in Verses on iPhone: search, paste your own text, and the prayers, Hidden Words and Ruhi books, each with a count.",
    ...phone,
  },
];

export default function VersesPage() {
  return (
    <ProductPage>
      <Intro icon="/verses/icon.webp" name="Verses" tagline="Learn prayers by heart.">
        <p className="bio">
          Verses helps you memorize Bahá'í prayers. Open a prayer, hide the words you already know, and say it out loud.
          Each time you come back, hide a few more, until the page is empty and the prayer is yours.
        </p>
        <p className="bio">
          Version 2.0 rebuilt it from the ground up, around a speech model that runs on the iPhone itself and listens
          for every word of the prayer.
        </p>
      </Intro>

      <Features features={features} more={moreFeatures} />

      <Showcase title="iPhone and iPad" icon={PhoneIcon}>
        <ShowcaseText
          actions={
            <div className="actions">
              <a className="button" href={versesAppStore}>
                View on the App Store
                <ExternalIcon className="icon" />
              </a>
            </div>
          }
        >
          Nothing is locked and nothing is timed. Hide what you know, read what you don't, and come back tomorrow.
        </ShowcaseText>
        <Gallery shots={shots} label="Verses on iPhone" className="stage devices" />
      </Showcase>
    </ProductPage>
  );
}
