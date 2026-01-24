import Experience from "../components/Experience";
import { motion } from "framer-motion";

const ExperiencePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: "80px" }} // Padding for fixed navbar
    >
      <Experience />
    </motion.div>
  );
};

export default ExperiencePage;
