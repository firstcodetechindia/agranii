import { BENEFITS } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";

const spans = ["lg:col-span-2 lg:row-span-2", "", "", "", "", "lg:col-span-4"];

export function WhySection() {
  return (
    <section className="container-x py-20 sm:py-28">
      <Reveal>
        <div className="grid items-end gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <SectionHeading label="Why Agranii" title="A Technology Partner Focused on Your Business." />
          <p className="text-lg">Every business has different challenges. We focus on understanding your requirements and building practical solutions that support your goals.</p>
        </div>
      </Reveal>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {BENEFITS.map((b, i) => {
          const Icon = b.icon;
          const feature = i === 0;
          const wide = i === 5;
          return (
            <SpotlightCard
              key={b.title}
              delay={(i % 4) * 0.07}
              glow={feature ? "rgba(255,255,255,0.18)" : "rgba(37,99,235,0.14)"}
              className={`rounded-3xl ${spans[i]} ${feature ? "bg-gradient-to-br from-brand via-[#1d4ed8] to-[#4c2bb5] text-white shadow-lift" : "border border-line bg-white shadow-soft hover:border-brand/30 hover:shadow-lift"}`}
            >
              <div className={`flex h-full flex-col p-6 sm:p-8 ${feature ? "lg:justify-end lg:p-10" : ""} ${wide ? "lg:flex-row lg:items-center lg:gap-6" : ""}`}>
                <span aria-hidden className={`pointer-events-none absolute right-5 top-2 text-[5.5rem] font-bold leading-none ${feature ? "text-white/10" : "text-brand/[0.06]"}`}>{String(i + 1).padStart(2, "0")}</span>
                <span className={`mb-5 grid size-14 place-items-center rounded-2xl ${feature ? "bg-white/15 text-white ring-1 ring-white/30 lg:mb-auto" : "bg-gradient-to-br from-brand to-cyan text-white shadow-lift"} ${wide ? "lg:mb-0 lg:shrink-0" : ""}`}>
                  <Icon className="size-7" aria-hidden />
                </span>
                <div className={wide ? "lg:max-w-2xl" : ""}>
                <h3 className={`${feature ? "!text-white lg:!text-3xl" : ""} !text-xl`}>{b.title}</h3>
                <p className={`mt-2 ${feature ? "text-blue-50/90 lg:text-lg" : "text-[0.98rem]"}`}>{b.text}</p>
                </div>
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
}
