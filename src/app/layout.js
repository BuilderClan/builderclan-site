// "use client";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
// import { useEffect, useState } from "react";

export const metadata = {
  title: "Builder Clan",
  description:
    "BuilderClan: Where Innovation Meets Collaboration. Join a thriving tech community of coders, designers, and tech enthusiasts building impactful solutions. Foster creativity, learning, and growth with BuilderClan!",
};

export default function RootLayout({ children }) {
  // const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // if (!isMounted) {
  //   return null;
  // }
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/builderLogo.svg" />
      </head>
      <body className="antialiased">
        <div className="fixed w-full top-0 left-0 z-50">
          <Header />
        </div>
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
