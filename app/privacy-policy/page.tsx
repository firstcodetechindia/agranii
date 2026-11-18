import { buildMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata = buildMetadata({
  title: "Privacy Policy | Agranii",
  description: "How Agranii collects, uses and protects information submitted through its website enquiry form.",
  path: "/privacy-policy",
});

export default function Page() {
  return (
    <LegalPage title="Privacy Policy" path="/privacy-policy">
      <p>Last updated: [date to be confirmed]. This policy explains how AGRANII (&quot;we&quot;, &quot;us&quot;) handles information collected through agranii.in.</p>
      <h2>Information we collect</h2>
      <ul><li>Details you submit through the enquiry form: name, organisation, email, mobile number, city, service of interest, budget and requirements.</li><li>Basic technical information such as browser type, which may be collected by hosting or analytics tools if enabled.</li></ul>
      <h2>How we use it</h2>
      <p>We use your information only to respond to your enquiry and to handle your business request. We do not sell your personal information.</p>
      <h2>Sharing</h2>
      <p>Your enquiry may be processed by service providers that help us operate the website and receive enquiries, under appropriate confidentiality. We may disclose information where required by law.</p>
      <h2>Retention and security</h2>
      <p>We keep enquiry information only as long as needed for the purposes above and apply reasonable safeguards. [Retention period to be confirmed.]</p>
      <h2>Your choices</h2>
      <p>You may ask us to access, correct or delete the information you submitted by contacting us at [contact email to be added].</p>
      <h2>Contact</h2>
      <p>[Registered entity name and address to be added by AGRANII.]</p>
    </LegalPage>
  );
}
