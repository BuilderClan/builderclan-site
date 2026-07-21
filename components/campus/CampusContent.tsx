"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Search,
  MapPin,
  Users,
  GraduationCap,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Award,
  Rocket,
  MessageCircle,
  Building2,
  ExternalLink,
  Globe,
  Calendar,
  SearchX,
  RotateCcw,
  Cpu,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const CAMPUS_CHAPTERS = [
  {
    id: 1,
    name: "Albertian Institute of Science and Technology",
    shortName: "AISAT Chapter",
    city: "Kochi, Kerala",
    country: "India",
    website: "https://aisat.ac.in/",
    lead: "AISAT Student Team",
    members: 50,
    status: "Active Chapter",
    isFounding: true,
    tags: ["Hardware & IoT", "Software & Web", "Open Source", "Robotics", "Learning Together"],
  },
];

const CHAPTER_BENEFITS = [
  {
    icon: Users,
    title: "Student-Teacher Co-Building",
    desc: "Build a campus ecosystem where students and teachers work side by side, learn from each other, and turn ideas into real builds.",
  },
  {
    icon: Cpu,
    title: "Fun Hacks to Campus Startups",
    desc: "Guide campus projects across curiosity-driven side hacks, hardware labs, open-source software tools, and campus startups.",
  },
  {
    icon: Zap,
    title: "Event Decks & Launch Kits",
    desc: "Get official BuilderClan event templates, presentation decks, branding assets, and dedicated Discord chapter channels.",
  },
  {
    icon: Globe,
    title: "Global Builder Network",
    desc: "Connect your campus ecosystem directly with our global network of senior developers, hardware hackers, and startup founders.",
  },
];

const LAUNCH_STEPS = [
  {
    step: "01",
    title: "Submit Application (1x / Year)",
    desc: "Applications for Campus Leads open once per academic year. Share your university details and passion for tech.",
  },
  {
    step: "02",
    title: "15-Min Intro Call",
    desc: "Chat with the BuilderClan core team to align on chapter goals and support resources.",
  },
  {
    step: "03",
    title: "Receive Chapter Kit",
    desc: "Get official branding assets, presentation decks, event templates, and Discord chapter channels.",
  },
  {
    step: "04",
    title: "Launch & Start Building",
    desc: "Host your university kickoff event, recruit student builders, and start building hardware & software together.",
  },
];

