import { useState } from "react";
import { motion } from "framer-motion";
import { LoaderCircle } from "lucide-react";

const MotionInput = motion.input;
const MotionTextarea = motion.textarea;

export default function ContactForm() {
  const [submissionState, setSubmissionState] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmissionState("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      const result = await response.json().catch(() => null);

      if (!response.ok) {
        const formspreeError = result?.errors
          ?.map((error) => error.message)
          .join(" ");
        throw new Error(
          formspreeError || "Your message could not be sent. Please try again.",
        );
      }

      form.reset();
      setSubmissionState("success");
    } catch (error) {
      setErrorMessage(
        error.message || "Something went wrong. Please try again.",
      );
      setSubmissionState("error");
    }
  }

  return (
    <form
      action={`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_FORM_ID}`}
      method="POST"
      onSubmit={handleSubmit}
      aria-busy={submissionState === "submitting"}
      className="grid gap-4 card p-6"
    >
      <MotionInput
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        type="text"
        name="name"
        required
        placeholder="Name"
        className="border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <MotionInput
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        type="email"
        name="email"
        required
        placeholder="Email"
        className="border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <MotionInput
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        type="tel"
        name="phone"
        placeholder="Phone"
        className="border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <MotionTextarea
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        name="message"
        required
        placeholder="Message"
        rows={5}
        className="border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <button
        type="submit"
        className="btn-accent"
        disabled={submissionState === "submitting"}
      >
        {submissionState === "submitting" && (
          <LoaderCircle aria-hidden="true" className="h-5 w-5 animate-spin" />
        )}
        {submissionState === "submitting" ? "Sending..." : "Send Message"}
      </button>
      {submissionState === "success" && (
        <p role="status" className="text-sm text-green-700">
          Thanks! Your message has been sent successfully.
        </p>
      )}
      {submissionState === "error" && (
        <p role="alert" className="text-sm text-red-700">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
