"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/site";
import { Logo } from "./Logo";
import { EnquiryLink } from "@/components/ui/EnquiryLink";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", esc);
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const solid = scrolled || open;
  const lightText = !solid && !pathname.startsWith("/privacy-policy") && !pathname.startsWith("/terms-and-conditions");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "glass !bg-white/95 !rounded-none !border-x-0 !border-t-0 border-b-line shadow-[0_8px_24px_-16px_rgb(23_32_51/0.25)]"
          : "bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only rounded bg-brand px-4 py-2 text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-3"
      >
        Skip to content
      </a>
      <div className="container-x flex h-[var(--header-h)] items-center justify-between gap-6">
        <Logo light={lightText} priority />
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  aria-current={isActive(n.href) ? "page" : undefined}
                  className={`relative whitespace-nowrap rounded-md px-3 py-2 text-[0.95rem] font-medium transition-colors ${
                    lightText
                      ? isActive(n.href) ? "text-white" : "text-white/80 hover:text-white"
                      : isActive(n.href) ? "text-brand" : "text-navy/80 hover:text-brand"
                  }`}
                >
                  {n.label}
                  {isActive(n.href) && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded bg-gradient-to-r from-brand to-cyan" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <EnquiryLink className="hidden min-h-11 items-center whitespace-nowrap rounded-lg bg-gradient-to-r from-brand to-[#1d4ed8] px-5 text-[0.93rem] font-medium text-white shadow-[0_8px_20px_-8px_rgb(37_99_235/0.7)] transition hover:-translate-y-0.5 sm:inline-flex">
            Discuss Your Project
          </EnquiryLink>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-lg border border-line bg-white/90 text-navy lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-full max-h-[calc(100dvh-var(--header-h))] overflow-y-auto border-t border-line bg-white shadow-xl lg:hidden"
          >
            <nav aria-label="Mobile" className="container-x py-4">
              <ul className="flex flex-col">
                {NAV.map((n) => (
                  <li key={n.href}>
                    <Link
                      href={n.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive(n.href) ? "page" : undefined}
                      className={`block border-b border-line/70 py-4 text-lg font-medium ${
                        isActive(n.href) ? "text-brand" : "text-navy"
                      }`}
                    >
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <EnquiryLink onNavigate={() => setOpen(false)} className="mt-5 flex min-h-12 items-center justify-center rounded-lg bg-brand font-medium text-white">
                Discuss Your Project
              </EnquiryLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
