import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const siteUrl = "https://builderclan.org";
const siteName = "BuilderClan";
const siteDescription =
  "BuilderClan is a welcoming tech community for hardware and software builders. A home to experiment with circuits and code, build anything in tech, and learn & grow together.";

export const viewport: Viewport = {
  themeColor: "#141414",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BuilderClan | A Home for People Who Love to Build",
    template: "%s | BuilderClan",
  },
  description: siteDescription,
  keywords: [
    "BuilderClan",
    "home for builders",
    "hardware and software community",
    "tech community",
    "build anything in tech",
    "open source projects",
    "beginner friendly coding",
    "learn and grow together",
    "community belonging",
    "robotics and IoT",
    "embedded systems",
    "software development",
    "hardware hackers",
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
    title: "BuilderClan | A Home for People Who Love to Build",
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BuilderClan | A Home for People Who Love to Build",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BuilderClan | A Home for People Who Love to Build",
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
    "Hardware Engineering & Embedded Systems",
    "Software Development",
    "Open Source Community",
    "Learning & Growing Together",
    "Robotics & IoT",
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

