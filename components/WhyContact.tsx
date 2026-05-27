"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Thermometer, Home, Lightbulb, MessageCircle } from "lucide-react";

const reasons = [
  {
    icon: Thermometer,
    title: "Their home was uncomfortable last summer",
    desc: "Too hot to sleep, work, or relax. Many homeowners manage with fans, not realising there may be a better long-term answer specific to their property.",
  },
  {
    icon: Lightbulb,
    title: "Wondering if AC would actually work for them",
    desc: "Not sure if it's worth it, where a unit would go, or whether planning or leasehold constraints apply. The free check answers these questions honestly.",
  },
  {
    icon: TrendingUp,
    title: "They've seen their EPC and want to understand it",
    desc: "A D, E, F, or G rating can signal a real comfort gap. We explain what it means in practice for summer heat — not just energy bills.",
  },
  {
    icon: Home,
    title: "They have an older or terraced property",
    desc: "Older and terraced homes can be particularly difficult to cool naturally. A targeted assessment shows whether passive improvements or a proper system makes more sense.",
  },
  {
    icon: MessageCircle,
    title: "Looking for honest advice, not a sales pitch",
    desc: "If proper cooling doesn't make sense for the property, we say so. There is no pressure to buy anything at any stage.",
  },
];

export default function WhyContact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-contact" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#07070f] via-[#0b0b1a] to-[#07070f]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-dlx-gold text-xs font-medium tracking-[0.2em] uppercase mb-4">
              Reasons
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Why homeowners
              <br />
              <span className="text-dlx-gold">request the check</span>
            </h2>
            <p className="text-[#6060a0] text-base leading-relaxed mb-8">
              People get in touch for different reasons. Most just want to understand
              what their options are — and whether proper cooling actually makes sense
              for their specific property.
            </p>
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-dlx-gold/[0.08] border border-dlx-gold/[0.22] text-dlx-gold text-sm font-medium hover:bg-dlx-gold/[0.14] transition-all duration-200"
            >
              Request your free check
            </button>
          </motion.div>

          {/* Right */}
          <div className="flex flex-col gap-3.5">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: 24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className="flex gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.08] transition-all duration-200"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-dlx-gold/[0.07] border border-dlx-gold/[0.12] flex items-center justify-center text-dlx-gold mt-0.5">
                    <Icon size={17} />
                  </div>
                  <div>
                    <h3 className="font-medium text-white text-sm mb-1">{reason.title}</h3>
                    <p className="text-[#58589a] text-xs leading-relaxed">{reason.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
