"use client";

import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-secondary-light text-white py-16">
        <motion.div
          className="container-custom text-center"
          {...fadeIn}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            {...fadeInUp}
          >
            About SHPE UPRM
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-100"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Learn more about our mission, vision, and what we do!
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          {/* Who We Are */}
          <motion.section
            className="mb-12"
            {...fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2 className="section-heading" {...fadeInUp}>
              Who We Are
            </motion.h2>
            <motion.div
              className="card"
              {...scaleIn}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                SHPE UPRM is dedicated to empowering Hispanic students in STEM
                fields at the University of Puerto Rico, Mayagüez. We foster
                academic excellence, professional development, and a strong
                sense of community.
              </p>
            </motion.div>
          </motion.section>

          {/* Our Mission */}
          <motion.section
            className="mb-12"
            {...fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2 className="section-heading" {...fadeInUp}>
              Our Mission
            </motion.h2>
            <motion.div
              className="card"
              {...scaleIn}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                To promote the development of Hispanic students in engineering,
                science, and other technical fields through networking,
                mentorship, and leadership opportunities.
              </p>
            </motion.div>
          </motion.section>

          {/* What We Offer */}
          <motion.section
            className="mb-12"
            {...fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2 className="section-heading" {...fadeInUp}>
              What We Offer
            </motion.h2>
            <motion.div
              className="card"
              {...scaleIn}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
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
            </motion.div>
          </motion.section>

          {/* Values Section */}
          <motion.section
            {...fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2 className="section-heading" {...fadeInUp}>
              Our Values
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              {...staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div className="card" {...scaleIn}>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  Diversity & Inclusion
                </h3>
                <p className="text-gray-600">
                  We celebrate diverse perspectives and create an inclusive
                  environment for all students.
                </p>
              </motion.div>
              <motion.div
                className="card"
                {...scaleIn}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  Excellence
                </h3>
                <p className="text-gray-600">
                  We strive for excellence in everything we do, from academics
                  to professional development.
                </p>
              </motion.div>
              <motion.div
                className="card"
                {...scaleIn}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  Community
                </h3>
                <p className="text-gray-600">
                  We build strong connections and support networks that last
                  beyond graduation.
                </p>
              </motion.div>
              <motion.div
                className="card"
                {...scaleIn}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  Leadership
                </h3>
                <p className="text-gray-600">
                  We empower members to become leaders in their fields and
                  communities.
                </p>
              </motion.div>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
