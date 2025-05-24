"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const socialIconVariants = {
    initial: { scale: 1, y: 0 },
    hover: {
      scale: 1.1,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const linkVariants = {
    initial: { color: "#ffffff", textDecoration: "none" },
    hover: {
      color: "#caff33",
      textDecoration: "underline",
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="footer-logo mb-10"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <motion.div
          animate={{
            rotate: [0, 5, 0, -5, 0],
            transition: {
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 5,
            },
          }}
        >
          <Image src="/LogoShort.png" alt="logo" width={30} height={24} />
        </motion.div>
          BuilderClan
      </motion.div>
      <div className="menu-items pb-10 flex flex-col gap-2 md:gap-0">
        <motion.div
          variants={linkVariants}
          initial="initial"
          whileHover="hover"
        >
          <Link href="#home">Home</Link>
        </motion.div>
        <motion.div
          variants={linkVariants}
          initial="initial"
          whileHover="hover"
        >
          <Link href="#about">About</Link>
        </motion.div>
        <motion.div
          variants={linkVariants}
          initial="initial"
          whileHover="hover"
        >
          <Link href="#opportunity">Opportunity</Link>
        </motion.div>
      </div>
      <div className="py-10 contact flex flex-col gap-2 md:gap-0">
        <motion.div
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link
            href="mailto:main.builderclan@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <motion.div whileHover={{ rotate: 10 }}>
              <Image src="/Email.svg" alt="email" width={20} height={20} />
            </motion.div>
            <span className="text-sm md:text-base">
              main.builderclan@gmail.com
            </span>
          </Link>
        </motion.div>
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <motion.div whileHover={{ rotate: 10 }}>
            <Image src="/Location.svg" alt="location" width={20} height={20} />
          </motion.div>
          <span className="text-sm md:text-base">Somewhere in the world</span>
        </motion.div>
      </div>
      <div className="socials mt-10">
        <div className="flex flex-col gap-3 md:gap-0 md:flex-row md:justify-between md:items-center w-full">
          <div className="flex gap-3 md:gap-2 justify-center md:justify-start">
            <motion.div
              variants={socialIconVariants}
              initial="initial"
              whileHover="hover"
            >
              <Link
                href="https://www.instagram.com/builder.clan/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 md:px-6 py-2 md:py-3 text-white social-icon flex items-center justify-center bg-white rounded-lg"
              >
                <Instagram
                  color="black"
                  alt="instagram"
                  width={20}
                  height={20}
                />
              </Link>
            </motion.div>

            <motion.div
              variants={socialIconVariants}
              initial="initial"
              whileHover="hover"
            >
              <Link
                href="https://github.com/BuilderCastle"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 md:px-6 py-2 md:py-3 text-white social-icon flex items-center justify-center bg-white rounded-lg"
              >
                <Image src="/Github.svg" alt="github" width={20} height={20} />
              </Link>
            </motion.div>

            <motion.div
              variants={socialIconVariants}
              initial="initial"
              whileHover="hover"
            >
              <Link
                href="https://www.linkedin.com/in/builderclan/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 md:px-6 py-2 md:py-3 text-white social-icon flex items-center justify-center bg-white rounded-lg"
              >
                <Image
                  src="/LinkedIn.svg"
                  alt="linkedin"
                  width={20}
                  height={20}
                />
              </Link>
            </motion.div>
          </div>
          <motion.p
            className="text-sm md:text-base text-center"
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1 }}
          >
            BuilderClan All Rights Reserved
          </motion.p>
          <motion.p
            className="text-sm md:text-base text-center md:text-right"
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1 }}
          >
            Privacy Policy | Terms of Service
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
}
