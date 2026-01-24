import { motion } from "framer-motion";

const About = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut", delay: 1.5 } // Delay after title types out
    }
  };

  const text1 = "I'm ";
  const text2 = "Bhashit Maheshwari.";

  return (
    <section 
      id="about" 
      style={{ 
        padding: "8rem 2rem", 
        background: "var(--bg-dark)", 
        position: "relative" 
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* Title Container */}
        <motion.h2 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ 
                fontSize: "4rem", 
                fontWeight: "800",
                marginBottom: "3rem", 
                textAlign: "center",
                width: "100%",
                lineHeight: "1.1"
            }}
        >
            {/* First part: I'm */}
            {text1.split("").map((char, index) => (
                <motion.span 
                    key={`t1-${index}`} 
                    variants={letterVariants} 
                    style={{ 
                        display: "inline-block", 
                        whiteSpace: "pre",
                        background: "var(--gradient-text)", 
                        WebkitBackgroundClip: "text", 
                        WebkitTextFillColor: "transparent",
                     }}
                >
                    {char}
                </motion.span>
            ))}
            
            {/* Second part: Bhashit. (Cyan) */}
            {text2.split("").map((char, index) => (
                <motion.span 
                    key={`t2-${index}`} 
                    variants={letterVariants} 
                    style={{ 
                        display: "inline-block", 
                        whiteSpace: "pre",
                        color: "var(--accent-cyan)" 
                     }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.h2>
          
        {/* Content Container with Fade In */}
        <motion.div 
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ 
                display: "grid", 
                gridTemplateColumns: "1fr 1.5fr", 
                gap: "4rem",
                alignItems: "center"
            }}
        >
             {/* Photo Section Placeholder - Left Empty as requested */}
             <div style={{ display: "none" }}></div> 

             <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", gridColumn: "1 / -1" }}>
                <h3 style={{ 
                    fontSize: "2.5rem", 
                    fontWeight: "700", 
                    lineHeight: "1.2",
                    color: "var(--text-primary)",
                    margin: 0
                }}>
                    I'm a 4th-year <span style={{ color: "var(--accent-green)" }}>Computer Science Engineering</span> student.
                </h3>
                
                <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "var(--text-secondary)" }}>
                   Back when I began coding, Cpp was my first language in the tech world. It got me curious about how stuff worked behind the scenes on computers. But then, I stumbled onto web development—a whole new world that caught my attention.
                </p>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "var(--text-secondary)" }}>
                   Building websites became my thing. It wasn't just about making things work; it was about making them look cool and easy to use. It was like painting with pixels and code.
                </p>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "var(--text-secondary)" }}>
                   Beyond code, I geek out on Gaming, Watching Anime, Listening to Music, and Taking Pictures. These passions fuel my creativity and keep my perspective fresh. Now, I'm all about crafting online experiences that people enjoy and remember.
                </p>
             </div>
          </motion.div>

          {/* Section Title */}
          <motion.h3
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.3 }}
             style={{ 
                fontSize: "2.5rem",
                fontWeight: "700",
                color: "var(--text-primary)",
                marginTop: "6rem",
                marginBottom: "3rem",
                textAlign: "center"
             }}
          >
            How I Approach Projects
          </motion.h3>

          {/* Candidate Strengths Grid */}
          <motion.div
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.5 }}
             style={{ 
                marginTop: "0",
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
                gap: "4rem",
             }}
          >
              {[
                {
                    id: "01",
                    title: "Clear Communication and Understanding",
                    desc: "I begin by thoroughly understanding my client's needs. I engage in detailed discussions, ask pertinent questions, and ensure we're aligned on the project's scope, goals, and timelines. Documenting these discussions helps avoid any future misunderstandings."
                },
                {
                    id: "02",
                    title: "Regular Updates and Progress Reports",
                    desc: "Throughout the project, I keep my client updated on the progress. Sharing achieved milestones and seeking feedback at crucial junctures fosters transparency in my workflow and builds trust with the client."
                },
                {
                    id: "03",
                    title: "Quality Assurance and Testing",
                    desc: "I prioritize delivering high-quality work. Rigorous testing across browsers, devices, and screen sizes ensures a flawless website. By fixing bugs and optimizing performance, I showcase my commitment to excellence."
                },
                {
                    id: "04",
                    title: "Punctual Delivery and Comprehensive Post-Project Support",
                    desc: "I make it a priority to meet deadlines or even surpass them. Moreover, I offer post-launch support and training sessions to ensure the client feels confident managing their website. Providing ongoing assistance demonstrates my dedication to their satisfaction beyond project completion."
                }
              ].map((item) => (
                  <div key={item.id} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      <span style={{ fontSize: "3rem", fontWeight: "800", color: "var(--text-secondary)", opacity: 0.3, lineHeight: 1 }}>{item.id}</span>
                      <h4 style={{ fontSize: "1.5rem", fontWeight: "700", color: "var(--accent-green)", margin: 0 }}>{item.title}</h4>
                      <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "var(--text-secondary)" }}>{item.desc}</p>
                  </div>
              ))}
          </motion.div>
      </div>
    </section>
  );
};

export default About;
