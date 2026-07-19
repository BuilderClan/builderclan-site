"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="section px-4 py-12 bg-[#141414]" id="joinclan">
      <div className="container mx-auto">
        <div className="relative rounded-2xl bg-[#1c1c1c] border border-[#262626] p-8 sm:p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#caff33]/5 blur-3xl pointer-events-none rounded-full" />

          {/* Left Text Content */}
          <div className="text-center md:text-left max-w-xl relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2.5 tracking-tight">
              Ready to build together with <span className="text-[#caff33]">BuilderClan?</span>
            </h2>
            <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
              Join our official Discord community and start collaborating with 500+ builders worldwide.
            </p>
          </div>

          {/* Single Focused Action Button */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="relative z-10 shrink-0"
          >
            <a
              href="https://discord.gg/GFnBvjc5tj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#caff33] hover:bg-[#bce62e] text-[#1c1c1c] font-semibold text-sm transition-all shadow-md"
            >
              <span>Join Discord Community</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
