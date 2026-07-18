"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, Lightbulb, Settings, UsersRound } from "lucide-react";

export default function OpportunitySection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="section" id="opportunity">
      <div className="container mx-auto">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-heading">Opportunity</h1>
          <div className="section-sub-text">What We Do</div>
        </motion.div>
        <div className="opportunity-content p-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <motion.div
              className="col-span-12 md:col-span-6 flex justify-center"
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <motion.div
                className="opportunity-card"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="icon-wrapper mb-6"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="icon-inner-wrapper ">
                    <UsersRound className="text-[#caff33]" />
                  </div>
                </motion.div>
                <div className="about-card-content text-center">
                  <h3 className="mb-2 text-lg font-semibold text-white">Community Projects</h3>
                  <p className="text-sm text-[#d4d4d8] leading-relaxed">
                    Collaborate on real-world open-source software, sharpen your skills, and build a standout developer portfolio.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="col-span-12 md:col-span-6 flex justify-center"
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <motion.div
                className="opportunity-card"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="icon-wrapper mb-6"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="icon-inner-wrapper ">
                    <Settings className="text-[#caff33]" />
                  </div>
                </motion.div>
                <div className="about-card-content text-center">
                  <h3 className="mb-2 text-lg font-semibold text-white">Workshops & Events</h3>
                  <p className="text-sm text-[#d4d4d8] leading-relaxed">
                    Gain practical tech skills with hands-on coding sessions, hackathons, and interactive technical deep-dives.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="col-span-12 md:col-span-6 flex justify-center"
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <motion.div
                className="opportunity-card"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="icon-wrapper mb-6"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="icon-inner-wrapper ">
                    <Lightbulb className="text-[#caff33]" />
                  </div>
                </motion.div>
                <div className="about-card-content text-center">
                  <h3 className="mb-2 text-lg font-semibold text-white">Innovate</h3>
                  <p className="text-sm text-[#d4d4d8] leading-relaxed">
                    Turn your creative ideas into production-ready apps with community mentorship and peer support.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="col-span-12 md:col-span-6 flex justify-center"
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <motion.div
                className="opportunity-card"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="icon-wrapper mb-6"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="icon-inner-wrapper ">
                    <Globe className="text-[#caff33]" />
                  </div>
                </motion.div>
                <div className="about-card-content text-center">
                  <h3 className="mb-2 text-lg font-semibold text-white">Networking</h3>
                  <p className="text-sm text-[#d4d4d8] leading-relaxed">
                    Connect with tech enthusiasts, industry engineers, and founders to grow your professional network.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
