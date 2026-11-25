"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, X } from "lucide-react";
import { quickEnquirySchema, type QuickEnquiryData, type QuickEnquiryInput } from "@/lib/enquiry";
import { SERVICE_OPTIONS, SITE } from "@/lib/site";
import { Captcha, CAPTCHA_ENABLED } from "@/components/ui/Captcha";
import { PREFETCH } from "@/lib/asset";

type Service = (typeof SERVICE_OPTIONS)[number];
type Ctx = { open: (opts?: { service?: Service }) => void };
const EnquiryCtx = createContext<Ctx>({ open: () => {} });
export const useEnquiry = () => useContext(EnquiryCtx);

const field = "mt-1.5 w-full rounded-lg border border-line bg-white px-4 py-3 text-[1rem] text-navy placeholder:text-slate-400 transition focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15 aria-[invalid=true]:border-red-500";

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [service, setService] = useState<Service | undefined>();
  const [session, setSession] = useState(0);
  const returnFocus = useRef<HTMLElement | null>(null);

  const open = useCallback((opts?: { service?: Service }) => {
    returnFocus.current = document.activeElement as HTMLElement | null;
    setService(opts?.service);
    setSession((n) => n + 1);
    setOpen(true);
  }, []);
  const close = useCallback(() => {
    setOpen(false);
    returnFocus.current?.focus?.();
  }, []);

  const value = useMemo(() => ({ open }), [open]);

  // Lets the static header/footer (plain HTML files) open this pop-up.
  useEffect(() => {
    (window as unknown as { __openEnquiry?: typeof open }).__openEnquiry = open;
    return () => { delete (window as unknown as { __openEnquiry?: typeof open }).__openEnquiry; };
  }, [open]);
  return (
    <EnquiryCtx.Provider value={value}>
      {children}
      <AnimatePresence>
        {isOpen && <Modal key={session} service={service} onClose={close} />}
      </AnimatePresence>
    </EnquiryCtx.Provider>
  );
}

