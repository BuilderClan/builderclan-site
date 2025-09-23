import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://builderclan.org"),
  title: "Builder Clan",
  description:
    "BuilderClan: Where Innovation Meets Collaboration. Join a thriving tech community of coders, designers, and tech enthusiasts building impactful solutions. Foster creativity, learning, and growth with BuilderClan!",
  alternates: { canonical: "/" },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/builderLogo.svg" sizes="any" />
      </head>
      <body className="antialiased">
        <main>{children}</main>
      </body>
      <GoogleAnalytics gaId="G-Y5L2HBGQLW" />
    </html>
  );
}
