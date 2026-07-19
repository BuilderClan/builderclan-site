import type { Metadata } from "next";
import { RegistrationForm } from "@/components/signup/RegistrationForm";

export const metadata: Metadata = {
  title: "Join BuilderClan",
  description: "Join the BuilderClan developer community.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SignupPage() {
  return <RegistrationForm />;
}
