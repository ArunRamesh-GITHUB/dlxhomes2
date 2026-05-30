"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-[#f8f7f4] border border-stone-200 text-stone-700 placeholder-stone-400 text-sm focus:outline-none focus:border-dlx-gold focus:ring-1 focus:ring-dlx-gold/20 transition-all duration-200";

export default function CoolingForm({ campaignRef }: { campaignRef: string }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("/api/cooling-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          postcode: form.postcode,
          message: form.message,
          campaign_reference: campaignRef,
          source: "summer_cooling_letter",
          submitted_at: new Date().toISOString(),
        }),
      });
    } catch {
      // still show success
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-dlx-gold/[0.10] border border-dlx-gold/30 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={28} className="text-dlx-gold" />
        </div>
        <h3 className="text-2xl font-bold text-[#1a1a2e] mb-3">
          Request received — we&apos;ll be in touch
        </h3>
        <p className="text-stone-500 text-base max-w-md mx-auto leading-relaxed">
          We&apos;ve got your interest registered. We&apos;ll review your details and
          contact you to discuss the cooling options for your property.
        </p>
        {campaignRef && (
          <p className="mt-4 text-xs text-stone-400">Reference: {campaignRef}</p>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-7 sm:p-10">
      {campaignRef && (
        <div className="mb-6 px-4 py-2.5 rounded-lg bg-dlx-gold/[0.07] border border-dlx-gold/[0.18] text-xs text-dlx-gold">
          Your reference: <span className="font-semibold">{campaignRef}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
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

      <div className="mb-8">
        <label className="block text-xs font-medium text-[#6a90b0] mb-2 tracking-wide">
          Anything else you&apos;d like us to know?
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={3}
          placeholder="E.g. which rooms get hottest, whether you have AC already, any planning or leasehold questions..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-dlx-gold text-white font-semibold text-base hover:bg-dlx-gold-light transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? (
          <>
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Register My Interest
          </>
        )}
      </button>

      <p className="text-center text-xs text-stone-400 mt-4 leading-relaxed">
        By submitting this form you agree to us contacting you regarding your enquiry.
        We will never share your details with third parties.
      </p>
    </form>
  );
}
