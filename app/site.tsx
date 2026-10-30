import { ContactLink } from "./contact";
import { XIcon, YouTubeIcon } from "./icons";

// The frosted nav and the footer every page shares
const social = [
  { label: "X", href: "https://x.com/faizif5a", icon: XIcon },
  { label: "YouTube", href: "https://www.youtube.com/@faizif5a", icon: YouTubeIcon },
];

// `section` marks the part of the site you're in
export function Nav({ section }: { section?: "blog" }) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="wordmark" href="/">
          Faizi Fifita
        </a>
        <div className="nav-links">
          <a className="nav-word" href="/blog" aria-current={section === "blog" ? "page" : undefined}>
            Blog
          </a>
          <ContactLink className="nav-word">Email me</ContactLink>
          {social.map((link) => (
            <a key={link.label} className="social" href={link.href} aria-label={link.label}>
              <link.icon className="icon" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Faizi Fifita</p>
      <p className="footer-links">
        <a href="/blog">Blog</a>
        <ContactLink>Email</ContactLink>
        {social.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </p>
    </footer>
  );
}
