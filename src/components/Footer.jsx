import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ padding: "2rem", borderTop: "1px solid rgba(255,255,255,0.1)", textAlign: "center", background: "var(--bg-dark)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
         <div style={{ display: "flex", gap: "2rem" }}>
            <a href="https://github.com/bhashitm2" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)", fontSize: "1.5rem", transition: "color 0.3s" }}><FaGithub /></a>
            <a href="https://www.linkedin.com/in/bhashit-maheshwari-1b4206254/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)", fontSize: "1.5rem", transition: "color 0.3s" }}><FaLinkedin /></a>
            <a href="#" style={{ color: "var(--text-secondary)", fontSize: "1.5rem", transition: "color 0.3s" }}><FaTwitter /></a>
         </div>
         <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
           © {new Date().getFullYear()} Portfolio. All rights reserved.
         </p>
      </div>
    </footer>
  );
};

export default Footer;
