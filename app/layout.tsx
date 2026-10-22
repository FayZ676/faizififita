import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

const description =
  "I'm Faizi Fifita, an AI engineer in Portland, Oregon. Apps and tools I've built: /job, Quill, Verses, and an audiobook generator.";

export const metadata: Metadata = {
  metadataBase: new URL("https://faizififita.vercel.app"),
  title: "Faizi",
  description,
  openGraph: { title: "Faizi Fifita", description, url: "/", siteName: "Faizi Fifita", type: "website" },
  // X reads the Open Graph tags but needs this to show the large image
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.className}>
      <body>{children}</body>
    </html>
  );
}
