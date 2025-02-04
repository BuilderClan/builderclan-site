"use client";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [menuDelay, setMenuDelay] = useState(isOpen);

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setMenuDelay(isOpen);
      }, 500);
    } else {
      setMenuDelay(isOpen);
    }
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="container bg-color-main" style={{ paddingTop: "20px" }}>
      <div className="header-builder relative">
        {/* Logo Section */}
        <div className="pr-[28px] pl-2 py-[15px]">
          <Image src={`/LogoShort.png`} alt="logo" width={46} height={34} />
        </div>

        {/* Navigation Links */}
        <div
          className={`duration-500 absolute lg:static lg:w-auto w-full flex lg:items-center gap-[1.5vw] top-[100%] left-[-100%] px-5 lg:py-0 pb-5 pt-7 ${
            isOpen
              ? "left-[0%] bg-color-main h-[calc(100vh-93px)] top-[101%]"
              : ""
          }`}>
          <div className="menu-links ml-1 flex lg:flex-row flex-col lg:items-center">
            <Link
              href="#home"
              className={
                activeLink === "home"
                  ? `${isOpen ? "active-link-color" : "menu-link-active"}`
                  : ""
              }
              onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link
              href="#about"
              className={
                activeLink === "about"
                  ? `${isOpen ? "active-link-color" : "menu-link-active"}`
                  : ""
              }
              onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link
              href="#opportunity"
              className={
                activeLink === "opportunity"
                  ? `${isOpen ? "active-link-color" : "menu-link-active"}`
                  : ""
              }
              onClick={() => setIsOpen(false)}>
              Opportunity
            </Link>
            <Link
              href="#contact"
              className={
                activeLink === "contact"
                  ? `${isOpen ? "active-link-color" : "menu-link-active"}`
                  : ""
              }
              onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        </div>

        {/* Buttons Section (Desktop) */}
        <div className="hidden lg:flex">
          <Button content="Sign Up" />
          <Button content="Login" active />
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <div
            className={`flex flex-col gap-1.5 menu-bar-icon ${
              isOpen ? "active" : ""
            }`}>
            <div className={`menu-bar`}></div>
            <div className={`menu-bar`}></div>
            <div className={`menu-bar`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
