import type { MockupKind } from "@/components/visuals/Mockups";
import type { FaqItem } from "@/components/ui/Faq";
import type { PhotoKey } from "./photos";

export type Detail = {
  id: string;
  heading: string;
  description: string;
  features: string[];
  benefits?: string[];
  cta: { label: string; href: string };
  more?: string;
  kind: MockupKind;
  grad: string;
  note?: string;
  landing: string;
  photo?: PhotoKey;
};

export const SOFTWARE_DETAILS: Detail[] = [
  {
    id: "hospital", heading: "Hospital Management Software in Jaipur, India.",
    description: "Manage hospital operations through an integrated digital platform designed to simplify patient management, administrative workflows and day-to-day healthcare operations.",
    features: ["Patient Registration", "OPD Management", "IPD Management", "Appointment Scheduling", "Doctor Management", "Patient Medical Records", "Pharmacy Management", "Laboratory Management", "Billing and Invoicing", "Inventory Management", "Staff Management", "Reports and Analytics"],
    benefits: ["Organised patient records.", "Simplified administrative workflows.", "Better coordination between departments.", "Improved billing management.", "Centralised operational information."],
    cta: { label: "Enquire About Hospital Software", href: "/contact-us" }, kind: "hospital", grad: "from-cyan/70 to-brand", landing: "/hospital-management-software-jaipur", photo: "doctor",
  },
  {
    id: "jewellery", heading: "Jewellery Software in Jaipur, India.",
    description: "Manage jewellery business operations with software designed for inventory tracking, metal calculations, manufacturing, sales and accounting.",
    features: ["Gold and Silver Inventory", "Purity and Karat Management", "Weight Management", "Gross and Net Weight Calculation", "Stone Weight Management", "Wastage Calculation", "Making Charges", "Metal Rate Management", "Purchase Management", "Sales and Billing", "Barcode Management", "Manufacturing and Job Work", "Customer Management", "Supplier Management", "Accounting and Reports"],
    cta: { label: "Discuss Jewellery Software", href: "/contact-us" }, kind: "jewellery", grad: "from-amber-400 to-orange-600", landing: "/jewellery-software-jaipur", photo: "jewellery",
  },
  {
    id: "employee", heading: "Employee Management Software for Modern Businesses.",
    description: "Manage employee information and HR processes through a centralised employee management platform.",
    features: ["Employee Profiles", "Department Management", "Designation Management", "Attendance Management", "Shift Management", "Leave Management", "Payroll Management", "Salary Structure", "Employee Documents", "Performance Tracking", "Reports and Analytics", "Role-Based Access"],
    cta: { label: "Enquire About Employee Software", href: "/contact-us" }, kind: "hr", grad: "from-violet to-brand", landing: "/employee-management-software", photo: "hr",
  },
  {
    id: "hotel", heading: "Hotel Management Software in Jaipur, India.",
    description: "Simplify hotel operations with a digital property management system that helps manage room availability, reservations, guest information, billing and housekeeping.",
    features: ["Reservation Management", "Front Desk Management", "Check-In and Check-Out", "Room Inventory", "Room Availability", "Guest Profiles", "Housekeeping Management", "Billing and Invoicing", "Restaurant / POS Integration", "Rate Management", "Staff Management", "Occupancy Reports", "Revenue Reports"],
    cta: { label: "Discuss Hotel Management Software", href: "/contact-us" }, kind: "hotel", grad: "from-brand to-violet", landing: "/hotel-management-software-jaipur", photo: "hotel",
  },
];

