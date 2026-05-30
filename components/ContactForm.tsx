"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  postcode: string;
  message: string;
  receivedLetter: boolean;
};

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-white border border-stone-200 text-stone-700 placeholder-stone-400 text-sm focus:outline-none focus:border-dlx-gold focus:ring-1 focus:ring-dlx-gold/20 transition-all duration-200";

export default function ContactForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    message: "",
    receivedLetter: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
    try {
      if (formspreeId) {
        await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ ...form, source: "website_contact_form" }),
        });
      }
    } catch {
      // show success regardless
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#f8f7f4]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] rounded-full bg-amber-100/50 blur-[130px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-dlx-gold text-xs font-medium tracking-[0.2em] uppercase mb-4">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Request your free cooling check
          </h2>
          <p className="text-stone-500 text-base max-w-xl mx-auto">
            Tell us about your property and we&apos;ll be in touch to arrange your
            Free Home Cooling Readiness Check. No cost, no obligation.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm"
        >
          {submitted ? (
            <div className="p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-dlx-gold/[0.10] border border-dlx-gold/30 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={28} className="text-dlx-gold" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a1a2e] mb-3">
                Thank you — we&apos;ll be in touch shortly
              </h3>
              <p className="text-stone-500 text-base max-w-md mx-auto leading-relaxed">
                We&apos;ve received your request for a Free Home Cooling Readiness Check.
                We&apos;ll review your property details and contact you to arrange the next step.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-7 sm:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-medium text-stone-500 mb-2 tracking-wide">
                    Full Name <span className="text-dlx-gold">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Smith"
                    className={inputClass}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-medium text-stone-500 mb-2 tracking-wide">
                    Email Address <span className="text-dlx-gold">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="jane@example.com"
                    className={inputClass}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-medium text-stone-500 mb-2 tracking-wide">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="07700 900000"
                    className={inputClass}
                  />
                </div>

                {/* Postcode */}
                <div>
                  <label className="block text-xs font-medium text-stone-500 mb-2 tracking-wide">
                    Property Postcode <span className="text-dlx-gold">*</span>
                  </label>
                  <input
                    type="text"
                    name="postcode"
                    value={form.postcode}
                    onChange={handleChange}
                    required
                    placeholder="SW1A 1AA"
                    className={`${inputClass} uppercase`}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-5">
                <label className="block text-xs font-medium text-[#6a90b0] mb-2 tracking-wide">
                  Tell Us About Your Property
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="E.g. My home gets very hot in summer / I have an older terraced house / I received your letter and want to find out more..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Letter checkbox */}
              <div className="mb-8">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex-shrink-0">
                    <input
                      type="checkbox"
                      name="receivedLetter"
                      checked={form.receivedLetter}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div
                      className={`w-5 h-5 rounded-md border transition-all duration-200 flex items-center justify-center ${
                        form.receivedLetter
                          ? "bg-dlx-gold border-dlx-gold"
                          : "border-stone-300 bg-white group-hover:border-stone-400"
                      }`}
                    >
                      {form.receivedLetter && (
                        <svg
                          width="10"
                          height="8"
                          viewBox="0 0 10 8"
                          fill="none"
                          aria-hidden
                        >
                          <path
                            d="M1 4L3.5 6.5L9 1"
                            stroke="#f8f7f4"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-sm text-stone-500 group-hover:text-stone-700 transition-colors">
                    I received a letter from DLX ROI
                  </span>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-dlx-gold text-white font-semibold text-base hover:bg-dlx-gold-light transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <svg
                      className="animate-spin w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="3"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending Enquiry...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send My Enquiry
                  </>
                )}
              </button>

              <p className="text-center text-xs text-stone-400 mt-4 leading-relaxed">
                By submitting this form you agree to us contacting you regarding your
                enquiry. We will never share your details with third parties.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
