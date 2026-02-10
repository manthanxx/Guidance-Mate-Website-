import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="footer">
      <motion.div
        className="container footer-inner"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h3>Guidance Mate</h3>
          <p>Student-built guidance for confident career decisions.</p>
        </div>
        <div className="footer-meta">
          <span>Made with purpose for students</span>
          <span>© 2026 Guidance Mate</span>
        </div>
      </motion.div>
    </footer>
  );
}
