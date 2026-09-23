import React, { useState } from 'react';
import { Mail, Copy, Check, Github, Linkedin, Phone, MapPin, Send, FileText, Sparkles, ExternalLink, ShieldCheck, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PROFILE } from '../data/projects';

export default function ContactFooter({ onOpenCv }) {
  const [copied, setCopied] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.85 },
      colors: ['#0ea5e9', '#6366f1', '#10b981', '#ffffff']
    });

    setTimeout(() => setCopied(false), 3000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PROFILE.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${PROFILE.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name} (${formData.email})`,
          _template: 'table'
        })
      });

      const data = await response.json();
      if (response.ok || data.success === 'true') {
        setSubmitResult({ success: true, message: 'Message dispatched successfully! I will reply to your email shortly.' });
        setFormData({ name: '', email: '', message: '' });
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.8 },
          colors: ['#0ea5e9', '#6366f1', '#10b981', '#ffffff']
        });
      } else {
        throw new Error(data.message || 'Failed to submit');
      }
    } catch (err) {
      console.error('Contact form error:', err);
      // Fallback: mailto
      const mailtoUrl = `mailto:${PROFILE.email}?subject=Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nSender Contact: ' + formData.email)}`;
      window.location.href = mailtoUrl;
      setSubmitResult({ success: true, message: 'Opening your default mail client...' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitResult(null), 8000);
    }
  };

  return (
    <footer id="contact" className="contact-footer">
      <div className="container">
        {/* Contact Container Card */}
        <div className="contact-card glass-panel">
          <div className="contact-grid">
            {/* Left Column: Direct Info & Verified Channels */}
            <div className="contact-info">
              <span className="section-tag">Direct Communication</span>
              <h2 className="contact-title">
                Let's Discuss Next <br />
                <span className="text-gradient">Opportunities</span>
              </h2>
              <p className="contact-desc">
                I am actively seeking a <strong>Full-Stack Software Engineer Internship</strong>. Feel free to reach out via email, phone, or LinkedIn to discuss how I can contribute to your engineering team.
              </p>

              {/* Direct Info Pills */}
              <div className="info-pills-list">
                <div className="email-copy-box">
                  <div className="email-text-wrap">
                    <Mail size={16} color="var(--accent-cyan)" />
                    <span className="email-text">{PROFILE.email}</span>
                  </div>
                  <button 
                    className={`copy-btn ${copied ? 'copied' : ''}`}
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check size={15} color="var(--accent-emerald)" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={15} />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="contact-meta-row">
                  <button 
                    onClick={handleCopyPhone}
                    className="meta-item-btn"
                    title="Click to copy Phone / Zalo"
                  >
                    {copiedPhone ? <Check size={15} color="var(--accent-emerald)" /> : <Phone size={15} color="var(--accent-emerald)" />}
                    <span>{copiedPhone ? '✓ Copied Phone!' : `${PROFILE.phone} (Call / Zalo)`}</span>
                  </button>

                  <div className="meta-item">
                    <MapPin size={15} color="var(--accent-indigo)" />
                    <span>{PROFILE.location}</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="social-links-row">
                <a 
                  href={PROFILE.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-btn"
                  title="GitHub Profile"
                >
                  <Github size={17} />
                  <span>GitHub</span>
                </a>

                <a 
                  href={PROFILE.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-btn"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={17} />
                  <span>LinkedIn</span>
                </a>

                <button 
                  onClick={onOpenCv} 
                  className="social-btn"
                  title="Preview Official 1-Page Resume (PDF)"
                >
                  <FileText size={17} />
                  <span>Resume (PDF)</span>
                </button>
              </div>

              {/* Standards Banner */}
              <div className="standards-badge">
                <ShieldCheck size={16} color="var(--accent-emerald)" />
                <span>Clean Architecture · High Performance · 100% Verified Work</span>
              </div>
            </div>

            {/* Right Column: Quick Contact Form */}
            <div className="contact-form-wrap">
              <form onSubmit={handleFormSubmit} className="quick-form">
                <h3 className="form-title">Send a Quick Message</h3>

                <div className="form-group">
                  <label htmlFor="form-name">Your Full Name</label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    placeholder="e.g. Hiring Manager / Tech Recruiter"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="form-email">Your Work Email</label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    placeholder="hr@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="form-msg">Message / Internship Inquiry</label>
                  <textarea
                    id="form-msg"
                    required
                    rows={4}
                    placeholder="Let us know about your team, tech stack, or open positions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {submitResult && (
                  <div className={`form-alert ${submitResult.success ? 'success' : 'error'}`}>
                    {submitResult.message}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn btn-primary form-submit-btn"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Tech Credit */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © {new Date().getFullYear()} {PROFILE.name}. All rights reserved. Built with React 19, Three.js &amp; deployed on Vercel Edge.
          </p>
          <div className="bottom-badges">
            <span className="footer-badge">Vite 6 SPA</span>
            <span className="footer-badge">Zero Cache Stale</span>
            <span className="footer-badge">CEFR B1 English</span>
          </div>
        </div>
      </div>

      <style>{`
        .contact-footer {
          padding: 80px 0 35px;
          position: relative;
        }

        .contact-card {
          padding: 44px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-subtle);
          background: var(--bg-card);
          box-shadow: var(--shadow-card);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 48px;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-title {
          font-size: 2.2rem;
          font-weight: 800;
          line-height: 1.2;
        }

        .contact-desc {
          font-size: 0.98rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        .info-pills-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 4px;
        }

        .email-copy-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 8px 14px;
          gap: 12px;
        }

        .email-text-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .email-text {
          font-family: var(--font-mono);
          font-size: 0.9rem;
          color: var(--text-primary);
          font-weight: 600;
        }

        .copy-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.78rem;
          font-weight: 600;
          background: var(--badge-bg);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .copy-btn:hover {
          color: var(--accent-cyan);
          border-color: var(--border-focus);
        }

        .copy-btn.copied {
          background: rgba(16, 185, 129, 0.12);
          border-color: rgba(16, 185, 129, 0.35);
          color: var(--accent-emerald);
        }

        .contact-meta-row {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .meta-item-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .meta-item-btn:hover {
          color: var(--accent-cyan);
          border-color: var(--border-focus);
        }

        .meta-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: var(--text-secondary);
        }

        .social-links-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 6px;
        }

        .social-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: var(--radius-sm);
          font-size: 0.84rem;
          font-weight: 600;
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          text-decoration: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .social-btn:hover {
          background: var(--border-subtle);
          color: var(--accent-cyan);
          border-color: var(--border-focus);
          transform: translateY(-2px);
        }

        .standards-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: var(--radius-sm);
          font-size: 0.78rem;
          font-family: var(--font-mono);
          color: var(--accent-emerald);
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          width: fit-content;
        }

        /* Form Column */
        .quick-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 0.82rem;
          font-family: var(--font-mono);
          color: var(--text-muted);
          font-weight: 600;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-subtle);
          background: var(--bg-secondary);
          color: var(--text-primary);
          font-family: var(--font-body);
          font-size: 0.92rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent-cyan);
          box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.15);
        }

        .form-alert {
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          font-weight: 600;
        }

        .form-alert.success {
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.35);
          color: var(--accent-emerald);
        }

        .form-alert.error {
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.35);
          color: #ef4444;
        }

        .form-submit-btn {
          width: 100%;
          justify-content: center;
          padding: 12px;
          font-size: 0.95rem;
          margin-top: 6px;
        }

        /* Footer Bottom */
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 30px;
          margin-top: 30px;
          border-top: 1px solid var(--border-subtle);
          flex-wrap: wrap;
          gap: 16px;
        }

        .copyright-text {
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .bottom-badges {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .footer-badge {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          padding: 3px 8px;
          border-radius: 4px;
          background: var(--badge-bg);
          border: 1px solid var(--border-subtle);
          color: var(--text-muted);
        }

        @media (max-width: 900px) {
          .contact-card {
            padding: 28px;
          }
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
}
