import React, { useState, useEffect } from 'react';
import { Terminal, Sun, Moon, FileText, Menu, X, Sparkles } from 'lucide-react';
import { PROFILE } from '../data/projects';

export default function Navbar({ theme, toggleTheme, onOpenCv }) {
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

        {/* 4 Standard Navigation Tabs + Availability Pill */}
        <nav className="nav-links">
          <a href="#home" className="nav-item">Home</a>
          <a href="#about" className="nav-item">About</a>
          <a href="#projects" className="nav-item">Projects</a>
          <a href="#contact" className="nav-item">Contact</a>

          <a href="#contact" className="nav-availability-pill" title="Candidate Availability Status">
            <span className="nav-pulse-dot" />
            <span>Open to Work</span>
          </a>
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

          {/* View Official Resume / CV Modal */}
          <button 
            onClick={onOpenCv}
            className="btn btn-primary btn-sm resume-btn"
            title="Preview Official 1-Page Resume (PDF)"
          >
            <FileText size={15} />
            <span>Resume</span>
          </button>

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
          
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenCv(); }} 
            className="btn btn-primary btn-sm"
            style={{ marginTop: '8px', width: '100%', justifyContent: 'center' }}
          >
            <FileText size={16} />
            <span>View Resume PDF</span>
          </button>
        </div>
      )}

      <style>{`
        .navbar-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 999;
          height: 72px;
          display: flex;
          align-items: center;
          transition: background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease;
          border-bottom: 1px solid transparent;
        }

        .navbar-scrolled {
          background-color: var(--bg-nav);
          border-bottom: 1px solid var(--border-subtle);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          height: 64px;
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .brand-icon {
          width: 32px;
          height: 32px;
          border-radius: var(--radius-sm);
          background: var(--badge-bg);
          border: 1px solid var(--border-subtle);
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
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.1;
        }

        .brand-role {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .nav-item {
          font-size: 0.92rem;
          font-weight: 500;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .nav-item:hover {
          color: var(--accent-cyan);
        }

        .nav-availability-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          font-size: 0.74rem;
          font-weight: 700;
          font-family: var(--font-mono);
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.35);
          color: var(--accent-emerald);
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .nav-availability-pill:hover {
          background: rgba(16, 185, 129, 0.2);
          transform: scale(1.02);
        }

        .nav-pulse-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-emerald);
          box-shadow: 0 0 6px var(--accent-emerald);
          animation: navPulse 1.6s infinite;
        }

        @keyframes navPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .theme-toggle-btn {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-sm);
          background: var(--badge-bg);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .theme-toggle-btn:hover {
          border-color: var(--border-focus);
          transform: translateY(-1px);
        }

        .resume-btn {
          cursor: pointer;
        }

        .mobile-toggle-btn {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 4px;
        }

        .mobile-menu {
          position: fixed;
          top: 72px;
          left: 16px;
          right: 16px;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          z-index: 998;
          backdrop-filter: blur(16px);
        }

        .mobile-nav-item {
          padding: 10px 14px;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          text-decoration: none;
          border-radius: var(--radius-sm);
        }

        .mobile-nav-item:hover {
          background: var(--badge-bg);
          color: var(--accent-cyan);
        }

        @media (max-width: 768px) {
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
