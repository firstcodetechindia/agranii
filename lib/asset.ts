/** In the static (cPanel / double-click) build, public files are referenced relatively so pages work from any folder. */
export const asset = (p: string) => (process.env.NEXT_PUBLIC_STATIC === "1" ? p.replace(/^\//, "") : p);

/** Normal (Vercel) build keeps Next.js link prefetching; the static HTML build turns it off. */
export const PREFETCH = process.env.NEXT_PUBLIC_STATIC === "1" ? false : undefined;
