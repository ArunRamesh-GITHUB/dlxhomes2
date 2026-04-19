"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Why did I receive a postcard from DLX ROI?",
    a: "We proactively identify properties across the UK that appear to have interesting outdoor space, land, or development characteristics. If you received a postcard, it's because your property caught our attention during our analysis. There is absolutely no obligation to respond — we're simply making you aware that we see potential, and inviting a conversation if you're curious.",
  },
  {
    q: "Does receiving your materials mean I can definitely build on my land?",
    a: "Not at all. Our outreach is based on initial analysis and visual assessment. Whether any development, plot split, or improvement is actually possible depends on many factors — including local planning policy, the local authority's decisions, site conditions, and more. We help you understand what might be worth exploring. Nothing is guaranteed.",
  },
  {
    q: "Do I need planning permission to do anything with my land?",
    a: "In most cases, yes. Any significant change of use, new dwelling, or substantial outbuilding will require planning permission from your local planning authority. Some smaller structures may fall under permitted development rights. We're not planning consultants and cannot advise on planning outcomes, but we can help you understand what kind of opportunity may exist and point you toward the right professionals.",
  },
  {
    q: "Am I under any obligation if I get in touch?",
    a: "Absolutely not. Getting in touch is completely no-obligation. We'll have a friendly conversation about your property, discuss what we've identified, and explore whether there's any mutual interest. You're under no pressure at any stage, and you can end the conversation at any point.",
  },
  {
    q: "What kinds of properties do you focus on?",
    a: "We look for residential properties in the UK with specific characteristics — large rear gardens, corner plots, side land, wide frontages, deep plots, and similar features that suggest there may be untapped value. We don't have a one-size-fits-all approach; each property is assessed individually before we reach out.",
  },
  {
    q: "Do you work across the whole of the UK?",
    a: "We primarily focus on residential properties across England and Wales, where permitted development rights and planning policy are broadly consistent. We're continually expanding our activity to new areas. If you've received contact from us, we are actively working in your region.",
  },
];

function FAQItem({ faq }: { faq: (typeof faqs)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.05] last:border-0">
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
              ? "border-dlx-gold/40 text-dlx-gold bg-dlx-gold/[0.06]"
              : "border-white/[0.08] text-[#6060a0] group-hover:border-dlx-gold/25 group-hover:text-dlx-gold"
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
            <p className="pb-5 text-sm text-[#5e5e98] leading-relaxed">{faq.a}</p>
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
      <div className="absolute inset-0 bg-gradient-to-b from-[#07070f] via-[#0a0a18] to-[#07070f]" />

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
          <p className="text-[#6060a0] text-base">
            Common questions from homeowners who&apos;ve received our materials or come
            across DLX ROI.
          </p>
        </motion.div>

        {/* FAQ list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-[#0f0f1e] border border-white/[0.06] rounded-2xl px-6 sm:px-8"
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
          <p className="text-sm text-[#50509a] mb-3">
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
