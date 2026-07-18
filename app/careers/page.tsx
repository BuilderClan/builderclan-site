import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join BuilderClan and be part of our innovative tech community. Explore career opportunities and growth possibilities with 500+ global builders.",
  alternates: {
    canonical: "https://builderclan.org/careers",
  },
  openGraph: {
    title: "Careers | BuilderClan",
    description:
      "Join BuilderClan and be part of our innovative tech community. Explore career opportunities and growth possibilities with 500+ global builders.",
    url: "https://builderclan.org/careers",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "BuilderClan Careers" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | BuilderClan",
    description: "Join BuilderClan — a global community of builders, developers, and creators.",
    images: ["/og-image.png"],
  },
};

export default function Careers() {
  return (
    <div
      id="careers"
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <Image
        src="https://www.svgrepo.com/show/426192/cogs-settings.svg"
        alt="Logo"
        width={100}
        height={100}
        className="mb-8 h-40"
      />
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-[#3ddd95] dark:text-white mb-4">
        Site is under maintenance
      </h1>
      <p className="text-center text-white dark:text-gray-300 text-lg md:text-xl lg:text-2xl mb-8">
        We are working hard to improve the user experience. Stay tuned!
      </p>
      <div className="flex space-x-4">
        <Link
          href="/"
          className=" text-black bg-[#3ddd95] font-bold py-3 px-6 rounded dark:text-white dark:border-white"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
