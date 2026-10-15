"use client";

import { useRef, useState } from "react";

// Shows the poster until clicked, then plays with the browser's own controls
export function DemoVideo({ src, poster, label }: { src: string; poster: string; label: string }) {
  const video = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  function play() {
    setStarted(true);
    video.current?.play();
  }

  return (
    <div className="demo">
      <video ref={video} src={src} poster={poster} preload="none" playsInline controls={started} />
      {!started && (
        <button type="button" className="demo-play" onClick={play} aria-label={label} />
      )}
    </div>
  );
}
