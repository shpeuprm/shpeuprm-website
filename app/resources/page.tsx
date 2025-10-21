import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Access academic, professional, and SHPE-related resources including scholarships, career tools, online courses, and more.",
};

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

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <div className="card group hover:border-l-4 hover:border-secondary transition-all duration-300">
      <div className="flex items-start justify-between mb-3">
        <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-semibold">
          {resource.category}
        </span>
      </div>
      <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {resource.title} ↗
        </a>
      </h3>
      <p className="text-gray-600 leading-relaxed">{resource.description}</p>
    </div>
  );
}

export default function ResourcesPage() {
  const categories = Array.from(new Set(resources.map((r) => r.category)));

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-secondary-bright text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            SHPE UPRM Resources
          </h1>
          <p className="text-xl md:text-2xl text-gray-100">
            Your hub for academic, professional, and SHPE-related materials
          </p>
        </div>
      </section>

      {/* Resources Section */}
      <div className="container-custom py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading mb-8">Featured Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {resources.map((resource, index) => (
              <ResourceCard key={index} resource={resource} />
            ))}
          </div>

          {/* Categories Overview */}
          <div className="card bg-gradient-to-r from-gray-50 to-white border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Resource Categories
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-secondary font-semibold">
                    {category}
                  </span>
                  <p className="text-sm text-gray-500 mt-1">
                    {resources.filter((r) => r.category === category).length}{" "}
                    {resources.filter((r) => r.category === category).length ===
                    1
                      ? "resource"
                      : "resources"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Resources Section */}
          <div className="mt-16">
            <h2 className="section-heading mb-6">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card text-center">
                <div className="text-4xl mb-4">📚</div>
                <h4 className="text-xl font-semibold text-primary mb-2">
                  Study Materials
                </h4>
                <p className="text-gray-600">
                  Access study guides, practice problems, and course materials
                  shared by SHPE members.
                </p>
              </div>
              <div className="card text-center">
                <div className="text-4xl mb-4">💡</div>
                <h4 className="text-xl font-semibold text-primary mb-2">
                  Career Resources
                </h4>
                <p className="text-gray-600">
                  Resume templates, interview prep guides, and job search
                  strategies for engineers.
                </p>
              </div>
              <div className="card text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h4 className="text-xl font-semibold text-primary mb-2">
                  Scholarship Info
                </h4>
                <p className="text-gray-600">
                  Find scholarship opportunities specifically for Hispanic
                  students in STEM fields.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 card bg-gradient-to-r from-primary to-secondary text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Have a Resource to Suggest?
            </h3>
            <p className="text-lg mb-6 text-gray-100">
              We&apos;re always looking to expand our resource library. Share your
              recommendations with us!
            </p>
            <a
              href="mailto:shpe.uprm@upr.edu"
              className="inline-block bg-accent hover:bg-yellow-500 text-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Email Us Your Suggestions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
