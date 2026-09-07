import React from 'react';
import { Layout, Server, Code, Database, Cpu, Cloud, Globe } from 'lucide-react';
import { SKILLS_COMPETENCIES } from '../data/projects';

export default function SkillsMatrix() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layout': return <Layout size={18} color="var(--accent-cyan)" />;
      case 'Server': return <Server size={18} color="var(--accent-indigo)" />;
      case 'Code': return <Code size={18} color="var(--accent-purple)" />;
      case 'Database': return <Database size={18} color="var(--accent-emerald)" />;
      case 'Cpu': return <Cpu size={18} color="#ec4899" />;
      case 'Cloud': return <Cloud size={18} color="var(--accent-amber)" />;
      case 'Globe': return <Globe size={18} color="var(--accent-cyan)" />;
      default: return <Code size={18} />;
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Technical Competencies</span>
          <h2 className="section-title">
            Skills & <span className="text-gradient">Core Capabilities</span>
          </h2>
          <p className="section-desc">
            Verified technologies, frameworks, and modern agentic engineering tools actively used in production and personal projects.
          </p>
        </div>

        {/* Competencies Grid */}
        <div className="skills-grid">
          {SKILLS_COMPETENCIES.map((cat, idx) => (
            <div key={idx} className="skill-cat-card glass-panel">
              <div className="cat-header">
                <div className="cat-icon-wrap">
                  {getIcon(cat.icon)}
                </div>
                <h3 className="cat-title">{cat.category}</h3>
              </div>

              <div className="skills-pills-wrap">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          padding: 80px 0;
          position: relative;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .skill-cat-card {
          padding: 24px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-subtle);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .cat-header {
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 12px;
        }

        .cat-icon-wrap {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          background: var(--badge-bg);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cat-title {
          font-size: 1.05rem;
          color: var(--text-primary);
          font-weight: 700;
        }

        .skills-pills-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .skill-pill {
          display: inline-flex;
          align-items: center;
          padding: 5px 12px;
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 500;
          background: var(--badge-bg);
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          transition: all 0.2s ease;
        }

        .skill-pill:hover {
          border-color: var(--border-focus);
          color: var(--accent-cyan);
          transform: translateY(-1px);
        }

        @media (max-width: 980px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
