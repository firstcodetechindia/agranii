# AGRANII website

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Configure real company details
Copy `.env.example` to `.env.local` and fill in contact details, social profiles and
`ENQUIRY_WEBHOOK_URL`. Empty values render as clearly-marked "to be added" placeholders.
Until `ENQUIRY_WEBHOOK_URL` is set, `/api/contact` returns 503 and the form shows a failure message
(it never pretends delivery happened).

## Still needed from the company
Contact details, address/map, social links, legal entity details and legal review of
`/privacy-policy` and `/terms-and-conditions`, real photography (hero/industry visuals are
HTML/CSS interface mockups), Google Business Profile, and a logo if one exists.
