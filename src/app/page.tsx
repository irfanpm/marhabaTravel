import { About } from "@/components/About";
import { CtaBand } from "@/components/CtaBand";
import { Hero } from "@/components/Hero";
import { Packages } from "@/components/Packages";
import { Services } from "@/components/Services";
import { TrustBar } from "@/components/TrustBar";
import { WhyChoose } from "@/components/WhyChoose";
import { mapsLink, site } from "@/config/site";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: site.shortName,
  description: site.description,
  telephone: "+919946201612",
  hasMap: mapsLink,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kodavath Shopping Complex, Sub Jail Rd",
    addressLocality: "Aluva",
    addressRegion: "Kerala",
    postalCode: "683101",
    addressCountry: "IN",
  },
};

export const metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main id="main">
        <Hero />
        <TrustBar />
        <Services />
        <div className="relative overflow-x-clip bg-page">
          <About />
        </div>
        <Packages />
        <WhyChoose />
        <CtaBand />
      </main>
    </>
  );
}
