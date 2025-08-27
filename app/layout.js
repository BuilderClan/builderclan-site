// "use client";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://builderclan.org"),
  title: "Builder Clan",
  description:
    "BuilderClan: Where Innovation Meets Collaboration. Join a thriving tech community of coders, designers, and tech enthusiasts building impactful solutions. Foster creativity, learning, and growth with BuilderClan!",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/builderLogo.svg" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
