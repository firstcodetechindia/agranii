"use client";
import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { JsonLd } from "./JsonLd";
import { faqLd } from "@/lib/seo";

export type FaqItem = { q: string; a: string };

export function Faq({ items, schema = true }: { items: FaqItem[]; schema?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();
  return (
    <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
      {schema && <JsonLd data={faqLd(items)} />}
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q}>
            <h3 className="!text-base !font-medium !leading-snug">
              <button
                type="button"
                id={`${base}-btn-${i}`}
                aria-expanded={isOpen}
                aria-controls={`${base}-panel-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-navy transition hover:bg-surface sm:px-6 sm:py-5"
              >
                <span className="text-[1.02rem]">{it.q}</span>
                <Plus
                  className={`size-5 shrink-0 text-brand transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${base}-panel-${i}`}
                  role="region"
                  aria-labelledby={`${base}-btn-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-[1rem] sm:px-6">{it.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
