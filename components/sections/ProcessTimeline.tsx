"use client";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { PROCESS } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessTimeline({ title = "From Business Idea to Digital Solution." }: { title?: string }) {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line to-transparent" />
      <div className="container-x">
        <SectionHeading label="Our Process" title={title} align="center" description="Five clear steps, with you involved at every stage." />
        <div className="relative mt-14">
          {/* track + animated progress (horizontal on desktop, vertical on mobile) */}
          <span aria-hidden className="absolute bottom-6 left-[27px] top-6 w-0.5 rounded bg-line lg:bottom-auto lg:left-[10%] lg:right-[10%] lg:top-[34px] lg:h-0.5 lg:w-auto" />
          <motion.span
            aria-hidden
            style={{ scaleY: reduce ? 1 : progress, scaleX: 1 }}
            className="absolute bottom-6 left-[27px] top-6 w-0.5 origin-top rounded bg-gradient-to-b from-brand via-cyan to-violet lg:hidden"
          />
          <motion.span
            aria-hidden
            style={{ scaleX: reduce ? 1 : progress }}
            className="absolute left-[10%] right-[10%] top-[34px] hidden h-0.5 origin-left rounded bg-gradient-to-r from-brand via-cyan to-violet lg:block"
          />
          <ol ref={ref} className="relative grid gap-5 lg:grid-cols-5">
            {PROCESS.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.li
                  key={p.n}
                  initial={reduce ? false : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex gap-4 lg:flex-col lg:gap-0"
                >
                  <motion.span
                    whileHover={reduce ? undefined : { scale: 1.1, rotate: -6 }}
                    className="relative z-10 grid size-[56px] shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand to-cyan text-white shadow-lift ring-4 ring-surface lg:mx-auto lg:mt-[6px] lg:shrink-0"
                  >
                    <Icon className="size-6" aria-hidden />
                  </motion.span>
                  <div className="group relative flex-1 overflow-hidden rounded-2xl border border-line bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lift lg:mt-6 lg:min-h-[190px] lg:flex-1">
                    <span aria-hidden className="pointer-events-none absolute right-3 top-2 text-6xl font-bold leading-none text-brand/[0.07] transition group-hover:text-brand/[0.14]">{p.n}</span>
                    <p className="text-sm font-bold tracking-widest text-brand">STEP {p.n}</p>
                    <h3 className="!text-lg mt-1">{p.title}</h3>
                    <p className="mt-1.5 text-[0.95rem]">{p.text}</p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
