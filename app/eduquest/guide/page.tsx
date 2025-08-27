import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EduQuest Guide - Builder Clan",
  description:
    "Comprehensive guide for BuilderClan's EduQuest hackathon. Learn about our 24-hour game-based learning experience.",
  alternates: {
    canonical: "https://builderclan.org/eduquest/guide",
  },
};

export default function Guide() {
  redirect(
    "https://www.notion.so/builderclan/EduQuest-The-24-Hour-Game-Based-Learning-Hackathon-2427f33836f080029c2fc61e8cc091b1"
  );
}
