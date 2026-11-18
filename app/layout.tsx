import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { JsonLd } from "@/components/ui/JsonLd";
import { SITE } from "@/lib/site";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Agranii | Software Development & Business Communication Solutions",
    template: "%s",
  },
  description: SITE.description,
  applicationName: SITE.name,
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#2563EB",
  width: "device-width",
  initialScale: 1,
};

const orgLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    slogan: SITE.tagline,
    description: SITE.description,
    ...(SITE.contact.email ? { email: SITE.contact.email } : {}),
    ...(SITE.contact.phone ? { telephone: SITE.contact.phone } : {}),
    sameAs: Object.values(SITE.social).filter(Boolean),
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
  },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={roboto.variable}>
      <body suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: "if('scrollRestoration' in history)history.scrollRestoration='manual';if(!location.hash)window.scrollTo(0,0);" }} />
        <JsonLd data={orgLd} />
        <ScrollToTop />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
