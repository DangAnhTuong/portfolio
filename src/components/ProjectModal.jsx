import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Server, Layout, Database, Terminal, ShieldCheck, Lock, ArrowRight, Layers, Cpu } from 'lucide-react';

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
          {/* Real Live Screenshot Preview Frame */}
          {project.image && (
            <div className="modal-screenshot-section">
              <div className="modal-browser-bar">
                <div className="browser-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <div className="modal-browser-url">
                  <span>{project.demo || 'https://danganhtuong.dev'}</span>
                </div>
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="modal-open-live-btn"
                  >
                    <ExternalLink size={12} /> Visit Live Production
                  </a>
                )}
              </div>
              <div className="modal-screenshot-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="modal-screenshot-img" 
                />
              </div>
            </div>
          )}

          {/* Summary */}
          <div className="modal-section">
            <h4 className="modal-section-title">Overview &amp; Purpose</h4>
            <p className="modal-text">{project.description}</p>
          </div>

          {/* Interactive System Architecture Flowchart */}
          {project.architectureFlow && (
            <div className="modal-section">
              <h4 className="modal-section-title">
                <Layers size={17} color="var(--accent-cyan)" style={{ display: 'inline', marginRight: 6 }} />
                End-to-End System Architecture Pipeline
              </h4>
              <div className="flowchart-container">
                {project.architectureFlow.map((node, fIdx) => (
                  <React.Fragment key={fIdx}>
                    <div className="flowchart-node">
                      <div className="node-step-tag">{node.step}</div>
                      <div className="node-title">{node.name}</div>
                      <div className="node-desc">{node.desc}</div>
                    </div>
                    {fIdx < project.architectureFlow.length - 1 && (
                      <div className="flowchart-connector">
                        <ArrowRight size={16} className="connector-arrow" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          {/* Private Repository Notice */}
          {project.privateNotice && (
            <div className="private-notice-banner">
              <Lock size={20} color="var(--accent-amber)" className="private-banner-icon" />
              <div className="private-banner-text">
                <span className="banner-title">Mã nguồn &amp; Quyền truy cập:</span>
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

          {/* Architecture Layers Mapping */}
          <div className="modal-section">
            <h4 className="modal-section-title">System Architecture Breakdown</h4>
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
                    <span>Database &amp; Caching</span>
                  </div>
                  <p>{project.architecture.database}</p>
                </div>
              )}
              {project.architecture.devops && (
                <div className="arch-card">
                  <div className="arch-head">
                    <Terminal size={15} color="var(--accent-amber)" />
                    <span>DevOps &amp; Infrastructure</span>
                  </div>
                  <p>{project.architecture.devops}</p>
                </div>
              )}
              {project.architecture.core && (
                <div className="arch-card">
                  <div className="arch-head">
                    <ShieldCheck size={15} color="var(--accent-cyan)" />
                    <span>3D Graphics &amp; Engine</span>
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
          background: rgba(4, 7, 13, 0.82);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: modalFadeIn 0.25s ease;
        }

        .modal-content {
          width: 100%;
          max-width: 900px;
          max-height: 90vh;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
        }

        .modal-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 24px 28px;
          border-bottom: 1px solid var(--border-subtle);
          gap: 16px;
        }

        .modal-title {
          font-size: 1.45rem;
          font-weight: 800;
          margin: 6px 0 2px;
          line-height: 1.25;
        }

        .modal-role {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: var(--accent-cyan);
        }

        .modal-close-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
          transition: all 0.2s ease;
        }

        .modal-close-btn:hover {
          color: var(--text-primary);
          background: var(--badge-bg);
        }

        .modal-body {
          padding: 28px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 26px;
        }

        /* Modal Screenshot Section */
        .modal-screenshot-section {
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid var(--border-subtle);
          background: #090e17;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
        }

        .modal-browser-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 9px 16px;
          background: rgba(15, 23, 42, 0.95);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          gap: 12px;
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

        .modal-browser-url {
          flex: 1;
          max-width: 480px;
          margin: 0 auto;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 4px;
          padding: 3px 12px;
          text-align: center;
          font-family: var(--font-mono);
          font-size: 0.76rem;
          color: var(--text-muted);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .modal-open-live-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: var(--font-mono);
          font-size: 0.74rem;
          font-weight: 600;
          color: var(--accent-cyan);
          text-decoration: none;
          padding: 4px 10px;
          border-radius: 4px;
          background: rgba(14, 165, 233, 0.1);
          border: 1px solid rgba(14, 165, 233, 0.25);
          transition: all 0.2s ease;
        }

        .modal-open-live-btn:hover {
          background: var(--accent-cyan);
          color: #ffffff;
        }

        .modal-screenshot-container {
          position: relative;
          width: 100%;
          max-height: 380px;
          overflow: hidden;
          background: #0b1120;
        }

        .modal-screenshot-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
        }

        .modal-section-title {
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-primary);
          margin-bottom: 12px;
          font-weight: 700;
          display: flex;
          align-items: center;
        }

        .modal-text {
          font-size: 0.94rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        /* Flowchart Styles */
        .flowchart-container {
          display: flex;
          align-items: center;
          gap: 10px;
          overflow-x: auto;
          padding: 14px 4px 18px;
        }

        .flowchart-node {
          flex: 1;
          min-width: 145px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 12px 14px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          transition: border-color 0.2s ease, transform 0.2s ease;
        }

        .flowchart-node:hover {
          border-color: var(--accent-cyan);
          transform: translateY(-2px);
        }

        .node-step-tag {
          font-size: 0.68rem;
          font-family: var(--font-mono);
          text-transform: uppercase;
          font-weight: 700;
          color: var(--accent-cyan);
        }

        .node-title {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .node-desc {
          font-size: 0.76rem;
          color: var(--text-secondary);
          line-height: 1.35;
        }

        .flowchart-connector {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          opacity: 0.8;
          flex-shrink: 0;
        }

        .private-notice-banner {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px 16px;
          border-radius: var(--radius-sm);
          background: rgba(245, 158, 11, 0.08);
          border: 1px dashed rgba(245, 158, 11, 0.35);
        }

        .private-banner-text {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .banner-title {
          font-weight: 700;
          color: var(--accent-amber);
          margin-right: 6px;
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
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .highlight-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .arch-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 14px;
        }

        .arch-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 14px 16px;
        }

        .arch-head {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 6px;
        }

        .arch-card p {
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        .tags-container {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .modal-footer {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
          padding: 18px 28px;
          border-top: 1px solid var(--border-subtle);
          background: var(--bg-secondary);
        }

        @keyframes modalFadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }

        @media (max-width: 768px) {
          .modal-content {
            max-height: 95vh;
          }
          .modal-header, .modal-body, .modal-footer {
            padding: 18px;
          }
          .flowchart-container {
            flex-direction: column;
            align-items: stretch;
          }
          .flowchart-connector {
            transform: rotate(90deg);
            padding: 4px 0;
          }
        }
      `}</style>
    </div>
  );
}
