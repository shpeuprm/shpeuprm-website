import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Society of Hispanic Professional Engineers
            </h1>
            <h2 className="text-2xl md:text-3xl mb-8 text-gray-100">
              UPRM Chapter
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Empowering Hispanic engineers at the University of Puerto Rico
              Mayagüez
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about" className="btn-primary bg-accent hover:bg-yellow-500">
                Learn More About Us
              </Link>
              <Link href="/events" className="btn-primary bg-white text-primary hover:bg-gray-100">
                View Upcoming Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="section-heading">Welcome to SHPE UPRM!</h3>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              Stay up to date with our events, resources, and opportunities!
            </p>
            <p className="text-lg text-gray-600">
              We are committed to fostering academic excellence, professional
              development, and building a strong community of Hispanic engineers
              and STEM professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h3 className="section-heading text-center mb-12">What We Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h4 className="section-subheading">Academic Excellence</h4>
              <p className="text-gray-600">
                Support and mentorship to help you succeed in your academic
                journey
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">💼</div>
              <h4 className="section-subheading">Professional Development</h4>
              <p className="text-gray-600">
                Workshops, networking events, and career opportunities
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="section-subheading">Community</h4>
              <p className="text-gray-600">
                Build lasting connections with fellow Hispanic engineers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-secondary to-secondary-bright text-white">
        <div className="container-custom text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Involved?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us today and become part of a vibrant community of Hispanic
            engineers making a difference
          </p>
          <Link href="/contact" className="btn-primary bg-accent hover:bg-yellow-500">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
