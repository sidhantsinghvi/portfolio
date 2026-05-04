"use client";

import { motion } from "framer-motion";

const OUTSIDE = [
  { label: "surfing", detail: "mostly dawn patrol" },
  { label: "tennis", detail: "serve needs work, the rest is fine" },
  { label: "hiking", detail: "torrey pines to mt. laguna" },
];

export default function Outside() {
  return (
    <section className="py-20 px-6 sm:px-10 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-12 gap-8">
          <div className="sm:col-span-3">
            <p className="marker mb-2">05 · Outside</p>
          </div>
          <div className="sm:col-span-9">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#ededec] tracking-tight mb-8">
              When I'm not at a screen<span className="text-[#e8a87c]">.</span>
            </h2>
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              {OUTSIDE.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <p className="font-serif text-[22px] text-[#ededec]">{item.label}</p>
                  <p className="font-mono text-[11px] text-[#565658] mt-1">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
