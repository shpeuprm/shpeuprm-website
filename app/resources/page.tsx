"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * UX notes
 * - Uses semantic sections + in‑page chips for quick navigation
 * - Accessible external links (screen reader text: "opens in new tab")
 * - Inline SVG icons (no emoji / no icon library deps)
 * - SHPE palette: NAVY #001F5B, BLUE #0070C0, CYAN #72A9BE, ORANGE #FD652F, RED‑ORANGE #D33A02, GRAY #626366
 */

interface Resource {
  title: string;
  url: string;
  description: string;
  category: string;
}

const resources: Resource[] = [
  {
    title: "SHPE National Resources",
    url: "https://shpe.org/resources/",
    description:
      "Official SHPE resources including scholarships, career tools, and more.",
    category: "SHPE",
  },
  {
    title: "UPRM Student Resources",
    url: "https://www.uprm.edu/portada/recursos/",
    description:
      "Academic support, counseling, and campus services for UPRM students.",
    category: "Academic",
  },
  {
    title: "Coursera",
    url: "https://www.coursera.org/",
    description:
      "Free and paid online courses to boost your skills in engineering, programming, and more.",
    category: "Learning",
  },
  {
    title: "LinkedIn Learning",
    url: "https://www.linkedin.com/learning/",
    description:
      "Professional development courses for students and young professionals.",
    category: "Professional",
  },
  {
    title: "SHPE UPRM GitHub",
    url: "https://github.com/shpe-uprm",
    description:
      "Access open-source projects, coding resources, and technical workshops from SHPE UPRM.",
    category: "Technical",
  },
];

export default function ResourcesPage() {
  const reduceMotion = useReducedMotion();
  const categories = React.useMemo(
    () => Array.from(new Set(resources.map((r) => r.category))),
    []
  );

  // Motion variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] } },
  } as const;

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: [0.2, 0.8, 0.2, 1] } },
  } as const;

  const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } } as const;

  const anim = reduceMotion
    ? { initial: false as const, whileInView: undefined, animate: undefined }
    : { initial: "hidden" as const, whileInView: "visible", animate: "visible" as const };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:shadow-lg"
      >
        Skip to content
      </a>

      {/* Hero */}
      <section
        aria-labelledby="resources-hero-title"
        className="relative isolate overflow-hidden bg-gradient-to-br from-[#001F5B] to-[#0070C0] text-white"
      >
        <div className="absolute inset-0 pointer-events-none opacity-20 [mask-image:radial-gradient(60%_60%_at_50%_0%,#000,transparent_75%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <motion.h1
            id="resources-hero-title"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-sm"
            variants={fadeInUp}
            {...anim}
          >
            SHPE UPRM Resources
          </motion.h1>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-white/90"
            variants={fadeInUp}
            {...anim}
          >
            Your hub for academic, professional, and SHPE-related materials.
          </motion.p>

          {/* On this page: chips */}
          <motion.nav
            aria-label="On this page"
            className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-3"
            variants={stagger}
            {...anim}
          >
            {[
              { href: "#featured", label: "Featured" },
              { href: "#categories", label: "Categories" },
              { href: "#extras", label: "Additional" },
              { href: "#contact", label: "Contact" },
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
        {/* Featured Resources */}
        <Section id="featured" title="Featured Resources" anim={anim} fadeInUp={fadeInUp}>
          <motion.ul role="list" className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={stagger} {...anim}>
            {resources.map((resource, i) => (
              <li key={`${resource.title}-${i}`} className="list-none">
                <ResourceCard resource={resource} anim={anim} scaleIn={scaleIn} />
              </li>
            ))}
          </motion.ul>
        </Section>

        {/* Categories Overview */}
        {/* <Section id="categories" title="Resource Categories" anim={anim} fadeInUp={fadeInUp}>
          <Card className="border-2 border-gray-200 bg-gradient-to-br from-gray-50 to-white" anim={anim} scaleIn={scaleIn}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {categories.map((category) => {
                const count = resources.filter((r) => r.category === category).length;
                return (
                  <div
                    key={category}
                    className="rounded-lg bg-white p-4 text-center shadow-sm transition-shadow hover:shadow-md"
                  >
                    <span className="font-semibold text-[#0070C0]">{category}</span>
                    <p className="mt-1 text-sm text-gray-600">
                      {count} {count === 1 ? "resource" : "resources"}
                    </p>
                  </div>
                );
              })}
            </div>
          </Card>
        </Section> */}

        {/* Additional Resources */}
        <Section id="extras" title="Additional Resources" anim={anim} fadeInUp={fadeInUp}>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={stagger} {...anim}>
            <Card className="text-center" anim={anim} scaleIn={scaleIn}>
              <div className="mb-3 flex items-center justify-center">
                <IconBook className="h-8 w-8 text-[#0070C0]" />
              </div>
              <h4 className="text-xl font-semibold text-[#001F5B]">Study Materials</h4>
              <p className="mt-2 text-gray-700">
                Access study guides, practice problems, and course materials shared by SHPE members.
              </p>
            </Card>
            <Card className="text-center" anim={anim} scaleIn={scaleIn}>
              <div className="mb-3 flex items-center justify-center">
                <IconBulb className="h-8 w-8 text-[#FD652F]" />
              </div>
              <h4 className="text-xl font-semibold text-[#001F5B]">Career Resources</h4>
              <p className="mt-2 text-gray-700">
                Resume templates, interview prep guides, and job search strategies for engineers.
              </p>
            </Card>
            <Card className="text-center" anim={anim} scaleIn={scaleIn}>
              <div className="mb-3 flex items-center justify-center">
                <IconCap className="h-8 w-8 text-[#72A9BE]" />
              </div>
              <h4 className="text-xl font-semibold text-[#001F5B]">Scholarship Info</h4>
              <p className="mt-2 text-gray-700">
                Find scholarship opportunities specifically for Hispanic students in STEM fields.
              </p>
            </Card>
          </motion.div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Have a Resource to Suggest?" anim={anim} fadeInUp={fadeInUp}>
          <Card className="text-center text-white bg-gradient-to-br from-[#001F5B] to-[#0070C0]" anim={anim} scaleIn={scaleIn}>
            <p className="mx-auto max-w-2xl text-white/90">
              We&apos;re always looking to expand our resource library. Share your recommendations with us!
            </p>
            <div className="mt-6">
              <Button href="mailto:shpe.uprm@upr.edu" variant="accent">
                Email Us Your Suggestions
              </Button>
            </div>
          </Card>
        </Section>

        {/* Back to top */}
        <div className="mt-16 flex justify-center">
          <a
            href="#resources-hero-title"
            className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#001F5B]"
          >
            Back to top
          </a>
        </div>
      </main>
    </div>
  );
}

