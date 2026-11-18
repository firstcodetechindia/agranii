import { z } from "zod";
import { SERVICE_OPTIONS } from "./site";

const clean = (s: unknown) => (typeof s === "string" ? s.trim().replace(/\s+/g, " ") : s);

export const enquirySchema = z.object({
  name: z.preprocess(clean, z.string().min(2, "Please enter your full name.").max(80, "Name is too long.")
    .regex(/^[\p{L}][\p{L}\s.'-]*$/u, "Name can contain letters, spaces, dots, hyphens and apostrophes only.")),
  organisation: z.preprocess(clean, z.string().max(120, "Too long.").optional()),
  email: z.preprocess(clean, z.string().min(1, "Please enter your email address.").email("Please enter a valid email address.").max(120)),
  mobile: z.preprocess(
    (v) => (typeof v === "string" ? v.replace(/[\s-]/g, "").replace(/^(\+91|91|0)(?=\d{10}$)/, "") : v),
    z.string().min(1, "Please enter your mobile number.").regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number (starting with 6–9)."),
  ),
  city: z.preprocess(clean, z.string().max(60, "Too long.").optional()),
  service: z.enum(SERVICE_OPTIONS, { message: "Please choose a service." }),
  budget: z.preprocess(clean, z.string().max(60).optional()),
  requirements: z.preprocess(clean, z.string().min(20, "Please describe your requirements in at least 20 characters.").max(2000, "Please keep it under 2000 characters.")),
  consent: z.literal(true, { message: "Please accept the Privacy Policy to continue." }),
  /** Honeypot: must stay empty. */
  website: z.string().max(0).optional(),
});

export type EnquiryInput = z.input<typeof enquirySchema>;
export type EnquiryData = z.output<typeof enquirySchema>;
