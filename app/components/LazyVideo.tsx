"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

/** Lazy-loads video when in viewport; shows poster until then. Pauses when out of view. */
export function LazyVideo({
  src,
  poster,
  title,
  className = "",
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
}: {
  src: string;
  poster: string;
  title: string;
  className?: string;
  sizes?: string;
}) {
  const [inView, setInView] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "100px", threshold: 0.01 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) setShowVideo(true);
  }, [inView]);

  useEffect(() => {
    if (!showVideo) return;
    const video = videoRef.current;
    if (!video) return;
    if (inView) video.play().catch(() => {});
    else video.pause();
  }, [showVideo, inView]);

  return (
    <div ref={containerRef} className="relative h-full w-full">
      {showVideo && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          preload="none"
          muted
          loop
          playsInline
          controls={false}
          className={`absolute inset-0 h-full w-full object-cover ${className}`}
          aria-label={title}
          onLoadedData={() => setVideoReady(true)}
        />
      )}
      {/* Poster only until video has loaded first frame; after that show paused video when out of view */}
      {(!showVideo || !videoReady) && (
        <Image
          src={poster}
          alt={title}
          fill
          className={className}
          sizes={sizes}
        />
      )}
    </div>
  );
}
