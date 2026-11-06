type Props = {
  title: string;
  subtitle: string;
  /** Adds the thin rules either side of the title, as in "Our Services". */
  ruled?: boolean;
  size?: "lg" | "md";
};

export function SectionHeading({ title, subtitle, ruled, size = "md" }: Props) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-[1.1rem]">
        {ruled && <span className="h-px w-5 bg-navy/25 min-[400px]:w-9 sm:w-[7.6rem]" />}
        <h2
          className={`m-0 font-heading font-bold leading-[1.15] text-navy ${
            size === "lg" ? "text-[2.1rem] lg:text-[2rem]" : "text-[1.75rem] lg:text-[1.75rem]"
          }`}
        >
          {title}
        </h2>
        {ruled && <span className="h-px w-5 bg-navy/25 min-[400px]:w-9 sm:w-[7.6rem]" />}
      </div>
      <p className={`m-0 mt-1 text-navy-dark ${size === "lg" ? "text-[0.95rem]" : "text-[0.875rem]"}`}>{subtitle}</p>
    </div>
  );
}
