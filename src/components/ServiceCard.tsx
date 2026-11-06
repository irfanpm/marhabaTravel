import type { ServiceIcon } from "@/config/site";
import { ServiceGlyph } from "./Icons";

export const serviceCardClass =
  "group flex h-full flex-col rounded-[1.1rem] border border-navy/[0.07] bg-white shadow-[0_4px_16px_rgb(8_45_89/0.06)] transition-[background-color,box-shadow,translate] duration-300 hover:-translate-y-1 hover:bg-navy hover:shadow-[0_16px_32px_rgb(8_45_89/0.22)] active:scale-[0.98]";

export function ServiceTile({ icon }: { icon: ServiceIcon }) {
  return (
    <span className="grid size-[3rem] shrink-0 place-items-center rounded-[0.9rem] bg-navy text-white transition-[background-color,color,scale,rotate] duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-gold group-hover:text-navy-dark">
      <ServiceGlyph icon={icon} className={icon === "visa-stamp" ? "w-[2rem]" : "size-[1.55rem]"} />
    </span>
  );
}
