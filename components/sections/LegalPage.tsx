import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export function LegalPage({ title, path, children }: { title: string; path: string; children: ReactNode }) {
  return (
    <div className="container-x pb-16 pt-[calc(var(--header-h)+32px)]">
      <Breadcrumbs items={[{ name: title, path }]} />
      <h1 className="mt-6">{title}</h1>
      <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
        <strong>Draft for legal review.</strong> This page is a professional draft. The legal entity name, registered address and jurisdiction details must be confirmed by AGRANII and reviewed by a qualified legal adviser before publication.
      </p>
      <div className="mt-8 max-w-3xl space-y-4 [&_h2]:mb-2 [&_h2]:mt-8 [&_h2]:!text-2xl [&_ul]:list-disc [&_ul]:pl-6">{children}</div>
    </div>
  );
}
