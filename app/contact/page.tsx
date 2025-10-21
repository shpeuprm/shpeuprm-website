"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, scaleIn, fadeInLeft, fadeInRight } from "@/lib/animations";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message:
            "Thank you for your message! We'll get back to you as soon as possible.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try emailing us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-secondary-light text-white py-16">
        <motion.div
          className="container-custom text-center"
          {...fadeIn}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            {...fadeInUp}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-100"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Get in touch with SHPE UPRM
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="card"
              {...fadeInLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="section-subheading mb-6">Send Us a Message</h2>

              {status.type && (
                <div
                  className={`mb-6 p-4 rounded-lg ${
                    status.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <div className="space-y-6">
              <motion.div
                className="card"
                {...fadeInRight}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <h2 className="section-subheading mb-6">
                  Other Ways to Reach Us
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-secondary text-2xl mr-4">✉️</span>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Email</h3>
                      <a
                        href="mailto:shpe.uprm@upr.edu"
                        className="text-secondary hover:underline"
                      >
                        shpe.uprm@upr.edu
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="text-secondary text-2xl mr-4">📍</span>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">
                        Address
                      </h3>
                      <p className="text-gray-600">
                        SHPE UPRM
                        <br />
                        University of Puerto Rico Mayagüez
                        <br />
                        Mayagüez, PR 00681
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="text-secondary text-2xl mr-4">🕐</span>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">
                        Office Hours
                      </h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 5:00 PM
                        <br />
                        (During academic semester)
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div
                className="card bg-gradient-to-br from-primary to-secondary text-white"
                {...fadeInRight}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                <p className="mb-6 text-gray-100">
                  Follow us on social media to stay updated with our latest
                  events and announcements!
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="bg-white text-primary px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Facebook
                  </a>
                  <a
                    href="#"
                    className="bg-white text-primary px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="bg-white text-primary px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </motion.div>

              {/* FAQ */}
              <motion.div
                className="card"
                {...fadeInRight}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-primary mb-4">
                  Quick Questions?
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Response time: 24-48 hours</li>
                  <li>• For urgent matters, please email directly</li>
                  <li>• Meeting times posted on Events page</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
