"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { META } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 sm:px-10 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-12 gap-8">
          <div className="sm:col-span-3">
            <p className="marker mb-2">06 · Contact</p>
          </div>

          <div className="sm:col-span-9">
            {/* Big call line */}
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-[#ededec] leading-[0.98] tracking-tight mb-8">
              Let's build<br />
              <span className="italic text-[#e8a87c]">something real</span>.
            </h2>

            <p className="text-[15px] text-[#bdbdbd] leading-relaxed max-w-lg mb-10">
              I'm looking for early-stage AI companies building products where the model is only
              half the problem. The pipeline, the latency, the UX that makes it feel alive — that's
              where I want to work. Email is the fastest way to reach me.
            </p>

            {/* Contact list */}
            <div className="max-w-md">
              <ContactRow label="Email" value={META.email} href={`mailto:${META.email}`} />
              <ContactRow label="GitHub" value="sidhantsinghvi" href={META.github} external />
              <ContactRow label="LinkedIn" value="sidhantsinghvi" href={META.linkedin} external />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-baseline justify-between gap-2 text-[11px] font-mono text-[#565658]">
          <span>
            Sidhant Singhvi · San Diego
          </span>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  value,
  href,
  external,
}: {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <motion.a
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-baseline justify-between py-3 border-b border-white/[0.06] hover:border-[#e8a87c]/30 transition-all"
    >
      <span className="font-mono text-[11px] text-[#565658] uppercase tracking-widest w-20">
        {label}
      </span>
      <span className="flex-1 font-serif text-[18px] text-[#ededec] group-hover:text-[#e8a87c] transition-colors">
        {value}
      </span>
      <ArrowUpRight
        size={14}
        className="text-[#565658] group-hover:text-[#e8a87c] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
      />
    </motion.a>
  );
}
