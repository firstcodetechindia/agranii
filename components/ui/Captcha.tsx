"use client";
import { useEffect, useRef } from "react";
import { SITE } from "@/lib/site";

type Turnstile = {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string;
  reset: (id?: string) => void;
  remove: (id?: string) => void;
};
declare global { interface Window { turnstile?: Turnstile } }

export const CAPTCHA_ENABLED = Boolean(SITE.turnstileSiteKey);
const SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

function loadScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.turnstile) return resolve();
    let s = document.querySelector<HTMLScriptElement>(`script[src^="https://challenges.cloudflare.com/turnstile"]`);
    if (!s) {
      s = document.createElement("script");
      s.src = SRC; s.async = true; s.defer = true;
      document.head.appendChild(s);
    }
    s.addEventListener("load", () => resolve());
    s.addEventListener("error", () => reject(new Error("captcha script failed")));
  });
}

/**
 * Cloudflare Turnstile widget (free, no puzzles for most visitors). Renders nothing when no site key is configured.
 * `resetKey` changes -> a fresh token is requested (tokens are single-use).
 */
export function Captcha({ onToken, resetKey = 0 }: { onToken: (token: string) => void; resetKey?: number }) {
  const box = useRef<HTMLDivElement>(null);
  const id = useRef<string>("");
  const cb = useRef(onToken);
  useEffect(() => { cb.current = onToken; });

  useEffect(() => {
    if (!CAPTCHA_ENABLED || !box.current) return;
    let alive = true;
    loadScript().then(() => {
      if (!alive || !box.current || !window.turnstile) return;
      id.current = window.turnstile.render(box.current, {
        sitekey: SITE.turnstileSiteKey,
        callback: (t: string) => cb.current(t),
        "expired-callback": () => cb.current(""),
        "error-callback": () => cb.current(""),
      });
    }).catch(() => cb.current(""));
    return () => { alive = false; if (id.current) window.turnstile?.remove(id.current); id.current = ""; };
  }, []);

  useEffect(() => {
    if (resetKey && id.current) window.turnstile?.reset(id.current);
  }, [resetKey]);

  if (!CAPTCHA_ENABLED) return null;
  return <div ref={box} className="min-h-[65px]" aria-label="Verification" />;
}
