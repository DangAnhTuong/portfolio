import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import ProjectShowcase from './components/ProjectShowcase';
import SkillsMatrix from './components/SkillsMatrix';
import ContactFooter from './components/ContactFooter';
import CvModal from './components/CvModal';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const [isCvOpen, setIsCvOpen] = useState(false);

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
      
      {/* 1-Page Official ATS Resume Preview Modal */}
      <CvModal 
        isOpen={isCvOpen} 
        onClose={handleCloseCv} 
      />
    </div>
  );
}
