import { NextResponse } from "next/server";
import { enquirySchema } from "@/lib/enquiry";

/**
 * Enquiry endpoint. It validates server-side and forwards to ENQUIRY_WEBHOOK_URL.
 * If no webhook is configured it responds 503 — it never pretends delivery happened.
 */
export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }
  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, message: "Please check the form fields.", errors: parsed.error.flatten().fieldErrors }, { status: 422 });
  }
  if (parsed.data.website) return NextResponse.json({ ok: true }); // honeypot: silently drop

  const hook = process.env.ENQUIRY_WEBHOOK_URL;
  if (!hook) {
    return NextResponse.json({ ok: false, message: "Enquiry delivery is not configured yet." }, { status: 503 });
  }
  try {
    const { website: _w, consent: _c, ...payload } = parsed.data;
    void _w; void _c;
    const res = await fetch(hook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, source: "agranii.in", receivedAt: new Date().toISOString() }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) throw new Error(String(res.status));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, message: "We could not deliver your enquiry. Please try again." }, { status: 502 });
  }
}
