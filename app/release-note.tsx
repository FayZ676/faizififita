"use client";

import { useEffect, useState } from "react";
import { latestRelease, type Release } from "./release";

// Shows the release found when the site was built, then checks GitHub again in the browser,
// so a new release shows up here without a redeploy
export function ReleaseNote({
  repo,
  asset,
  note,
  initial,
}: {
  repo: string;
  asset: string;
  note: string;
  initial: Release | null;
}) {
  const [release, setRelease] = useState(initial);

  useEffect(() => {
    latestRelease(repo, asset).then((latest) => latest && setRelease(latest));
  }, [repo, asset]);

  const parts = [release && `Version ${release.version}`, note, release?.size && `${(release.size / 1e6).toFixed(1)} MB`];
  return <p className="note">{parts.filter(Boolean).join(" · ")}</p>;
}
