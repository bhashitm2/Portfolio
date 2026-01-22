import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaTimes } from "react-icons/fa";

const ChatConnect = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! I'm Bhashit's virtual assistant. How can I help you today?", sender: "bot" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [showOptions, setShowOptions] = useState(true);
  const messagesEndRef = useRef(null);

  const options = [
    { id: "hire", label: "We'd like to hire you 💼" },
    { id: "hello", label: "Just saying Hello! 👋" },
    { id: "contact", label: "Contact info 📧" },
    { id: "resume", label: "Download Resume 📄" }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleOptionClick = (option) => {
    setShowOptions(false);
    
    // Add User Message
    const userMsg = { id: Date.now(), text: option.label, sender: "user" };
    setMessages(prev => [...prev, userMsg]);

    // Simulate Bot Thinking
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let botResponse = "";
      
      switch(option.id) {
        case "hire":
          botResponse = "That's great! I'm always open to exciting opportunities. Sending you to my email client...";
          setTimeout(() => {
             window.location.href = "mailto:bhashitm2@gmail.com?subject=Hiring Inquiry";
          }, 2000);
          break;
        case "hello":
          botResponse = (
            <span>
              Hello! Thanks for dropping by. Feel free to connect with me on{" "}
              <a href="https://www.linkedin.com/in/bhashit-maheshwari-1b4206254/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-cyan)", textDecoration: "underline" }}>LinkedIn</a>
              {" "}or{" "}
              <a href="https://github.com/bhashitm2" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-cyan)", textDecoration: "underline" }}>GitHub</a>!
            </span>
          );
          break;
        case "contact":
          botResponse = "You can reach me at bhashitm2@gmail.com.";
          break;
        case "resume":
          botResponse = "Sure thing! Opening my resume for you now.";
          setTimeout(() => {
              window.open("https://drive.google.com/file/d/1kKy1tvYTynxh2UefGfBA0WVgSvoXA6eC/view?usp=drive_link", "_blank");
          }, 1500);
          break;
        default:
          botResponse = "I didn't catch that.";
      }

      const botMsg = { id: Date.now() + 1, text: botResponse, sender: "bot" };
      setMessages(prev => [...prev, botMsg]);
      setShowOptions(true);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            style={{ 
                position: "fixed",
                bottom: "20px",
                right: "20px",
                width: "350px",
                height: "500px",
                maxWidth: "calc(100vw - 40px)",
                background: "var(--bg-card)",
                borderRadius: "16px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
                border: "1px solid var(--border-light)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                zIndex: 10000
            }}
        >
            {/* Header */}
            <div style={{ 
                padding: "1rem", 
                borderBottom: "1px solid var(--border-light)", 
                background: "var(--nav-bg)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                    <div style={{ 
                        width: "35px", height: "35px", borderRadius: "50%", 
                        background: "var(--accent-cyan)", display: "flex", alignItems: "center", justifyContent: "center",
                        color: "black", fontSize: "1rem"
                    }}>
                        <FaRobot />
                    </div>
                    <div>
                        <h3 style={{ margin: 0, fontSize: "1rem", color: "var(--text-primary)" }}>Chat with Bhashit</h3>
                        <span style={{ fontSize: "0.7rem", color: "var(--accent-green)" }}>● Online</span>
                    </div>
                </div>
                <button 
                    onClick={onClose}
                    style={{ background: "transparent", border: "none", color: "var(--text-secondary)", cursor: "pointer", fontSize: "1.1rem" }}
                >
                    <FaTimes />
                </button>
            </div>

            {/* Messages Area */}
            <div style={{ 
                flex: 1, 
                padding: "1rem", 
                overflowY: "auto", 
                display: "flex", 
                flexDirection: "column",
                gap: "0.8rem",
                background: "var(--bg-dark)"
            }}>
                {messages.map((msg) => (
                    <motion.div 
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ 
                            alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                            maxWidth: "85%",
                            background: msg.sender === "user" ? "var(--accent-blue)" : "var(--bg-card)",
                            color: msg.sender === "user" ? "white" : "var(--text-primary)",
                            padding: "0.6rem 1rem",
                            borderRadius: msg.sender === "user" ? "15px 15px 2px 15px" : "15px 15px 15px 2px",
                            fontSize: "0.9rem",
                            lineHeight: 1.4,
                            border: msg.sender === "user" ? "none" : "1px solid var(--border-light)"
                        }}
                    >
                        {msg.text}
                    </motion.div>
                ))}
                {isTyping && (
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }}
                        style={{ 
                            alignSelf: "flex-start", 
                            background: "var(--bg-card)", 
                            padding: "0.5rem 1rem", 
                            borderRadius: "15px",
                            color: "var(--text-secondary)",
                            fontSize: "0.8rem",
                            border: "1px solid var(--border-light)"
                        }}
                    >
                        Typing...
                    </motion.div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Options Area */}
            <div style={{ padding: "1rem", borderTop: "1px solid var(--border-light)", background: "var(--nav-bg)" }}>
                {showOptions ? (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center" }}>
                        {options.map(opt => (
                            <button 
                                key={opt.id} 
                                onClick={() => handleOptionClick(opt)}
                                style={{ 
                                    background: "transparent",
                                    border: "1px solid var(--accent-cyan)",
                                    color: "var(--text-primary)",
                                    padding: "0.4rem 0.8rem",
                                    borderRadius: "50px",
                                    cursor: "pointer",
                                    fontSize: "0.75rem",
                                    transition: "all 0.2s",
                                    whiteSpace: "nowrap"
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.background = "var(--accent-cyan)";
                                    e.target.style.color = "black";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.background = "transparent";
                                    e.target.style.color = "var(--text-primary)";
                                }}
                            >
                                {opt.label}
                            </button>
                        ))}
                    </div>
                ) : (
                    <p style={{ textAlign: "center", color: "var(--text-secondary)", fontSize: "0.8rem", margin: 0 }}>
                        Choose an option to reply...
                    </p>
                )}
            </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatConnect;
