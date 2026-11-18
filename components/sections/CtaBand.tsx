import { Mail, MessagesSquare, Rocket } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { FloatingShapes } from "@/components/ui/FloatingShapes";

export function CtaBand({
  title = "Have a Business Challenge or a New Idea?",
  text = "Let's discuss how the right technology can help you move forward.",
  primary = { label: "Discuss Your Project", href: "/contact-us" },
  secondary = { label: "Contact Our Team", href: "/contact-us" },
  tone = "blue",
}: {
  title?: string;
  text?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string } | null;
  tone?: "blue" | "violet";
}) {
  const bg = tone === "violet" ? "from-[#2a1668] via-[#4c2bb5] to-[#2563eb]" : "from-[#0b3fae] via-brand to-cyan";
  const chips = [[Rocket, "Custom software"], [MessagesSquare, "Business communication"], [Mail, "Technology partnership"]] as const;
  return (
    <section className={`relative mt-16 overflow-hidden bg-gradient-to-r ${bg} text-white sm:mt-24`}>
      <FloatingShapes />
      <div className="container-x relative grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal>
          <h2 className="!text-white [font-size:clamp(1.9rem,1.2rem+2.6vw,3.25rem)]">{title}</h2>
          <p className="mt-4 max-w-2xl text-lg text-blue-50/95">{text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={primary.href} variant="light">{primary.label}</Button>
            {secondary && (
              <Button href={secondary.href} variant="ghost" className="!border !border-white/50 !text-white hover:!bg-white/10">
                {secondary.label}
              </Button>
            )}
          </div>
        </Reveal>
        <Reveal delay={0.1} className="hidden lg:block">
          <ul className="glass !border-white/25 !bg-white/10 space-y-3 rounded-2xl p-5 !shadow-[0_30px_60px_-20px_rgb(0_0_0/0.4)]">
            {chips.map(([I, t]) => (
              <li key={t} className="flex items-center gap-4 rounded-xl bg-white/10 px-4 py-3.5">
                <span className="grid size-11 place-items-center rounded-lg bg-white text-brand"><I className="size-5" aria-hidden /></span>
                <span className="font-medium">{t}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
