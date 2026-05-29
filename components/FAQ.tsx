"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Why did I receive a letter from DLX ROI?",
    a: "We analyse publicly available EPC and Land Registry data to identify homes that may be harder to cool naturally. If you received a letter, it's because your property's EPC rating, construction age, or property type suggests it may benefit from a cooling review. There is no obligation to respond — we're simply letting you know, and inviting a conversation if you're curious.",
  },
  {
    q: "Does this mean my home definitely has a cooling problem?",
    a: "Not at all. Our letter is based on publicly available EPC and property data — it is not a survey, inspection, or professional assessment. It means your property scored well on our cooling indicators and may be worth reviewing before the next hot spell. The free check is how we find out what's actually relevant for your specific home.",
  },
  {
    q: "Is the Home Cooling Readiness Check really free?",
    a: "Yes, completely. The check costs nothing and carries no obligation. We look at which rooms are most likely to overheat, whether passive improvements or an AC / heat pump system may be suitable, and where a unit could realistically go. If proper cooling isn't the right answer for your property, we'll say so — and there's nothing to pay.",
  },
  {
    q: "Will I need planning permission for AC or a heat pump?",
    a: "In many cases, air-to-air heat pump and split-system AC installations fall under permitted development rights for houses and do not require a planning application. However, conservation areas, Article 4 directions, listed buildings, leasehold terms, and noise constraints can all affect this. Our check helps identify which of these may apply to your property before you spend any money.",
  },
  {
    q: "What types of properties do you focus on?",
    a: "We focus on freehold houses across England and Wales with EPC ratings of D, E, F, or G, particularly older and terraced or semi-detached homes where natural cooling is more limited. We exclude flats, leaseholds, and properties in flood zone 3, as these have specific constraints that change the analysis significantly.",
  },
  {
    q: "Do you cover the whole of the UK?",
    a: "We currently focus on residential properties across England and Wales, where EPC data from the Open Data Communities registry is available and planning policy is broadly consistent. If you received a letter from us, we are actively working in your area.",
  },
];

function FAQItem({ faq }: { faq: (typeof faqs)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.07] last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="text-sm sm:text-base font-medium text-white/80 group-hover:text-white transition-colors duration-200">
          {faq.q}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-200 ${
            open
              ? "border-dlx-gold/45 text-dlx-gold bg-dlx-gold/[0.08]"
              : "border-white/[0.10] text-[#4a6e8f] group-hover:border-dlx-gold/30 group-hover:text-dlx-gold"
          }`}
        >
          {open ? <Minus size={12} /> : <Plus size={12} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-[#4a6e8f] leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#060e1e] via-[#091828] to-[#060e1e]" />

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-dlx-gold text-xs font-medium tracking-[0.2em] uppercase mb-4">
            Questions
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Frequently asked questions
          </h2>
          <p className="text-[#4a6e8f] text-base">
            Common questions from homeowners who&apos;ve received our letter or come
            across DLX ROI.
          </p>
        </motion.div>

        {/* FAQ list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-[#0c1d32] border border-white/[0.08] rounded-2xl px-6 sm:px-8"
        >
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} />
          ))}
        </motion.div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-[#3d6080] mb-3">
            Still have a question not answered here?
          </p>
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-sm text-dlx-gold hover:text-dlx-gold-light underline underline-offset-4 transition-colors duration-200"
          >
            Get in touch directly →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
