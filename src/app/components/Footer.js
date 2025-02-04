import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

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
          <span>main.builderclan@gmail.com</span>
        </div>
        <div>
          <Image src={`/Location.svg`} alt="location" width={20} height={20} />
          <span>Somewhere in the world</span>
        </div>
      </div>
      <div className="socials mt-10">
        <div className="flex gap-2">
          <button className={`px-6 py-3 text-white social-icon`}>
            <Image
              src={`/Facebook.svg`}
              alt="facebook"
              width={20}
              height={20}
            />
          </button>
          <button className={`px-6 py-3 text-white social-icon`}>
            <Image src={`/GitHub.svg`} alt="github" width={20} height={20} />
          </button>
          <button className={`px-6 py-3 text-white social-icon`}>
            <Image
              src={`/LinkedIn.svg`}
              alt="linkedin"
              width={20}
              height={20}
            />
          </button>
        </div>
        <p>BuildClan All Rights Reserved</p>
        <p>Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
}
