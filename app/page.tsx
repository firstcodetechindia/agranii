import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { HOME_FAQS, INDUSTRIES, SERVICES } from "@/lib/content";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Faq } from "@/components/ui/Faq";
import { Mockup } from "@/components/visuals/Mockups";
import { Photo } from "@/components/ui/Photo";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { WhySection } from "@/components/home/WhySection";
import { CommsSection } from "@/components/home/CommsSection";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CtaBand } from "@/components/sections/CtaBand";

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
      <section className="container-x grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SectionHeading
            label="Welcome to Agranii"
            title="Technology Solutions Designed Around Your Business."
          />
          <p className="mt-5">
            At AGRANII, we believe technology should solve real problems and make business operations
            simpler. We work with businesses and organisations to develop customised software,
            streamline workflows and improve customer communication.
          </p>
          <p className="mt-4">
            Our approach combines business understanding, modern technology and practical
            implementation to deliver solutions that support long-term growth.
          </p>
          <ul className="mt-6 space-y-2.5">
            {["Software shaped around your workflows", "Industry-specific modules, configured to your needs", "Integrated WhatsApp, SMS, voice and email"].map((t) => (
              <li key={t} className="flex items-start gap-2.5"><CheckCircle2 className="mt-1 size-5 shrink-0 text-brand" aria-hidden />{t}</li>
            ))}
          </ul>
          <div className="mt-8"><Button href="/about-us">Know More About Agranii</Button></div>
        </Reveal>
        <Reveal delay={0.1} className="relative">
          <div aria-hidden className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand/15 via-cyan/10 to-violet/15 blur-xl" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lift"><Photo name="team" sizes="(min-width:1024px) 600px, 100vw" /></div>
          <Mockup kind="software" className="relative -mt-16 ml-auto mr-3 w-[66%] sm:mr-6" />
        </Reveal>
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
                  <Link href={ind.href} className="group relative block h-full min-h-[300px] overflow-hidden rounded-2xl">
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
