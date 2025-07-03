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

const VALIDATION_MESSAGES = {
  first_name: {
    min: "First name must be at least 2 characters",
    pattern: "First name must contain only letters",
  },
  last_name: {
    min: "Last name must be at least 2 characters",
    pattern: "Last name must contain only letters",
  },
  dob: "Date of birth must be in the past",
  gender: "Please select a gender",
  role: "Please select a role",
  phone: {
    min: "Phone number must be at least 10 digits",
    pattern: "Phone number must contain only digits",
  },
  email: "Please enter a valid email address",
};

const signupSchema = z.object({
  first_name: z
    .string()
    .min(2, { message: VALIDATION_MESSAGES.first_name.min })
    .regex(/^[A-Za-z\s]+$/, {
      message: VALIDATION_MESSAGES.first_name.pattern,
    }),
  last_name: z
    .string()
    .min(2, { message: VALIDATION_MESSAGES.last_name.min })
    .regex(/^[A-Za-z\s]+$/, { message: VALIDATION_MESSAGES.last_name.pattern }),
  dob: z.string().refine((date) => new Date(date) < new Date(), {
    message: VALIDATION_MESSAGES.dob,
  }),
  gender: z.enum(["male", "female"], {
    errorMap: () => ({ message: VALIDATION_MESSAGES.gender }),
  }),
  role: z.enum(["student", "professional", "employer"], {
    errorMap: () => ({ message: VALIDATION_MESSAGES.role }),
  }),
  phone_number: z
    .string()
    .min(10, { message: VALIDATION_MESSAGES.phone.min })
    .regex(/^\d+$/, { message: VALIDATION_MESSAGES.phone.pattern }),
  email: z.string().email({ message: VALIDATION_MESSAGES.email }),
  referral_code: z.string().optional(),
});

const ERROR_MESSAGES = {
  default:
    "We're having trouble processing your registration. Please try again.",
  badRequest: "Please check your information and try again.",
  conflict:
    "An account with this email already exists. Please use a different email.",
  validation:
    "Some of your information is invalid. Please review and correct the highlighted fields.",
  serverError:
    "Our servers are temporarily unavailable. Please try again in a few minutes.",
  networkError: "Please check your internet connection and try again.",
};

const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  CONFLICT: 409,
  VALIDATION_ERROR: 422,
  SERVER_ERROR: 500,
};

const FORM_OPTIONS = {
  gender: [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ],
  role: [
    { value: "student", label: "Student" },
    { value: "professional", label: "Professional" },
  ],
};

const BUTTON_TEXT = {
  loading: "Creating your account...",
  default: "Join BuilderClan",
};

function FormField({ id, type = "text", label, placeholder, register, error }) {
  const inputClassName = `${styles.inputGlass} ${
    error ? styles.inputError : ""
  }`;

  return (
    <div className={styles.formGroup}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={inputClassName}
        {...register(id)}
      />
      {error && <p className={styles.errorMessage}>{error.message}</p>}
    </div>
  );
}

function SelectField({ id, label, options, register, error }) {
  const selectClassName = `${styles.select} ${error ? styles.inputError : ""}`;

  return (
    <div className={styles.formGroup}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <select id={id} className={selectClassName} {...register(id)}>
        <option value="">Select</option>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      {error && <p className={styles.errorMessage}>{error.message}</p>}
    </div>
  );
}

function BackgroundElements() {
  return (
    <div className={styles.container}>
      <div className={`${styles.floatingOrb} ${styles.topRightOrb}`} />
      <div className={`${styles.floatingOrb} ${styles.bottomLeftOrb}`} />
    </div>
  );
}

function getErrorMessage(error) {
  const status = error.response?.status;

  if (status === HTTP_STATUS.BAD_REQUEST) return ERROR_MESSAGES.badRequest;
  if (status === HTTP_STATUS.CONFLICT) return ERROR_MESSAGES.conflict;
  if (status === HTTP_STATUS.VALIDATION_ERROR) return ERROR_MESSAGES.validation;
  if (status >= HTTP_STATUS.SERVER_ERROR) return ERROR_MESSAGES.serverError;

  if (
    error.code === "NETWORK_ERROR" ||
    error.message.includes("Network Error")
  ) {
    return ERROR_MESSAGES.networkError;
  }

  const serverMessage = error.response?.data?.message;
  if (
    serverMessage &&
    !serverMessage.includes("Error:") &&
    !serverMessage.includes("Exception")
  ) {
    return serverMessage;
  }

  return ERROR_MESSAGES.default;
}

