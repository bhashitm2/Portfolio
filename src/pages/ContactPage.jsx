import ChatConnect from "../components/ChatConnect";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: "80px" }}
    >
      <ChatConnect />
    </motion.div>
  );
};

export default ContactPage;
