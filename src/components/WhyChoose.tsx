import Image from "next/image";
import { whyChoose } from "@/config/site";
import { CheckCircleIcon } from "./Icons";

export function WhyChoose() {
  return (
    <section id="why-choose" className="why">
      {/* Curved top edge from the desktop banner, for the stacked layout */}
      <svg
        className="absolute inset-x-0 top-0 h-10 w-full lg:hidden"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M0 0h1000v100C700 95 300 35 0 0Z" fill="#E2EEFD" />
      </svg>
      <Image
        src="/images/why-desktop.webp"
        alt=""
        fill
        quality={88}
        sizes="100vw"
        className="hidden object-cover object-[center_top] lg:block"
      />
      <div className="relative z-[1] px-5 pb-6 pt-14 md:px-8 lg:absolute lg:left-[3.5%] lg:top-[19%] lg:p-0">
        <h2 className="m-0 font-heading font-bold leading-[1.18] text-white">
          <span className="block text-[1.65rem] lg:text-[1.55rem]">Why Choose</span>
          <span className="block text-[min(5.3vw,1.75rem)] text-gold lg:text-[1.5rem]">
            MARHABA TRAVEL &amp; HOLIDAYS?
          </span>
        </h2>
        <ul className="m-0 mt-3 list-none space-y-2.5 p-0 lg:mt-[0.65rem] lg:space-y-[0.42rem]">
          {whyChoose.map((item) => (
            <li key={item} className="flex items-center gap-[0.65rem] text-[1rem] text-white lg:text-[0.98rem]">
              <CheckCircleIcon className="size-[1.25rem] shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="relative lg:hidden">
      <Image
        src="/images/why-mobile.webp"
        alt="Passport, world map, model aeroplane and globe"
        width={1108}
        height={386}
        quality={88}
        sizes="(min-width: 1024px) 1px, 100vw"
        className="block h-auto w-full"
      />
      <svg className="absolute inset-x-0 top-[-1px] h-8 w-full" viewBox="0 0 1000 100" preserveAspectRatio="none" aria-hidden>
        <path d="M0 0h1000v30C700 110 300 10 0 80Z" fill="#022345" />
      </svg>
      </div>
    </section>
  );
}
