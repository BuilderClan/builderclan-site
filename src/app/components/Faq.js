"use client";
import { useState } from "react";
import Image from "next/image";

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
      "You can reach us at contact@builderclan.com or use the contact form on our website.",
  },
];

export default function FaqSection() {
  //   const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  //   const toggleFAQ = (index) => {
  //     setOpenIndex(openIndex === index ? null : index);
  //   };
  return (
    <section className="section" id="faq">
      <div className="container mx-auto">
        <div className="m-20">
          <h1 className="section-heading">
            Frequently <span className="text-white">Asked Questions</span>
          </h1>
          <div className="section-sub-text">
            {`Still you have any questions? Contact our Team via main.builderclan@gmail.com`}
          </div>
        </div>
        <div className="faq-wrapper relative">
          <div className={`faq-content ${showAll ? "show" : ""}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {faqs.map((faq, index) => (
                <div key={index} className="p-10 faq-card">
                  <div className="pb-4 faq-question">{faq.question}</div>
                  <div className="pt-4 faq-answer">{faq.answer}</div>
                </div>
              ))}
            </div>
          </div>
          <button
            className="flex gap-1 items-center faq-load-btn max-w-[160px] mx-auto w-full justify-center z-10 relative mt-10"
            onClick={() => setShowAll(!showAll)}>
            <span>{!showAll ? `Show more` : `Show less`}</span>
            <Image
              src={`/ArrowDown.svg`}
              alt="arrow"
              width={18}
              height={18}
              className={`${
                showAll ? "rotate-180" : ""
              } transition-all duration-300`}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
