import Link from "next/link";
import type { ServiceIcon } from "@/config/site";
import { ChatIcon, ChevronRightIcon, ServiceGlyph } from "./Icons";

export const serviceCardClass =
  "group flex h-full flex-col rounded-[1.1rem] border border-navy/[0.07] bg-white shadow-[0_4px_16px_rgb(8_45_89/0.06)] transition-[background-color,box-shadow,translate] duration-300 hover:-translate-y-1 hover:bg-navy hover:shadow-[0_16px_32px_rgb(8_45_89/0.22)] active:scale-[0.98]";

export function ServiceTile({ icon }: { icon: ServiceIcon }) {
  return (
    <span className="grid size-[3rem] shrink-0 place-items-center rounded-[0.9rem] bg-navy text-white transition-[background-color,color,scale,rotate] duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-gold group-hover:text-navy-dark">
      <ServiceGlyph icon={icon} className={icon === "visa-stamp" ? "w-[2rem]" : "size-[1.55rem]"} />
    </span>
  );
}

/** Last card in the grid, for anything the list does not name. */
export function MoreHelpCard() {
  return (
    <li className="reveal">
      <Link
        href="/contact"
        className="group flex h-full flex-col rounded-[1.1rem] bg-navy p-4 text-white shadow-[0_4px_16px_rgb(8_45_89/0.14)] transition-[box-shadow,translate] duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgb(8_45_89/0.28)] active:scale-[0.98] lg:p-[1.25rem]"
      >
        <span className="grid size-[3rem] shrink-0 place-items-center rounded-[0.9rem] bg-gold text-navy-dark transition-[scale,rotate] duration-300 group-hover:-rotate-6 group-hover:scale-110">
          <ChatIcon className="size-[1.55rem]" />
        </span>
        <span className="mt-3.5 text-[0.95rem] font-semibold leading-[1.3]">Need Something Else?</span>
        <span className="mt-1.5 hidden flex-1 text-[0.85rem] leading-[1.5] text-white/80 md:block">
          Tell us what you need and we will guide you.
        </span>
        <span className="mt-2 inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-gold">
          Contact Us
          <ChevronRightIcon className="size-[0.75rem]" />
        </span>
      </Link>
    </li>
  );
}
