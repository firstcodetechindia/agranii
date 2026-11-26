import Image from "next/image";
import { asset, PREFETCH } from "@/lib/asset";
import Link from "next/link";
import { SITE } from "@/lib/site";

export function Logo({ light = false, priority = false, className = "h-10", tagline = false }: { light?: boolean; priority?: boolean; className?: string; tagline?: boolean }) {
  return (
    <Link prefetch={PREFETCH} href="/" aria-label="AGRANII — home" className="inline-flex flex-col items-start gap-1">
      <Image
        src={asset(light ? "/brand/logo-light.webp" : "/brand/logo-dark.webp")}
        alt="AGRANII"
        width={392}
        height={96}
        priority={priority}
        sizes="164px"
        className={`${className} w-auto`}
      />
      {tagline && (
        <span className={`whitespace-nowrap text-[10px] font-medium leading-none tracking-wide ${light ? "text-white/80" : "text-navy/65"}`}>
          {SITE.brandTagline}
        </span>
      )}
    </Link>
  );
}
