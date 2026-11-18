import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" aria-label="AGRANII — home" className="inline-flex items-center gap-2.5">
      <span
        aria-hidden
        className="grid size-9 place-items-center rounded-[10px] bg-gradient-to-br from-brand via-brand to-cyan text-lg font-bold text-white shadow-[0_6px_16px_-6px_rgb(37_99_235/0.8)]"
      >
        A
      </span>
      <span
        className={`text-[1.35rem] font-bold tracking-[0.12em] ${light ? "text-white" : "text-navy"}`}
      >
        AGRANII
      </span>
    </Link>
  );
}
