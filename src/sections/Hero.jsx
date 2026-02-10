import { motion } from "framer-motion";
import Button from "../components/Button.jsx";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <motion.div variants={fadeUp} initial="hidden" animate="show">
          <div className="badge">Student-built • Future-ready guidance</div>
          <h1>
            Guidance Mate helps students find the <span>right career path</span>
            , faster.
          </h1>
          <p>
            A smart, friendly guidance app for students after 10th, 12th, and
            college — designed to reduce confusion and unlock clarity.
          </p>
          <div className="cta-row">
            <Button href="#demo">Request Early Access</Button>
            <Button href="#about" variant="ghost">
              Explore the idea
            </Button>
          </div>
          <div className="hero-meta">
            <div>
              <strong>Personalized</strong>
              <span>Recommendations</span>
            </div>
            <div>
              <strong>Clear</strong>
              <span>Career Steps</span>
            </div>
            <div>
              <strong>Student</strong>
              <span>Friendly</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="hero-card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-card-inner">
            <h3>Guidance Snapshot</h3>
            <p>Instant direction, made simple.</p>
            <ul>
              <li>✔ Match interests with careers</li>
              <li>✔ Discover courses &amp; streams</li>
              <li>✔ Plan next steps confidently</li>
              <li>✔ Track goals and progress</li>
            </ul>
            <div className="hero-chip">Launching soon</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
