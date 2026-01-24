import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import Preloader from './components/Preloader';
import ChatConnect from './components/ChatConnect';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Short delay to ensure the preloader runs then finishes
  useEffect(() => {
      const timer = setTimeout(() => {
          setIsLoading(false);
      }, 2500); 
      return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      
      {!isLoading && (
        <Router>
            <ScrollToTop />
            <Navbar onOpenChat={() => setIsChatOpen(true)} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
            <ChatConnect isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
            <Footer />
        </Router>
      )}
    </div>
  )
}

export default App
