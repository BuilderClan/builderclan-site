"use client";

import { motion } from "framer-motion";
import { FolderGit2, Terminal, Lightbulb, Globe, Sparkles, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function OpportunitySection() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const opportunities = [
    {
      num: "01",
      icon: FolderGit2,
      title: "Open-Source Projects",
      description:
        "Collaborate on real-world open-source software, sharpen your skills, and build a standout developer portfolio that impresses recruiters.",
      badge: "Hands-on",
    },
    {
      num: "02",
      icon: Terminal,
      title: "Workshops & Hackathons",
      description:
        "Gain practical technical skills through interactive live coding sessions, competitive hackathons, and deep-dive technical workshops.",
      badge: "Interactive",
    },
    {
      num: "03",
      icon: Lightbulb,
      title: "Product Incubator",
      description:
        "Turn your creative ideas into production-ready web and mobile applications with 1-on-1 community mentorship and peer code reviews.",
      badge: "Innovation",
    },
    {
      num: "04",
      icon: Globe,
      title: "Global Developer Network",
      description:
        "Connect with tech enthusiasts, senior software engineers, and startup founders across the globe to elevate your professional network.",
      badge: "Community",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#161616]" id="opportunity">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 w-full max-w-5xl h-96 bg-gradient-to-br from-[#caff33]/10 via-transparent to-transparent pointer-events-none blur-3xl opacity-40" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1c1c] border border-[#262626] text-xs font-medium text-[#caff33] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WHAT WE OFFER</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Unlock Unlimited <span className="text-[#caff33]">Opportunities</span>
          </h2>

          <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed">
            Discover how BuilderClan helps you accelerate your coding career, ship production software, and build lifelong connections.
          </p>
        </motion.div>

        {/* 2x2 Opportunity Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {opportunities.map((item) => (
            <motion.div
              key={item.num}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group relative bg-[#1c1c1c]/90 border border-[#262626] hover:border-[#caff33]/50 rounded-3xl p-8 sm:p-10 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between"
            >
              {/* Top Accent & Numbering */}
              <div className="flex items-center justify-between mb-8">
                <div className="p-3.5 rounded-2xl bg-[#222222] border border-[#262626] text-[#caff33] group-hover:bg-[#caff33] group-hover:text-[#1c1c1c] transition-colors duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#222222] border border-[#262626] text-xs text-[#a1a1aa] font-medium">
                    {item.badge}
                  </span>
                  <span className="text-3xl font-black text-[#262626] group-hover:text-[#caff33]/40 transition-colors">
                    {item.num}
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#caff33] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Subtle Link Indicator */}
              <div className="mt-6 pt-4 border-t border-[#262626]/60 flex items-center justify-between text-xs font-semibold text-[#a1a1aa] group-hover:text-white transition-colors">
                <span>Learn More</span>
                <ArrowUpRight className="w-4 h-4 text-[#caff33] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Banner */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="#joinclan"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#caff33] hover:bg-[#bce62e] text-[#1c1c1c] font-semibold text-sm transition-all shadow-lg hover:shadow-[0_0_20px_rgba(202,255,51,0.4)]"
          >
            <span>Get Started with BuilderClan</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
