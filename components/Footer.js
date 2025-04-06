import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo mb-10">
        <Image src="/LogoShort.png" alt="logo" width={30} height={24} />
        <span>BuilderClan</span>
      </div>
      <div className="menu-items pb-10 flex flex-col gap-2 md:gap-0">
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#opportunity">Opportunity</Link>
        <Link href="#contact">Contact</Link>
      </div>
      <div className="py-10 contact flex flex-col gap-2 md:gap-0">
        <div>
          <Image src="/Email.svg" alt="location" width={20} height={20} />
          <span className="text-sm md:text-base">
            main.builderclan@gmail.com
          </span>
        </div>
        <div>
          <Image src="/Location.svg" alt="location" width={20} height={20} />
          <span className="text-sm md:text-base">Somewhere in the world</span>
        </div>
      </div>
      <div className="socials mt-10">
        <div className="flex flex-col gap-3 md:gap-0 md:flex-row md:justify-between md:items-center w-full">
          <div className="flex gap-3 md:gap-2 justify-center md:justify-start">
            <Link
              href="https://www.instagram.com/builder.clan/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 md:px-6 py-2 md:py-3 text-white social-icon flex items-center justify-center bg-white rounded-lg"
            >
              <Instagram color="black" alt="instagram" width={20} height={20} />
            </Link>
            <Link
              href="https://github.com/BuilderCastle"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 md:px-6 py-2 md:py-3 text-white social-icon flex items-center justify-center bg-white rounded-lg"
            >
              <Image src="/Github.svg" alt="github" width={20} height={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/builderclan/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 md:px-6 py-2 md:py-3 text-white social-icon flex items-center justify-center bg-white rounded-lg"
            >
              <Image
                src="/LinkedIn.svg"
                alt="linkedin"
                width={20}
                height={20}
              />
            </Link>
          </div>
          <p className="text-sm md:text-base text-center">
            BuilderClan All Rights Reserved
          </p>
          <p className="text-sm md:text-base text-center md:text-right">
            Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
