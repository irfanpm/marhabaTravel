import Image, { getImageProps } from "next/image";
import { whatsappLink } from "@/config/site";
import { ChevronRightIcon } from "./Icons";

const alt =
  "Passenger aeroplane flying above Big Ben, the Eiffel Tower, the Burj Khalifa and the Kaaba under a bright blue sky";

export function Hero() {
  const common = { alt, quality: 88, sizes: "100vw", priority: true };
  const {
    props: { srcSet: desktop },
  } = getImageProps({ ...common, src: "/images/hero-desktop.webp", width: 2048, height: 940 });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({ ...common, src: "/images/hero-mobile.webp", width: 1388, height: 800 });

  return (
    <section id="home" className="hero">
      <div className="hero-copy">
        <h1 className="m-0">
          <span className="hero-script">Explore the World with</span>
          <span className="hero-brand">MARHABA</span>
          <span className="hero-sub-brand">TRAVEL &amp; HOLIDAYS</span>
        </h1>
        <p className="hero-subtitle">
          Your Trusted Travel Partner for
          <br />
          Dream Journeys
        </p>
        <a
          href={whatsappLink("Hello Marhaba Travel & Holidays, I would like to plan a journey.")}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-cta"
        >
          Plan Your Journey
          <span className="hero-cta-arrow">
            <ChevronRightIcon className="size-4" />
          </span>
        </a>
      </div>

      <div className="hero-visual">
        <picture>
          <source media="(min-width: 768px)" srcSet={desktop} sizes="100vw" />
          <source srcSet={mobile} sizes="100vw" />
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img {...rest} alt={alt} />
        </picture>

        {/* Slow clouds drifting behind the plane */}
        <div className="hero-clouds" aria-hidden>
          <span className="hero-cloud hero-cloud-a" />
          <span className="hero-cloud hero-cloud-b" />
          <span className="hero-cloud hero-cloud-c" />
        </div>

        {/* Phone version of the gold swoosh, on the mobile image's own coordinates */}
        <svg className="hero-decor md:hidden" viewBox="0 0 694 400" preserveAspectRatio="none" aria-hidden>
          <path d="M0 362C40 380 90 396 150 394C185 393 215 378 240 366V400H0Z" fill="#FAFBFE" />
          <path d="M0 338C50 362 110 374 170 370C195 368 220 366 240 366C215 378 185 393 150 394C90 396 40 380 0 362Z" fill="#FAB932" />
          <path className="hero-arc" pathLength={1} d="M30 328C52 240 110 156 236 98" fill="none" stroke="url(#heroArc)" strokeWidth="5" strokeLinecap="round" />
        </svg>

        {/* Gold swoosh and the white wave that leads into the next section */}
        <svg className="hero-decor" viewBox="0 0 1024 470" preserveAspectRatio="none" aria-hidden>
          <defs>
            <linearGradient id="heroArc" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0" stopColor="#FFBF32" stopOpacity="0" />
              <stop offset="0.55" stopColor="#FFBF32" stopOpacity="0.55" />
              <stop offset="1" stopColor="#FFBF32" />
            </linearGradient>
          </defs>
          <path className="max-md:hidden" d="M0 442C40 455 90 463 150 463c100-3 160-21 217-28v35H0Z" fill="#FBFCFE" />
          <path
            className="max-md:hidden"
            d="M0 418c40 19 85 32 150 32 80 1 150-10 217-15-57 7-117 25-217 28-60 0-110-8-150-21Z"
            fill="#FAB932"
          />
          <path
            className="hero-arc max-md:hidden"
            pathLength={1}
            d="M360 398C382 310 440 226 566 168"
            fill="none"
            stroke="url(#heroArc)"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>

        {/* Outer layer flies in along the gold arc, inner layer keeps floating */}
        <div className="hero-plane">
          <div className="hero-plane-float">
            <Image
              src="/images/hero-plane.webp"
              alt=""
              width={1187}
              height={386}
              quality={88}
              priority
              sizes="(min-width: 768px) 39vw, 57vw"
            />
          </div>
        </div>
      </div>

      <p className="hero-tagline" aria-label="Travel More, Live Better">
        <span>Travel More</span>
        <span>Live Better</span>
        <svg viewBox="0 0 120 10" aria-hidden>
          <path d="M2 8C40 2 80 2 118 3 80 4 45 7 3 10Z" fill="#FFBF32" />
        </svg>
      </p>
    </section>
  );
}
