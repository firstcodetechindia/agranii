"use client";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SITE, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

/** Floating WhatsApp chat button. Sits above the back-to-top button (and drops down when that button is hidden). */
export function WhatsAppButton() {
  const reduce = useReducedMotion();
  const [raised, setRaised] = useState(false);

  useEffect(() => {
    const on = () => setRaised(window.scrollY > 500);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  if (!SITE.contact.whatsapp) return null;

  return (
    <motion.a
      href={whatsappLink("Hello AGRANII, I would like to know more about your services.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with AGRANII on WhatsApp"
      initial={false}
      animate={{ bottom: raised ? 92 : 20 }}
      transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 260, damping: 26 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="group fixed right-5 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_28px_-8px_rgb(37_211_102/0.7)] sm:right-7"
    >
      {!reduce && <span aria-hidden className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />}
      <WhatsAppIcon className="relative size-8" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-navy px-3 py-1.5 text-sm font-medium text-white opacity-0 shadow-lg transition group-hover:opacity-100 sm:block">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}
