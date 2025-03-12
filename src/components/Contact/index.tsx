"use client";

import { useState, FormEvent } from "react";
import SectionTitle from "../Common/SectionTitle";

export default function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  // Feedback states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: string;
    error?: string;
  }>({});

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      // Success
      setSubmitStatus({ success: data.message || "Message sent successfully!" });
      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus({
        error: error instanceof Error ? error.message : "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-28">
      <div className="container max-w-6xl mx-auto px-6">
        <SectionTitle
          mainTitle="CONTACT"
          title="Engineering Solutions for Your Projects"
          paragraph="Our team of qualified engineers is ready to assist with your infrastructure, development, and construction projects."
          center
        />
        <div className="-mx-4 flex justify-center mt-16">
          <div className="w-full px-4 lg:w-9/12">
            <form className="bg-gray-50 p-8 rounded-2xl shadow-sm" onSubmit={handleSubmit}>
              {/* Status messages */}
              {submitStatus.success && (
                <div className="mb-6 rounded-lg bg-green-50 p-4 text-sm text-green-800">
                  <p>{submitStatus.success}</p>
                </div>
              )}
              {submitStatus.error && (
                <div className="mb-6 rounded-lg bg-red-50 p-4 text-sm text-red-800">
                  <p>{submitStatus.error}</p>
                </div>
              )}

              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-8">
                    <label className="mb-2 block text-sm font-medium text-dark">Full Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full name"
                      required
                      className="input-field border-0 bg-white shadow-sm"
                    />
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-8">
                    <label className="mb-2 block text-sm font-medium text-dark">Organization</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Organization"
                      className="input-field border-0 bg-white shadow-sm"
                    />
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-8">
                    <label className="mb-2 block text-sm font-medium text-dark">Email Address <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email address"
                      required
                      className="input-field border-0 bg-white shadow-sm"
                    />
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-8">
                    <label className="mb-2 block text-sm font-medium text-dark">Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone number"
                      className="input-field border-0 bg-white shadow-sm"
                    />
                  </div>
                </div>
                <div className="w-full px-4">
                  <div className="mb-8">
                    <label className="mb-2 block text-sm font-medium text-dark">Project Details <span className="text-red-500">*</span></label>
                    <textarea
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Project details and requirements"
                      required
                      className="input-field resize-none border-0 bg-white shadow-sm"
                    ></textarea>
                  </div>
                </div>
                <div className="w-full px-4">
                  <div className="pt-4 text-center">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="mx-auto inline-flex items-center justify-center rounded-lg bg-primary px-9 py-4 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-xl disabled:opacity-70"
                    >
                      {isSubmitting ? "Sending..." : "Submit Inquiry"}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