export const COMM_DETAILS: Detail[] = [
  {
    id: "whatsapp", heading: "Bulk WhatsApp Business Messaging Service.",
    description: "Connect with customers using WhatsApp Business Platform solutions for business notifications, customer updates and approved messaging campaigns.",
    features: ["WhatsApp Business Platform Integration", "Approved Message Templates", "Transactional Notifications", "Customer Updates", "Appointment Reminders", "Order Notifications", "Template Management", "Delivery Status", "Campaign Reporting", "Configurable API Integration"],
    note: "Messaging runs through the official WhatsApp Business Platform. Business-initiated messages must use templates approved by WhatsApp, and customers must have opted in to receive them. Approval is decided by WhatsApp, not by AGRANII.",
    cta: { label: "Discuss WhatsApp Messaging", href: "/contact-us" }, kind: "comms", grad: "from-emerald-500 to-cyan", landing: "/bulk-whatsapp-service-jaipur",
  },
  {
    id: "sms", heading: "Bulk SMS Service in Jaipur, India.",
    description: "Send business notifications and customer messages through SMS communication solutions.",
    features: ["Promotional SMS", "Transactional SMS", "OTP SMS", "Service Notifications", "Appointment Reminders", "Order Updates", "Delivery Reports", "API Integration", "Sender ID and DLT Configuration Support"],
    note: "Commercial SMS in India must follow applicable TRAI regulations and DLT requirements, including registered entity, sender IDs and content templates. We help you configure these; registration itself is completed with your chosen operator.",
    cta: { label: "Discuss SMS Services", href: "/contact-us" }, kind: "comms", grad: "from-brand to-cyan", landing: "/bulk-sms-service-jaipur",
  },
  {
    id: "voice", heading: "Bulk Voice Call Services for Businesses.",
    description: "Automate customer communication through voice messages, automated announcements and IVR-based workflows.",
    features: ["Automated Voice Calls", "Recorded Announcements", "Appointment Reminders", "Event Notifications", "Customer Alerts", "IVR Solutions", "Call Reports", "Configurable API Integration"],
    cta: { label: "Discuss Voice Services", href: "/contact-us" }, kind: "comms", grad: "from-violet to-brand", landing: "/bulk-voice-call-service", photo: "comms",
  },
  {
    id: "email", heading: "Bulk Email Services for Business Communication.",
    description: "Communicate with customers through structured email campaigns, newsletters and business notifications.",
    features: ["Email Campaign Management", "Newsletter Distribution", "Transactional Email", "Customer Notifications", "Email Templates", "Campaign Reporting", "Delivery Monitoring", "API Integration", "Authentication Configuration"],
    note: "Reliable inbox delivery depends on proper sender authentication. We help configure SPF, DKIM and DMARC for your sending domain where applicable.",
    cta: { label: "Discuss Email Services", href: "/contact-us" }, kind: "comms", grad: "from-amber-500 to-violet", landing: "/bulk-email-service",
  },
];

export const SOFTWARE_FAQS: FaqItem[] = [
  { q: "Can the hospital software be limited to the modules we need?", a: "Yes. We scope the modules to your hospital, for example starting with OPD, billing and pharmacy, and adding laboratory or IPD later." },
  { q: "Does the hospital software handle patient records securely?", a: "Patient data is sensitive. We use role-based access and follow secure development practices, and we discuss your specific privacy and compliance requirements during planning." },
  { q: "How are jewellery weight and wastage calculations handled?", a: "Gross weight, stone weight, net metal weight, purity, wastage and making charges are configurable so the software follows your accounting and jewellery practices." },
  { q: "Can jewellery software support barcode tagging and job work?", a: "Yes. Barcode management, manufacturing and job-work tracking can be included alongside purchase, sales and accounting." },
  { q: "Can employee management software handle payroll for our structure?", a: "Salary structures, attendance and leave rules are configurable, so payroll can be set up according to your organisation's policies." },
  { q: "Does the hotel software integrate with a restaurant or POS?", a: "Restaurant and POS integration can be included, so guest charges flow into a single folio and billing." },
  { q: "How long does a custom project take?", a: "It depends on scope. After understanding your requirements we share a plan and timeline for your approval before development begins." },
  { q: "Can you add features after launch?", a: "Yes. Ongoing improvement is part of how we work, and new modules can be added as your needs evolve." },
];

export const COMM_FAQS: FaqItem[] = [
  { q: "Do I need approval to send WhatsApp messages?", a: "Business-initiated WhatsApp messages use templates that must be approved by WhatsApp, and recipients must have opted in. We help you prepare and submit templates." },
  { q: "What is DLT and why does it matter for bulk SMS?", a: "In India, commercial SMS must follow TRAI rules, which require registering your entity, sender IDs and message templates on the operator DLT platform. Without it, messages may be blocked." },
  { q: "Can I send OTP messages through your SMS service?", a: "Yes, OTP and other transactional messages are supported, subject to DLT template registration." },
  { q: "What can I use bulk voice calls for?", a: "Typical uses include appointment and payment reminders, event announcements, customer alerts and IVR-based workflows." },
  { q: "How do you help emails reach the inbox?", a: "We help configure SPF, DKIM and DMARC authentication and provide delivery monitoring. Inbox placement also depends on your list quality and content." },
  { q: "Can these services integrate with my own software?", a: "Yes. Configurable API integration is available so your application can trigger messages and read delivery reports." },
];

