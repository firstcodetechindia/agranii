"use client";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/** Card with a soft light that follows the cursor. */
export function SpotlightCard({
  children, className = "", glow = "rgba(37,99,235,0.18)", delay = 0,
}: { children: ReactNode; className?: string; glow?: string; delay?: number }) {
  const reduce = useReducedMotion();
  const x = useMotionValue(-300);
  const y = useMotionValue(-300);
  const bg = useMotionTemplate`radial-gradient(360px circle at ${x}px ${y}px, ${glow}, transparent 70%)`;
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { y: -6 }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - r.left);
        y.set(e.clientY - r.top);
      }}
      className={`group relative overflow-hidden ${className}`}
    >
      <motion.div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: bg }} />
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
}
