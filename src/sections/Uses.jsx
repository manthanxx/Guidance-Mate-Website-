import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader.jsx";
import GlassCard from "../components/GlassCard.jsx";

const uses = [
  {
    title: "Career guidance",
    description: "Confidently explore career paths in school and college."
  },
  {
    title: "Course & stream selection",
    description: "Choose the right subjects, streams, or degrees."
  },
  {
    title: "Future planning",
    description: "Set clear goals and plan the next academic steps."
  },
  {
    title: "Educational awareness",
    description: "Understand options, trends, and emerging opportunities."
  }
];

export default function Uses() {
  return (
    <section className="section" id="uses">
      <div className="container">
        <SectionHeader
          eyebrow="Use cases"
          title="Built for every guidance moment"
          subtitle="From school to college, Guidance Mate supports every decision stage."
        />
        <motion.div
          className="grid two"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } }
          }}
        >
          {uses.map((item) => (
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
