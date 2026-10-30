import type { Metadata } from "next";
import { Footer, Nav } from "../../site";
import { formatDate, post } from "../posts";

const { title, description, date } = post("verses");

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: "/blog/verses", siteName: "Faizi Fifita", type: "article" },
};

export default function VersesPost() {
  return (
    <>
      <Nav />
      <main>
        <article className="post">
          <header className="intro">
            <p className="post-meta">
              <a href="/blog">Blog</a> · <time dateTime={date}>{formatDate(date)}</time>
            </p>
            <h1>{title}</h1>
            <p className="bio">
              This piece comes from an interview. Claude, an AI made by Anthropic, asked Faizi about{" "}
              <a href="/verses">Verses</a> and wrote up the answers. The quotes are Faizi's words, lightly trimmed.
            </p>
          </header>

          <p>
            A few months ago, Faizi Fifita took some time off work while family was visiting. In the quiet hours of that
            week, Faizi felt the need to pray, and ran into an unexpected problem: there was nothing to say.
          </p>
          <p>
            Not quite nothing. There were the prayers learned as a kid, and those still came easily. Saying them from
            memory had always felt different from reading them off a page.
          </p>
          <blockquote>
            As I've grown older, saying prayers from my memory has always just felt a lot more personal and real than
            saying prayers from a book. In that moment, I realized I didn't have the right prayers that I wanted to say,
            and I felt limited.
          </blockquote>
          <p>
            Opening a prayer book didn't feel right. Neither did the slog of memorizing a new prayer the old way. It was
            a strange place to be stuck, and Faizi suspected it wasn't a lonely one. Plenty of Bahá'í youth, Faizi
            thought, feel the same barrier: not knowing which prayers to say, not knowing how to start memorizing one,
            and not finding the motivation to try.
          </p>
          <p>
            "I think there's a better way to do this," Faizi remembers thinking. As a software engineer, Faizi could
            build it.
          </p>

          <h2>One afternoon, and four months</h2>
          <p>
            The first Verses was an iPhone app, vibe coded with Claude in a single afternoon. It showed a prayer,
            listened while you said it, and checked your words. Under the hood, it used Apple's speech transcriber to
            turn what you said into text, then compared that text against the prayer.
          </p>
          <p>
            Faizi wanted the app small to download and fast on an iPhone, and Apple's transcriber was the easiest thing
            that fit. Over the next four months, Verses went through version after version. The screens were reworked
            again and again, but the listening stayed the same, and it was the one part Faizi was never proud of.
          </p>
          <blockquote>
            No matter how much I cleaned up the UI and the UX, the recitation feature was never something that I was
            proud of. It actually was never something that I felt like I could really use.
          </blockquote>
          <p>
            That lasted the whole four months. What made it worse was another app on the App Store, Corazon, made by
            another Bahá'í for memorizing prayers. It felt more polished, and for most of Verses' life Faizi tried to
            match it without working out how. Using it more showed that it had problems too. "It wasn't perfect, but it
            was a sign to me that there was room for improvement," Faizi says. "That was kind of the seed that was
            planted in my mind that I can do better."
          </p>

          <h2>The problem was the transcript</h2>
          <p>
            Faizi kept turning the question over: why does this work so badly? The answer wasn't a bug in Verses. It
            was the approach.
          </p>
          <p>
            Speech transcribers are trained on everyday speech, the kind people use with each other all day. Prayers
            aren't everyday speech. They're full of archaic and formal words nobody says in conversation. So even when
            Faizi said a line exactly right, many times over, the transcriber wrote down something else, and Verses
            marked it wrong. "The impact of this was that the app just felt super buggy."
          </p>
          <p>
            The fix was to stop transcribing. Verses didn't need to know what you said, because it already knew what
            you were trying to say: the words on the page. All it needed to ask was whether the sound of your voice
            matched how those words should sound. That's a different kind of model, one that aligns speech with a known
            text instead of guessing at it.
          </p>
          <p>
            Faizi tested several speech alignment models and found one from NVIDIA that was both accurate and small. On
            Faizi's tests, the old transcriber got 62% right. The new model got 100%.
          </p>
          <blockquote>At that point, I knew I had a game changer.</blockquote>

          <h2>Sixty megabytes</h2>
          <p>
            The model wasn't made for iPhones. With Claude's help, Faizi ported it in a couple of days, and on the phone
            it came to about 60 megabytes. That's small enough to ship inside the app and run entirely on the iPhone, so
            your voice never leaves it.
          </p>
          <blockquote>As soon as I ran that first test on my phone, I knew this was it.</blockquote>

          <h2>Taking things away</h2>
          <p>
            The new listener changed more than the listening. Over four months, a lot of the interface had been added to
            make an unreliable feature feel smoother and more dependable than it was. With a solid foundation underneath,
            all of that could go.
          </p>
          <p>
            Faizi took a page from iA Writer, a favorite writing app known for getting everything out of the way of the
            words. In Verses 2.0, when you tap Recite, everything fades except the prayer. "You can really just focus on
            the words." Plenty of other things got simpler too, but that's the heart of it.
          </p>

          <h2>Any prayer</h2>
          <p>
            Faizi now opens Verses many times a day, and is in the middle of memorizing the Tablet of Aḥmad and the Long
            Obligatory Prayer.
          </p>
          <blockquote>
            If you asked me four months ago whether I'd consider memorizing those things, I'd probably say yes, but I
            wouldn't be able to tell you when I'd do it or how I'd do it. I'd have no idea how long it would take, and
            it would probably suck. But now I feel like it's just a natural thing to do. It's fun. It feels engaging.
            Using Verses has given me hope that any prayer I want, I can memorize.
          </blockquote>
          <p>
            Verses has about 100 downloads so far. People have been supportive, and they like the interface. They
            haven't trusted the old recitation feature, and Faizi doesn't blame them: "I 100% own that and agree with
            that. I felt that exact same way."
          </p>
          <p>
            Verses 2.0 is with Apple for review now and should be on the App Store within the week. In Faizi's words,
            it's the Verses "that I wanted to release all along."
          </p>

          <h2>For the youth</h2>
          <p>
            Through every version, one group stayed at the front of Faizi's mind. "Really, they are the people that I am
            building Verses for. It's for the youth."
          </p>
          <p>And to a young Bahá'í who feels that same barrier, Faizi says this:</p>
          <blockquote>
            I completely understand how you feel. The world right now has made it really hard to memorize. But prayer is
            really meant to be a shelter from the world. It doesn't matter how long it is or how perfectly you say it.
            As long as you feel that what you're saying and what you're doing can feed your soul, you're doing the right
            thing. Just do it as much as you can.
          </blockquote>

          <div className="actions">
            <a className="button" href="/verses">
              More about Verses
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
