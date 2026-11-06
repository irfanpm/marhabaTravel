type Props = {
  title: string;
  subtitle?: string;
  /** Small label above the title. */
  eyebrow?: string;
  align?: "center" | "left";
};

export function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`m-0 mb-2 text-[0.75rem] font-semibold uppercase tracking-[0.18em] ${
        light ? "text-gold" : "text-gold-deep"
      }`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({ title, subtitle, eyebrow, align = "center" }: Props) {
  return (
    <div className={`reveal ${align === "center" ? "text-center" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="m-0 font-heading text-[1.9rem] font-bold leading-[1.18] text-navy lg:text-[2.1rem]">{title}</h2>
      {subtitle && <p className="m-0 mt-2 text-[0.95rem] leading-[1.5] text-navy-dark/75">{subtitle}</p>}
    </div>
  );
}
