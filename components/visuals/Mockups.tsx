/**
 * Illustrative product-interface mockups built in HTML/CSS (no screenshots,
 * no generated text-in-image). All figures are sample UI data for
 * illustration only and are marked aria-hidden.
 */
import {
  Activity, BedDouble, CalendarCheck, Gem, Users, MessageCircle, Mail, Phone,
  Smartphone, Stethoscope, Wallet, Clock, CheckCheck, BarChart3, Boxes, FileText,
} from "lucide-react";
import type { ReactNode } from "react";

export type MockupKind = "software" | "hospital" | "jewellery" | "hr" | "hotel" | "comms" | "team";

function Frame({ title, children, tone = "blue" }: { title: string; children: ReactNode; tone?: "blue" | "amber" | "teal" | "violet" }) {
  const dot = { blue: "bg-brand", amber: "bg-amber-500", teal: "bg-cyan", violet: "bg-violet" }[tone];
  return (
    <div aria-hidden className="select-none overflow-hidden rounded-2xl border border-white/70 bg-white shadow-[0_30px_60px_-20px_rgb(23_32_51/0.45)]">
      <div className="flex items-center gap-2 border-b border-line bg-surface px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-red-300" /><span className="size-2.5 rounded-full bg-amber-300" /><span className="size-2.5 rounded-full bg-emerald-300" />
        <span className="ml-3 flex items-center gap-2 rounded-md bg-white px-3 py-1 text-[11px] text-body"><span className={`size-1.5 rounded-full ${dot}`} />{title}</span>
      </div>
      <div className="p-4 text-[11px] leading-snug">{children}</div>
    </div>
  );
}

function Kpi({ icon: I, label, value, tint }: { icon: typeof Activity; label: string; value: string; tint: string }) {
  return (
    <div className="rounded-xl border border-line bg-white p-3">
      <span className={`mb-2 grid size-7 place-items-center rounded-lg ${tint}`}><I className="size-3.5" /></span>
      <div className="text-[10px] text-body">{label}</div>
      <div className="text-base font-bold text-navy">{value}</div>
    </div>
  );
}

function Bars({ data, color = "#2563eb" }: { data: number[]; color?: string }) {
  return (
    <div className="flex h-20 items-end gap-1.5">
      {data.map((d, i) => (
        <div key={i} className="flex-1 rounded-t" style={{ height: `${d}%`, background: i === data.length - 2 ? color : `${color}40` }} />
      ))}
    </div>
  );
}

function Line({ color = "#06b6d4" }: { color?: string }) {
  return (
    <svg viewBox="0 0 200 60" className="h-16 w-full" preserveAspectRatio="none">
      <defs><linearGradient id={`g${color.slice(1)}`} x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor={color} stopOpacity=".3" /><stop offset="1" stopColor={color} stopOpacity="0" /></linearGradient></defs>
      <path d="M0 45 L25 38 L50 42 L75 24 L100 30 L125 14 L150 22 L175 8 L200 12 L200 60 L0 60Z" fill={`url(#g${color.slice(1)})`} />
      <path d="M0 45 L25 38 L50 42 L75 24 L100 30 L125 14 L150 22 L175 8 L200 12" fill="none" stroke={color} strokeWidth="2" />
    </svg>
  );
}

