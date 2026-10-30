import { ContactLink } from "./contact";
import { XIcon, YouTubeIcon } from "./icons";

// The frosted nav and the footer every page shares
const social = [
  { label: "X", href: "https://x.com/faizif5a", icon: XIcon },
  { label: "YouTube", href: "https://www.youtube.com/@faizif5a", icon: YouTubeIcon },
];

export function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="wordmark" href="/">
          Faizi Fifita
        </a>
        <div className="nav-links">
          <ContactLink className="nav-contact">Send me an email</ContactLink>
          {social.map((link) => (
            <a key={link.label} href={link.href} aria-label={link.label}>
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
