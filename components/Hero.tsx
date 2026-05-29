"use client";

import { motion } from "framer-motion";
import { ArrowRight, Thermometer } from "lucide-react";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Base background */}
      <div className="absolute inset-0 bg-[#060e1e]" />

      {/* Radial amber glow */}
      <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-dlx-gold/[0.06] blur-[130px] pointer-events-none" />
      <div className="absolute top-1/4 right-[-5%] w-[350px] h-[350px] rounded-full bg-blue-600/[0.08] blur-[100px] pointer-events-none" />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-[#060e1e] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-dlx-gold/30 bg-dlx-gold/[0.08] text-dlx-gold text-xs font-medium tracking-[0.14em] uppercase mb-8"
        >
          <Thermometer size={11} />
          UK Home Cooling Specialists
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold tracking-tight leading-[1.08] mb-6"
        >
          Did your home get{" "}
          <span className="relative inline-block text-dlx-gold">
            too hot
            <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dlx-gold/60 to-transparent" />
          </span>
          <br />
          <span className="text-[#94a3b8]">this summer?</span>
        </motion.h1>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.36 }}
          className="text-base sm:text-lg text-[#5e82a0] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          DLX ROI analyses publicly available EPC and property data to identify homes
          that may be harder to cool naturally. We offer a free Home Cooling Readiness
          Check — so you can understand your real options before the next heatwave.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => scrollTo("contact")}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-dlx-gold text-[#060e1e] font-semibold text-base hover:bg-dlx-gold-light transition-all duration-200 shadow-[0_0_32px_rgba(240,165,0,0.32)] hover:shadow-[0_0_48px_rgba(240,165,0,0.48)]"
          >
            Request Free Cooling Check
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </button>
          <button
            onClick={() => scrollTo("how-it-works")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/[0.14] text-[#7a9ab5] text-base hover:text-white hover:border-white/[0.28] transition-all duration-200 hover:bg-white/[0.04]"
          >
            See How It Works
          </button>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-x-7 gap-y-3 text-xs text-[#4a6e8f]"
        >
          {[
            "Free check, no obligation",
            "EPC-data driven",
            "UK homes only",
            "Selected properties only",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-dlx-gold/55 flex-shrink-0" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-14 bg-gradient-to-b from-transparent via-dlx-gold/45 to-transparent"
        />
      </motion.div>
    </section>
  );
}
