import React, { useState } from 'react';
import { Mail, Copy, Check, Github, Linkedin, Phone, MapPin, Send, FileText, Sparkles, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PROFILE } from '../data/projects';

export default function ContactFooter() {
  const [copied, setCopied] = useState(false);
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
                I am actively seeking a <strong>Full-stack / Frontend Software Engineer Internship</strong>. Feel free to reach out via email, phone, or LinkedIn to discuss how I can contribute to your engineering team.
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
                  <a href={`tel:${PROFILE.phone}`} className="meta-item-link">
                    <Phone size={15} color="var(--accent-emerald)" />
                    <span>{PROFILE.phone}</span>
                  </a>

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

                <a 
                  href={PROFILE.cvUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-btn"
                  title="Download Resume PDF"
                >
                  <FileText size={17} />
                  <span>Resume (PDF)</span>
                </a>
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
                    placeholder="e.g. John Doe / Tech Recruiter"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="form-email">Your Email Address</label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="form-msg">Inquiry Details</label>
                  <textarea
                    id="form-msg"
                    rows="3"
                    required
                    placeholder="Briefly describe the role, project, or collaboration..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary form-submit-btn" disabled={isSubmitting}>
                  <Send size={15} />
                  <span>{isSubmitting ? 'Sending Message...' : 'Dispatch Message'}</span>
                </button>

                {submitResult && (
                  <div style={{
                    marginTop: '12px',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: '500',
                    backgroundColor: submitResult.success ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                    color: submitResult.success ? '#10b981' : '#ef4444',
                    border: `1px solid ${submitResult.success ? '#10b981' : '#ef4444'}`
                  }}>
                    {submitResult.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="footer-bottom">
          <div className="footer-left">
            <span className="footer-copyright">
              © {new Date().getFullYear()} <strong>{PROFILE.name}</strong>. Built with React 19 & Vite.
            </span>
          </div>

          <div className="footer-badges">
            <span className="badge footer-badge">
              <Sparkles size={11} color="var(--accent-cyan)" />
              Verified CV Data
            </span>
            <span className="badge footer-badge">
              <Check size={11} color="var(--accent-emerald)" />
              CEFR B1 Standard
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .contact-footer {
          padding: 70px 0 36px;
          position: relative;
        }

        .contact-card {
          padding: 44px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-subtle);
          margin-bottom: 50px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 44px;
          align-items: center;
        }

        .contact-title {
          font-size: 2.1rem;
          color: var(--text-primary);
          margin-bottom: 14px;
          line-height: 1.25;
        }

        .contact-desc {
          color: var(--text-secondary);
          font-size: 0.98rem;
          line-height: 1.65;
          margin-bottom: 24px;
        }

        .info-pills-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 22px;
        }

        .email-copy-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--badge-bg);
          border: 1px solid var(--border-subtle);
          padding: 10px 16px;
          border-radius: var(--radius-md);
        }

        .email-text-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .email-text {
          font-family: var(--font-mono);
          font-size: 0.88rem;
          color: var(--text-primary);
        }

        .copy-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--bg-primary);
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          padding: 5px 12px;
          border-radius: var(--radius-full);
          cursor: pointer;
          font-size: 0.78rem;
          font-family: var(--font-heading);
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .copy-btn:hover {
          color: var(--accent-cyan);
          border-color: var(--border-focus);
        }

        .copy-btn.copied {
          background: rgba(16, 185, 129, 0.15);
          border-color: rgba(16, 185, 129, 0.4);
          color: var(--accent-emerald);
        }

        .contact-meta-row {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .meta-item-link, .meta-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--text-secondary);
          text-decoration: none;
        }

        .meta-item-link:hover {
          color: var(--accent-emerald);
        }

        .social-links-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .social-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.85rem;
          font-family: var(--font-mono);
          padding: 8px 16px;
          border-radius: var(--radius-sm);
          background: var(--badge-bg);
          border: 1px solid var(--border-subtle);
          transition: all 0.2s ease;
        }

        .social-btn:hover {
          color: var(--text-primary);
          border-color: var(--border-focus);
          transform: translateY(-2px);
        }

        .contact-form-wrap {
          background: var(--badge-bg);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 26px;
        }

        .form-title {
          font-size: 1.15rem;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .quick-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .form-group label {
          font-size: 0.78rem;
          font-family: var(--font-mono);
          color: var(--text-muted);
        }

        .form-group input,
        .form-group textarea {
          background: var(--bg-primary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 9px 13px;
          color: var(--text-primary);
          font-family: var(--font-body);
          font-size: 0.88rem;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--border-focus);
        }

        .form-submit-btn {
          margin-top: 4px;
          width: 100%;
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border-subtle);
          padding-top: 22px;
        }

        .footer-copyright {
          font-size: 0.84rem;
          color: var(--text-muted);
        }

        .footer-badges {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        @media (max-width: 860px) {
          .contact-card {
            padding: 26px;
          }
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 14px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
