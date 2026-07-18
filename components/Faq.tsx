"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles, Mail } from "lucide-react";

const faqs = [
  {
    question: "What is BuilderClan?",
    answer:
      "BuilderClan is a tech community where innovators, developers, and creators come together to collaborate, learn, and build impactful open-source software.",
  },
  {
    question: "Who can join BuilderClan?",
    answer:
      "Anyone passionate about technology, programming, design, or innovation! Whether you're a complete beginner or a senior engineer, there's a place for you here.",
  },
  {
    question: "How can I become a member?",
    answer:
      "You can join directly via our Discord community server or get referred by an existing member on our website signup portal.",
  },
  {
    question: "What activities does BuilderClan organize?",
    answer:
      "We host open-source projects, competitive hackathons, hands-on coding workshops, live webinars, code reviews, and global networking sessions.",
  },
  {
    question: "Is there any membership fee?",
    answer:
      "No! Joining BuilderClan is completely free. All core community activities, projects, and discussions are open to everyone.",
  },
  {
    question: "How can I contribute to community projects?",
    answer:
      "Keep an eye on our project announcements in Discord or GitHub. Once a project opens up, you can submit pull requests, report issues, or join project teams.",
  },
  {
    question: "Can I promote my own open-source projects?",
    answer:
      "Yes! We encourage members to showcase their projects in designated community channels to receive feedback, contributors, and support.",
  },
  {
    question: "How do I contact the BuilderClan team?",
    answer:
      "You can email us directly at main.builderclan@gmail.com or ask questions inside our official Discord server.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 6);

  return (
    <section className="py-24 relative overflow-hidden bg-[#161616]" id="faq">
      {/* Ambient Lighting Glow */}
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-gradient-to-t from-[#caff33]/10 via-transparent to-transparent pointer-events-none blur-3xl opacity-40" />

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
            <span>HAVE QUESTIONS?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Frequently Asked <span className="text-[#caff33]">Questions</span>
          </h2>

          <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed">
            Everything you need to know about BuilderClan, community projects, and how to get involved.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {displayedFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#1c1c1c]/95 border-[#caff33]/50 shadow-[0_0_20px_rgba(202,255,51,0.08)]"
                    : "bg-[#181818] border-[#262626] hover:border-[#333333]"
                }`}
              >
                {/* Question Header Bar */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-semibold text-base sm:text-lg transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? "text-[#caff33]" : "text-[#71717a]"}`} />
                    <span className={isOpen ? "text-white font-bold" : "text-[#d4d4d8]"}>
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-1 rounded-full bg-[#222222] border border-[#262626] text-[#caff33] shrink-0"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                {/* Animated Expandable Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#a1a1aa] leading-relaxed border-t border-[#262626]/50 mt-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Show More / Show Less Toggle Button */}
        {faqs.length > 6 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#222222] hover:bg-[#282828] border border-[#262626] text-xs font-semibold text-white transition-all shadow-md hover:border-[#caff33]/40"
            >
              <span>{showAll ? "Show Fewer Questions" : "Show All Questions"}</span>
              <ChevronDown className={`w-3.5 h-3.5 text-[#caff33] transition-transform ${showAll ? "rotate-180" : ""}`} />
            </button>
          </div>
        )}

        {/* Still Have Questions Sub-card */}
        <motion.div
          className="mt-16 max-w-2xl mx-auto rounded-2xl bg-[#1c1c1c] border border-[#262626] p-6 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-left">
            <h4 className="text-base font-bold text-white mb-1">Still have questions?</h4>
            <p className="text-xs text-[#a1a1aa]">Can’t find the answer you’re looking for? Reach out to our team.</p>
          </div>
          <a
            href="mailto:main.builderclan@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#caff33] hover:bg-[#bce62e] text-[#1c1c1c] text-xs font-semibold shrink-0 transition-all shadow-md"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Team</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
