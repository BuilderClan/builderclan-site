"use client";

import { Target, Eye, Code2, Users, Rocket, Sparkles, Cpu } from "lucide-react";
import { motion, type Variants } from "framer-motion";

export default function AboutSection() {
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

  const values = [
    {
      icon: Cpu,
      title: "Hardware & Software",
      description: "Explore and build across physical tech (IoT, robotics, embedded systems) and software (AI, web, cloud, apps).",
    },
    {
      icon: Users,
      title: "Learn & Grow Together",
      description: "A welcoming space where beginners and experts learn together, ask questions freely, and support each other.",
    },
    {
      icon: Rocket,
      title: "Build Anything in Tech",
      description: "Turn curiosity and ideas into real projects, open-source software, hardware builds, and personal breakthroughs.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#141414]" id="about">
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-gradient-to-tr from-[#caff33]/10 via-transparent to-transparent pointer-events-none blur-3xl opacity-40" />

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
            <span>ABOUT BUILDERCLAN</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            A Home for People Who <span className="text-[#caff33]">Love to Build.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed">
            BuilderClan is a welcoming community where hardware hackers, software developers, and curious minds find a place to belong. Build anything in tech, share your journey, and grow together.
          </p>
        </motion.div>

        {/* Dual Hero Cards: Mission & Vision */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Mission Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="group relative bg-[#1c1c1c]/90 border border-[#262626] hover:border-[#caff33]/50 rounded-3xl p-8 sm:p-10 transition-all duration-300 shadow-xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#caff33]/5 rounded-bl-full pointer-events-none transition-all group-hover:bg-[#caff33]/10" />

            <div className="flex items-center gap-4 mb-6">
              <div className="p-3.5 rounded-2xl bg-[#222222] border border-[#262626] text-[#caff33] group-hover:bg-[#caff33] group-hover:text-[#1c1c1c] transition-colors duration-300">
                <Target className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#caff33]">PURPOSE</span>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
            </div>

            <p className="text-[#d4d4d8] text-base leading-relaxed">
              To empower hardware and software builders of all skill levels to experiment, create whatever inspires them, and learn and grow together in a warm, supportive community.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="group relative bg-[#1c1c1c]/90 border border-[#262626] hover:border-[#caff33]/50 rounded-3xl p-8 sm:p-10 transition-all duration-300 shadow-xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#caff33]/5 rounded-bl-full pointer-events-none transition-all group-hover:bg-[#caff33]/10" />

            <div className="flex items-center gap-4 mb-6">
              <div className="p-3.5 rounded-2xl bg-[#222222] border border-[#262626] text-[#caff33] group-hover:bg-[#caff33] group-hover:text-[#1c1c1c] transition-colors duration-300">
                <Eye className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#caff33]">FUTURE</span>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
            </div>

            <p className="text-[#d4d4d8] text-base leading-relaxed">
              To be a global home for curious minds and passionate builders, where anyone can explore hardware & software, share technical knowledge, and build the future together.
            </p>
          </motion.div>
        </motion.div>

        {/* 3 Core Value Pillars */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {values.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="bg-[#181818] border border-[#262626] hover:border-[#333333] p-6 rounded-2xl transition-all shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="p-3 w-fit rounded-xl bg-[#222222] text-[#caff33] mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
