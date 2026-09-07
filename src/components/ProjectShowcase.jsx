import React, { useState } from 'react';
import { ExternalLink, Github, Info, Sparkles } from 'lucide-react';
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
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Thực Chiến & Sản Phẩm</span>
          <h2 className="section-title">
            Các Dự Án <span className="text-gradient">Tiêu Biểu</span>
          </h2>
          <p className="section-desc">
            Tuyển tập các hệ thống phân tán chịu tải cao, trải nghiệm đồ họa 3D WebGL và giải pháp AI được triển khai hoàn chỉnh.
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

        {/* Project Cards Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-panel">
              {/* Card Top Glow */}
              <div 
                className="card-glow-bar" 
                style={{ background: project.gradient }}
              />

              <div className="card-content">
                {/* Meta row */}
                <div className="card-meta">
                  <span 
                    className="badge category-badge" 
                    style={{ borderColor: project.badgeColor, color: project.badgeColor }}
                  >
                    {project.category.toUpperCase()}
                  </span>
                  {project.featured && (
                    <span className="featured-pill">
                      <Sparkles size={12} color="var(--accent-amber)" />
                      <span>Featured System</span>
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <h3 className="project-title">{project.title}</h3>
                <p className="project-tagline">{project.tagline}</p>
                <p className="project-desc">{project.description}</p>

                {/* Tech Tags */}
                <div className="project-tags">
                  {project.tags.slice(0, 5).map((tag, idx) => (
                    <span key={idx} className="badge tag-pill">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 5 && (
                    <span className="badge tag-pill-more">+{project.tags.length - 5}</span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="card-actions">
                  <button 
                    className="btn btn-secondary card-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    <Info size={15} color="var(--accent-cyan)" />
                    <span>Chi Tiết Kiến Trúc</span>
                  </button>

                  <div className="action-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="icon-action-btn"
                      title="Xem Source Code trên GitHub"
                    >
                      <Github size={18} />
                    </a>

                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="icon-action-btn"
                      title="Mở Trải Nghiệm Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
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
          margin-bottom: 48px;
        }

        .filter-btn {
          padding: 8px 20px;
          border-radius: var(--radius-full);
          font-family: var(--font-heading);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .filter-btn:hover {
          color: var(--text-primary);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .filter-btn.active {
          background: var(--gradient-cyber);
          color: #040914;
          border-color: transparent;
          box-shadow: 0 4px 18px rgba(0, 242, 254, 0.3);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }

        .project-card {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          border: 1px solid var(--border-subtle);
          background: rgba(13, 18, 30, 0.75);
          backdrop-filter: blur(16px);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-6px);
          border-color: rgba(0, 242, 254, 0.4);
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 25px rgba(0, 242, 254, 0.15);
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
          margin-bottom: 14px;
        }

        .featured-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: #fbbf24;
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.25);
          padding: 3px 10px;
          border-radius: var(--radius-full);
        }

        .project-title {
          font-size: 1.45rem;
          color: var(--text-primary);
          margin-bottom: 8px;
          font-weight: 700;
        }

        .project-tagline {
          font-size: 0.9rem;
          color: var(--accent-cyan);
          font-weight: 500;
          margin-bottom: 12px;
          font-family: var(--font-body);
        }

        .project-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-bottom: 24px;
        }

        .tag-pill {
          font-size: 0.74rem;
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.08);
          color: #cbd5e1;
        }

        .tag-pill-more {
          font-size: 0.74rem;
          background: rgba(99, 102, 241, 0.1);
          color: var(--accent-indigo);
          border-color: rgba(99, 102, 241, 0.3);
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
          font-size: 0.85rem;
        }

        .action-links {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .icon-action-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .icon-action-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.12);
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
