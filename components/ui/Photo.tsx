import Image from "next/image";
import { asset } from "@/lib/asset";
import { PHOTOS, type PhotoKey } from "@/lib/photos";

/** Fills its (relatively positioned) parent. */
export function Photo({ name, sizes, priority = false, eager = false, className = "", pos }: {
  name: PhotoKey; sizes: string; priority?: boolean; eager?: boolean; className?: string; pos?: string;
}) {
  const p = PHOTOS[name];
  return (
    <Image
      src={asset(p.src)}
      alt={p.alt}
      width={p.w}
      height={p.h}
      sizes={sizes}
      priority={priority}
      loading={priority ? undefined : eager ? "eager" : "lazy"}
      className={`absolute inset-0 size-full object-cover ${className}`}
      style={{ objectPosition: pos ?? p.pos }}
    />
  );
}
