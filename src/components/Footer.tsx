import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";
import { mapsLink, navLinks, services, site, whatsappLink } from "@/config/site";
import { FacebookIcon, InstagramIcon, PhoneIcon, PinIcon, WhatsAppIcon, YoutubeIcon } from "./Icons";

const socials: {
  label: string;
  url: string;
  Icon: (p: SVGProps<SVGSVGElement>) => React.JSX.Element;
}[] = [
  { label: "Facebook", url: site.socials.facebook, Icon: FacebookIcon },
  { label: "Instagram", url: site.socials.instagram, Icon: InstagramIcon },
  { label: "YouTube", url: site.socials.youtube, Icon: YoutubeIcon },
];

const socialClass =
  "grid size-11 place-items-center rounded-full bg-white text-navy-dark transition-transform lg:size-[2.1rem]";
const heading = "m-0 text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-gold";
const linkClass = "inline-flex min-h-9 items-center text-white/85 transition-[color,translate] duration-200 hover:translate-x-1 hover:text-gold lg:min-h-[1.8rem]";

export function Footer() {
  return (
    <footer className="bg-navy-dark px-5 pb-[5.5rem] pt-12 text-white md:px-8 md:pt-14 lg:px-[2.2rem] lg:pb-[5rem] lg:pt-[3.5rem] min-[1320px]:pb-[1.5rem]">
      <div className="mx-auto grid max-w-[59.6rem] grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-[1.2fr_0.7fr_1.05fr_1.5fr] lg:gap-[2.5rem]">
        <div className="reveal col-span-2 lg:col-span-1">
          <Link href="/#home" aria-label={`${site.name} home`} className="inline-block">
            <Image src="/images/logo-white.png" alt={site.name} width={896} height={258} sizes="225px" loading="lazy" className="h-auto w-[12.5rem]" />
          </Link>
          <p className="m-0 mt-4 max-w-[19rem] text-[0.9rem] leading-[1.6] text-white/80">
            Your trusted travel partner for dream journeys.
          </p>
          <ul className="m-0 mt-5 flex list-none gap-3 p-0">
            {socials.map(({ label, url, Icon }) => (
              <li key={label}>
                {url ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`${socialClass} hover:scale-110`}
                  >
                    <Icon className="size-[1.2rem] lg:size-[1.05rem]" />
                  </a>
                ) : (
                  <span role="img" aria-label={label} className={socialClass}>
                    <Icon className="size-[1.2rem] lg:size-[1.05rem]" />
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Quick links" className="reveal">
          <h2 className={heading}>Quick Links</h2>
          <ul className="m-0 mt-4 list-none p-0 text-[0.9rem]">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services" className="reveal">
          <h2 className={heading}>Our Services</h2>
          <ul className="m-0 mt-4 list-none p-0 text-[0.9rem]">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className={linkClass}>
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="reveal col-span-2 lg:col-span-1">
          <h2 className={heading}>Contact Us</h2>
          <ul className="m-0 mt-4 list-none space-y-4 p-0 text-[0.9rem] lg:space-y-[0.8rem]">
            <li>
              <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 transition-colors duration-200 hover:text-gold">
                <PinIcon className="mt-0.5 size-5 shrink-0" />
                <address className="not-italic leading-[1.5]">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.line3}
                </address>
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="flex min-h-9 items-center gap-3 hover:text-gold lg:min-h-0">
                <PhoneIcon className="size-5 shrink-0" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink("Hello Marhaba Travel & Holidays, I would like to plan a journey.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-9 items-center gap-3 hover:text-gold lg:min-h-0"
              >
                <WhatsAppIcon className="size-5 shrink-0" />
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-[59.6rem] flex-col items-center gap-2 border-t border-white/15 pt-5 text-center text-[0.85rem] text-white/75 sm:flex-row sm:justify-between sm:text-left lg:mt-[2.75rem]">
        <p className="m-0">
          &copy; {new Date().getFullYear()} {site.shortName}
        </p>
        <p className="m-0 text-white">Travel Easy. Travel Happy with Marhaba</p>
      </div>
    </footer>
  );
}
