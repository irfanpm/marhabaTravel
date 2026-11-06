"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { enquiryLink, packages } from "@/config/site";
import { ChevronLeftIcon, ChevronRightIcon, PackageGlyph } from "./Icons";
import { SectionHeading } from "./SectionHeading";

/**
 * Three copies of the list let the carousel loop endlessly in both directions.
 * The server only sends the real cards, which keeps the page much smaller; the
 * copies are added in the browser once the page is ready.
 */
const COPIES = 3;
const items = Array.from({ length: COPIES }, (_, copy) =>
  packages.map((pkg, index) => ({ ...pkg, key: `${copy}-${index}`, isClone: copy !== 1 })),
).flat();

export function Packages() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [looped, setLooped] = useState(false);
  const shown = looped ? items : items.filter((item) => !item.isClone);

  const metrics = useCallback(() => {
    const track = trackRef.current;
    if (!track) return null;
    const cards = track.children;
    const first = cards[0] as HTMLElement;
    const second = cards[1] as HTMLElement;
    const step = second.offsetLeft - first.offsetLeft;
    return { track, step, setWidth: step * packages.length };
  }, []);

  const jumpTo = (track: HTMLElement, left: number) => {
    track.style.scrollSnapType = "none";
    track.scrollTo({ left, behavior: "instant" as ScrollBehavior });
    requestAnimationFrame(() => {
      track.style.scrollSnapType = "";
    });
  };

  // Start on the middle copy. Card widths only change with the viewport width, so
  // height-only resizes (such as a phone's address bar collapsing) are ignored,
  // and the card currently in view is kept when the width does change.
  useEffect(() => {
    const initial = metrics();
    if (!initial) return;
    if (!looped) {
      setLooped(true);
      return;
    }
    jumpTo(initial.track, initial.setWidth);
    let { step } = initial;
    let width = window.innerWidth;
    const onResize = () => {
      if (window.innerWidth === width) return;
      width = window.innerWidth;
      const m = metrics();
      if (!m || m.step === 0) return;
      const index = step > 0 ? Math.round(m.track.scrollLeft / step) : packages.length;
      step = m.step;
      jumpTo(m.track, index * m.step);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [metrics, looped]);

  // When scrolling settles in a cloned copy, silently return to the middle copy
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let timer: ReturnType<typeof setTimeout>;
    let frame = 0;
    const onScroll = () => {
      if (!frame) {
        frame = requestAnimationFrame(() => {
          frame = 0;
          const current = metrics();
          if (current && current.step > 0) {
            setActive(Math.round(current.track.scrollLeft / current.step) % packages.length);
          }
        });
      }
      clearTimeout(timer);
      timer = setTimeout(() => {
        const m = metrics();
        if (!m) return;
        if (m.track.scrollLeft < m.setWidth - 1) jumpTo(m.track, m.track.scrollLeft + m.setWidth);
        else if (m.track.scrollLeft >= m.setWidth * 2 - 1) jumpTo(m.track, m.track.scrollLeft - m.setWidth);
      }, 140);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", onScroll);
    };
  }, [metrics]);

  const goTo = (index: number) => {
    const m = metrics();
    if (!m || m.step === 0) return;
    const current = Math.round(m.track.scrollLeft / m.step) % packages.length;
    m.track.scrollBy({ left: (index - current) * m.step, behavior: "smooth" });
  };

  const move = (direction: 1 | -1) => {
    const m = metrics();
    if (m) m.track.scrollBy({ left: direction * m.step, behavior: "smooth" });
  };

  return (
    <section id="packages" className="relative z-[2] mx-auto max-w-[64rem] py-14 md:py-16 lg:py-[4.75rem]">
      <div className="px-4">
        <SectionHeading eyebrow="Destinations" title="Popular Travel Packages" subtitle="Discover Amazing Destinations" />
      </div>

      <div className="reveal relative mt-7 lg:mt-[1.9rem]">
        <button type="button" aria-label="Previous packages" onClick={() => move(-1)} className={arrowClass("left")}>
          <ChevronLeftIcon className="size-[1.05rem]" />
        </button>

        <ul
          ref={trackRef}
          aria-label="Popular travel packages"
          className="no-scrollbar m-0 flex list-none snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain scroll-pl-4 px-4 py-1 md:mx-12 md:scroll-pl-2 md:px-2 md:py-4 lg:mx-[1.4rem] lg:scroll-pl-[0.8rem] lg:gap-[1.1rem] lg:px-[0.8rem]"
        >
          {shown.map((pkg) => (
            <li
              key={pkg.key}
              aria-hidden={pkg.isClone || undefined}
              className="w-[74vw] max-w-[20rem] shrink-0 snap-start min-[480px]:w-[17rem] md:w-[calc((100%-1.5rem)/3)] md:max-w-none lg:w-[calc((100%-3.3rem)/4)]"
            >
              <a
                href={enquiryLink(pkg.title)}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={pkg.isClone ? -1 : undefined}
                className="group relative block aspect-[217/144] overflow-hidden rounded-[1.1rem] shadow-[0_4px_12px_rgb(8_45_89/0.14)] transition-[translate,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_14px_rgb(8_45_89/0.24)]"
              >
                <Image
                  src={pkg.image}
                  alt={pkg.isClone ? "" : pkg.alt}
                  fill
                  quality={78}
                  sizes="(min-width: 1280px) 280px, (min-width: 1024px) 22vw, (min-width: 768px) 32vw, 74vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <span className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-[#05264C]/95 via-[#05264C]/45 to-transparent" />
                <span className="absolute inset-x-0 bottom-[0.8rem] flex items-center gap-[0.55rem] px-[0.9rem] text-white">
                  <PackageGlyph icon={pkg.icon} className="size-[1.4rem] shrink-0 text-gold" />
                  <span className="flex-1 text-[0.9rem] font-semibold leading-tight lg:text-[0.85rem]">{pkg.title}</span>
                  <span className="hidden size-[1.6rem] shrink-0 place-items-center rounded-full bg-white/20 lg:grid transition-colors duration-200 group-hover:bg-gold group-hover:text-navy-dark">
                    <ChevronRightIcon className="size-[0.8rem]" />
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <button type="button" aria-label="Next packages" onClick={() => move(1)} className={arrowClass("right")}>
          <ChevronRightIcon className="size-[1.05rem]" />
        </button>
      </div>

      {/* Swipe position on phones, where the arrows are hidden */}
      <div className="mt-2 flex justify-center md:hidden">
        {packages.map((pkg, index) => (
          <button
            key={pkg.title}
            type="button"
            aria-label={`Show ${pkg.title}`}
            aria-current={index === active ? "true" : undefined}
            onClick={() => goTo(index)}
            className="grid size-8 place-items-center"
          >
            <span
              className={`block h-2 rounded-full transition-all duration-300 ${
                index === active ? "w-5 bg-navy" : "w-2 bg-navy/25"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}

function arrowClass(side: "left" | "right") {
  return `absolute top-1/2 z-10 hidden size-11 -translate-y-1/2 place-items-center rounded-full bg-white text-navy shadow-[0_3px_10px_rgb(8_45_89/0.2)] transition-colors hover:bg-navy hover:text-white md:grid lg:size-[2.4rem] ${
    side === "left" ? "left-1.5 lg:left-[1.1rem]" : "right-1.5 lg:right-[1.1rem]"
  }`;
}
