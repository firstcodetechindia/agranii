"use client";
import { motion, useReducedMotion } from "framer-motion";

export function FloatingShapes() {
  const reduce = useReducedMotion();
  const f = (d: number, y: number) => reduce ? {} : { animate: { y: [0, y, 0], rotate: [0, 4, 0] }, transition: { duration: d, repeat: Infinity, ease: "easeInOut" as const } };
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div {...f(9, -22)} className="absolute -left-16 top-10 size-72 rounded-full bg-white/15 blur-3xl" />
      <motion.div {...f(11, 26)} className="absolute right-[8%] top-[12%] hidden h-44 w-44 rotate-12 rounded-[2rem] border border-white/30 bg-white/10 backdrop-blur-sm md:block" />
      <motion.div {...f(13, -18)} className="absolute bottom-[10%] left-[10%] hidden size-24 rounded-full border border-white/30 bg-gradient-to-br from-white/25 to-transparent md:block" />
      <motion.div {...f(10, 20)} className="absolute bottom-[-4rem] right-[24%] size-60 rounded-full bg-cyan/40 blur-3xl" />
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
    </div>
  );
}
