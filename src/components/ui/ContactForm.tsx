"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";

const services = [
  "Medical Transcription",
  "Medical Billing Support",
  "Healthcare Data Entry",
  "Healthcare Data Management",
  "Power BI & Data Analytics",
  "Website Development",
  "Software Development",
  "IT Support",
  "Back-Office Support",
  "Other",
];

interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  serviceRequired: string;
  projectDetails: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  serviceRequired?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    serviceRequired: "",
    projectDetails: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.serviceRequired) {
      newErrors.serviceRequired = "Please select a service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          phone: "",
          serviceRequired: "",
          projectDetails: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="input-label">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className={`input ${errors.fullName ? "input-error" : ""}`}
          placeholder="John Smith"
        />
        {errors.fullName && (
          <p className="error-message">{errors.fullName}</p>
        )}
      </div>

      {/* Company Name */}
      <div>
        <label htmlFor="companyName" className="input-label">
          Company Name
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          className="input"
          placeholder="Acme Healthcare Inc."
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="input-label">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`input ${errors.email ? "input-error" : ""}`}
          placeholder="john@acmehealthcare.com"
        />
        {errors.email && (
          <p className="error-message">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="input-label">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="input"
          placeholder="+1 (555) 123-4567"
        />
      </div>

      {/* Service Required */}
      <div>
        <label htmlFor="serviceRequired" className="input-label">
          Service Required <span className="text-red-500">*</span>
        </label>
        <select
          id="serviceRequired"
          name="serviceRequired"
          value={formData.serviceRequired}
          onChange={handleChange}
          className={`select ${errors.serviceRequired ? "input-error" : ""}`}
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        {errors.serviceRequired && (
          <p className="error-message">{errors.serviceRequired}</p>
        )}
      </div>

      {/* Project Details */}
      <div>
        <label htmlFor="projectDetails" className="input-label">
          Project Details
        </label>
        <textarea
          id="projectDetails"
          name="projectDetails"
          value={formData.projectDetails}
          onChange={handleChange}
          className="textarea"
          placeholder="Tell us about your project requirements..."
          rows={4}
        />
      </div>

      {/* Submit Status */}
      {submitStatus === "success" && (
        <div className="flex items-center gap-2 p-4 bg-green-50 text-green-700 rounded-lg">
          <CheckCircle className="w-5 h-5" />
          <p>Thank you! Your inquiry has been submitted successfully. We will get back to you soon.</p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="flex items-center gap-2 p-4 bg-red-50 text-red-700 rounded-lg">
          <AlertCircle className="w-5 h-5" />
          <p>Something went wrong. Please try again or contact us directly.</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Request a Quote
          </>
        )}
      </button>
    </form>
  );
}
