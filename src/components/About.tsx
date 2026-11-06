import Image from "next/image";
import { mapsLink, site } from "@/config/site";
import { ChevronRightIcon, GoogleIcon, PinIcon, StarIcon } from "./Icons";

const clipPath =
  "M.0068 .2006C.0068 .09 .06 .0056 .1424 .0056L.937 .0056C.968 .0056 .99 .035 .9806 .0734L.811 .8503C.795 .92 .76 .98 .719 .9746L.0649 .8785C.03 .873 .0068 .83 .0068 .7797Z";

export function About() {
  return (
    <section
      id="about"
      className="relative z-[1] grid gap-6 px-4 pb-[6.5rem] pt-3 md:grid-cols-2 md:items-center md:px-6 md:pb-[9rem] lg:grid-cols-[21.25rem_1fr_16.5rem] lg:items-start lg:gap-0 lg:pb-[2.1rem] lg:pl-[1.1rem] lg:pr-0 lg:pt-[1.8rem]"
    >
      {/* Slanted photograph with its gold edge */}
      <div className="relative mx-auto aspect-[344/236] w-full max-w-[34rem] lg:max-w-none">
        <svg className="absolute size-full" viewBox="0 0 1 1" preserveAspectRatio="none" aria-hidden>
          <defs>
            <clipPath id="about-shape" clipPathUnits="objectBoundingBox">
              <path d={clipPath} />
            </clipPath>
          </defs>
          <path d={clipPath} fill="#FFBF32" transform="translate(.009 .021)" />
        </svg>
        <Image
          src="/images/about-plane.webp"
          alt="Aeroplane flying above the clouds with the curve of the Earth below"
          fill
          quality={88}
          sizes="(min-width: 1024px) 34vw, (min-width: 576px) 34rem, 100vw"
          className="object-cover"
          style={{ clipPath: "url(#about-shape)" }}
        />
      </div>

      <div className="lg:pl-[2rem] lg:pr-[1.1rem] lg:pt-[0.9rem]">
        <h2 className="m-0 font-heading text-[1.75rem] font-bold leading-[1.2] text-navy">
          About MARHABA
          <br />
          TRAVEL &amp; HOLIDAYS
        </h2>
        <p className="m-0 mt-3 text-[0.9375rem] leading-[1.45] text-navy-dark lg:mt-[0.5rem] lg:text-[0.8rem]">
          At MARHABA Travel &amp; Holidays, we are committed to making your travel dreams a reality. Whether
          it&apos;s a leisure trip, a business journey, or a pilgrimage, we offer reliable and personalized
          travel solutions.
        </p>
        <a
          href="#why-choose"
          className="mt-4 inline-flex min-h-11 items-center gap-[0.9rem] rounded-full bg-navy px-5 text-[0.875rem] font-semibold text-white transition-colors hover:bg-[#0d3f7a] lg:mt-[1rem] lg:min-h-[2.3rem] lg:px-[1.25rem] lg:text-[0.8rem]"
        >
          Know More
          <ChevronRightIcon className="size-[0.85rem]" />
        </a>
      </div>

      <aside
        aria-label="Google rating and location"
        className="rounded-2xl border border-navy/10 bg-white/80 p-5 shadow-[0_4px_14px_rgb(8_45_89/0.06)] backdrop-blur-[2px] md:col-span-2 md:flex md:items-center md:justify-around lg:col-span-1 lg:mt-[0.45rem] lg:block lg:rounded-none lg:border-0 lg:border-l lg:border-navy/15 lg:bg-transparent lg:pb-0 lg:pl-[1.65rem] lg:pr-0 lg:pt-[0.75rem] lg:shadow-none lg:backdrop-blur-none"
      >
        <div>
        <div className="flex items-center gap-4">
          <GoogleIcon className="size-[3rem] shrink-0 lg:size-[2.85rem]" />
          <div>
            <p className="m-0 text-[2rem] font-semibold leading-none text-navy-dark lg:text-[2rem]">
              {site.google.rating}
            </p>
            <p className="m-0 mt-1 flex gap-[0.1rem] text-gold" aria-label={`Rated ${site.google.rating} out of 5`}>
              {Array.from({ length: 5 }, (_, i) => (
                <StarIcon key={i} className="size-[1.15rem] lg:size-[1.1rem]" />
              ))}
            </p>
          </div>
        </div>
        <p className="m-0 mt-2 pl-[4rem] text-[0.9rem] font-semibold text-navy-dark lg:pl-[3.4rem] lg:text-[0.85rem]">
          from {site.google.reviews} reviews
        </p>
        </div>
        <hr className="my-4 border-0 border-t border-navy/15 md:hidden lg:my-[0.8rem] lg:block" />
        <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3">
          <PinIcon className="mt-0.5 size-[1.75rem] shrink-0 text-navy lg:size-[1.6rem]" />
          <address className="text-[0.9rem] not-italic leading-[1.3] text-navy-dark group-hover:underline lg:whitespace-nowrap lg:text-[0.78rem]">
            {site.address.line1}
            <br />
            {site.address.line2}
            <br />
            {site.address.line3}
          </address>
        </a>
      </aside>

      {/* Faint skyline and palm from the reference, sitting behind the content */}
      <Image
        src="/images/skyline.webp"
        alt=""
        width={1008}
        height={216}
        loading="lazy"
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="pointer-events-none absolute bottom-1 right-0 -z-10 h-auto w-full md:w-[70%] [mask-image:linear-gradient(to_bottom,#000_72%,transparent)] lg:[mask-image:none] lg:bottom-[-1.3rem] lg:w-[31.5rem] lg:max-w-none"
      />
    </section>
  );
}
