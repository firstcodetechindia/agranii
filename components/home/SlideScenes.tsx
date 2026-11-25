import type { ReactNode } from "react";

const W = "#ffffff";

/** Window grid that twinkles; cols x rows of small panes. */
function Windows({ x, y, cols, rows, w = 16, h = 20, gap = 14 }: { x: number; y: number; cols: number; rows: number; w?: number; h?: number; gap?: number }) {
  const out: ReactNode[] = [];
  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++) {
      const lit = (r * 3 + c) % 3;
      out.push(<rect key={`${r}-${c}`} x={x + c * (w + gap)} y={y + r * (h + gap)} width={w} height={h} rx="2" className={`sc-tw${lit + 1}`} fill={lit === 1 ? "#fde68a" : "#bfdbfe"} />);
    }
  return <>{out}</>;
}

function Industries() {
  return (
    <>
      <circle cx="700" cy="150" r="70" fill={W} opacity=".08" />
      <g className="sc-float-c" opacity=".9">
        <ellipse cx="220" cy="120" rx="46" ry="14" fill={W} opacity=".18" />
        <ellipse cx="560" cy="80" rx="60" ry="16" fill={W} opacity=".14" />
      </g>
      {/* Hotel */}
      <g>
        <rect x="40" y="270" width="170" height="350" rx="6" fill={W} opacity=".94" />
        <rect x="75" y="245" width="100" height="32" rx="4" fill={W} />
        <text x="125" y="268" textAnchor="middle" fontSize="18" fontWeight="700" fill="#1d4ed8">HOTEL</text>
        <Windows x={62} y={305} cols={4} rows={6} w={20} h={24} gap={12} />
        <rect x="100" y="560" width="50" height="60" rx="4" fill="#1d4ed8" />
      </g>
      {/* Factory */}
      <g>
        <rect x="240" y="410" width="230" height="210" fill={W} opacity=".94" />
        <path d="M240 410l58-52v52l58-52v52l58-52v52l56-40v40" fill={W} opacity=".94" />
        <rect x="420" y="300" width="26" height="120" fill="#c7d2fe" />
        <circle className="sc-smoke" cx="433" cy="292" r="14" fill={W} opacity=".7" />
        <circle className="sc-smoke-b" cx="433" cy="292" r="12" fill={W} opacity=".7" />
        <g className="sc-spin"><circle cx="330" cy="500" r="34" fill="none" stroke="#6d28d9" strokeWidth="14" strokeDasharray="14 11" /><circle cx="330" cy="500" r="14" fill="#6d28d9" /></g>
        <g className="sc-spin-r"><circle cx="396" cy="548" r="22" fill="none" stroke="#2563eb" strokeWidth="10" strokeDasharray="10 8" /><circle cx="396" cy="548" r="8" fill="#2563eb" /></g>
        <rect x="256" y="568" width="40" height="52" fill="#4f46e5" />
      </g>
      {/* School */}
      <g>
        <rect x="500" y="440" width="190" height="180" fill={W} opacity=".94" />
        <path d="M486 444L595 372l109 72z" fill={W} />
        <line x1="595" y1="372" x2="595" y2="318" stroke={W} strokeWidth="4" />
        <path className="sc-wave" d="M595 318h44v26h-44z" fill="#fbbf24" />
        <circle cx="595" cy="420" r="13" fill="#0e7490" />
        <Windows x={522} y={470} cols={2} rows={1} w={30} h={30} gap={80} />
        <rect x="570" y="545" width="50" height="75" rx="3" fill="#0e7490" />
      </g>
      {/* Hospital */}
      <g>
        <rect x="720" y="320" width="170" height="300" rx="6" fill={W} opacity=".94" />
        <rect x="783" y="345" width="44" height="86" fill="#ef4444" />
        <rect x="762" y="366" width="86" height="44" fill="#ef4444" />
        <polyline className="sc-ecg" points="735,480 775,480 790,452 808,512 826,468 840,480 878,480" fill="none" stroke="#0f766e" strokeWidth="5" strokeLinejoin="round" />
        <Windows x={745} y={535} cols={3} rows={1} w={22} h={26} gap={18} />
      </g>
    </>
  );
}

function Messaging() {
  return (
    <>
      <circle cx="450" cy="350" r="200" fill="none" stroke={W} strokeWidth="2" className="sc-pulse" />
      <circle cx="450" cy="350" r="200" fill="none" stroke={W} strokeWidth="2" className="sc-pulse-b" />
      <g className="sc-float-b">
        <rect x="560" y="40" width="170" height="70" rx="22" fill="#22c55e" /><path d="M590 110l-6 24 26-16z" fill="#22c55e" />
        <path d="M600 76l16 16 32-34" fill="none" stroke={W} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g className="sc-float-c">
        <rect x="90" y="560" width="170" height="70" rx="22" fill={W} opacity=".95" /><path d="M230 630l6 24-26-16z" fill={W} opacity=".95" />
        <text x="175" y="606" textAnchor="middle" fontSize="26" fontWeight="700" fill="#0e7490">SMS</text>
      </g>
      <g className="sc-float"><circle cx="790" cy="590" r="44" fill={W} opacity=".2" /><circle cx="790" cy="590" r="22" fill={W} opacity=".9" /></g>
      <g className="sc-float-c"><rect x="60" y="70" width="120" height="56" rx="18" fill={W} opacity=".35" /><rect x="740" y="130" width="100" height="48" rx="16" fill={W} opacity=".3" /></g>
    </>
  );
}

