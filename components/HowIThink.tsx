"use client";

import { motion } from "framer-motion";
import { NOTES } from "@/data/portfolio";

export default function HowIThink() {
  return (
    <section id="notes" className="py-28 px-6 sm:px-10 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-12 gap-8 mb-12">
          <div className="sm:col-span-3">
            <p className="marker mb-2">05 · Notes</p>
          </div>
          <div className="sm:col-span-9">
            <h2 className="font-serif text-4xl sm:text-5xl text-[#ededec] leading-[1.05] tracking-tight">
              Things I keep<br className="hidden sm:block" /> coming back to<span className="text-[#e8a87c]">.</span>
            </h2>
          </div>
        </div>

        {/* Notes as a numbered list, editorial style */}
        <div className="grid sm:grid-cols-12 gap-x-8">
          <div className="sm:col-span-3" />
          <div className="sm:col-span-9 max-w-2xl">
            {NOTES.map((n, i) => (
              <motion.div
                key={n.n}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-6 py-5 border-b border-white/[0.05] last:border-0"
              >
                <span className="font-serif italic text-3xl text-[#e8a87c]/70 leading-none">
                  {n.n}
                </span>
                <p className="font-serif text-[20px] sm:text-[22px] text-[#ededec] leading-snug">
                  {n.note}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
