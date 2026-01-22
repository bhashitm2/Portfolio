import About from "../components/About";
import Journey from "../components/Journey";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: "80px" }} // Padding for fixed navbar
    >
      <About />
      <Journey />
    </motion.div>
  );
};

export default AboutPage;
