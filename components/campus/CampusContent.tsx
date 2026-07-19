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
    icon: ShieldCheck,
    title: "Direct Industry Mentorship",
    desc: "Connect directly with senior engineers, open-source maintainers, and tech creators for guidance.",
  },
  {
    icon: Zap,
    title: "Hackathon Backing & Sponsorship",
    desc: "Host university hackathons backed by BuilderClan sponsor networks, swag kits, and prize pools.",
  },
  {
    icon: Award,
    title: "Leadership & Career Growth",
    desc: "Gain hands-on experience managing campus communities, organizing build events, and leading open-source projects.",
  },
  {
    icon: Rocket,
    title: "Swag & Exclusive Branding",
    desc: "Receive official BuilderClan chapter logos, t-shirts, stickers, and priority access to global tech events.",
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

      <main className="mt-[93px] pb-24 relative z-10">
        {/* Hero Banner Section */}
        <section className="py-20 text-center relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1c1c] border border-[#262626] text-xs font-medium text-[#caff33] mb-6 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>BUILDERCLAN ON CAMPUS • ANNUAL RECRUITMENT COHORT</span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-none mb-6">
                A Home for Campus Builders to <span className="text-[#caff33]">Learn & Grow</span>
              </h1>

              <p className="text-base sm:text-xl text-[#a1a1aa] max-w-3xl mx-auto leading-relaxed mb-8">
                BuilderClan Campus Leads represent the community on their university campus—spreading our vision, conducting hands-on events and hackathons, and building a supportive home for hardware & software creators.
              </p>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1c1c1c]/90 border border-[#caff33]/30 text-xs font-semibold text-[#caff33] mb-10">
                <Calendar className="w-4 h-4" />
                <span>Campus Lead applications open once per academic year</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://forms.gle/tBUDeHSj75sW7et69"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#caff33] hover:bg-[#bce62e] text-[#1c1c1c] font-bold text-sm transition-all shadow-[0_0_20px_rgba(202,255,51,0.3)]"
                >
                  <Building2 className="w-4 h-4" />
                  <span>Apply as Campus Lead</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="#directory"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#1c1c1c] hover:bg-[#262626] border border-[#262626] text-white font-semibold text-sm transition-all"
                >
                  <span>Explore Chapters</span>
                </a>
              </div>
            </motion.div>

            {/* Impact Metrics Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto"
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {filteredChapters.map((chapter) => (
                  <motion.div
                    key={chapter.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="p-6 rounded-2xl bg-[#1c1c1c] border border-[#caff33]/40 transition-all flex flex-col justify-between group shadow-xl hover:shadow-[0_0_25px_rgba(202,255,51,0.15)]"
                  >
                    <div>
                      {/* Top status & logo */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-[#caff33]/10 border border-[#caff33]/30 flex items-center justify-center text-[#caff33]">
                          <GraduationCap className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#caff33]/10 text-[#caff33] border border-[#caff33]/30">
                          {chapter.status}
                        </span>
                      </div>

                      {/* Title & Location */}
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#caff33] transition-colors leading-snug">
                        {chapter.name}
                      </h3>

                      <div className="flex items-center gap-1.5 text-xs text-[#a1a1aa] mb-4">
                        <MapPin className="w-3.5 h-3.5 text-[#caff33]" />
                        <span>
                          {chapter.city}, {chapter.country}
                        </span>
                      </div>

                      {/* Lead & Member Stats */}
                      <div className="pt-4 border-t border-[#262626] flex items-center justify-between text-xs text-[#d4d4d8] mb-4">
                        <div>
                          <span className="text-[#71717a] block text-[10px]">FOUNDING CHAPTER</span>
                          <span className="font-semibold text-white">{chapter.shortName}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[#71717a] block text-[10px]">MEMBERS</span>
                          <span className="font-semibold text-[#caff33] inline-flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {chapter.members}+
                          </span>
                        </div>
                      </div>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {chapter.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#141414] border border-[#262626] text-[#a1a1aa]"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={chapter.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-3 rounded-xl bg-[#141414] hover:bg-[#222222] text-[#d4d4d8] border border-[#262626] text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                      >
                        <Globe className="w-3.5 h-3.5 text-[#caff33]" />
                        <span>College Website</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>

                      <a
                        href="https://discord.gg/GFnBvjc5tj"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-3 rounded-xl bg-[#caff33] hover:bg-[#bce62e] text-[#1c1c1c] text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Join Community</span>
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
                  className="p-6 rounded-2xl bg-[#1c1c1c]/50 border border-dashed border-[#383838] hover:border-[#caff33]/50 transition-all flex flex-col justify-between group text-center"
                >
                  <div className="flex flex-col items-center justify-center my-auto py-6">
                    <div className="w-12 h-12 rounded-full bg-[#1c1c1c] border border-[#262626] flex items-center justify-center text-[#caff33] mb-4 group-hover:scale-110 transition-transform">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Your University Here</h3>
                    <p className="text-xs text-[#a1a1aa] max-w-xs mx-auto leading-relaxed mb-6">
                      Bring BuilderClan hackathons, mentorship, and open-source projects to your campus.
                    </p>
                    <a
                      href="https://forms.gle/tBUDeHSj75sW7et69"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1c1c1c] hover:bg-[#caff33] text-[#d4d4d8] hover:text-[#1c1c1c] border border-[#262626] hover:border-[#caff33] text-xs font-semibold transition-all"
                    >
                      <span>Launch Next Chapter</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              </div>
            ) : (
              <div className="text-center py-12 bg-[#1c1c1c] border border-[#262626] rounded-2xl p-8 max-w-md mx-auto">
                <p className="text-white font-medium mb-1">No Campus Chapters Found</p>
                <p className="text-xs text-[#a1a1aa]">
                  No active chapter matches &quot;{searchQuery}&quot;. Be the first to bring BuilderClan to your campus!
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Why Start a Campus Chapter? (Benefits) */}
        <section className="py-20 bg-[#171717]/60 border-y border-[#262626] relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1c1c] border border-[#262626] text-xs font-medium text-[#caff33] mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>LEADERSHIP PERKS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
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
                    className="p-6 rounded-2xl bg-[#1c1c1c] border border-[#262626] hover:border-[#caff33]/30 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#caff33]/10 border border-[#caff33]/20 flex items-center justify-center text-[#caff33] mb-5">
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
                We provide all the mentorship, pitch decks, sponsor kits, and platform support you need.
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
                Ready to Bring BuilderClan to <span className="text-[#caff33]">Your University?</span>
              </h2>

              <p className="text-sm sm:text-base text-[#a1a1aa] max-w-xl mx-auto leading-relaxed mb-8">
                Lead a community of student builders on your campus. Spread our vision, conduct hardware & software build events, and foster a home for creators. Applications open once per academic year.
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
