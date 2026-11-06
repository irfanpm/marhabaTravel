"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * Content stays visible until this runs, so slow connections never see blank sections.
 * Anything already on screen stays as it is; only content further down rises into view.
 */
export function ScrollReveal() {
  const pathname = usePathname();
  const firstPage = useRef(true);

  useEffect(() => {
    // Fade between pages, but never on the first load, where it would only delay the content
    if (firstPage.current) {
      firstPage.current = false;
    } else if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelector("main")?.animate({ opacity: [0, 1] }, { duration: 250, easing: "ease-out" });
    }

    const elements = [...document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)")];
    const below: HTMLElement[] = [];
    for (const el of elements) {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("is-visible");
      else below.push(el);
    }
    document.documentElement.classList.add("js");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -4% 0px" },
    );
    below.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
