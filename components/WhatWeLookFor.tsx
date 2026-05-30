"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, TrendingUp, Calendar, Home, ShieldOff, Banknote } from "lucide-react";

const items = [
  { icon: Zap, title: "Poor EPC Ratings (D–G)", desc: "Properties with energy performance ratings of D, E, F, or G are more likely to have a comfort gap between current efficiency and what's possible — making a cooling review worthwhile." },
  { icon: TrendingUp, title: "High Improvement Potential", desc: "Homes where the EPC shows a large gap between current and potential rating. A significant improvement gap often signals underperforming insulation, ventilation, or glazing." },
  { icon: Calendar, title: "Older Construction", desc: "Properties built before 1980 pre-date modern insulation and ventilation standards. Older homes can be particularly sensitive to summer heat and may have more to gain from a targeted review." },
  { icon: Home, title: "Terraced & Semi-Detached Homes", desc: "Terraced and semi-detached properties can be harder to cool naturally due to limited external wall exposure and restricted airflow — especially in older builds." },
  { icon: ShieldOff, title: "No Restrictive Planning Constraints", desc: "Properties not in conservation areas, flood zones, or near listed buildings, where AC or heat pump installations are more likely to be straightforward." },
  { icon: Banknote, title: "Mid-Range Property Values", desc: "Homes priced at or below the local sector median — where a cooling upgrade can represent strong value relative to the overall property." },
];

export default function WhatWeLookFor() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="what-we-look-for" className="py-24 sm:py-32 relative bg-[#f8f7f4]">
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-dlx-gold text-xs font-medium tracking-[0.2em] uppercase mb-4">Criteria</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5 text-[#1a1a2e]">What we look for</h2>
          <p className="text-stone-500 text-base max-w-2xl mx-auto">We use publicly available EPC and property data to identify homes that may benefit most from a cooling readiness review.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 + i * 0.08 }}
                className="group bg-white border border-stone-200 rounded-2xl p-6 hover:border-amber-300 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-dlx-gold mb-5 group-hover:bg-amber-100 transition-colors duration-200">
                  <Icon size={22} />
                </div>
                <h3 className="font-semibold text-[#1a1a2e] text-base mb-2">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
