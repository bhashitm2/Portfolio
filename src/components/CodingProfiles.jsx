import { motion } from "framer-motion";
import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";
import { useTheme } from "../context/ThemeContext";

const CodingProfiles = () => {
    const { theme } = useTheme();

  return (
    <section style={{ padding: "0rem 2rem 4rem", background: "var(--bg-dark)" }}>
      <h3 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "3rem", color: "var(--text-primary)" }}>
         Programming <span style={{ color: "var(--accent-cyan)" }}>Profiles</span>
      </h3>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "3rem", alignItems: "center" }}>
        
        {/* Cards Row */}
        <div style={{ 
            display: "flex", 
            flexWrap: "wrap", 
            gap: "2rem", 
            justifyContent: "center", 
            alignItems: "center" 
        }}>
            
            {/* LeetCode Flip Card */}
            <div style={{ perspective: "1000px", width: "300px", height: "350px" }}>
                <motion.div
                    initial={false}
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                    style={{ 
                        width: "100%", 
                        height: "100%", 
                        position: "relative", 
                        transformStyle: "preserve-3d",
                    }}
                >
                    {/* Front Face */}
                    <div style={{ 
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        backfaceVisibility: "hidden",
                        background: "var(--bg-card)",
                        borderRadius: "var(--radius-lg)",
                        border: "1px solid var(--border-light)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "1.5rem",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                    }}>
                        <SiLeetcode color="#FFA116" style={{ fontSize: "5rem" }} />
                        <div style={{ textAlign: "center" }}>
                            <h4 style={{ fontSize: "1.8rem", margin: "0 0 0.5rem", color: "var(--text-primary)" }}>LeetCode</h4>
                            <span style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>@Kakarotto007</span>
                        </div>
                        <span style={{ fontSize: "0.9rem", color: "var(--accent-cyan)", opacity: 0.8 }}>Hover to see stats</span>
                    </div>

                    {/* Back Face */}
                    <div style={{ 
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                        background: "var(--bg-card)",
                        borderRadius: "var(--radius-lg)",
                        border: "1px solid #FFA116",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "1rem",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                    }}>
                    <h4 style={{ fontSize: "1.5rem", color: "var(--text-primary)" }}>Max Rating</h4>
                    <div style={{ fontSize: "3.5rem", fontWeight: "700", color: "#FFA116" }}>1883</div>
                    <div style={{ 
                        background: "rgba(255, 161, 22, 0.1)", 
                        color: "#FFA116", 
                        padding: "0.5rem 1.5rem", 
                        borderRadius: "50px", 
                        fontWeight: "600",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem"
                    }}>
                        <span>⚔️</span> Knight
                    </div>
                    
                    <a 
                        href="https://leetcode.com/Kakarotto007/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ 
                            marginTop: "1rem", 
                            color: "var(--text-primary)", 
                            textDecoration: "underline",
                            fontSize: "0.9rem"
                        }}
                    >
                        View Profile ↗
                    </a>
                    </div>
                </motion.div>
            </div>

            {/* CodeForces Flip Card */}
            <div style={{ perspective: "1000px", width: "300px", height: "350px" }}>
                <motion.div
                    initial={false}
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                    style={{ 
                        width: "100%", 
                        height: "100%", 
                        position: "relative", 
                        transformStyle: "preserve-3d",
                    }}
                >
                    {/* Front Face */}
                    <div style={{ 
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        backfaceVisibility: "hidden",
                        background: "var(--bg-card)",
                        borderRadius: "var(--radius-lg)",
                        border: "1px solid var(--border-light)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "1.5rem",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                    }}>
                        <SiCodeforces color="#1F8ACB" style={{ fontSize: "5rem" }} />
                        <div style={{ textAlign: "center" }}>
                            <h4 style={{ fontSize: "1.8rem", margin: "0 0 0.5rem", color: "var(--text-primary)" }}>CodeForces</h4>
                            <span style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>@Kakarotto007</span>
                        </div>
                        <span style={{ fontSize: "0.9rem", color: "var(--accent-cyan)", opacity: 0.8 }}>Hover to see stats</span>
                    </div>

                    {/* Back Face */}
                    <div style={{ 
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                        background: "var(--bg-card)", 
                        borderRadius: "var(--radius-lg)",
                        border: "1px solid var(--accent-cyan)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "1rem",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                    }}>
                    <h4 style={{ fontSize: "1.5rem", color: "var(--text-primary)" }}>Current Rating</h4>
                    <div style={{ fontSize: "3.5rem", fontWeight: "700", color: "#03A89E" }}>1493</div>
                    <div style={{ 
                        background: "rgba(3, 168, 158, 0.1)", 
                        color: "#03A89E", 
                        padding: "0.5rem 1.5rem", 
                        borderRadius: "50px", 
                        fontWeight: "600",
                        textTransform: "uppercase",
                        letterSpacing: "1px"
                    }}>
                        Specialist
                    </div>
                    <div style={{ marginTop: "1rem", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                        Max: <span style={{ color: "#03A89E" }}>1493</span>
                    </div>
                    
                    <a 
                        href="https://codeforces.com/profile/Kakarotto007" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ 
                            marginTop: "1rem", 
                            color: "var(--text-primary)", 
                            textDecoration: "underline",
                            fontSize: "0.9rem"
                        }}
                    >
                        View Profile ↗
                    </a>
                    </div>
                </motion.div>
            </div>

            {/* AtCoder Flip Card */}
            <div style={{ perspective: "1000px", width: "300px", height: "350px" }}>
                <motion.div
                    initial={false}
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                    style={{ 
                        width: "100%", 
                        height: "100%", 
                        position: "relative", 
                        transformStyle: "preserve-3d",
                    }}
                >
                    {/* Front Face */}
                    <div style={{ 
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        backfaceVisibility: "hidden",
                        background: "var(--bg-card)",
                        borderRadius: "var(--radius-lg)",
                        border: "1px solid var(--border-light)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "1.5rem",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                    }}>
                        {/* Using FaCode as placeholder or styled text since SiAtcoder might be missing */}
                        <div style={{ fontSize: "5rem", color: "#fff" }}>⌨️</div> 
                        <div style={{ textAlign: "center" }}>
                            <h4 style={{ fontSize: "1.8rem", margin: "0 0 0.5rem", color: "var(--text-primary)" }}>AtCoder</h4>
                            <span style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>@Kakarotto007</span>
                        </div>
                        <span style={{ fontSize: "0.9rem", color: "var(--accent-cyan)", opacity: 0.8 }}>Hover to see stats</span>
                    </div>

                    {/* Back Face */}
                    <div style={{ 
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                        background: "var(--bg-card)", 
                        borderRadius: "var(--radius-lg)",
                        border: "1px solid #804000",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "1rem",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                    }}>
                    <h4 style={{ fontSize: "1.5rem", color: "var(--text-primary)" }}>Current Rating</h4>
                    <div style={{ fontSize: "3.5rem", fontWeight: "700", color: "#804000" }}>618</div>
                    <div style={{ 
                        background: "rgba(128, 64, 0, 0.1)", 
                        color: "#804000", 
                        padding: "0.5rem 1.5rem", 
                        borderRadius: "50px", 
                        fontWeight: "600",
                        textTransform: "uppercase",
                        letterSpacing: "1px"
                    }}>
                        7 Kyu
                    </div>
                    <div style={{ marginTop: "1rem", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                        Max: <span style={{ color: "#804000" }}>618</span>
                    </div>
                    
                    <a 
                        href="https://atcoder.jp/users/Kakarotto007" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ 
                            marginTop: "1rem", 
                            color: "var(--text-primary)", 
                            textDecoration: "underline",
                            fontSize: "0.9rem"
                        }}
                    >
                        View Profile ↗
                    </a>
                    </div>
                </motion.div>
            </div>

            {/* CodeChef Flip Card */}
            <div style={{ perspective: "1000px", width: "300px", height: "350px" }}>
                <motion.div
                    initial={false}
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                    style={{ 
                        width: "100%", 
                        height: "100%", 
                        position: "relative", 
                        transformStyle: "preserve-3d",
                    }}
                >
                    {/* Front Face */}
                    <div style={{ 
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        backfaceVisibility: "hidden",
                        background: "var(--bg-card)",
                        borderRadius: "var(--radius-lg)",
                        border: "1px solid var(--border-light)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "1.5rem",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                    }}>
                        <SiCodechef color="#5B4638" style={{ fontSize: "5rem" }} />
                        <div style={{ textAlign: "center" }}>
                            <h4 style={{ fontSize: "1.8rem", margin: "0 0 0.5rem", color: "var(--text-primary)" }}>CodeChef</h4>
                            <span style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>@kakarotto007</span>
                        </div>
                        <span style={{ fontSize: "0.9rem", color: "var(--accent-cyan)", opacity: 0.8 }}>Hover to see stats</span>
                    </div>

                    {/* Back Face */}
                    <div style={{ 
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                        background: "var(--bg-card)", 
                        borderRadius: "var(--radius-lg)",
                        border: "1px solid #1E7D22", 
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "1rem",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                    }}>
                    <h4 style={{ fontSize: "1.5rem", color: "var(--text-primary)" }}>Current Rating</h4>
                    <div style={{ fontSize: "3.5rem", fontWeight: "700", color: "#1E7D22" }}>1599</div>
                    <div style={{ 
                        background: "rgba(30, 125, 34, 0.1)", 
                        color: "#1E7D22", 
                        padding: "0.5rem 1.5rem", 
                        borderRadius: "50px", 
                        fontWeight: "600",
                        textTransform: "uppercase",
                        letterSpacing: "1px"
                    }}>
                        ⭐⭐
                    </div>
                    <div style={{ marginTop: "1rem", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                        Max: <span style={{ color: "#1E7D22" }}>1599</span>
                    </div>
                    
                    <a 
                        href="https://www.codechef.com/users/kakarotto007" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ 
                            marginTop: "1rem", 
                            color: "var(--text-primary)", 
                            textDecoration: "underline",
                            fontSize: "0.9rem"
                        }}
                    >
                        View Profile ↗
                    </a>
                    </div>
                </motion.div>
            </div>

        </div>

        {/* Heatmap Section */}
        <motion.div 
            whileHover={{ scale: 1.01 }}
            style={{ 
                background: "var(--bg-card)", 
                padding: "2rem", 
                borderRadius: "var(--radius-md)", 
                border: "1px solid var(--border-light)",
                maxWidth: "750px", 
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "1rem"
            }}
        >
            <h4 style={{ textAlign: "center", marginBottom: "1.5rem", color: "var(--text-secondary)" }}>
                 LeetCode Submissions
            </h4>
            
            <img 
                src={`https://leetcard.jacoblin.cool/Kakarotto007?theme=${theme}&font=Inter&ext=heatmap`}
                alt="LeetCode Heatmap" 
                style={{ 
                    width: "100%", 
                    borderRadius: "4px"
                }} 
            />
        </motion.div>

      </div>
    </section>
  );
};

export default CodingProfiles;
