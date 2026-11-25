import { Mail, MapPin, Phone } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SITE, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata = buildMetadata({
  title: "Contact Agranii | Software Development & Business Enquiries",
  description: "Contact Agranii to discuss software development projects, business communication services and technology collaborations.",
  path: "/contact-us",
});

export default function ContactPage() {
  const c = SITE.contact;
  const items = [
    { icon: Mail, label: "Business Email", value: c.email, href: c.email && `mailto:${c.email}` },
    { icon: Phone, label: "Phone Number", value: c.phone, href: c.phone && `tel:${c.phone}` },
    { icon: MapPin, label: "Office Address", value: c.address, href: "" },
  ];
  return (
    <>
      <PageHero
        theme="teal"
        crumbs={[{ name: "Contact Us", path: "/contact-us" }]}
        title="Let's Discuss Your Next Technology Project."
        text="Have a software requirement, communication requirement or collaboration idea? Get in touch with our team."
      />
      <section className="container-x grid gap-10 py-16 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div>
          <SectionHeading as="h2" title="Please Connect for Working With Us." description="We are open to discussing software development projects, business requirements, technology collaborations and partnership opportunities." />
          <ul className="mt-8 space-y-4">
            {c.whatsapp && (
              <li>
                <a
                  href={whatsappLink("Hello AGRANII, I would like to discuss my requirements.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl bg-[#25D366] p-4 text-white shadow-[0_12px_28px_-10px_rgb(37_211_102/0.7)] transition hover:-translate-y-0.5 hover:bg-[#1ebe5b]"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-white text-[#25D366] transition group-hover:scale-105"><WhatsAppIcon className="size-7" /></span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-white/90">Chat on WhatsApp</span>
                    <span className="block text-lg font-semibold">{c.whatsapp}</span>
                  </span>
                  <span aria-hidden className="ml-auto text-2xl transition-transform group-hover:translate-x-1">→</span>
                </a>
              </li>
            )}
            {items.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-start gap-4 rounded-xl border border-line bg-white p-4 shadow-soft">
                <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-blue-50 text-brand"><Icon className="size-5" aria-hidden /></span>
                <div>
                  <p className="text-sm font-medium text-navy">{label}</p>
                  {value ? (href ? <a href={href} className="text-brand hover:underline">{value}</a> : <p>{value}</p>) : <p className="text-slate-400">To be added — contact details not yet configured</p>}
                </div>
              </li>
            ))}
          </ul>
          {c.mapsEmbedUrl && (
            <iframe title="Office location map" src={c.mapsEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="mt-6 h-64 w-full rounded-xl border border-line" />
          )}
        </div>
        <div id="enquiry"><ContactForm /></div>
      </section>

      <section className="container-x pb-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#e8f1ff] via-[#e6f8fc] to-[#efe9ff] p-8 sm:p-14">
          <SectionHeading title="Interested in Working or Collaborating With AGRANII?" description="We welcome conversations with developers, technology professionals, businesses and potential partners who share an interest in building meaningful technology solutions." />
          <div className="mt-8"><Button href="#enquiry">Connect With Us</Button></div>
        </div>
      </section>
    </>
  );
}
