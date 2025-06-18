// "use client";
import "./globals.css";

export const metadata = {
  title: "Builder Clan",
  description:
    "BuilderClan: Where Innovation Meets Collaboration. Join a thriving tech community of coders, designers, and tech enthusiasts building impactful solutions. Foster creativity, learning, and growth with BuilderClan!",
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
