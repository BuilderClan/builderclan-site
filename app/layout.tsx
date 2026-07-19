import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const siteUrl = "https://builderclan.org";
const siteName = "BuilderClan";
const siteDescription =
  "BuilderClan is a global tech community where innovators, developers, designers, and creators collaborate, learn, and build impactful open-source software. Join 500+ builders worldwide.";

export const viewport: Viewport = {
  themeColor: "#141414",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BuilderClan — Where Innovation Meets Collaboration",
    template: "%s | BuilderClan",
  },
  description: siteDescription,
  keywords: [
    "BuilderClan",
    "developer community",
    "tech community",
    "open source",
    "hackathon",
    "coding community",
    "software developers",
    "Discord tech community",
    "collaborative coding",
    "build in public",
  ],
  authors: [{ name: "BuilderClan", url: siteUrl }],
  creator: "BuilderClan",
  publisher: "BuilderClan",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: "BuilderClan — Where Innovation Meets Collaboration",
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BuilderClan — Where Innovation Meets Collaboration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BuilderClan — Where Innovation Meets Collaboration",
    description: siteDescription,
    images: ["/og-image.png"],
    creator: "@builderclan",
  },
  icons: {
    icon: "/builderLogo.svg",
    shortcut: "/builderLogo.svg",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BuilderClan",
  url: siteUrl,
  logo: `${siteUrl}/Logo.png`,
  description: siteDescription,
  email: "main.builderclan@gmail.com",
  sameAs: [
    "https://discord.gg/GFnBvjc5tj",
    "https://github.com/BuilderClan",
    "https://instagram.com/builderclan",
    "https://linkedin.com/company/builderclan",
  ],
  foundingDate: "2024",
  areaServed: "Worldwide",
  knowsAbout: [
    "Software Development",
    "Open Source",
    "Hackathons",
    "Tech Community",
    "Collaborative Coding",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "BuilderClan",
  url: siteUrl,
  description: siteDescription,
  potentialAction: {
    "@type": "JoinAction",
    target: "https://discord.gg/GFnBvjc5tj",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#141414] dark" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#141414" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="msapplication-navbutton-color" content="#141414" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#141414] text-white">
        <main>{children}</main>
      </body>
      <GoogleAnalytics gaId="G-Y5L2HBGQLW" />
    </html>
  );
}

