"use client";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Mockup, type MockupKind } from "@/components/visuals/Mockups";
import { EnquiryLink } from "@/components/ui/EnquiryLink";
import { Photo } from "@/components/ui/Photo";
import type { PhotoKey } from "@/lib/photos";

type Slide = {
  eyebrow: string; title: string; text: string; cta: string; href: string;
  kind: MockupKind; bg: string; kind2?: MockupKind; photo: PhotoKey; ov: string;
};

const SLIDES: Slide[] = [
  { eyebrow: "Custom Software Development", title: "Technology That Moves Your Business Forward.", text: "We build powerful, customised software solutions that simplify operations, improve productivity and help businesses grow with confidence.", cta: "Explore Our Solutions", href: "/custom-software", kind: "software", bg: "", photo: "dev", ov: "from-[#0b1530]/95 via-[#13245a]/88 to-[#1d4ed8]/80" },
  { eyebrow: "Industry-Specific Software", title: "Smart Software Built Around Your Business.", text: "From healthcare and jewellery to hospitality and workforce management, we develop software designed around real business operations.", cta: "Explore Custom Software", href: "/custom-software", kind: "hospital", kind2: "jewellery", bg: "", photo: "doctor", ov: "from-[#0e3a8a]/95 via-[#1d4ed8]/88 to-[#06b6d4]/80" },
  { eyebrow: "Business Communication", title: "Connect With Customers. Communicate Smarter.", text: "Reach your customers through integrated WhatsApp, SMS, voice call and email communication services.", cta: "Explore Communication Services", href: "/bulk-communication", kind: "comms", bg: "", photo: "comms", ov: "from-[#0a3a52]/95 via-[#0b6f8c]/88 to-[#06b6d4]/80" },
  { eyebrow: "Collaboration", title: "Your Ideas. Our Technology. Shared Success.", text: "Looking for a reliable technology partner? Let's work together to turn your business requirements into practical digital solutions.", cta: "Let's Collaborate", href: "/contact-us", kind: "team", bg: "", photo: "team", ov: "from-[#2a1668]/95 via-[#4c2bb5]/88 to-[#2563eb]/80" },
];

const DURATION = 6500;

/** Fills over DURATION ms, holds while paused, and advances the slide when full. */
function ProgressFill({ paused, onDone }: { paused: boolean; onDone: () => void }) {
  const el = useRef<HTMLSpanElement>(null);
  const pausedRef = useRef(paused);
  const done = useRef(onDone);
  useEffect(() => { pausedRef.current = paused; done.current = onDone; });

  useEffect(() => {
    const TICK = 40;
    let elapsed = 0;
    const id = setInterval(() => {
      if (pausedRef.current) return;
      elapsed += TICK;
      if (el.current) el.current.style.transform = `scaleX(${Math.min(elapsed / DURATION, 1)})`;
      if (elapsed >= DURATION) { clearInterval(id); done.current(); }
    }, TICK);
    return () => clearInterval(id);
  }, []);

  return <span ref={el} aria-hidden className="absolute inset-0 origin-left rounded-full bg-white" style={{ transform: "scaleX(0)" }} />;
}

export function HeroCarousel() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);

  const go = useCallback((n: number, d: number) => {
    setDir(d);
    setI((n + SLIDES.length) % SLIDES.length);
  }, []);

  const s = SLIDES[i];

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured services"
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <h1 className="sr-only">AGRANII — Software Development and Business Communication Solutions</h1>
      <div className="relative h-[640px] sm:h-[720px] lg:h-[700px]">
        <AnimatePresence initial={false} custom={dir} mode="popLayout">
          <motion.div
            key={i}
            custom={dir}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${SLIDES.length}`}
            className="absolute inset-0 bg-navy"
            initial={reduce ? false : { opacity: 0, x: dir * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduce ? undefined : { opacity: 0, x: dir * -60 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, info) => {
              if (info.offset.x < -70) go(i + 1, 1);
              else if (info.offset.x > 70) go(i - 1, -1);
            }}
          >
            <Photo name={s.photo} sizes="100vw" priority={i === 0} eager />
            <div aria-hidden className={`absolute inset-0 bg-gradient-to-r ${s.ov}`} />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
            <div className="container-x relative grid h-full items-center gap-8 pt-[var(--header-h)] lg:grid-cols-[1.02fr_1fr] lg:gap-12">
              <div className="text-white">
                <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-sm font-medium backdrop-blur">
                  <span className="size-1.5 rounded-full bg-cyan" />{s.eyebrow}
                </p>
                <h2 className="!text-white" style={{ fontSize: "clamp(2.125rem, 1.4rem + 3vw, 3.75rem)", lineHeight: 1.1 }}>{s.title}</h2>
                <p className="mt-5 max-w-xl text-lg text-blue-50/90">{s.text}</p>
                {s.href === "/contact-us" ? (
                  <EnquiryLink className="group mt-8 inline-flex min-h-12 items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-brand shadow-[0_12px_28px_-10px_rgb(0_0_0/0.5)] transition hover:-translate-y-0.5">
                  {s.cta}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </EnquiryLink>
                ) : (
                  <Link href={s.href} className="group mt-8 inline-flex min-h-12 items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-brand shadow-[0_12px_28px_-10px_rgb(0_0_0/0.5)] transition hover:-translate-y-0.5">
                  {s.cta}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </Link>
                )}
              </div>
              <div className="relative mx-auto hidden w-full max-w-[560px] pb-10 sm:block lg:pb-0">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_30px_60px_-20px_rgb(0_0_0/0.6)] ring-1 ring-white/30">
                  <Photo name={s.photo} sizes="(min-width:1024px) 560px, 90vw" priority={i === 0} eager className="brightness-[1.3] contrast-105 saturate-110" />
                </div>
                <Mockup kind={s.kind} className="absolute -bottom-2 -left-12 hidden w-[62%] xl:block" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-x-0 bottom-6 z-10">
        <div className="container-x flex items-center justify-between">
          <div className="flex items-center gap-2" role="tablist" aria-label="Choose slide">
            {SLIDES.map((sl, n) => (
              <button
                key={sl.title}
                role="tab"
                aria-selected={n === i}
                aria-label={`Go to slide ${n + 1}`}
                onClick={() => go(n, n > i ? 1 : -1)}
                className={`relative h-2.5 overflow-hidden rounded-full transition-all ${n === i ? "w-12 bg-white/35" : "w-2.5 bg-white/45 hover:bg-white/70"}`}
              >
                {n === i && <ProgressFill key={i} paused={paused} onDone={() => go(i + 1, 1)} />}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button aria-label="Previous slide" onClick={() => go(i - 1, -1)} className="grid size-11 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition hover:bg-white/25"><ChevronLeft className="size-5" /></button>
            <button aria-label="Next slide" onClick={() => go(i + 1, 1)} className="grid size-11 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition hover:bg-white/25"><ChevronRight className="size-5" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
