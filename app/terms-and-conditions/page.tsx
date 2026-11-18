import { buildMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata = buildMetadata({
  title: "Terms and Conditions | Agranii",
  description: "Terms governing the use of the Agranii website.",
  path: "/terms-and-conditions",
});

export default function Page() {
  return (
    <LegalPage title="Terms and Conditions" path="/terms-and-conditions">
      <p>Last updated: [date to be confirmed]. By using agranii.in you agree to these terms.</p>
      <h2>Use of the website</h2>
      <p>The website provides information about AGRANII&apos;s services. You agree not to misuse it or attempt to disrupt its operation.</p>
      <h2>Information and services</h2>
      <p>Content is for general information. Descriptions of software and communication services are not binding offers. Any project is governed by a separate written agreement.</p>
      <h2>Third-party platforms</h2>
      <p>Communication services depend on third-party platforms and regulations (for example WhatsApp Business Platform policies, TRAI and DLT rules). Customers are responsible for lawful use, consent and content.</p>
      <h2>Intellectual property</h2>
      <p>Website content and branding belong to AGRANII unless stated otherwise.</p>
      <h2>Limitation of liability</h2>
      <p>To the extent permitted by law, AGRANII is not liable for indirect or consequential loss arising from use of this website. [Wording to be reviewed by legal counsel.]</p>
      <h2>Governing law</h2>
      <p>[Jurisdiction and governing law to be confirmed.]</p>
    </LegalPage>
  );
}
