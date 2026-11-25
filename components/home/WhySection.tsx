import { BENEFITS } from "@/lib/content";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";
import { SceneArt } from "./SlideScenes";

export function WhySection() {
  return (
    <section className="container-x py-16 sm:py-20">
      <div className="grid gap-5 xl:grid-cols-[0.9fr_1.4fr] xl:gap-6">
        <Reveal className="h-full">
          <div className="relative flex h-full min-h-[420px] flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b1530] via-[#2a1f8f] to-[#1d4ed8] p-7 text-white shadow-lift sm:p-9">
            <div aria-hidden className="absolute -right-16 -top-16 size-64 rounded-full bg-cyan/25 blur-3xl" />
            <p className="relative text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Why Agranii</p>
            <h2 className="relative mt-3 !text-white" style={{ fontSize: "clamp(1.75rem, 1.2rem + 1.6vw, 2.5rem)", lineHeight: 1.15 }}>
              A Technology Partner Focused on Your Business.
            </h2>
            <p className="relative mt-4 max-w-md text-blue-50/85">
              Every business has different challenges. We focus on understanding your requirements and building practical solutions that support your goals.
            </p>
            <SceneArt index={3} className="relative mt-auto block h-auto max-h-[300px] w-full pt-6" />
          </div>
        </Reveal>

        <ul className="grid gap-5 sm:grid-cols-2">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon;
            return (
              <li key={b.title} className="flex">
                <SpotlightCard
                  delay={(i % 2) * 0.07}
                  glow="rgba(37,99,235,0.14)"
                  className="w-full rounded-3xl border border-line bg-white shadow-soft hover:border-brand/30 hover:shadow-lift"
                >
                  <div className="flex h-full items-start gap-4 p-5 sm:p-6">
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand to-cyan text-white shadow-lift">
                      <Icon className="size-6" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="!text-lg">{b.title}</h3>
                        <span aria-hidden className="text-sm font-bold text-brand/30">{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <p className="mt-1.5 text-[0.95rem] leading-relaxed">{b.text}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
