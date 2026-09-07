import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectShowcase from './components/ProjectShowcase';
import FreeCloudShowcase from './components/FreeCloudShowcase';
import SkillsMatrix from './components/SkillsMatrix';
import ContactFooter from './components/ContactFooter';

export default function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
        <ProjectShowcase />
        <FreeCloudShowcase />
        <SkillsMatrix />
      </main>
      <ContactFooter />
    </div>
  );
}
