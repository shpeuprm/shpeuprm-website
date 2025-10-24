"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

export default function Home() {
  return (
    <>
      {/* Brand palette as CSS variables (exact hex from SHPE guide) */}
      <style jsx global>{`
        :root {
          --shpe-navy: #001f5b; /* Pantone 281 */
          --shpe-blue: #0070c0; /* Pantone 660 */
          --shpe-teal: #72a9be; /* Pantone 7695 */
          --shpe-orange: #fd652f; /* Pantone 1655 */
          --shpe-red: #d33a02; /* Pantone 485 */
          --shpe-gray: #626366; /* Pantone 446 */
          --surface: #ffffff;
          --bg: #0b1220; /* deep navy-tinted background for hero bleed */
        }
      `}</style>

      <div className="bg-white text-slate-900">
        {/* =========================
            Hero
        ========================== */}
        <section className="relative isolate overflow-hidden py-24 sm:py-32">
          {/* Gradient backdrop using brand blues for a bold hero */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--shpe-navy)] via-[#0d2f7a] to-[var(--shpe-blue)]" />
          {/* soft radial accent using teal */}
          <div
            aria-hidden="true"
            className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full blur-3xl opacity-30"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 50%, var(--shpe-teal), transparent)",
            }}
          />
          {/* orange ribbon */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-px w-[80%] bg-gradient-to-r from-transparent via-[var(--shpe-orange)] to-transparent opacity-40" />

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              className="mx-auto max-w-3xl text-center text-white"
              {...staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.h1
                className="text-4xl font-bold tracking-tight sm:text-6xl"
                {...fadeInUp}
              >
                Society of Hispanic Professional Engineers
              </motion.h1>

              <motion.p
                className="mt-4 text-2xl/9 text-slate-100"
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                UPRM Chapter
              </motion.p>

              <motion.p
                className="mt-6 text-lg/8 text-slate-200"
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Stay up to date with our events, resources, and opportunities.
              </motion.p>

              <motion.p
                className="mt-3 text-base/7 text-slate-300"
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                We foster academic excellence, professional development, and a
                strong community of Hispanic engineers and STEM professionals.
              </motion.p>

              <motion.div
                className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {/* Primary (orange) */}
                <Link
                  href="/about"
                  aria-label="Learn more about SHPE UPRM"
                  className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ backgroundColor: "var(--shpe-orange)" }}
                >
                  Learn More About Us
                </Link>
                {/* Secondary (light) */}
                <Link
                  href="/events"
                  aria-label="View upcoming SHPE UPRM events"
                  className="inline-flex items-center justify-center rounded-2xl bg-white/95 px-6 py-3 text-base font-semibold text-[var(--shpe-navy)] ring-1 ring-inset ring-white/20 backdrop-blur transition-all hover:bg-white focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  View Upcoming Events
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =========================
            Features
        ========================== */}
        <section className="relative overflow-hidden py-20 sm:py-24 bg-gradient-to-b from-slate-50 to-white">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-[var(--shpe-teal)]/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--shpe-blue)]/5 rounded-full blur-3xl -z-10" />

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              className="text-center max-w-3xl mx-auto"
              {...fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-3xl font-bold tracking-tight text-[var(--shpe-navy)] sm:text-4xl"
                {...fadeInUp}
              >
                What We Offer
              </motion.h2>
              <motion.p
                className="mt-4 text-base text-slate-600"
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Discover the benefits and opportunities that come with being
                part of SHPE UPRM
              </motion.p>
            </motion.div>

            <motion.div
              className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
              {...staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {/* Card 1 - Academic Excellence */}
              <motion.div
                className="group relative rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:ring-[var(--shpe-blue)]/30"
                {...scaleIn}
              >
                {/* Decorative gradient blob */}
                <div className="absolute -top-1 -right-1 w-24 h-24 bg-gradient-to-br from-[var(--shpe-blue)]/10 to-transparent rounded-full blur-2xl -z-10 group-hover:scale-150 transition-transform duration-500" />

                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--shpe-blue)]/10 to-[var(--shpe-blue)]/5 ring-1 ring-[var(--shpe-blue)]/20 transition-all group-hover:scale-110 group-hover:ring-[var(--shpe-blue)]/40">
                  <svg
                    className="w-7 h-7 text-[var(--shpe-blue)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-[var(--shpe-navy)] mb-3">
                  Academic Excellence
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Support and mentorship to help you succeed in your academic
                  journey through study groups, tutoring, and peer
                  collaboration.
                </p>

                {/* Hover indicator */}
                <div className="mt-6 flex items-center text-sm font-medium text-[var(--shpe-blue)] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <svg
                    className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Card 2 - Professional Development */}
              <motion.div
                className="group relative rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:ring-[var(--shpe-teal)]/30"
                {...scaleIn}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {/* Decorative gradient blob */}
                <div className="absolute -top-1 -right-1 w-24 h-24 bg-gradient-to-br from-[var(--shpe-teal)]/10 to-transparent rounded-full blur-2xl -z-10 group-hover:scale-150 transition-transform duration-500" />

                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--shpe-teal)]/10 to-[var(--shpe-teal)]/5 ring-1 ring-[var(--shpe-teal)]/20 transition-all group-hover:scale-110 group-hover:ring-[var(--shpe-teal)]/40">
                  <svg
                    className="w-7 h-7 text-[var(--shpe-teal)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-[var(--shpe-navy)] mb-3">
                  Professional Development
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Workshops, networking events, and career opportunities to
                  prepare you for your future in engineering and technology.
                </p>

                {/* Hover indicator */}
                <div className="mt-6 flex items-center text-sm font-medium text-[var(--shpe-teal)] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <svg
                    className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Card 3 - Community */}
              <motion.div
                className="group relative rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:ring-[var(--shpe-orange)]/30"
                {...scaleIn}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {/* Decorative gradient blob */}
                <div className="absolute -top-1 -right-1 w-24 h-24 bg-gradient-to-br from-[var(--shpe-orange)]/10 to-transparent rounded-full blur-2xl -z-10 group-hover:scale-150 transition-transform duration-500" />

                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--shpe-orange)]/10 to-[var(--shpe-orange)]/5 ring-1 ring-[var(--shpe-orange)]/20 transition-all group-hover:scale-110 group-hover:ring-[var(--shpe-orange)]/40">
                  <svg
                    className="w-7 h-7 text-[var(--shpe-orange)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-[var(--shpe-navy)] mb-3">
                  Community
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Build lasting connections with fellow Hispanic engineers and
                  create a supportive network that lasts beyond graduation.
                </p>

                {/* Hover indicator */}
                <div className="mt-6 flex items-center text-sm font-medium text-[var(--shpe-orange)] opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg
                    className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =========================
            Call to Action
        ========================== */}
        <section className="relative isolate overflow-hidden py-20">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--shpe-teal)] to-[var(--shpe-blue)]" />
          <div className="mx-auto max-w-6xl px-6 text-center text-white lg:px-8">
            <motion.div
              {...fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-3xl font-bold tracking-tight sm:text-4xl"
                {...fadeInUp}
              >
                Ready to Get Involved?
              </motion.h3>
              <motion.p
                className="mx-auto mt-4 max-w-2xl text-lg text-slate-100"
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Join a vibrant community of Hispanic engineers making a
                difference.
              </motion.p>

              <motion.div
                className="mt-8 inline-flex"
                {...scaleIn}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link
                  href="/contact"
                  aria-label="Contact SHPE UPRM"
                  className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ backgroundColor: "var(--shpe-orange)" }}
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </div>
          {/* subtle navy footer bleed for polish */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-20 bg-[var(--shpe-navy)]/5" />
        </section>
      </div>
    </>
  );
}
