"use client";

import { Crosshair, Eye } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const cardVariants: any = {
    hidden: { opacity: 0, y: 50, boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)" },
    visible: {
      opacity: 1,
      y: 0,
      boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };

  const iconMotion: any = {
    rest: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.2,
      rotate: [0, -5, 5, -5, 0],
      transition: {
        rotate: { repeat: 0, duration: 0.5, ease: "easeInOut" },
        scale: { duration: 0.3, ease: "easeOut" },
      },
    },
  };

  return (
    <section className="section" id="about">
      <div className="container mx-auto">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="section-heading"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            About
          </motion.h1>
          <motion.div
            className="section-sub-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {`At BuilderClan, we believe in building solutions that matter. Whether you're a coder, a designer, or a tech enthusiast, you're part of a community that fosters creativity, learning, and growth.`}
          </motion.div>
        </motion.div>

        <div className="section-content">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-4">
            <motion.div
              className="col-span-12 lg:col-span-6 flex justify-center lg:border-r border-border-color"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <motion.div
                className="about-card border-border-color border-b lg:border-b-0 lg:pb-0 pb-10"
                whileHover={{
                  y: -10,
                  boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.15)",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="icon-wrapper mb-6"
                  initial="rest"
                  whileHover="hover"
                  variants={iconMotion}
                >
                  <div className="icon-inner-wrapper">
                    <Crosshair className="text-[#caff33]" />
                  </div>
                </motion.div>
                <motion.div
                  className="about-card-content text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h3 className="mb-4">MISSION</h3>
                  <p>
                    To empower individuals and teams to create impactful tech
                    solutions.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="col-span-12 lg:col-span-6 flex justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="about-card lg:pt-0 pt-10"
                whileHover={{
                  y: -10,
                  boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.15)",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="icon-wrapper mb-6"
                  initial="rest"
                  whileHover="hover"
                  variants={iconMotion}
                >
                  <div className="icon-inner-wrapper">
                    <Eye className="w-34 h-32 text-[#caff33]" />
                  </div>
                </motion.div>
                <motion.div
                  className="about-card-content text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <h3 className="mb-4">VISION</h3>
                  <p>
                    To become a global hub for innovation and collaboration in
                    technology.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