function WebDesign() {
  return (
    <>
      <g className="sc-float">
        <rect x="300" y="130" width="500" height="360" rx="18" fill={W} opacity=".96" />
        <rect x="300" y="130" width="500" height="46" rx="18" fill="#e2e8f0" />
        <circle cx="328" cy="153" r="7" fill="#f87171" /><circle cx="350" cy="153" r="7" fill="#fbbf24" /><circle cx="372" cy="153" r="7" fill="#34d399" />
        <rect x="410" y="143" width="260" height="20" rx="10" fill={W} />
        <rect x="326" y="196" width="448" height="130" rx="12" fill="#0e7490" opacity=".9" />
        <rect x="350" y="224" width="190" height="16" rx="8" fill={W} /><rect x="350" y="252" width="140" height="10" rx="5" fill={W} opacity=".7" />
        <rect x="350" y="282" width="86" height="26" rx="13" fill="#fbbf24" />
        <rect x="326" y="344" width="140" height="120" rx="10" fill="#cffafe" /><rect x="480" y="344" width="140" height="120" rx="10" fill="#e0e7ff" /><rect x="634" y="344" width="140" height="120" rx="10" fill="#fce7f3" />
      </g>
      <g className="sc-float-b">
        <path d="M690 400l8 60 14-16 18 30 12-8-18-30 22-3z" fill="#0b1530" stroke={W} strokeWidth="3" strokeLinejoin="round" />
      </g>
      <g className="sc-float-c">
        <circle cx="270" cy="230" r="26" fill="#f472b6" /><circle cx="270" cy="300" r="26" fill="#fbbf24" /><circle cx="270" cy="370" r="26" fill="#34d399" /><circle cx="270" cy="440" r="26" fill="#818cf8" />
      </g>
      <g className="sc-spin" opacity=".25"><rect x="720" y="520" width="110" height="110" rx="26" fill="none" stroke={W} strokeWidth="4" strokeDasharray="12 10" /></g>
    </>
  );
}

function Collaborate() {
  const nodes = [[560, 150], [760, 260], [700, 500], [420, 500], [360, 260]];
  return (
    <>
      <g className="sc-spin-r" opacity=".35"><circle cx="560" cy="340" r="230" fill="none" stroke={W} strokeWidth="2" strokeDasharray="6 12" /></g>
      {nodes.map(([x, y], i) => <line key={i} x1="560" y1="340" x2={x} y2={y} stroke={W} strokeWidth="3" className="sc-dash" opacity=".6" />)}
      <circle cx="560" cy="340" r="110" fill={W} className="sc-pulse" opacity=".25" />
      <g className="sc-float">
        <circle cx="560" cy="340" r="86" fill={W} />
        <path d="M560 290a38 38 0 0 1 22 69v14h-44v-14a38 38 0 0 1 22-69z" fill="#fbbf24" />
        <rect x="540" y="378" width="40" height="10" rx="5" fill="#7c3aed" />
        <rect x="546" y="394" width="28" height="8" rx="4" fill="#7c3aed" />
      </g>
      {nodes.map(([x, y], i) => (
        <g key={i} className={i % 2 ? "sc-float-b" : "sc-float-c"}>
          <circle cx={x} cy={y} r="44" fill={W} opacity=".95" />
          <circle cx={x} cy={y - 8} r="13" fill={["#7c3aed", "#2563eb", "#06b6d4", "#ec4899", "#f59e0b"][i]} />
          <path d={`M${x - 22} ${y + 26}a22 18 0 0 1 44 0z`} fill={["#7c3aed", "#2563eb", "#06b6d4", "#ec4899", "#f59e0b"][i]} />
        </g>
      ))}
    </>
  );
}

const SCENES = [Industries, Messaging, WebDesign, Collaborate];
const BOXES = ["0 0 900 700", "0 0 900 700", "0 0 900 700", "0 0 900 700"];

export function SceneArt({ index, className }: { index: number; className?: string }) {
  const Scene = SCENES[index];
  return (
    <svg aria-hidden viewBox={BOXES[index]} preserveAspectRatio="xMidYMax meet" className={className}>
      <Scene />
    </svg>
  );
}

export function SlideScene({ index }: { index: number }) {
  return (
    <SceneArt
      index={index}
      className="pointer-events-none absolute bottom-0 right-0 h-full w-full opacity-30 sm:opacity-45 lg:w-[50%] lg:opacity-100"
    />
  );
}
