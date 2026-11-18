"use client";
import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

/** Always start at the top: on reload and on route changes. */
export function ScrollToTop() {
  const pathname = usePathname();
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  }, []);
  useLayoutEffect(() => {
    if (window.location.hash) return; // in-page anchors keep working
    const root = document.documentElement;
    const prev = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    root.style.scrollBehavior = prev;
    // Next.js may adjust scroll after commit; reassert once the frame settles.
    const id = requestAnimationFrame(() => requestAnimationFrame(() => {
      if (!window.location.hash) window.scrollTo(0, 0);
    }));
    return () => cancelAnimationFrame(id);
  }, [pathname]);
  return null;
}
