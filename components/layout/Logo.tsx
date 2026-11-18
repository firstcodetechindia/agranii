import Image from "next/image";
import Link from "next/link";

export function Logo({ light = false, priority = false, className = "h-10" }: { light?: boolean; priority?: boolean; className?: string }) {
  return (
    <Link href="/" aria-label="AGRANII — home" className="inline-flex items-center">
      <Image
        src={light ? "/brand/logo-light.webp" : "/brand/logo-dark.webp"}
        alt="AGRANII"
        width={392}
        height={96}
        priority={priority}
        sizes="164px"
        className={`${className} w-auto`}
      />
    </Link>
  );
}
