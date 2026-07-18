"use client";

import { motion, AnimatePresence } from "framer-motion";
import { lazy } from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import BackToTop from "@components/BackToTop";

const HomeSection = lazy(() => import("@components/Home"));
const AboutSection = lazy(() => import("@components/About"));
const OpportunitySection = lazy(() => import("@components/Opportunity"));
const FaqSection = lazy(() => import("@components/Faq"));
const CTA = lazy(() => import("@components/CTA"));
// const ContactSection = lazy(() => import("@components/Contact"));

export default function Home() {
  return (
    <>
      <div className="fixed w-full top-3 sm:top-0 left-0 z-50">
        <Header />
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key="main-content"
          className="mt-[93px]"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
          <HomeSection />
          <AboutSection />
          <OpportunitySection />
          {/* <ContactSection /> */}
          {/* <hr /> */}
          <FaqSection />
          <CTA />
        </motion.div>
      </AnimatePresence>
      <Footer />
      <div className="fixed z-10">
        <BackToTop />
      </div>
    </>
  );
}
