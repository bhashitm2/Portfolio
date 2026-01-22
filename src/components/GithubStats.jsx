import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const GithubStats = () => {
  const { theme } = useTheme();

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem 0', width: "100%" }}>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           style={{
               background: "var(--bg-card)",
               padding: "2rem",
               borderRadius: "var(--radius-lg)",
               border: "1px solid var(--border-light)",
               width: "100%",
               maxWidth: "1000px",
               display: "flex",
               flexDirection: "column",
               alignItems: "center"
           }}
        >
          <h3 style={{ fontSize: "1.5rem", marginBottom: "1.5rem", color: "var(--text-primary)" }}>
            Github <span style={{ color: "var(--accent-green)" }}>Contributions</span>
          </h3>
          
          <GitHubCalendar 
            username="bhashitm2"
            blockSize={12}
            blockMargin={5}
            colorScheme={theme}
            fontSize={14}
            theme={{
                light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
            }}
            style={{
                color: "var(--text-secondary)"
            }}
          />
        </motion.div>
    </div>
  );
};

export default GithubStats;
