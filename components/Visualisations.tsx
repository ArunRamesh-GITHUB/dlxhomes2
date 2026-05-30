"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Thermometer, Wind, Zap } from "lucide-react";

const concepts = [
  {
    label: "EPC Rating & Improvement Gap",
    subtitle: "How we score cooling potential",
    icon: Zap,
    accent: "#f0a500",
    glowFrom: "#1a0e00",
    bands: [
      { label: "G", pts: 30, active: true },
      { label: "F", pts: 25, active: true },
      { label: "E", pts: 20, active: true },
      { label: "D", pts: 12, active: true },
      { label: "C", pts: 5, active: false },
    ],
    detail: "A larger gap between current and potential EPC adds up to +15 points to the cooling score.",
  },
  {
    label: "Property Type & Age",
    subtitle: "Construction factors we assess",
    icon: Thermometer,
    accent: "#60a5fa",
    glowFrom: "#001228",
    bands: [
      { label: "Pre-1930", pts: 15, active: true },
      { label: "Pre-1980", pts: 15, active: true },
      { label: "Terraced", pts: 10, active: true },
      { label: "Semi-det", pts: 8, active: true },
      { label: "Post-2000", pts: 0, active: false },
    ],
    detail: "Older terraced and semi-detached homes score highest — they're hardest to cool naturally.",
  },
  {
    label: "Planning & Data Confidence",
    subtitle: "Flags that affect eligibility",
    icon: Wind,
    accent: "#34d399",
    glowFrom: "#001a10",
    bands: [
      { label: "No constraints", pts: 5, active: true },
      { label: "High confidence", pts: 10, active: true },
      { label: "Conservation", pts: 0, active: false },
      { label: "Listed bldg", pts: 0, active: false },
      { label: "Flood zone 3", pts: 0, active: false },
    ],
    detail: "Conservation areas, listed buildings, and flood zones reduce eligibility for straightforward installations.",
  },
];

function ScoreCard({
  concept,
  index,
  inView,
}: {
  concept: (typeof concepts)[0];
  index: number;
  inView: boolean;
}) {
  const Icon = concept.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.12 }}
      className="group bg-white border border-stone-200 rounded-2xl overflow-hidden hover:border-stone-300 transition-all duration-300 hover:shadow-md"
    >
      {/* Header */}
      <div className="px-5 pt-5 pb-4 border-b border-stone-100 bg-[#f8f7f4]">
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{
              backgroundColor: concept.accent + "18",
              border: `1px solid ${concept.accent}40`,
              color: concept.accent,
            }}
          >
            <Icon size={17} />
          </div>
          <div>
            <h3 className="font-semibold text-[#1a1a2e] text-sm leading-snug">{concept.label}</h3>
            <p className="text-[9px] text-stone-400 mt-0.5">{concept.subtitle}</p>
          </div>
        </div>

        {/* Score bars */}
        <div className="space-y-2 mt-4">
          {concept.bands.map((band) => (
            <div key={band.label} className="flex items-center gap-2.5">
              <span
                className="text-[10px] w-20 flex-shrink-0"
                style={{ color: band.active ? concept.accent : "#c7c3bd" }}
              >
                {band.label}
              </span>
              <div className="flex-1 h-1.5 rounded-full bg-stone-200 overflow-hidden">
                {band.pts > 0 && (
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${(band.pts / 30) * 100}%`,
                      backgroundColor: band.active ? concept.accent : "#d1cdc6",
                    }}
                  />
                )}
              </div>
              <span
                className="text-[10px] w-8 text-right flex-shrink-0 tabular-nums"
                style={{ color: band.active && band.pts > 0 ? concept.accent : "#c7c3bd" }}
              >
                {band.pts > 0 ? `+${band.pts}` : "—"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-4">
        <p className="text-[11px] text-stone-500 leading-relaxed">{concept.detail}</p>
      </div>
    </motion.div>
  );
}

export default function Visualisations() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="visualisations" className="py-24 sm:py-32 relative bg-white">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-amber-100/60 blur-[110px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-dlx-gold text-xs font-medium tracking-[0.2em] uppercase mb-4">
            How We Score
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5 text-[#1a1a2e]">
            The summer cooling score
          </h2>
          <p className="text-stone-500 text-base max-w-2xl mx-auto">
            Every property we contact has been assessed against a structured scoring model
            built from publicly available EPC and property data. Here&apos;s what goes into it.
          </p>
        </motion.div>

        {/* Score cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {concepts.map((concept, i) => (
            <ScoreCard key={concept.label} concept={concept} index={i} inView={inView} />
          ))}
        </div>

        {/* Band legend */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-[#f8f7f4] border border-stone-200 rounded-2xl p-6"
        >
          <p className="text-xs text-stone-500 text-center mb-5 tracking-wide uppercase font-medium">Score bands (0–100)</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { band: "A — Strong lead", range: "70–100", color: "#f0a500" },
              { band: "B — Good lead", range: "50–69", color: "#60a5fa" },
              { band: "C — Possible lead", range: "30–49", color: "#34d399" },
              { band: "D — Poor fit", range: "0–29", color: "#a8b4c0" },
            ].map((b) => (
              <div key={b.band} className="flex items-center gap-3">
                <div
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: b.color }}
                />
                <div>
                  <p className="text-xs font-medium text-stone-700">{b.band}</p>
                  <p className="text-[10px] text-stone-400">{b.range} pts</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="text-center text-xs text-stone-400 mt-6"
        >
          Scores are based on publicly available EPC and Land Registry data only. They are
          indicative, not a professional assessment. A qualified professional should inspect
          the property before any decisions are made.
        </motion.p>
      </div>
    </section>
  );
}