/* ---------- Supporting SEO landing pages ---------- */
export type Landing = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  crumb: string;
  serviceName: string;
  kind: MockupKind;
  theme: "blue" | "cyan" | "violet" | "amber" | "teal";
  enquiry: string;
  intro: string[];
  groupsTitle: string;
  groups: { title: string; items: string[] }[];
  audienceTitle: string;
  audience: string[];
  compliance?: string;
  faqs: FaqItem[];
  related: { label: string; href: string }[];
  photo?: PhotoKey;
  /** undefined: derived from slug; null: no parent breadcrumb */
  parent?: { name: string; path: string } | null;
};

export const LANDINGS: Landing[] = [
  {
    slug: "manufacturing-software", photo: "dev",
    metaTitle: "Manufacturing Software Development | Agranii",
    metaDescription: "Custom manufacturing software from Agranii covering production planning, inventory, purchase, sales, job work and reports. Built around your plant's workflow.",
    h1: "Manufacturing Software Built Around Your Production Floor.",
    lead: "Connect purchase, stock, production and dispatch in one system scoped to how your unit actually works.",
    crumb: "Manufacturing Software", serviceName: "Manufacturing Software", kind: "software", theme: "violet", enquiry: "Discuss Manufacturing Software",
    intro: [
      "Manufacturing depends on knowing what is in stock, what is in production and what is ready to dispatch. When these live in separate registers or spreadsheets, planning turns into guesswork.",
      "AGRANII develops manufacturing software tailored to your process. We study your workflow first, then configure modules for materials, production, job work and billing so information flows between departments.",
    ],
    groupsTitle: "Modules we can include",
    groups: [
      { title: "Materials", items: ["Raw material inventory", "Purchase management", "Supplier records", "Stock alerts"] },
      { title: "Production", items: ["Production planning", "Job work tracking", "Work orders", "Finished goods stock"] },
      { title: "Sales and reporting", items: ["Sales and invoicing", "Dispatch tracking", "Reports and analytics", "Role-based access"] },
    ],
    audienceTitle: "Who it suits",
    audience: ["Small and mid-sized manufacturing units", "Businesses relying on job work", "Teams moving from spreadsheets to one system", "Units that need custom reports"],
    faqs: [
      { q: "Can the software be limited to the modules we need?", a: "Yes. We can start with inventory and purchase and add production or dispatch in later phases." },
      { q: "Can it match our existing process?", a: "Yes. The software is developed after understanding your workflow, rather than forcing a fixed template." },
      { q: "Do you work with businesses outside Jaipur?", a: "Yes. We are Jaipur-based and work with businesses across India." },
    ],
    related: [{ label: "Employee Management Software", href: "/employee-management-software" }, { label: "Jewellery Software", href: "/jewellery-software-jaipur" }, { label: "All custom software", href: "/custom-software" }],
  },
  {
    slug: "school-software", photo: "team",
    metaTitle: "School Management Software | Agranii",
    metaDescription: "School management software from Agranii for admissions, attendance, fees, timetables, exams and parent communication. Tailored to your institution.",
    h1: "School Software That Keeps Admissions, Fees and Classes in Order.",
    lead: "One platform for administration, teachers and parents, configured for your school's way of working.",
    crumb: "School Software", serviceName: "School Management Software", kind: "software", theme: "blue", enquiry: "Discuss School Software",
    intro: [
      "Schools handle admissions, attendance, fee collection, timetables, examinations and parent communication, often across separate registers and tools.",
      "AGRANII builds school software that brings these together, so staff spend less time on paperwork and parents get timely information. Modules are scoped to the size and structure of your institution.",
    ],
    groupsTitle: "Modules we can include",
    groups: [
      { title: "Students", items: ["Admissions", "Student records", "Attendance", "Timetables"] },
      { title: "Academics", items: ["Exams and results", "Report cards", "Class and subject management", "Teacher records"] },
      { title: "Administration", items: ["Fee management", "Parent communication", "Reports and analytics", "Role-based access"] },
    ],
    audienceTitle: "Who it suits",
    audience: ["Schools and coaching institutes", "Institutions moving from paper registers", "Administrators who want fee and attendance visibility", "Schools wanting parent messaging"],
    faqs: [
      { q: "Can parents be notified automatically?", a: "Yes. Notifications can be connected to our SMS and WhatsApp services where required." },
      { q: "Can we start with fees and attendance only?", a: "Yes. Modules can be phased in as your needs grow." },
      { q: "Do you work with schools outside Jaipur?", a: "Yes. We are Jaipur-based and work across India." },
    ],
    related: [{ label: "Bulk SMS Service", href: "/bulk-sms-service-jaipur" }, { label: "Bulk WhatsApp Service", href: "/bulk-whatsapp-service-jaipur" }, { label: "All custom software", href: "/custom-software" }],
  },
  {
    slug: "website-design-service", photo: "dev", parent: null,
    metaTitle: "Website Design Service in Jaipur | Agranii",
    metaDescription: "Website design service from Agranii: thoughtful, modern, responsive websites for businesses, designed with care for how they look and perform.",
    h1: "Website Design by People Who Understand the Art of Web Design.",
    lead: "Get your website designed by an artist who understands the art of web design.",
    crumb: "Website Design Service", serviceName: "Website Design Service", kind: "software", theme: "teal", enquiry: "Discuss Website Design",
    intro: [
      "Your website is often the first impression a customer has of your business. It should look right, load quickly and make the next step obvious.",
      "AGRANII designs websites with care for layout, typography and clarity, and builds them to work well on phones, tablets and desktops. We begin by understanding your business and audience, then share a plan for your approval.",
    ],
    groupsTitle: "What we can cover",
    groups: [
      { title: "Design", items: ["Custom visual design", "Responsive layouts", "Brand-consistent styling"] },
      { title: "Build", items: ["Fast-loading pages", "Contact and enquiry forms", "Search-friendly structure"] },
      { title: "Beyond launch", items: ["Content updates", "Improvements over time", "Integration with your software"] },
    ],
    audienceTitle: "Who it suits",
    audience: ["Businesses launching their first website", "Companies refreshing an outdated site", "Teams that want a site tied to their software", "Anyone who wants design done with care"],
    faqs: [
      { q: "Will the website work on mobile phones?", a: "Yes. Every website is designed to be responsive across screen sizes." },
      { q: "Can you redesign our existing website?", a: "Yes. We can refresh the design and structure while keeping what already works." },
      { q: "Can the website connect to our software?", a: "Yes. Forms and data can be integrated with your business software where needed." },
    ],
    related: [{ label: "Custom Software", href: "/custom-software" }, { label: "Bulk WhatsApp Service", href: "/bulk-whatsapp-service-jaipur" }, { label: "Contact us", href: "/contact-us" }],
  },
  {
    slug: "hospital-management-software-jaipur", photo: "doctor",
    metaTitle: "Hospital Management Software in Jaipur | Agranii",
    metaDescription: "Hospital management software from Agranii covering OPD, IPD, appointments, pharmacy, laboratory and billing. Tailored for hospitals and clinics in Jaipur and across India.",
    h1: "Hospital Management Software in Jaipur, Built Around How Your Hospital Works.",
    lead: "An integrated platform for patient care, administration and billing, scoped to your hospital's departments and workflows.",
    crumb: "Hospital Management Software", serviceName: "Hospital Management Software", kind: "hospital", theme: "cyan", enquiry: "Enquire About Hospital Software",
    intro: [
      "Hospitals run on coordination: reception, doctors, nursing, pharmacy, laboratory and accounts all depend on the same patient information at the right moment. When these functions use separate registers or disconnected tools, delays and duplicate data entry follow.",
      "AGRANII develops hospital management software that brings these functions together. We study your existing flow first, then configure modules so that registration, consultation, diagnostics, dispensing and billing connect naturally.",
    ],
    groupsTitle: "Modules we can include",
    groups: [
      { title: "Patient care", items: ["Patient registration", "OPD management", "IPD and bed management", "Appointment scheduling", "Patient medical records"] },
      { title: "Clinical support", items: ["Laboratory management", "Pharmacy management", "Doctor management", "Inventory management"] },
      { title: "Administration", items: ["Billing and invoicing", "Staff management", "Reports and analytics", "Role-based access"] },
    ],
    audienceTitle: "Who it suits",
    audience: ["Single-specialty and multi-specialty hospitals", "Nursing homes and clinics", "Diagnostic and pathology centres", "Hospitals moving from paper registers to digital records"],
    faqs: [
      { q: "Can you build only the modules our hospital needs?", a: "Yes. We can begin with core modules such as registration, OPD and billing and add pharmacy, laboratory or IPD in later phases." },
      { q: "Is the software suitable for a small clinic?", a: "Yes. The scope is adjusted to the size of the facility, from a single clinic to a larger hospital." },
      { q: "Do you work with hospitals outside Jaipur?", a: "Yes. We are Jaipur-based and work with healthcare organisations across India." },
      { q: "How are patient privacy concerns handled?", a: "We use role-based access and secure development practices, and discuss your privacy requirements during planning." },
    ],
    related: [{ label: "Employee Management Software", href: "/employee-management-software" }, { label: "Bulk WhatsApp for appointment reminders", href: "/bulk-whatsapp-service-jaipur" }, { label: "All custom software", href: "/custom-software" }],
  },
  {
    slug: "jewellery-software-jaipur", photo: "jewellery",
    metaTitle: "Jewellery Software in Jaipur | Agranii",
    metaDescription: "Jewellery management software from Agranii: gold and silver inventory, purity, wastage, making charges, barcode billing and job work. Built for jewellers in Jaipur and India.",
    h1: "Jewellery Software in Jaipur for Metal, Stone and Making Charges.",
    lead: "Software that understands weights, purity, wastage and job work, so your stock, billing and accounts stay accurate.",
    crumb: "Jewellery Software", serviceName: "Jewellery Management Software", kind: "jewellery", theme: "amber", enquiry: "Discuss Jewellery Software",
    intro: [
      "Jewellery is calculated differently from ordinary retail. Value depends on gross and net weight, purity, stone weight, wastage and making charges, and metal rates change through the day. Generic billing software rarely handles this well.",
      "AGRANII builds jewellery software around these realities, from raw metal and karigar job work to tagged stock and customer billing. Calculation rules are configurable so they match how your business already works.",
    ],
    groupsTitle: "What the software covers",
    groups: [
      { title: "Stock and metal", items: ["Gold and silver inventory", "Purity and karat management", "Gross, stone and net weight", "Metal rate management"] },
      { title: "Production", items: ["Manufacturing and job work", "Wastage calculation", "Supplier management"] },
      { title: "Sales and accounts", items: ["Making charges", "Barcode management", "Sales and billing", "Purchase management", "Accounting and reports"] },
    ],
    audienceTitle: "Who it suits",
    audience: ["Jewellery retailers and showrooms", "Manufacturers and wholesalers", "Workshops managing karigar job work", "Silver and gold trading businesses"],
    faqs: [
      { q: "Can calculations follow our own wastage and making-charge rules?", a: "Yes. Wastage and making charges are configurable per business, for example by percentage, per gram or fixed amount." },
      { q: "Does it support barcode tags?", a: "Yes. Barcode management can be included for tagged stock and faster billing." },
      { q: "Can I manage job work with karigars?", a: "Yes. Issue and receipt of metal, wastage and labour can be tracked as part of manufacturing and job work." },
      { q: "Is this available outside Jaipur?", a: "Yes. We build for jewellers across India." },
    ],
    related: [{ label: "Hotel Management Software", href: "/hotel-management-software-jaipur" }, { label: "Bulk SMS for customer offers", href: "/bulk-sms-service-jaipur" }, { label: "All custom software", href: "/custom-software" }],
  },
  {
    slug: "employee-management-software", photo: "hr",
    metaTitle: "Employee Management Software for Businesses | Agranii",
    metaDescription: "Employee management software from Agranii for attendance, leave, shifts, payroll and employee records. Configured to your HR policies.",
    h1: "Employee Management Software That Fits Your HR Policies.",
    lead: "One place for employee records, attendance, leave and payroll, with access controlled by role.",
    crumb: "Employee Management Software", serviceName: "Employee Management Software", kind: "hr", theme: "violet", enquiry: "Enquire About Employee Software",
    intro: [
      "As a team grows, spreadsheets for attendance, leave and salary become hard to trust. Corrections pile up at month end and records are scattered across files and messages.",
      "AGRANII develops employee management software that centralises these records. Attendance, shifts, leave and salary structures follow your organisation's own policies rather than a fixed template.",
    ],
    groupsTitle: "What you can manage",
    groups: [
      { title: "People records", items: ["Employee profiles", "Department and designation management", "Employee documents"] },
      { title: "Time and leave", items: ["Attendance management", "Shift management", "Leave management"] },
      { title: "Pay and performance", items: ["Payroll management", "Salary structure", "Performance tracking", "Reports and analytics", "Role-based access"] },
    ],
    audienceTitle: "Who it suits",
    audience: ["Growing small and medium businesses", "Hospitals, hotels and retail chains with shift staff", "Institutions managing teaching and non-teaching staff", "Companies replacing spreadsheet-based HR"],
    faqs: [
      { q: "Can payroll follow our salary structure?", a: "Yes. Salary components and rules are configured to your policies." },
      { q: "Can managers see only their own team?", a: "Yes. Role-based access limits what each user can view or change." },
      { q: "Can it handle shift-based staff?", a: "Yes. Shift management is available alongside attendance and leave." },
      { q: "Can it connect to other software?", a: "Integration with other systems can be scoped during requirement discovery." },
    ],
    related: [{ label: "Hospital Management Software", href: "/hospital-management-software-jaipur" }, { label: "Hotel Management Software", href: "/hotel-management-software-jaipur" }, { label: "All custom software", href: "/custom-software" }],
  },
  {
    slug: "hotel-management-software-jaipur", photo: "hotel",
    metaTitle: "Hotel Management Software in Jaipur | Agranii",
    metaDescription: "Hotel management software from Agranii: reservations, front desk, room inventory, housekeeping and billing. For hotels and guest houses in Jaipur and India.",
    h1: "Hotel Management Software in Jaipur for Reservations to Checkout.",
    lead: "A property management system that keeps rooms, guests, housekeeping and billing in step.",
    crumb: "Hotel Management Software", serviceName: "Hotel Management Software", kind: "hotel", theme: "teal", enquiry: "Discuss Hotel Management Software",
    intro: [
      "A hotel's front desk, housekeeping and billing all depend on one question: which rooms are available, occupied or being cleaned right now. When that picture is out of date, guests wait and revenue is missed.",
      "AGRANII builds hotel management software that keeps room status, reservations and guest folios in a single system, with room and rate rules set up for your property.",
    ],
    groupsTitle: "Operations covered",
    groups: [
      { title: "Front desk", items: ["Reservation management", "Check-in and check-out", "Guest profiles"] },
      { title: "Rooms", items: ["Room inventory and availability", "Housekeeping management", "Rate management"] },
      { title: "Revenue", items: ["Billing and invoicing", "Restaurant / POS integration", "Occupancy and revenue reports", "Staff management"] },
    ],
    audienceTitle: "Who it suits",
    audience: ["Independent hotels and heritage properties", "Guest houses and boutique stays", "Resorts with restaurant operations", "Properties moving off manual registers"],
    faqs: [
      { q: "Does it work for a small guest house?", a: "Yes. Modules are scoped to the size of the property." },
      { q: "Can restaurant charges post to the room bill?", a: "Restaurant or POS integration can be included so charges appear on the guest folio." },
      { q: "Can I set different rates for seasons?", a: "Rate management is part of the system and can reflect your tariff structure." },
      { q: "Do you serve hotels outside Jaipur?", a: "Yes, we work with hospitality businesses across India." },
    ],
    related: [{ label: "Employee Management Software", href: "/employee-management-software" }, { label: "Bulk WhatsApp for guest updates", href: "/bulk-whatsapp-service-jaipur" }, { label: "All custom software", href: "/custom-software" }],
  },
  {
    slug: "bulk-whatsapp-service-jaipur",
    metaTitle: "Bulk WhatsApp Service in Jaipur | Agranii",
    metaDescription: "Bulk WhatsApp business messaging through the WhatsApp Business Platform: approved templates, notifications, reminders and delivery reports. Agranii, Jaipur.",
    h1: "Bulk WhatsApp Service in Jaipur on the Official Business Platform.",
    lead: "Notifications, reminders and approved campaigns delivered where your customers already chat.",
    crumb: "Bulk WhatsApp Service", serviceName: "Bulk WhatsApp Business Messaging", kind: "comms", theme: "cyan", enquiry: "Discuss WhatsApp Messaging",
    intro: [
      "WhatsApp is the messaging app most customers check first, which makes it effective for confirmations, reminders and updates. It is also strictly governed: business messaging must go through the WhatsApp Business Platform.",
      "AGRANII helps you set up and use the platform properly, from template preparation to API integration and reporting, so your messages are compliant and reach customers reliably.",
    ],
    groupsTitle: "What is included",
    groups: [
      { title: "Setup", items: ["WhatsApp Business Platform integration", "Approved message templates", "Template management"] },
      { title: "Messaging", items: ["Transactional notifications", "Appointment reminders", "Order notifications", "Customer updates"] },
      { title: "Insight", items: ["Delivery status", "Campaign reporting", "Configurable API integration"] },
    ],
    audienceTitle: "Common use cases",
    audience: ["Appointment reminders for clinics", "Booking confirmations for hotels", "Order and delivery updates for retail", "Fee and event notices for institutions"],
    compliance: "Business-initiated WhatsApp messages require templates approved by WhatsApp and customer opt-in. Approval decisions and pricing are set by WhatsApp. AGRANII does not offer unsolicited spam messaging.",
    faqs: [
      { q: "Can I send any message to any number?", a: "No. Customers must opt in, and business-initiated messages must use approved templates." },
      { q: "How long does template approval take?", a: "It is decided by WhatsApp and varies. We help prepare templates to give them the best chance of approval." },
      { q: "Can my software trigger WhatsApp messages?", a: "Yes, through configurable API integration." },
      { q: "Do you serve businesses outside Jaipur?", a: "Yes, across India and internationally." },
    ],
    related: [{ label: "Bulk SMS Service", href: "/bulk-sms-service-jaipur" }, { label: "Bulk Email Service", href: "/bulk-email-service" }, { label: "All communication services", href: "/bulk-communication" }],
  },
  {
    slug: "bulk-sms-service-jaipur",
    metaTitle: "Bulk SMS Service in Jaipur | Agranii",
    metaDescription: "Bulk SMS service in Jaipur for transactional, OTP and promotional messages, with API integration and DLT configuration support. Agranii.",
    h1: "Bulk SMS Service in Jaipur With DLT Configuration Support.",
    lead: "Transactional, OTP and promotional SMS with delivery reports and API integration.",
    crumb: "Bulk SMS Service", serviceName: "Bulk SMS Service", kind: "comms", theme: "blue", enquiry: "Discuss SMS Services",
    intro: [
      "SMS remains the most universal channel: it needs no app and no data connection. That makes it well suited to OTPs, payment alerts and time-sensitive notices.",
      "Commercial SMS in India is regulated by TRAI and requires DLT registration of the sender, sender IDs and templates. AGRANII helps you set this up correctly and integrate sending with your applications.",
    ],
    groupsTitle: "What is included",
    groups: [
      { title: "Message types", items: ["Promotional SMS", "Transactional SMS", "OTP SMS", "Service notifications"] },
      { title: "Use cases", items: ["Appointment reminders", "Order updates"] },
      { title: "Platform", items: ["Delivery reports", "API integration", "Sender ID and DLT configuration support"] },
    ],
    audienceTitle: "Common use cases",
    audience: ["OTP and login verification", "Payment and fee reminders", "Appointment and delivery alerts", "Offer announcements to consenting customers"],
    compliance: "Indian commercial SMS must comply with TRAI and DLT requirements. We guide configuration; entity, header and template registration is completed with your telecom operator.",
    faqs: [
      { q: "What is the difference between promotional and transactional SMS?", a: "Transactional messages are service-related, such as OTPs and order updates. Promotional messages are marketing and are subject to stricter rules." },
      { q: "Do I need DLT registration?", a: "Yes, for commercial SMS in India. We help you configure it." },
      { q: "Can I integrate SMS with my software?", a: "Yes, through API integration." },
      { q: "Do you provide delivery reports?", a: "Yes, delivery reports are part of the service." },
    ],
    related: [{ label: "Bulk WhatsApp Service", href: "/bulk-whatsapp-service-jaipur" }, { label: "Bulk Voice Call Service", href: "/bulk-voice-call-service" }, { label: "All communication services", href: "/bulk-communication" }],
  },
  {
    slug: "bulk-voice-call-service", photo: "comms",
    metaTitle: "Bulk Voice Call Service in India | Agranii",
    metaDescription: "Bulk voice call service for automated announcements, reminders and IVR workflows, with call reports and API integration. Agranii.",
    h1: "Bulk Voice Call Service for Announcements, Reminders and IVR.",
    lead: "Reach customers with a recorded voice message when text is not enough.",
    crumb: "Bulk Voice Call Service", serviceName: "Bulk Voice Call Service", kind: "comms", theme: "violet", enquiry: "Discuss Voice Services",
    intro: [
      "A spoken message is hard to ignore and works for audiences who do not read text messages comfortably, or in the language they prefer.",
      "AGRANII's voice services let you broadcast recorded announcements, send automated reminders and build IVR flows that route or collect responses, with reports on every call.",
    ],
    groupsTitle: "What is included",
    groups: [
      { title: "Calling", items: ["Automated voice calls", "Recorded announcements"] },
      { title: "Notifications", items: ["Appointment reminders", "Event notifications", "Customer alerts"] },
      { title: "Control", items: ["IVR solutions", "Call reports", "Configurable API integration"] },
    ],
    audienceTitle: "Common use cases",
    audience: ["Payment due reminders", "Event or meeting announcements", "Appointment confirmations", "Service interruption alerts"],
    faqs: [
      { q: "Can I use my own recorded message?", a: "Yes, recorded announcements are supported." },
      { q: "Can customers respond using their keypad?", a: "IVR workflows can be set up to collect keypad responses." },
      { q: "Do I get call reports?", a: "Yes, call reports are included." },
      { q: "Is it available across India?", a: "Yes, we serve businesses across India." },
    ],
    related: [{ label: "Bulk SMS Service", href: "/bulk-sms-service-jaipur" }, { label: "Bulk WhatsApp Service", href: "/bulk-whatsapp-service-jaipur" }, { label: "All communication services", href: "/bulk-communication" }],
  },
  {
    slug: "bulk-email-service",
    metaTitle: "Bulk Email Service in India | Agranii",
    metaDescription: "Bulk email service for campaigns, newsletters and transactional email with SPF, DKIM and DMARC configuration, templates and delivery monitoring. Agranii.",
    h1: "Bulk Email Service for Campaigns, Newsletters and Notifications.",
    lead: "Structured email communication with templates, reporting and proper sender authentication.",
    crumb: "Bulk Email Service", serviceName: "Bulk Email Service", kind: "comms", theme: "amber", enquiry: "Discuss Email Services",
    intro: [
      "Email is the best channel for detail: invoices, statements, newsletters and product updates. But inbox providers filter aggressively, and poorly configured sending quickly lands in spam.",
      "AGRANII sets up email sending with proper domain authentication and gives you templates, campaign tools and delivery monitoring so messages are sent responsibly.",
    ],
    groupsTitle: "What is included",
    groups: [
      { title: "Campaigns", items: ["Email campaign management", "Newsletter distribution", "Email templates"] },
      { title: "Notifications", items: ["Transactional email", "Customer notifications"] },
      { title: "Deliverability", items: ["Authentication configuration", "Delivery monitoring", "Campaign reporting", "API integration"] },
    ],
    audienceTitle: "Common use cases",
    audience: ["Monthly newsletters", "Invoice and receipt delivery", "Onboarding and product updates", "Event invitations"],
    compliance: "We help configure SPF, DKIM and DMARC where applicable. Inbox placement also depends on list quality, consent and content.",
    faqs: [
      { q: "What are SPF, DKIM and DMARC?", a: "They are DNS-based authentication methods that prove your emails really come from your domain, improving trust with inbox providers." },
      { q: "Can I send to a purchased list?", a: "We do not support sending to purchased or non-consenting lists." },
      { q: "Can my application send emails automatically?", a: "Yes, through API integration for transactional email." },
      { q: "Do you provide reports?", a: "Yes, campaign reporting and delivery monitoring are included." },
    ],
    related: [{ label: "Bulk WhatsApp Service", href: "/bulk-whatsapp-service-jaipur" }, { label: "Bulk SMS Service", href: "/bulk-sms-service-jaipur" }, { label: "All communication services", href: "/bulk-communication" }],
  },
];
