import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { ChevronRightIcon } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { MoreHelpCard, serviceCardClass, ServiceTile } from "@/components/ServiceCard";
import { enquiryLink, serviceSteps, services } from "@/config/site";

export const metadata: Metadata = {
  alternates: { canonical: "/services" },
  title: "Our Services",
  description:
    "Flight tickets, bus tickets, visit visas, Umrah packages, tour packages, online passport assistance, certificate attestation, travel insurance, VFS appointments, medical appointments and visa stamping from MARHABA Travel & Holidays, Aluva.",
};

export default function ServicesPage() {
  return (
    <main id="main">
      <PageHero title="Our Services" subtitle="Complete travel solutions under one roof, from your first ticket to your journey home." />

      <section className="mx-auto max-w-[64rem] px-4 pb-14 pt-8 md:px-6 md:pb-16 md:pt-10 lg:px-[2.2rem] lg:pb-[4.75rem] lg:pt-[2.75rem]">
        <SectionHeading eyebrow="What We Do" title="How Can We Help You?" subtitle="Choose a service and send us an enquiry" />
        <ul className="m-0 mt-8 grid list-none gap-4 p-0 sm:grid-cols-2 lg:mt-[2.5rem] lg:grid-cols-4 lg:gap-[1.1rem]">
          {services.map((s) => (
            <li key={s.slug} id={s.slug} className="reveal scroll-mt-3">
              <a
                href={enquiryLink(s.title)}
                target="_blank"
                rel="noopener noreferrer"
                className={`${serviceCardClass} p-5 lg:p-[1.25rem]`}
              >
                <ServiceTile icon={s.icon} />
                <h2 className="m-0 mt-4 text-[1.05rem] font-semibold leading-[1.3] text-navy-dark transition-colors duration-300 group-hover:text-white">
                  {s.title}
                </h2>
                <p className="m-0 mt-2 flex-1 text-[0.875rem] leading-[1.6] text-navy-dark/75 transition-colors duration-300 group-hover:text-white/80">
                  {s.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-[0.875rem] font-semibold text-navy transition-colors duration-300 group-hover:text-gold">
                  Enquire Now
                  <ChevronRightIcon className="size-[0.8rem]" />
                </span>
              </a>
            </li>
          ))}
          <MoreHelpCard />
        </ul>
      </section>

      <section className="bg-page">
        <div className="mx-auto max-w-[64rem] px-4 py-14 md:px-6 md:py-16 lg:px-[2.2rem] lg:py-[4.75rem]">
          <SectionHeading eyebrow="Simple Process" title="How It Works" subtitle="Three simple steps to get your journey started" />
          <ol className="m-0 mt-9 grid list-none gap-8 p-0 md:grid-cols-3 lg:mt-[2.75rem] lg:gap-[2.5rem]">
            {serviceSteps.map((step, index) => (
              <li key={step.title} className="reveal text-center">
                <span className="mx-auto grid size-[3.25rem] place-items-center rounded-full bg-navy text-[1.15rem] font-semibold text-gold">
                  {index + 1}
                </span>
                <h3 className="m-0 mt-4 text-[1.05rem] font-semibold text-navy-dark">{step.title}</h3>
                <p className="m-0 mx-auto mt-2 max-w-[22rem] text-[0.9rem] leading-[1.6] text-navy-dark/75">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
