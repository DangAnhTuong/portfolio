import React from 'react';
import { GraduationCap, Award, Globe2, Bot, Mail, Phone, MapPin, ExternalLink, Download } from 'lucide-react';
import { PROFILE } from '../data/projects';

export default function AboutMe() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Background & Identity</span>
          <h2 className="section-title">
            About <span className="text-gradient">Dang Anh Tuong</span>
          </h2>
          <p className="section-desc">
            Final-year Information Technology student at Thuyloi University passionate about building robust web applications and applying cutting-edge engineering tools.
          </p>
        </div>

        {/* 2-Column Overview */}
        <div className="about-grid">
          {/* Left: Education & Credentials */}
          <div className="about-card glass-panel">
            <div className="about-card-header">
              <div className="card-icon-wrap">
                <GraduationCap size={22} color="var(--accent-cyan)" />
              </div>
              <div>
                <h3 className="card-title">Academic Background</h3>
                <p className="card-subtitle">{PROFILE.education.university}</p>
              </div>
            </div>

            <div className="education-timeline">
              <div className="edu-item">
                <div className="edu-dot" />
                <div className="edu-content">
                  <span className="edu-degree">{PROFILE.education.degree}</span>
                  <span className="edu-school">{PROFILE.education.university} — {PROFILE.education.location}</span>
                  <span className="edu-time">{PROFILE.education.timeline}</span>
                </div>
              </div>

              <div className="edu-item">
                <div className="edu-dot" />
                <div className="edu-content">
                  <div className="cert-pill">
                    <Award size={15} color="var(--accent-emerald)" />
                    <span className="cert-name">{PROFILE.education.englishCert}</span>
                  </div>
                  <span className="edu-school">Languages: {PROFILE.education.nativeLang}, English (Certified B1)</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Pills */}
            <div className="contact-pills-row">
              <span className="badge"><MapPin size={12} /> {PROFILE.location}</span>
              <span className="badge"><Mail size={12} /> {PROFILE.email}</span>
              <span className="badge"><Phone size={12} /> {PROFILE.phone}</span>
            </div>
          </div>

          {/* Right: Engineering Philosophy & AI-Assisted Workflows */}
          <div className="about-card glass-panel">
            <div className="about-card-header">
              <div className="card-icon-wrap">
                <Bot size={22} color="var(--accent-indigo)" />
              </div>
              <div>
                <h3 className="card-title">Engineering Methodology</h3>
                <p className="card-subtitle">Modern AI-Assisted Software Delivery</p>
              </div>
            </div>

            <p className="philosophy-text">
              I focus on bridging <strong>full-stack software fundamentals</strong> (clean architecture, decoupled microservices, database normalization) with <strong>next-generation AI-assisted workflows</strong>:
            </p>

            <div className="workflow-points">
              <div className="point-item">
                <span className="point-badge">Autonomous Workflows</span>
                <p>Proficient in orchestrating multi-agent systems via <strong>Google Antigravity</strong> and <strong>Claude Code</strong> to handle test generation, linting, and rapid prototyping.</p>
              </div>

              <div className="point-item">
                <span className="point-badge">Real-World Execution</span>
                <p>Proven track record building microservices with <strong>Node.js & Python FastAPI</strong>, audio streaming via WebSockets, and 3D WebGL rendering with <strong>Three.js</strong>.</p>
              </div>

              <div className="point-item">
                <span className="point-badge">Clean & Honest Code</span>
                <p>No artificial inflation of skillsets: commitment to code precision, zero-cache HTTP delivery, and reliable cloud deployments.</p>
              </div>
            </div>

            <div className="about-actions">
              <a 
                href={PROFILE.cvUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-sm"
              >
                <Download size={15} />
                <span>Download Resume (PDF)</span>
              </a>

              <a 
                href={PROFILE.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary btn-sm"
              >
                <ExternalLink size={15} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          padding: 70px 0;
          position: relative;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 28px;
        }

        .about-card {
          padding: 32px;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .about-card-header {
          display: flex;
          align-items: center;
          gap: 14px;
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 16px;
        }

        .card-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: var(--badge-bg);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-title {
          font-size: 1.25rem;
          color: var(--text-primary);
        }

        .card-subtitle {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .education-timeline {
          display: flex;
          flex-direction: column;
          gap: 20px;
          position: relative;
          padding-left: 18px;
        }

        .education-timeline::before {
          content: '';
          position: absolute;
          left: 5px;
          top: 8px;
          bottom: 8px;
          width: 2px;
          background: var(--border-subtle);
        }

        .edu-item {
          position: relative;
        }

        .edu-dot {
          position: absolute;
          left: -18px;
          top: 6px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--accent-cyan);
          box-shadow: 0 0 8px var(--accent-cyan);
        }

        .edu-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .edu-degree {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .edu-school {
          font-size: 0.88rem;
          color: var(--text-secondary);
        }

        .edu-time {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--accent-cyan);
        }

        .cert-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--accent-emerald);
        }

        .contact-pills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid var(--border-subtle);
        }

        .philosophy-text {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        .workflow-points {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .point-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .point-badge {
          font-family: var(--font-mono);
          font-size: 0.76rem;
          font-weight: 700;
          color: var(--accent-cyan);
          text-transform: uppercase;
        }

        .point-item p {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .about-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 8px;
        }

        @media (max-width: 860px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
