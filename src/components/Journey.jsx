import { motion } from "framer-motion";
import Education from "./Education";
import Globe3D from "./Globe3D";

const Journey = () => {
  return (
    <section id="journey" style={{ padding: "6rem 2rem", background: "var(--bg-dark)" }}>
       <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", 
              gap: "4rem",
              alignItems: "start"
          }}>
              {/* Column 1: Education */}
              <Education />
              
              {/* Column 2: Map */}
              <motion.div
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
              >
                  <h3 style={{ fontSize: "2rem", marginBottom: "0.5rem", color: "var(--text-primary)" }}>
                    Where I <span style={{ color: "var(--accent-cyan)" }}>Live</span>
                  </h3>
                  <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", fontSize: "1.1rem" }}>
                    Udaipur, Rajasthan
                  </p>
                  <div style={{ padding: "0", background: "var(--bg-card)", borderRadius: "var(--radius-lg)", overflow: "hidden", height: "400px" }}>
                    <Globe3D />
                  </div>
              </motion.div>
          </div>
       </div>
    </section>
  );
};

export default Journey;
