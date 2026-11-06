import Image from "next/image";
import { whyChoose } from "@/config/site";
import { ChatIcon, GlobeIcon, ShieldCheckIcon } from "./Icons";
import { Eyebrow } from "./SectionHeading";

const icons = [ShieldCheckIcon, GlobeIcon, ChatIcon];

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
        <path d="M0 0h1000v100C700 95 300 35 0 0Z" fill="#FBFCFE" />
      </svg>

      <div className="why-banner">
        {/* Sits at the right edge; the section's navy continues it to the left on wide screens */}
        <div className="absolute inset-y-0 right-0 hidden w-[calc(var(--u)*1024)] lg:block">
          <Image
            src="/images/why-desktop.webp"
            alt=""
            fill
            quality={78}
            sizes="(min-width: 1229px) 1229px, 100vw"
            className="object-cover object-[center_top]"
          />
          <span className="absolute inset-x-0 bottom-0 h-[22%] bg-gradient-to-t from-why-navy to-transparent" />
        </div>
        <div className="relative z-[1] px-5 pb-6 pt-14 md:px-8 lg:absolute lg:left-[calc(2.2rem+max(0px,(100vw-64rem)/2))] lg:top-[28%] lg:p-0">
          <div className="reveal reveal-left">
          <Eyebrow light>Why Marhaba</Eyebrow>
          <h2 className="m-0 font-heading font-bold leading-[1.18] text-white">
            <span className="block text-[1.7rem] lg:text-[1.9rem]">Why Choose</span>
            <span className="block text-[min(5.3vw,1.75rem)] text-gold lg:text-[1.65rem]">
              MARHABA TRAVEL &amp; HOLIDAYS?
            </span>
          </h2>
          </div>
        </div>
        <div className="relative lg:hidden">
          <Image
            src="/images/why-mobile.webp"
            alt="Passport, world map, model aeroplane and globe"
            width={1108}
            height={386}
            quality={78}
            sizes="(min-width: 1024px) 1px, 100vw"
            className="block h-auto w-full"
          />
          <svg className="absolute inset-x-0 top-[-1px] h-8 w-full" viewBox="0 0 1000 100" preserveAspectRatio="none" aria-hidden>
            <path d="M0 0h1000v30C700 110 300 10 0 80Z" fill="#022345" />
          </svg>
        </div>
      </div>

      <ul className="relative mx-auto m-0 grid max-w-[64rem] list-none gap-7 px-5 pb-12 pt-9 md:grid-cols-3 md:gap-6 md:px-8 lg:gap-[2.5rem] lg:px-[2.2rem] lg:pb-[3.75rem] lg:pt-[1.5rem]">
        {whyChoose.map((item, index) => {
          const Icon = icons[index];
          return (
            <li key={item.title} className="reveal flex gap-4">
              <span className="grid size-[2.9rem] shrink-0 place-items-center rounded-[0.9rem] bg-gold text-navy-dark">
                <Icon className="size-[1.5rem]" />
              </span>
              <div>
                <h3 className="m-0 text-[1rem] font-semibold leading-[1.3] text-white">{item.title}</h3>
                <p className="m-0 mt-1.5 text-[0.875rem] leading-[1.55] text-white/75">{item.text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
