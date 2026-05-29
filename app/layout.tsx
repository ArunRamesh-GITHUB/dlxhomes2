import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DLX ROI — Free Home Cooling Readiness Check",
  description:
    "DLX ROI uses EPC and property data to identify UK homes that may be harder to cool naturally. Request a free, no-obligation Home Cooling Readiness Check today.",
  keywords:
    "home cooling, AC installation, air conditioning UK, heat pump, EPC rating, summer heat, home comfort",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body className="bg-dlx-dark text-[#f0f4f8] antialiased">{children}</body>
    </html>
  );
}
