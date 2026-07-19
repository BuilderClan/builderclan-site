import type { Metadata } from "next";
import CampusContent from "@/components/campus/CampusContent";

const siteUrl = "https://builderclan.org";
const pageTitle = "Campus Chapters — BuilderClan";
const pageDescription =
  "Discover BuilderClan Campus Chapters at top universities. Join student-led open-source development, hackathons, and tech mentorship or apply to start a chapter at your campus.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/campus",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteUrl}/campus`,
    siteName: "BuilderClan",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: pageTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.png"],
  },
};

const campusJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "BuilderClan Campus Chapters",
  url: `${siteUrl}/campus`,
  description: pageDescription,
  parentOrganization: {
    "@type": "Organization",
    name: "BuilderClan",
    url: siteUrl,
  },
};

export default function CampusPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(campusJsonLd),
        }}
      />
      <CampusContent />
    </>
  );
}
