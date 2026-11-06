"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { enquiryLink, navLinks, services, site, whatsappLink } from "@/config/site";
import { ChevronDownIcon, CloseIcon, MenuIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

const sectionIds = ["home", "services", "about", "packages", "contact"];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const line = window.scrollY + window.innerHeight * 0.35;
      let current = "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top + window.scrollY <= line) current = id;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = "contact";
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
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

  const closeMenu = () => setMenuOpen(false);
  const solid = scrolled || menuOpen;

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        solid
          ? "bg-white/95 shadow-[0_2px_14px_rgb(8_45_89/0.12)] backdrop-blur"
          : "bg-white/85 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none"
      }`}
    >
      <div className="flex h-[4.25rem] items-center justify-between gap-3 px-4 md:px-6 lg:h-[4.6rem] lg:px-[2.2rem]">
        <a href="#home" aria-label={`${site.name} home`} className="shrink-0" onClick={closeMenu}>
          <Image
            src="/images/logo.png"
            alt={site.name}
            width={896}
            height={258}
            priority
            className="h-[2.65rem] w-auto min-[390px]:h-[2.9rem] lg:h-[3.6rem]"
          />
        </a>

        <nav aria-label="Primary" className="absolute left-[22.6rem] top-[1.45rem] hidden lg:block">
          <ul className="m-0 flex list-none items-center gap-[0.1rem] p-0">
            {navLinks.map((link) =>
              link.label === "Services" ? (
                <li
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    type="button"
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                    onClick={() => setDropdownOpen((v) => !v)}
                    className={navItemClass(active === "services")}
                  >
                    Services
                    <ChevronDownIcon
                      className={`ml-[0.3rem] size-[0.75rem] transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute left-0 top-full pt-[0.4rem]">
                      <ul className="m-0 w-[14rem] list-none rounded-[0.8rem] bg-white p-[0.4rem] shadow-[0_12px_30px_rgb(8_45_89/0.18)]">
                        {services.map((s) => (
                          <li key={s.title}>
                            <a
                              href={enquiryLink(s.title)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block rounded-[0.5rem] px-[0.7rem] py-[0.45rem] text-[0.78rem] font-medium text-navy hover:bg-page"
                            >
                              {s.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ) : (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={active === link.href.slice(1) ? "true" : undefined}
                    className={navItemClass(active === link.href.slice(1))}
                  >
                    {link.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            aria-label={`Call ${site.phoneDisplay}`}
            className="flex h-11 items-center justify-center gap-[0.6rem] rounded-full bg-navy px-3.5 text-white transition-colors hover:bg-[#0d3f7a] lg:h-[2.25rem] lg:px-[1.1rem]"
          >
            <PhoneIcon className="size-[1.15rem] lg:size-[1.1rem]" />
            <span className="hidden text-[0.9rem] font-semibold whitespace-nowrap min-[480px]:inline lg:text-[0.875rem]">
              {site.phoneDisplay}
            </span>
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full text-navy hover:bg-navy/5 lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <CloseIcon className="size-7" /> : <MenuIcon className="size-7" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="max-h-[calc(100dvh-4.25rem)] overflow-y-auto border-t border-navy/10 bg-white px-4 pb-5 pt-2 md:px-6 lg:hidden"
        >
          <ul className="m-0 list-none p-0">
            {navLinks.map((link) =>
              link.label === "Services" ? (
                <li key={link.href}>
                  <button
                    type="button"
                    aria-expanded={mobileServicesOpen}
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="flex min-h-12 w-full items-center justify-between rounded-lg px-3 text-left font-medium text-navy"
                  >
                    Services
                    <ChevronDownIcon className={`size-5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileServicesOpen && (
                    <ul className="m-0 grid list-none grid-cols-1 p-0 pl-3 sm:grid-cols-2">
                      {services.map((s) => (
                        <li key={s.title}>
                          <a
                            href={enquiryLink(s.title)}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMenu}
                            className="flex min-h-11 items-center rounded-lg px-3 text-[0.9rem] text-navy/85"
                          >
                            {s.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className={`flex min-h-12 items-center rounded-lg px-3 font-medium ${
                      active === link.href.slice(1) ? "bg-navy text-white" : "text-navy"
                    }`}
                  >
                    {link.label}
                  </a>
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
        </nav>
      )}
    </header>
  );
}

function navItemClass(isActive: boolean) {
  return `flex items-center rounded-full px-[0.72rem] py-[0.32rem] text-[0.72rem] font-medium whitespace-nowrap transition-colors ${
    isActive ? "bg-navy text-white" : "text-navy-dark hover:bg-navy/10"
  }`;
}
