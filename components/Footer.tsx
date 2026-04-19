import { Mail, Phone } from "lucide-react";

const footerLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "What We Look For", href: "#what-we-look-for" },
  { label: "Why Contact Us", href: "#why-contact" },
  { label: "Request a Review", href: "#contact" },
  { label: "FAQs", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="bg-[#050509] border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="text-xl font-bold tracking-tight text-white mb-3">
              DLX <span className="text-dlx-gold">ROI</span>
            </div>
            <p className="text-[#505078] text-sm leading-relaxed max-w-xs">
              Identifying hidden property value across the UK. Premium analysis,
              thoughtful outreach, and no-pressure conversations.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-[#70709a] uppercase tracking-[0.15em] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#52527a] hover:text-dlx-gold transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-[#70709a] uppercase tracking-[0.15em] mb-4">
              Contact
            </h4>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href="mailto:hello@dlxroi.co.uk"
                  className="flex items-center gap-2.5 text-sm text-[#52527a] hover:text-dlx-gold transition-colors duration-200"
                >
                  <Mail size={13} className="flex-shrink-0" />
                  hello@dlxroi.co.uk
                </a>
              </li>
              <li>
                <a
                  href="tel:+441234567890"
                  className="flex items-center gap-2.5 text-sm text-[#52527a] hover:text-dlx-gold transition-colors duration-200"
                >
                  <Phone size={13} className="flex-shrink-0" />
                  +44 (0) 1234 567 890
                </a>
              </li>
            </ul>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-xs text-[#3e3e60] hover:text-[#7070a0] transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-xs text-[#3e3e60] hover:text-[#7070a0] transition-colors duration-200"
              >
                Terms of Use
              </a>
              <a
                href="#"
                className="text-xs text-[#3e3e60] hover:text-[#7070a0] transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-[#32324e]">
            &copy; {new Date().getFullYear()} DLX ROI. All rights reserved. Registered in England &amp; Wales.
          </p>
          <p className="text-xs text-[#28283e] text-right">
            All opportunity assessments are indicative only. Nothing on this site constitutes planning or legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
