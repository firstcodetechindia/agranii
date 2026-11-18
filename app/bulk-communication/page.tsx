import { Fragment } from "react";
import { Check } from "lucide-react";
import { buildMetadata, serviceLd } from "@/lib/seo";
import { COMM_DETAILS, COMM_FAQS } from "@/lib/services";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { JsonLd } from "@/components/ui/JsonLd";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = buildMetadata({
  title: "Bulk WhatsApp, SMS, Voice & Email Services | Agranii",
  description: "Explore business communication solutions from Agranii, including WhatsApp, bulk SMS, automated voice calls and email services.",
  path: "/bulk-communication",
});

const COMPARE = [
  ["WhatsApp", "Interactive messaging and approved customer updates", "Needs opt-in and approved templates"],
  ["SMS", "Short notifications, OTP and time-sensitive alerts", "Needs DLT registration in India"],
  ["Voice", "Spoken announcements and automated reminders", "Best for short, important messages"],
  ["Email", "Detailed information, newsletters and business communication", "Needs sender authentication"],
];

const USES = [
  ["Healthcare", "Appointment reminders, report-ready alerts and follow-up notices."],
  ["Hospitality", "Booking confirmations, check-in details and guest updates."],
  ["Education", "Fee reminders, event notices and attendance alerts."],
  ["Retail", "Order updates, offers to opted-in customers and billing receipts."],
  ["Ecommerce", "Order, shipping and delivery notifications and OTPs."],
  ["Corporate", "Internal announcements, onboarding and policy updates."],
  ["Financial and service businesses", "Payment reminders, statements and service alerts."],
];

export default function BulkCommunicationPage() {
  return (
    <>
      <JsonLd data={serviceLd({ name: "Bulk Business Communication Services", description: "WhatsApp, SMS, voice call and email communication services.", path: "/bulk-communication" })} />
      <PageHero
        theme="cyan"
        crumbs={[{ name: "Bulk Communication", path: "/bulk-communication" }]}
        title="Business Communication That Connects You With Your Customers."
        text="Reach your audience through integrated WhatsApp, SMS, voice call and email communication services designed for business communication requirements."
        cta={{ label: "Discuss Your Communication Requirements", href: "/contact-us" }}
        kind="comms"
        photo="comms"
      />

      <section className="container-x grid gap-10 py-16 sm:py-24 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <SectionHeading label="Introduction" title="One Business. Multiple Communication Channels." />
        <div className="space-y-4">
          <p>Customer communication is an important part of business operations. Whether you need to send notifications, reminders, updates or marketing communications, the right channel helps you reach customers effectively.</p>
          <p>AGRANII provides business communication solutions through multiple channels.</p>
        </div>
      </section>

      <section className="bg-white py-6">
        {COMM_DETAILS.map((d, i) => (
          <Fragment key={d.id}><ServiceDetail d={d} flip={i % 2 === 1} /></Fragment>
        ))}
      </section>

      <section className="container-x py-16 sm:py-24">
        <SectionHeading label="Compare Channels" title="Choosing the Right Channel." align="center" />
        <Reveal>
          <div className="mt-12 overflow-x-auto rounded-2xl border border-line bg-white shadow-soft">
            <table className="w-full min-w-[640px] text-left text-[0.97rem]">
              <caption className="sr-only">Comparison of WhatsApp, SMS, voice and email channels</caption>
              <thead className="bg-navy text-white">
                <tr><th scope="col" className="px-5 py-4 font-medium">Channel</th><th scope="col" className="px-5 py-4 font-medium">Best for</th><th scope="col" className="px-5 py-4 font-medium">Keep in mind</th></tr>
              </thead>
              <tbody>
                {COMPARE.map(([a, b, c]) => (
                  <tr key={a} className="border-t border-line even:bg-surface">
                    <th scope="row" className="px-5 py-4 font-semibold text-navy">{a}</th><td className="px-5 py-4">{b}</td><td className="px-5 py-4">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      <section className="bg-gradient-to-br from-[#e8f1ff] via-[#e6f8fc] to-[#efe9ff] py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading label="Industries and Use Cases" title="Where Business Communication Helps." description="Typical ways organisations in these sectors use messaging. These are use cases, not client references." />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {USES.map(([t, x]) => (
              <li key={t} className="glass rounded-2xl p-5"><h3 className="!text-lg flex items-center gap-2"><Check className="size-5 text-cyan" aria-hidden />{t}</h3><p className="mt-1.5 text-[0.95rem]">{x}</p></li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Let's Find the Right Communication Solution for Your Business." text="Tell us what you need to send and to whom, and we will suggest the right mix of channels." primary={{ label: "Talk to Our Team", href: "/contact-us" }} secondary={null} />

      <FaqSection title="Communication Services Questions Answered." items={COMM_FAQS} />
    </>
  );
}
