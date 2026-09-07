import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Server, Layout, Database, Terminal, ShieldCheck } from 'lucide-react';

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
              {project.category.toUpperCase()}
            </span>
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-tagline">{project.tagline}</p>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Body Content */}
        <div className="modal-body">
          {/* Description */}
          <div className="modal-section">
            <h4 className="modal-section-title">Tổng Quan Bài Toán</h4>
            <p className="modal-text">{project.description}</p>
          </div>

          {/* Highlights */}
          <div className="modal-section">
            <h4 className="modal-section-title">Điểm Nhấn Kỹ Thuật & Giải Pháp</h4>
            <div className="highlights-list">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="highlight-item">
                  <CheckCircle2 size={18} color="var(--accent-emerald)" className="highlight-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Mapping */}
          <div className="modal-section">
            <h4 className="modal-section-title">Bản Đồ Kiến Trúc Hệ Thống (Architecture Stack)</h4>
            <div className="arch-grid">
              {project.architecture.frontend && (
                <div className="arch-card">
                  <div className="arch-head">
                    <Layout size={16} color="var(--accent-cyan)" />
                    <span>Frontend Layer</span>
                  </div>
                  <p>{project.architecture.frontend}</p>
                </div>
              )}
              {project.architecture.backend && (
                <div className="arch-card">
                  <div className="arch-head">
                    <Server size={16} color="var(--accent-indigo)" />
                    <span>Backend & API Gateway</span>
                  </div>
                  <p>{project.architecture.backend}</p>
                </div>
              )}
              {project.architecture.database && (
                <div className="arch-card">
                  <div className="arch-head">
                    <Database size={16} color="var(--accent-emerald)" />
                    <span>Database & Caching</span>
                  </div>
                  <p>{project.architecture.database}</p>
                </div>
              )}
              {project.architecture.devops && (
                <div className="arch-card">
                  <div className="arch-head">
                    <Terminal size={16} color="var(--accent-amber)" />
                    <span>DevOps & Container</span>
                  </div>
                  <p>{project.architecture.devops}</p>
                </div>
              )}
              {project.architecture.core && (
                <div className="arch-card">
                  <div className="arch-head">
                    <ShieldCheck size={16} color="var(--accent-cyan)" />
                    <span>Core Engine & 3D</span>
                  </div>
                  <p>{project.architecture.core}</p>
                </div>
              )}
            </div>
          </div>

          {/* Tech Badges */}
          <div className="modal-section">
            <h4 className="modal-section-title">Công Nghệ Sử Dụng</h4>
            <div className="tags-container">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="badge">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="modal-footer">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <Github size={18} />
            <span>Mã Nguồn GitHub</span>
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <ExternalLink size={18} />
            <span>Xem Trải Nghiệm Demo</span>
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
          background: rgba(4, 7, 13, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: fadeIn 0.25s ease;
        }

        .modal-content {
          width: 100%;
          max-width: 760px;
          max-height: 90vh;
          overflow-y: auto;
          background: #0f1626;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: var(--radius-lg);
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.85);
          animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .modal-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 18px;
        }

        .modal-title {
          font-size: 1.6rem;
          color: var(--text-primary);
          margin-top: 8px;
        }

        .modal-tagline {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-top: 4px;
        }

        .modal-close-btn {
          background: rgba(255, 255, 255, 0.06);
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
          background: rgba(255, 255, 255, 0.15);
          color: var(--text-primary);
        }

        .modal-body {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .modal-section-title {
          font-size: 0.95rem;
          font-family: var(--font-mono);
          text-transform: uppercase;
          color: var(--accent-cyan);
          letter-spacing: 0.06em;
          margin-bottom: 10px;
        }

        .modal-text {
          color: #cbd5e1;
          font-size: 0.98rem;
          line-height: 1.65;
        }

        .highlights-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.92rem;
          color: #e2e8f0;
        }

        .highlight-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .arch-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .arch-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          padding: 14px;
          border-radius: var(--radius-sm);
        }

        .arch-head {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 6px;
        }

        .arch-card p {
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.4;
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
          border-top: 1px solid var(--border-subtle);
          padding-top: 20px;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
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
