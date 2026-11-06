import type { Metadata, Viewport } from "next";
import { Dancing_Script, Marck_Script, Playfair_Display, Poppins } from "next/font/google";
import { site } from "@/config/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const script = Dancing_Script({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-script-face",
  display: "swap",
});

const tagline = Marck_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-tagline-face",
  display: "swap",
});

export const metadata: Metadata = {
  // Set NEXT_PUBLIC_SITE_URL to the live domain when deploying
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: `${site.shortName} | Flights, Visas, Umrah & Tour Packages in Aluva, Kerala`,
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
      className={`${playfair.variable} ${poppins.variable} ${script.variable} ${tagline.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
