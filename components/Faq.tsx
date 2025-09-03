"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is BuilderClan?",
    answer:
      "BuilderClan is a tech community where innovators, developers, and enthusiasts come together to collaborate, learn, and build impactful projects.",
  },
  {
    question: "Who can join BuilderClan?",
    answer:
      "Anyone passionate about technology, innovation, or collaboration can join. Whether you're a beginner or an expert, there's a place for you here!",
  },
  {
    question: "How can I become a member?",
    answer:
      "Get referred by an existing member and follow the signup process on our website. If you don’t know any members, feel free to reach out to us for more information.",
  },
  {
    question: "What activities does BuilderClan organize?",
    answer:
      "We host open-source projects, hackathons and coding challenges, workshops, webinars, and community meetups, as well as networking opportunities and mentorship programs.",
  },
  {
    question: "How can I contribute to BuilderClan?",
    answer:
      "You can participate in open-source projects, share knowledge through posts or workshops, and help moderate discussions and mentor others.",
  },
  {
    question: "Are there any rules for the community?",
    answer:
      "Yes, we have a set of community rules to ensure a respectful and collaborative environment. You can find them on our website.",
  },
  {
    question: "How can I report issues or inappropriate behavior?",
    answer:
      "If you encounter any violations of our rules, please report them to the moderators through our contact form or email at contact@builderclan.com.",
  },
  {
    question: "Is there a membership fee?",
    answer:
      "No, joining BuilderClan is free! Some premium events or workshops may have a fee, but general membership is completely free.",
  },
  {
    question: "Can I promote my projects or services in the community?",
    answer:
      "Yes, but please ensure your promotions are relevant and non-spammy. Use designated channels for project showcases.",
  },
  {
    question: "How do I collaborate on community projects?",
    answer:
      "Keep an eye on announcements for project opportunities. Once a project is announced, you can apply to join the team or contribute through GitHub.",
  },
  {
    question: "How do I contact the BuilderClan team?",
    answer:
      "You can reach us at main.builderclan@gmail.com or use the contact form on our website.",
  },
];

export default function FaqSection() {
  const [showAll, setShowAll] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: { duration: 2, repeat: Number.POSITIVE_INFINITY },
    });
  }, [controls]);

  const handleToggle = () => {
    if (showAll) {
      const faqSection = document.getElementById("faq");
      faqSection?.scrollIntoView({ behavior: "smooth" });
    }
    setShowAll(!showAll);
  };

  const faqVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    }),
    hover: {
      scale: 1.03,
      boxShadow: "0px 10px 30px rgba(202, 255, 51, 0.1)",
      y: -5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="section" id="faq">
      <div className="container mx-auto">
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <motion.h1
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Frequently{" "}
            <motion.span
              className="text-white"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Asked Questions
            </motion.span>
          </motion.h1>
          <motion.div
            className="section-sub-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Still you have any questions? Contact our Team via main.builderclan@gmail.com
          </motion.div>
        </motion.div>
        <div className="faq-wrapper relative">
          <AnimatePresence mode="wait">
            <div className={`faq-content ${showAll ? "show" : ""}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {faqs.slice(0, showAll ? faqs.length : 4).map((faq, index) => (
                  <motion.div
                    key={index}
                    className="p-10 faq-card backdrop-blur-sm"
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={faqVariants}
                    onHoverStart={() => setHoveredCard(index)}
                    onHoverEnd={() => setHoveredCard(null)}
                  >
                    <motion.div
                      className="pb-4 faq-question font-semibold"
                      initial={{ color: "#caff33" }}
                      animate={
                        hoveredCard === index
                          ? {
                              color: ["#caff33", "#a5cc29", "#caff33"],
                              transition: {
                                duration: 1.5,
                                repeat: Number.POSITIVE_INFINITY,
                              },
                            }
                          : { color: "#caff33" }
                      }
                    >
                      {faq.question}
                    </motion.div>
                    <motion.div
                      className="pt-4 faq-answer"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {faq.answer}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatePresence>
          <motion.button
            className="flex gap-1 items-center faq-load-btn max-w-[160px] mx-auto w-full justify-center z-10 relative mt-10"
            onClick={handleToggle}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 5px 15px rgba(202, 255, 51, 0.15)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              opacity: { duration: 0.5, delay: 0.6 },
              y: { duration: 0.5, delay: 0.6 },
              scale: { duration: 0.2 },
            }}
          >
            <span>{!showAll ? "Show more" : "Show less"}</span>
            <motion.div
              animate={{
                rotate: showAll ? 180 : 0,
                y: showAll ? 0 : [0, 5, 0],
              }}
              transition={{
                rotate: { duration: 0.3 },
                y: {
                  duration: 1.5,
                  repeat: !showAll ? Number.POSITIVE_INFINITY : 0,
                  repeatType: "reverse",
                },
              }}
            >
              <ChevronDown />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
