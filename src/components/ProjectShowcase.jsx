import React, { useState } from 'react';
import { ExternalLink, Github, Info, Sparkles, CheckCircle2, Lock } from 'lucide-react';
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
            Production & Personal <span className="text-gradient">Projects</span>
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
                      className="icon-action-btn"
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
          padding: 8px 20px;
          border-radius: var(--radius-full);
          font-family: var(--font-heading);
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: var(--badge-bg);
          border: 1px solid var(--border-subtle);
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .filter-btn:hover {
          color: var(--text-primary);
          border-color: var(--border-focus);
        }

        .filter-btn.active {
          background: var(--gradient-brand);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 4px 18px rgba(14, 165, 233, 0.3);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 26px;
        }

        .project-card {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          border: 1px solid var(--border-subtle);
        }

        .card-glow-bar {
          height: 4px;
          width: 100%;
        }

        .card-content {
          padding: 28px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .card-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .timeline-pill {
          font-family: var(--font-mono);
          font-size: 0.74rem;
          color: var(--text-muted);
        }

        .project-title {
          font-size: 1.35rem;
          color: var(--text-primary);
          margin-bottom: 4px;
          font-weight: 700;
        }

        .project-role {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--accent-cyan);
          margin-bottom: 8px;
        }

        .project-tagline {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 18px;
        }

        .project-bullets {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .bullet-row {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        .bullet-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 22px;
        }

        .tag-pill {
          font-size: 0.74rem;
          background: var(--badge-bg);
          border-color: var(--badge-border);
          color: var(--text-secondary);
        }

        .tag-pill-more {
          font-size: 0.74rem;
          background: rgba(99, 102, 241, 0.1);
          color: var(--accent-indigo);
          border-color: rgba(99, 102, 241, 0.3);
        }

        .card-private-hint {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.76rem;
          color: #fbbf24;
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.25);
          padding: 7px 12px;
          border-radius: var(--radius-sm);
          margin-top: 14px;
          line-height: 1.4;
        }

        .card-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border-subtle);
          padding-top: 18px;
          margin-top: auto;
        }

        .card-btn {
          padding: 8px 16px;
          font-size: 0.84rem;
        }

        .action-links {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .icon-action-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--badge-bg);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .icon-action-btn:hover {
          color: var(--text-primary);
          border-color: var(--border-focus);
          transform: translateY(-2px);
        }

        @media (max-width: 860px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
