"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";

export type Shot = { src: string; alt: string; width: number; height: number; className?: string };

// Shows one screenshot at a time, moved through with the buttons and dots below it, the arrow keys,
// or a swipe; each screenshot is a full-width slide in a row that snaps into place
export function Gallery({ shots, label, className }: { shots: Shot[]; label: string; className?: string }) {
  const track = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const update = () => setCurrent(Math.round(el.scrollLeft / el.clientWidth));
    el.addEventListener("scroll", update, { passive: true });
    return () => el.removeEventListener("scroll", update);
  }, []);

  function show(index: number) {
    const el = track.current;
    if (!el || index < 0 || index >= shots.length) return;
    // Set right away, so a quick second press moves on from here rather than waiting for the scroll
    setCurrent(index);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: index * el.clientWidth, behavior: reduce ? "auto" : "smooth" });
  }

  return (
    <div className={className ? `gallery ${className}` : "gallery"}>
      <div ref={track} className="gallery-track" tabIndex={0} role="region" aria-label={label}>
        {shots.map((shot, i) => (
          <div key={shot.src} className="gallery-slide" aria-hidden={i !== current}>
            <img
              src={shot.src}
              alt={shot.alt}
              width={shot.width}
              height={shot.height}
              className={shot.className}
              style={{ "--ratio": shot.width / shot.height } as React.CSSProperties}
              loading={i === 0 ? undefined : "lazy"}
              draggable={false}
            />
          </div>
        ))}
      </div>
      {shots.length > 1 && (
        <div className="gallery-controls">
          <button type="button" onClick={() => show(current - 1)} disabled={current === 0} aria-label="Previous screenshot">
            <ChevronLeftIcon className="icon" />
          </button>
          <div className="gallery-dots">
            {shots.map((shot, i) => (
              <button
                key={shot.src}
                type="button"
                onClick={() => show(i)}
                aria-label={`Screenshot ${i + 1} of ${shots.length}`}
                aria-current={i === current}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => show(current + 1)}
            disabled={current === shots.length - 1}
            aria-label="Next screenshot"
          >
            <ChevronRightIcon className="icon" />
          </button>
        </div>
      )}
    </div>
  );
}
