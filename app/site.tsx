import { XIcon, YouTubeIcon } from "./icons";

// The frosted nav and the footer every page shares
const social = [
  { label: "X", href: "https://x.com/faizif5a" },
  { label: "YouTube", href: "https://www.youtube.com/@faizif5a" },
];

export function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="wordmark" href="/">
          Faizi Fifita
        </a>
        <div className="nav-links">
          {social.map((link) => (
            <a key={link.label} href={link.href} aria-label={link.label}>
              {link.label === "X" ? <XIcon className="icon" /> : <YouTubeIcon className="icon" />}
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
        {social.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </p>
    </footer>
  );
}
