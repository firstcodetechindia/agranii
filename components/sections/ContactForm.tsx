"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import Link from "next/link";
import { enquirySchema, type EnquiryInput, type EnquiryData } from "@/lib/enquiry";
import { SERVICE_OPTIONS, SITE } from "@/lib/site";

const BUDGETS = ["Not sure yet", "Under ₹50,000", "₹50,000 – ₹2,00,000", "₹2,00,000 – ₹5,00,000", "Above ₹5,00,000"];
const input = "mt-1.5 w-full rounded-lg border border-line bg-white px-4 py-3 text-[1rem] text-navy placeholder:text-slate-400 transition focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15 aria-[invalid=true]:border-red-500";

function Field({ id, label, required, error, children }: { id: string; label: string; required?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-navy">{label}{required && <span className="text-red-600" aria-hidden> *</span>}</label>
      {children}
      {error && <p id={`${id}-err`} role="alert" className="mt-1.5 text-sm text-red-600">{error}</p>}
    </div>
  );
}

export function ContactForm() {
  const [state, setState] = useState<"idle" | "ok" | "fail">("idle");
  const [failMsg, setFailMsg] = useState("");
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<EnquiryInput, unknown, EnquiryData>({
    resolver: zodResolver(enquirySchema),
    mode: "onTouched",
    defaultValues: { service: undefined, consent: undefined },
  });

  const e = (k: keyof EnquiryInput) => ({ "aria-invalid": errors[k] ? true : undefined, "aria-describedby": errors[k] ? `${k}-err` : undefined } as const);

  async function onSubmit(data: EnquiryData) {
    setState("idle");
    try {
      const res = await fetch(SITE.enquiryEndpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) { setState("ok"); reset(); return; }
      setFailMsg(json.message ?? "Something went wrong.");
      setState("fail");
    } catch {
      setFailMsg("Network error. Please check your connection and try again.");
      setState("fail");
    }
  }

  if (state === "ok") {
    return (
      <div role="status" className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <CheckCircle2 className="mx-auto size-12 text-emerald-600" aria-hidden />
        <h3 className="mt-4 !text-2xl">Thank you — enquiry received.</h3>
        <p className="mt-2">Our team will review your requirements and get back to you.</p>
        <button type="button" onClick={() => setState("idle")} className="mt-5 font-medium text-brand underline-offset-4 hover:underline">Send another enquiry</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate aria-busy={isSubmitting} className="space-y-5 rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full Name" required error={errors.name?.message}>
          <input id="name" autoComplete="name" className={input} {...e("name")} {...register("name")} />
        </Field>
        <Field id="organisation" label="Business / Organisation Name" error={errors.organisation?.message}>
          <input id="organisation" autoComplete="organization" className={input} {...register("organisation")} />
        </Field>
        <Field id="email" label="Email Address" required error={errors.email?.message}>
          <input id="email" type="email" autoComplete="email" className={input} {...e("email")} {...register("email")} />
        </Field>
        <Field id="mobile" label="Mobile Number" required error={errors.mobile?.message}>
          <input id="mobile" type="tel" inputMode="numeric" autoComplete="tel-national" maxLength={14} placeholder="10-digit mobile" className={input}
            {...e("mobile")} {...register("mobile", { onChange: (ev) => { ev.target.value = ev.target.value.replace(/[^\d+\s-]/g, ""); } })} />
        </Field>
        <Field id="city" label="City" error={errors.city?.message}>
          <input id="city" autoComplete="address-level2" className={input} {...register("city")} />
        </Field>
        <Field id="service" label="Service Interested In" required error={errors.service?.message}>
          <select id="service" className={input} defaultValue="" {...e("service")} {...register("service")}>
            <option value="" disabled>Select a service</option>
            {SERVICE_OPTIONS.map((s) => <option key={s}>{s}</option>)}
          </select>
        </Field>
      </div>
      <Field id="budget" label="Project Budget (optional)" error={errors.budget?.message}>
        <select id="budget" className={input} defaultValue="" {...register("budget")}>
          <option value="">Prefer not to say</option>
          {BUDGETS.map((b) => <option key={b}>{b}</option>)}
        </select>
      </Field>
      <Field id="requirements" label="Project Requirements" required error={errors.requirements?.message}>
        <textarea id="requirements" rows={5} className={input} placeholder="Tell us what you want to build or achieve." {...e("requirements")} {...register("requirements")} />
      </Field>
      <div className="hidden" aria-hidden><label>Website<input tabIndex={-1} autoComplete="off" {...register("website")} /></label></div>
      <div>
        <label className="flex items-start gap-3 text-[0.95rem]">
          <input type="checkbox" className="mt-1 size-5 shrink-0 accent-[#2563eb]" {...e("consent")} {...register("consent")} />
          <span>I agree to the <Link href="/privacy-policy" className="font-medium text-brand underline">Privacy Policy</Link>. <span className="text-red-600" aria-hidden>*</span></span>
        </label>
        {errors.consent && <p id="consent-err" role="alert" className="mt-1.5 text-sm text-red-600">{errors.consent.message}</p>}
      </div>
      {state === "fail" && (
        <p role="alert" className="flex items-start gap-2 rounded-lg bg-red-50 p-3 text-[0.95rem] text-red-700"><AlertCircle className="mt-0.5 size-5 shrink-0" aria-hidden />{failMsg}</p>
      )}
      <button type="submit" disabled={isSubmitting} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand to-[#1d4ed8] px-6 py-3 font-medium text-white shadow-[0_8px_20px_-8px_rgb(37_99_235/0.7)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
        {isSubmitting ? <><Loader2 className="size-4 animate-spin" aria-hidden />Submitting…</> : "Submit Enquiry"}
      </button>
      <p className="text-sm">Your information will be used only to respond to your enquiry and handle your business request, in accordance with the <Link href="/privacy-policy" className="text-brand underline">Privacy Policy</Link>.</p>
    </form>
  );
}