/* ----------------- Composables ----------------- */
function Section({ id, title, children, anim, fadeInUp }: { id: string; title: string; children: React.ReactNode; anim: any; fadeInUp: any }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-28 mb-12 md:mb-14">
      <motion.h2 id={`${id}-title`} className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900" variants={fadeInUp} {...anim}>
        {title}
      </motion.h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function Card({ className = "", children, anim, scaleIn }: { className?: string; children: React.ReactNode; anim?: any; scaleIn?: any }) {
  return (
    <motion.div
      className={`rounded-2xl border border-gray-100 bg-white/80 p-6 shadow-sm backdrop-blur-sm md:p-8 ${className}`}
      variants={scaleIn}
      {...anim}
    >
      {children}
    </motion.div>
  );
}

function ResourceCard({ resource, anim, scaleIn }: { resource: Resource; anim?: any; scaleIn?: any }) {
  return (
    <Card className="transition hover:shadow-md focus-within:shadow-md" anim={anim} scaleIn={scaleIn}>
      <div className="mb-3 flex items-start justify-between">
        <span className="inline-block rounded-full bg-[#0070C0]/10 px-3 py-1 text-sm font-semibold text-[#0070C0]">
          {resource.category}
        </span>
      </div>
      <h3 className="text-xl font-bold tracking-tight text-[#001F5B]">
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 align-middle outline-none transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#001F5B] rounded"
        >
          {resource.title}
          <IconExternal className="h-4 w-4 text-[#001F5B]" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </h3>
      <p className="mt-2 text-gray-700">{resource.description}</p>
    </Card>
  );
}

function Button({ href, children, variant = "solid" }: { href: string; children: React.ReactNode; variant?: "solid" | "light" | "accent" }) {
  const base = "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2";
  const styles: Record<string, string> = {
    solid: "bg-[#001F5B] text-white hover:opacity-95 focus-visible:ring-[#001F5B]",
    light: "bg-white text-[#001F5B] border border-white/20 hover:bg-white/90 focus-visible:ring-white",
    accent: "bg-[#FD652F] text-white hover:opacity-95 focus-visible:ring-[#FD652F]",
  };
  return (
    <a href={href} className={`${base} ${styles[variant]}`}>{children}</a>
  );
}

/* ----------------- Icons (inline SVGs) ----------------- */
function IconExternal({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 3h7v7" />
      <path d="M10 14L21 3" />
      <path d="M21 14v7h-7" />
      <path d="M3 10v11h11" />
    </svg>
  );
}

function IconBook({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v15H6.5A2.5 2.5 0 004 19.5V4.5A2.5 2.5 0 016.5 2z" />
    </svg>
  );
}

function IconBulb({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M2 11a10 10 0 1020 0A10 10 0 002 11z" />
      <path d="M8 11c0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.5-.8 2.2-1.6 3.1-.6.6-1 1.1-1 1.9H10c0-.8-.4-1.3-1-1.9C8.8 13.2 8 12.5 8 11z" />
    </svg>
  );
}

function IconCap({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 10l10-5 10 5-10 5-10-5z" />
      <path d="M6 12v4c3 2 9 2 12 0v-4" />
    </svg>
  );
}
