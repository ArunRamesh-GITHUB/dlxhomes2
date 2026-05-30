"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, BarChart2, MessageSquare, ImageIcon, Handshake } from "lucide-react";

const steps = [
  { icon: Search, num: "01", title: "We Analyse the Data", desc: "Using publicly available EPC and Land Registry data, we identify UK homes that may be harder to cool naturally — based on ratings, age, and property type." },
  { icon: BarChart2, num: "02", title: "We Score Each Property", desc: "Our summer cooling score assesses EPC rating, improvement potential, construction age, property type, and planning context to find the strongest candidates." },
  { icon: MessageSquare, num: "03", title: "We Send a Letter", desc: "Selected homeowners receive a personalised letter explaining what the public data suggests and offering a Free Home Cooling Readiness Check." },
  { icon: ImageIcon, num: "04", title: "You Request a Check", desc: "If you're curious, you request the free check — no obligation. We look at your property specifically, not a generic assessment." },
  { icon: Handshake, num: "05", title: "We Assess Your Options", desc: "We honestly assess what suits your property: passive cooling, ventilation improvements, solar shading, or an AC / air-to-air heat pump system. If it isn't right, we'll say so." },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="py-24 sm:py-32 relative overflow-hidden bg-white">
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-dlx-gold text-xs font-medium tracking-[0.2em] uppercase mb-4">The Process</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5 text-[#1a1a2e]">How it works</h2>
          <p className="text-stone-500 text-base max-w-xl mx-auto">From data analysis to an honest assessment of your home — a clear, no-pressure process.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.09 }}
                className="relative group bg-[#f8f7f4] border border-stone-200 rounded-2xl p-5 hover:border-amber-300 transition-all duration-300 hover:shadow-md"
              >
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-9 left-[calc(50%+32px)] right-[-50%] h-px bg-gradient-to-r from-amber-200 to-transparent z-0 pointer-events-none" />
                )}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-dlx-gold group-hover:bg-amber-100 transition-colors">
                    <Icon size={20} />
                  </div>
                  <span className="text-[22px] font-bold text-stone-200 tabular-nums leading-none mt-0.5">{step.num}</span>
                </div>
                <h3 className="font-semibold text-[#1a1a2e] text-sm mb-2 leading-snug">{step.title}</h3>
                <p className="text-stone-500 text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
