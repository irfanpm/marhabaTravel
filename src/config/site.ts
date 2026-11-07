/**
 * Single source of truth for business details and page content.
 * Edit this file to change contact details, links or labels across the site.
 */

export const site = {
  name: "MARHABA TRAVEL & HOLIDAYS",
  shortName: "Marhaba Travel & Holidays",
  description:
    "MARHABA Travel & Holidays in Aluva, Kerala: flight tickets, bus tickets, visit visas, Umrah packages, tour packages, online passport assistance, certificate attestation, travel insurance, VFS appointments, medical appointments and visa stamping.",
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

/** Public address of the site. Set NEXT_PUBLIC_SITE_URL once a custom domain is in place. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsappNumber}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const enquiryLink = (subject: string) =>
  whatsappLink(`Hello Marhaba Travel & Holidays, I would like to enquire about ${subject}.`);

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `Marhaba Travel & Holidays, ${site.address.full}`,
)}`;

export const navLinks = [
  { id: "home", label: "Home", href: "/#home" },
  { id: "services", label: "Services", href: "/services" },
  { id: "packages", label: "Tour Packages", href: "/#packages" },
  { id: "about", label: "About Us", href: "/#about" },
  { id: "contact", label: "Contact", href: "/contact" },
] as const;

export type ServiceIcon =
  | "flight"
  | "bus"
  | "visit-visa"
  | "tour"
  | "visa-stamp"
  | "insurance"
  | "umrah"
  | "passport"
  | "attestation"
  | "appointment"
  | "medical";

export const services: {
  slug: string;
  title: string;
  icon: ServiceIcon;
  /** One line for the homepage card. */
  summary: string;
  /** Fuller text for the Services page. */
  description: string;
}[] = [
  {
    slug: "flight-tickets",
    title: "Flight Tickets",
    icon: "flight",
    summary: "Domestic and international air ticket booking.",
    description:
      "Domestic and international air ticket booking, with help choosing the routes and timings that suit your trip.",
  },
  {
    slug: "bus-tickets",
    title: "Bus Tickets",
    icon: "bus",
    summary: "Bus ticket booking for your journey.",
    description: "Bus ticket booking for your journey, arranged for you so there is one less thing to plan.",
  },
  {
    slug: "visit-visas",
    title: "Visit Visas",
    icon: "visit-visa",
    summary: "Guidance and support for visit visas.",
    description:
      "Guidance and application support for visit visas, including help understanding which documents to prepare.",
  },
  {
    slug: "umrah-packages",
    title: "Umrah Packages",
    icon: "umrah",
    summary: "Umrah journeys planned with care.",
    description: "Umrah packages planned with care, with personal support as you prepare for your pilgrimage.",
  },
  {
    slug: "tour-packages",
    title: "Tour Packages",
    icon: "tour",
    summary: "Tours planned around your destination.",
    description: "Tour packages planned around your destination, your dates and the people travelling with you.",
  },
  {
    slug: "online-passport-assistance",
    title: "Online Passport Assistance",
    icon: "passport",
    summary: "Support with online passport applications.",
    description: "Support with online passport applications, including filling in the forms and preparing your documents.",
  },
  {
    slug: "certificate-attestation",
    title: "Certificate Attestation",
    icon: "attestation",
    summary: "Help getting your certificates attested.",
    description: "Help getting your certificates attested, including what to prepare and how the process works.",
  },
  {
    slug: "travel-insurance",
    title: "Travel Insurance",
    icon: "insurance",
    summary: "Insurance arranged for your trip.",
    description: "Travel insurance arranged for your trip, with help understanding which cover suits your journey.",
  },
  {
    slug: "vfs-appointment",
    title: "VFS Appointment",
    icon: "appointment",
    summary: "Help booking your VFS appointment.",
    description: "Help booking your VFS appointment, so you know the date and what to bring with you.",
  },
  {
    slug: "medical-appointment",
    title: "Medical Appointment",
    icon: "medical",
    summary: "Help booking your medical appointment.",
    description: "Help booking the medical appointment needed for your travel or visa process.",
  },
  {
    slug: "visa-stamping",
    title: "Visa Stamping",
    icon: "visa-stamp",
    summary: "Help with your visa stamping process.",
    description: "Help with the visa stamping process, from preparing your documents to submitting them.",
  },
];

export const serviceSteps = [
  { title: "Tell Us What You Need", text: "Call us, message us on WhatsApp or visit our office in Aluva with your travel plans." },
  { title: "We Guide You", text: "We explain your options and the documents needed, so you know exactly what comes next." },
  { title: "Travel With Confidence", text: "We take care of the arrangements and stay in touch while you get ready for your journey." },
] as const;

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
  { title: "Trusted & Reliable Service", text: "Clear guidance and dependable arrangements you can count on." },
  { title: "Comprehensive Travel Solutions", text: "Tickets, visas, insurance and tours, all in one place." },
  { title: "Personalized Support", text: "Plans shaped around your trip, with people you can talk to." },
] as const;
