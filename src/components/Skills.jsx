import { motion } from "framer-motion";
import { FaGithub, FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";
import { SiCplusplus, SiTailwindcss, SiMongodb, SiFirebase, SiExpress, SiSocketdotio, SiPostman, SiRender, SiNetlify, SiUnrealengine } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
  { name: "C++", color: "#00599C", Icon: SiCplusplus },
  { name: "JavaScript", color: "#F7DF1E", Icon: FaJs },
  { name: "HTML5", color: "#E34F26", Icon: FaHtml5 },
  { name: "CSS3", color: "#1572B6", Icon: FaCss3Alt },
  { name: "React", color: "#61DAFB", Icon: FaReact },
  { name: "Express.js", color: "var(--text-primary)", Icon: SiExpress }, 
  { name: "Socket.io", color: "var(--text-primary)", Icon: SiSocketdotio },
  { name: "Tailwind CSS", color: "#06B6D4", Icon: SiTailwindcss },
  { name: "MongoDB", color: "#47A248", Icon: SiMongodb },
  { name: "Firebase", color: "#FFCA28", Icon: SiFirebase },
  { name: "Git", color: "#F05032", Icon: FaGitAlt },
  { name: "GitHub", color: "var(--text-primary)", Icon: FaGithub },
  { name: "VS Code", color: "#007ACC", Icon: VscVscode },
  { name: "Postman", color: "#FF6C37", Icon: SiPostman },
  { name: "Netlify", color: "#00C7B7", Icon: SiNetlify },
  { name: "Render", color: "var(--text-primary)", Icon: SiRender },
  { name: "Unreal Engine", color: "var(--text-primary)", Icon: SiUnrealengine },
];

const Skills = () => {
  return (
    <section id="skills" style={{ padding: "4rem 0", background: "var(--bg-dark)", overflow: "hidden" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
      <h3 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "3rem", color: "var(--text-primary)" }}>
        Technical <span style={{ color: "var(--accent-purple)" }}>Skills</span>
      </h3>
      
      <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", 
          gap: "1.5rem",
          justifyItems: "center",
          maxWidth: "100%",
          margin: "0 auto"
      }}>
        {skills.map((skill, index) => (
            <motion.div 
                key={index}
                whileHover={{ 
                    scale: 1.15, 
                    y: -5, 
                    borderColor: skill.color, 
                    boxShadow: `0 0 25px ${skill.color.startsWith("var") ? "var(--text-secondary)" : skill.color + "60"}`,
                    background: "var(--bg-card-hover)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    background: "var(--bg-card)",
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    border: "1px solid var(--border-light)",
                    cursor: "pointer",
                    backdropFilter: "blur(5px)",
                    color: skill.color
                }}
                title={skill.name}
            >
                <skill.Icon size="3.5rem" />
            </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Skills;
