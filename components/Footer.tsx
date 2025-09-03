"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Instagram, LetterText, Linkedin, Mail, MapPin } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const footerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

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
      textShadow: "0px 0px 8px rgba(202, 255, 51, 0.3)",
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.footer
      className="footer relative"
      ref={footerRef}
      style={{ opacity, y }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent -z-10"
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="footer-logo mb-10"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <motion.div
          animate={{
            rotate: [0, 5, 0, -5, 0],
            scale: [1, 1.1, 1, 1.1, 1],
            transition: {
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 5,
            },
          }}
        >
          <Image src="/LogoShort.png" alt="logo" width={30} height={24} />
        </motion.div>
        <motion.span
          animate={{
            textShadow: [
              "0px 0px 0px rgba(202, 255, 51, 0)",
              "0px 0px 5px rgba(202, 255, 51, 0.3)",
              "0px 0px 0px rgba(202, 255, 51, 0)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          BuilderClan
        </motion.span>
      </motion.div>
      <div className="menu-items pb-10 flex flex-col gap-2 md:gap-0">
        {["Home", "About", "Opportunity"].map((item, index) => (
          <motion.div
            key={index}
            variants={linkVariants}
            initial="initial"
            whileHover="hover"
            custom={index}
            whileInView={{
              opacity: [0, 1],
              x: [-10, 0],
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          >
            <Link href={`#${item.toLowerCase()}`}>{item}</Link>
          </motion.div>
        ))}
      </div>
      <div className="py-10 contact flex flex-col gap-2 md:gap-0">
        <motion.div
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
            duration: 0.5,
            delay: 0.1,
          }}
          whileInView={{
            opacity: [0, 1],
            x: [-10, 0],
          }}
          viewport={{ once: true }}
        >
          <Link
            href="mailto:main.builderclan@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <motion.div
              animate={{
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                rotate: {
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
            >
              <Mail className="text-[#caff33]" />
            </motion.div>
            <span className="text-sm md:text-base">
              main.builderclan@gmail.com
            </span>
          </Link>
        </motion.div>
        <motion.div
          className="flex items-center gap-2"
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
            duration: 0.5,
            delay: 0.2,
          }}
          whileInView={{
            opacity: [0, 1],
            x: [-10, 0],
          }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ rotate: 10 }}
            animate={{
              rotate: [0, -5, 0, 5, 0],
            }}
            transition={{
              rotate: {
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
            }}
          >
            <MapPin className="text-[#caff33]" />
          </motion.div>
          <span className="text-sm md:text-base">Somewhere in the world</span>
        </motion.div>
      </div>
      <div className="socials mt-10">
        <div className="flex flex-col gap-3 md:gap-0 md:flex-row md:justify-between md:items-center w-full">
          <div className="flex gap-3 md:gap-2 justify-center md:justify-start">
            {[
              {
                platform: "instagram",
                href: "https://www.instagram.com/thebuilderclan/",
                icon: <Instagram color="black" width={20} height={20} />,
              },
              {
                platform: "github",
                href: "https://github.com/BuilderClan",
                icon: <Github color="black" width={20} height={20} />,
              },
              {
                platform: "linkedin",
                href: "https://www.linkedin.com/company/builderclan/",
                icon: <Linkedin color="black" width={20} height={20} />,
              },
            ].map((social, index) => (
              <motion.div
                key={social.platform}
                variants={socialIconVariants}
                initial="initial"
                whileHover="hover"
                whileInView={{
                  opacity: [0, 1],
                  y: [10, 0],
                  scale: [0.9, 1],
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 md:px-6 py-2 md:py-3 text-white social-icon flex items-center justify-center rounded-lg relative overflow-hidden"
                >
                  {social.icon}
                  <motion.div
                    className="absolute inset-0 bg-primary/10"
                    initial={{ opacity: 0 }}
                    whileHover={{
                      opacity: 1,
                      background:
                        "radial-gradient(circle at center, rgba(202, 255, 51, 0.3), transparent 70%)",
                    }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.p
            className="text-sm md:text-base text-center"
            initial={{ opacity: 0.7 }}
            whileInView={{
              opacity: [0, 0.7],
              y: [10, 0],
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            BuilderClan All Rights Reserved
          </motion.p>
          <motion.p
            className="text-sm md:text-base text-center md:text-right"
            initial={{ opacity: 0.7 }}
            whileInView={{
              opacity: [0, 0.7],
              y: [10, 0],
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Privacy Policy | Terms of Service
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
}
