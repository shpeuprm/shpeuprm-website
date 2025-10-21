"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

// ---- Types ----
interface EventItem {
  title: string;
  date: string; // human‑readable; could be ISO in a real feed
  location: string;
  description: string;
  href?: string; // optional details page
}

// ---- Sample data (replace with server data/fetch) ----
const upcomingEvents: EventItem[] = [
  {
    title: "General Meeting #1",
    date: "August 25, 2025 • 6:00 PM",
    location: "Room Q‑101",
    description:
      "Kick off the semester with our first general meeting! Meet the board, learn about upcoming opportunities, and connect with fellow members.",
  },
  {
    title: "Resume Workshop",
    date: "September 10, 2025 • 5:30 PM",
    location: "Online",
    description:
      "Get your resume ready for the career fair! Our workshop will provide tips and personalized feedback.",
  },
  {
    title: "Networking Night",
    date: "October 3, 2025 • 7:00 PM",
    location: "Student Center",
    description:
      "Network with professionals and alumni. Bring your questions and business cards!",
  },
];

export default function EventsPage() {
  const reduceMotion = useReducedMotion();

  // ---- Motion variants ----
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
      <section aria-labelledby="events-hero-title" className="relative isolate overflow-hidden bg-gradient-to-br from-[#001F5B] to-[#0070C0] text-white">
        <div className="absolute inset-0 pointer-events-none opacity-20 [mask-image:radial-gradient(60%_60%_at_50%_0%,#000,transparent_75%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <motion.h1 id="events-hero-title" className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-sm" variants={fadeInUp} {...anim}>
            SHPE UPRM Events
          </motion.h1>
          <motion.p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-white/90" variants={fadeInUp} {...anim}>
            Stay up to date with our latest activities, workshops, and community events.
          </motion.p>

          {/* Quick anchor chips */}
          <motion.nav aria-label="On this page" className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-3" variants={stagger} {...anim}>
            {[
              { href: "#upcoming", label: "Upcoming" },
              { href: "#calendar", label: "Calendar" },
              { href: "#highlights", label: "Past Highlights" },
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
        {/* Upcoming */}
        <Section id="upcoming" title="Upcoming Events" anim={anim} fadeInUp={fadeInUp}>
          {upcomingEvents.length > 0 ? (
            <motion.ul role="list" className="space-y-6" variants={stagger} {...anim}>
              {upcomingEvents.map((event, i) => (
                <li key={`${event.title}-${i}`} className="list-none">
                  <EventCard event={event} fadeIn={scaleIn} anim={anim} />
                </li>
              ))}
            </motion.ul>
          ) : (
            <Card anim={anim} scaleIn={scaleIn} className="text-center py-12">
              <p className="text-lg text-gray-700">No upcoming events right now. Check back soon or subscribe to our calendar.</p>
              <div className="mt-6">
                <Button href="#calendar">Subscribe</Button>
              </div>
            </Card>
          )}
        </Section>

        {/* Calendar CTA */}
        <Section id="calendar" title="See the Full Calendar" anim={anim} fadeInUp={fadeInUp}>
          <Card
            anim={anim}
            scaleIn={scaleIn}
            className="text-center bg-gradient-to-br from-[#001F5B] to-[#0070C0] text-white"
          >
            <h3 className="text-2xl font-bold">Want to see more events?</h3>
            <p className="mx-auto mt-2 max-w-2xl text-white/90">
              Visit our interactive calendar for a complete view of activities, meetings, and deadlines. You can also subscribe.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Button href="/calendar" variant="light">View Full Calendar</Button>
              <Button href="/calendar?subscribe=1" variant="accent">Subscribe</Button>
            </div>
          </Card>
        </Section>

        {/* Past Highlights */}
        <Section id="highlights" title="Past Events Highlights" anim={anim} fadeInUp={fadeInUp}>
          <motion.div className="grid grid-cols-1 gap-6 md:grid-cols-2" variants={stagger} {...anim}>
            <ValueCard title="Spring 2025 Career Fair" anim={anim} scaleIn={scaleIn}>
              Over 50 students connected with leading companies in engineering and technology.
            </ValueCard>
            <ValueCard title="Leadership Summit" anim={anim} scaleIn={scaleIn}>
              Members developed leadership skills through workshops and panel discussions.
            </ValueCard>
            <ValueCard title="Community Outreach Day" anim={anim} scaleIn={scaleIn}>
              SHPE members volunteered with local schools to inspire the next generation of engineers.
            </ValueCard>
            <ValueCard title="Tech Talk Series" anim={anim} scaleIn={scaleIn}>
              Industry professionals shared insights on emerging technologies and career paths.
            </ValueCard>
          </motion.div>
        </Section>

        {/* Back to top */}
        <div className="mt-16 flex justify-center">
          <a
            href="#events-hero-title"
            className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#001F5B]"
          >
            Back to top
          </a>
        </div>
      </main>
    </div>
  );
}

// ---- Composables ----
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

function Card({ children, anim, scaleIn, className = "" }: { children: React.ReactNode; anim: any; scaleIn: any; className?: string }) {
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

function ValueCard({ title, children, anim, scaleIn }: { title: string; children: React.ReactNode; anim: any; scaleIn: any }) {
  return (
    <Card anim={anim} scaleIn={scaleIn}>
      <h3 className="text-xl font-semibold text-[#0070C0]">{title}</h3>
      <p className="mt-2 text-gray-700">{children}</p>
    </Card>
  );
}

function EventCard({ event, fadeIn, anim }: { event: EventItem; fadeIn: any; anim: any }) {
  return (
    <motion.article
      className="group rounded-2xl border border-gray-100 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition hover:shadow-md focus-within:shadow-md"
      variants={fadeIn}
      {...anim}
    >
      <header>
        <h3 className="text-2xl font-bold tracking-tight text-[#001F5B]">
          {event.href ? (
            <a href={event.href} className="outline-none ring-[#001F5B] transition hover:opacity-90 focus-visible:ring-2 rounded-sm">
              {event.title}
            </a>
          ) : (
            event.title
          )}
        </h3>
      </header>
      <dl className="mt-3 flex flex-col gap-2 text-sm text-gray-700 sm:flex-row sm:items-center sm:gap-6">
        <div className="flex items-center gap-2">
          <span aria-hidden className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#0070C0]/30 bg-[#0070C0]/10 text-[#0070C0]"><svg aria-hidden="true" viewBox="0 0 24 24" width="14" height="14" focusable="false"><rect x="3" y="5" width="18" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M16 3v4M8 3v4M3 11h18" fill="none" stroke="currentColor" strokeWidth="2"/></svg></span>
          <dt className="sr-only">Date</dt>
          <dd className="font-medium">
            <time>{event.date}</time>
          </dd>
        </div>
        <div className="flex items-center gap-2">
          <span aria-hidden className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#FD652F]/30 bg-[#FD652F]/10 text-[#FD652F]"><svg aria-hidden="true" viewBox="0 0 24 24" width="14" height="14" focusable="false"><path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="10" r="2.5" fill="none" stroke="currentColor" strokeWidth="2"/></svg></span>
          <dt className="sr-only">Location</dt>
          <dd className="font-medium">{event.location}</dd>
        </div>
      </dl>
      <p className="mt-3 leading-7 text-gray-700">{event.description}</p>
      {event.href && (
        <div className="mt-4">
          <Button href={event.href} variant="ghost">Event details</Button>
        </div>
      )}
    </motion.article>
  );
}

function Button({ href, children, variant = "solid" }: { href: string; children: React.ReactNode; variant?: "solid" | "light" | "accent" | "ghost" }) {
  const base = "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2";
  const styles: Record<string, string> = {
    solid: "bg-[#001F5B] text-white hover:opacity-95 focus-visible:ring-[#001F5B]",
    light: "bg-white text-[#001F5B] border border-white/20 hover:bg-white/90 focus-visible:ring-white",
    accent: "bg-[#FD652F] text-white hover:opacity-95 focus-visible:ring-[#FD652F]",
    ghost: "bg-transparent text-[#001F5B] border border-gray-200 hover:bg-gray-50 focus-visible:ring-[#001F5B]",
  };
  return (
    <a href={href} className={`${base} ${styles[variant]}`}> {children} </a>
  );
}
