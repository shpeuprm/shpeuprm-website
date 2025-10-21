import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Stay up to date with SHPE UPRM's latest events and activities. Join us for workshops, networking nights, and general meetings.",
};

interface Event {
  title: string;
  date: string;
  location: string;
  description: string;
}

const upcomingEvents: Event[] = [
  {
    title: "General Meeting #1",
    date: "August 25, 2025 | 6:00 PM",
    location: "Room Q-101",
    description:
      "Kick off the semester with our first general meeting! Meet the board, learn about upcoming opportunities, and connect with fellow members.",
  },
  {
    title: "Resume Workshop",
    date: "September 10, 2025 | 5:30 PM",
    location: "Online",
    description:
      "Get your resume ready for the career fair! Our workshop will provide tips and personalized feedback.",
  },
  {
    title: "Networking Night",
    date: "October 3, 2025 | 7:00 PM",
    location: "Student Center",
    description:
      "Network with professionals and alumni. Bring your questions and business cards!",
  },
];

function EventCard({ event }: { event: Event }) {
  return (
    <div className="card hover:border-l-4 hover:border-secondary transition-all duration-300">
      <h3 className="text-2xl font-bold text-primary mb-3">{event.title}</h3>
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-3 text-gray-600">
        <div className="flex items-center mb-2 sm:mb-0">
          <span className="text-secondary mr-2">📅</span>
          <span className="font-medium">{event.date}</span>
        </div>
        <div className="flex items-center">
          <span className="text-secondary mr-2">📍</span>
          <span className="font-medium">{event.location}</span>
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed">{event.description}</p>
    </div>
  );
}

export default function EventsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary-bright to-secondary text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            SHPE UPRM Events
          </h1>
          <p className="text-xl md:text-2xl text-gray-100">
            Stay up to date with our latest events and activities!
          </p>
        </div>
      </section>

      {/* Events Section */}
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading mb-8">Upcoming Events</h2>

          {upcomingEvents.length > 0 ? (
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </div>
          ) : (
            <div className="card text-center py-12">
              <p className="text-xl text-gray-600">
                No upcoming events at the moment. Check back soon!
              </p>
            </div>
          )}

          {/* Calendar Integration CTA */}
          <div className="mt-12 card bg-gradient-to-r from-primary to-secondary text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">
                Want to see more events?
              </h3>
              <p className="text-lg mb-6 text-gray-100">
                Check out our interactive calendar for a complete view of all
                our activities and meetings.
              </p>
              <a
                href="/calendar"
                className="inline-block bg-accent hover:bg-yellow-500 text-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                View Full Calendar
              </a>
            </div>
          </div>

          {/* Past Events Section */}
          <div className="mt-16">
            <h2 className="section-heading mb-6">Past Events Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <h4 className="text-xl font-semibold text-secondary mb-2">
                  Spring 2025 Career Fair
                </h4>
                <p className="text-gray-600">
                  Over 50 students connected with leading companies in
                  engineering and technology.
                </p>
              </div>
              <div className="card">
                <h4 className="text-xl font-semibold text-secondary mb-2">
                  Leadership Summit
                </h4>
                <p className="text-gray-600">
                  Members developed essential leadership skills through
                  interactive workshops and panel discussions.
                </p>
              </div>
              <div className="card">
                <h4 className="text-xl font-semibold text-secondary mb-2">
                  Community Outreach Day
                </h4>
                <p className="text-gray-600">
                  SHPE members volunteered with local schools to inspire the
                  next generation of engineers.
                </p>
              </div>
              <div className="card">
                <h4 className="text-xl font-semibold text-secondary mb-2">
                  Tech Talk Series
                </h4>
                <p className="text-gray-600">
                  Industry professionals shared insights on emerging
                  technologies and career paths.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
