"use client";

import { Target, Eye, Code2, Users, Rocket, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
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

  const values = [
    {
      icon: Code2,
      title: "Build in Public",
      description: "Ship open-source projects, share code, and get real feedback from experienced peers.",
    },
    {
      icon: Users,
      title: "Peer-to-Peer Growth",
      description: "Collaborate across skill levels, mentor junior devs, and solve hard problems together.",
    },
    {
      icon: Rocket,
      title: "Launchpad for Projects",
      description: "Turn ideas into production-ready software, hackathon wins, and portfolio features.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#161616]" id="about">
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
            Where Code Meets <span className="text-[#caff33]">Collaboration</span>
          </h2>

          <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed">
            BuilderClan is a global community of coders, designers, and tech innovators dedicated to crafting impactful software, sharing knowledge, and accelerating developer growth.
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
              To empower developers and creators worldwide by providing a collaborative ecosystem, hands-on project experience, and mentorship to build software that solves real-world challenges.
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
              To become the world’s premier launchpad for tech talent and open-source innovation, bridging the gap between learning code and building industry-leading tech.
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
