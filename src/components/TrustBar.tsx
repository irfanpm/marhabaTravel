import Link from "next/link";
import { mapsLink, services, site, whatsappLink } from "@/config/site";
import { GoogleIcon, PinIcon, StarIcon, SuitcaseIcon, WhatsAppIcon } from "./Icons";

const cell =
  "group flex h-full min-h-[4.25rem] items-center gap-2 rounded-xl p-2 transition-colors duration-300 hover:bg-page sm:gap-3 sm:p-2.5 lg:gap-[0.8rem] lg:px-[1rem]";
const tile =
  "grid size-[2.2rem] shrink-0 place-items-center rounded-xl bg-navy/[0.07] text-navy transition-[scale] duration-300 group-hover:scale-110 sm:size-[2.6rem]";
const strong = "block text-[0.82rem] font-semibold leading-[1.25] text-navy-dark sm:text-[0.9rem]";
const small = "mt-0.5 block text-[0.72rem] leading-[1.3] text-navy-dark/70 sm:text-[0.78rem]";

/** The reasons to trust the business, placed where a visitor sees them straight away. */
export function TrustBar() {
  return (
    <div className="trust-in relative z-[3] mx-auto -mt-2 max-w-[64rem] px-4 md:-mt-6 md:px-6 lg:-mt-[1.9rem] lg:px-[2.2rem]">
      <ul className="m-0 grid list-none grid-cols-2 gap-1 rounded-[1.25rem] border border-navy/[0.06] bg-white p-2 shadow-[0_14px_38px_rgb(8_45_89/0.14)] lg:grid-cols-4">
        <li>
          <a href={mapsLink} target="_blank" rel="noopener noreferrer" className={cell}>
            <span className={`${tile} bg-white shadow-[0_2px_8px_rgb(8_45_89/0.12)]`}>
              <GoogleIcon className="size-[1.3rem] sm:size-[1.5rem]" />
            </span>
            <span>
              <span className={`${strong} flex flex-wrap items-center gap-x-1.5`}>
                {site.google.rating}
                <span className="flex text-gold" role="img" aria-label={`Rated ${site.google.rating} out of 5`}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <StarIcon key={i} className="size-[0.72rem]" />
                  ))}
                </span>
              </span>
              <span className={small}>{site.google.reviews} Google reviews</span>
            </span>
          </a>
        </li>
        <li>
          <Link href="/services" className={cell}>
            <span className={tile}>
              <SuitcaseIcon className="size-[1.35rem]" />
            </span>
            <span>
              <span className={strong}>{services.length} Services</span>
              <span className={small}>Under one roof</span>
            </span>
          </Link>
        </li>
        <li>
          <a href={mapsLink} target="_blank" rel="noopener noreferrer" className={cell}>
            <span className={tile}>
              <PinIcon className="size-[1.35rem]" />
            </span>
            <span>
              <span className={strong}>Visit Our Office</span>
              <span className={small}>Sub Jail Rd, Aluva</span>
            </span>
          </a>
        </li>
        <li>
          <a
            href={whatsappLink("Hello Marhaba Travel & Holidays, I would like to plan a journey.")}
            target="_blank"
            rel="noopener noreferrer"
            className={cell}
          >
            <span className={tile}>
              <WhatsAppIcon className="size-[1.3rem]" />
            </span>
            <span>
              <span className={strong}>WhatsApp Us</span>
              <span className={small}>{site.phoneDisplay}</span>
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
