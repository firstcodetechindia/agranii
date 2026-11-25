"use client";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Factory, GraduationCap, Hospital, Hotel, MessageCircle, MessageSquareText, type LucideIcon } from "lucide-react";
import { SlideScene } from "./SlideScenes";
import { EnquiryLink } from "@/components/ui/EnquiryLink";

type Chip = { label: string; href: string; icon: LucideIcon };
type Slide = {
  eyebrow: string; title: string; text?: string; cta: string; href: string;
  ov: string;
  chips?: Chip[];
  bigIcons?: Chip[];
};

const SLIDES: Slide[] = [
  {
    eyebrow: "Software for Your Industry", title: "Custom Software Development", cta: "Explore Custom Software", href: "/custom-software",
    ov: "from-[#0b1530] via-[#13245a] to-[#1d4ed8]",
    chips: [
      { label: "Hotel Management Software", href: "/hotel-management-software-jaipur", icon: Hotel },
      { label: "Manufacturing Software", href: "/manufacturing-software", icon: Factory },
      { label: "School Software", href: "/school-software", icon: GraduationCap },
      { label: "Hospital Management Software", href: "/hospital-management-software-jaipur", icon: Hospital },
    ],
  },
  {
    eyebrow: "Business Communication", title: "Bulk SMS Service and Bulk WhatsApp Service", text: "Send bulk SMS and bulk WhatsApp to market your business.",
    cta: "Explore Bulk Messaging", href: "/bulk-communication", ov: "from-[#0a3a52] via-[#0b6f8c] to-[#06b6d4]",
    bigIcons: [
      { label: "Bulk WhatsApp Service", href: "/bulk-whatsapp-service-jaipur", icon: MessageCircle },
      { label: "Bulk SMS Service", href: "/bulk-sms-service-jaipur", icon: MessageSquareText },
    ],
  },
  {
    eyebrow: "Design", title: "Website Design Service", text: "Get your website designed by an artist who understands the art of web design.",
    cta: "Explore Website Design", href: "/website-design-service", ov: "from-[#12353a] via-[#0e7490] to-[#22d3ee]",
  },
  {
    eyebrow: "Partnership", title: "Collaborate with Us", text: "We are always open to hear your ideas and open to collaborate in any of our services or products, and beyond.",
    cta: "Let’s Collaborate", href: "/contact-us", ov: "from-[#2a1668] via-[#4c2bb5] to-[#2563eb]",
  },
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
      <div className="relative h-[720px] sm:h-[720px] lg:h-[700px]">
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
            <div aria-hidden className={`absolute inset-0 bg-gradient-to-br ${s.ov}`} />
            <SlideScene index={i} />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
            <div className="container-x relative grid h-full items-center gap-8 pb-24 pt-[var(--header-h)] lg:pb-0 lg:grid-cols-[1.02fr_1fr] lg:gap-12">
              <div className="text-white">
                <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-sm font-medium backdrop-blur">
                  <span className="size-1.5 rounded-full bg-cyan" />{s.eyebrow}
                </p>
                <h2 className="!text-white" style={{ fontSize: "clamp(2.125rem, 1.4rem + 3vw, 3.75rem)", lineHeight: 1.1 }}>{s.title}</h2>
                {s.text && <p className="mt-5 max-w-xl text-lg text-blue-50/90">{s.text}</p>}
                {s.chips && (
                  <ul className="mt-6 grid max-w-xl gap-2.5 sm:grid-cols-2">
                    {s.chips.map((c) => (
                      <li key={c.label}>
                        <Link href={c.href} className="group flex whitespace-nowrap items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-3.5 py-2.5 text-[0.95rem] font-medium backdrop-blur transition hover:bg-white/20">
                          <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white/90 text-brand"><c.icon className="size-[18px]" aria-hidden /></span>
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
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
              {s.bigIcons ? (
                <div className="mx-auto grid w-full max-w-[560px] grid-cols-2 gap-4 sm:gap-6">
                  {s.bigIcons.map((c) => (
                    <Link key={c.label} href={c.href} className="group flex flex-col items-center justify-center gap-3 rounded-3xl py-5 sm:aspect-square sm:gap-4 border border-white/25 bg-white/15 p-4 text-center text-white shadow-[0_30px_60px_-20px_rgb(0_0_0/0.5)] backdrop-blur transition hover:-translate-y-1 hover:bg-white/25">
                      <span className="grid size-20 place-items-center rounded-3xl bg-white text-brand shadow-lg sm:size-32"><c.icon className="size-10 sm:size-16" aria-hidden /></span>
                      <span className="text-base font-semibold sm:text-lg">{c.label}</span>
                    </Link>
                  ))}
                </div>
              ) : <div aria-hidden className="hidden lg:block" />}
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
