import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ["Hello", "Bonjour", "Hola", "こんにちは", "नमस्ते"];

const Preloader = ({ onComplete }) => {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index === words.length - 1) return;
    const timeout = setTimeout(() => {
      setIndex(index + 1);
    }, index === 0 ? 1000 : 180); // First word longer, others fast
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={fadeAnimation}
        onAnimationComplete={onComplete}
        style={{
             position: "fixed",
             top: 0,
             left: 0,
             height: "100vh",
             width: "100vw",
             background: "#141516",
             zIndex: 9999,
             display: "flex",
             alignItems: "center",
             justifyContent: "center",
             pointerEvents: "none" 
        }}
    >
        <motion.p 
            variants={opacity} 
            initial="initial" 
            animate="enter"
            style={{ 
                fontSize: "3rem", 
                color: "white", 
                fontFamily: "var(--font-main)",
                fontWeight: "600",
                display: "flex",
                alignItems: "center"
            }}
        >
            <span style={{ marginRight: "10px", width: "10px", height: "10px", background: "var(--accent-cyan)", borderRadius: "50%", display: "inline-block" }}></span>
            {words[index]}
        </motion.p>
    </motion.div>
  );
};

const fadeAnimation = {
    initial: {
        opacity: 1
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut", delay: 0.2 }
    }
}

const opacity = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 0.75,
        transition: { duration: 1, delay: 0.2 }
    },
}

export default Preloader;
