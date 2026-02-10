import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader.jsx";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About the project"
          title="Built by students, for students"
          subtitle="Guidance Mate is a Student Career & Guidance App that helps learners discover the right career path, courses, and future opportunities based on their interests, skills, and education level."
        />
        <motion.div
          className="about-grid"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-card">
            <h3>Project Mission</h3>
            <p>
              We make career decisions simpler with clear guidance, smart
              insights, and student-first recommendations.
            </p>
          </div>
          <div className="about-card">
            <h3>Our Team</h3>
            <p>
              A small, passionate student team solving the real confusion faced
              by students after 10th, 12th, and college.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
