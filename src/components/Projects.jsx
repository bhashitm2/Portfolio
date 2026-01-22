import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiCplusplus, SiTailwindcss, SiMongodb, SiFirebase, SiExpress, SiSocketdotio, SiPostman, SiRender, SiNetlify, SiUnrealengine } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import otakuWorldImg from "../assets/projects/otaku-world.png";
import precookImg from "../assets/projects/precook-recipe.png";
import ticTacToeImg from "../assets/projects/tic-tac-toe.png";

const skills = [
  { name: "C++", color: "#00599C", Icon: SiCplusplus },
  { name: "JavaScript", color: "#F7DF1E", Icon: FaJs },
  { name: "HTML5", color: "#E34F26", Icon: FaHtml5 },
  { name: "CSS3", color: "#1572B6", Icon: FaCss3Alt },
  { name: "React", color: "#61DAFB", Icon: FaReact },
  { name: "Express.js", color: "#ffffff", Icon: SiExpress }, 
  { name: "Socket.io", color: "#ffffff", Icon: SiSocketdotio },
  { name: "Tailwind CSS", color: "#06B6D4", Icon: SiTailwindcss },
  { name: "MongoDB", color: "#47A248", Icon: SiMongodb },
  { name: "Firebase", color: "#FFCA28", Icon: SiFirebase },
  { name: "Git", color: "#F05032", Icon: FaGitAlt },
  { name: "GitHub", color: "#ffffff", Icon: FaGithub },
  { name: "VS Code", color: "#007ACC", Icon: VscVscode },
  { name: "Postman", color: "#FF6C37", Icon: SiPostman },
  { name: "Netlify", color: "#00C7B7", Icon: SiNetlify },
  { name: "Render", color: "#ffffff", Icon: SiRender },
  { name: "Unreal Engine", color: "#ffffff", Icon: SiUnrealengine },
];

const projects = [
  {
    title: "Otaku World",
    description: "An immersive anime discovery hub featuring real-time trending updates, detailed character insights, and a sleek dark-themed interface for the ultimate fan experience.",
    tech: ["React", "API Integration", "Framer Motion", "Vercel"],
    links: { 
        github: "https://github.com/bhashitm2/Otaku_World", 
        live: "https://otaku-world-nu.vercel.app/" 
    },
    image: otakuWorldImg
  },
  {
    title: "PreCook Recipe",
    description: "A comprehensive recipe finder application helping users discover meals from around the globe with detailed cooking instructions and a personalized dashboard.",
    tech: ["React", "Recipe API", "Tailwind", "Vercel"],
    links: { 
        github: "https://github.com/bhashitm2/PreeCook_Recipe", 
        live: "https://precook-recipe.vercel.app/" 
    },
    image: precookImg
  },
  {
    title: "Tic Tac Toe",
    description: "A modern, interactive rendition of the classic game featuring a neon-styled dark UI, real-time score tracking, and smooth gameplay animations.",
    tech: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    links: { 
        github: "https://github.com/bhashitm2/Tic_Tac_Toe", 
        live: "https://bhashitm2.github.io/Tic_Tac_Toe/game.html" 
    },
    image: ticTacToeImg
  }
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        background: "var(--bg-card)",
        borderRadius: "var(--radius-md)",
        border: "1px solid var(--border-light)",
        overflow: "hidden", 
        display: "flex",
        flexDirection: "column"
      }}
      whileHover={{ y: -10, borderColor: "var(--accent-cyan)" }}
    >
      {/* Project Image */}
      <div style={{ width: "100%", height: "200px", overflow: "hidden" }}>
        <img 
            src={project.image} 
            alt={project.title} 
            style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s" }}
            onMouseOver={(e) => e.target.style.transform = "scale(1.1)"}
            onMouseOut={(e) => e.target.style.transform = "scale(1)"}
        />
      </div>

      <div style={{ padding: "2rem", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--text-primary)" }}>
            {project.title}
        </h3>
        <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", flex: 1, lineHeight: "1.6" }}>
            {project.description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
            {project.tech.map(t => (
            <span key={t} style={{ 
                fontSize: "0.85rem", 
                padding: "0.25rem 0.75rem", 
                background: "rgba(255,255,255,0.05)", 
                border: "1px solid var(--border-light)",
                borderRadius: "50px", 
                color: "var(--accent-cyan)"
            }}>
                {t}
            </span>
            ))}
        </div>
        <div style={{ display: "flex", gap: "1rem", marginTop: "auto" }}>
            <a href={project.links.github} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)", fontSize: "1.2rem", transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color="var(--accent-cyan)"} onMouseLeave={e => e.target.style.color="var(--text-secondary)"}><FaGithub /></a>
            <a href={project.links.live} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)", fontSize: "1.2rem", transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color="var(--accent-cyan)"} onMouseLeave={e => e.target.style.color="var(--text-secondary)"}><FaExternalLinkAlt /></a>
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section id="projects" style={{ padding: "8rem 2rem", background: "var(--bg-dark)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           style={{ 
            fontSize: "3rem", 
            marginBottom: "4rem", 
            textAlign: "center",
            fontWeight: "800",
            background: "var(--gradient-text)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
           }}
        >
          Featured <span style={{ WebkitTextFillColor: "var(--accent-pink)" }}>Work</span>
        </motion.h2>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", 
          gap: "3rem",
          marginBottom: "8rem" 
        }}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Technical Skills Section */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
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
                        boxShadow: `0 0 25px ${skill.color}60`,
                        background: "rgba(255,255,255,0.05)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    style={{ 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        background: "rgba(255,255,255,0.02)",
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                        border: "1px solid rgba(255,255,255,0.05)",
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
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
