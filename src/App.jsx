import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import ProjectShowcase from './components/ProjectShowcase';
import SkillsMatrix from './components/SkillsMatrix';
import ContactFooter from './components/ContactFooter';

export default function App() {
  // Theme state: default to 'light' (matching nguyentrungnam.com default) or user preference
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="portfolio-app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <AboutMe />
        <ProjectShowcase />
        <SkillsMatrix />
      </main>
      <ContactFooter />
    </div>
  );
}
