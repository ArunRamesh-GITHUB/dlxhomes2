"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Trees,
  CornerRightDown,
  LayoutGrid,
  Maximize2,
  Building2,
  Ruler,
} from "lucide-react";

const items = [
  {
    icon: Trees,
    title: "Large Rear Gardens",
    desc: "Properties where the rear garden offers substantial space — potentially enough to be split, developed, or used for a significant outbuilding or garden room.",
  },
  {
    icon: CornerRightDown,
    title: "Corner Plots",
    desc: "Corner-positioned homes often have additional land wrapping the side and rear, offering surprising development and access opportunities.",
  },
  {
    icon: LayoutGrid,
    title: "Side Land & Passageways",
    desc: "Wide side access or additional side plots adjacent to the main property — sometimes substantial enough to be used or separated independently.",
  },
  {
    icon: Maximize2,
    title: "Wide Frontage Plots",
    desc: "Properties sitting on unusually wide plots may have scope for garden divisions, additional driveways, or potential plot subdivision.",
  },
  {
    icon: Building2,
    title: "Infill Opportunities",
    desc: "Gaps between established properties or at the end of a terrace can sometimes accommodate a new dwelling or purpose-built structure.",
  },
  {
    icon: Ruler,
    title: "Extension & Garden Room Potential",
    desc: "Homes with clear space to extend outward, or land that could accommodate a garden office, studio, or similar purpose-built structure.",
  },
];

export default function WhatWeLookFor() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="what-we-look-for" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-[#07070f]" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-dlx-gold/[0.025] blur-[90px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-dlx-gold text-xs font-medium tracking-[0.2em] uppercase mb-4">
            Criteria
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5">
            What we look for
          </h2>
          <p className="text-[#6060a0] text-base max-w-2xl mx-auto">
            We focus on residential properties with specific characteristics that suggest
            untapped potential. Here&apos;s what catches our attention.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 + i * 0.08 }}
                className="group bg-[#0f0f1e] border border-white/[0.06] rounded-2xl p-6 hover:border-dlx-gold/[0.22] transition-all duration-300 hover:shadow-[0_4px_40px_rgba(201,168,76,0.07)] hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl bg-dlx-gold/[0.08] border border-dlx-gold/[0.14] flex items-center justify-center text-dlx-gold mb-5 group-hover:bg-dlx-gold/[0.13] transition-colors duration-200">
                  <Icon size={22} />
                </div>
                <h3 className="font-semibold text-white text-base mb-2">{item.title}</h3>
                <p className="text-[#60609a] text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
