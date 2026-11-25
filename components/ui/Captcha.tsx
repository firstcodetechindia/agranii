"use client";
import { useEffect, useRef, useState } from "react";
import { RefreshCw, ShieldCheck } from "lucide-react";
import { SITE } from "@/lib/site";

export const CAPTCHA_ENABLED = true;

type Challenge = { question: string; token: string };

/**
 * Simple maths captcha. Asks the server for a signed question, and reports "<token>~<answer>" via onToken
 * once the visitor has typed an answer ("" until then). `resetKey` changes -> fetch a fresh question.
 */
export function Captcha({ onToken }: { onToken: (value: string) => void }) {
  const [ch, setCh] = useState<Challenge | null>(null);
  const [answer, setAnswer] = useState("");
  const [failed, setFailed] = useState(false);
  const [nonce, setNonce] = useState(0);
  const report = useRef(onToken);
  useEffect(() => { report.current = onToken; });

  useEffect(() => {
    let alive = true;
    const sep = SITE.enquiryEndpoint.includes("?") ? "&" : "?";
    fetch(`${SITE.enquiryEndpoint}${sep}captcha=1`, { cache: "no-store" })
      .then((r) => r.json().then((j: Challenge) => ({ ok: r.ok, j })))
      .then(({ ok, j }) => {
        if (!alive) return;
        if (!ok || !j.question || !j.token) throw new Error("bad");
        setCh(j);
      })
      .catch(() => { if (alive) setFailed(true); });
    return () => { alive = false; };
  }, [nonce]);

  function refresh() {
    setCh(null); setAnswer(""); setFailed(false); report.current("");
    setNonce((n) => n + 1);
  }

  function change(v: string) {
    const clean = v.replace(/[^\d-]/g, "").slice(0, 3);
    setAnswer(clean);
    report.current(ch && clean ? `${ch.token}~${clean}` : "");
  }

  return (
    <div className="rounded-xl border-2 border-slate-300 bg-slate-50 p-4">
      <div className="flex items-center gap-2 text-sm font-semibold text-navy">
        <ShieldCheck className="size-4 text-brand" aria-hidden />Quick check: are you human?
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <label htmlFor="captcha-answer" className="min-w-[8.5rem] text-lg font-semibold text-navy">
          {failed ? "Could not load the question" : ch ? ch.question : "Loading…"}
        </label>
        <input
          id="captcha-answer"
          inputMode="numeric"
          autoComplete="off"
          value={answer}
          onChange={(e) => change(e.target.value)}
          disabled={!ch}
          placeholder="Answer"
          className="h-12 w-28 rounded-lg border-2 border-slate-300 bg-white px-3 text-center text-lg font-semibold text-navy placeholder:font-normal placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15 disabled:opacity-60"
        />
        <button type="button" onClick={refresh} aria-label="Get a new question" className="grid size-11 place-items-center rounded-lg border-2 border-slate-300 bg-white text-slate-600 transition hover:border-brand hover:text-brand">
          <RefreshCw className="size-4" aria-hidden />
        </button>
      </div>
    </div>
  );
}
