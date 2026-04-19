"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Eye, ArrowRight } from "lucide-react";

const concepts = [
  {
    label: "Garden Plot Split",
    subtitle: "Corner-plot property — rear garden",
    before: "Large underused rear garden",
    after: "Separated developable plot with independent access",
    accent: "#c9a84c",
    glowFrom: "#1a1200",
  },
  {
    label: "Side Land Opportunity",
    subtitle: "Semi-detached property — side access",
    before: "Narrow side plot, redundant space",
    after: "Planning-assessed gap site potential",
    accent: "#7b9aff",
    glowFrom: "#00051a",
  },
  {
    label: "Garden Room / Studio",
    subtitle: "Detached property — deep rear garden",
    before: "Deep garden beyond 30m",
    after: "Purpose-built garden office or studio concept",
    accent: "#5edcb4",
    glowFrom: "#001a0e",
  },
];

function ConceptCard({
  concept,
  index,
  inView,
}: {
  concept: (typeof concepts)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.12 }}
      className="group bg-[#0f0f1e] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/[0.1] transition-all duration-300 hover:shadow-[0_8px_50px_rgba(0,0,0,0.3)]"
    >
      {/* Visual panel */}
      <div className="relative h-52 flex overflow-hidden">
        {/* Before */}
        <div
          className="flex-1 flex flex-col items-center justify-center p-4 text-center border-r border-white/[0.04]"
          style={{
            background: `linear-gradient(135deg, ${concept.glowFrom}cc, #09091a)`,
          }}
        >
          <span className="text-[9px] font-medium tracking-[0.18em] uppercase text-white/20 mb-3">
            Before
          </span>
          {/* Abstract property shape */}
          <div className="w-24 aspect-[4/3] relative mx-auto">
            <div className="absolute inset-0 border border-white/[0.08] rounded bg-white/[0.015]" />
            <div className="absolute top-2 left-2 right-2 bottom-7 bg-white/[0.03] rounded-sm" />
            <div className="absolute bottom-0 left-2 right-2 h-6 border border-dashed border-white/[0.07] rounded-sm flex items-center justify-center">
              <span className="text-[7px] text-white/20">unused</span>
            </div>
          </div>
          <p className="text-[9px] text-white/20 mt-3 leading-tight">{concept.before}</p>
        </div>

        {/* Arrow badge */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0f0f1e] border border-white/[0.06] flex items-center justify-center z-10">
          <ArrowRight size={11} className="text-white/25" />
        </div>

        {/* After */}
        <div
          className="flex-1 flex flex-col items-center justify-center p-4 text-center"
          style={{
            background: `linear-gradient(135deg, ${concept.glowFrom}55, #0f0f1e)`,
          }}
        >
          <span
            className="text-[9px] font-medium tracking-[0.18em] uppercase mb-3"
            style={{ color: concept.accent + "80" }}
          >
            After
          </span>
          <div className="w-24 aspect-[4/3] relative mx-auto">
            <div
              className="absolute inset-0 border rounded"
              style={{
                borderColor: concept.accent + "30",
                backgroundColor: concept.accent + "06",
              }}
            />
            <div className="absolute top-2 left-2 right-[42%] bottom-7 bg-white/[0.03] rounded-sm" />
            <div
              className="absolute top-2 right-2 left-[60%] bottom-0 rounded-sm border"
              style={{
                borderColor: concept.accent + "45",
                backgroundColor: concept.accent + "09",
              }}
            />
            <div
              className="absolute top-2 right-2 w-2 h-2 rounded-full"
              style={{ backgroundColor: concept.accent }}
            />
          </div>
          <p
            className="text-[9px] mt-3 leading-tight"
            style={{ color: concept.accent + "bb" }}
          >
            {concept.after}
          </p>
        </div>
      </div>

      {/* Card footer */}
      <div className="px-5 py-4 border-t border-white/[0.04]">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-white text-sm mb-0.5">{concept.label}</h3>
            <p className="text-[#48489a] text-xs">{concept.subtitle}</p>
          </div>
          <div className="flex items-center gap-1 text-[10px] text-[#48489a] whitespace-nowrap">
            <Eye size={11} />
            Concept
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Visualisations() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="visualisations" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-[#07070f]" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-dlx-gold/[0.025] blur-[110px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-dlx-gold text-xs font-medium tracking-[0.2em] uppercase mb-4">
            Opportunity Concepts
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Seeing the potential
          </h2>
          <p className="text-[#6060a0] text-base max-w-2xl mx-auto">
            Every property is different. Our concept visuals help homeowners see what
            might be possible — making abstract ideas tangible and real.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {concepts.map((concept, i) => (
            <ConceptCard key={concept.label} concept={concept} index={i} inView={inView} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-xs text-[#3a3a60]"
        >
          All visuals are illustrative concept examples only. Actual outcomes vary and are
          subject to planning, site conditions, and other constraints.
        </motion.p>
      </div>
    </section>
  );
}
