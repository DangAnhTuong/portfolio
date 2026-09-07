import React from 'react';
import { Layout, Server, Database, Cpu } from 'lucide-react';
import { SKILLS_DATA } from '../data/projects';

export default function SkillsMatrix() {
  const getIcon = (name) => {
    switch (name) {
      case 'Layout': return <Layout size={20} color="var(--accent-cyan)" />;
      case 'Server': return <Server size={20} color="var(--accent-indigo)" />;
      case 'Database': return <Database size={20} color="var(--accent-emerald)" />;
      case 'Cpu': return <Cpu size={20} color="var(--accent-pink)" />;
      default: return <Server size={20} />;
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Năng Lực Chuyên Sâu</span>
          <h2 className="section-title">
            Hệ Sinh Thái <span className="text-gradient">Kỹ Thuật</span>
          </h2>
          <p className="section-desc">
            Công nghệ cốt lõi được ứng dụng thực tế trong các sản phẩm thương mại và hệ thống chịu tải cao.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {SKILLS_DATA.map((cat, idx) => (
            <div key={idx} className="skill-cat-card glass-panel">
              <div className="cat-header">
                <div className="cat-icon-wrap">
                  {getIcon(cat.icon)}
                </div>
                <h3 className="cat-title">{cat.category}</h3>
              </div>

              <div className="skills-list">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}</span>
                    </div>
                    <div className="skill-progress-track">
                      <div 
                        className="skill-progress-bar"
                        style={{ width: `${skill.percent}%` }}
                      />
                    </div>
                  </div>
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
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .skill-cat-card {
          padding: 28px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-subtle);
          background: rgba(14, 20, 32, 0.7);
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .cat-header {
          display: flex;
          align-items: center;
          gap: 14px;
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 14px;
        }

        .cat-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cat-title {
          font-size: 1.2rem;
          color: var(--text-primary);
          font-weight: 700;
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .skill-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .skill-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .skill-name {
          font-size: 0.92rem;
          color: #e2e8f0;
          font-weight: 500;
        }

        .skill-level {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-cyan);
          background: rgba(0, 242, 254, 0.08);
          border: 1px solid rgba(0, 242, 254, 0.2);
          padding: 2px 8px;
          border-radius: var(--radius-full);
        }

        .skill-progress-track {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
          overflow: hidden;
        }

        .skill-progress-bar {
          height: 100%;
          background: var(--gradient-cyber);
          border-radius: 3px;
          box-shadow: 0 0 10px rgba(0, 242, 254, 0.5);
          transition: width 1s ease-in-out;
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
