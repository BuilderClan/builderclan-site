"use client";

import Button from "./Button";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HomeSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const heroTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 8,
      },
    },
  };

  return (
    <section
      className="min-h-[calc(100vh-93px)] flex items-center justify-center pt-10 pb-5"
      id="home"
    >
      <div className="container mx-auto px-4 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 items-center h-full pb-16">
          <div className="col-span-12 lg:col-span-7 lg:mb-0 mb-10">
            <div className="flex flex-col justify-center h-full px-2">
              <motion.div
                className="hero-catchphrase slider-custom-anim-left mb-6 flex items-center gap-2"
                custom={0}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={heroTextVariants}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    repeatDelay: 2,
                  }}
                >
                  ✨
                </motion.span>
                <span>Together, let's build something extraordinary!</span>
                <span className="ml-1 px-2 py-0.5 text-xs font-semibold rounded-full bg-[#caff33]/20 text-[#caff33] border border-[#caff33]/30">
                  Join 500+ Builders
                </span>
              </motion.div>
              <motion.div
                className="mb-4"
                custom={1}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={heroTextVariants}
              >
                <h1 className="hero-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                  Welcome to BuilderClan
                  <span className="block text-white mt-1">
                    The Tech Community where
                  </span>
                  <motion.span
                    className="gradient-text block mt-1"
                    animate={{
                      color: [
                        "rgba(202, 255, 51, 0.8)",
                        "#caff33",
                        "#a5cc29",
                        "rgba(165, 204, 41, 0.8)",
                      ],
                      textShadow: [
                        "0 0 5px rgba(202, 255, 51, 0.3)",
                        "0 0 10px rgba(202, 255, 51, 0.5)",
                        "0 0 5px rgba(165, 204, 41, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    }}
                    style={{
                      fontWeight: "bold",
                      display: "inline-block",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    Innovation meets Collaboration!
                  </motion.span>
                </h1>
              </motion.div>
              <motion.div
                className="hero-sub-text mb-10 max-w-2xl"
                custom={2}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={heroTextVariants}
              >
                {`Join a dynamic community where innovation meets collaboration. Whether you're a coder, designer, or visionary, you belong here. Let's build something extraordinary together!`}
              </motion.div>
              <motion.div
                className="header-cta"
                custom={3}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={heroTextVariants}
              >
                <Button
                  content="Get Started"
                  href="#joinclan"
                  active
                />
              </motion.div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center h-full px-2">
              <motion.div
                className="hero-image p-4 bg-gradient-to-b from-[#262626] to-[#1c1c1c] shadow-2xl backdrop-blur-md"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={imageVariants}
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    transition: {
                      y: {
                        duration: 0.4,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        ease: "easeOut",
                      },
                    },
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                  }}
                >
                  <Image src="/Logo.png" alt="logo" width={400} height={400} />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
