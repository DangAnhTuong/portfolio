import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Layers, Cpu, Database, Cloud } from 'lucide-react';
import { PROFILE } from '../data/projects';

export default function Hero() {
  const canvasRef = useRef(null);

  // Interactive Cyber Constellation Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes
    const particleCount = Math.min(Math.floor(window.innerWidth / 18), 70);
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1,
        color: Math.random() > 0.5 ? '#00f2fe' : '#6366f1'
      });
    }

    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw and update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Interaction with mouse
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          p.x -= (dx / dist) * 1.5;
          p.y -= (dy / dist) * 1.5;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dxx = p.x - p2.x;
          const dyy = p.y - p2.y;
          const distance = Math.sqrt(dxx * dxx + dyy * dyy);

          if (distance < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.2 * (1 - distance / 110)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="hero" className="hero-section">
      <canvas ref={canvasRef} className="hero-canvas" />

      <div className="container hero-container">
        {/* Status Pill */}
        <div className="status-pill glass-panel">
          <div className="pulse-dot" />
          <span>{PROFILE.status}</span>
        </div>

        {/* Headline */}
        <h1 className="hero-title">
          Xin chào, tôi là <br />
          <span className="text-gradient-tricolor">{PROFILE.name}</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          {PROFILE.title}
        </p>

        {/* Bio paragraph */}
        <p className="hero-bio">
          Chuyên gia phát triển hệ thống chịu tải cao (<strong>High Concurrency</strong>), trải nghiệm tương tác <strong>3D WebGL (Three.js)</strong> và tích hợp các pipeline <strong>AI/Machine Learning</strong> thực chiến. Tối ưu hóa 100% chi phí hạ tầng với kiến trúc đám mây Serverless không độ trễ.
        </p>

        {/* Tech Stack Pills */}
        <div className="hero-tech-pills">
          <span className="tech-pill"><Layers size={14} /> Next.js 19 & React</span>
          <span className="tech-pill"><Cpu size={14} /> NestJS & Python AI</span>
          <span className="tech-pill"><Database size={14} /> PostgreSQL & Redis</span>
          <span className="tech-pill"><Cloud size={14} /> 100% Free Cloud Tiers</span>
        </div>

        {/* Call to Actions */}
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            <span>Khám Phá Dự Án Thực Chiến</span>
            <ArrowRight size={18} />
          </a>

          <a href="#cloud-architecture" className="btn btn-secondary">
            <Sparkles size={16} color="var(--accent-cyan)" />
            <span>Mô Hình Cloud 0 VNĐ</span>
          </a>
        </div>

        {/* Stats Grid */}
        <div className="hero-stats-grid">
          {PROFILE.stats.map((stat, idx) => (
            <div key={idx} className="stat-card glass-panel">
              <span className="stat-value text-gradient">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 130px 0 70px;
          overflow: hidden;
        }

        .hero-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }

        .hero-container {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 18px;
          border-radius: var(--radius-full);
          font-family: var(--font-mono);
          font-size: 0.84rem;
          color: var(--text-primary);
          margin-bottom: 28px;
          border-color: rgba(16, 185, 129, 0.3);
          background: rgba(16, 185, 129, 0.06);
        }

        .hero-title {
          font-size: 4rem;
          line-height: 1.15;
          font-weight: 800;
          letter-spacing: -0.03em;
          margin-bottom: 18px;
        }

        .hero-subtitle {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 22px;
          letter-spacing: -0.01em;
        }

        .hero-bio {
          font-size: 1.12rem;
          color: #94a3b8;
          max-width: 740px;
          line-height: 1.7;
          margin-bottom: 32px;
        }

        .hero-bio strong {
          color: var(--text-primary);
          font-weight: 600;
        }

        .hero-tech-pills {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-bottom: 36px;
        }

        .tech-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          color: #cbd5e1;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 56px;
        }

        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          width: 100%;
          max-width: 960px;
        }

        .stat-card {
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          border-radius: var(--radius-md);
        }

        .stat-value {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 800;
        }

        .stat-label {
          font-size: 0.82rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        @media (max-width: 860px) {
          .hero-title {
            font-size: 2.8rem;
          }
          .hero-subtitle {
            font-size: 1.15rem;
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
