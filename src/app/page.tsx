import { About } from "@/components/About";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Packages } from "@/components/Packages";
import { Services } from "@/components/Services";
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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main>
        <Hero />
        <div className="page-sky">
          <Services />
          <About />
          <Packages />
        </div>
        <WhyChoose />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
