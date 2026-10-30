"use client";

import { useState, type ReactNode } from "react";

export const email = "faizififita1@gmail.com";

// Copies the address rather than opening a mail app, since a mailto link opens whatever app the
// computer defaults to (often one people don't use); if copying fails it falls back to the mailto link
export function ContactLink({
  className,
  icon,
  children,
}: {
  className?: string;
  icon?: ReactNode;
  children: ReactNode;
}) {
  const [copied, setCopied] = useState(false);

  async function copy(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <a className={className} href={`mailto:${email}`} onClick={copy} title={email}>
      {icon}
      <span aria-live="polite">{copied ? "Email address copied" : children}</span>
    </a>
  );
}
