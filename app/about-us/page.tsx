import { Briefcase, Code2, Layers, MessageSquare, Workflow, Handshake, Eye, Flag } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBand } from "@/components/sections/CtaBand";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = buildMetadata({
  title: "About Agranii | Business Technology & Software Solutions",
  description: "Discover Agranii's approach to custom software development, business automation and digital communication solutions.",
  path: "/about-us",
});

const DO = [
  ["Custom Software Development", Code2], ["Business Applications", Briefcase], ["Industry-Specific Software", Layers],
  ["Business Process Automation", Workflow], ["Communication Solutions", MessageSquare], ["Technology Collaboration", Handshake],
] as const;

const STEPS = ["Understand", "Plan", "Design", "Develop", "Deliver", "Improve"];

const WHY = [
  ["Business-first thinking", "We begin with your goals, not with a favourite technology."],
  ["Practical technology decisions", "We choose tools that suit your needs and budget."],
  ["User-friendly development", "Interfaces that people can learn and use quickly."],
  ["Clear communication", "Plain-language updates, so you always know where things stand."],
  ["Scalable solutions", "Foundations that can grow with your organisation."],
  ["Collaboration-oriented approach", "We work with your team, not around them."],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        theme="violet"
        crumbs={[{ name: "About Us", path: "/about-us" }]}
        title="Technology with Purpose. Solutions with Impact."
        text="We believe technology should make businesses simpler, smarter and more efficient."
        kind="team"
        photo="team"
      />

      <section className="container-x grid gap-10 py-16 sm:py-24 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <SectionHeading label="Who We Are" title="A Software and Business Technology Company." />
        <div className="space-y-4">
          <p>AGRANII is a software development and business technology company focused on customised software and communication solutions.</p>
          <p>We work with businesses and organisations to understand how they operate, then build practical digital tools that support their day-to-day work and long-term growth.</p>
        </div>
      </section>

      <section className="container-x grid gap-5 pb-16 md:grid-cols-2 sm:pb-24">
        {[["Our Vision", Eye, "To make practical and meaningful technology solutions accessible to businesses and organisations."], ["Our Mission", Flag, "To understand business requirements and build useful digital solutions that support operational efficiency and growth."]].map(([t, I, x]) => {
          const Icon = I as typeof Eye;
          return (
            <Reveal key={t as string}>
              <div className="h-full rounded-2xl border border-line bg-white p-8 shadow-soft">
                <span className="mb-4 grid size-12 place-items-center rounded-xl bg-gradient-to-br from-brand to-cyan text-white"><Icon className="size-6" aria-hidden /></span>
                <h2 className="!text-2xl">{t as string}</h2><p className="mt-3">{x as string}</p>
              </div>
            </Reveal>
          );
        })}
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading label="What We Do" title="Software, Automation and Communication." align="center" />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DO.map(([t, I]) => (
              <li key={t} className="flex items-center gap-4 rounded-xl border border-line bg-surface p-5"><span className="grid size-11 place-items-center rounded-lg bg-blue-50 text-brand"><I className="size-5" aria-hidden /></span><span className="font-medium text-navy">{t}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x py-16 sm:py-24">
        <SectionHeading label="Our Working Approach" title="Understand. Plan. Design. Develop. Deliver. Improve." align="center" />
        <ol className="mt-12 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {STEPS.map((s, i) => (
            <li key={s} className="rounded-xl bg-gradient-to-br from-brand to-cyan p-px">
              <div className="h-full rounded-[11px] bg-white p-5 text-center"><span className="text-sm font-bold text-brand">{String(i + 1).padStart(2, "0")}</span><p className="mt-1 font-semibold text-navy">{s}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-navy py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading light label="Why Work With AGRANII?" title="How We Approach Every Project." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map(([t, x]) => (
              <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-6"><h3 className="!text-xl !text-white">{t}</h3><p className="mt-2 text-[0.97rem] text-slate-300">{x}</p></div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand tone="violet" title="Let's Build Something Meaningful Together." text="Tell us about your business and what you would like technology to do for it." primary={{ label: "Start a Conversation", href: "/contact-us" }} secondary={null} />
    </>
  );
}
