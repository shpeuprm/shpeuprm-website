"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            {...staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              {...fadeInUp}
            >
              Society of Hispanic Professional Engineers
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-3xl mb-8 text-gray-100"
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              UPRM Chapter
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-gray-100"
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Empowering Hispanic engineers at the University of Puerto Rico
              Mayagüez
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="/about" className="btn-primary bg-accent hover:bg-yellow-500">
                Learn More About Us
              </Link>
              <Link href="/events" className="btn-primary bg-white text-primary hover:bg-gray-100">
                View Upcoming Events
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            {...fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h3 className="section-heading" {...fadeInUp}>
              Welcome to SHPE UPRM!
            </motion.h3>
            <motion.p
              className="text-lg md:text-xl text-gray-700 mb-6"
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Stay up to date with our events, resources, and opportunities!
            </motion.p>
            <motion.p
              className="text-lg text-gray-600"
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We are committed to fostering academic excellence, professional
              development, and building a strong community of Hispanic engineers
              and STEM professionals.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.h3
            className="section-heading text-center mb-12"
            {...fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            What We Offer
          </motion.h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            {...staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="card text-center" {...scaleIn}>
              <div className="text-4xl mb-4">🎓</div>
              <h4 className="section-subheading">Academic Excellence</h4>
              <p className="text-gray-600">
                Support and mentorship to help you succeed in your academic
                journey
              </p>
            </motion.div>
            <motion.div
              className="card text-center"
              {...scaleIn}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-4xl mb-4">💼</div>
              <h4 className="section-subheading">Professional Development</h4>
              <p className="text-gray-600">
                Workshops, networking events, and career opportunities
              </p>
            </motion.div>
            <motion.div
              className="card text-center"
              {...scaleIn}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="section-subheading">Community</h4>
              <p className="text-gray-600">
                Build lasting connections with fellow Hispanic engineers
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-secondary to-secondary-bright text-white">
        <motion.div
          className="container-custom text-center"
          {...fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold mb-6"
            {...fadeInUp}
          >
            Ready to Get Involved?
          </motion.h3>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Join us today and become part of a vibrant community of Hispanic
            engineers making a difference
          </motion.p>
          <motion.div {...scaleIn} transition={{ duration: 0.5, delay: 0.2 }}>
            <Link href="/contact" className="btn-primary bg-accent hover:bg-yellow-500">
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
