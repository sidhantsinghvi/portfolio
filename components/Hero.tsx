"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { META, BIO_LINES } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col pt-14">
      {/* Main editorial layout */}
      <div className="flex-1 flex items-center">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-16 sm:py-24 w-full">
          <div className="grid sm:grid-cols-12 gap-8 items-start">
            {/* Left column: name + intro */}
            <div className="sm:col-span-8">
              {/* Marker label */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="marker mb-8"
              >
                01 · Computer Engineer · UCSD
              </motion.p>

              {/* Name in serif */}
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="font-serif text-6xl sm:text-7xl lg:text-8xl text-[#ededec] leading-[0.95] tracking-tight mb-10"
              >
                Sidhant
                <br />
                Singhvi.
              </motion.h1>

              {/* Bio paragraphs */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="max-w-xl space-y-4 text-[15px] text-[#bdbdbd] leading-relaxed"
              >
                {BIO_LINES.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </motion.div>

              {/* Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-[14px]"
              >
                <a href={META.resume} className="underline-soft text-[#ededec] hover:text-[#e8a87c] transition-colors">
                  Resume <ArrowUpRight size={11} className="inline -mt-0.5" />
                </a>
                <a href={META.github} target="_blank" rel="noopener noreferrer" className="underline-soft text-[#ededec] hover:text-[#e8a87c] transition-colors">
                  GitHub <ArrowUpRight size={11} className="inline -mt-0.5" />
                </a>
                <a href={META.linkedin} target="_blank" rel="noopener noreferrer" className="underline-soft text-[#ededec] hover:text-[#e8a87c] transition-colors">
                  LinkedIn <ArrowUpRight size={11} className="inline -mt-0.5" />
                </a>
                <a href={`mailto:${META.email}`} className="underline-soft text-[#ededec] hover:text-[#e8a87c] transition-colors">
                  {META.email}
                </a>
              </motion.div>
            </div>

            {/* Right column: schematic sketch */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="sm:col-span-4 hidden sm:block sm:pt-2"
            >
              <Schematic />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* Hand-drawn looking SVG schematic — "physical world → firmware → AI → user" but in engineer-sketch style */
function Schematic() {
  return (
    <div className="relative">
      <p className="marker mb-6">fig 01 · what i work on</p>
      <svg viewBox="0 0 240 360" className="w-full h-auto" fill="none">
        {/* Top label: real world */}
        <text x="0" y="14" fontFamily="JetBrains Mono" fontSize="9" fill="#8a8a8a" letterSpacing="1">
          REAL WORLD
        </text>
        <text x="0" y="28" fontFamily="Instrument Serif" fontSize="13" fontStyle="italic" fill="#e8a87c">
          voice, vision, motion, presence
        </text>

        {/* Vertical line (signal path) */}
        <motion.line
          x1="20" y1="40" x2="20" y2="320"
          stroke="rgba(232,168,124,0.4)"
          strokeWidth="1"
          strokeDasharray="2 3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, delay: 0.7 }}
        />

        {/* Node 1 — sensors */}
        <g>
          <motion.circle
            cx="20" cy="60" r="4"
            fill="#0c0c0e" stroke="#e8a87c" strokeWidth="1.2"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          />
          <text x="34" y="58" fontFamily="JetBrains Mono" fontSize="9" fill="#bdbdbd">
            audio + vision capture
          </text>
          <text x="34" y="71" fontFamily="JetBrains Mono" fontSize="8" fill="#7a7a7a">
            mic array · camera · imu
          </text>
        </g>

        {/* Node 2 — firmware */}
        <g>
          <motion.circle
            cx="20" cy="130" r="4"
            fill="#0c0c0e" stroke="#e8a87c" strokeWidth="1.2"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          />
          <text x="34" y="128" fontFamily="JetBrains Mono" fontSize="9" fill="#bdbdbd">
            on-device firmware
          </text>
          <text x="34" y="141" fontFamily="JetBrains Mono" fontSize="8" fill="#7a7a7a">
            wake word · power · always-on
          </text>
        </g>

        {/* Annotation — engineer-sketch style, points across the whole loop */}
        <g opacity="0.85">
          <text x="135" y="232" fontFamily="Instrument Serif" fontSize="13" fontStyle="italic" fill="#e8a87c">
            i like the
          </text>
          <text x="135" y="247" fontFamily="Instrument Serif" fontSize="13" fontStyle="italic" fill="#e8a87c">
            whole loop ↙
          </text>
          <path
            d="M 133 250 Q 90 250, 30 235"
            stroke="rgba(232,168,124,0.5)"
            strokeWidth="0.8"
            fill="none"
            strokeDasharray="2 2"
          />
        </g>

        {/* Node 3 — pipelines */}
        <g>
          <motion.circle
            cx="20" cy="200" r="4"
            fill="#0c0c0e" stroke="#e8a87c" strokeWidth="1.2"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
          />
          <text x="34" y="198" fontFamily="JetBrains Mono" fontSize="9" fill="#bdbdbd">
            streaming pipeline
          </text>
          <text x="34" y="211" fontFamily="JetBrains Mono" fontSize="8" fill="#7a7a7a">
            stt · vad · sub-100ms
          </text>
        </g>

        {/* Node 4 — AI */}
        <g>
          <motion.circle
            cx="20" cy="270" r="4"
            fill="#0c0c0e" stroke="#e8a87c" strokeWidth="1.2"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
          />
          <text x="34" y="268" fontFamily="JetBrains Mono" fontSize="9" fill="#bdbdbd">
            ai assistant + context
          </text>
          <text x="34" y="281" fontFamily="JetBrains Mono" fontSize="8" fill="#7a7a7a">
            model · state · memory
          </text>
        </g>

        {/* Bottom label — user */}
        <g>
          <motion.circle
            cx="20" cy="320" r="5"
            fill="#e8a87c" stroke="#e8a87c" strokeWidth="1.2"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
          />
          <text x="34" y="318" fontFamily="JetBrains Mono" fontSize="9" fill="#ededec">
            live response to user
          </text>
          <text x="34" y="331" fontFamily="Instrument Serif" fontSize="11" fontStyle="italic" fill="#e8a87c">
            …feels instant
          </text>
        </g>
      </svg>
    </div>
  );
}
