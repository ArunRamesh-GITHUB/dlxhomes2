"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, UserCheck, MapPin, Clock, Lock, Search } from "lucide-react";

const points = [
  {
    icon: Shield,
    title: "The check is completely free",
    desc: "There is no cost at any stage. The Home Cooling Readiness Check is free — and there is no obligation to proceed with anything afterwards.",
  },
  {
    icon: UserCheck,
    title: "Honest, professional advice",
    desc: "If proper cooling doesn't make sense for your property, we'll tell you. We're not here to sell — we're here to give you an honest assessment.",
  },
  {
    icon: MapPin,
    title: "UK homes only",
    desc: "We work exclusively with residential properties in England and Wales, with a clear understanding of UK planning policy, conservation areas, and leasehold constraints.",
  },
  {
    icon: Clock,
    title: "Selected properties only",
    desc: "We don't contact every home in an area. We only reach out to properties where the public EPC and property data suggests a genuine cooling case.",
  },
  {
    icon: Lock,
    title: "Your data stays private",
    desc: "Any information you share with us is treated with complete confidence and is never passed to third parties without your explicit consent.",
  },
  {
    icon: Search,
    title: "Data-driven, not guesswork",
    desc: "Our selection is based on publicly available EPC and Land Registry data — structured, scored, and filtered. Not speculation or mass-blast outreach.",
  },
];

export default function Trust() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#07070f] via-[#0c0c1e] to-[#07070f]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-dlx-gold/[0.02] blur-[110px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-dlx-gold text-xs font-medium tracking-[0.2em] uppercase mb-4">
            Our Commitment
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5">
            What you can expect from us
          </h2>
          <p className="text-[#6060a0] text-base max-w-2xl mx-auto">
            Receiving a letter about your home can feel unexpected. Here&apos;s what you
            can always count on from DLX ROI — no pressure, no guesswork.
          </p>
        </motion.div>

        {/* Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {points.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.07 + i * 0.07 }}
                className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.08] transition-all duration-200"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-dlx-gold/[0.07] border border-dlx-gold/[0.13] flex items-center justify-center text-dlx-gold">
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1.5">{point.title}</h3>
                  <p className="text-[#56568a] text-xs leading-relaxed">{point.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
