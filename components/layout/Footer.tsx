import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle, Link2 } from "lucide-react";
import { FOOTER_COMMS, FOOTER_SOFTWARE, NAV, SITE } from "@/lib/site";
import { Logo } from "./Logo";

const col = "text-sm font-semibold uppercase tracking-[0.12em] text-white";
const lnk = "text-[0.95rem] text-slate-300 transition hover:text-white";

export function Footer() {
  const c = SITE.contact;
  const socials = Object.entries(SITE.social).filter(([, v]) => v);
  return (
    <footer className="relative mt-24 bg-navy text-slate-300">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent" />
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1.5fr_1fr_1.2fr_1fr_1.3fr]">
        <div>
          <Logo light />
          <p className="mt-4 font-medium text-white">{SITE.tagline}</p>
          <p className="mt-3 text-[0.95rem]">
            AGRANII develops custom business software and communication solutions that help
            organisations simplify operations and stay connected with their customers.
          </p>
          {socials.length > 0 && (
            <ul className="mt-5 flex gap-3">
              {socials.map(([k, v]) => (
                <li key={k}>
                  <a
                    href={v}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={k}
                    className="grid size-10 place-items-center rounded-lg bg-white/10 transition hover:bg-brand"
                  >
                    <Link2 className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        <nav aria-label="Quick links">
          <h2 className={col}>Quick Links</h2>
          <ul className="mt-4 space-y-2.5">
            {["/", "/about-us", "/custom-software", "/bulk-communication", "/contact-us"].map((h) => (
              <li key={h}><Link href={h} className={lnk}>{NAV.find((n) => n.href === h)?.label}</Link></li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Custom software">
          <h2 className={col}>Custom Software</h2>
          <ul className="mt-4 space-y-2.5">
            {FOOTER_SOFTWARE.map((n) => (
              <li key={n.href}><Link href={n.href} className={lnk}>{n.label}</Link></li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Communication services">
          <h2 className={col}>Communication Services</h2>
          <ul className="mt-4 space-y-2.5">
            {FOOTER_COMMS.map((n) => (
              <li key={n.href}><Link href={n.href} className={lnk}>{n.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className={col}>Contact</h2>
          <ul className="mt-4 space-y-3 text-[0.95rem]">
            <li className="flex gap-2.5"><Mail className="mt-1 size-4 shrink-0 text-cyan" aria-hidden />
              {c.email ? <a className={lnk} href={`mailto:${c.email}`}>{c.email}</a> : <span className="text-slate-400">Email — to be added</span>}</li>
            <li className="flex gap-2.5"><Phone className="mt-1 size-4 shrink-0 text-cyan" aria-hidden />
              {c.phone ? <a className={lnk} href={`tel:${c.phone}`}>{c.phone}</a> : <span className="text-slate-400">Phone — to be added</span>}</li>
            <li className="flex gap-2.5"><MessageCircle className="mt-1 size-4 shrink-0 text-cyan" aria-hidden />
              {c.whatsapp ? <a className={lnk} href={`https://wa.me/${c.whatsapp.replace(/\D/g, "")}`}>WhatsApp us</a> : <span className="text-slate-400">WhatsApp — to be added</span>}</li>
            <li className="flex gap-2.5"><MapPin className="mt-1 size-4 shrink-0 text-cyan" aria-hidden />
              <span className={c.address ? "" : "text-slate-400"}>{c.address || "Office address — to be added"}</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-sm md:flex-row md:items-center md:justify-between">
          <p>Copyright © 2026 AGRANII. All Rights Reserved.</p>
          <ul className="flex gap-5">
            <li><Link href="/privacy-policy" className={lnk}>Privacy Policy</Link></li>
            <li><Link href="/terms-and-conditions" className={lnk}>Terms and Conditions</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
