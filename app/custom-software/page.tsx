import { Fragment } from "react";
import { buildMetadata, serviceLd } from "@/lib/seo";
import { SOFTWARE_DETAILS, SOFTWARE_FAQS } from "@/lib/services";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CtaBand } from "@/components/sections/CtaBand";
import { Faq } from "@/components/ui/Faq";
import { JsonLd } from "@/components/ui/JsonLd";

export const metadata = buildMetadata({
  title: "Custom Software Development Company | Agranii",
  description: "Explore Agranii's customised software solutions for hospitals, jewellery businesses, hotels and employee management.",
  path: "/custom-software",
});

const APPROACH = [
  ["Requirement discovery", "We learn your goals, users and constraints."],
  ["Workflow understanding", "We map how work actually flows through your organisation."],
  ["UI/UX planning", "We plan simple screens that your team can use without heavy training."],
  ["Development", "We build in stages so you can review progress."],
  ["Testing", "We verify features against your real scenarios."],
  ["Deployment", "We launch and help your team get started."],
  ["Ongoing improvements", "We refine and extend as your needs change."],
];

export default function CustomSoftwarePage() {
  return (
    <>
      <JsonLd data={serviceLd({ name: "Custom Software Development", description: "Business-focused custom software development.", path: "/custom-software" })} />
      <PageHero
        crumbs={[{ name: "Custom Software", path: "/custom-software" }]}
        title="Custom Software Development for Businesses That Want More."
        text="We develop business-focused software solutions designed to simplify operations, improve productivity and support your organisation's growth."
        cta={{ label: "Discuss Your Software Requirements", href: "/contact-us" }}
        kind="software"
        photo="dev"
      />

      <section className="container-x grid gap-10 py-16 sm:py-24 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <SectionHeading label="Introduction" title="Software That Works the Way Your Business Works." />
        <div className="space-y-4">
          <p>Every business has its own processes, challenges and operational requirements. Generic software may not always provide the flexibility required to manage these processes efficiently.</p>
          <p>AGRANII focuses on developing customised software solutions that align with business workflows and practical objectives.</p>
        </div>
      </section>

      <section className="bg-white py-6">
        <div className="container-x pt-14">
          <SectionHeading label="Industry Software Solutions" title="Software for the Industries We Understand." align="center" />
        </div>
        {SOFTWARE_DETAILS.map((d, i) => (
          <Fragment key={d.id}>
            <ServiceDetail d={d} flip={i % 2 === 1}>
              {d.id === "jewellery" && <JewelleryExample />}
            </ServiceDetail>
          </Fragment>
        ))}
      </section>

      <section className="container-x py-16 sm:py-24">
        <SectionHeading label="Development Approach" title="Built Around Your Business Requirements." description="A clear, staged approach keeps you informed and in control from the first conversation to long after launch." />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {APPROACH.map(([t, x], i) => (
            <li key={t} className="rounded-2xl border border-line bg-white p-5 shadow-soft">
              <span className="text-sm font-bold text-brand">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="!text-lg">{t}</h3>
              <p className="mt-1 text-[0.95rem]">{x}</p>
            </li>
          ))}
        </ol>
      </section>

      <ProcessTimeline title="Our Delivery Process, Step by Step." />

      <section className="container-x pb-8">
        <SectionHeading label="FAQ" title="Custom Software Questions Answered." />
        <div className="mt-8 max-w-4xl"><Faq items={SOFTWARE_FAQS} /></div>
      </section>

      <CtaBand title="Looking for Software That Fits Your Business?" text="Let's discuss your requirements and explore the right software solution." primary={{ label: "Start Your Project Discussion", href: "/contact-us" }} secondary={null} />
    </>
  );
}

function JewelleryExample() {
  const rows = [
    ["Gross Weight", "20.000 grams"],
    ["Stone Weight", "2.000 grams"],
    ["Net Metal Weight", "18.000 grams"],
    ["Purity", "22K"],
    ["Wastage", "1.000 gram"],
    ["Making Charges", "Based on configured business rate"],
  ];
  return (
    <div className="mt-7 overflow-hidden rounded-2xl border border-amber-200 bg-amber-50/60">
      <h4 className="border-b border-amber-200 bg-amber-100/70 px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-amber-800">Example calculation</h4>
      <dl className="divide-y divide-amber-100 px-5">
        {rows.map(([k, v]) => (
          <div key={k} className="flex justify-between gap-4 py-2.5 text-[0.97rem]"><dt>{k}</dt><dd className="text-right font-medium text-navy">{v}</dd></div>
        ))}
      </dl>
      <p className="border-t border-amber-200 px-5 py-3 text-sm">Net metal weight = gross weight − stone weight. Actual calculations can be configured according to your business&apos;s accounting and jewellery practices.</p>
    </div>
  );
}
