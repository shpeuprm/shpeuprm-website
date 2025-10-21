import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about SHPE UPRM's mission, vision, and what we offer to Hispanic engineering students at University of Puerto Rico, Mayagüez.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-secondary-light text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About SHPE UPRM
          </h1>
          <p className="text-xl md:text-2xl text-gray-100">
            Learn more about our mission, vision, and what we do!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          {/* Who We Are */}
          <section className="mb-12">
            <h2 className="section-heading">Who We Are</h2>
            <div className="card">
              <p className="text-lg text-gray-700 leading-relaxed">
                SHPE UPRM is dedicated to empowering Hispanic students in STEM
                fields at the University of Puerto Rico, Mayagüez. We foster
                academic excellence, professional development, and a strong
                sense of community.
              </p>
            </div>
          </section>

          {/* Our Mission */}
          <section className="mb-12">
            <h2 className="section-heading">Our Mission</h2>
            <div className="card">
              <p className="text-lg text-gray-700 leading-relaxed">
                To promote the development of Hispanic students in engineering,
                science, and other technical fields through networking,
                mentorship, and leadership opportunities.
              </p>
            </div>
          </section>

          {/* What We Offer */}
          <section className="mb-12">
            <h2 className="section-heading">What We Offer</h2>
            <div className="card">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-4">✓</span>
                  <div>
                    <h3 className="font-semibold text-xl text-primary mb-1">
                      Professional Workshops and Networking Events
                    </h3>
                    <p className="text-gray-600">
                      Connect with industry professionals and develop essential
                      career skills through our curated workshops and events.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-4">✓</span>
                  <div>
                    <h3 className="font-semibold text-xl text-primary mb-1">
                      Academic Support and Mentorship
                    </h3>
                    <p className="text-gray-600">
                      Get guidance from experienced mentors who understand your
                      academic journey and can help you succeed.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-4">✓</span>
                  <div>
                    <h3 className="font-semibold text-xl text-primary mb-1">
                      Community Outreach and Volunteering
                    </h3>
                    <p className="text-gray-600">
                      Make a positive impact in our community through volunteer
                      opportunities and outreach programs.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-4">✓</span>
                  <div>
                    <h3 className="font-semibold text-xl text-primary mb-1">
                      Leadership Development
                    </h3>
                    <p className="text-gray-600">
                      Build leadership skills and take on meaningful roles
                      within our organization to grow as a professional.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Values Section */}
          <section>
            <h2 className="section-heading">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  Diversity & Inclusion
                </h3>
                <p className="text-gray-600">
                  We celebrate diverse perspectives and create an inclusive
                  environment for all students.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  Excellence
                </h3>
                <p className="text-gray-600">
                  We strive for excellence in everything we do, from academics
                  to professional development.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  Community
                </h3>
                <p className="text-gray-600">
                  We build strong connections and support networks that last
                  beyond graduation.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  Leadership
                </h3>
                <p className="text-gray-600">
                  We empower members to become leaders in their fields and
                  communities.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
