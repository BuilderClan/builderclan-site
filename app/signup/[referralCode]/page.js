"use client";

import { useParams } from "next/navigation";
import RegistrationForm from "../pages/form";

export default function Signup() {
  const params = useParams();
  const referralCode = params.referralCode;

  return <RegistrationForm initialReferralCode={referralCode} />;
}
