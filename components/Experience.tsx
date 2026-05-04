"use client";

import { motion } from "framer-motion";
import { EXPERIENCES } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="work" className="py-28 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="grid sm:grid-cols-12 gap-8 mb-16">
          <div className="sm:col-span-3">
            <p className="marker mb-2">02 · Work</p>
          </div>
          <div className="sm:col-span-9">
            <h2 className="font-serif text-4xl sm:text-5xl text-[#ededec] leading-[1.05] tracking-tight">
              Where I've been<span className="text-[#e8a87c]">.</span>
            </h2>
          </div>
        </div>

        {/* Experiences as editorial entries */}
        <div className="space-y-2">
          {EXPERIENCES.map((exp, i) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05 }}
              className="group grid sm:grid-cols-12 gap-4 sm:gap-8 py-6 border-t border-white/[0.06] hover:border-[#e8a87c]/25 transition-colors duration-500"
            >
              {/* Period */}
              <div className="sm:col-span-3">
                <p className="font-mono text-[11px] text-[#7a7a7a] tracking-wide">{exp.period}</p>
                <p className="font-mono text-[10px] text-[#565658] mt-0.5">{exp.location}</p>
              </div>

              {/* Body */}
              <div className="sm:col-span-9">
                <div className="flex items-baseline gap-3 flex-wrap mb-1">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#ededec] leading-tight">
                    {exp.company}
                  </h3>
                  <span className="text-[12px] font-mono text-[#7a7a7a]">· {exp.role}</span>
                </div>
                <p className="text-[14px] text-[#bdbdbd] leading-relaxed mt-3 mb-4 max-w-2xl">
                  {exp.summary}
                </p>
                <ul className="space-y-1.5 max-w-2xl">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-[13px] text-[#8a8a8a] leading-relaxed">
                      <span className="text-[#e8a87c]/60 font-mono text-[10px] mt-1">→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
