"use client";

import { useParams } from "next/navigation";
import { RegistrationForm } from "@/components/signup/RegistrationForm";

export default function Signup() {
  const params = useParams();
  const referralCode = typeof params?.referralCode === "string" ? params.referralCode : "";

  return <RegistrationForm initialReferralCode={referralCode} />;
}
