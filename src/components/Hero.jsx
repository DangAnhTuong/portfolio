import React from 'react';
import { ArrowRight, MapPin, Sparkles, FileText, Code2, Layers, Cpu } from 'lucide-react';
import { PROFILE } from '../data/projects';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Top Badges (Matching reference layout) */}
        <div className="badge-row">
          <div className="signature-pill">
            <Sparkles size={14} color="var(--accent-cyan)" />
            <span>Signature Focus · Real-Time AI & 3D Web</span>
          </div>

          <div className="location-pill">
            <MapPin size={14} color="var(--accent-indigo)" />
            <span>{PROFILE.location}</span>
          </div>
        </div>

        {/* Large Name */}
        <h1 className="hero-name">{PROFILE.name}</h1>

        {/* Prominent Subtitle */}
        <h2 className="hero-title text-gradient">
          {PROFILE.title}
        </h2>

        {/* Authentic CV Summary */}
        <p className="hero-summary">
          {PROFILE.summary}
        </p>

        {/* Highlighted Tech Pills */}
        <div className="tech-tags-cloud">
          <span className="tech-tag"><Layers size={13} /> React 19 & Next.js</span>
          <span className="tech-tag"><Code2 size={13} /> Three.js (@react-three/fiber)</span>
          <span className="tech-tag"><Cpu size={13} /> Node.js & Python FastAPI</span>
          <span className="tech-tag"><Sparkles size={13} /> AI-Assisted Workflows (Antigravity & Claude Code)</span>
        </div>

        {/* Action Buttons */}
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            <span>Get In Touch</span>
            <ArrowRight size={16} />
          </a>

          <a href="#projects" className="btn btn-secondary">
            <span>View Projects</span>
          </a>

          <a href="#about" className="btn btn-secondary">
            <span>About Me</span>
          </a>
        </div>

        {/* Stats / Academic Facts Grid */}
        <div className="hero-stats-grid">
          {PROFILE.stats.map((stat, idx) => (
            <div key={idx} className="stat-card glass-panel">
              <span className="stat-val text-gradient">{stat.value}</span>
              <span className="stat-lbl">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 135px 0 65px;
        }

        .hero-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 920px;
        }

        .badge-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }

        .signature-pill, .location-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: var(--radius-full);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 600;
          background: var(--badge-bg);
          border: 1px solid var(--badge-border);
          color: var(--text-primary);
        }

        .signature-pill {
          border-color: rgba(14, 165, 233, 0.3);
        }

        .hero-name {
          font-size: 3.8rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.15;
          margin-bottom: 12px;
          color: var(--text-primary);
        }

        .hero-title {
          font-size: 1.6rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          margin-bottom: 22px;
        }

        .hero-summary {
          font-size: 1.08rem;
          color: var(--text-secondary);
          line-height: 1.75;
          max-width: 780px;
          margin-bottom: 30px;
        }

        .tech-tags-cloud {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 9px;
          margin-bottom: 36px;
        }

        .tech-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          font-family: var(--font-mono);
          font-size: 0.82rem;
          background: var(--badge-bg);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
        }

        .hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 50px;
        }

        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          width: 100%;
        }

        .stat-card {
          padding: 16px 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          border-radius: var(--radius-md);
        }

        .stat-val {
          font-family: var(--font-heading);
          font-size: 1.02rem;
          font-weight: 700;
          text-align: center;
        }

        .stat-lbl {
          font-family: var(--font-mono);
          font-size: 0.74rem;
          color: var(--text-muted);
          text-align: center;
        }

        @media (max-width: 768px) {
          .hero-name {
            font-size: 2.6rem;
          }
          .hero-title {
            font-size: 1.25rem;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .hero-actions .btn {
            width: 100%;
          }
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
