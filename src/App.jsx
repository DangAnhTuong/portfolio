import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import ProjectShowcase from './components/ProjectShowcase';
import SkillsMatrix from './components/SkillsMatrix';
import ContactFooter from './components/ContactFooter';
import CvModal from './components/CvModal';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const [isCvOpen, setIsCvOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleOpenCv = () => setIsCvOpen(true);
  const handleCloseCv = () => setIsCvOpen(false);

  return (
    <div className="portfolio-app">
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onOpenCv={handleOpenCv}
      />
      <main>
        <Hero onOpenCv={handleOpenCv} />
        <AboutMe onOpenCv={handleOpenCv} />
        <ProjectShowcase />
        <SkillsMatrix />
      </main>
      <ContactFooter onOpenCv={handleOpenCv} />
      
      {/* Scroll to Top Floating Button */}
      {showScrollTop && (
        <button 
          className="scroll-to-top-btn"
          onClick={scrollToTop}
          title="Scroll to top"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      )}

      <style>{`
        .scroll-to-top-btn {
          position: fixed;
          bottom: 28px;
          right: 28px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 999;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 0 15px rgba(14, 165, 233, 0.2);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .scroll-to-top-btn:hover {
          transform: translateY(-4px);
          background: var(--accent-cyan);
          color: #ffffff;
          border-color: var(--accent-cyan);
          box-shadow: 0 15px 30px -5px rgba(14, 165, 233, 0.4);
        }
      `}</style>

      {/* 1-Page Official ATS Resume Preview Modal */}
      <CvModal 
        isOpen={isCvOpen} 
        onClose={handleCloseCv} 
      />
    </div>
  );
}
