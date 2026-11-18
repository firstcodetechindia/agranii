import type { LucideIcon } from "lucide-react";
import {
  Code2, Hospital, Gem, Users, Hotel, MessageCircle, Smartphone, PhoneCall, Mail,
  Compass, Map, PenTool, Rocket, LifeBuoy, Target, Settings2, Cpu, MousePointerClick, TrendingUp, Handshake,
  HeartPulse, Building2, Briefcase,
} from "lucide-react";
import type { MockupKind } from "@/components/visuals/Mockups";
import type { PhotoKey } from "./photos";

export type Service = { title: string; description: string; icon: LucideIcon; href: string; tint: string };

export const SERVICES: Service[] = [
  { title: "Custom Software Development", description: "Business-focused software applications tailored to your unique processes, operational requirements and growth objectives.", icon: Code2, href: "/custom-software", tint: "bg-blue-50 text-brand" },
  { title: "Hospital Management Software", description: "Integrated hospital management solutions for patient records, appointments, billing, pharmacy, laboratory and hospital operations.", icon: Hospital, href: "/hospital-management-software-jaipur", tint: "bg-cyan/10 text-cyan" },
  { title: "Jewellery Management Software", description: "Manage jewellery inventory, gold and silver calculations, manufacturing, purchase, sales and business accounting.", icon: Gem, href: "/jewellery-software-jaipur", tint: "bg-amber-50 text-amber-600" },
  { title: "Employee Management Software", description: "Simplify HR operations with employee records, attendance, leave, payroll and workforce management.", icon: Users, href: "/employee-management-software", tint: "bg-violet/10 text-violet" },
  { title: "Hotel Management Software", description: "Manage reservations, front desk, room inventory, housekeeping, guest billing and hospitality operations.", icon: Hotel, href: "/hotel-management-software-jaipur", tint: "bg-blue-50 text-brand" },
  { title: "Bulk WhatsApp Services", description: "Connect with customers through approved WhatsApp Business Platform messaging and notification solutions.", icon: MessageCircle, href: "/bulk-whatsapp-service-jaipur", tint: "bg-emerald-50 text-emerald-600" },
  { title: "Bulk SMS Services", description: "Deliver business notifications, promotional campaigns and transactional messages through SMS services.", icon: Smartphone, href: "/bulk-sms-service-jaipur", tint: "bg-cyan/10 text-cyan" },
  { title: "Bulk Voice Call Services", description: "Automate business communication through voice announcements, reminders and IVR services.", icon: PhoneCall, href: "/bulk-voice-call-service", tint: "bg-violet/10 text-violet" },
  { title: "Bulk Email Services", description: "Manage professional email campaigns, newsletters and customer communication.", icon: Mail, href: "/bulk-email-service", tint: "bg-amber-50 text-amber-600" },
];

export const BENEFITS = [
  { title: "Business-Focused Approach", text: "We start by understanding your processes and objectives before recommending a solution.", icon: Target },
  { title: "Customised Solutions", text: "Technology designed around your specific operational needs.", icon: Settings2 },
  { title: "Modern Technology", text: "Use modern development frameworks and scalable architecture.", icon: Cpu },
  { title: "User-Friendly Experience", text: "Simple, intuitive interfaces that make technology easier to use.", icon: MousePointerClick },
  { title: "Scalable Development", text: "Build solutions that can evolve as your business requirements grow.", icon: TrendingUp },
  { title: "Long-Term Collaboration", text: "A development approach that supports continuous improvement and future enhancements.", icon: Handshake },
];

