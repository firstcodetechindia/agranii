import Link from "next/link";
import { ArrowRight, Boxes, MessagesSquare, Workflow } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { HOME_FAQS, INDUSTRIES, SERVICES } from "@/lib/content";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Faq } from "@/components/ui/Faq";
import { SceneArt } from "@/components/home/SlideScenes";
import { Photo } from "@/components/ui/Photo";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { WhySection } from "@/components/home/WhySection";
import { CommsSection } from "@/components/home/CommsSection";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CtaBand } from "@/components/sections/CtaBand";
import { PREFETCH } from "@/lib/asset";

export const metadata = buildMetadata({
  title: "Agranii | Software Development & Business Communication Solutions",
  description:
    "Agranii provides custom software development, hospital management software, jewellery software, hotel management software and business communication services.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      {/* Introduction */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-white via-surface to-white" />
        <div aria-hidden className="absolute -left-24 top-10 size-72 rounded-full bg-brand/10 blur-3xl" />
        <div className="container-x relative grid items-center gap-14 py-20 sm:py-28 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <Reveal>
            <SectionHeading label="Welcome to Agranii" title="Technology Solutions Designed Around Your Business." />
            <p className="mt-6 text-lg leading-relaxed text-navy/80">
              At AGRANII, we believe technology should solve real problems and make business operations
              simpler. We work with businesses and organisations to develop customised software,
              streamline workflows and improve customer communication.
            </p>
            <p className="mt-4">
              Our approach combines business understanding, modern technology and practical
              implementation to deliver solutions that support long-term growth.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { icon: Workflow, t: "Software shaped around your workflows", tone: "bg-brand/10 text-brand" },
                { icon: Boxes, t: "Industry-specific modules, configured to your needs", tone: "bg-cyan/15 text-cyan-700" },
                { icon: MessagesSquare, t: "Integrated WhatsApp, SMS, voice and email", tone: "bg-violet/10 text-violet" },
              ].map(({ icon: Icon, t, tone }) => (
                <li key={t} className="group rounded-2xl border border-line bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lift">
                  <span className={`grid size-10 place-items-center rounded-xl ${tone}`}><Icon className="size-5" aria-hidden /></span>
                  <p className="mt-3 text-[0.93rem] font-medium leading-snug text-navy">{t}</p>
                </li>
              ))}
            </ul>
            <div className="mt-9"><Button href="/about-us">Know More About Agranii</Button></div>
          </Reveal>

          <Reveal delay={0.1} className="relative pb-14 pl-4 sm:pl-10">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0b1530] via-[#13245a] to-[#1d4ed8] shadow-lift">
              <div aria-hidden className="absolute -right-10 -top-10 size-56 rounded-full bg-cyan/25 blur-3xl" />
              <SceneArt index={0} className="relative block aspect-[9/7] h-auto w-full" />
            </div>
            <div className="absolute bottom-0 left-0 w-[46%] overflow-hidden rounded-2xl border-4 border-white shadow-lift sm:w-[40%]">
              <div className="relative aspect-[4/3]"><Photo name="team" sizes="(min-width:1024px) 240px, 40vw" /></div>
            </div>
            <div className="absolute -right-1 bottom-4 hidden rounded-2xl border border-line bg-white px-4 py-3 shadow-lift xl:block">
              <p className="text-xs font-medium uppercase tracking-wider text-brand">Built for</p>
              <p className="text-sm font-semibold text-navy">Hotels · Hospitals · Schools · Factories</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            label="What We Do"
            title="Technology Services for Modern Businesses."
            description="Explore our software development and communication services designed to meet different business requirements."
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.07}><ServiceCard s={s} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhySection />

      {/* Industries */}
      <section className="bg-navy py-20 text-slate-300 sm:py-28">
        <div className="container-x">
          <SectionHeading light label="Industries We Serve" title="Technology for Different Industries." />
          <div className="mt-12 grid gap-5 md:grid-cols-6">
            {INDUSTRIES.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <Reveal key={ind.title} delay={i * 0.06} className={i < 2 ? "md:col-span-3" : "md:col-span-2"}>
                  <Link prefetch={PREFETCH} href={ind.href} className="group relative block h-full min-h-[300px] overflow-hidden rounded-2xl">
                    <div className={`absolute inset-0 bg-gradient-to-br ${ind.grad}`} />
                    <Photo name={ind.photo} sizes="(min-width:768px) 40vw, 100vw" className="transition duration-700 group-hover:scale-105" />
                    <div aria-hidden className={`absolute inset-0 bg-gradient-to-br ${ind.grad} opacity-20 mix-blend-multiply`} />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/95 via-navy/70 to-transparent p-6 pt-28 text-white">
                      <span className="mb-2 inline-grid size-9 place-items-center rounded-lg bg-white/15 backdrop-blur"><Icon className="size-5" aria-hidden /></span>
                      <h3 className="!text-xl !text-white">{ind.title}</h3>
                      <p className="mt-1 text-sm text-blue-50/85">{ind.text}</p>
                      <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-cyan-200">Explore <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" aria-hidden /></span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <ProcessTimeline />

      <CommsSection />

      <CtaBand />

      <section className="container-x py-14 sm:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:gap-14">
          <div className="lg:sticky lg:top-28">
            <SectionHeading label="FAQ" title="Questions Businesses Often Ask." description="Can't find what you're looking for? Reach out and we will be happy to help." />
            <div className="mt-8 rounded-2xl bg-gradient-to-br from-brand to-cyan p-6 text-white shadow-lift">
              <h3 className="!text-xl !text-white">Still have a question?</h3>
              <p className="mt-2 text-blue-50">Tell us about your requirement and our team will respond.</p>
              <div className="mt-5"><Button href="/contact-us" variant="light">Ask Our Team</Button></div>
            </div>
          </div>
          <Faq items={HOME_FAQS} />
        </div>
      </section>
    </>
  );
}
