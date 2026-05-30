import type { Metadata } from "next";
import { Thermometer, CheckCircle2 } from "lucide-react";
import CoolingForm from "./CoolingForm";

export const metadata: Metadata = {
  title: "Free Home Cooling Readiness Check — DLX ROI",
  description:
    "Request your free Home Cooling Readiness Check. We assess whether AC, a heat pump, or passive improvements are the right answer for your property — at no cost and no obligation.",
};

const checkItems = [
  "Which rooms are most likely to become uncomfortable first",
  "Whether fans, open windows, or passive cooling are likely to be enough",
  "Whether insulation, ventilation, or shading improvements may help",
  "Whether a modern AC / air-to-air heat pump system may be suitable",
  "Where a system could realistically go",
  "What the sensible long-term options are for this property",
];

export default async function CoolingPage({
  searchParams,
}: {
  searchParams: Promise<{ ref?: string; campaign?: string }>;
}) {
  const { ref = "" } = await searchParams;

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-[#1a1a2e]">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-amber-100/60 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 py-14 sm:py-20">
        {/* Logo */}
        <div className="mb-12 text-xl font-bold tracking-tight text-[#1a1a2e]">
          DLX <span className="text-dlx-gold">ROI</span>
        </div>

        {/* Heading */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-dlx-gold/30 bg-amber-50 text-dlx-gold text-xs font-medium tracking-[0.14em] uppercase mb-6">
            <Thermometer size={11} />
            Home Cooling Assessment
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-5 text-[#1a1a2e]">
            Did this home get too hot
            <br />
            <span className="text-dlx-gold">during the recent heatwave?</span>
          </h1>
          <p className="text-stone-500 text-base sm:text-lg leading-relaxed max-w-2xl">
            Fans move warm air around. They do not properly cool the room.
            Register your interest and we&apos;ll assess what the right
            long-term answer is for your specific property.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* What the check covers */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-stone-200 rounded-2xl p-6">
              <h2 className="font-semibold text-[#1a1a2e] text-sm mb-4">
                What a cooling assessment covers
              </h2>
              <ul className="space-y-3">
                {checkItems.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <CheckCircle2
                      size={14}
                      className="text-dlx-gold flex-shrink-0 mt-0.5"
                    />
                    <span className="text-stone-500 text-xs leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-stone-200 rounded-2xl p-6">
              <p className="text-xs text-stone-500 leading-relaxed">
                <strong className="text-stone-600">Small print:</strong> This is based on
                publicly available EPC data and is not a survey, valuation, quote, guarantee,
                or professional recommendation. Cooling, AC, or heat pump installations may
                be subject to suitability, planning, noise, leasehold, conservation-area, or
                listed-building checks. DLX ROI does not install AC systems.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm">
            <CoolingForm campaignRef={ref} />
          </div>
        </div>
      </div>
    </div>
  );
}
