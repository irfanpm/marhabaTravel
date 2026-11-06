"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Google Maps downloads several hundred KB of scripts, so it only loads as the visitor
 * scrolls close to it. Until then a matching block holds its place.
 */
export function MapEmbed({ src, title }: { src: string; title: string }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px" },
    );
    observer.observe(box);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={boxRef}
      className="reveal mt-8 h-[20rem] w-full overflow-hidden rounded-[1.25rem] bg-[#e5e3df] shadow-[0_6px_20px_rgb(8_45_89/0.1)] lg:mt-[2.25rem] lg:h-[22rem]"
    >
      {load && (
        <iframe title={title} src={src} referrerPolicy="no-referrer-when-downgrade" className="block size-full border-0" />
      )}
    </div>
  );
}
