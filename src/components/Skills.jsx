import { motion } from "framer-motion";
import { 
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaNodeJs 
} from "react-icons/fa";
import { 
  SiCplusplus, SiTailwindcss, SiMongodb, SiFirebase, SiExpress, SiSocketdotio, 
  SiPostman, SiRender, SiNetlify, SiUnrealengine 
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
  { name: "C++", icon: <SiCplusplus color="#00599C" /> },
  { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
  { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
  { name: "React", icon: <FaReact color="#61DAFB" /> },
  { name: "Express.js", icon: <SiExpress color="var(--text-primary)" /> }, 
  { name: "Socket.io", icon: <SiSocketdotio color="var(--text-primary)" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
  { name: "Git", icon: <FaGitAlt color="#F05032" /> },
  { name: "GitHub", icon: <FaGithub color="var(--text-primary)" /> },
  { name: "VS Code", icon: <VscVscode color="#007ACC" /> },
  { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
  { name: "Netlify", icon: <SiNetlify color="#00C7B7" /> },
  { name: "Render", icon: <SiRender color="var(--text-primary)" /> },
  { name: "Unreal Engine", icon: <SiUnrealengine color="var(--text-primary)" /> },
];

const Skills = () => {
  return (
    <section id="skills" style={{ padding: "4rem 0", background: "var(--bg-dark)", overflow: "hidden" }}>
      <h3 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "3rem", color: "var(--text-primary)" }}>
        Technical <span style={{ color: "var(--accent-purple)" }}>Skills</span>
      </h3>
      
      <div style={{ display: "flex", width: "100%" }}>
        <motion.div 
            className="marquee-content"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            style={{ display: "flex", gap: "3rem", paddingLeft: "3rem" }}
        >
            {[...skills, ...skills].map((skill, index) => ( // Duplicate for seamless loop
                <div 
                    key={index} 
                    title={skill.name}
                    style={{ 
                        display: "flex", 
                        flexDirection: "column", 
                        alignItems: "center", 
                        justifyContent: "center",
                        background: "var(--bg-card)",
                        width: "110px",
                        height: "110px",
                        borderRadius: "50%",
                        border: "1px solid var(--border-light)",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                    }}
                >
                    <div style={{ 
                        fontSize: "3.5rem", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        width: "100%",
                        height: "100%",
                        lineHeight: 0 
                    }}>
                        {skill.icon}
                    </div>
                </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
