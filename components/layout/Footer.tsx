import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { FOOTER_COMMS, FOOTER_SOFTWARE, SITE } from "@/lib/site";
import { Logo } from "./Logo";
import { Reveal } from "@/components/ui/Reveal";
import { PREFETCH } from "@/lib/asset";

const COMPANY = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Custom Software", href: "/custom-software" },
  { label: "Bulk Communication", href: "/bulk-communication" },
  { label: "Contact Us", href: "/contact-us" },
];

const SOCIAL_ICONS: Record<string, { label: string; node: ReactNode }> = {
  linkedin: { label: "LinkedIn", node: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /> },
  facebook: { label: "Facebook", node: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /> },
  instagram: { label: "Instagram", node: <><path d="M12 2.2c3.2 0 3.6 0 4.8.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8C2.4 3.9 4 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zM12 0C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c.2 4.4 2.6 6.8 7 7C8.3 24 8.7 24 12 24s3.7 0 4.9-.1c4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.2-4.4-2.6-6.8-7-7C15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-11.8a1.4 1.4 0 100 2.8 1.4 1.4 0 000-2.8z" /></> },
  x: { label: "X", node: <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.29 19.494h2.039L6.486 3.24H4.298l13.313 17.407z" /> },
  youtube: { label: "YouTube", node: <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /> },
};

function LinkColumn({ title, links }: { title: string; links: readonly { label: string; href: string }[] }) {
  return (
    <nav aria-label={title}>
      <h2 className="!text-sm !font-semibold uppercase !tracking-[0.16em] !text-cyan-300">{title}</h2>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link prefetch={PREFETCH} href={l.href} className="group inline-flex items-center gap-1.5 text-[0.97rem] text-slate-300 transition-all duration-300 hover:translate-x-1.5 hover:text-white">
              <span className="relative">
                {l.label}
                <span aria-hidden className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-cyan to-violet transition-all duration-300 group-hover:w-full" />
              </span>
              <ArrowUpRight className="size-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" aria-hidden />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function ContactTile({ icon: Icon, label, value, href }: { icon: typeof Mail; label: string; value: string; href?: string }) {
  const body = (
    <>
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand to-cyan text-white shadow-[0_8px_20px_-8px_rgb(6_182_212/0.7)] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
        <Icon className="size-5" aria-hidden />
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-medium uppercase tracking-wider text-slate-400">{label}</span>
        <span className={`block break-words text-[0.95rem] ${href ? "text-white" : "text-slate-400"}`}>{value}</span>
      </span>
    </>
  );
  const cls = "group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:bg-white/[0.08]";
  return href ? <a href={href} className={cls}>{body}</a> : <div className={cls}>{body}</div>;
}

export function Footer() {
  const c = SITE.contact;
  const socials = Object.entries(SITE.social).filter(([, v]) => v);
  return (
    <footer className="relative overflow-hidden bg-[#0b1226] text-slate-300">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/70 to-transparent" />
      <div aria-hidden className="absolute -left-32 top-0 size-[420px] rounded-full bg-brand/20 blur-3xl" />
      <div aria-hidden className="absolute -right-24 bottom-24 size-[380px] rounded-full bg-violet/20 blur-3xl" />
      <div aria-hidden className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,.1)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />

      <div className="container-x relative pt-16 sm:pt-20">
        <div className="grid gap-12 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)] xl:gap-16">
          <Reveal>
            <Logo light className="h-12" />
            <p className="mt-6 max-w-sm text-2xl font-bold leading-snug text-white">
              Technology That <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">Understands Business.</span>
            </p>
            <p className="mt-4 max-w-sm text-[0.97rem] leading-relaxed">
              Custom software and business communication solutions that help organisations simplify operations and stay connected with their customers.
            </p>
            {socials.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-3">
                {socials.map(([k, v]) => {
                  const ic = SOCIAL_ICONS[k];
                  return (
                    <li key={k}>
                      <a href={v} target="_blank" rel="noopener noreferrer" aria-label={ic?.label ?? k} className="grid size-11 place-items-center rounded-xl border border-white/15 bg-white/5 text-white transition duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-gradient-to-br hover:from-brand hover:to-violet">
                        <svg viewBox="0 0 24 24" className="size-[18px]" fill="currentColor" aria-hidden>{ic?.node}</svg>
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <LinkColumn title="Company" links={COMPANY} />
              <LinkColumn title="Custom Software" links={FOOTER_SOFTWARE} />
              <LinkColumn title="Communication" links={FOOTER_COMMS} />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-14">
          <h2 className="sr-only">Contact information</h2>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <ContactTile icon={Mail} label="Email" value={c.email || "To be added"} href={c.email ? `mailto:${c.email}` : undefined} />
            <ContactTile icon={Phone} label="Phone" value={c.phone || "To be added"} href={c.phone ? `tel:${c.phone}` : undefined} />
            <ContactTile icon={MessageCircle} label="WhatsApp" value={c.whatsapp || "To be added"} href={c.whatsapp ? `https://wa.me/${c.whatsapp.replace(/\D/g, "")}` : undefined} />
            <ContactTile icon={MapPin} label="Office" value={c.address || "To be added"} />
          </div>
        </Reveal>
      </div>

      {/* oversized decorative wordmark */}
      <div aria-hidden className="relative mt-10 select-none overflow-hidden text-center sm:mt-14">
        <p className="bg-gradient-to-b from-white/[0.12] to-transparent bg-clip-text text-[clamp(4rem,18vw,15rem)] font-bold leading-[0.8] tracking-[0.06em] text-transparent">AGRANII</p>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col gap-4 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © 2026 AGRANII. All Rights Reserved.</p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <li><Link prefetch={PREFETCH} href="/privacy-policy" className="transition hover:text-white">Privacy Policy</Link></li>
            <li><Link prefetch={PREFETCH} href="/terms-and-conditions" className="transition hover:text-white">Terms and Conditions</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