function Row({ a, b, c, status, ok = true }: { a: string; b: string; c: string; status: string; ok?: boolean }) {
  return (
    <div className="grid grid-cols-[1.4fr_1fr_1fr_auto] items-center gap-2 border-t border-line py-2">
      <span className="font-medium text-navy">{a}</span><span>{b}</span><span>{c}</span>
      <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${ok ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>{status}</span>
    </div>
  );
}

export function Mockup({ kind, className = "" }: { kind: MockupKind; className?: string }) {
  return <div className={className}>{render(kind)}</div>;
}

function render(kind: MockupKind) {
  switch (kind) {
    case "hospital":
      return (
        <Frame title="Hospital Management · Dashboard" tone="teal">
          <div className="grid grid-cols-3 gap-2.5">
            <Kpi icon={Users} label="OPD today" value="Sample" tint="bg-blue-50 text-brand" />
            <Kpi icon={BedDouble} label="IPD beds" value="Sample" tint="bg-cyan/10 text-cyan" />
            <Kpi icon={Wallet} label="Billing" value="Sample" tint="bg-violet/10 text-violet" />
          </div>
          <div className="mt-3 grid grid-cols-[1.3fr_1fr] gap-2.5">
            <div className="rounded-xl border border-line p-3"><div className="mb-2 font-medium text-navy">Patient flow</div><Line /></div>
            <div className="rounded-xl border border-line p-3"><div className="mb-2 font-medium text-navy">Departments</div><Bars data={[60, 80, 45, 90, 55]} color="#06b6d4" /></div>
          </div>
          <div className="mt-3 rounded-xl border border-line px-3 pt-2">
            <Row a="Appointment · OPD" b="Dr. Consultant" c="10:30" status="Confirmed" />
            <Row a="Lab report" b="Pathology" c="Pending" status="In process" ok={false} />
            <Row a="Pharmacy issue" b="Ward 2" c="Today" status="Done" />
          </div>
        </Frame>
      );
    case "jewellery":
      return (
        <Frame title="Jewellery ERP · Sales & Stock" tone="amber">
          <div className="grid grid-cols-3 gap-2.5">
            <Kpi icon={Gem} label="Gold rate" value="Configurable" tint="bg-amber-50 text-amber-600" />
            <Kpi icon={Boxes} label="Stock" value="By weight" tint="bg-blue-50 text-brand" />
            <Kpi icon={FileText} label="Invoice" value="Barcode" tint="bg-violet/10 text-violet" />
          </div>
          <div className="mt-3 rounded-xl border border-line p-3">
            <div className="mb-2 font-medium text-navy">Item calculation</div>
            {[["Gross weight", "20.000 g"], ["Stone weight", "2.000 g"], ["Net metal", "18.000 g"], ["Purity", "22K"], ["Wastage", "1.000 g"]].map(([k, v]) => (
              <div key={k} className="flex justify-between border-t border-line py-1.5 first:border-0"><span>{k}</span><span className="font-medium text-navy">{v}</span></div>
            ))}
          </div>
          <div className="mt-3 rounded-xl border border-line p-3"><Bars data={[40, 62, 50, 78, 66, 88]} color="#d97706" /></div>
        </Frame>
      );
    case "hr":
      return (
        <Frame title="Employee Management · Overview" tone="violet">
          <div className="grid grid-cols-3 gap-2.5">
            <Kpi icon={Users} label="Employees" value="Profiles" tint="bg-blue-50 text-brand" />
            <Kpi icon={CalendarCheck} label="Attendance" value="Daily" tint="bg-emerald-50 text-emerald-600" />
            <Kpi icon={Wallet} label="Payroll" value="Monthly" tint="bg-violet/10 text-violet" />
          </div>
          <div className="mt-3 grid grid-cols-[1.2fr_1fr] gap-2.5">
            <div className="rounded-xl border border-line p-3"><div className="mb-2 font-medium text-navy">Attendance trend</div><Line color="#7c3aed" /></div>
            <div className="rounded-xl border border-line p-3"><div className="mb-2 font-medium text-navy">Leave requests</div><Bars data={[30, 55, 40, 70, 45]} color="#7c3aed" /></div>
          </div>
          <div className="mt-3 rounded-xl border border-line px-3 pt-2">
            <Row a="Leave · Casual" b="Operations" c="2 days" status="Approved" />
            <Row a="Shift change" b="Support" c="Night" status="Review" ok={false} />
          </div>
        </Frame>
      );
    case "hotel":
      return (
        <Frame title="Hotel PMS · Reservations" tone="blue">
          <div className="grid grid-cols-3 gap-2.5">
            <Kpi icon={BedDouble} label="Rooms" value="Live status" tint="bg-blue-50 text-brand" />
            <Kpi icon={CalendarCheck} label="Check-ins" value="Today" tint="bg-cyan/10 text-cyan" />
            <Kpi icon={BarChart3} label="Occupancy" value="Reports" tint="bg-violet/10 text-violet" />
          </div>
          <div className="mt-3 rounded-xl border border-line p-3">
            <div className="mb-2 font-medium text-navy">Room availability</div>
            <div className="grid grid-cols-8 gap-1.5">
              {Array.from({ length: 24 }).map((_, i) => (
                <span key={i} className={`grid h-7 place-items-center rounded-md text-[10px] font-medium ${[2, 5, 6, 11, 14, 15, 19].includes(i) ? "bg-brand text-white" : [3, 9, 20].includes(i) ? "bg-amber-100 text-amber-700" : "bg-emerald-50 text-emerald-700"}`}>{101 + i}</span>
              ))}
            </div>
          </div>
          <div className="mt-3 rounded-xl border border-line px-3 pt-2">
            <Row a="Reservation" b="2 nights" c="Deluxe" status="Confirmed" />
            <Row a="Housekeeping" b="Floor 2" c="Clean" status="Ready" />
          </div>
        </Frame>
      );
    case "comms":
      return (
        <Frame title="Omnichannel Communication" tone="teal">
          <div className="grid grid-cols-4 gap-2">
            {[[MessageCircle, "WhatsApp", "bg-emerald-50 text-emerald-600"], [Smartphone, "SMS", "bg-blue-50 text-brand"], [Phone, "Voice", "bg-violet/10 text-violet"], [Mail, "Email", "bg-amber-50 text-amber-600"]].map(([I, l, t]) => {
              const Icon = I as typeof Mail;
              return <div key={l as string} className="rounded-xl border border-line p-2.5 text-center"><span className={`mx-auto mb-1.5 grid size-7 place-items-center rounded-lg ${t as string}`}><Icon className="size-3.5" /></span><div className="font-medium text-navy">{l as string}</div></div>;
            })}
          </div>
          <div className="mt-3 grid grid-cols-[1.1fr_1fr] gap-2.5">
            <div className="space-y-2 rounded-xl bg-[#ecf6f1] p-3">
              <div className="max-w-[85%] rounded-lg rounded-tl-sm bg-white p-2 shadow-sm">Your appointment is confirmed for tomorrow, 10:30.</div>
              <div className="ml-auto max-w-[70%] rounded-lg rounded-tr-sm bg-[#d9fdd3] p-2 shadow-sm">Thank you!<CheckCheck className="ml-1 inline size-3 text-cyan" /></div>
              <div className="max-w-[85%] rounded-lg rounded-tl-sm bg-white p-2 shadow-sm">Reply 1 to reschedule.</div>
            </div>
            <div className="rounded-xl border border-line p-3"><div className="mb-1 font-medium text-navy">Delivery report</div><Bars data={[50, 72, 60, 88, 70]} color="#06b6d4" /></div>
          </div>
        </Frame>
      );
    case "team":
      return (
        <Frame title="Project Workspace" tone="violet">
          <div className="grid grid-cols-3 gap-2.5">
            {["Discover", "Design", "Develop"].map((c, i) => (
              <div key={c} className="rounded-xl border border-line bg-surface p-2.5">
                <div className="mb-2 flex items-center justify-between font-medium text-navy">{c}<Clock className="size-3 text-body" /></div>
                {Array.from({ length: 3 - (i % 2) }).map((_, j) => <div key={j} className="mb-1.5 rounded-lg bg-white p-2 shadow-sm"><div className="mb-1 h-1.5 w-3/4 rounded bg-slate-200" /><div className="h-1.5 w-1/2 rounded bg-slate-100" /></div>)}
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-xl border border-line p-3"><Line color="#2563eb" /></div>
        </Frame>
      );
    default:
      return (
        <Frame title="Business Application · Analytics" tone="blue">
          <div className="grid grid-cols-[88px_1fr] gap-3">
            <div className="space-y-1.5 rounded-xl bg-navy p-2.5 text-slate-300">
              {["Overview", "Orders", "Customers", "Reports", "Settings"].map((s, i) => <div key={s} className={`rounded-md px-2 py-1.5 ${i === 0 ? "bg-white/15 text-white" : ""}`}>{s}</div>)}
            </div>
            <div>
              <div className="grid grid-cols-3 gap-2">
                <Kpi icon={Activity} label="Workflow" value="Automated" tint="bg-blue-50 text-brand" />
                <Kpi icon={Stethoscope} label="Modules" value="Custom" tint="bg-cyan/10 text-cyan" />
                <Kpi icon={BarChart3} label="Reports" value="Live" tint="bg-violet/10 text-violet" />
              </div>
              <div className="mt-2.5 rounded-xl border border-line p-3"><Line color="#2563eb" /></div>
              <div className="mt-2.5 rounded-xl border border-line p-3"><Bars data={[45, 70, 55, 85, 60, 92]} /></div>
            </div>
          </div>
        </Frame>
      );
  }
}
