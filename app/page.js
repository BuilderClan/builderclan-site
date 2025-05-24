"use client";

import { motion, AnimatePresence } from "framer-motion";
import { lazy } from "react";

const HomeSection = lazy(() => import("@components/Home"));
const AboutSection = lazy(() => import("@components/About"));
const OpportunitySection = lazy(() => import("@components/Opportunity"));
const FaqSection = lazy(() => import("@components/Faq"));
const CTA = lazy(() => import("@components/CTA"));
// const ContactSection = lazy(() => import("@components/Contact"));
export default function Home() {
  return (
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
        <motion.hr
          initial={{ width: 0 }}
          whileInView={{
            width: "100%",
            borderColor: "#caff33",
            opacity: [0, 0.1, 0.5, 0.1],
          }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <AboutSection />
        <motion.hr
          initial={{ width: 0 }}
          whileInView={{
            width: "100%",
            borderColor: "#caff33",
            opacity: [0, 0.1, 0.5, 0.1],
          }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <OpportunitySection />
        <motion.hr
          initial={{ width: 0 }}
          whileInView={{
            width: "100%",
            borderColor: "#caff33",
            opacity: [0, 0.1, 0.5, 0.1],
          }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        {/* <ContactSection /> */}
        {/* <hr /> */}
        <FaqSection />
        <motion.hr
          initial={{ width: 0 }}
          whileInView={{
            width: "100%",
            borderColor: "#caff33",
            opacity: [0, 0.1, 0.5, 0.1],
          }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <CTA />
      </motion.div>
    </AnimatePresence>
  );
}
