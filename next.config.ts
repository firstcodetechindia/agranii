import type { NextConfig } from "next";

// `npm run build:static` sets STATIC_EXPORT=1 to emit plain HTML for shared hosting.
const staticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  ...(staticExport ? { output: "export" as const, distDir: ".next-static", assetPrefix: ".", images: { unoptimized: true } } : { images: { formats: ["image/avif", "image/webp"] } }),
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
