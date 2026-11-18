import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Check, ShieldCheck } from "lucide-react";
import { buildMetadata, serviceLd } from "@/lib/seo";
import { LANDINGS } from "@/lib/services";
import { SERVICE_BY_PATH } from "@/lib/site";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { JsonLd } from "@/components/ui/JsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return LANDINGS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const l = LANDINGS.find((x) => x.slug === slug);
  if (!l) return {};
  return buildMetadata({ title: l.metaTitle, description: l.metaDescription, path: `/${l.slug}` });
}

export default async function LandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const l = LANDINGS.find((x) => x.slug === slug);
  if (!l) notFound();
  const isComm = l.slug.startsWith("bulk-");
  const parent = isComm ? { name: "Bulk Communication", path: "/bulk-communication" } : { name: "Custom Software", path: "/custom-software" };

  return (
    <>
      <JsonLd data={serviceLd({ name: l.serviceName, description: l.metaDescription, path: `/${l.slug}` })} />
      <PageHero
        theme={l.theme}
        crumbs={[parent, { name: l.crumb, path: `/${l.slug}` }]}
        title={l.h1}
        text={l.lead}
        cta={{ label: l.enquiry, href: "/contact-us" }}
        secondary={{ label: `All ${isComm ? "communication services" : "custom software"}`, href: parent.path }}
        kind={l.kind}
        photo={l.photo}
        service={SERVICE_BY_PATH[`/${l.slug}`]}
      />

      <section className="container-x grid gap-10 py-16 sm:py-24 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <SectionHeading label={l.serviceName} title={l.crumb === "Employee Management Software" ? "Less Paperwork, More Visibility." : `Why ${l.crumb} Matters.`} />
        <div className="space-y-4">{l.intro.map((p) => <p key={p}>{p}</p>)}</div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading label="Capabilities" title={l.groupsTitle} />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {l.groups.map((g) => (
              <div key={g.title} className="rounded-2xl border border-line bg-surface p-6">
                <h3 className="!text-xl">{g.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {g.items.map((it) => <li key={it} className="flex items-start gap-2.5 text-[0.97rem]"><Check className="mt-1 size-4 shrink-0 text-cyan" aria-hidden />{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
          {l.compliance && (
            <p className="mt-8 flex gap-3 rounded-xl border-l-4 border-cyan bg-cyan/5 p-4 text-[0.97rem]"><ShieldCheck className="mt-0.5 size-5 shrink-0 text-cyan" aria-hidden />{l.compliance}</p>
          )}
        </div>
      </section>

      <section className="container-x grid gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading label="Fit" title={l.audienceTitle} />
          <ul className="mt-6 space-y-3">{l.audience.map((a) => <li key={a} className="flex gap-2.5"><Check className="mt-1 size-5 shrink-0 text-brand" aria-hidden />{a}</li>)}</ul>
        </div>
        <div>
          <h2 className="!text-2xl">Related services</h2>
          <ul className="mt-5 space-y-3">
            {l.related.map((r) => <li key={r.href}><Link href={r.href} className="font-medium text-brand underline-offset-4 hover:underline">{r.label} →</Link></li>)}
          </ul>
        </div>
      </section>

      <FaqSection title={`${l.crumb}: Common Questions.`} items={l.faqs} service={SERVICE_BY_PATH[`/${l.slug}`]} />

      <CtaBand title={`Interested in ${l.crumb}?`} text="Share your requirements and our team will get back to you to discuss the right approach." primary={{ label: l.enquiry, href: "/contact-us" }} secondary={null} service={SERVICE_BY_PATH[`/${l.slug}`]} />
    </>
  );
}
