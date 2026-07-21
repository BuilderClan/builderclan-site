import type { Metadata } from "next";
import CampusContent from "@/components/campus/CampusContent";

const siteUrl = "https://builderclan.org";
const pageTitle = "BuilderClan On Campus (BCC) | BuilderClan";
const pageDescription =
  "Discover BuilderClan On Campus (BCC) chapters at universities. Build a campus ecosystem where students and teachers work side by side to learn, experiment, and build tech projects together.";

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
  name: "BuilderClan On Campus (BCC)",
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