function extractReferralCode(pathname) {
  const pathParts = pathname.split("/");
  return pathParts.length > 2 && pathParts[2] ? pathParts[2] : "";
}

function isSuccessfulResponse(status) {
  return status === HTTP_STATUS.OK || status === HTTP_STATUS.CREATED;
}

export default function RegistrationForm({ initialReferralCode = "" }) {
  const [formState, setFormState] = useState({
    isSubmitting: false,
    submitError: "",
    submitSuccess: false,
  });
  const [referralCode, setReferralCode] = useState(initialReferralCode);

  const pathname = usePathname();
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
    if (!initialReferralCode) {
      const extractedCode = extractReferralCode(pathname);
      if (extractedCode) {
        setReferralCode(extractedCode);
      }
    }
  }, [pathname, initialReferralCode]);

  useEffect(() => {
    if (referralCode) {
      reset({ referral_code: referralCode });
    }
  }, [referralCode, reset]);

  const onSubmit = async (data) => {
    setFormState({ isSubmitting: true, submitError: "", submitSuccess: false });

    try {
      const formData = { ...data, referral_code: referralCode };
      const response = await axios.post(API_ENDPOINT, formData, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (isSuccessfulResponse(response.status)) {
        setFormState({
          isSubmitting: false,
          submitError: "",
          submitSuccess: true,
        });
        reset();
      } else {
        throw new Error("Registration failed");
      }
    } catch (error) {
      setFormState({
        isSubmitting: false,
        submitError: getErrorMessage(error),
        submitSuccess: false,
      });
    }
  };

  if (formState.submitSuccess) {
    return (
      <div className={styles.morphBg}>
        <BackgroundElements />
        <div className={styles.glassEffect}>
          <div className={styles.gradientOverlay} />
          <Success />
        </div>
        <div className={styles.bottomBorder} />
      </div>
    );
  }

  return (
    <div className={styles.morphBg}>
      <BackgroundElements />

      <div className={styles.glassEffect}>
        <div className={styles.gradientOverlay} />
        <div>
          <h1 className={styles.title}>BuilderClan</h1>
          <p className={styles.subtitle}>Join our exclusive community</p>

          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            {referralCode && (
              <input
                type="hidden"
                {...register("referral_code")}
                value={referralCode}
              />
            )}

            <div className={styles.formRow}>
              <FormField
                id="first_name"
                label="First Name"
                placeholder="Enter your first name"
                register={register}
                error={errors.first_name}
              />

              <FormField
                id="last_name"
                label="Last Name"
                placeholder="Enter your last name"
                register={register}
                error={errors.last_name}
              />
            </div>

            <div className={styles.formRow}>
              <FormField
                id="email"
                type="email"
                label="Email"
                placeholder="Enter your email"
                register={register}
                error={errors.email}
              />

              <FormField
                id="phone_number"
                type="tel"
                label="Mobile Number"
                placeholder="Enter your mobile number"
                register={register}
                error={errors.phone_number}
              />
            </div>

            <FormField
              id="dob"
              type="date"
              label="Date of Birth"
              register={register}
              error={errors.dob}
            />

            <div className={styles.formRow}>
              <SelectField
                id="gender"
                label="Gender"
                options={FORM_OPTIONS.gender}
                register={register}
                error={errors.gender}
              />

              <SelectField
                id="role"
                label="Role"
                options={FORM_OPTIONS.role}
                register={register}
                error={errors.role}
              />
            </div>

            {formState.submitError && (
              <div className={styles.errorAlert}>
                <strong>Registration Failed:</strong> {formState.submitError}
              </div>
            )}

            <button
              type="submit"
              className={styles.button}
              disabled={formState.isSubmitting}
            >
              {formState.isSubmitting
                ? BUTTON_TEXT.loading
                : BUTTON_TEXT.default}
            </button>
          </form>
        </div>
      </div>

      <div className={styles.bottomBorder} />
    </div>
  );
}
