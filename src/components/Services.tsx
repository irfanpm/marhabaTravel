import Link from "next/link";
import { services } from "@/config/site";
import { ChevronRightIcon } from "./Icons";
import { SectionHeading } from "./SectionHeading";
import { serviceCardClass, ServiceTile } from "./ServiceCard";

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-[64rem] px-4 py-14 md:px-6 md:py-16 lg:px-[2.2rem] lg:py-[4.75rem]">
      <SectionHeading eyebrow="What We Do" title="Our Services" subtitle="Complete Travel Solutions Under One Roof" />
      <ul className="m-0 mt-8 grid list-none grid-cols-2 gap-3 p-0 md:gap-4 lg:mt-[2.5rem] lg:grid-cols-4 lg:gap-[1.1rem]">
        {services.map((s) => (
          <li key={s.slug} className="reveal">
            <Link href={`/services#${s.slug}`} className={`${serviceCardClass} p-4 lg:p-[1.25rem]`}>
              <ServiceTile icon={s.icon} />
              <span className="mt-3.5 text-[0.95rem] font-semibold leading-[1.3] text-navy-dark transition-colors duration-300 group-hover:text-white">
                {s.title}
              </span>
              <span className="mt-1.5 hidden flex-1 text-[0.85rem] leading-[1.5] text-navy-dark/70 transition-colors duration-300 group-hover:text-white/80 md:block">
                {s.summary}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="reveal mt-8 text-center lg:mt-[2.25rem]">
        <Link href="/services" className="btn btn-outline">
          View All Services
          <ChevronRightIcon className="size-[0.85em]" />
        </Link>
      </div>
    </section>
  );
}
