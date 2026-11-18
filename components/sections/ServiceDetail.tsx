import { Check } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Mockup } from "@/components/visuals/Mockups";
import { Photo } from "@/components/ui/Photo";
import type { Detail } from "@/lib/services";
import { SERVICE_BY_PATH } from "@/lib/site";

export function ServiceDetail({ d, flip, children }: { d: Detail; flip?: boolean; children?: ReactNode }) {
  return (
    <article id={d.id} className="container-x grid items-start gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:gap-16">
      <Reveal className={flip ? "lg:order-2" : ""}>
        <div className="relative lg:sticky lg:top-28">
          {d.photo ? (
            <div className="relative overflow-hidden rounded-3xl">
              <div className="relative aspect-[4/5]">
                <Photo name={d.photo} sizes="(min-width:1024px) 600px, 100vw" />
                <div aria-hidden className={`absolute inset-0 bg-gradient-to-t ${d.grad} opacity-30 mix-blend-multiply`} />
              </div>
              <div className="absolute -bottom-0 right-3 w-[82%] pb-3 sm:right-5 sm:pb-5"><Mockup kind={d.kind} /></div>
            </div>
          ) : (
            <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${d.grad} p-6 sm:p-10`}>
              <div aria-hidden className="grid-bg absolute inset-0 opacity-30" />
              <div aria-hidden className="absolute -right-10 -top-10 size-56 rounded-full bg-white/20 blur-2xl" />
              <Mockup kind={d.kind} className="relative" />
            </div>
          )}
        </div>
      </Reveal>
      <Reveal delay={0.08} className={flip ? "lg:order-1" : ""}>
        <h3 className="!text-[clamp(1.5rem,1.1rem+1.4vw,2.2rem)] !leading-tight">{d.heading}</h3>
        <p className="mt-4">{d.description}</p>
        <h4 className="mb-3 mt-7 text-sm font-semibold uppercase tracking-[0.12em] text-brand">Key features</h4>
        <ul className="grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
          {d.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-[0.97rem]">
              <Check className="mt-1 size-4 shrink-0 text-cyan" aria-hidden />{f}
            </li>
          ))}
        </ul>
        {d.benefits && (
          <div className="mt-7 rounded-2xl border border-line bg-white p-5 shadow-soft">
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-brand">Business benefits</h4>
            <ul className="space-y-1.5 text-[0.97rem]">{d.benefits.map((b) => <li key={b}>• {b}</li>)}</ul>
          </div>
        )}
        {d.note && <p className="mt-6 rounded-xl border-l-4 border-cyan bg-cyan/5 p-4 text-[0.95rem]">{d.note}</p>}
        {children}
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={d.cta.href} service={SERVICE_BY_PATH[d.landing]}>{d.cta.label}</Button>
          <Button href={d.landing} variant="secondary" arrow={false}>Learn more</Button>
        </div>
      </Reveal>
    </article>
  );
}
