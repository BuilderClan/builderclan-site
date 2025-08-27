"use client";

import { useEffect } from "react";

export const metadata = {
  title: "EduQuest Guide - Builder Clan",
  description:
    "Comprehensive guide for BuilderClan's EduQuest hackathon. Learn about our 24-hour game-based learning experience.",
  alternates: {
    canonical: "https://builderclan.org/eduquest/guide",
  },
};

export default function Guide() {
  useEffect(() => {
    window.location.href =
      "https://www.notion.so/builderclan/EduQuest-The-24-Hour-Game-Based-Learning-Hackathon-2427f33836f080029c2fc61e8cc091b1";
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <div className="w-16 h-16 border-4 border-transparent text-[#3DDD95] text-2xl animate-spin flex items-center justify-center border-t-[#3DDD95] rounded-full" />
      <h2 className="text-white text-xl font-semibold mb-2 mt-4">Loading...</h2>
      <p className="text-white">
        You are being redirected to EduQuest Hackathon guide.
      </p>
    </div>
  );
}
