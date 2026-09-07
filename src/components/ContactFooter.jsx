import React, { useState } from 'react';
import { Mail, Copy, Check, Github, Send, Heart, Globe, Terminal, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PROFILE } from '../data/projects';

export default function ContactFooter() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sentStatus, setSentStatus] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);

    // Fire cyber celebratory confetti
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.85 },
      colors: ['#00f2fe', '#6366f1', '#10b981', '#ffffff']
    });

    setTimeout(() => setCopied(false), 3000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PROFILE.email}?subject=Hợp tác dự án từ ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nLiên hệ lại qua: ' + formData.email)}`;
    window.location.href = mailtoUrl;
    setSentStatus(true);
    setTimeout(() => setSentStatus(false), 4000);
  };

  return (
    <footer id="contact" className="contact-footer">
      <div className="container">
        {/* Contact CTA Card */}
        <div className="contact-card glass-panel">
          <div className="contact-grid">
            {/* Left Column: Direct Info */}
            <div className="contact-info">
              <span className="section-tag">Khởi Đầu Hợp Tác</span>
              <h2 className="contact-title">
                Hãy Cùng Xây Dựng <br />
                <span className="text-gradient">Sản Phẩm Tiếp Theo!</span>
              </h2>
              <p className="contact-desc">
                Bạn có ý tưởng dự án cần kiến trúc chịu tải cao, giao diện 3D sống động hoặc tích hợp AI thông minh? Tôi luôn sẵn sàng trao đổi và đồng hành.
              </p>

              {/* Copy Email Box */}
              <div className="email-copy-box">
                <div className="email-text-wrap">
                  <Mail size={18} color="var(--accent-cyan)" />
                  <span className="email-text">{PROFILE.email}</span>
                </div>
                <button 
                  className={`copy-btn ${copied ? 'copied' : ''}`}
                  onClick={handleCopyEmail}
                  title="Copy email vào bộ nhớ tạm"
                >
                  {copied ? (
                    <>
                      <Check size={16} color="var(--accent-emerald)" />
                      <span>Đã Copy!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span>Sao Chép</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social links */}
              <div className="social-links-row">
                <a 
                  href={PROFILE.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-btn"
                  title="GitHub Profile"
                >
                  <Github size={20} />
                  <span>github.com/{PROFILE.githubUsername}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Quick Message Form */}
            <div className="contact-form-wrap">
              <form onSubmit={handleFormSubmit} className="quick-form">
                <h3 className="form-title">Gửi Tin Nhắn Nhanh</h3>

                <div className="form-group">
                  <label htmlFor="form-name">Họ & Tên của bạn</label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    placeholder="Ví dụ: Nguyễn Văn A"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="form-email">Email liên hệ</label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="form-msg">Nội dung trao đổi / Dự án</label>
                  <textarea
                    id="form-msg"
                    rows="3"
                    required
                    placeholder="Mô tả ngắn gọn về nhu cầu hoặc lời nhắn của bạn..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary form-submit-btn">
                  <Send size={16} />
                  <span>{sentStatus ? 'Đang Mở Trình Gửi Mail...' : 'Gửi Yêu Cầu Liên Hệ'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="footer-bottom">
          <div className="footer-left">
            <span className="footer-copyright">
              © {new Date().getFullYear()} <strong>{PROFILE.name}</strong>. Bản quyền thuộc về tác giả.
            </span>
          </div>

          <div className="footer-badges">
            <span className="badge footer-badge">
              <Sparkles size={12} color="var(--accent-cyan)" />
              React 19 & Vite
            </span>
            <span className="badge footer-badge">
              <Globe size={12} color="var(--accent-indigo)" />
              100% Free Vercel Cloud
            </span>
            <span className="badge footer-badge">
              <Terminal size={12} color="var(--accent-emerald)" />
              Custom Domain Ready
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .contact-footer {
          padding: 80px 0 36px;
          position: relative;
        }

        .contact-card {
          padding: 48px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-subtle);
          background: rgba(13, 19, 32, 0.85);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
          margin-bottom: 60px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 48px;
          align-items: center;
        }

        .contact-title {
          font-size: 2.2rem;
          color: var(--text-primary);
          margin-bottom: 16px;
          line-height: 1.25;
        }

        .contact-desc {
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.65;
          margin-bottom: 28px;
        }

        .email-copy-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          padding: 12px 18px;
          border-radius: var(--radius-md);
          margin-bottom: 20px;
          transition: border-color 0.2s ease;
        }

        .email-copy-box:hover {
          border-color: rgba(0, 242, 254, 0.4);
        }

        .email-text-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .email-text {
          font-family: var(--font-mono);
          font-size: 0.92rem;
          color: var(--text-primary);
        }

        .copy-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          padding: 6px 14px;
          border-radius: var(--radius-full);
          cursor: pointer;
          font-size: 0.82rem;
          font-family: var(--font-heading);
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .copy-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          color: var(--accent-cyan);
        }

        .copy-btn.copied {
          background: rgba(16, 185, 129, 0.15);
          border-color: rgba(16, 185, 129, 0.4);
          color: var(--accent-emerald);
        }

        .social-links-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .social-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.88rem;
          font-family: var(--font-mono);
          padding: 8px 16px;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          transition: all 0.2s ease;
        }

        .social-btn:hover {
          color: var(--text-primary);
          border-color: rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.07);
        }

        .contact-form-wrap {
          background: rgba(18, 25, 42, 0.6);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 28px;
        }

        .form-title {
          font-size: 1.2rem;
          color: var(--text-primary);
          margin-bottom: 18px;
        }

        .quick-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 0.8rem;
          font-family: var(--font-mono);
          color: var(--text-muted);
        }

        .form-group input,
        .form-group textarea {
          background: rgba(8, 12, 20, 0.7);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 10px 14px;
          color: var(--text-primary);
          font-family: var(--font-body);
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--border-focus);
          box-shadow: 0 0 10px rgba(0, 242, 254, 0.2);
        }

        .form-submit-btn {
          margin-top: 6px;
          width: 100%;
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border-subtle);
          padding-top: 24px;
        }

        .footer-copyright {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .footer-copyright strong {
          color: var(--text-secondary);
        }

        .footer-badges {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .footer-badge {
          font-size: 0.75rem;
          color: #94a3b8;
        }

        @media (max-width: 860px) {
          .contact-card {
            padding: 28px;
          }
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
