import Image from "next/image";
import type { SVGProps } from "react";
import { mapsLink, site } from "@/config/site";
import { FacebookIcon, InstagramIcon, PhoneIcon, PinIcon, YoutubeIcon } from "./Icons";

const socials: {
  label: string;
  url: string;
  Icon: (p: SVGProps<SVGSVGElement>) => React.JSX.Element;
}[] = [
  { label: "Facebook", url: site.socials.facebook, Icon: FacebookIcon },
  { label: "Instagram", url: site.socials.instagram, Icon: InstagramIcon },
  { label: "YouTube", url: site.socials.youtube, Icon: YoutubeIcon },
];

const divider = "hidden lg:block h-[5.8rem] w-px bg-white/35";
const socialClass =
  "grid size-11 place-items-center rounded-full bg-white text-navy-dark transition-transform lg:size-[1.9rem]";

export function Footer() {
  return (
    <footer id="contact" className="bg-navy-dark px-5 pb-[5.5rem] pt-9 text-white md:px-8 lg:px-[1.7rem] lg:pb-[0.75rem] lg:pt-[1.3rem]">
      <div className="flex flex-col items-center gap-6 text-center md:grid md:grid-cols-2 md:items-center md:gap-x-8 md:text-left lg:flex lg:flex-row lg:justify-between lg:gap-0">
        <a href="#home" aria-label={`${site.name} home`} className="shrink-0 lg:w-[14rem]">
          <Image
            src="/images/logo-white.png"
            alt={site.name}
            width={896}
            height={258}
            className="h-auto w-[13rem] lg:w-[13.1rem]"
          />
        </a>

        <span className={divider} />

        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-3 hover:underline lg:ml-[1.4rem] lg:w-[17.5rem] lg:items-center lg:gap-[1.1rem]"
        >
          <PinIcon className="mt-0.5 size-7 shrink-0 lg:mt-0 lg:size-[1.8rem]" />
          <address className="text-left text-[0.95rem] not-italic leading-[1.35] lg:text-[0.9rem]">
            {site.address.line1}
            <br />
            {site.address.line2}
            <br />
            {site.address.line3}
          </address>
        </a>

        <span className={divider} />

        <a
          href={site.phoneHref}
          className="flex min-h-11 items-center gap-3 text-[1.1rem] hover:underline lg:ml-[1.9rem] lg:w-[13.4rem] lg:gap-[1rem] lg:text-[1.1rem]"
        >
          <PhoneIcon className="size-7 shrink-0 lg:size-[1.8rem]" />
          {site.phoneDisplay}
        </a>

        <span className={divider} />

        <ul className="m-0 flex list-none gap-3 p-0 lg:ml-[2.1rem] lg:gap-[0.85rem]">
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

      <div className="mt-7 flex items-center gap-[1.2rem] lg:mt-[1.1rem] lg:px-[0.6rem]">
        <span className="h-px flex-1 bg-white/30" />
        <p className="m-0 text-center text-[0.875rem] lg:text-[0.83rem]">Travel Easy. Travel Happy with Marhaba</p>
        <span className="h-px flex-1 bg-white/30" />
      </div>
    </footer>
  );
}
