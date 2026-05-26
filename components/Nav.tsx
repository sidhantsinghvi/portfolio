"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { META } from "@/data/portfolio";

const links = [
  { label: "Work", href: "#work" },
  { label: "Selected", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.05 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0c0c0e]/85 backdrop-blur-md border-b border-white/[0.06]" : ""
      }`}
      style={{ pointerEvents: scrolled ? "auto" : "auto" }}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10 h-14 flex items-center justify-between">
        <a href="#" className="font-serif text-base text-[#ededec] hover:text-[#e8a87c] transition-colors">
          Sidhant Singhvi<span className="text-[#e8a87c]">.</span>
        </a>

        <nav className="hidden sm:flex items-center gap-6 text-[13px]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#7a7a7a] hover:text-[#ededec] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

      </div>
    </motion.header>
  );
}
