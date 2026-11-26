import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollTopButton } from "@/components/layout/ScrollTopButton";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { EnquiryProvider } from "@/components/providers/EnquiryModal";
import { Preloader } from "@/components/layout/Preloader";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { JsonLd } from "@/components/ui/JsonLd";
import { SITE } from "@/lib/site";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

// In the static (cPanel) build the header/footer are plain files (header.js / footer.js) next to the HTML pages.
const STATIC = process.env.NEXT_PUBLIC_STATIC === "1";

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
    logo: `${SITE.url}/brand/logo.png`,
    slogan: SITE.tagline,
    description: SITE.description,
    ...(SITE.contact.email ? { email: SITE.contact.email } : {}),
    ...(SITE.contact.phone ? { telephone: SITE.contact.phone } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: "84 Chetak Marg, Pratap Nagar",
      addressLocality: "Jaipur",
      postalCode: "302033",
      addressCountry: "IN",
    },
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
        <noscript><style>{'[aria-label="Loading AGRANII"]{display:none!important}'}</style></noscript>
        <Preloader />
        <ScrollToTop />
        <EnquiryProvider>
          {STATIC ? <div id="header-slot" dangerouslySetInnerHTML={{ __html: "" }} /> : <Header />}
          <main id="main">{children}</main>
          {STATIC ? <div id="footer-slot" dangerouslySetInnerHTML={{ __html: "" }} /> : <Footer />}
          <ScrollTopButton />
          <WhatsAppButton />
        </EnquiryProvider>
      </body>
    </html>
  );
}
