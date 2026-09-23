import React, { useState } from 'react';
import { ExternalLink, Github, Info, Sparkles, CheckCircle2, Lock, Eye, ArrowUpRight, Zap } from 'lucide-react';
import { PROJECTS, CATEGORIES } from '../data/projects';
import ProjectModal from './ProjectModal';

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Featured Engineering</span>
          <h2 className="section-title">
            Production &amp; Personal <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-desc">
            Decoupled microservices, real-time AI audio streaming, and high-fidelity 3D WebGL interfaces built with verified engineering standards.
          </p>
        </div>

        {/* Category Filters */}
        <div className="category-filters">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-panel">
              {/* Card Top Accent Bar */}
              <div 
                className="card-glow-bar" 
                style={{ background: project.gradient }}
              />

              {/* Visual Real Project Screenshot Frame */}
              {project.image && (
                <div 
                  className="project-mockup-wrapper"
                  onClick={() => setSelectedProject(project)}
                  title="Click to view full architecture & real UI"
                >
                  <div className="card-browser-bar">
                    <div className="browser-dots">
                      <span className="dot dot-red" />
                      <span className="dot dot-yellow" />
                      <span className="dot dot-green" />
                    </div>
                    <span className="browser-domain-text">
                      {project.demo ? project.demo.replace('https://', '') : 'production.app'}
                    </span>
                    <span className="browser-live-badge">REAL UI</span>
                  </div>
                  <div className="mockup-img-container">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="project-mockup-img"
                      loading="lazy"
                    />
                    <div className="mockup-hover-overlay">
                      <span className="overlay-pill">
                        <Eye size={14} /> View Live UI &amp; Architecture
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <div className="card-content">
                {/* Meta Row */}
                <div className="card-meta">
                  <span 
                    className="badge category-badge" 
                    style={{ borderColor: project.badgeColor, color: project.badgeColor }}
                  >
                    {project.category.toUpperCase()}
                  </span>
                  <span className="timeline-pill">
                    {project.timeline}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="project-title">{project.title}</h3>
                <p className="project-role">{project.role}</p>
                <p className="project-tagline">{project.tagline}</p>

                {/* Production Metrics Row */}
                {project.metrics && (
                  <div className="project-metrics-row">
                    {project.metrics.map((metric, mIdx) => (
                      <span key={mIdx} className="metric-pill">
                        <Zap size={11} color="var(--accent-amber)" />
                        <span>{metric}</span>
                      </span>
                    ))}
                  </div>
                )}

                {/* Bullet Points from CV */}
                <div className="project-bullets">
                  {project.bullets.slice(0, 2).map((bullet, idx) => (
                    <div key={idx} className="bullet-row">
                      <CheckCircle2 size={15} color="var(--accent-emerald)" className="bullet-icon" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="project-tags">
                  {project.techStack.slice(0, 5).map((tech, idx) => (
                    <span key={idx} className="badge tag-pill">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className="badge tag-pill-more">+{project.techStack.length - 5}</span>
                  )}
                </div>

                {/* Private Repo Notice */}
                {project.privateNotice && (
                  <div className="card-private-hint">
                    <Lock size={13} color="var(--accent-amber)" />
                    <span>{project.privateNotice}</span>
                  </div>
                )}

                {/* Card Actions */}
                <div className="card-actions">
                  <button 
                    className="btn btn-secondary card-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    <Info size={15} color="var(--accent-cyan)" />
                    <span>System Architecture</span>
                  </button>

                  <div className="action-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="icon-action-btn"
                      title={project.privateNotice || "View GitHub Repository"}
                    >
                      <Github size={17} />
                    </a>

                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="icon-action-btn primary-action"
                      title="Open Live Preview"
                    >
                      <ExternalLink size={17} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture Walkthrough Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      <style>{`
        .projects-section {
          padding: 80px 0;
          position: relative;
        }

        .category-filters {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 44px;
        }

        .filter-btn {
          padding: 8px 18px;
          border-radius: var(--radius-full);
          font-size: 0.88rem;
          font-weight: 600;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-btn:hover {
          color: var(--text-primary);
          border-color: var(--border-focus);
        }

        .filter-btn.active {
          background: var(--accent-cyan);
          border-color: var(--accent-cyan);
          color: #ffffff;
          box-shadow: 0 0 15px rgba(14, 165, 233, 0.35);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(520px, 1fr));
          gap: 28px;
        }

        .project-card {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
          border: 1px solid var(--border-subtle);
          background: var(--bg-card);
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5), 0 0 25px rgba(14, 165, 233, 0.12);
          border-color: rgba(14, 165, 233, 0.35);
        }

        .card-glow-bar {
          height: 3px;
          width: 100%;
        }

        /* Real Mockup Frame */
        .project-mockup-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: #090e17;
          border-bottom: 1px solid var(--border-subtle);
          cursor: pointer;
        }

        .card-browser-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 14px;
          background: rgba(15, 23, 42, 0.95);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          font-family: var(--font-mono);
          font-size: 0.72rem;
        }

        .browser-dots {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          display: inline-block;
        }

        .dot-red { background: #ef4444; }
        .dot-yellow { background: #f59e0b; }
        .dot-green { background: #10b981; }

        .browser-domain-text {
          color: var(--text-muted);
          font-weight: 500;
          letter-spacing: 0.02em;
        }

        .browser-live-badge {
          font-size: 0.65rem;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: 4px;
          background: rgba(16, 185, 129, 0.15);
          color: var(--accent-emerald);
          border: 1px solid rgba(16, 185, 129, 0.3);
          letter-spacing: 0.05em;
        }

        .mockup-img-container {
          position: relative;
          width: 100%;
          height: 240px;
          overflow: hidden;
          background: #0b1120;
        }

        .project-mockup-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: transform 0.4s ease;
        }

        .project-card:hover .project-mockup-img {
          transform: scale(1.04);
        }

        .mockup-hover-overlay {
          position: absolute;
          inset: 0;
          background: rgba(4, 7, 13, 0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.25s ease;
        }

        .project-mockup-wrapper:hover .mockup-hover-overlay {
          opacity: 1;
        }

        .overlay-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: var(--radius-full);
          font-size: 0.82rem;
          font-weight: 700;
          background: rgba(14, 165, 233, 0.9);
          color: #ffffff;
          backdrop-filter: blur(8px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
        }

        .card-content {
          padding: 26px 28px;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 14px;
        }

        .card-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .category-badge {
          font-size: 0.72rem;
          font-weight: 700;
          font-family: var(--font-mono);
          letter-spacing: 0.05em;
          padding: 3px 8px;
          border-radius: 4px;
          border-width: 1px;
          border-style: solid;
          background: transparent;
        }

        .timeline-pill {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .project-title {
          font-size: 1.35rem;
          font-weight: 800;
          line-height: 1.3;
          color: var(--text-primary);
        }

        .project-role {
          font-size: 0.84rem;
          font-family: var(--font-mono);
          color: var(--accent-cyan);
          font-weight: 600;
          margin-top: -8px;
        }

        .project-tagline {
          font-size: 0.94rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        /* Production Metrics Row */
        .project-metrics-row {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin: 2px 0;
        }

        .metric-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 600;
          font-family: var(--font-mono);
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.25);
          color: var(--text-primary);
        }

        .project-bullets {
          display: flex;
          flex-direction: column;
          gap: 9px;
          margin: 4px 0;
        }

        .bullet-row {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .bullet-icon {
          flex-shrink: 0;
          margin-top: 3px;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: auto;
          padding-top: 10px;
        }

        .tag-pill {
          font-size: 0.76rem;
          font-family: var(--font-mono);
          background: var(--badge-bg);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          padding: 3px 9px;
        }

        .tag-pill-more {
          font-size: 0.74rem;
          font-family: var(--font-mono);
          background: var(--badge-bg);
          color: var(--accent-cyan);
          border: 1px solid rgba(14, 165, 233, 0.3);
          padding: 3px 8px;
        }

        .card-private-hint {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.76rem;
          color: var(--accent-amber);
          background: rgba(245, 158, 11, 0.08);
          border: 1px dashed rgba(245, 158, 11, 0.3);
          padding: 6px 10px;
          border-radius: var(--radius-sm);
        }

        .card-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding-top: 14px;
          border-top: 1px solid var(--border-subtle);
          margin-top: 8px;
        }

        .card-btn {
          flex: 1;
          justify-content: center;
          font-size: 0.85rem;
          padding: 8px 14px;
        }

        .action-links {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .icon-action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: var(--radius-sm);
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .icon-action-btn:hover {
          background: var(--border-subtle);
          color: var(--accent-cyan);
          border-color: var(--border-focus);
          transform: translateY(-2px);
        }

        .icon-action-btn.primary-action {
          background: var(--accent-cyan);
          border-color: var(--accent-cyan);
          color: #ffffff;
        }

        .icon-action-btn.primary-action:hover {
          filter: brightness(1.1);
          box-shadow: 0 0 15px rgba(14, 165, 233, 0.4);
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          .project-mockup-wrapper {
            height: 200px;
          }
          .card-content {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
}
