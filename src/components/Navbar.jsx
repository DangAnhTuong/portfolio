import React, { useState, useEffect } from 'react';
import { Terminal, Sun, Moon, FileText, Menu, X } from 'lucide-react';
import { PROFILE } from '../data/projects';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-wrapper ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#home" className="navbar-brand">
          <div className="brand-icon">
            <Terminal size={17} color="var(--accent-cyan)" />
          </div>
          <div className="brand-text">
            <span className="brand-name">{PROFILE.brandLogo}</span>
            <span className="brand-role">Software Engineer</span>
          </div>
        </a>

        {/* 4 Standard Navigation Tabs */}
        <nav className="nav-links">
          <a href="#home" className="nav-item">Home</a>
          <a href="#about" className="nav-item">About</a>
          <a href="#projects" className="nav-item">Projects</a>
          <a href="#contact" className="nav-item">Contact</a>
        </nav>

        {/* Right Actions: Theme Toggle + Resume Button */}
        <div className="navbar-actions">
          {/* Light / Dark Mode Toggle */}
          <button 
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun size={18} color="#fbbf24" className="theme-icon" />
            ) : (
              <Moon size={18} color="#6366f1" className="theme-icon" />
            )}
          </button>

          {/* Download Resume / CV */}
          <a 
            href={PROFILE.cvUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary btn-sm"
            title="Download Official Resume PDF"
          >
            <FileText size={15} />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu glass-panel">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">Home</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">About Me</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">Featured Projects</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">Contact</a>
          <a 
            href={PROFILE.cvUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary btn-sm"
            style={{ marginTop: '8px' }}
          >
            <FileText size={16} />
            <span>Download Resume PDF</span>
          </a>
        </div>
      )}

      <style>{`
        .navbar-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 18px 0;
          transition: all 0.3s ease;
        }

        .navbar-scrolled {
          padding: 12px 0;
          background: var(--bg-nav);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-subtle);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .brand-icon {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          background: rgba(14, 165, 233, 0.1);
          border: 1px solid rgba(14, 165, 233, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.05rem;
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }

        .brand-role {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--accent-cyan);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-item {
          font-family: var(--font-heading);
          font-size: 0.94rem;
          font-weight: 600;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.2s ease;
          position: relative;
        }

        .nav-item:hover {
          color: var(--text-primary);
        }

        .nav-item::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--gradient-brand);
          transition: width 0.25s ease;
          border-radius: 2px;
        }

        .nav-item:hover::after {
          width: 100%;
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .theme-toggle-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--badge-bg);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .theme-toggle-btn:hover {
          transform: rotate(20deg) scale(1.06);
          border-color: var(--border-focus);
        }

        .btn-sm {
          padding: 8px 18px;
          font-size: 0.88rem;
        }

        .mobile-toggle-btn {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 6px;
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 20px;
          right: 20px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          border-radius: var(--radius-md);
          margin-top: 10px;
        }

        .mobile-nav-item {
          color: var(--text-primary);
          text-decoration: none;
          font-size: 1rem;
          font-weight: 600;
          padding: 8px 0;
          border-bottom: 1px solid var(--border-subtle);
        }

        @media (max-width: 860px) {
          .nav-links {
            display: none;
          }
          .mobile-toggle-btn {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}
