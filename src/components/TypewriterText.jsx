import { motion } from "framer-motion";

const TypewriterText = ({ text, style, delay = 0, className }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.span
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{ display: "inline", ...style }}
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={letterVariants} style={{ display: "inline-block", whiteSpace: "pre" }}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default TypewriterText;
