"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Opportunity", href: "#opportunity" },
    { name: "FAQ", href: "#faq" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <footer className="relative bg-[#161616] border-t border-[#262626] text-[#d4d4d8] pt-16 pb-8 overflow-hidden">
      {/* Ambient Radial Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-gradient-to-b from-[#caff33]/10 via-transparent to-transparent pointer-events-none blur-3xl opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#262626]">
          {/* Brand Info Column (5 Cols) */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <Link href="#home" className="flex items-center gap-3 group">
              <div className="p-2 rounded-xl bg-[#1c1c1c] border border-[#262626] group-hover:border-[#caff33]/50 transition-colors">
                <Image src="/LogoShort.png" alt="BuilderClan Logo" width={32} height={26} style={{ width: "auto", height: "auto" }} className="w-8 h-auto" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight group-hover:text-[#caff33] transition-colors">
                BuilderClan
              </span>
            </Link>
            <p className="text-sm text-[#a1a1aa] max-w-sm leading-relaxed">
              Where innovation meets collaboration. Join a global community of coders, designers, and tech visionaries building impactful open-source solutions.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <a
                href="mailto:main.builderclan@gmail.com"
                className="flex items-center gap-2 text-xs font-medium text-white bg-[#222222] hover:bg-[#282828] border border-[#262626] hover:border-[#caff33]/40 px-3 py-2 rounded-full transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-[#caff33]" />
                <span>main.builderclan@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-xs text-[#a1a1aa] bg-[#1c1c1c] border border-[#262626] px-3 py-2 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-[#caff33]" />
                <span>Worldwide / Remote</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column (3 Cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#caff33] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#a1a1aa] hover:text-[#caff33] transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links Column (4 Cols) */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#caff33] mb-4">
              Community & Socials
            </h4>
            <div className="flex items-center gap-3 mb-6">
              {[
                { name: "GitHub", href: "https://github.com/BuilderClan", icon: GithubIcon },
                { name: "LinkedIn", href: "https://www.linkedin.com/company/builderclan/", icon: LinkedinIcon },
                { name: "Instagram", href: "https://www.instagram.com/thebuilderclan/", icon: InstagramIcon },
              ].map((soc) => (
                <motion.a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-[#1c1c1c] border border-[#262626] text-white hover:text-[#1c1c1c] hover:bg-[#caff33] hover:border-[#caff33] transition-all shadow-sm flex items-center justify-center"
                  aria-label={soc.name}
                >
                  <soc.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#1c1c1c] to-[#222222] border border-[#262626] flex items-center justify-between gap-2">
              <div>
                <div className="text-xs font-semibold text-white">Join the Community</div>
                <div className="text-xs text-[#a1a1aa]">Connect with 500+ builders</div>
              </div>
              <a
                href="https://discord.gg/GFnBvjc5tj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#1c1c1c] bg-[#caff33] hover:bg-[#bce62e] px-3.5 py-2 rounded-full transition-all shrink-0"
              >
                <span>Join Discord</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717a]">
          <p>© {currentYear} BuilderClan. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-[#caff33] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#262626]">|</span>
            <Link href="#" className="hover:text-[#caff33] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
