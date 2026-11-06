"use client";

import { useState, type FormEvent } from "react";
import { services, whatsappLink } from "@/config/site";
import { WhatsAppIcon } from "./Icons";

const fieldClass =
  "mt-1.5 block min-h-12 w-full rounded-xl border border-navy/20 bg-white px-4 text-[1rem] text-navy-dark placeholder:text-navy-dark/45 transition-[border-color,box-shadow] duration-200 focus:border-navy focus:outline-none focus:ring-2 focus:ring-sky/40 lg:min-h-[2.75rem] lg:text-[0.9rem]";
const labelClass = "block text-[0.9rem] font-medium text-navy-dark";

/**
 * The site has no server to receive messages, so the form writes the visitor's
 * details into a WhatsApp message, which they review and send themselves.
 */
export function ContactForm() {
  const [opened, setOpened] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const value = (name: string) => String(data.get(name) ?? "").trim();
    const lines = [
      "Hello Marhaba Travel & Holidays, I have an enquiry.",
      "",
      `Name: ${value("name")}`,
      `Phone: ${value("phone")}`,
      `Service: ${value("service")}`,
    ];
    if (value("message")) lines.push(`Message: ${value("message")}`);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setOpened(true);
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClass}>
          Your Name
          <input name="name" type="text" required autoComplete="name" placeholder="Your name" className={fieldClass} />
        </label>
        <label className={labelClass}>
          Phone Number
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            pattern="[0-9+\(\) \-]{7,20}"
            title="Enter a valid phone number"
            placeholder="Your phone number"
            className={fieldClass}
          />
        </label>
      </div>
      <label className={labelClass}>
        Service Required
        <select name="service" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
      </label>
      <label className={labelClass}>
        Your Message
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your travel plans and dates"
          className={`${fieldClass} py-3`}
        />
      </label>
      <button
        type="submit"
        className="btn btn-gold w-full"
      >
        <WhatsAppIcon className="size-5" />
        Send on WhatsApp
      </button>
      <p role="status" className="m-0 text-center text-[0.85rem] leading-[1.5] text-navy-dark/75">
        {opened
          ? "WhatsApp has opened with your message. Press send there to reach us."
          : "Your details open in WhatsApp, where you can check them and press send."}
      </p>
    </form>
  );
}
