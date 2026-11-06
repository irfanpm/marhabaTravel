import type { Metadata, Viewport } from "next";
import { Dancing_Script, Playfair_Display, Poppins } from "next/font/google";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollReveal } from "@/components/ScrollReveal";
import { site, siteUrl } from "@/config/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair",
  display: "swap",
  preload: false,
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const script = Dancing_Script({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-script-face",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.shortName} | Flights, Visas, Umrah & Tour Packages in Aluva, Kerala`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "travel agency Aluva",
    "flight tickets Kerala",
    "Umrah packages Kerala",
    "visit visa Aluva",
    "visa stamping",
    "tour packages",
    "travel insurance",
    "passport assistance",
  ],
  openGraph: {
    title: site.shortName,
    description: site.description,
    type: "website",
    locale: "en_IN",
    images: [{ url: "/images/hero-desktop.webp", width: 2048, height: 940, alt: site.shortName }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#082D59",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${poppins.variable} ${script.variable}`}
    >
      <body>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <ScrollReveal />
        <Header />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
