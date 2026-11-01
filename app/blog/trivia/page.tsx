import type { Metadata } from "next";
import { Footer, Nav } from "../../site";
import { ExternalIcon } from "../../icons";
import { triviaUrl } from "../../trivia/release";
import { formatDate, post } from "../posts";

const { title, description, date } = post("trivia");

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: "/blog/trivia", siteName: "Faizi Fifita", type: "article" },
};

export default function TriviaPost() {
  return (
    <>
      <Nav section="blog" />
      <main>
        <article className="post">
          <header className="intro">
            <p className="post-meta">
              <a href="/blog">Blog</a> · <time dateTime={date}>{formatDate(date)}</time>
            </p>
            <h1>{title}</h1>
            <p className="bio">
              This piece comes from an interview. Claude asked Faizi about{" "}
              <a href="/trivia">Bahá'í Daily Trivia</a> a week after it launched and wrote up the answers. The quotes
              are Faizi's words, lightly trimmed.
            </p>
          </header>

          <p>
            For years, Faizi Fifita carried a picture of what reading the Bahá'í Writings every day should look like.
          </p>
          <blockquote>
            Every time I thought about it, I had this vision in my head of me sitting down with an hour or more of time
            ahead of me to just immerse myself in a book. And when I look at what my life really looks like, I've never
            been able to see that as a possibility. It always seemed so out of reach.
          </blockquote>
          <p>
            So Faizi filed it away as something for a later season of life, maybe once the kids are grown. Then
            building <a href="/verses">Verses</a>, an app for memorizing prayers, opened up a different thought: there
            are many creative ways to engage with the Writings, and one of them might be a game.
          </p>

          <h2>Fun, low stakes, every day</h2>
          <blockquote>
            Games are a really effective way to learn, because they take away a lot of the pressure of learning. They
            make learning fun, which is what it should be.
          </blockquote>
          <p>
            The model was Wordle: one small puzzle a day, the same for everyone, and something you look forward to.
            That rhythm is what made the idea click. Bahá'ís are asked to read the Writings every day, and a daily game
            could carry that habit "in a way that is fun and low stakes, but invites consistency."
          </p>
          <p>
            Bahá'í Daily Trivia launched on October 24. Every day brings five questions: two easy, two medium and one
            hard. Everyone gets the same five.
          </p>

          <h2>Where does the answer come from?</h2>
          <p>
            Answering a trivia question isn't the same as reading scripture. Faizi knows that, and it's where the
            game's one firm rule comes from.
          </p>
          <blockquote>
            These aren't just questions. They're the writings of some of the most important people in all of history,
            and what matters most is people being able to develop their own relationship with those people and their
            words.
          </blockquote>
          <p>
            Faizi figured the first thing a player would wonder is where an answer comes from, whether to learn more or
            to fact-check the game, "both of which they should be able to do." So on launch day, every question written
            from memory came out. Only nine survived, the ones tied to a specific paragraph in the Bahá'í Reference
            Library, and from then on every answer has linked to the paragraph it comes from. Because all of it is
            public, players can also keep the game honest.
          </p>
          <p>
            About a week in, a player in New Zealand wrote in. They liked that the answers tie back to the text, but
            they wanted something more specific: the exact sentence. Now, when you follow the link, the Library opens at
            the paragraph with the sentence that holds the answer highlighted.
          </p>

          <h2>The quiet link</h2>
          <p>
            Faizi hadn't built anything this public before, and the first week taught a lesson about quiet design. In
            passing, Faizi's wife mentioned that she hadn't known you could sign up for a daily email reminder. The
            option was a small link under the results, and people weren't seeing it.
          </p>
          <p>
            Faizi moved the signup onto the results screen, with a gold button. Before the change, fewer than 2% of
            players signed up. Within a day of it, more than 20% did.
          </p>
          <blockquote>I was like, this definitely is a thing.</blockquote>
          <p>
            The link to each answer's source looked just like the old signup link, a small muted underline, so it got
            the same treatment. It's now a tilted sticker that's hard to miss. Since then, when people talk to Faizi
            about the game, the source is what they bring up: they think it's really cool that it links back to the
            text.
          </p>

          <h2>Sixty games a day</h2>
          <p>
            A week in, the game settles at about 60 plays a day, from all over the world, and almost 40 people are on
            the email list. Friends and family bring it up in conversation. In the group for Faizi's Local Spiritual
            Assembly, members were talking about how challenging the questions were and what they'd learned that they
            hadn't known before.
          </p>
          <blockquote>
            I wanted this to be something that sparks people to talk more about the Faith and to learn more about the
            Faith, and I'm already seeing that happen. It makes me feel really, really happy and really fulfilled.
          </blockquote>

          <h2>How 550 questions get written</h2>
          <p>
            The nine questions of launch day became more than 550 within two days. AI writes them. "I just feel like
            it'll make better questions than I would," Faizi says, "and it certainly will make them faster."
          </p>
          <p>
            The AI is restricted to the Bahá'í Reference Library, so it can draw only on verified texts and nothing
            that could carry false information about the Faith. A script also confirms that every cited paragraph
            really exists in the Library's text. What the process doesn't include is a person reading each question
            before it goes live.
          </p>
          <blockquote>
            I don't really do any checking before the questions go live. I just have the AI find them, and then ship
            them.
          </blockquote>
          <p>
            The check comes afterwards, in the open. Every answer is public and linked to its sentence, and the site's
            footer leads to Faizi's website and email. "If anything does go wrong," Faizi hopes, people will say so. So
            far, no one has reported a mistake.
          </p>

          <h2>Playing together</h2>
          <p>
            The biggest request since launch has been a way to play with friends and family. Faizi's first answer was
            the calendar. Holy Days, Nineteen Day Feasts and Ayyám-i-Há each get a set of 19 questions all about that
            event, and a calendar lays out the Badí' month so a community can play a Feast's questions whenever it
            holds the Feast. Faizi hoped it would help people get familiar with the Bahá'í calendar and give them
            something to rally around at their celebrations.
          </p>
          <blockquote>You can play it in a group, but really it's still a single-player experience.</blockquote>
          <p>
            So on October 31 came Guess What?, which Faizi calls "the inverse of the trivia game." Instead of answering
            a question, players work backwards from clues, hardest first, to the answer. It borrows from Kahoot and
            Jackbox: a host opens a room, everyone joins on their own phone, and the sooner you guess right, the more
            you score. Faizi and Faizi's wife played the first game together and liked it, and in a rush, Faizi
            shipped it.
          </p>
          <p>
            That same night, a friend who'd tried it with friends wrote in. The clues came too fast, and one player's
            iPad couldn't send a guess. Faizi fixed both: each clue now gets 12 seconds instead of 8.
          </p>

          <h2>Decide fast</h2>
          <p>That's the shape of the whole first week: ship, listen, fix, often on the same day. It's deliberate.</p>
          <blockquote>
            I have a history of overthinking my decisions, and after making a lot of mistakes, I realized the biggest
            one is just not making a decision. So I've tried to decide fast and put things out there, as long as it's
            low risk and doesn't hurt anybody. The best way to learn is to make a lot of mistakes: do the best work I
            can, put it out there, know that mistakes can happen, and trust that people can help me with that. I
            already know the Bahá'í community is excellent at building each other up and helping one another, and
            that's already proven true a number of times with this game.
          </blockquote>
          <p>
            For month two there are no big plans. Faizi has stopped looking for groups to share it with. "I think it's
            going to be one of those things that just needs to spread by word of mouth. I want to see what its natural
            growth pattern is."
          </p>

          <h2>Three words</h2>
          <p>As for the reader still waiting for that free hour with a book, Faizi says this:</p>
          <blockquote>
            It's not about how much you read, or even what you read. It's that you read at all. If three words can
            change the way you think about yourself or your life for the better, those three words could mean more than
            an entire book.
          </blockquote>

          <div className="actions">
            <a className="button" href={triviaUrl}>
              Play today's questions
              <ExternalIcon className="icon" />
            </a>
            <a className="button secondary" href="/trivia">
              More about Bahá'í Daily Trivia
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
