"use client";
import { useId, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Search, SearchX } from "lucide-react";
import { JsonLd } from "./JsonLd";
import { faqLd } from "@/lib/seo";

export type FaqItem = { q: string; a: string };

export function Faq({ items, schema = true, searchable = false }: { items: FaqItem[]; schema?: boolean; searchable?: boolean }) {
  const [open, setOpen] = useState<string | null>(items[0]?.q ?? null);
  const [query, setQuery] = useState("");
  const base = useId();

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((i) => i.q.toLowerCase().includes(q) || i.a.toLowerCase().includes(q));
  }, [items, query]);

  return (
    <div>
      {schema && <JsonLd data={faqLd(items)} />}
      {searchable && (
        <div className="relative mb-4">
          <label htmlFor={`${base}-search`} className="sr-only">Search questions</label>
          <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" aria-hidden />
          <input
            id={`${base}-search`}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions…"
            className="w-full rounded-xl border border-line bg-white py-3.5 pl-12 pr-4 text-[1rem] text-navy shadow-soft transition placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15"
          />
          <p className="sr-only" role="status">{shown.length} questions shown</p>
        </div>
      )}

      <div className="space-y-3">
        {shown.map((it, idx) => {
          const isOpen = open === it.q;
          const n = items.indexOf(it) + 1;
          return (
            <motion.div
              layout
              key={it.q}
              className={`relative overflow-hidden rounded-2xl border bg-white transition-colors duration-300 ${isOpen ? "border-brand/30 shadow-lift" : "border-line shadow-soft hover:border-brand/25"}`}
            >
              <span aria-hidden className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand via-cyan to-violet transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`} />
              <h3 className="!text-base !font-medium !leading-snug">
                <button
                  type="button"
                  id={`${base}-btn-${idx}`}
                  aria-expanded={isOpen}
                  aria-controls={`${base}-panel-${idx}`}
                  onClick={() => setOpen(isOpen ? null : it.q)}
                  className="flex w-full items-center gap-4 px-5 py-4 text-left text-navy sm:px-6 sm:py-5"
                >
                  <span className={`grid size-8 shrink-0 place-items-center rounded-lg text-sm font-bold transition-colors duration-300 ${isOpen ? "bg-gradient-to-br from-brand to-cyan text-white" : "bg-blue-50 text-brand"}`}>
                    {String(n).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-[1.02rem]">{it.q}</span>
                  <span className={`grid size-8 shrink-0 place-items-center rounded-full transition-all duration-300 ${isOpen ? "rotate-45 bg-brand text-white" : "bg-surface text-brand"}`}>
                    <Plus className="size-4" aria-hidden />
                  </span>
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`${base}-panel-${idx}`}
                    role="region"
                    aria-labelledby={`${base}-btn-${idx}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 pl-[4.75rem] pr-6 text-[1rem] sm:pl-[5.25rem]">{it.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
        {shown.length === 0 && (
          <div className="rounded-2xl border border-dashed border-line bg-white p-10 text-center">
            <SearchX className="mx-auto size-9 text-slate-400" aria-hidden />
            <p className="mt-3 font-medium text-navy">No questions match “{query}”.</p>
            <button type="button" onClick={() => setQuery("")} className="mt-2 font-medium text-brand underline-offset-4 hover:underline">Clear search</button>
          </div>
        )}
      </div>
    </div>
  );
}
