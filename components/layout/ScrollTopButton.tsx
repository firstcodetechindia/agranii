"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

/** Floating back-to-top button with a scroll-progress ring; appears after scrolling down. */
export function ScrollTopButton() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  useEffect(() => {
    const on = () => setShow(window.scrollY > 500);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" })}
          initial={{ opacity: 0, scale: 0.5, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 24 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
          className="group fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-white shadow-[0_12px_32px_-8px_rgb(37_99_235/0.55)] sm:bottom-7 sm:right-7"
        >
          <svg viewBox="0 0 56 56" className="absolute inset-0 -rotate-90" aria-hidden>
            <circle cx="28" cy="28" r="25" fill="none" stroke="#e2e8f0" strokeWidth="3" />
            <motion.circle cx="28" cy="28" r="25" fill="none" stroke="url(#stg)" strokeWidth="3" strokeLinecap="round" style={{ pathLength: progress }} />
            <defs>
              <linearGradient id="stg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#2563eb" />
                <stop offset="0.6" stopColor="#06b6d4" />
                <stop offset="1" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
          </svg>
          <motion.span
            className="relative grid size-9 place-items-center rounded-full bg-gradient-to-br from-brand to-cyan text-white"
            animate={reduce ? undefined : { y: [0, -2.5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowUp className="size-[18px]" aria-hidden />
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
