import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Delhi Technological University, Delhi",
    year: "2022 - 2026",
  },
  {
    degree: "Higher Secondary (Class XII)",
    institution: "Kendriya Vidyalaya No.1, Udaipur",
    year: "2022",
  },
  {
    degree: "Secondary School (Class X)",
    institution: "Shishu Bharti School, Udaipur",
    year: "2020",
  }
];

const Education = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h3 style={{ fontSize: "2rem", marginBottom: "2rem", color: "var(--text-primary)" }}>
        My <span style={{ color: "var(--accent-pink)" }}>Education</span>
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem", borderLeft: "2px solid var(--border-light)", paddingLeft: "2rem" }}>
        {education.map((edu, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            style={{ position: "relative" }}
          >
            {/* Dot */}
            <span style={{ 
                position: "absolute", 
                left: "-2.6rem", 
                top: "0.5rem", 
                width: "1rem", 
                height: "1rem", 
                background: "var(--accent-blue)", 
                borderRadius: "50%",
                boxShadow: "0 0 10px var(--accent-blue)"
            }}></span>
            
            <h4 style={{ fontSize: "1.2rem", color: "var(--text-primary)" }}>{edu.degree}</h4>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-secondary)", margin: "0.5rem 0" }}>
                <FaGraduationCap />
                <span>{edu.institution}</span>
            </div>
            <span style={{ 
                display: "inline-block", 
                background: "var(--bg-card)", 
                padding: "0.2rem 0.6rem", 
                borderRadius: "4px", 
                fontSize: "0.8rem", 
                color: "var(--accent-cyan)",
                marginBottom: "0.5rem"
            }}>
                {edu.year}
            </span>

          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
