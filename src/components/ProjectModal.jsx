import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Server, Layout, Database, Terminal, ShieldCheck, Lock } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div>
            <span className="badge" style={{ borderColor: project.badgeColor, color: project.badgeColor }}>
              {project.category.toUpperCase()} · {project.timeline}
            </span>
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-role">{project.role}</p>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Body Content */}
        <div className="modal-body">
          {/* Summary */}
          <div className="modal-section">
            <h4 className="modal-section-title">Overview & Purpose</h4>
            <p className="modal-text">{project.description}</p>
          </div>

          {/* Private Repository Notice */}
          {project.privateNotice && (
            <div className="private-notice-banner">
              <Lock size={20} color="var(--accent-amber)" className="private-banner-icon" />
              <div className="private-banner-text">
                <span className="banner-title">Mã nguồn & Quyền truy cập:</span>
                <p>{project.privateNotice}</p>
              </div>
            </div>
          )}

          {/* Key Deliverables & Technical Highlights (Strict from CV) */}
          <div className="modal-section">
            <h4 className="modal-section-title">Verified Engineering Deliverables</h4>
            <div className="highlights-list">
              {project.bullets.map((bullet, idx) => (
                <div key={idx} className="highlight-item">
                  <CheckCircle2 size={17} color="var(--accent-emerald)" className="highlight-icon" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Mapping */}
          <div className="modal-section">
            <h4 className="modal-section-title">System Architecture Layers</h4>
            <div className="arch-grid">
              {project.architecture.frontend && (
                <div className="arch-card">
                  <div className="arch-head">
                    <Layout size={15} color="var(--accent-cyan)" />
                    <span>Frontend Client</span>
                  </div>
                  <p>{project.architecture.frontend}</p>
                </div>
              )}
              {project.architecture.backend && (
                <div className="arch-card">
                  <div className="arch-head">
                    <Server size={15} color="var(--accent-indigo)" />
                    <span>Backend Microservices</span>
                  </div>
                  <p>{project.architecture.backend}</p>
                </div>
              )}
              {project.architecture.database && (
                <div className="arch-card">
                  <div className="arch-head">
                    <Database size={15} color="var(--accent-emerald)" />
                    <span>Database & Caching</span>
                  </div>
                  <p>{project.architecture.database}</p>
                </div>
              )}
              {project.architecture.devops && (
                <div className="arch-card">
                  <div className="arch-head">
                    <Terminal size={15} color="var(--accent-amber)" />
                    <span>DevOps & Deployment</span>
                  </div>
                  <p>{project.architecture.devops}</p>
                </div>
              )}
              {project.architecture.core && (
                <div className="arch-card">
                  <div className="arch-head">
                    <ShieldCheck size={15} color="var(--accent-cyan)" />
                    <span>3D Graphics & Engine</span>
                  </div>
                  <p>{project.architecture.core}</p>
                </div>
              )}
            </div>
          </div>

          {/* Tech Badges */}
          <div className="modal-section">
            <h4 className="modal-section-title">Technologies Used</h4>
            <div className="tags-container">
              {project.techStack.map((tag, idx) => (
                <span key={idx} className="badge">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="modal-footer">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-secondary"
            title={project.privateNotice || "View Source Code"}
          >
            <Github size={17} />
            <span>{project.isPrivate ? "GitHub (Private Repo)" : "View Source Code"}</span>
            {project.isPrivate && <Lock size={14} color="var(--accent-amber)" style={{ marginLeft: 4 }} />}
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <ExternalLink size={17} />
            <span>Interactive Demo</span>
          </a>
        </div>
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(4, 7, 13, 0.75);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: fadeIn 0.2s ease;
        }

        .modal-content {
          width: 100%;
          max-width: 740px;
          max-height: 90vh;
          overflow-y: auto;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 22px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
        }

        .modal-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 16px;
        }

        .modal-title {
          font-size: 1.5rem;
          color: var(--text-primary);
          margin-top: 6px;
        }

        .modal-role {
          font-size: 0.9rem;
          color: var(--accent-cyan);
          font-family: var(--font-mono);
          margin-top: 2px;
        }

        .modal-close-btn {
          background: var(--badge-bg);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .modal-close-btn:hover {
          color: var(--text-primary);
          border-color: var(--border-focus);
        }

        .modal-body {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .modal-section-title {
          font-size: 0.85rem;
          font-family: var(--font-mono);
          text-transform: uppercase;
          color: var(--accent-cyan);
          letter-spacing: 0.08em;
          margin-bottom: 8px;
        }

        .modal-text {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.65;
        }

        .private-notice-banner {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.28);
          padding: 14px 16px;
          border-radius: var(--radius-md);
        }

        .private-banner-icon {
          flex-shrink: 0;
          margin-top: 3px;
        }

        .private-banner-text {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .banner-title {
          font-size: 0.85rem;
          font-weight: 600;
          color: #f59e0b;
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .private-banner-text p {
          font-size: 0.88rem;
          color: #fef3c7;
          line-height: 1.5;
          margin: 0;
        }

        .highlights-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.9rem;
          color: var(--text-primary);
          line-height: 1.5;
        }

        .highlight-icon {
          flex-shrink: 0;
          margin-top: 3px;
        }

        .arch-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .arch-card {
          background: var(--badge-bg);
          border: 1px solid var(--border-subtle);
          padding: 12px;
          border-radius: var(--radius-sm);
        }

        .arch-head {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .arch-card p {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .tags-container {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .modal-footer {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
          border-top: 1px solid var(--border-subtle);
          padding-top: 18px;
        }

        @media (max-width: 640px) {
          .arch-grid {
            grid-template-columns: 1fr;
          }
          .modal-footer {
            flex-direction: column;
          }
          .modal-footer .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
