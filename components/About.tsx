"use client";

import { Target, Eye, GraduationCap, Briefcase, BookOpenCheck, Flame, Gamepad2, PackageCheck, Rocket, Sparkles, Users } from "lucide-react";
import { motion, type Variants } from "framer-motion";

export default function AboutSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const audience = [
    {
      icon: GraduationCap,
      badge: "Students & Beginners",
      title: "Learn & Build Hands-On",
      description: "Ask questions without judgment, get starter project ideas, code reviews, and friendly peer mentorship.",
    },
    {
      icon: Briefcase,
      badge: "Pros & Senior Engineers",
      title: "Collaborate & Mentor",
      description: "Work on passion projects, explore new tech stacks, share industry experience, and guide rising builders.",
    },
    {
      icon: BookOpenCheck,
      badge: "Teachers & Researchers",
      title: "Share Knowledge & Innovate",
      description: "Explore frontier hardware, AI & software, share educational insights, and guide student innovators.",
    },
    {
      icon: Flame,
      badge: "Anyone Interested in Tech",
      title: "No Experience Required",
      description: "Whether you're starting from scratch or just tech-curious, if you want to build, you belong here.",
    },
  ];

  const buildSpectrum = [
    {
      icon: Gamepad2,
      title: "Fun Side Projects & Hacks",
      subtitle: "Low pressure, pure passion",
      description: "Weekend experiments, IoT home gadgets, creative web apps, retro gaming hacks, and fun coding projects.",
    },
    {
      icon: PackageCheck,
      title: "Real Products & Open Source",
      subtitle: "Production-ready tools",
      description: "Shipped software products, developer utilities, open-source libraries, and reusable hardware schematics.",
    },
    {
      icon: Rocket,
      title: "Startups & Ventures",
      subtitle: "From prototype to company",
      description: "Turn innovative prototypes into startups, find co-founders, get early user feedback, and launch ventures.",
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
            <span>WHO WE ARE & WHO CAN JOIN</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            A Community Built for <span className="text-[#caff33]">Everyone in Tech.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed">
            BuilderClan is an inclusive community where anyone interested in technology can connect, experiment, and grow together—regardless of background or experience level.
          </p>
        </motion.div>

        {/* Dual Hero Cards: Mission & Vision */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
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
              To empower hardware and software builders of all backgrounds—from absolute beginners to senior pros—to experiment freely, build whatever inspires them, and grow together in a warm, supportive community.
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
              To be a global home for curious minds, students, teachers, researchers, and creators—where anyone can explore hardware & software, launch startups, and build the future together.
            </p>
          </motion.div>
        </motion.div>

        {/* Section 2: Who Can Join? (4 Card Grid) */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Who Can Join <span className="text-[#caff33]">BuilderClan?</span>
            </h3>
            <p className="text-sm sm:text-base text-[#a1a1aa]">
              No matter your title or experience level, there is a place for you here.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {audience.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="bg-[#1c1c1c] border border-[#262626] hover:border-[#caff33]/50 p-6 rounded-2xl transition-all shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-[#222222] text-[#caff33]">
                      <item.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <span className="inline-block text-[11px] font-semibold text-[#caff33] uppercase tracking-wider mb-1">
                    {item.badge}
                  </span>
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Section 3: What Can You Build? (3 Pillars) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              What Can You <span className="text-[#caff33]">Build?</span>
            </h3>
            <p className="text-sm sm:text-base text-[#a1a1aa]">
              From casual weekend hacks to launching tech ventures, every build is celebrated.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {buildSpectrum.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="bg-[#1c1c1c] border border-[#262626] hover:border-[#caff33]/50 p-7 rounded-2xl transition-all shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="p-3.5 w-fit rounded-xl bg-[#222222] text-[#caff33] mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-medium text-[#caff33] block mb-1">{item.subtitle}</span>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-[#a1a1aa] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