export default function CampusContent() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredChapters = CAMPUS_CHAPTERS.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="bg-[#141414] min-h-screen text-white relative overflow-hidden">
      <header className="fixed w-full top-3 sm:top-0 left-0 z-50">
        <Header />
      </header>

      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-gradient-to-b from-[#caff33]/10 via-transparent to-transparent pointer-events-none blur-3xl" />

      <main className="mt-[100px] sm:mt-[108px] pb-16 relative z-10">
        {/* Hero Banner Section (2-Column Grid with Floating 3D Elements) */}
        <section className="pt-8 sm:pt-12 pb-10 relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column Text (7 Cols) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 text-left"
              >
                {/* Top Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1c1c] border border-[#262626] text-xs font-semibold text-[#caff33] mb-4 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>BUILDERCLAN ON CAMPUS (BCC)</span>
                  <span className="text-[#383838]">•</span>
                  <span className="text-[#a1a1aa] font-medium flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#caff33]" />
                    Applications Open 1x / Year
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
                  A Campus Ecosystem Where Students & Teachers <span className="text-[#caff33] drop-shadow-[0_0_20px_rgba(202,255,51,0.3)]">Build Together</span>
                </h1>

                {/* Subtitle */}
                <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed mb-6 max-w-xl">
                  BuilderClan On Campus (BCC) creates an active builder ecosystem at your university, providing a collaborative space where students and teachers work side by side to learn, experiment, and build anything in tech.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <a
                    href="https://forms.gle/tBUDeHSj75sW7et69"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#caff33] hover:bg-[#bce62e] text-[#1c1c1c] font-extrabold text-sm transition-all shadow-[0_0_20px_rgba(202,255,51,0.3)] hover:shadow-[0_0_30px_rgba(202,255,51,0.5)]"
                  >
                    <Building2 className="w-4 h-4" />
                    <span>Apply as Campus Lead</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <a
                    href="#directory"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1c1c1c] hover:bg-[#262626] border border-[#262626] text-white font-semibold text-sm transition-all"
                  >
                    <span>Explore Chapters</span>
                  </a>
                </div>

                {/* Inline Feature Pills (Flex Wrap to display complete text without truncation) */}
                <div className="flex flex-wrap gap-2.5 pt-4 border-t border-[#262626]/80">
                  {[
                    { icon: Users, label: "Students & Teachers" },
                    { icon: Rocket, label: "Co-Building Ecosystem" },
                    { icon: Zap, label: "Fun Hacks & Startups" },
                    { icon: ShieldCheck, label: "Open Learning" },
                  ].map((pill) => {
                    const Icon = pill.icon;
                    return (
                      <div
                        key={pill.label}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#1c1c1c]/90 border border-[#262626] text-xs font-semibold text-[#d4d4d8] shadow-sm"
                      >
                        <Icon className="w-3.5 h-3.5 text-[#caff33] shrink-0" />
                        <span className="whitespace-nowrap">{pill.label}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Right Column: 3D Interactive Floating Visual Elements (5 Cols) */}
              <div className="lg:col-span-5 relative flex items-center justify-center min-h-[280px] sm:min-h-[320px] py-2 [perspective:1000px]">
                
                {/* Radial Glow Lighting Halo */}
                <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-[#caff33]/20 via-[#a5cc29]/10 to-transparent blur-3xl opacity-70 pointer-events-none" />

                {/* Center 3D Floating Campus Emblem / Logo */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [-10, 10, -10],
                    rotateY: [-10, 10, -10],
                    rotateX: [6, -6, 6],
                  }}
                  transition={{
                    opacity: { duration: 0.6 },
                    scale: { duration: 0.8 },
                    y: { duration: 5.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                    rotateY: { duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                    rotateX: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  }}
                  whileHover={{ scale: 1.08, rotateY: 0, rotateX: 0 }}
                  className="relative z-20 p-8 rounded-full bg-gradient-to-b from-[#1c1c1c] via-[#181818] to-[#141414] border-2 border-[#caff33]/40 hover:border-[#caff33] shadow-[-20px_20px_60px_rgba(0,0,0,0.8)] hover:shadow-[0_0_50px_rgba(202,255,51,0.3)] transition-all cursor-pointer flex items-center justify-center"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#caff33]/10 border border-[#caff33]/30 flex items-center justify-center text-[#caff33] shadow-inner">
                    <GraduationCap className="w-14 h-14 sm:w-18 sm:h-18 drop-shadow-[0_0_15px_rgba(202,255,51,0.5)]" />
                  </div>
                </motion.div>

                {/* Floating 3D Micro-Badge 1: Top-Right (Hardware & Software) */}
                <motion.div
                  className="absolute top-2 right-0 sm:right-2 z-30 backdrop-blur-md bg-[#1c1c1c]/90 border border-[#caff33]/40 hover:border-[#caff33] p-3 rounded-2xl shadow-2xl flex items-center gap-3 transition-colors cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: [-8, 8, -8],
                    rotateZ: [-2, 2, -2],
                  }}
                  transition={{
                    opacity: { duration: 0.6, delay: 0.3 },
                    y: { duration: 4.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                    rotateZ: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  }}
                  whileHover={{ scale: 1.08 }}
                >
                  <div className="p-2 rounded-xl bg-[#caff33]/15 border border-[#caff33]/30">
                    <Rocket className="w-4 h-4 text-[#caff33]" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-extrabold text-white">Hardware & Software</div>
                    <div className="text-[11px] text-[#a1a1aa]">Labs & Open Source</div>
                  </div>
                </motion.div>

                {/* Floating 3D Micro-Badge 2: Bottom-Left (Annual Cohort 1x / Year) */}
                <motion.div
                  className="absolute bottom-2 left-0 sm:left-2 z-30 backdrop-blur-md bg-[#1c1c1c]/90 border border-[#caff33]/40 hover:border-[#caff33] p-3 rounded-2xl shadow-2xl flex items-center gap-3 transition-colors cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: [8, -8, 8],
                    rotateZ: [2, -2, 2],
                  }}
                  transition={{
                    opacity: { duration: 0.6, delay: 0.5 },
                    y: { duration: 5.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.4 },
                    rotateZ: { duration: 5.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  }}
                  whileHover={{ scale: 1.08 }}
                >
                  <div className="p-2 rounded-xl bg-[#caff33]/15 border border-[#caff33]/30">
                    <Calendar className="w-4 h-4 text-[#caff33]" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-extrabold text-white">Annual Application</div>
                    <div className="text-[11px] text-[#caff33] font-semibold flex items-center gap-1">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#caff33] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#caff33]"></span>
                      </span>
                      1x / Academic Year
                    </div>
                  </div>
                </motion.div>

              </div>

            </div>

            {/* Impact Metrics Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-24 sm:mt-28 max-w-5xl mx-auto"
            >
              {[
                { label: "Founding Chapter", val: "1 (AISAT)" },
                { label: "Student Builders", val: "50+" },
                { label: "Application Window", val: "1x / Year" },
                { label: "Community Access", val: "100% Free" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 rounded-2xl bg-[#1c1c1c]/80 border border-[#262626] text-center"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#caff33] mb-1">
                    {stat.val}
                  </div>
                  <div className="text-xs font-medium text-[#a1a1aa]">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Interactive Campus Directory Section */}
        <section className="py-16 relative" id="directory">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
                Our <span className="text-[#caff33]">Campus Chapters</span>
              </h2>
              <p className="text-sm sm:text-base text-[#a1a1aa] max-w-xl mx-auto">
                Explore our active founding chapter or apply to bring BuilderClan to your university.
              </p>
            </div>

            {/* Live Search Input */}
            <div className="max-w-md mx-auto mb-10 relative">
              <Search className="w-4.5 h-4.5 text-[#a1a1aa] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search university, city, or tech stack..."
                className="w-full pl-11 pr-4 py-3 rounded-full bg-[#1c1c1c] border border-[#262626] focus:border-[#caff33] text-sm text-white placeholder-[#71717a] outline-none transition-all shadow-md focus:shadow-[0_0_15px_rgba(202,255,51,0.2)]"
              />
            </div>

            {/* Chapter Cards Grid */}
            {filteredChapters.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {filteredChapters.map((chapter) => (
                  <motion.div
                    key={chapter.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ y: -4 }}
                    className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#1c1c1c] to-[#161616] border border-[#262626] hover:border-[#caff33]/50 transition-all flex flex-col justify-between group shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_35px_rgba(202,255,51,0.15)] relative overflow-hidden"
                  >
                    {/* Top Corner Ambient Lighting Halo */}
                    <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#caff33]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#caff33]/20 transition-all" />

                    <div>
                      {/* Top status & Icon Header */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="p-3 rounded-2xl bg-[#caff33]/10 border border-[#caff33]/30 text-[#caff33] shadow-inner group-hover:scale-105 transition-transform">
                          <GraduationCap className="w-6 h-6" />
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141414] border border-[#262626] text-xs font-semibold text-[#caff33]">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#caff33] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#caff33]"></span>
                          </span>
                          <span>{chapter.status}</span>
                        </div>
                      </div>

                      {/* Title & Location */}
                      <h3 className="text-xl font-extrabold text-white mb-2.5 group-hover:text-[#caff33] transition-colors leading-snug tracking-tight">
                        {chapter.name}
                      </h3>

                      <div className="flex items-center gap-2 text-xs font-medium text-[#a1a1aa] mb-6">
                        <div className="p-1 rounded-full bg-[#caff33]/10 text-[#caff33]">
                          <MapPin className="w-3.5 h-3.5" />
                        </div>
                        <span>
                          {chapter.city}, {chapter.country}
                        </span>
                      </div>

                      {/* Stats Grid */}
                      <div className="p-4 rounded-2xl bg-[#141414]/90 border border-[#262626] grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <span className="text-[#71717a] block text-[10px] font-bold uppercase tracking-wider mb-0.5">
                            CHAPTER
                          </span>
                          <span className="text-xs font-bold text-white block truncate">
                            {chapter.shortName}
                          </span>
                        </div>
                        <div className="border-l border-[#262626] pl-4">
                          <span className="text-[#71717a] block text-[10px] font-bold uppercase tracking-wider mb-0.5">
                            MEMBERS
                          </span>
                          <span className="text-xs font-extrabold text-[#caff33] inline-flex items-center gap-1.5">
                            <Users className="w-3.5 h-3.5" />
                            {chapter.members}+ Builders
                          </span>
                        </div>
                      </div>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {chapter.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-[#141414] border border-[#262626] text-[#a1a1aa] group-hover:border-[#383838] transition-colors"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Full Width Action CTA */}
                    <div className="pt-2">
                      <a
                        href={chapter.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 px-4 rounded-xl bg-[#141414] hover:bg-[#222222] border border-[#262626] hover:border-[#caff33]/50 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md group/btn"
                      >
                        <Globe className="w-4 h-4 text-[#caff33]" />
                        <span>Visit College Website</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#71717a] group-hover/btn:text-[#caff33] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
                      </a>
                    </div>
                  </motion.div>
                ))}

                {/* Apply to be next Chapter Card */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  whileHover={{ y: -4 }}
                  className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#1c1c1c]/60 to-[#141414]/60 border-2 border-dashed border-[#383838] hover:border-[#caff33]/60 transition-all flex flex-col justify-between group text-center relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#caff33]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#caff33]/15 transition-all" />

                  <div className="flex flex-col items-center justify-center my-auto py-8">
                    <div className="w-14 h-14 rounded-2xl bg-[#1c1c1c] border border-[#262626] group-hover:border-[#caff33]/50 flex items-center justify-center text-[#caff33] mb-5 group-hover:scale-110 transition-transform shadow-lg">
                      <Building2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-extrabold text-white mb-2.5">Your University Here</h3>
                    <p className="text-xs text-[#a1a1aa] max-w-xs mx-auto leading-relaxed mb-6">
                      Bring BuilderClan hardware labs, hackathons, and open-source projects to your campus. Applications open once per academic year.
                    </p>
                    <a
                      href="https://forms.gle/tBUDeHSj75sW7et69"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#caff33] hover:bg-[#bce62e] text-[#1c1c1c] font-extrabold text-xs transition-all shadow-[0_0_20px_rgba(202,255,51,0.25)] hover:shadow-[0_0_30px_rgba(202,255,51,0.4)]"
                    >
                      <span>Launch Next Chapter</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-8 sm:p-9 rounded-3xl bg-[#1c1c1c]/90 border border-[#262626] hover:border-[#383838] max-w-lg mx-auto text-center shadow-xl backdrop-blur-md relative overflow-hidden transition-colors"
              >
                {/* Accent glow corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#caff33]/5 rounded-full blur-2xl pointer-events-none" />

                <div className="flex flex-col items-center relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-[#caff33]/10 border border-[#caff33]/25 text-[#caff33] flex items-center justify-center mb-4 shadow-sm">
                    <Building2 className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    No Chapters Found
                  </h3>

                  <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed max-w-sm mx-auto mb-6">
                    No active chapter matches <span className="text-[#caff33] font-medium">&quot;{searchQuery}&quot;</span>. Be the pioneer to bring BuilderClan to your campus!
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
                    <a
                      href="https://forms.gle/tBUDeHSj75sW7et69"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#caff33] hover:bg-[#bce62e] text-[#1c1c1c] font-bold text-xs transition-all shadow-[0_0_15px_rgba(202,255,51,0.2)]"
                    >
                      <span>Start Campus Chapter</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => setSearchQuery("")}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#141414] hover:bg-[#222222] border border-[#262626] text-xs font-medium text-[#a1a1aa] hover:text-white transition-all cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3 text-[#caff33]" />
                      <span>Reset Search</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* Why Start a Campus Chapter? (Benefits) */}
        <section className="py-20 bg-[#141414] relative overflow-hidden">
          {/* Ambient Lighting Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-72 bg-gradient-to-r from-[#caff33]/10 via-[#caff33]/5 to-transparent blur-3xl pointer-events-none opacity-60" />

          <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1c1c] border border-[#262626] text-xs font-semibold text-[#caff33] mb-4 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>LEADERSHIP PERKS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Why Start a <span className="text-[#caff33]">Campus Chapter?</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CHAPTER_BENEFITS.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#1c1c1c] to-[#161616] border border-[#262626] hover:border-[#caff33]/50 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_0_30px_rgba(202,255,51,0.12)] group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#caff33]/10 border border-[#caff33]/25 flex items-center justify-center text-[#caff33] mb-5 shadow-sm group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 leading-snug">{benefit.title}</h3>
                    <p className="text-xs text-[#a1a1aa] leading-relaxed">{benefit.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4-Step Chapter Launch Pathway */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
                How to Launch in <span className="text-[#caff33]">4 Simple Steps</span>
              </h2>
              <p className="text-sm sm:text-base text-[#a1a1aa] max-w-lg mx-auto">
                We provide all the event guides, presentation decks, branding assets, and community support you need.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {LAUNCH_STEPS.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-[#1c1c1c] border border-[#262626] relative"
                >
                  <div className="text-3xl font-extrabold font-mono text-[#caff33] mb-3">
                    {step.step}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-xs text-[#a1a1aa] leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead Application Callout CTA Banner */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#1c1c1c] via-[#222222] to-[#1c1c1c] border border-[#caff33]/30 text-center relative overflow-hidden shadow-[0_0_50px_rgba(202,255,51,0.15)]"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#caff33]/10 rounded-full blur-3xl pointer-events-none" />

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
                Ready to Bring BuilderClan On Campus (BCC) to <span className="text-[#caff33]">Your University?</span>
              </h2>

              <p className="text-sm sm:text-base text-[#a1a1aa] max-w-xl mx-auto leading-relaxed mb-8">
                Build a thriving campus ecosystem where students and teachers work side by side. Lead hardware & software builds, host hackathons, and turn ideas into fun side projects, open-source tools, and campus startups.
              </p>

              <a
                href="https://forms.gle/tBUDeHSj75sW7et69"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#caff33] hover:bg-[#bce62e] text-[#1c1c1c] font-bold text-sm transition-all shadow-[0_0_25px_rgba(202,255,51,0.4)]"
              >
                <span>Apply as Campus Lead</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <div className="fixed z-10">
        <BackToTop />
      </div>
    </div>
  );
}
