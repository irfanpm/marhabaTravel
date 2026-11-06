/**
 * Single source of truth for business details and page content.
 * Edit this file to change contact details, links or labels across the site.
 */

export const site = {
  name: "MARHABA TRAVEL & HOLIDAYS",
  shortName: "Marhaba Travel & Holidays",
  description:
    "MARHABA Travel & Holidays in Aluva, Kerala: flight tickets, bus tickets, visit visas, tour packages, visa stamping, travel insurance, Umrah packages and online passport assistance.",
  phoneDisplay: "+91 99462 01612",
  phoneHref: "tel:+919946201612",
  whatsappNumber: "919946201612",
  address: {
    line1: "Kodavath Shopping Complex,",
    line2: "Sub Jail Rd, Aluva,",
    line3: "Kerala 683101",
    full: "Kodavath Shopping Complex, Sub Jail Rd, Aluva, Kerala 683101",
  },
  google: { rating: "4.9", reviews: 19 },
  /**
   * Paste the real profile URLs here. While a value is empty, its icon is
   * still shown in the footer but is not a link.
   */
  socials: {
    facebook: "",
    instagram: "",
    youtube: "",
  },
} as const;

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsappNumber}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const enquiryLink = (subject: string) =>
  whatsappLink(`Hello Marhaba Travel & Holidays, I would like to enquire about ${subject}.`);

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `Marhaba Travel & Holidays, ${site.address.full}`,
)}`;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Tour Packages", href: "#packages" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export type ServiceIcon =
  | "flight"
  | "bus"
  | "visit-visa"
  | "tour"
  | "visa-stamp"
  | "insurance"
  | "umrah"
  | "passport";

export const services: { title: string; icon: ServiceIcon }[] = [
  { title: "Flight Tickets", icon: "flight" },
  { title: "Bus Tickets", icon: "bus" },
  { title: "Visit Visas", icon: "visit-visa" },
  { title: "Tour Packages", icon: "tour" },
  { title: "Visa Stamping", icon: "visa-stamp" },
  { title: "Travel Insurance", icon: "insurance" },
  { title: "Umrah Packages", icon: "umrah" },
  { title: "Online Passport Assistance", icon: "passport" },
];

export type PackageIcon = "umrah" | "tour" | "flight" | "palm";

export const packages: { title: string; image: string; alt: string; icon: PackageIcon }[] = [
  {
    title: "Umrah Packages",
    image: "/images/package-umrah.webp",
    alt: "The Kaaba and the minarets of Masjid al-Haram in Makkah",
    icon: "umrah",
  },
  {
    title: "Tour Packages",
    image: "/images/package-tour.webp",
    alt: "Tropical beach with palm trees and turquoise water",
    icon: "tour",
  },
  {
    title: "Flight Tickets",
    image: "/images/package-flight.webp",
    alt: "Passenger aeroplane flying above the clouds at sunset",
    icon: "flight",
  },
  {
    title: "Holiday Packages",
    image: "/images/package-holiday.webp",
    alt: "City skyline reflected in the water at dusk",
    icon: "palm",
  },
];

export const whyChoose = [
  "Trusted & Reliable Service",
  "Comprehensive Travel Solutions",
  "Personalized Support",
] as const;
