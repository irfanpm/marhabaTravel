import { enquiryLink, services } from "@/config/site";
import { ServiceGlyph } from "./Icons";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section id="services" className="px-4 pb-8 pt-7 md:px-6 lg:-mt-[0.9rem] lg:px-[2.2rem] lg:pb-0 lg:pt-0">
      <SectionHeading title="Our Services" subtitle="Complete Travel Solutions Under One Roof" ruled size="lg" />
      <ul className="m-0 mt-5 grid list-none grid-cols-2 gap-3 p-0 md:grid-cols-4 lg:mt-[0.3rem] lg:grid-cols-8 lg:gap-[0.75rem]">
        {services.map((s) => (
          <li key={s.title}>
            <a
              href={enquiryLink(s.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full min-h-[7.25rem] flex-col items-center justify-center active:scale-[0.98] lg:justify-start rounded-[1.1rem] border border-navy/[0.04] bg-white px-2 pb-3 pt-[0.85rem] text-center shadow-[0_4px_14px_rgb(8_45_89/0.08)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_10px_22px_rgb(8_45_89/0.14)] lg:min-h-[7.95rem] lg:px-[0.2rem] lg:pb-[0.4rem] lg:pt-[0.7rem]"
            >
              <span className="grid size-[3.1rem] shrink-0 place-items-center rounded-full bg-navy text-white lg:size-[2.85rem]">
                <ServiceGlyph icon={s.icon} className={s.icon === "visa-stamp" ? "w-[2.05rem]" : "size-[1.65rem]"} />
              </span>
              <span className="mt-2 text-[0.9rem] font-medium leading-[1.25] text-navy-dark lg:mt-[0.4rem] lg:text-[0.82rem] lg:leading-[1.2]">
                {s.title.split(" ").map((word) => (
                  <span key={word} className="lg:block">
                    {word}{" "}
                  </span>
                ))}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
