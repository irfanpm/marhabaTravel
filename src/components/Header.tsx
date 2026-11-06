"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navLinks, services, site, whatsappLink } from "@/config/site";
import { ChevronDownIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

/** Homepage sections the nav highlights while scrolling, in page order. */
const homeSections = ["home", "about", "packages"];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [homeSection, setHomeSection] = useState("home");
  const headerRef = useRef<HTMLElement>(null);

  const active = isHome ? homeSection : pathname.slice(1);

  useEffect(() => {
    // Scrolling fires far more often than the screen redraws, so work once per frame at most
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 24);
      if (!isHome) return;
      const line = window.scrollY + window.innerHeight * 0.35;
      let current = "home";
      for (const id of homeSections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top + window.scrollY <= line) current = id;
      }
      setHomeSection(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [isHome]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      // composedPath is fixed when the click starts. contains() would fail here because
      // tapping the menu icon swaps it for the close icon before this listener runs.
      if (headerRef.current && !e.composedPath().includes(headerRef.current)) {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  const closeAll = () => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
    setDropdownOpen(false);
  };
  const solid = scrolled || menuOpen || !isHome;

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        solid
          ? "bg-white shadow-[0_2px_14px_rgb(8_45_89/0.12)]"
          : "bg-white/90 lg:bg-transparent"
      }`}
    >
      <div className="relative mx-auto flex h-[4.25rem] max-w-[64rem] items-center justify-between gap-3 px-4 md:px-6 lg:h-[4.25rem] lg:px-[2.2rem]">
        <Link href="/#home" aria-label={`${site.name} home`} className="shrink-0" onClick={closeAll}>
          <Image
            src="/images/logo.png"
            alt={site.name}
            width={896}
            height={258}
            priority
            sizes="(min-width: 1152px) 190px, 170px"
            className="h-[2.65rem] w-auto min-[390px]:h-[2.9rem] lg:h-[2.95rem]"
          />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="m-0 flex list-none items-center gap-[0.1rem] p-0">
            {navLinks.map((link) =>
              link.id === "services" ? (
                <li
                  key={link.id}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                  onFocus={() => setDropdownOpen(true)}
                >
                  <Link
                    href={link.href}
                    aria-haspopup="true"
                    aria-expanded={dropdownOpen}
                    aria-current={active === link.id ? "page" : undefined}
                    onClick={closeAll}
                    className={navItemClass(active === link.id)}
                  >
                    {link.label}
                    <ChevronDownIcon
                      className={`ml-[0.3rem] size-[0.75rem] transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
                    />
                  </Link>
                  <div className={`nav-dropdown ${dropdownOpen ? "is-open" : ""}`} inert={!dropdownOpen}>
                      <ul className="m-0 w-[14rem] list-none rounded-[0.8rem] bg-white p-[0.4rem] shadow-[0_12px_30px_rgb(8_45_89/0.18)]">
                        {services.map((s) => (
                          <li key={s.slug}>
                            <Link
                              href={`/services#${s.slug}`}
                              onClick={closeAll}
                              className="block rounded-[0.5rem] px-[0.7rem] py-[0.5rem] text-[0.82rem] font-medium text-navy transition-[background-color,padding] duration-200 hover:bg-page hover:pl-[0.95rem]"
                            >
                              {s.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                  </div>
                </li>
              ) : (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    aria-current={active === link.id ? "true" : undefined}
                    className={navItemClass(active === link.id)}
                  >
                    {link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            aria-label={`Call ${site.phoneDisplay}`}
            className="flex h-11 items-center justify-center gap-[0.6rem] rounded-full bg-navy px-3.5 text-white transition-colors hover:bg-[#0d3f7a] lg:h-[2.5rem] lg:px-[1.1rem]"
          >
            <PhoneIcon className="size-[1.15rem] lg:size-[1.1rem]" />
            <span className="hidden text-[0.9rem] font-semibold whitespace-nowrap min-[480px]:inline lg:text-[0.85rem]">
              {site.phoneDisplay}
            </span>
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full text-navy transition-colors hover:bg-navy/5 lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => {
              setMobileServicesOpen(false);
              setMenuOpen((v) => !v);
            }}
          >
            <span className={`burger ${menuOpen ? "is-open" : ""}`} aria-hidden>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <nav id="mobile-menu" aria-label="Mobile" inert={!menuOpen} className={`collapse-panel lg:hidden ${menuOpen ? "is-open" : ""}`}>
        <div className="min-h-0 overflow-hidden">
          <div className="mobile-menu-items max-h-[calc(100dvh-4.25rem)] overflow-y-auto border-t border-navy/10 bg-white px-4 pb-5 pt-2 md:px-6">
          <ul className="m-0 list-none p-0">
            {navLinks.map((link) =>
              link.id === "services" ? (
                <li key={link.id}>
                  <div
                    className={`flex items-center rounded-lg ${active === link.id ? "bg-navy text-white" : "text-navy"}`}
                  >
                    <Link href={link.href} onClick={closeAll} className="flex min-h-12 flex-1 items-center px-3 font-medium">
                      {link.label}
                    </Link>
                    <button
                      type="button"
                      aria-label={mobileServicesOpen ? "Hide service list" : "Show service list"}
                      aria-expanded={mobileServicesOpen}
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      className="grid size-12 place-items-center"
                    >
                      <ChevronDownIcon
                        className={`size-5 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>
                  <div inert={!mobileServicesOpen} className={`collapse-panel ${mobileServicesOpen ? "is-open" : ""}`}>
                    <div className="min-h-0 overflow-hidden">
                    <ul className="m-0 grid list-none grid-cols-1 p-0 pl-3 sm:grid-cols-2">
                      {services.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services#${s.slug}`}
                            onClick={closeAll}
                            className="flex min-h-11 items-center rounded-lg px-3 text-[0.9rem] text-navy/85"
                          >
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    onClick={closeAll}
                    className={`flex min-h-12 items-center rounded-lg px-3 font-medium ${
                      active === link.id ? "bg-navy text-white" : "text-navy"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <a
              href={site.phoneHref}
              className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-navy font-semibold text-white"
            >
              <PhoneIcon className="size-5" />
              {site.phoneDisplay}
            </a>
            <a
              href={whatsappLink("Hello Marhaba Travel & Holidays, I would like to plan a journey.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#128C4B] font-semibold text-white"
            >
              <WhatsAppIcon className="size-5" />
              WhatsApp
            </a>
          </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

function navItemClass(isActive: boolean) {
  return `flex items-center rounded-full px-[0.8rem] py-[0.38rem] text-[0.8rem] font-medium whitespace-nowrap transition-colors duration-200 ${
    isActive ? "bg-navy text-white" : "text-navy-dark hover:bg-navy/10"
  }`;
}
