import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DLX ROI — Unlock Your Property's Hidden Potential",
  description:
    "DLX ROI identifies UK homes with underused outdoor space, side plots, corner plots, and hidden development potential. Request a free, no-obligation property review today.",
  keywords:
    "property development, garden development, plot split, land value, UK property opportunity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body className="bg-dlx-dark text-[#f0f0f5] antialiased">{children}</body>
    </html>
  );
}
