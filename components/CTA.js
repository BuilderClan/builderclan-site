"use client";

import Button from "./Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.5, 1, 1, 0.5]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.9, 1, 1, 0.9]
  );

  return (
    <section
      className="section px-4 py-8 relative"
      id="joinclan"
      ref={sectionRef}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 opacity-0"
        animate={{
          opacity: [0, 0.3, 0],
          background: [
            "radial-gradient(circle at 20% 50%, rgba(202, 255, 51, 0.05), transparent 70%)",
            "radial-gradient(circle at 80% 50%, rgba(202, 255, 51, 0.10), transparent 70%)",
            "radial-gradient(circle at 20% 50%, rgba(202, 255, 51, 0.05), transparent 70%)",
          ],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <motion.div
        style={{ opacity, scale }}
        className="container mx-auto relative z-10"
      >
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h1
              className="section-heading text-2xl md:text-4xl font-bold"
              animate={{
                textShadow: [
                  "0px 0px 0px rgba(202, 255, 51, 0)",
                  "0px 0px 10px rgba(202, 255, 51, 0.2)",
                  "0px 0px 0px rgba(202, 255, 51, 0)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <motion.span
                className="text-white"
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                Join the
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                animate={{
                  color: ["#caff33", "#a5cc29", "#caff33"],
                }}
                style={{ display: "inline-block" }}
              >
                Clan!
              </motion.span>
            </motion.h1>
            <motion.div
              className="section-sub-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {`Visit our website.`}
            </motion.div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              duration: 0.4,
              type: "spring",
              stiffness: 300,
              damping: 15,
            }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0px 0px 0px rgba(202, 255, 51, 0.3)",
                  "0px 0px 20px rgba(202, 255, 51, 0.6)",
                  "0px 0px 0px rgba(202, 255, 51, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <Button
                content="Join Discord"
                active
                href="https://discord.gg/GFnBvjc5tj"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
