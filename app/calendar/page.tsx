import type { Metadata } from "next";
import Calendar from "@/components/Calendar";

export const metadata: Metadata = {
  title: "Calendar",
  description:
    "View SHPE UPRM's event calendar. Stay updated on upcoming meetings, workshops, and activities.",
};

// Sample events - in a real app, these would come from a database or CMS
const events = [
  {
    date: 25,
    title: "General Meeting #1",
    description: "First general meeting of the semester",
  },
  {
    date: 10,
    title: "Resume Workshop",
    description: "Get your resume ready for career fair",
  },
  {
    date: 3,
    title: "Networking Night",
    description: "Network with professionals and alumni",
  },
];

export default function CalendarPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Event Calendar
          </h1>
          <p className="text-xl md:text-2xl text-gray-100">
            Stay updated on all our upcoming events and activities
          </p>
        </div>
      </section>

      {/* Calendar Section */}
      <div className="container-custom py-16">
        <div className="max-w-5xl mx-auto">
          <Calendar events={events} />

          {/* Upcoming Events List */}
          <div className="mt-12">
            <h2 className="section-heading mb-6">Event Details</h2>
            <div className="space-y-4">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="card hover:border-l-4 hover:border-secondary transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                    <div className="bg-secondary text-white px-4 py-2 rounded-lg text-center min-w-[60px]">
                      <div className="text-2xl font-bold">{event.date}</div>
                      <div className="text-xs">Day</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subscribe CTA */}
          <div className="mt-12 card bg-gradient-to-r from-secondary to-secondary-bright text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">
                Never Miss an Event!
              </h3>
              <p className="text-lg mb-6 text-gray-100">
                Subscribe to our calendar to get automatic updates on your
                device.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe to Calendar
                </button>
                <a
                  href="/events"
                  className="bg-accent hover:bg-yellow-500 text-primary px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  View All Events
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
