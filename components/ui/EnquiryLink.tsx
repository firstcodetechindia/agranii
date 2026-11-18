"use client";
import Link from "next/link";
import type { ReactNode } from "react";
import { useEnquiry } from "@/components/providers/EnquiryModal";
import type { SERVICE_OPTIONS } from "@/lib/site";

/**
 * A normal link to /contact-us (works without JS and for crawlers) that opens the
 * quick-enquiry modal instead when JavaScript is available.
 */
export function EnquiryLink({
  children, className, service, onNavigate, href = "/contact-us",
}: {
  children: ReactNode; className?: string; href?: string;
  service?: (typeof SERVICE_OPTIONS)[number]; onNavigate?: () => void;
}) {
  const { open } = useEnquiry();
  return (
    <Link
      href={href}
      className={className}
      onClick={(ev) => {
        if (ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey || ev.button !== 0) return;
        ev.preventDefault();
        onNavigate?.();
        open({ service });
      }}
    >
      {children}
    </Link>
  );
}
