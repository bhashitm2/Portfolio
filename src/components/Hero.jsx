import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";

import TypewriterText from "./TypewriterText";

const Hero = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setShowScrollIndicator(false);
    } else {
      setShowScrollIndicator(true);
    }
  });

  return (
    <section 
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        background: "radial-gradient(circle at 50% 50%, rgba(5, 117, 230, 0.1) 0%, rgba(10, 10, 10, 0) 50%)",
        overflow: "hidden"
      }}
    >
      {/* Background Elements */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ 
            position: "absolute", 
            top: "20%", 
            left: "10%", 
            width: "300px", 
            height: "300px", 
            background: "var(--accent-pink)", 
            filter: "blur(150px)", 
            opacity: 0.2, 
            borderRadius: "50%" 
          }} 
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ 
            position: "absolute", 
            bottom: "10%", 
            right: "10%", 
            width: "400px", 
            height: "400px", 
            background: "var(--accent-blue)", 
            filter: "blur(150px)", 
            opacity: 0.2, 
            borderRadius: "50%" 
          }} 
        />
      </div>

      <div style={{ maxWidth: "1200px", width: "100%", padding: "0 2rem", zIndex: 1, textAlign: "center" }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ 
            color: "var(--accent-cyan)", 
            fontFamily: "var(--font-main)", 
            fontWeight: "500", 
            fontSize: "1.2rem",
            marginBottom: "1rem",
            letterSpacing: "0.1em"
          }}
        >
          WELCOME TO MY WORLD
        </motion.h2>

        <h1 
          style={{ 
            fontSize: "clamp(3rem, 8vw, 6rem)", 
            fontWeight: "700", 
            lineHeight: 1.1,
            marginBottom: "1.5rem",
            color: "var(--text-primary)"
          }}
        >
          <TypewriterText text="Crafting" delay={0.2} /> <br />
          <span style={{ 
            background: "var(--gradient-main)", 
            WebkitBackgroundClip: "text", 
            WebkitTextFillColor: "transparent" 
          }}>
             <TypewriterText text="Digital Experiences" delay={0.6} />
          </span>
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ 
            color: "var(--text-secondary)", 
            fontSize: "1.1rem", 
            maxWidth: "600px", 
            margin: "0 auto 3rem", 
            lineHeight: 1.8 
          }}
        >
          I'm a creative developer who builds immersive web applications with a focus on motion, aesthetics, and performance.
        </motion.p>


      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
            opacity: showScrollIndicator ? 1 : 0,
            y: showScrollIndicator ? [0, 10, 0] : 0, 
            pointerEvents: showScrollIndicator ? "auto" : "none"
        }}
        transition={{ 
            opacity: { duration: 0.3 },
            y: { duration: 1.5, repeat: Infinity, delay: 1 } 
        }}
        style={{
            position: "absolute",
            bottom: "30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "var(--text-secondary)",
            gap: "0.5rem",
            zIndex: 2,
            cursor: "pointer"
        }}
        onClick={() => {
            const nextSection = document.querySelector('section:nth-of-type(2)');
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        }}
      >
        <span style={{ fontSize: "0.8rem", letterSpacing: "3px", textTransform: "uppercase" }}>Scroll Down</span>
        <FaArrowDown style={{ fontSize: "1.2rem" }} />
      </motion.div>
    </section>
  );
};

export default Hero;
