import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  subtitle: string;
};

/** Banner at the top of inner pages, in the same sky, plane and gold style as the homepage. */
export function PageHero({ title, subtitle }: Props) {
  return (
    <section className="page-hero pt-[4.25rem]">
      <div className="page-hero-plane max-md:hidden">
        <div className="hero-plane-float">
          <Image src="/images/hero-plane.webp" alt="" width={1187} height={386} quality={78} sizes="(min-width: 1280px) 600px, 40vw" />
        </div>
      </div>

      <div className="page-hero-copy relative z-[1] mx-auto max-w-[64rem] px-4 pb-16 pt-9 md:px-6 md:pb-20 md:pt-12 lg:px-[2.2rem] lg:pb-[5rem] lg:pt-[3rem]">
        <nav aria-label="Breadcrumb" className="text-[0.85rem] text-navy-dark/80">
          <Link href="/#home" className="hover:text-navy hover:underline">
            Home
          </Link>
          <span className="mx-2" aria-hidden>
            /
          </span>
          <span aria-current="page" className="font-medium text-navy">
            {title}
          </span>
        </nav>
        <h1 className="m-0 mt-3 font-heading text-[2.25rem] font-bold leading-[1.15] text-navy lg:text-[2.5rem]">{title}</h1>
        <p className="m-0 mt-3 max-w-[32rem] text-[1rem] leading-[1.55] text-navy-dark lg:max-w-[26rem]">
          {subtitle}
        </p>
      </div>

      <svg className="absolute inset-x-0 bottom-0 h-10 w-full md:h-14" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden>
        <path d="M0 48C260 92 620 92 1000 44C1180 22 1330 18 1440 30V80H0Z" fill="#FAFBFE" />
        <path d="M0 22C250 76 620 76 1000 40C840 66 620 92 360 84C210 80 90 66 0 48Z" fill="#FAB932" />
      </svg>
    </section>
  );
}
