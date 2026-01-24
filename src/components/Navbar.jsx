import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { NavLink, Link } from "react-router-dom";

const Navbar = ({ onOpenChat }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { title: "Home", href: "/" },
        { title: "About Me", href: "/about" },
        { title: "Experience", href: "/experience" },
        { title: "Projects", href: "/projects" },
        // Connect is handled separately or specially
    ];

    return (
        <nav
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                zIndex: 1000,
                transition: "all 0.3s ease",
                background: scrolled ? "var(--nav-bg)" : "transparent",
                backdropFilter: scrolled ? "blur(10px)" : "none",
                borderBottom: scrolled ? "1px solid var(--border-light)" : "none",
                padding: scrolled ? "1.5rem 0" : "2rem 0",
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "0 2rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                {/* Logo */}
                <Link to="/" style={{ fontSize: "2rem", fontWeight: "700", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ background: "var(--gradient-text)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                        Bhashit Maheshwari.
                    </span>
                </Link>

                {/* Desktop Links */}
                <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                    <ul className="desktop-menu" style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0 }}>
                    {navLinks.map((link) => (
                            <li key={link.title}>
                                <NavLink 
                                    to={link.href} 
                                    className={({ isActive }) => (isActive ? "active-link" : "")}
                                    style={({ isActive }) => ({ 
                                        color: isActive ? "var(--accent-cyan)" : "var(--text-secondary)", 
                                        fontSize: "1.1rem", 
                                        transition: "color 0.3s",
                                        fontWeight: "500",
                                        textDecoration: "none"
                                    })}
                                >
                                    {link.title}
                                </NavLink>
                            </li>
                    ))}
                        {/* Connect Button */}
                        <li style={{ cursor: "pointer" }}>
                            <span 
                                onClick={onOpenChat}
                                style={{ 
                                    color: "var(--text-secondary)", 
                                    fontSize: "1.1rem", 
                                    fontWeight: "500",
                                    transition: "color 0.3s"
                                }}
                                onMouseEnter={(e) => e.target.style.color = "var(--accent-cyan)"}
                                onMouseLeave={(e) => e.target.style.color = "var(--text-secondary)"}
                            >
                                Connect
                            </span>
                        </li>
                    </ul>

                    {/* Theme Toggle */}
                    <button 
                        onClick={toggleTheme}
                        style={{
                            fontSize: "1.2rem",
                            color: "var(--text-primary)",
                            cursor: "pointer",
                            padding: "0.5rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "50%",
                            background: "var(--bg-card)",
                            border: "1px solid var(--border-light)",
                            transition: "background 0.3s"
                        }}
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <FaSun /> : <FaMoon />}
                    </button>

                    {/* Mobile Menu Button */}
                    <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ cursor: "pointer", fontSize: "1.5rem", color: "var(--text-primary)", marginLeft: "1rem" }}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        style={{
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            width: "100%",
                            background: "var(--nav-bg)",
                            backdropFilter: "blur(10px)",
                            padding: "2rem",
                            borderBottom: "1px solid var(--border-light)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "1.5rem",
                            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                        }}
                    >
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.title}
                                to={link.href}
                                onClick={() => setIsOpen(false)}
                                style={({ isActive }) => ({ 
                                    fontSize: "1.1rem", 
                                    color: isActive ? "var(--accent-cyan)" : "var(--text-primary)", 
                                    fontWeight: "500",
                                    textDecoration: "none"
                                })}
                            >
                                {link.title}
                            </NavLink>
                        ))}
                        {/* Mobile Connect Button */}
                        <span 
                            onClick={() => {
                                onOpenChat();
                                setIsOpen(false);
                            }}
                            style={{ 
                                fontSize: "1.1rem", 
                                color: "var(--text-primary)", 
                                fontWeight: "500",
                                cursor: "pointer"
                            }}
                        >
                            Connect
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
