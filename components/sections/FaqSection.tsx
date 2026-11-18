import { MessageCircleQuestion } from "lucide-react";
import { Faq, type FaqItem } from "@/components/ui/Faq";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import type { SERVICE_OPTIONS } from "@/lib/site";

export function FaqSection({
  title, items, description = "Quick answers to what businesses ask us most. Can't find yours? Ask our team directly.", service,
}: {
  title: string; items: FaqItem[]; description?: string; service?: (typeof SERVICE_OPTIONS)[number];
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-surface py-16 sm:py-24">
      <div aria-hidden className="absolute -left-24 top-10 size-80 rounded-full bg-brand/5 blur-3xl" />
      <div aria-hidden className="absolute -right-24 bottom-0 size-80 rounded-full bg-cyan/10 blur-3xl" />
      <div className="container-x relative grid items-start gap-10 lg:grid-cols-[0.85fr_1.5fr] lg:gap-14">
        <Reveal className="lg:sticky lg:top-28">
          <SectionHeading label="FAQ" title={title} description={description} />
          <div className="relative mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-brand to-cyan p-6 text-white shadow-lift">
            <div aria-hidden className="absolute -right-6 -top-6 size-28 rounded-full bg-white/15 blur-xl" />
            <span className="relative grid size-11 place-items-center rounded-xl bg-white/20"><MessageCircleQuestion className="size-6" aria-hidden /></span>
            <h3 className="relative mt-4 !text-xl !text-white">Still have a question?</h3>
            <p className="relative mt-1.5 text-blue-50">Tell us about your requirement and our team will respond.</p>
            <div className="relative mt-5"><Button href="/contact-us" variant="light" service={service}>Ask Our Team</Button></div>
          </div>
        </Reveal>
        <Reveal delay={0.1}><Faq items={items} searchable={items.length > 5} /></Reveal>
      </div>
    </section>
  );
}
