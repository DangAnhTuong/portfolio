import React, { useState, useEffect } from 'react';
import { Terminal, Github, Send, Menu, X } from 'lucide-react';
import { PROFILE } from '../data/projects';

export default function Navbar() {
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
        <a href="#hero" className="navbar-brand">
          <div className="brand-icon">
            <Terminal size={18} color="var(--accent-cyan)" />
          </div>
          <div className="brand-text">
            <span className="brand-name">{PROFILE.name}</span>
            <span className="brand-role">Full-Stack & AI</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="nav-links">
          <a href="#projects" className="nav-item">Dự Án</a>
          <a href="#skills" className="nav-item">Kỹ Năng</a>
          <a href="#cloud-architecture" className="nav-item">Hạ Tầng Cloud 0đ</a>
          <a href="#contact" className="nav-item">Liên Hệ</a>
        </nav>

        {/* Action Group */}
        <div className="navbar-actions">
          <a 
            href={PROFILE.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-secondary btn-sm"
            title="Xem GitHub Profile"
          >
            <Github size={16} />
            <span className="hide-mobile">GitHub</span>
          </a>

          <a href="#contact" className="btn btn-primary btn-sm">
            <Send size={15} />
            <span>Kết Nối</span>
          </a>

          <button 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu glass-panel">
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">Dự Án Thực Chiến</a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">Kỹ Năng Chuyên Môn</a>
          <a href="#cloud-architecture" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">Hạ Tầng Cloud 0đ</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">Liên Hệ Trực Tiếp</a>
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
          background: rgba(7, 9, 14, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-subtle);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .brand-icon {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          background: rgba(0, 242, 254, 0.1);
          border: 1px solid rgba(0, 242, 254, 0.25);
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
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--text-primary);
        }

        .brand-role {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--accent-cyan);
          letter-spacing: 0.05em;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nav-item {
          font-family: var(--font-heading);
          font-size: 0.92rem;
          font-weight: 500;
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
          background: var(--gradient-cyber);
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

        .btn-sm {
          padding: 8px 16px;
          font-size: 0.85rem;
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
          gap: 16px;
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
          .hide-mobile {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
