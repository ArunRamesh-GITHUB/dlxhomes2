"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Banknote, Home, Lightbulb, MessageCircle } from "lucide-react";

const reasons = [
  {
    icon: Banknote,
    title: "Curious about what their land could be worth",
    desc: "Many homeowners have never had their full plot assessed. We help put a clearer picture on what might be possible — with no commitment required.",
  },
  {
    icon: TrendingUp,
    title: "Interested in exploring development potential",
    desc: "Whether it's a garden room, plot split, or understanding the local planning context — we help open that conversation.",
  },
  {
    icon: Home,
    title: "Considering selling part of their garden",
    desc: "For some homeowners, separating a portion of land can unlock significant value without having to move or fully downsize.",
  },
  {
    icon: Lightbulb,
    title: "Wanting ideas to increase property value",
    desc: "A fresh perspective on your property can reveal options you hadn't considered. That's exactly what we're here to provide.",
  },
  {
    icon: MessageCircle,
    title: "Looking for a no-pressure conversation",
    desc: "We're not here to push anyone into a decision. If you're simply curious, that's reason enough to get in touch.",
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
              Motivation
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Why homeowners
              <br />
              <span className="text-dlx-gold">contact us</span>
            </h2>
            <p className="text-[#6060a0] text-base leading-relaxed mb-8">
              People reach out for all sorts of reasons. Most simply want to understand
              what their property could be worth with a different approach — and that&apos;s
              exactly what we&apos;re here to explore together.
            </p>
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-dlx-gold/[0.08] border border-dlx-gold/[0.22] text-dlx-gold text-sm font-medium hover:bg-dlx-gold/[0.14] transition-all duration-200"
            >
              Start a conversation
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
