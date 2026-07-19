import type { Metadata } from "next";
import Link from "next/link";
import Header from "@components/Header";
import Footer from "@components/Footer";
import BackToTop from "@components/BackToTop";
import { Sparkles, Briefcase, Mail, ArrowUpRight, Users, Code2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore career opportunities and open community roles at BuilderClan. Connect with 500+ global builders and contribute to impactful open-source software.",
  alternates: {
    canonical: "https://builderclan.org/careers",
  },
  openGraph: {
    title: "Careers | BuilderClan",
    description:
      "Explore career opportunities and open community roles at BuilderClan. Connect with 500+ global builders.",
    url: "https://builderclan.org/careers",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "BuilderClan Careers" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | BuilderClan",
    description: "Join BuilderClan — a global community of builders, developers, and creators.",
    images: ["/og-image.png"],
  },
};

export default function Careers() {
  return (
    <>
      <header className="fixed w-full top-3 sm:top-0 left-0 z-50">
        <Header />
      </header>

      <main className="min-h-screen pt-28 pb-20 bg-[#141414] relative overflow-hidden">
        {/* Ambient Radial Lighting Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-tr from-[#caff33]/10 via-transparent to-transparent pointer-events-none blur-3xl opacity-60" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16 pt-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1c1c] border border-[#262626] text-xs font-medium text-[#caff33] mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CAREERS AT BUILDERCLAN</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Build the Future <span className="text-[#caff33]">Together</span>
            </h1>
            <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed">
              We&apos;re building a global community of engineers, designers, and innovators. Join us to build impactful open-source software.
            </p>
          </div>

          {/* No Open Positions Banner */}
          <div className="bg-[#1c1c1c]/90 border border-[#262626] rounded-3xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden mb-12">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#caff33]/5 rounded-bl-full pointer-events-none" />
            
            <div className="w-16 h-16 rounded-2xl bg-[#222222] border border-[#262626] flex items-center justify-center mx-auto mb-6 text-[#caff33]">
              <Briefcase className="w-8 h-8" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              No Open Positions Currently Available
            </h2>
            
            <p className="text-base text-[#a1a1aa] max-w-xl mx-auto mb-8 leading-relaxed">
              We don&apos;t have any full-time job openings at this exact moment. However, our community is constantly growing and opening volunteer leadership, mentorship, and project lead positions!
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://discord.gg/GFnBvjc5tj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#caff33] hover:bg-[#bce62e] text-[#1c1c1c] font-semibold text-sm transition-all shadow-md"
              >
                <span>Join Community Discord</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="mailto:main.builderclan@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#222222] hover:bg-[#282828] border border-[#262626] hover:border-[#383838] text-white font-medium text-sm transition-all"
              >
                <Mail className="w-4 h-4 text-[#caff33]" />
                <span>Send Spontaneous Application</span>
              </a>
            </div>
          </div>

          {/* Additional Community Roles Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#181818] border border-[#262626] p-6 sm:p-8 rounded-2xl">
              <div className="p-3 rounded-xl bg-[#222222] text-[#caff33] w-fit mb-4">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Open Source Project Leads</h3>
              <p className="text-sm text-[#a1a1aa] leading-relaxed mb-4">
                Have an awesome idea or open-source repository? Pitch your project to lead a team of community developers.
              </p>
              <a
                href="https://discord.gg/GFnBvjc5tj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#caff33] hover:underline"
              >
                <span>Propose a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-[#181818] border border-[#262626] p-6 sm:p-8 rounded-2xl">
              <div className="p-3 rounded-xl bg-[#222222] text-[#caff33] w-fit mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Community Mentors & Reviewers</h3>
              <p className="text-sm text-[#a1a1aa] leading-relaxed mb-4">
                Share your technical expertise by reviewing PRs, mentoring junior developers, or hosting live tech workshops.
              </p>
              <a
                href="mailto:main.builderclan@gmail.com"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#caff33] hover:underline"
              >
                <span>Become a Mentor</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />

      <div className="fixed z-10">
        <BackToTop />
      </div>
    </>
  );
}
