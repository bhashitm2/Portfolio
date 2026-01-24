import { motion } from "framer-motion";
import algoricLogo from "../assets/experience/algoric.png";

const experiences = [
  {
    company: "Algoric",
    role: "Frontend Development and Frontend Tester Intern",
    date: "June 2025 – August 2025",
    location: "Remote",
    logo: algoricLogo,
    description: [
      "Contributed to building and refining the frontend of the company’s website using Javascript, React, and Tailwind CSS.",
      "Ensured responsive and consistent user experiences through thorough frontend testing and debugging."
    ],
    tech: ["JavaScript", "React", "Tailwind CSS"]
  }
];

const Experience = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };


  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut", delay: 1.5 } // Delay after title types out
    }
  };

  const text1 = "Work ";
  const text2 = "Experience";

  return (
    <section id="experience" style={{ padding: "4rem 2rem", background: "var(--bg-dark)", minHeight: "80vh" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <motion.h2 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ 
                fontSize: "3rem", 
                marginBottom: "4rem", 
                textAlign: "center",
                fontWeight: "800",
                width: "100%"
            }}
        >
            {/* First part: Work */}
            {text1.split("").map((char, index) => (
                <motion.span 
                    key={`t1-${index}`} 
                    variants={letterVariants} 
                    style={{ 
                        display: "inline-block", 
                        whiteSpace: "pre",
                        background: "var(--gradient-text)", 
                        WebkitBackgroundClip: "text", 
                        WebkitTextFillColor: "transparent",
                     }}
                >
                    {char}
                </motion.span>
            ))}
            
            {/* Second part: Experience (Cyan) */}
            {text2.split("").map((char, index) => (
                <motion.span 
                    key={`t2-${index}`} 
                    variants={letterVariants} 
                    style={{ 
                        display: "inline-block", 
                        whiteSpace: "pre",
                        color: "var(--accent-cyan)" 
                     }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.h2>

        <motion.div 
            style={{ display: "flex", flexDirection: "column", gap: "3rem" }}
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                background: "var(--bg-card)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--border-light)",
                padding: "2.5rem",
                display: "flex",
                gap: "2rem",
                position: "relative",
                overflow: "hidden"
              }}
              whileHover={{ borderColor: "var(--accent-cyan)", transform: "translateY(-5px)" }}
            >
              <div style={{ 
                  flexShrink: 0, 
                  width: "100px", 
                  height: "100px", 
                  background: "#000", 
                  borderRadius: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  border: "1px solid var(--border-light)"
              }}>
                <img src={exp.logo} alt={exp.company} style={{ width: "100%", height: "auto", objectFit: "contain" }} />
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem", marginBottom: "1rem" }}>
                    <div>
                        <h3 style={{ fontSize: "1.8rem", fontWeight: "700", color: "var(--text-primary)", marginBottom: "0.5rem" }}>{exp.company}</h3>
                        <h4 style={{ fontSize: "1.2rem", color: "var(--accent-cyan)", fontWeight: "600" }}>{exp.role}</h4>
                    </div>
                    <div style={{ textAlign: "right" }}>
                        <span style={{ display: "block", color: "var(--text-primary)", fontWeight: "600", marginBottom: "0.25rem" }}>{exp.date}</span>
                        <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{exp.location}</span>
                    </div>
                </div>

                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.8rem", marginBottom: "1.5rem" }}>
                  {exp.description.map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: "0.8rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                      <span style={{ color: "var(--accent-cyan)", marginTop: "6px" }}>▹</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
                  {exp.tech.map((t, i) => (
                    <span key={i} style={{ 
                        fontSize: "0.85rem", 
                        padding: "0.3rem 0.8rem", 
                        background: "rgba(6, 182, 212, 0.1)", 
                        border: "1px solid rgba(6, 182, 212, 0.3)",
                        borderRadius: "50px", 
                        color: "var(--accent-cyan)"
                    }}>
                        {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
