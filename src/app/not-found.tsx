import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main id="main">
      <PageHero title="Page Not Found" subtitle="We could not find that page. It may have moved, or the link may be incorrect." />
      <section className="mx-auto flex max-w-[64rem] flex-wrap justify-center gap-3 px-4 py-14">
        <Link href="/" className="btn btn-navy">
          Back to Home
        </Link>
        <Link href="/services" className="btn btn-outline">
          Our Services
        </Link>
        <Link href="/contact" className="btn btn-outline">
          Contact Us
        </Link>
      </section>
    </main>
  );
}
