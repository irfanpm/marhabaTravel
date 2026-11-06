import type { SVGProps } from "react";
import type { PackageIcon, ServiceIcon } from "@/config/site";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps): IconProps => ({
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": true,
  ...props,
});

export const PlaneIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path
      transform="rotate(45 12 12)"
      d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
    />
  </svg>
);

export const BusIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z" />
  </svg>
);

/** Passport booklet with a globe, used for Visit Visas and Passport Assistance. */
export const PassportIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path
      fillRule="evenodd"
      d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm1.5 15.5v1.3h7v-1.3h-7ZM12 5.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6Zm-3.5 4.2h1.4c.04-.9.2-1.7.45-2.4A3.6 3.6 0 0 0 8.5 9.4Zm3 0h1c-.06-1-.28-1.8-.5-2.3-.22.5-.44 1.3-.5 2.3Zm2.6 0h1.4a3.6 3.6 0 0 0-1.85-2.4c.25.7.41 1.5.45 2.4Zm-5.6 1.2a3.6 3.6 0 0 0 1.85 2.4 8 8 0 0 1-.45-2.4H8.5Zm3 0c.06 1 .28 1.8.5 2.3.22-.5.44-1.3.5-2.3h-1Zm2.6 0a8 8 0 0 1-.45 2.4 3.6 3.6 0 0 0 1.85-2.4h-1.4Z"
    />
  </svg>
);

export const SuitcaseIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path
      fillRule="evenodd"
      d="M9 2.5h6A1.5 1.5 0 0 1 16.5 4v3H19a2.5 2.5 0 0 1 2.5 2.5v9A2.5 2.5 0 0 1 19 21H5a2.5 2.5 0 0 1-2.5-2.5v-9A2.5 2.5 0 0 1 5 7h2.5V4A1.5 1.5 0 0 1 9 2.5ZM9.3 7h5.4V4.3H9.3V7ZM7 8.6v10.8h1.5V8.6H7Zm8.5 0v10.8H17V8.6h-1.5Z"
    />
  </svg>
);

export const VisaStampIcon = (p: IconProps) => (
  <svg viewBox="0 0 32 24" aria-hidden {...p}>
    <rect x="1.2" y="3.2" width="29.6" height="17.6" rx="3.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
    <text
      x="16"
      y="15.9"
      textAnchor="middle"
      fontSize="9.6"
      fontWeight="700"
      fontFamily="var(--font-body), sans-serif"
      fill="currentColor"
    >
      VISA
    </text>
  </svg>
);

export const ShieldCheckIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1.6 16-4-4 1.41-1.41 2.59 2.58 6.19-6.17L18 9l-7.6 8z" />
  </svg>
);

export const MosqueIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 1.6c.3.9.9 1.4 1.2 1.9.2.4.1.8-.2 1.1 2.5 1.2 4.6 3 4.6 5.3 0 .6-.2 1.1-.5 1.5H6.9c-.3-.4-.5-.9-.5-1.5 0-2.3 2.1-4.1 4.6-5.3-.3-.3-.4-.7-.2-1.1.3-.5.9-1 1.2-1.9Z" />
    <path
      fillRule="evenodd"
      d="M6.2 12.9h11.6V21h-3.3v-3.4a2.5 2.5 0 0 0-5 0V21H6.2v-8.1Z"
    />
    <path d="M2.2 8.6c.2.7.9 1 .9 1.7v.6h.4V21H1V10.9h.4v-.6c0-.7.6-1 .8-1.7ZM21.8 8.6c.2.7.8 1 .8 1.7v.6h.4V21h-2.5V10.9h.4v-.6c0-.7.7-1 .9-1.7Z" />
  </svg>
);

export const PalmIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M13.2 8.6c1.7-1.7 4.7-2 7-.8.5.3.6.5.1.5-1.6 0-3 .2-4 .8 1.8.1 3.7 1.2 4.6 3 .2.5 0 .6-.4.3-1.6-1.2-3.7-1.9-5.6-1.8.8 2.3 1.2 5.4 1.2 8.1h-3.2c.2-2.6-.1-5.4-.9-7.6-1.4.2-3 1.2-4.2 2.7-.3.4-.5.3-.5-.2.1-2 1.5-3.9 3.3-4.6-1.2-.5-2.7-.5-4.3 0-.5.2-.6 0-.3-.4 1.5-1.7 4-2.3 6-1.3-.5-1.1-1.6-2.2-3-2.9-.4-.2-.4-.4.1-.5 2.2-.4 4 .8 4.6 3.4l.5-.7ZM5 19.7c4.5-1.7 9.5-1.7 14 0 .5.2.4.8-.2.8H5.2c-.6 0-.7-.6-.2-.8Z" />
  </svg>
);

export const PhoneIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

export const PinIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
  </svg>
);

export const StarIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 2.2l3 6.5 7.1.8-5.3 4.8 1.5 7-6.3-3.6-6.3 3.6 1.5-7L1.9 9.5 9 8.7z" />
  </svg>
);

export const ChevronRightIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...p}>
    <path d="m9 5 7 7-7 7" />
  </svg>
);

export const ChevronLeftIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...p}>
    <path d="m15 5-7 7 7 7" />
  </svg>
);

export const ChevronDownIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const MenuIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const CheckCircleIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden {...p}>
    <circle cx="12" cy="12" r="11" fill="#FFBF32" />
    <path d="m7 12.4 3.4 3.4L17 9" fill="none" stroke="#05264C" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const GoogleIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden {...p}>
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

export const FacebookIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M14 8.5V6.8c0-.8.5-1 .9-1H17V2h-2.9C10.9 2 10 4.4 10 6v2.5H7.5V12H10v10h4V12h2.7l.4-3.5H14z" />
  </svg>
);

export const InstagramIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

export const YoutubeIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8ZM9.8 15.1V8.9l5.5 3.1-5.5 3.1Z" />
  </svg>
);

export const WhatsAppIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88zm8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89a11.82 11.82 0 0 0-3.48-8.41z" />
  </svg>
);

const serviceIcons: Record<ServiceIcon, (p: IconProps) => React.JSX.Element> = {
  flight: PlaneIcon,
  bus: BusIcon,
  "visit-visa": PassportIcon,
  tour: SuitcaseIcon,
  "visa-stamp": VisaStampIcon,
  insurance: ShieldCheckIcon,
  umrah: MosqueIcon,
  passport: PassportIcon,
};

export const ServiceGlyph = ({ icon, ...p }: IconProps & { icon: ServiceIcon }) => {
  const Icon = serviceIcons[icon];
  return <Icon {...p} />;
};

const packageIcons: Record<PackageIcon, (p: IconProps) => React.JSX.Element> = {
  umrah: MosqueIcon,
  tour: SuitcaseIcon,
  flight: PlaneIcon,
  palm: PalmIcon,
};

export const PackageGlyph = ({ icon, ...p }: IconProps & { icon: PackageIcon }) => {
  const Icon = packageIcons[icon];
  return <Icon {...p} />;
};
