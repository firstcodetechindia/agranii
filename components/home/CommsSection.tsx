"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CHANNELS } from "@/lib/content";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Button } from "@/components/ui/Button";

const tints = ["from-emerald-400 to-cyan", "from-brand to-cyan", "from-violet to-brand", "from-amber-400 to-violet"];

export function CommsSection() {
  const reduce = useReducedMotion();
  const drift = (d: number) => reduce ? {} : { animate: { y: [0, -26, 0], x: [0, 14, 0] }, transition: { duration: d, repeat: Infinity, ease: "easeInOut" as const } };
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1630] via-[#10265c] to-[#0b3b63] py-20 text-slate-300 sm:py-28">
      <motion.div aria-hidden {...drift(12)} className="absolute -left-20 top-10 size-[420px] rounded-full bg-brand/30 blur-3xl" />
      <motion.div aria-hidden {...drift(15)} className="absolute -right-20 bottom-0 size-[460px] rounded-full bg-cyan/25 blur-3xl" />
      <div aria-hidden className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      <div className="container-x relative">
        <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_1fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-sm font-semibold uppercase tracking-[0.14em] text-cyan-200">
              <span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan opacity-75" /><span className="relative inline-flex size-2 rounded-full bg-cyan" /></span>
              Business Communication
            </p>
            <h2 className="!text-white">Reach Your Customers Through the <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">Right Channels.</span></h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <p className="text-lg text-blue-100/90">Modern businesses need reliable communication channels to keep customers informed and engaged. AGRANII offers multiple communication service options to support different business requirements.</p>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {CHANNELS.map((c, i) => {
            const Icon = c.icon;
            return (
              <SpotlightCard key={c.title} delay={i * 0.08} glow="rgba(6,182,212,0.22)" className="rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-md transition-colors hover:border-white/35">
                <div className="flex h-full flex-col p-6">
                  <motion.span
                    animate={reduce ? undefined : { y: [0, -5, 0] }}
                    transition={{ duration: 3.5 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                    className={`mb-5 grid size-14 place-items-center rounded-2xl bg-gradient-to-br ${tints[i]} text-white shadow-[0_12px_28px_-8px_rgb(6_182_212/0.6)]`}
                  >
                    <Icon className="size-7" aria-hidden />
                  </motion.span>
                  <h3 className="!text-xl !text-white">{c.title}</h3>
                  <p className="mt-2 text-[0.97rem] text-blue-100/85">{c.text}</p>
                  <ul className="mt-4 flex-1 space-y-2 text-[0.93rem]">
                    {c.uses.map((u) => <li key={u} className="flex gap-2 text-blue-50/90"><CheckCircle2 className="mt-1 size-4 shrink-0 text-cyan" aria-hidden />{u}</li>)}
                  </ul>
                  <Link href={c.href} className="group/l mt-6 inline-flex items-center gap-1.5 font-medium text-cyan-200 hover:text-white">
                    Learn More <ArrowRight className="size-4 transition-transform group-hover/l:translate-x-1.5" aria-hidden />
                  </Link>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
        <div className="mt-10"><Button href="/bulk-communication" variant="light">Explore All Communication Services</Button></div>
      </div>
    </section>
  );
}
