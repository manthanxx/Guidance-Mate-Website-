import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader.jsx";
import GlassCard from "../components/GlassCard.jsx";

const benefits = [
  {
    title: "Right career direction",
    description: "Helps students choose a career path that truly fits."
  },
  {
    title: "Less confusion after 10th & 12th",
    description: "Clear steps that reduce stress and second-guessing."
  },
  {
    title: "Personalized guidance",
    description: "Recommendations based on interests, skills, and goals."
  },
  {
    title: "Easy to understand",
    description: "Simple, student-friendly insights and actionable advice."
  },
  {
    title: "Saves time and money",
    description: "Avoids costly wrong decisions and course changes."
  },
  {
    title: "Future-ready planning",
    description: "Builds confidence with clear next steps and goals."
  }
];

export default function Benefits() {
  return (
    <section className="section" id="benefits">
      <div className="container">
        <SectionHeader
          eyebrow="Benefits"
          title="Why students love Guidance Mate"
          subtitle="Designed to make career choices simpler, smarter, and more confident."
        />
        <motion.div
          className="grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } }
          }}
        >
          {benefits.map((item) => (
            <motion.div
              key={item.title}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
            >
              <GlassCard title={item.title} description={item.description} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
