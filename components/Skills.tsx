"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 sm:px-10 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-12 gap-8 mb-12">
          <div className="sm:col-span-3">
            <p className="marker mb-2">04 · Stack</p>
          </div>
          <div className="sm:col-span-9">
            <h2 className="font-serif text-4xl sm:text-5xl text-[#ededec] leading-[1.05] tracking-tight">
              What I work with<span className="text-[#e8a87c]">.</span>
            </h2>
          </div>
        </div>

        {/* Skills as editorial list — label on left, items inline */}
        <div className="grid sm:grid-cols-12 gap-x-8">
          <div className="sm:col-span-3" />
          <div className="sm:col-span-9 divide-y divide-white/[0.06]">
            {SKILLS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 py-4"
              >
                <p className="sm:col-span-3 font-serif text-[18px] italic text-[#e8a87c]/80">
                  {s.label}
                </p>
                <p className="sm:col-span-9 text-[14px] text-[#bdbdbd] leading-relaxed">
                  {s.items.map((item, j) => (
                    <span key={item}>
                      <span className="text-[#ededec]">{item}</span>
                      {j < s.items.length - 1 && <span className="text-[#565658]"> · </span>}
                    </span>
                  ))}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
