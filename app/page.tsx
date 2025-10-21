"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

export default function Home() {
  return (
    <>
      {/* Brand palette as CSS variables (exact hex from SHPE guide) */}
      <style jsx global>{`
        :root{
          --shpe-navy: #001F5B;   /* Pantone 281 */
          --shpe-blue: #0070C0;   /* Pantone 660 */
          --shpe-teal: #72A9BE;   /* Pantone 7695 */
          --shpe-orange: #FD652F; /* Pantone 1655 */
          --shpe-red: #D33A02;    /* Pantone 485 */
          --shpe-gray: #626366;   /* Pantone 446 */
          --surface: #ffffff;
          --bg: #0b1220;          /* deep navy-tinted background for hero bleed */
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
            style={{ background: "radial-gradient(60% 60% at 50% 50%, var(--shpe-teal), transparent)" }}
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
              <motion.h1 className="text-4xl font-bold tracking-tight sm:text-6xl" {...fadeInUp}>
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
                Empowering Hispanic engineers at the University of Puerto Rico Mayagüez.
              </motion.p>

              <motion.div
                className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.3 }}
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
            Welcome
        ========================== */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <motion.div
              className="text-center"
              {...fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-3xl font-bold tracking-tight text-[var(--shpe-navy)] sm:text-4xl"
                {...fadeInUp}
              >
                Welcome to SHPE UPRM!
              </motion.h2>
              <motion.p
                className="mx-auto mt-4 max-w-3xl text-lg text-slate-700"
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Stay up to date with our events, resources, and opportunities.
              </motion.p>
              <motion.p
                className="mx-auto mt-2 max-w-3xl text-base text-slate-600"
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                We foster academic excellence, professional development, and a strong community of Hispanic engineers and STEM professionals.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* =========================
            Features
        ========================== */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.h3
              className="text-center text-2xl font-bold tracking-tight text-[var(--shpe-navy)] sm:text-3xl"
              {...fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              What We Offer
            </motion.h3>

            <motion.div
              className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              {...staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {/* Card 1 */}
              <motion.div
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                {...scaleIn}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--shpe-blue)]/10 text-2xl">
                  🎓
                </div>
                <h4 className="text-lg font-semibold text-[var(--shpe-navy)]">Academic Excellence</h4>
                <p className="mt-2 text-sm text-slate-600">
                  Support and mentorship to help you succeed in your academic journey.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                {...scaleIn}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--shpe-teal)]/15 text-2xl">
                  💼
                </div>
                <h4 className="text-lg font-semibold text-[var(--shpe-navy)]">Professional Development</h4>
                <p className="mt-2 text-sm text-slate-600">
                  Workshops, networking events, and career opportunities.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                {...scaleIn}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--shpe-orange)]/15 text-2xl">
                  🤝
                </div>
                <h4 className="text-lg font-semibold text-[var(--shpe-navy)]">Community</h4>
                <p className="mt-2 text-sm text-slate-600">
                  Build lasting connections with fellow Hispanic engineers.
                </p>
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
                Join a vibrant community of Hispanic engineers making a difference.
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
