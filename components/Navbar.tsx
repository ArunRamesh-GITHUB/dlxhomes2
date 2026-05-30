"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "What We Look For", href: "#what-we-look-for" },
  { label: "Why Request a Check", href: "#why-contact" },
  { label: "FAQ", href: "#faq" },
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href: string) => {
    setMobileOpen(false);
    scrollTo(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xl font-bold tracking-tight text-[#1a1a2e]"
        >
          DLX <span className="text-dlx-gold">ROI</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLink(link.href)}
              className="text-sm text-stone-500 hover:text-[#1a1a2e] transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => handleLink("#contact")}
          className="hidden md:inline-flex items-center px-5 py-2 text-sm font-semibold rounded-full bg-dlx-gold text-white hover:bg-dlx-gold-light transition-all duration-200 shadow-sm"
        >
          Free Cooling Check
        </button>

        <button
          className="md:hidden text-[#1a1a2e] p-1"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden overflow-hidden bg-white border-b border-stone-200 shadow-sm"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLink(link.href)}
                  className="text-left px-3 py-3 text-sm text-stone-500 hover:text-[#1a1a2e] hover:bg-stone-50 rounded-lg transition-all duration-150"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleLink("#contact")}
                className="mt-3 px-5 py-3 text-sm font-semibold rounded-full bg-dlx-gold text-white hover:bg-dlx-gold-light transition-all duration-200 text-center"
              >
                Free Cooling Check
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
