import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "light";

const styles: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-brand to-[#1d4ed8] text-white shadow-[0_8px_20px_-8px_rgb(37_99_235/0.7)] hover:shadow-[0_12px_28px_-8px_rgb(37_99_235/0.8)] hover:-translate-y-0.5",
  secondary:
    "bg-white text-navy border border-line hover:border-brand/40 hover:text-brand hover:-translate-y-0.5",
  ghost: "text-brand hover:bg-brand/5",
  light:
    "bg-white text-brand shadow-[0_8px_24px_-8px_rgb(0_0_0/0.35)] hover:-translate-y-0.5",
};

export function Button({
  href,
  children,
  variant = "primary",
  arrow = true,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-6 py-3 text-[0.97rem] font-medium transition duration-200 ${styles[variant]} ${className}`}
    >
      {children}
      {arrow && (
        <ArrowRight
          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden
        />
      )}
    </Link>
  );
}
