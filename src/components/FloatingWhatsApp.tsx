import { whatsappLink } from "@/config/site";
import { WhatsAppIcon } from "./Icons";

/** Keeps WhatsApp one tap away on every page. */
export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink("Hello Marhaba Travel & Holidays, I would like to plan a journey.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fab fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 grid size-[3.25rem] place-items-center rounded-full bg-[#25D366] text-white shadow-[0_6px_18px_rgb(0_0_0/0.28)] transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
