import { Button } from "@/components/ui/Button";

export const metadata = { title: "Page not found | Agranii", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-gradient-to-br from-[#0b1530] via-[#13245a] to-[#1d4ed8] pt-[var(--header-h)] text-center text-white">
      <div className="container-x">
        <p className="text-gradient text-7xl font-bold">404</p>
        <h1 className="mt-4 !text-3xl !text-white">This page could not be found.</h1>
        <p className="mx-auto mt-3 max-w-md text-blue-100">The page may have moved or the address may be mistyped.</p>
        <div className="mt-8 flex justify-center gap-3"><Button href="/">Back to Home</Button><Button href="/contact-us" variant="light">Contact Us</Button></div>
      </div>
    </section>
  );
}
