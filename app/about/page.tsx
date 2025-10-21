"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * AboutPage — refactored for accessible, responsive, and consistent UX.
 * - Removes hidden deps (no custom animation lib, no icon libs).
 * - Honors prefers-reduced-motion.
 * - Uses semantic sections with anchors for in‑page nav.
 * - Tight, readable line length and consistent spacing.
 *
 * Brand palette (SHPE):
 * NAVY        #001F5B
 * BLUE        #0070C0
 * CYAN        #72A9BE
 * ORANGE      #FD652F
 * RED-ORANGE  #D33A02
 * GRAY        #626366
 */
export default function AboutPage() {
  const reduceMotion = useReducedMotion();

  // Motion variants (kept subtle; disabled when user prefers reduced motion)
  const fadeInUp = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] },
    },
  } as const;

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.45, ease: [0.2, 0.8, 0.2, 1] },
    },
  } as const;

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  } as const;

  const anim = reduceMotion
    ? { initial: false as const, whileInView: undefined, animate: undefined }
    : { initial: "hidden" as const, whileInView: "visible", animate: "visible" as const };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Skip link for keyboard users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:shadow-lg"
      >
        Skip to content
      </a>

      {/* Hero */}
      <section
        aria-labelledby="about-hero-title"
        className="relative isolate overflow-hidden bg-gradient-to-br from-[#001F5B] to-[#0070C0] text-white"
      >
        <div className="absolute inset-0 pointer-events-none opacity-20 [mask-image:radial-gradient(50%_50%_at_50%_0%,#000,transparent_80%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <motion.h1
            id="about-hero-title"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-sm"
            variants={fadeInUp}
            {...anim}
          >
            About SHPE UPRM
          </motion.h1>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-white/90"
            variants={fadeInUp}
            {...anim}
          >
            Learn more about our mission, vision, and how we empower Hispanic students in STEM.
          </motion.p>

          {/* On this page: anchor nav */}
          <motion.nav
            aria-label="On this page"
            className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-3"
            variants={stagger}
            {...anim}
          >
            {[
              { href: "#who-we-are", label: "Who We Are" },
              { href: "#our-mission", label: "Our Mission" },
              { href: "#what-we-offer", label: "What We Offer" },
              { href: "#our-values", label: "Our Values" },
            ].map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/60 focus-visible:ring-offset-[#001F5B]"
                variants={fadeInUp}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.nav>
        </div>
      </section>

      {/* Main */}
      <main id="main" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="mx-auto max-w-3xl">
          {/* Who We Are */}
          <Section id="who-we-are" title="Who We Are" anim={anim} fadeInUp={fadeInUp}>
            <Card anim={anim} scaleIn={scaleIn}>
              <p className="text-lg leading-8 text-gray-700">
                SHPE UPRM empowers Hispanic students in STEM at the University of Puerto Rico, Mayagüez.
                We foster academic excellence, professional growth, and a supportive comunidad.
              </p>
            </Card>
          </Section>

          {/* Our Mission */}
          <Section id="our-mission" title="Our Mission" anim={anim} fadeInUp={fadeInUp}>
            <Card anim={anim} scaleIn={scaleIn}>
              <p className="text-lg leading-8 text-gray-700">
                Promote the development of Hispanic students in engineering, science, and technical fields
                through mentorship, leadership opportunities, and industry‑connected programming.
              </p>
            </Card>
          </Section>

          {/* What We Offer */}
          <Section id="what-we-offer" title="What We Offer" anim={anim} fadeInUp={fadeInUp}>
            <Card anim={anim} scaleIn={scaleIn}>
              <ul role="list" className="space-y-6">
                <Offer
                  title="Professional Workshops & Networking"
                  desc="Connect with engineers and recruiters while sharpening resume, interviewing, and career skills."
                />
                <Offer
                  title="Academic Support & Mentorship"
                  desc="Guidance from upper‑class mentors and alumni who understand your journey."
                />
                <Offer
                  title="Community Outreach & Volunteering"
                  desc="Give back through K‑12 outreach, STEM fairs, and local service events."
                />
                <Offer
                  title="Leadership Development"
                  desc="Lead committees, manage projects, and level up as an organizer and teammate."
                />
              </ul>
            </Card>
          </Section>

          {/* Values */}
          <Section id="our-values" title="Our Values" anim={anim} fadeInUp={fadeInUp}>
            <motion.div
              className="grid grid-cols-1 gap-6 md:grid-cols-2"
              variants={stagger}
              {...anim}
            >
              <ValueCard title="Diversity & Inclusion" anim={anim} scaleIn={scaleIn}>
                We celebrate diverse perspectives and create an inclusive environment for all students.
              </ValueCard>
              <ValueCard title="Excellence" anim={anim} scaleIn={scaleIn}>
                We strive for excellence in academics, professional development, and service.
              </ValueCard>
              <ValueCard title="Community" anim={anim} scaleIn={scaleIn}>
                We build strong connections and support networks that extend beyond graduation.
              </ValueCard>
              <ValueCard title="Leadership" anim={anim} scaleIn={scaleIn}>
                We empower members to become leaders in their fields and communities.
              </ValueCard>
            </motion.div>
          </Section>
        </div>

        {/* Back to top */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about-hero-title"
            className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#001F5B]"
          >
            Back to top
          </a>
        </div>
      </main>
    </div>
  );
}

/* ---------- Small composables ---------- */
function Section({
  id,
  title,
  children,
  anim,
  fadeInUp,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  anim: any;
  fadeInUp: any;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-28 mb-12 md:mb-14">
      <motion.h2
        id={`${id}-title`}
        className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900"
        variants={fadeInUp}
        {...anim}
      >
        {title}
      </motion.h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function Card({ children, anim, scaleIn }: { children: React.ReactNode; anim: any; scaleIn: any }) {
  return (
    <motion.div
      className="rounded-2xl border border-gray-100 bg-white/80 p-6 shadow-sm backdrop-blur-sm md:p-8"
      variants={scaleIn}
      {...anim}
    >
      {children}
    </motion.div>
  );
}

function Offer({ title, desc }: { title: string; desc: string }) {
  return (
    <li className="flex gap-4">
      <span aria-hidden className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full border border-[#FD652F]/30 bg-[#FD652F]/10 text-base leading-none">
        ✓
      </span>
      <div>
        <h3 className="text-lg font-semibold text-[#001F5B]">{title}</h3>
        <p className="mt-1 text-gray-700">{desc}</p>
      </div>
    </li>
  );
}

function ValueCard({
  title,
  children,
  anim,
  scaleIn,
}: {
  title: string;
  children: React.ReactNode;
  anim: any;
  scaleIn: any;
}) {
  return (
    <motion.div
      className="rounded-2xl border border-gray-100 bg-white/80 p-6 shadow-sm backdrop-blur-sm"
      variants={scaleIn}
      {...anim}
    >
      <h3 className="text-xl font-semibold text-[#0070C0]">{title}</h3>
      <p className="mt-2 text-gray-700">{children}</p>
    </motion.div>
  );
}
