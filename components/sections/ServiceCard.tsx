import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/content";

export function ServiceCard({ s }: { s: Service }) {
  const Icon = s.icon;
  return (
    <Link
      href={s.href}
      className="group relative flex h-full flex-col rounded-2xl border border-line/80 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-lift"
    >
      <span className={`mb-5 grid size-12 place-items-center rounded-xl ${s.tint} transition group-hover:scale-105`}>
        <Icon className="size-6" aria-hidden />
      </span>
      <h3 className="!text-xl">{s.title}</h3>
      <p className="mt-2.5 flex-1 text-[0.98rem]">{s.description}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-[0.95rem] font-medium text-brand">
        Learn more
        <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1.5" aria-hidden />
      </span>
    </Link>
  );
}
