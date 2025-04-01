import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo mb-10">
        <Image src={`/LogoShort.png`} alt="logo" width={30} height={24} />
        <span>BuilderClan</span>
      </div>
      <div className="menu-items pb-10">
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#opportunity">Opportunity</Link>
        <Link href="#contact">Contact</Link>
      </div>
      <div className="py-10 contact">
        <div>
          <Image src={`/Email.svg`} alt="location" width={20} height={20} />
          <span className="text-sm md:text-base">
            main.builderclan@gmail.com
          </span>
        </div>
        <div>
          <Image src={`/Location.svg`} alt="location" width={20} height={20} />
          <span className="text-sm md:text-base">Somewhere in the world</span>
        </div>
      </div>
      <div className="socials mt-10">
        <div className="flex gap-2 flex-wrap md:flex-nowrap justify-center">
          <button
            className={`px-4 md:px-6 py-2 md:py-3 text-white social-icon`}
          >
            <Instagram
              color="black"
              alt="instagram"
              width={20}
              height={20}
              href="https://www.instagram.com/builder.clan/"
            />
          </button>
          <button
            className={`px-4 md:px-6 py-2 md:py-3 text-white social-icon`}
          >
            <Image
              src={`/Github.svg`}
              alt="github"
              width={20}
              height={20}
              href="https://github.com/BuilderCastle"
            />
          </button>
          <button
            className={`px-4 md:px-6 py-2 md:py-3 text-white social-icon`}
          >
            <Image
              src={`/LinkedIn.svg`}
              alt="linkedin"
              width={20}
              height={20}
              href="https://www.linkedin.com/in/builderclan-undefined-207724357/"
            />
          </button>
        </div>
        <p className="text-sm md:text-base text-center">
          BuilderClan All Rights Reserved
        </p>
        <p className="text-sm md:text-base text-center">
          Privacy Policy | Terms of Service
        </p>
      </div>
    </footer>
  );
}
