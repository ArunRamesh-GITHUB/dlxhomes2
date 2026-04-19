"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, BarChart2, ImageIcon, MessageSquare, Handshake } from "lucide-react";

const steps = [
  {
    icon: Search,
    num: "01",
    title: "We Identify Opportunities",
    desc: "Using detailed analysis, we pinpoint residential properties across the UK that appear to have underused outdoor space, side plots, or development potential.",
  },
  {
    icon: BarChart2,
    num: "02",
    title: "We Assess the Potential",
    desc: "Our team reviews the property in detail — looking at plot size, access, local planning context, and what kind of opportunity may exist.",
  },
  {
    icon: ImageIcon,
    num: "03",
    title: "We Create Visualisations",
    desc: "We produce tailored concept visuals and a personalised opportunity report showing what might be achievable with the space.",
  },
  {
    icon: MessageSquare,
    num: "04",
    title: "Homeowner Gets in Touch",
    desc: "You receive our materials and, if you're curious, you choose to reach out. There's no pressure — we're simply opening a conversation.",
  },
  {
    icon: Handshake,
    num: "05",
    title: "We Discuss Next Steps",
    desc: "If there's mutual interest, we explore what the opportunity could look like and what your options might be. No hard sell, ever.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#07070f] via-[#0a0a18] to-[#07070f]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-dlx-gold text-xs font-medium tracking-[0.2em] uppercase mb-4">
            The Process
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5">
            How it works
          </h2>
          <p className="text-[#6060a0] text-base max-w-xl mx-auto">
            A clear, transparent process — from identification to conversation.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.09 }}
                className="relative group bg-[#0f0f1e] border border-white/[0.06] rounded-2xl p-5 hover:border-dlx-gold/20 transition-all duration-300 hover:shadow-[0_4px_30px_rgba(201,168,76,0.06)]"
              >
                {/* Connector */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-9 left-[calc(50%+32px)] right-[-50%] h-px bg-gradient-to-r from-dlx-gold/15 to-transparent z-0 pointer-events-none" />
                )}

                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-dlx-gold/[0.08] border border-dlx-gold/[0.14] flex items-center justify-center text-dlx-gold group-hover:bg-dlx-gold/[0.13] transition-colors">
                    <Icon size={20} />
                  </div>
                  <span className="text-[22px] font-bold text-white/[0.05] tabular-nums leading-none mt-0.5">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-semibold text-white text-sm mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-[#60609a] text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
