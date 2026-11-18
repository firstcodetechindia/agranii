import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { LANDINGS } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const primary = ["", "/custom-software", "/bulk-communication", "/about-us", "/contact-us"];
  const rest = [...LANDINGS.map((l) => `/${l.slug}`), "/privacy-policy", "/terms-and-conditions"];
  return [
    ...primary.map((p) => ({ url: `${SITE.url}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.9 })),
    ...rest.map((p) => ({ url: `${SITE.url}${p}`, changeFrequency: "monthly" as const, priority: p.includes("policy") || p.includes("terms") ? 0.3 : 0.7 })),
  ];
}
