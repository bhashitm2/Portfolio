import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" style={{ padding: "8rem 2rem", background: "var(--bg-dark)" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
           <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Let's Build Something <span style={{ color: "var(--accent-blue)" }}>Amazing</span></h2>
           <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>
             Have a project in mind or want to discuss the latest tech? I'm always open to new opportunities.
           </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }}>
           {/* Direct Contact Info */}
           <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                 <FaEnvelope style={{ color: "var(--accent-pink)", fontSize: "1.5rem" }} />
                 <span style={{ fontSize: "1.2rem" }}>bhashitm2@gmail.com</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                 <FaMapMarkerAlt style={{ color: "var(--accent-pink)", fontSize: "1.5rem" }} />
                 <span style={{ fontSize: "1.2rem" }}>Udaipur, Rajasthan, India</span>
              </div>
              <br/>
              <a 
                href="mailto:bhashitm2@gmail.com" 
                style={{ 
                   background: "var(--gradient-main)", 
                   padding: "1rem 3rem", 
                   borderRadius: "50px", 
                   fontWeight: "700", 
                   fontSize: "1.1rem",
                   marginTop: "1rem"
                }}
              >
                 Say Hello
              </a>
           </div>

           {/* Map Removed */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
