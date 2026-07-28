"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import CampusHero from "./sections/CampusHero";
import CampusWhyStart from "./sections/CampusWhyStart";
import CampusHowItWorks from "./sections/CampusHowItWorks";
import CampusAudience from "./sections/CampusAudience";
import CampusDirectory from "./sections/CampusDirectory";
import CampusCtaBanner from "./sections/CampusCtaBanner";

export default function CampusContent() {
  return (
    <div className="bg-[#141414] min-h-screen text-white relative overflow-hidden">
      <header className="fixed w-full top-3 sm:top-0 left-0 z-50">
        <Header />
      </header>

      {/* Subtle Ambient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-gradient-to-b from-[#caff33]/10 via-transparent to-transparent pointer-events-none blur-3xl" />

      <main className="mt-[100px] sm:mt-[108px] pb-16 relative z-10">
        <CampusHero />
        <CampusWhyStart />
        <CampusHowItWorks />
        <CampusAudience />
        <CampusDirectory />
        <CampusCtaBanner />
      </main>

      <Footer />
      <div className="fixed z-10">
        <BackToTop />
      </div>
    </div>
  );
}
