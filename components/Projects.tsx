"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";

export default function Projects() {
  // Split into "selected" (first 5) and "more" for editorial layout
  const selected = PROJECTS.slice(0, 6);
  const more = PROJECTS.slice(6);

  return (
    <section id="projects" className="py-28 px-6 sm:px-10 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="grid sm:grid-cols-12 gap-8 mb-16">
          <div className="sm:col-span-3">
            <p className="marker mb-2">03 · Selected</p>
          </div>
          <div className="sm:col-span-9">
            <h2 className="font-serif text-4xl sm:text-5xl text-[#ededec] leading-[1.05] tracking-tight">
              Things I've built<span className="text-[#e8a87c]">.</span>
            </h2>
            <p className="mt-4 text-[14px] text-[#8a8a8a] max-w-lg leading-relaxed">
              Each is a real system. Sensors that had to actually read, code that had to actually
              ship, latency that someone actually felt.
            </p>
          </div>
        </div>

        {/* Featured projects — asymmetric editorial grid */}
        <div className="space-y-6 mb-12">
          {selected.map((p, i) => (
            <ProjectFeature key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* More — compact list */}
        <div className="border-t border-white/[0.06] pt-10">
          <p className="marker mb-6">More</p>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-1">
            {more.map((p, i) => (
              <motion.a
                key={p.id}
                href={p.github ?? undefined}
                target={p.github ? "_blank" : undefined}
                rel={p.github ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group flex items-baseline gap-4 py-3 border-b border-white/[0.04] hover:border-[#e8a87c]/30 transition-colors"
              >
                <span className="font-mono text-[11px] text-[#565658]">0{i + 5}</span>
                <span className="font-serif text-xl text-[#ededec] group-hover:text-[#e8a87c] transition-colors">
                  {p.name}
                </span>
                <span className="text-[12px] text-[#7a7a7a] flex-1 truncate">{p.sub}</span>
                {p.github && (
                  <ArrowUpRight
                    size={13}
                    className="text-[#565658] group-hover:text-[#e8a87c] transition-colors shrink-0"
                  />
                )}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectFeature({
  project,
  index,
}: {
  project: any;
  index: number;
}) {
  // Alternate image side for editorial rhythm
  const imageRight = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="grid sm:grid-cols-12 gap-6 sm:gap-10 items-center group"
    >
      {/* Image */}
      <div className={`sm:col-span-7 ${imageRight ? "sm:order-2" : ""}`}>
        <ProjectImage project={project} />
      </div>

      {/* Text */}
      <div className={`sm:col-span-5 ${imageRight ? "sm:order-1" : ""}`}>
        <div className="flex items-baseline gap-3 mb-2">
          <span className="font-mono text-[11px] text-[#565658]">0{index + 1}</span>
          {project.award && (
            <span className="font-mono text-[10px] text-[#e8a87c] uppercase tracking-widest">
              ★ {project.award}
            </span>
          )}
        </div>

        <h3 className="font-serif text-3xl sm:text-4xl text-[#ededec] leading-[1.05] mb-2">
          {project.name}
        </h3>
        <p className="font-serif italic text-[18px] text-[#e8a87c]/80 mb-5 leading-snug">
          {project.sub}
        </p>

        <p className="text-[14px] text-[#bdbdbd] leading-relaxed mb-5 max-w-md">{project.body}</p>

        {/* Pipeline as inline ascii */}
        <div className="font-mono text-[11px] text-[#7a7a7a] leading-relaxed mb-5">
          {project.pipeline.map((step: string, i: number, arr: string[]) => (
            <span key={i}>
              <span className="text-[#bdbdbd]">{step}</span>
              {i < arr.length - 1 && <span className="mx-1.5 text-[#e8a87c]/50">→</span>}
            </span>
          ))}
        </div>

        {/* Metrics + GitHub */}
        <div className="flex items-baseline gap-6 flex-wrap">
          {project.metrics.map((m: { label: string; value: string }) => (
            <div key={m.label}>
              <p className="font-mono text-[10px] text-[#565658] uppercase tracking-widest mb-0.5">
                {m.label}
              </p>
              <p className="font-serif text-lg text-[#e8a87c]">{m.value}</p>
            </div>
          ))}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto text-[12px] text-[#bdbdbd] hover:text-[#e8a87c] underline-soft transition-colors"
            >
              GitHub <ArrowUpRight size={11} className="inline -mt-0.5" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function ProjectImage({ project }: { project: any }) {
  if (project.image) {
    return (
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-white/[0.08] bg-[#131317]">
        <img
          src={project.image}
          alt={project.imageAlt ?? project.name}
          className="w-full h-full object-cover project-image"
        />
        {/* Vignette overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 50%, rgba(12,12,14,0.5) 100%)",
          }}
        />
        {/* Caption strip */}
        <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-[#0c0c0e]/95 to-transparent">
          <p className="font-mono text-[10px] text-[#7a7a7a] tracking-wide">
            fig.{project.id} · {project.imageAlt ?? project.sub}
          </p>
        </div>
      </div>
    );
  }

  return <ProjectMock kind={project.imageMock ?? "default"} project={project} />;
}

/* Stylized SVG mocks for projects without real images — keeps the design intentional */
function ProjectMock({
  kind,
  project,
}: {
  kind: string;
  project: any;
}) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-white/[0.08] bg-[#131317] flex items-center justify-center">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {kind === "rehab" && <RehabMock />}
      {kind === "tinyml" && <TinyMLMock />}
      {kind === "insect" && <InsectMock />}
      {kind === "uvm" && <UvmMock />}
      {kind === "nachos" && <NachosMock />}
      {kind === "cuda" && <CudaMock />}

      {/* Caption strip */}
      <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-[#0c0c0e]/95 to-transparent">
        <p className="font-mono text-[10px] text-[#7a7a7a] tracking-wide">
          fig.{project.id} · {project.sub}
        </p>
      </div>
    </div>
  );
}

function TinyMLMock() {
  const instructions = ["FETCH", "MAC4", "MAC4", "CONV3", "SIG", "ACC", "OUT"];
  const colors: Record<string, string> = {
    FETCH: "rgba(255,255,255,0.12)",
    MAC4: "rgba(232,168,124,0.7)",
    CONV3: "rgba(232,168,124,0.5)",
    SIG: "rgba(149,180,232,0.6)",
    ACC: "rgba(149,180,232,0.35)",
    OUT: "rgba(120,200,140,0.6)",
  };
  const cycles = [0, 2, 5, 8, 11, 13, 15];
  const widths = [2, 3, 3, 3, 2, 2, 2];
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full p-6">
      {/* Title */}
      <text x="0" y="18" fontFamily="JetBrains Mono" fontSize="9" fill="#7a7a7a" letterSpacing="1">PIPELINE TRACE · 17 CYCLES</text>
      {/* Lane backgrounds */}
      {["IF", "ID", "EX", "WB"].map((lane, i) => (
        <g key={lane}>
          <text x="0" y={52 + i * 52} fontFamily="JetBrains Mono" fontSize="8" fill="#565658">{lane}</text>
          <line x1="28" y1={44 + i * 52} x2="390" y2={44 + i * 52} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          <line x1="28" y1={72 + i * 52} x2="390" y2={72 + i * 52} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        </g>
      ))}
      {/* Instruction blocks */}
      {instructions.map((instr, i) => {
        const x = 30 + cycles[i] * 21;
        const w = widths[i] * 21 - 2;
        const fill = colors[instr] ?? "rgba(255,255,255,0.1)";
        return (
          <g key={i}>
            <rect x={x} y={36} width={w} height={26} rx="2" fill={fill} />
            <text x={x + w / 2} y={53} fontFamily="JetBrains Mono" fontSize="8" fill="#ededec" textAnchor="middle">{instr}</text>
          </g>
        );
      })}
      {/* Cycle tick marks */}
      {Array.from({ length: 18 }).map((_, i) => (
        <line key={i} x1={30 + i * 21} y1={30} x2={30 + i * 21} y2={34} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      ))}
      {/* ML instruction callout */}
      <rect x="51" y="80" width="63" height="18" rx="2" fill="rgba(232,168,124,0.15)" stroke="rgba(232,168,124,0.4)" strokeWidth="0.8" />
      <text x="82" y="92" fontFamily="JetBrains Mono" fontSize="7" fill="#e8a87c" textAnchor="middle">custom ISA</text>
      <text x="200" y="268" fontFamily="JetBrains Mono" fontSize="10" fill="#bdbdbd" textAnchor="middle">MAC4 · CONV3 · sigmoid LUT · 100MHz</text>
    </svg>
  );
}

function RehabMock() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
      {/* Sin wave (rep motion) */}
      <path
        d="M 30 150 Q 80 60, 130 150 T 230 150 T 330 150 T 430 150"
        stroke="rgba(232,168,124,0.7)"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Threshold lines */}
      <line x1="20" y1="80" x2="380" y2="80" stroke="rgba(255,255,255,0.15)" strokeDasharray="3 3" strokeWidth="0.8" />
      <line x1="20" y1="220" x2="380" y2="220" stroke="rgba(255,255,255,0.15)" strokeDasharray="3 3" strokeWidth="0.8" />
      {/* Labels */}
      <text x="20" y="74" fontFamily="JetBrains Mono" fontSize="9" fill="#7a7a7a">peak</text>
      <text x="20" y="234" fontFamily="JetBrains Mono" fontSize="9" fill="#7a7a7a">rest</text>
      {/* Rep markers */}
      <circle cx="80" cy="60" r="3" fill="#e8a87c" />
      <circle cx="180" cy="60" r="3" fill="#e8a87c" />
      <circle cx="280" cy="60" r="3" fill="#e8a87c" />
      <text x="200" y="270" fontFamily="JetBrains Mono" fontSize="10" fill="#bdbdbd" textAnchor="middle">accY · live rep state</text>
    </svg>
  );
}

function InsectMock() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full p-6">
      {/* Confusion matrix style grid */}
      {Array.from({ length: 5 }).map((_, i) =>
        Array.from({ length: 5 }).map((_, j) => {
          const opacity = i === j ? 0.85 : Math.random() * 0.15;
          return (
            <rect
              key={`${i}-${j}`}
              x={120 + j * 36}
              y={50 + i * 36}
              width="32"
              height="32"
              fill={i === j ? "#e8a87c" : "#ededec"}
              fillOpacity={opacity}
              rx="1"
            />
          );
        })
      )}
      <text x="200" y="40" fontFamily="JetBrains Mono" fontSize="9" fill="#7a7a7a" textAnchor="middle">pred. class</text>
      <text x="100" y="115" fontFamily="JetBrains Mono" fontSize="9" fill="#7a7a7a" textAnchor="middle" transform="rotate(-90, 100, 115)">true class</text>
      <text x="200" y="265" fontFamily="JetBrains Mono" fontSize="10" fill="#bdbdbd" textAnchor="middle">confusion · 95%+ on diagonal</text>
    </svg>
  );
}

function UvmMock() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
      {/* Block diagram */}
      <g stroke="rgba(232,168,124,0.5)" strokeWidth="1" fill="none">
        <rect x="40" y="80" width="80" height="40" rx="2" />
        <rect x="160" y="80" width="80" height="40" rx="2" />
        <rect x="280" y="80" width="80" height="40" rx="2" />
        <rect x="100" y="180" width="200" height="40" rx="2" />
        {/* Connecting lines */}
        <line x1="120" y1="100" x2="160" y2="100" />
        <line x1="240" y1="100" x2="280" y2="100" />
        <line x1="200" y1="120" x2="200" y2="180" strokeDasharray="2 2" />
      </g>
      <text x="80" y="103" fontFamily="JetBrains Mono" fontSize="9" fill="#bdbdbd" textAnchor="middle">agent</text>
      <text x="200" y="103" fontFamily="JetBrains Mono" fontSize="9" fill="#bdbdbd" textAnchor="middle">DUT</text>
      <text x="320" y="103" fontFamily="JetBrains Mono" fontSize="9" fill="#bdbdbd" textAnchor="middle">monitor</text>
      <text x="200" y="203" fontFamily="JetBrains Mono" fontSize="9" fill="#e8a87c" textAnchor="middle">scoreboard + coverage</text>
      <text x="200" y="265" fontFamily="JetBrains Mono" fontSize="10" fill="#bdbdbd" textAnchor="middle">UVM env · AXI-Lite clkgate</text>
    </svg>
  );
}

function NachosMock() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
      {/* Stack diagram */}
      <g fill="none" stroke="rgba(232,168,124,0.4)" strokeWidth="1">
        <rect x="80" y="60" width="240" height="30" />
        <rect x="80" y="100" width="240" height="30" />
        <rect x="80" y="140" width="240" height="30" />
        <rect x="80" y="180" width="240" height="30" />
      </g>
      <text x="200" y="80" fontFamily="JetBrains Mono" fontSize="10" fill="#bdbdbd" textAnchor="middle">user prog</text>
      <text x="200" y="120" fontFamily="JetBrains Mono" fontSize="10" fill="#bdbdbd" textAnchor="middle">syscall layer</text>
      <text x="200" y="160" fontFamily="JetBrains Mono" fontSize="10" fill="#bdbdbd" textAnchor="middle">scheduler / threads</text>
      <text x="200" y="200" fontFamily="JetBrains Mono" fontSize="10" fill="#e8a87c" textAnchor="middle">page table · phys mem</text>
      <text x="200" y="245" fontFamily="JetBrains Mono" fontSize="10" fill="#bdbdbd" textAnchor="middle">os fundamentals</text>
    </svg>
  );
}

function CudaMock() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
      {/* Particles */}
      {Array.from({ length: 60 }).map((_, i) => {
        const x = 50 + Math.random() * 300;
        const y = 50 + Math.random() * 200;
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={Math.random() * 1.5 + 0.5}
            fill="#e8a87c"
            fillOpacity={Math.random() * 0.7 + 0.3}
          />
        );
      })}
      <text x="200" y="270" fontFamily="JetBrains Mono" fontSize="10" fill="#bdbdbd" textAnchor="middle">N-body · ~30× GPU speedup</text>
    </svg>
  );
}
