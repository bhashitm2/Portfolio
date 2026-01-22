import Hero from "../components/Hero";
import GithubStats from "../components/GithubStats";
import Skills from "../components/Skills";
import CodingProfiles from "../components/CodingProfiles";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <Hero />
      
      {/* GitHub Stats Section */}
      <section style={{ padding: "0 2rem", background: "linear-gradient(to bottom, var(--bg-dark), var(--bg-card))" }}>
         <GithubStats />
      </section>

      <Skills />
      
      <CodingProfiles />

      {/* Short Call to Action Section since content is moved */}
      <section style={{ padding: "4rem 2rem", background: "var(--bg-dark)", textAlign: "center" }}>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "var(--text-primary)" }}>
                Want to know more?
            </h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", fontSize: "1.1rem" }}>
                Explore my journey, skills, and the projects I've built.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
                <Link to="/projects" style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "0.5rem", 
                    padding: "0.8rem 1.5rem", 
                    background: "var(--accent-blue)", 
                    color: "white", 
                    borderRadius: "50px", 
                    fontWeight: "600",
                    textDecoration: "none"
                }}>
                    View Projects <FaArrowRight />
                </Link>
                <Link to="/about" style={{ 
                    padding: "0.8rem 1.5rem", 
                    border: "1px solid var(--border-light)", 
                    color: "var(--text-primary)", 
                    borderRadius: "50px", 
                    fontWeight: "600",
                    textDecoration: "none"
                }}>
                    About Me
                </Link>
            </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
