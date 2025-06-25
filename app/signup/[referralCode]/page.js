"use client";

import { useParams } from "next/navigation";
import RegistrationForm from "../page";

export default function Signup() {
  const params = useParams();
  const referralCode = params.referralCode;

  return <RegistrationForm initialReferralCode={referralCode} />;
}
