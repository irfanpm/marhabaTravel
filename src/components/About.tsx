import Image from "next/image";
import { site } from "@/config/site";
import { CheckCircleIcon, ChevronRightIcon, GoogleIcon, StarIcon } from "./Icons";
import { Eyebrow } from "./SectionHeading";

const clipPath =
  "M.0068 .2006C.0068 .09 .06 .0056 .1424 .0056L.937 .0056C.968 .0056 .99 .035 .9806 .0734L.811 .8503C.795 .92 .76 .98 .719 .9746L.0649 .8785C.03 .873 .0068 .83 .0068 .7797Z";

const journeys = ["Leisure trips", "Business journeys", "Pilgrimages"];

export function About() {
  return (
    <section
      id="about"
      className="relative z-[1] mx-auto grid max-w-[64rem] gap-10 px-4 pb-[6.5rem] pt-14 md:grid-cols-2 md:items-center md:px-6 md:pb-[8rem] md:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-[3.5rem] lg:px-[2.2rem] lg:pb-[6.5rem] lg:pt-[4.75rem]"
    >
      {/* Slanted photograph with its gold edge and rating badge */}
      <div className="reveal reveal-left relative mx-auto aspect-[344/236] w-full max-w-[34rem] lg:max-w-none">
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
          quality={78}
          sizes="(min-width: 1152px) 560px, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
          style={{ clipPath: "url(#about-shape)" }}
        />
        <div className="float-soft absolute bottom-[3%] right-[1%] flex items-center gap-2.5 rounded-2xl bg-white px-3.5 py-2.5 shadow-[0_12px_28px_rgb(8_45_89/0.2)]">
          <GoogleIcon className="size-[1.9rem] shrink-0" />
          <div>
            <p className="m-0 flex items-center gap-1.5 text-[1.05rem] font-semibold leading-none text-navy-dark">
              {site.google.rating}
              <span className="flex text-gold" role="img" aria-label={`Rated ${site.google.rating} out of 5`}>
                {Array.from({ length: 5 }, (_, i) => (
                  <StarIcon key={i} className="size-[0.75rem]" />
                ))}
              </span>
            </p>
            <p className="m-0 mt-1 text-[0.75rem] leading-none text-navy-dark/70">from {site.google.reviews} reviews</p>
          </div>
        </div>
      </div>

      <div className="reveal reveal-right">
        <Eyebrow>Who We Are</Eyebrow>
        <h2 className="m-0 font-heading text-[1.9rem] font-bold leading-[1.18] text-navy lg:text-[2.1rem]">
          About MARHABA
          <br />
          TRAVEL &amp; HOLIDAYS
        </h2>
        <p className="m-0 mt-4 text-[0.95rem] leading-[1.7] text-navy-dark/85">
          At MARHABA Travel &amp; Holidays, we are committed to making your travel dreams a reality. Whether
          it&apos;s a leisure trip, a business journey, or a pilgrimage, we offer reliable and personalized
          travel solutions.
        </p>
        <ul className="m-0 mt-5 flex list-none flex-wrap gap-x-5 gap-y-2.5 p-0">
          {journeys.map((j) => (
            <li key={j} className="flex items-center gap-2 text-[0.9rem] font-medium text-navy-dark">
              <CheckCircleIcon className="size-[1.1rem] shrink-0" />
              {j}
            </li>
          ))}
        </ul>
        <a href="#why-choose" className="btn btn-navy mt-6">
          Know More
          <ChevronRightIcon className="size-[0.85em]" />
        </a>
      </div>

      {/* Faint skyline and palm from the reference, sitting behind the content */}
      <Image
        src="/images/skyline.webp"
        alt=""
        width={1008}
        height={216}
        loading="lazy"
        sizes="(min-width: 1024px) 570px, 50vw"
        className="pointer-events-none absolute bottom-0 right-0 -z-10 h-auto w-full md:w-[70%] [mask-image:linear-gradient(to_bottom,transparent,#000_18%,#000_74%,transparent)] lg:right-[min(0px,calc((64rem-100vw)/2))] lg:w-[31.5rem] lg:max-w-none"
      />
    </section>
  );
}
