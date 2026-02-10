import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader.jsx";

export default function DemoForm() {
  return (
    <section className="section" id="demo">
      <div className="container">
        <SectionHeader
          eyebrow="Request demo"
          title="Get early access to Guidance Mate"
          subtitle="Join the waitlist for a personalized demo and be first to try the app."
        />
        <motion.form
          className="demo-form"
          action="https://formspree.io/f/yourFormId"
          method="POST"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="form-grid">
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="you@email.com" required />
            </label>
            <label>
              Education Level
              <select name="educationLevel" required>
                <option value="">Select level</option>
                <option value="10th">After 10th</option>
                <option value="12th">After 12th</option>
                <option value="college">College student</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label>
              Interested Field
              <input
                type="text"
                name="interestedField"
                placeholder="Engineering, Design, Medical..."
                required
              />
            </label>
          </div>
          <button className="btn btn-primary" type="submit">
            Request Early Access
          </button>
          <p className="form-note">
            We will only use your email for demo access updates.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