export const INDUSTRIES: { title: string; text: string; href: string; icon: LucideIcon; kind: MockupKind; grad: string; photo: PhotoKey }[] = [
  { title: "Healthcare", text: "Patient records, appointments, pharmacy, laboratory and billing in one platform.", href: "/hospital-management-software-jaipur", icon: HeartPulse, kind: "hospital", grad: "from-cyan/80 to-brand", photo: "doctor" },
  { title: "Jewellery and Retail", text: "Metal inventory, purity, wastage, making charges and barcode billing.", href: "/jewellery-software-jaipur", icon: Gem, kind: "jewellery", grad: "from-amber-400 to-orange-600", photo: "jewellery" },
  { title: "Hospitality", text: "Reservations, front desk, housekeeping and guest billing for hotels.", href: "/hotel-management-software-jaipur", icon: Hotel, kind: "hotel", grad: "from-brand to-violet", photo: "hotel" },
  { title: "Corporate and HR", text: "Employee records, attendance, leave and payroll for growing teams.", href: "/employee-management-software", icon: Briefcase, kind: "hr", grad: "from-violet to-brand", photo: "hr" },
  { title: "Business and Enterprise", text: "Tailor-made applications that automate workflows and reporting.", href: "/custom-software", icon: Building2, kind: "software", grad: "from-navy to-brand", photo: "dev" },
];

export const PROCESS = [
  { n: "01", title: "Discover", text: "Understand the business requirements, challenges and objectives.", icon: Compass },
  { n: "02", title: "Strategise", text: "Plan the right technology, architecture, features and implementation approach.", icon: Map },
  { n: "03", title: "Design and Develop", text: "Build intuitive interfaces and functional software.", icon: PenTool },
  { n: "04", title: "Test and Launch", text: "Validate the solution and prepare for deployment.", icon: Rocket },
  { n: "05", title: "Support and Improve", text: "Continue improving the solution based on business requirements.", icon: LifeBuoy },
];

export const CHANNELS = [
  { title: "WhatsApp", icon: MessageCircle, href: "/bulk-whatsapp-service-jaipur", text: "Interactive, approved messaging for customer updates and notifications.", uses: ["Appointment reminders", "Order updates", "Customer support alerts"] },
  { title: "SMS", icon: Smartphone, href: "/bulk-sms-service-jaipur", text: "Short, time-sensitive messages that reach any mobile phone.", uses: ["OTP and verification", "Transaction alerts", "Promotional campaigns"] },
  { title: "Voice", icon: PhoneCall, href: "/bulk-voice-call-service", text: "Automated spoken announcements and IVR-based workflows.", uses: ["Payment reminders", "Event announcements", "Customer alerts"] },
  { title: "Email", icon: Mail, href: "/bulk-email-service", text: "Detailed communication, newsletters and business notifications.", uses: ["Newsletters", "Invoices and statements", "Product updates"] },
];

export const HOME_FAQS = [
  { q: "What services does AGRANII provide?", a: "AGRANII provides custom software development, industry-specific software for healthcare, jewellery, hospitality and workforce management, and bulk business communication services across WhatsApp, SMS, voice call and email." },
  { q: "Does AGRANII develop customised business software?", a: "Yes. We design and build business applications around your own processes, from internal tools and workflow automation to complete management platforms." },
  { q: "Can software be tailored to our existing business processes?", a: "Yes. We begin by studying how your team works today and then configure or build the software to match those workflows, rather than forcing you to change them to fit a generic product." },
  { q: "Does AGRANII provide hospital management software?", a: "Yes. Our hospital management software covers patient registration, OPD and IPD, appointments, medical records, pharmacy, laboratory, billing and reporting. Modules are scoped to your hospital's needs." },
  { q: "Can you develop jewellery management software?", a: "Yes. Jewellery software can handle metal inventory, purity, gross and net weight, wastage, making charges, billing, barcodes and job work, with calculations configured to your business practices." },
  { q: "Do you provide hotel and employee management software?", a: "Yes. We build hotel management systems for reservations, front desk, housekeeping and billing, and employee management software for attendance, leave, payroll and records." },
  { q: "What bulk communication services do you offer?", a: "We offer integrated WhatsApp Business Platform messaging, bulk SMS, automated voice calls and email campaigns. Commercial messaging is subject to the applicable platform, TRAI and DLT rules." },
  { q: "How can I discuss my project requirements?", a: "Use the enquiry form on the Contact Us page and describe what you need. Our team will review it and get back to you to discuss next steps." },
  { q: "Does AGRANII work with businesses outside Jaipur?", a: "Yes. We are based in Jaipur but work with businesses and organisations across India and can collaborate remotely with clients elsewhere." },
];
