"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { usePathname } from "next/navigation";
import styles from "./signup.module.css";
import Success from "./pages/success";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_URL;

const signupSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .regex(/^[A-Za-z\s]+$/, { message: "Name must contain only letters" }),
  dob: z.string().refine((date) => new Date(date) < new Date(), {
    message: "Date of birth must be in the past",
  }),
  gender: z.enum(["male", "female"], {
    errorMap: () => ({ message: "Please select a gender" }),
  }),
  role: z.enum(["student", "professional", "employer"], {
    errorMap: () => ({ message: "Please select a role" }),
  }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .regex(/^\d+$/, { message: "Phone number must contain only digits" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  referral_code: z.string().optional(),
});

function FormField({ id, type = "text", label, placeholder, register, error }) {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={`${styles.inputGlass} ${error ? styles.inputError : ""}`}
        {...register(id)}
      />
      {error && <p className={styles.errorMessage}>{error.message}</p>}
    </div>
  );
}

export default function RegistrationForm({ initialReferralCode = "" }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [referralCode, setReferralCode] = useState(initialReferralCode);

  const pathname = usePathname();

  useEffect(() => {
    if (!initialReferralCode) {
      const pathParts = pathname.split("/");
      if (pathParts.length > 2 && pathParts[2]) {
        setReferralCode(pathParts[2]);
      }
    }
  }, [pathname, initialReferralCode]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: { referral_code: referralCode },
  });

  useEffect(() => {
    if (referralCode) {
      reset({ referral_code: referralCode });
    }
  }, [referralCode, reset]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const formData = {
        ...data,
        referral_code: referralCode,
      };

      await axios.post(API_ENDPOINT, formData, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      setSubmitSuccess(true);
      reset();
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || error.message || "Failed to register";
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.morphBg}>
      <div className={styles.container}>
        <div className={`${styles.floatingOrb} ${styles.topRightOrb}`} />
        <div className={`${styles.floatingOrb} ${styles.bottomLeftOrb}`} />
      </div>

      <div className={styles.glassEffect}>
        <div className={styles.gradientOverlay} />
        <div>
          <h1 className={styles.title}>BuilderClan</h1>
          <p className={styles.subtitle}>Join our exclusive community</p>

          {submitSuccess ? (
            <Success />
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              {referralCode && (
                <div className={styles.referralInfo}>
                  <input
                    type="hidden"
                    id="referral_code"
                    {...register("referral_code")}
                    value={referralCode}
                  />
                </div>
              )}

              <FormField
                id="name"
                label="Name"
                placeholder="Enter your name"
                register={register}
                error={errors.name}
              />

              <FormField
                id="email"
                type="email"
                label="Email"
                placeholder="Enter your email"
                register={register}
                error={errors.email}
              />

              <FormField
                id="phone"
                type="tel"
                label="Mobile Number"
                placeholder="Enter your mobile number"
                register={register}
                error={errors.phone}
              />

              <FormField
                id="dob"
                type="date"
                label="Date of Birth"
                register={register}
                error={errors.dob}
              />

              <div className={styles.formGroup}>
                <label htmlFor="gender" className={styles.label}>
                  Gender
                </label>
                <select
                  id="gender"
                  className={`${styles.select} ${
                    errors.gender ? styles.inputError : ""
                  }`}
                  {...register("gender")}
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {errors.gender && (
                  <p className={styles.errorMessage}>{errors.gender.message}</p>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="role" className={styles.label}>
                  Role
                </label>
                <select
                  id="role"
                  className={`${styles.select} ${
                    errors.role ? styles.inputError : ""
                  }`}
                  {...register("role")}
                >
                  <option value="">Select</option>
                  <option value="student">Student</option>
                  <option value="professional">Professional</option>
                  <option value="employer">Employer</option>
                </select>
                {errors.role && (
                  <p className={styles.errorMessage}>{errors.role.message}</p>
                )}
              </div>

              {submitError && (
                <div className={styles.errorAlert}>{submitError}</div>
              )}

              <button
                type="submit"
                className={styles.button}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Join BuilderClan"}
              </button>
            </form>
          )}
        </div>
      </div>

      <div className={styles.bottomBorder} />
    </div>
  );
}
