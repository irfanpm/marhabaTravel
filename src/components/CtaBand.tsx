import { site, whatsappLink } from "@/config/site";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

/** Closing call to action, in the brand gold, directly above the footer. */
export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-gold">
      <svg className="absolute inset-0 size-full" viewBox="0 0 1440 200" preserveAspectRatio="none" aria-hidden>
        <path d="M-20 170C260 60 640 40 900 110S1300 190 1460 60" fill="none" stroke="#fff" strokeOpacity="0.35" strokeWidth="2" strokeDasharray="10 12" />
      </svg>
      <div className="reveal relative mx-auto flex max-w-[64rem] flex-col items-start gap-5 px-5 py-10 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-[2rem] lg:px-[2.2rem] lg:py-[2.6rem]">
        <div>
          <h2 className="m-0 font-heading text-[1.7rem] font-bold leading-[1.2] text-navy-dark lg:text-[1.9rem]">
            Ready for Your Next Journey?
          </h2>
          <p className="m-0 mt-1.5 text-[0.95rem] leading-[1.5] text-navy-dark/85">
            Tell us where you want to go and we will help you plan it.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:shrink-0">
          <a
            href={whatsappLink("Hello Marhaba Travel & Holidays, I would like to plan a journey.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-navy"
          >
            <WhatsAppIcon className="size-[1.15rem]" />
            Chat on WhatsApp
          </a>
          <a href={site.phoneHref} className="btn btn-outline">
            <PhoneIcon className="size-[1.15rem]" />
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
