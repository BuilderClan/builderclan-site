"use client";

import { motion, type Variants } from "framer-motion";
import { FolderGit2, Cpu, Rocket, BookOpen, Users, Sparkles, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function OpportunitySection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
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
      icon: Rocket,
      title: "Build Anything in Tech",
      description:
        "Tinker, experiment, and create whatever inspires you, from IoT devices and robotics to web apps, AI tools, and personal hacks.",
      badge: "Explore",
    },
    {
      num: "02",
      icon: FolderGit2,
      title: "Beginner-Friendly Open Source",
      description:
        "Ship code and hardware schematics on real open-source products with beginner-friendly issues and supportive peer feedback.",
      badge: "Open Source",
    },
    {
      num: "03",
      icon: BookOpen,
      title: "Learning & Growing Together",
      description:
        "Build lasting connections and grow alongside peers through collaborative build sessions, shared project logs, and continuous mutual support.",
      badge: "Togetherness",
    },
    {
      num: "04",
      icon: Users,
      title: "Global Builder Network",
      description:
        "Connect with fellow beginners, senior engineers, hardware hackers, robotics enthusiasts, and startup founders in a welcoming environment.",
      badge: "Community",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#141414]" id="opportunity">
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
            Discover how BuilderClan brings hardware & software builders together to experiment, launch startups, ship open-source products, and grow together.
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
