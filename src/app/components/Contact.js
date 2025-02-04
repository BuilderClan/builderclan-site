"use client";
import { useState } from "react";
import Image from "next/image";

export default function ContactSection() {
  const [activeTab, setActiveTab] = useState("general");

  const tabContent = {
    general: [
      {
        title: "24/7 Account Access",
        text: "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.",
      },
      {
        title: "Mobile Banking App",
        text: "Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.",
      },
      {
        title: "Secure Transactions",
        text: "Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.",
      },
      {
        title: "Bill Pay and Transfers",
        text: "Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.",
      },
    ],
    partnership: [
      {
        title: "Business Partnerships",
        text: "Let's collaborate to create something great.",
      },
      {
        title: "Affiliate Program",
        text: "Join our affiliate network and grow together.",
      },
      {
        title: "Business Partnerships 0",
        text: "Let's collaborate to create something great.",
      },
      {
        title: "Affiliate Program dasda ",
        text: "Join our affilia acada sd te network and grow together.",
      },
    ],
    careers: [
      { title: "Job Openings", text: "Explore our current job opportunities." },
      {
        title: "Internships",
        text: "Kickstart your career with our internship program.",
      },
      {
        title: "Job Open sdasddadas aings",
        text: "Explore our current job opportunities.",
      },
      {
        title: "Intern edsadsd a dsa ships",
        text: "Kickstart your career with our internship program.",
      },
    ],
  };
  return (
    <section className="section" id="contact">
      <div className="container mx-auto">
        <div className="mb-20">
          <h1 className="section-heading">Contact</h1>
          <div className="section-sub-text">
            {`Get in touch with us to explore collaboration, partnerships, or any inquiries. We're here to support and innovate together!`}
          </div>
        </div>
        <div className="contact-content">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Left Section */}
            <div className="col-span-12 md:col-span-3">
              <div className="contact-tabs">
                <div
                  className={`tab ${
                    activeTab === "general" ? "active-tab" : ""
                  }`}
                  onClick={() => setActiveTab("general")}>
                  General Inquiry
                </div>
                <div
                  className={`tab ${
                    activeTab === "partnership" ? "active-tab" : ""
                  }`}
                  onClick={() => setActiveTab("partnership")}>
                  Partnerships
                </div>
                <div
                  className={`tab ${
                    activeTab === "careers" ? "active-tab" : ""
                  }`}
                  onClick={() => setActiveTab("careers")}>
                  Careers
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-4">
              {tabContent[activeTab].map((item, index) => (
                <div key={index} className="flex contact-card cursor-pointer">
                  <div className="w-full flex justify-between items-center mb-6">
                    <h3>{item.title}</h3>
                    <Image
                      src={"/Arrow.svg"}
                      alt="arrow"
                      width={20}
                      height={20}
                    />
                  </div>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
