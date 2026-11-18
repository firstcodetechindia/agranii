"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MIN_MS = 800; // keep the animation visible long enough to read as intentional
const MAX_MS = 3500; // never block the site longer than this

/** Full-screen intro shown on first load / refresh only (client navigations don't remount it). */
export function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const start = performance.now();
    let t: ReturnType<typeof setTimeout>;
    const finish = () => {
      clearTimeout(t);
      t = setTimeout(() => setShow(false), Math.max(0, MIN_MS - (performance.now() - start)));
    };
    const cap = setTimeout(() => setShow(false), MAX_MS);
    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
    return () => { clearTimeout(t); clearTimeout(cap); window.removeEventListener("load", finish); };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          role="status"
          aria-label="Loading AGRANII"
          className="fixed inset-0 z-[100] grid place-items-center bg-white"
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
        >
          <div aria-hidden className="absolute inset-0 grid-bg opacity-60 [mask-image:radial-gradient(circle_at_center,black,transparent_65%)]" />
          <div className="relative flex flex-col items-center">
            <div className="relative grid size-32 place-items-center">
              <motion.span
                className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-brand border-r-cyan"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
              />
              <motion.span
                className="absolute inset-3 rounded-full bg-gradient-to-br from-brand/10 to-violet/10"
                animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.7, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <Image src="/brand/mark.webp" alt="" width={192} height={135} priority className="h-[58px] w-auto" />
              </motion.div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="mt-6 text-lg font-bold tracking-[0.32em] text-navy"
            >
              AGRANII
            </motion.p>
            <span className="mt-4 block h-1 w-40 overflow-hidden rounded-full bg-line">
              <motion.span
                className="block h-full w-full origin-left rounded-full bg-gradient-to-r from-brand via-cyan to-violet"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: MIN_MS / 1000 + 0.3, ease: "easeInOut" }}
              />
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
