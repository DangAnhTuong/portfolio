import React, { useState } from 'react';
import { ArrowRight, MapPin, Sparkles, FileText, Code2, Layers, Cpu, Copy, Check, ShieldCheck, Zap } from 'lucide-react';
import { PROFILE } from '../data/projects';

export default function Hero({ onOpenCv }) {
  const [copiedType, setCopiedType] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2200);
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Top Badges */}
        <div className="badge-row">
          {/* Live Availability Pill */}
          <div className="availability-pill">
            <span className="live-dot" />
            <span>{PROFILE.availability}</span>
          </div>

          <div className="signature-pill">
            <Sparkles size={14} color="var(--accent-cyan)" />
            <span>Signature Focus · Real-Time AI &amp; 3D Web</span>
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
          <span className="tech-tag"><Layers size={13} /> React 19 &amp; Next.js</span>
          <span className="tech-tag"><Code2 size={13} /> Three.js (@react-three/fiber)</span>
          <span className="tech-tag"><Cpu size={13} /> Node.js &amp; Python FastAPI</span>
          <span className="tech-tag"><Sparkles size={13} /> AI-Assisted Workflows (Antigravity &amp; Claude Code)</span>
        </div>

        {/* Action Buttons */}
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            <span>Get In Touch</span>
            <ArrowRight size={16} />
          </a>

          <button onClick={onOpenCv} className="btn btn-secondary resume-hero-btn" title="View 1-Page ATS Resume directly in browser">
            <FileText size={16} color="var(--accent-cyan)" />
            <span>Preview CV (1-Page ATS)</span>
          </button>

          <a href="#projects" className="btn btn-secondary">
            <span>View Projects</span>
          </a>
        </div>

        {/* 1-Click Quick Contact Strip */}
        <div className="quick-contact-strip">
          <button 
            className="quick-contact-pill"
            onClick={() => handleCopy(PROFILE.email, 'email')}
            title="Click to copy email address"
          >
            {copiedType === 'email' ? <Check size={13} color="var(--accent-emerald)" /> : <Copy size={13} />}
            <span>{copiedType === 'email' ? '✓ Copied Email!' : `Email: ${PROFILE.email}`}</span>
          </button>

          <button 
            className="quick-contact-pill"
            onClick={() => handleCopy(PROFILE.phone, 'phone')}
            title="Click to copy phone / Zalo number"
          >
            {copiedType === 'phone' ? <Check size={13} color="var(--accent-emerald)" /> : <Copy size={13} />}
            <span>{copiedType === 'phone' ? '✓ Copied Phone/Zalo!' : `Phone: ${PROFILE.phone}`}</span>
          </button>

          <div className="core-vitals-pill">
            <Zap size={13} color="var(--accent-emerald)" />
            <span>100/100 Core Web Vitals</span>
          </div>
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
          max-width: 940px;
        }

        .badge-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }

        .availability-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: var(--radius-full);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 700;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.35);
          color: var(--accent-emerald);
          box-shadow: 0 0 15px rgba(16, 185, 129, 0.15);
        }

        .live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-emerald);
          box-shadow: 0 0 8px var(--accent-emerald);
          animation: livePulse 1.6s infinite;
        }

        @keyframes livePulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.6; }
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
          max-width: 820px;
          margin-bottom: 30px;
        }

        .tech-tags-cloud {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 9px;
          margin-bottom: 34px;
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
          flex-wrap: wrap;
          margin-bottom: 26px;
        }

        .resume-hero-btn {
          cursor: pointer;
          border-color: rgba(14, 165, 233, 0.4);
        }

        .resume-hero-btn:hover {
          border-color: var(--accent-cyan);
          background: rgba(14, 165, 233, 0.1);
        }

        /* Quick Contact Strip */
        .quick-contact-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .quick-contact-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 600;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .quick-contact-pill:hover {
          color: var(--accent-cyan);
          border-color: var(--border-focus);
          transform: translateY(-1px);
        }

        .core-vitals-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 700;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          color: var(--accent-emerald);
        }

        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          width: 100%;
        }

        .stat-card {
          padding: 18px 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-subtle);
          background: var(--bg-card);
        }

        .stat-val {
          font-family: var(--font-heading);
          font-size: 1.12rem;
          font-weight: 800;
          line-height: 1.2;
        }

        .stat-lbl {
          font-family: var(--font-mono);
          font-size: 0.74rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        @media (max-width: 768px) {
          .hero-name {
            font-size: 2.6rem;
          }
          .hero-title {
            font-size: 1.25rem;
          }
          .hero-summary {
            font-size: 0.98rem;
          }
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
