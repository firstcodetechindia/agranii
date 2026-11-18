import type { ReactNode } from "react";

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  light = false,
  as: Tag = "h2",
}: {
  label?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  as?: "h1" | "h2";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {label && (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-[0.14em] ${
            light ? "text-cyan-200" : "text-brand"
          }`}
        >
          {label}
        </p>
      )}
      <Tag className={light ? "!text-white" : ""}>{title}</Tag>
      {description && (
        <p className={`mt-4 text-lg ${light ? "text-blue-50/90" : ""}`}>{description}</p>
      )}
    </div>
  );
}
