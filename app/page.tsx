import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhatWeLookFor from "@/components/WhatWeLookFor";
import WhyContact from "@/components/WhyContact";
import Visualisations from "@/components/Visualisations";
import Trust from "@/components/Trust";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <WhatWeLookFor />
        <WhyContact />
        <Visualisations />
        <Trust />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
