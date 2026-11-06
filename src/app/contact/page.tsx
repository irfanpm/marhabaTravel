import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { GoogleIcon, PhoneIcon, PinIcon, StarIcon, WhatsAppIcon } from "@/components/Icons";
import { MapEmbed } from "@/components/MapEmbed";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { mapsLink, site, whatsappLink } from "@/config/site";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact Us",
  description: `Contact MARHABA Travel & Holidays in Aluva, Kerala. Call ${site.phoneDisplay}, message us on WhatsApp or visit our office at ${site.address.full}.`,
};

const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(site.address.full)}&output=embed`;

const iconBox = "grid size-12 shrink-0 place-items-center rounded-xl bg-white/10 text-gold lg:size-[2.75rem]";

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero title="Contact Us" subtitle="Tell us about your travel plans. We are happy to help you with your next journey." />

      <div className="bg-page">
        <section className="mx-auto grid max-w-[64rem] gap-6 px-4 pb-14 pt-10 md:px-6 md:pb-16 md:pt-12 lg:grid-cols-[1.25fr_1fr] lg:gap-[1.75rem] lg:px-[2.2rem] lg:pb-[4.5rem] lg:pt-[3rem]">
          <div className="reveal reveal-left rounded-[1.25rem] border border-navy/[0.05] bg-white p-6 shadow-[0_6px_20px_rgb(8_45_89/0.08)] md:p-8 lg:p-[2.25rem]">
            <h2 className="m-0 font-heading text-[1.6rem] font-bold leading-[1.2] text-navy lg:text-[1.5rem]">Send Us a Message</h2>
            <p className="m-0 mb-6 mt-2 text-[0.95rem] leading-[1.55] text-navy-dark/80">
              Fill in your details and send them to us on WhatsApp.
            </p>
            <ContactForm />
          </div>

          <div className="reveal reveal-right flex flex-col rounded-[1.25rem] bg-navy-dark p-6 text-white md:p-8 lg:p-[2.25rem]">
            <h2 className="m-0 font-heading text-[1.6rem] font-bold leading-[1.2] text-gold lg:text-[1.5rem]">Get in Touch</h2>
            <p className="m-0 mt-2 text-[0.95rem] leading-[1.55] text-white/85">
              Reach us directly or visit our office.
            </p>
            <ul className="m-0 mt-7 list-none space-y-6 p-0 lg:space-y-[1.5rem]">
              <li>
                <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4">
                  <span className={iconBox}>
                    <PinIcon className="size-6" />
                  </span>
                  <span>
                    <strong className="block font-semibold lg:text-[0.9rem]">Visit Our Office</strong>
                    <address className="mt-1 text-[0.95rem] not-italic leading-[1.5] text-white/85 group-hover:underline">
                      {site.address.line1}
                      <br />
                      {site.address.line2}
                      <br />
                      {site.address.line3}
                    </address>
                  </span>
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="group flex items-start gap-4">
                  <span className={iconBox}>
                    <PhoneIcon className="size-6" />
                  </span>
                  <span>
                    <strong className="block font-semibold lg:text-[0.9rem]">Call Us</strong>
                    <span className="mt-1 block text-[0.95rem] text-white/85 group-hover:underline">
                      {site.phoneDisplay}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink("Hello Marhaba Travel & Holidays, I would like to plan a journey.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4"
                >
                  <span className={iconBox}>
                    <WhatsAppIcon className="size-6" />
                  </span>
                  <span>
                    <strong className="block font-semibold lg:text-[0.9rem]">WhatsApp</strong>
                    <span className="mt-1 block text-[0.95rem] text-white/85 group-hover:underline">
                      Chat with us on {site.phoneDisplay}
                    </span>
                  </span>
                </a>
              </li>
            </ul>

            <div className="mt-8 border-t border-white/20 pt-6 lg:mt-auto">
              <p className="m-0 flex items-center gap-3">
                <GoogleIcon className="size-9 shrink-0 rounded-full bg-white p-1.5" />
                <span className="text-[1.5rem] font-semibold leading-none">{site.google.rating}</span>
                <span className="flex gap-[0.1rem] text-gold" role="img" aria-label={`Rated ${site.google.rating} out of 5`}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <StarIcon key={i} className="size-[1.05rem]" />
                  ))}
                </span>
              </p>
              <p className="m-0 mt-2 text-[0.9rem] text-white/85">from {site.google.reviews} reviews on Google</p>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-white px-5 text-[0.875rem] font-semibold transition-colors hover:bg-white hover:text-navy-dark lg:min-h-[2.4rem] lg:text-[0.8rem]"
              >
                <PinIcon className="size-[1.1rem]" />
                Open in Google Maps
              </a>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-white">
        <div className="mx-auto max-w-[64rem] px-4 py-14 md:px-6 md:py-16 lg:px-[2.2rem] lg:py-[4.5rem]">
          <SectionHeading eyebrow="Our Location" title="Find Us" subtitle={site.address.full} />
          <MapEmbed title={`Map showing ${site.shortName}, ${site.address.full}`} src={mapEmbed} />
        </div>
      </section>
    </main>
  );
}
