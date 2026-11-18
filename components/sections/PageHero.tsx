import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Mockup, type MockupKind } from "@/components/visuals/Mockups";
import { Photo } from "@/components/ui/Photo";
import type { PhotoKey } from "@/lib/photos";
import type { SERVICE_OPTIONS } from "@/lib/site";

const themes = {
  blue: "from-[#0b1530] via-[#13245a] to-[#1d4ed8]",
  cyan: "from-[#0a4a63] via-[#0b7f9c] to-[#06b6d4]",
  violet: "from-[#2a1668] via-[#4c2bb5] to-[#2563eb]",
  amber: "from-[#3a2208] via-[#7a4a10] to-[#b45309]",
  teal: "from-[#0e3a8a] via-[#1d4ed8] to-[#06b6d4]",
} as const;

export function PageHero({
  crumbs, title, text, cta, secondary, kind, theme = "blue", extra, photo, service,
}: {
  crumbs: { name: string; path: string }[];
  title: ReactNode;
  text: string;
  cta?: { label: string; href: string };
  secondary?: { label: string; href: string };
  kind?: MockupKind;
  theme?: keyof typeof themes;
  extra?: ReactNode;
  photo?: PhotoKey;
  service?: (typeof SERVICE_OPTIONS)[number];
}) {
  return (
    <section className={`relative overflow-hidden bg-gradient-to-br ${themes[theme]} pb-16 pt-[calc(var(--header-h)+32px)] text-white sm:pb-24`}>
      {photo ? (
        <>
          <Photo name={photo} sizes="100vw" priority />
          <div aria-hidden className={`absolute inset-0 bg-gradient-to-br ${themes[theme]} opacity-[0.78]`} />
        </>
      ) : (
        <>
          <div aria-hidden className="grid-bg absolute inset-0 opacity-25 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
          <div aria-hidden className="absolute -right-24 -top-20 size-[420px] rounded-full bg-cyan/25 blur-3xl" />
        </>
      )}
      <div className="container-x relative">
        <Breadcrumbs items={crumbs} light />
        <div className={`mt-8 grid items-center gap-10 ${kind ? "lg:grid-cols-[1.05fr_1fr] lg:gap-14" : ""}`}>
          <div>
            <h1 className="!text-white">{title}</h1>
            <p className="mt-5 max-w-2xl text-lg text-blue-50/90">{text}</p>
            {(cta || secondary) && (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {cta && <Button href={cta.href} variant="light" service={service}>{cta.label}</Button>}
                {secondary && <Button href={secondary.href} variant="ghost" className="!border !border-white/40 !text-white hover:!bg-white/10">{secondary.label}</Button>}
              </div>
            )}
            {extra}
          </div>
          {kind && <Mockup kind={kind} className="mx-auto w-full max-w-[560px]" />}
        </div>
      </div>
    </section>
  );
}
