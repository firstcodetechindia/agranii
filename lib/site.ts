/**
 * Central site configuration.
 * Contact details are intentionally empty until the company supplies real
 * values. Set them via environment variables (see .env.example) — nothing
 * here is invented.
 */
export const SITE = {
  name: "AGRANII",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://agranii.in",
  tagline: "Technology That Understands Business.",
  description:
    "Agranii provides custom software development, hospital management software, jewellery software, hotel management software and business communication services.",
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "",
    whatsapp: process.env.NEXT_PUBLIC_CONTACT_WHATSAPP ?? "",
    address: process.env.NEXT_PUBLIC_CONTACT_ADDRESS ?? "",
    mapsEmbedUrl: process.env.NEXT_PUBLIC_MAPS_EMBED_URL ?? "",
  },
  social: {
    linkedin: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN ?? "",
    facebook: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK ?? "",
    instagram: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM ?? "",
    x: process.env.NEXT_PUBLIC_SOCIAL_X ?? "",
    youtube: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE ?? "",
  },
  /** Endpoint the enquiry form posts to. */
  enquiryEndpoint: process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT ?? "/api/contact",
} as const;

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Custom Software", href: "/custom-software" },
  { label: "Bulk Communication", href: "/bulk-communication" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
] as const;

export const FOOTER_SOFTWARE = [
  { label: "Hospital Management Software", href: "/hospital-management-software-jaipur" },
  { label: "Jewellery Software", href: "/jewellery-software-jaipur" },
  { label: "Employee Management Software", href: "/employee-management-software" },
  { label: "Hotel Management Software", href: "/hotel-management-software-jaipur" },
] as const;

export const FOOTER_COMMS = [
  { label: "Bulk WhatsApp", href: "/bulk-whatsapp-service-jaipur" },
  { label: "Bulk SMS", href: "/bulk-sms-service-jaipur" },
  { label: "Bulk Voice Call", href: "/bulk-voice-call-service" },
  { label: "Bulk Email", href: "/bulk-email-service" },
] as const;

export const SERVICE_OPTIONS = [
  "Custom Software Development",
  "Hospital Management Software",
  "Jewellery Management Software",
  "Employee Management Software",
  "Hotel Management Software",
  "Bulk WhatsApp Service",
  "Bulk SMS Service",
  "Bulk Voice Call Service",
  "Bulk Email Service",
  "Business Collaboration",
  "Partnership",
  "Other",
] as const;
