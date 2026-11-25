import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "./JsonLd";
import { breadcrumbLd } from "@/lib/seo";
import { PREFETCH } from "@/lib/asset";

export function Breadcrumbs({
  items,
  light = false,
}: {
  items: { name: string; path: string }[];
  light?: boolean;
}) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbLd(all)} />
      <nav aria-label="Breadcrumb" className="text-sm">
        <ol className="flex flex-wrap items-center gap-1.5">
          {all.map((it, i) => {
            const last = i === all.length - 1;
            return (
              <li key={it.path} className="flex items-center gap-1.5">
                {last ? (
                  <span
                    aria-current="page"
                    className={light ? "text-white" : "font-medium text-navy"}
                  >
                    {it.name}
                  </span>
                ) : (
                  <>
                    <Link prefetch={PREFETCH}
                      href={it.path}
                      className={light ? "text-blue-100 hover:text-white" : "hover:text-brand"}
                    >
                      {it.name}
                    </Link>
                    <ChevronRight className="size-3.5 opacity-60" aria-hidden />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