function Modal({ service, onClose }: { service?: Service; onClose: () => void }) {
  const reduce = useReducedMotion();
  const panel = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "ok" | "fail">("idle");
  const [failMsg, setFailMsg] = useState("");
  const [token, setToken] = useState("");
  const [capKey, setCapKey] = useState(0);
  const [capErr, setCapErr] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<QuickEnquiryInput, unknown, QuickEnquiryData>({
    resolver: zodResolver(quickEnquirySchema),
    mode: "onTouched",
    defaultValues: { service },
  });
  const e = (k: keyof QuickEnquiryInput) => ({ "aria-invalid": errors[k] ? true : undefined, "aria-describedby": errors[k] ? `q-${k}-err` : undefined }) as const;

  // scroll lock, Esc, focus trap
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") { onClose(); return; }
      if (ev.key !== "Tab" || !panel.current) return;
      const f = panel.current.querySelectorAll<HTMLElement>('a[href],button:not([disabled]),input:not([tabindex="-1"]),select,textarea');
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (ev.shiftKey && document.activeElement === first) { ev.preventDefault(); last.focus(); }
      else if (!ev.shiftKey && document.activeElement === last) { ev.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = prev; document.removeEventListener("keydown", onKey); };
  }, [onClose]);

  async function onSubmit(data: QuickEnquiryData) {
    setState("idle");
    if (CAPTCHA_ENABLED && !token) { setCapErr(true); return; }
    setCapErr(false);
    try {
      const res = await fetch(SITE.enquiryEndpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, turnstileToken: token }) });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) { setState("ok"); return; }
      setFailMsg(json.message ?? "Something went wrong. Please try again.");
      setState("fail");
      setToken(""); setCapKey((k) => k + 1);
    } catch {
      setFailMsg("Network error. Please check your connection and try again.");
      setState("fail");
      setToken(""); setCapKey((k) => k + 1);
    }
  }

  return (
    <motion.div
      className="fixed inset-0 z-[90] grid place-items-end overflow-y-auto bg-navy/70 p-0 backdrop-blur-sm sm:place-items-center sm:p-6"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
      onMouseDown={(ev) => { if (ev.target === ev.currentTarget) onClose(); }}
    >
      <motion.div
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-title"
        initial={reduce ? false : { opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={reduce ? undefined : { opacity: 0, y: 30, scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative my-auto w-full max-w-xl overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
      >
        <div className="relative bg-gradient-to-r from-[#0b3fae] via-brand to-cyan px-6 py-6 text-white sm:px-8">
          <div aria-hidden className="absolute -right-10 -top-12 size-44 rounded-full bg-white/15 blur-2xl" />
          <h2 id="enquiry-title" className="relative !text-2xl !text-white">Discuss Your Project</h2>
          <p className="relative mt-1 text-[0.95rem] text-blue-50">Tell us what you need and our team will get back to you.</p>
          <button type="button" onClick={onClose} aria-label="Close" className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/30"><X className="size-5" /></button>
        </div>

        {state === "ok" ? (
          <div role="status" className="px-6 py-12 text-center sm:px-8">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 16 }}>
              <CheckCircle2 className="mx-auto size-16 text-emerald-500" aria-hidden />
            </motion.div>
            <h3 className="mt-4 !text-2xl">Thank you — enquiry received.</h3>
            <p className="mt-2">Our team will review your requirements and get back to you.</p>
            <button type="button" onClick={onClose} className="mt-6 inline-flex min-h-12 items-center rounded-lg bg-brand px-6 font-medium text-white transition hover:bg-brand-dark">Close</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} noValidate aria-busy={isSubmitting} className="space-y-4 px-6 py-6 sm:px-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="q-name" className="text-sm font-medium text-navy">Full Name <span className="text-red-600" aria-hidden>*</span></label>
                <input id="q-name" autoFocus autoComplete="name" className={field} {...e("name")} {...register("name")} />
                {errors.name && <p id="q-name-err" role="alert" className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="q-mobile" className="text-sm font-medium text-navy">Mobile Number <span className="text-red-600" aria-hidden>*</span></label>
                <input id="q-mobile" type="tel" inputMode="numeric" autoComplete="tel-national" maxLength={14} placeholder="10-digit mobile" className={field}
                  {...e("mobile")} {...register("mobile", { onChange: (ev) => { ev.target.value = ev.target.value.replace(/[^\d+\s-]/g, ""); } })} />
                {errors.mobile && <p id="q-mobile-err" role="alert" className="mt-1 text-sm text-red-600">{errors.mobile.message}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="q-email" className="text-sm font-medium text-navy">Email Address <span className="text-red-600" aria-hidden>*</span></label>
              <input id="q-email" type="email" autoComplete="email" className={field} {...e("email")} {...register("email")} />
              {errors.email && <p id="q-email-err" role="alert" className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="q-service" className="text-sm font-medium text-navy">Service Interested In <span className="text-red-600" aria-hidden>*</span></label>
              <select id="q-service" className={field} defaultValue={service ?? ""} {...e("service")} {...register("service")}>
                <option value="" disabled>Select a service</option>
                {SERVICE_OPTIONS.map((s) => <option key={s}>{s}</option>)}
              </select>
              {errors.service && <p id="q-service-err" role="alert" className="mt-1 text-sm text-red-600">{errors.service.message}</p>}
            </div>
            <div>
              <label htmlFor="q-requirements" className="text-sm font-medium text-navy">Your Query <span className="text-red-600" aria-hidden>*</span></label>
              <textarea id="q-requirements" rows={4} className={field} placeholder="Briefly describe your requirement." {...e("requirements")} {...register("requirements")} />
              {errors.requirements && <p id="q-requirements-err" role="alert" className="mt-1 text-sm text-red-600">{errors.requirements.message}</p>}
            </div>
            <div className="hidden" aria-hidden><label>Website<input tabIndex={-1} autoComplete="off" {...register("website")} /></label></div>
            <div>
              <label className="flex items-start gap-3 text-[0.93rem]">
                <input type="checkbox" className="mt-1 size-5 shrink-0 accent-[#2563eb]" {...e("consent")} {...register("consent")} />
                <span>I agree to the <Link prefetch={PREFETCH} href="/privacy-policy" onClick={onClose} className="font-medium text-brand underline">Privacy Policy</Link>. <span className="text-red-600" aria-hidden>*</span></span>
              </label>
              {errors.consent && <p id="q-consent-err" role="alert" className="mt-1 text-sm text-red-600">{errors.consent.message}</p>}
            </div>
            <div>
              <Captcha onToken={(t) => { setToken(t); if (t) setCapErr(false); }} resetKey={capKey} />
              {capErr && <p role="alert" className="mt-1.5 text-sm text-red-600">Please complete the verification above.</p>}
            </div>
            {state === "fail" && <p role="alert" className="flex items-start gap-2 rounded-lg bg-red-50 p-3 text-[0.95rem] text-red-700"><AlertCircle className="mt-0.5 size-5 shrink-0" aria-hidden />{failMsg}</p>}
            <button type="submit" disabled={isSubmitting} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand to-[#1d4ed8] px-6 py-3 font-medium text-white shadow-[0_8px_20px_-8px_rgb(37_99_235/0.7)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70">
              {isSubmitting ? <><Loader2 className="size-4 animate-spin" aria-hidden />Submitting…</> : "Submit Enquiry"}
            </button>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}
