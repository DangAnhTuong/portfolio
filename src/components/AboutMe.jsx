import React from 'react';
import { GraduationCap, Award, Globe2, Bot, Mail, Phone, MapPin, ExternalLink, Download, Eye, BookOpen } from 'lucide-react';
import { PROFILE } from '../data/projects';

export default function AboutMe({ onOpenCv }) {
  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Background &amp; Identity</span>
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

              {/* Relevant Coursework */}
              <div className="coursework-box">
                <div className="coursework-title">
                  <BookOpen size={14} color="var(--accent-cyan)" />
                  <span>Relevant Coursework:</span>
                </div>
                <div className="coursework-tags">
                  <span className="course-tag">Data Structures &amp; Algorithms</span>
                  <span className="course-tag">Object-Oriented Programming (OOP)</span>
                  <span className="course-tag">Database Systems (DBMS)</span>
                  <span className="course-tag">Web Application Development</span>
                  <span className="course-tag">Software Engineering</span>
                  <span className="course-tag">Computer Networks</span>
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
                <p>Proven track record building microservices with <strong>Node.js &amp; Python FastAPI</strong>, audio streaming via WebSockets, and 3D WebGL rendering with <strong>Three.js</strong>.</p>
              </div>

              <div className="point-item">
                <span className="point-badge">Coachable &amp; Reliable</span>
                <p>Eager to learn from senior engineers through rigorous code reviews. Ready to dedicate 100% commitment to write clean, reliable production code.</p>
              </div>
            </div>

            <div className="about-actions">
              <button 
                onClick={onOpenCv}
                className="btn btn-primary btn-sm"
                title="Preview Official 1-Page Resume (PDF)"
              >
                <Eye size={15} />
                <span>Preview Resume Online</span>
              </button>

              <a 
                href={PROFILE.cvUrl} 
                download="Dang_Anh_Tuong_CV.pdf"
                className="btn btn-secondary btn-sm"
                title="Download official PDF file"
              >
                <Download size={15} />
                <span>Download PDF</span>
              </a>

              <a 
                href={PROFILE.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary btn-sm"
              >
                <ExternalLink size={15} />
                <span>LinkedIn</span>
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
          font-size: 1.15rem;
          font-weight: 700;
          line-height: 1.2;
        }

        .card-subtitle {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .education-timeline {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .edu-item {
          display: flex;
          gap: 14px;
        }

        .edu-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--accent-cyan);
          margin-top: 6px;
          box-shadow: 0 0 8px var(--accent-cyan);
          flex-shrink: 0;
        }

        .edu-content {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .edu-degree {
          font-size: 0.96rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .edu-school {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .edu-time {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .cert-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          font-weight: 600;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.25);
          color: var(--accent-emerald);
          width: fit-content;
          margin-bottom: 2px;
        }

        /* Coursework Box */
        .coursework-box {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 14px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
        }

        .coursework-title {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          font-family: var(--font-mono);
          font-weight: 700;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .coursework-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .course-tag {
          font-size: 0.74rem;
          font-family: var(--font-mono);
          padding: 3px 8px;
          border-radius: 4px;
          background: var(--badge-bg);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
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
          font-size: 0.94rem;
          color: var(--text-secondary);
          line-height: 1.6;
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
          color: var(--accent-indigo);
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
          gap: 10px;
          flex-wrap: wrap;
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid var(--border-subtle);
        }

        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
