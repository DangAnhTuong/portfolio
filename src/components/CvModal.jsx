import React, { useEffect, useState } from 'react';
import { X, Download, ExternalLink, FileText, Check, ShieldCheck, Printer, Sparkles } from 'lucide-react';
import { PROFILE } from '../data/projects';

export default function CvModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    const iframe = document.getElementById('cv-frame-viewer');
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
    } else {
      window.open(PROFILE.cvUrl, '_blank');
    }
  };

  return (
    <div className="cv-modal-backdrop" onClick={onClose}>
      <div className="cv-modal-container glass-panel" onClick={(e) => e.stopPropagation()}>
        {/* Header Bar */}
        <div className="cv-modal-header">
          <div className="cv-header-left">
            <div className="cv-file-badge">
              <FileText size={18} color="var(--accent-cyan)" />
              <span className="cv-file-title">Dang_Anh_Tuong_CV.pdf</span>
            </div>
            <div className="cv-status-pill">
              <span className="pulse-dot" />
              <span>1-Page Official ATS Resume · 2026</span>
            </div>
          </div>

          {/* Action Tools */}
          <div className="cv-header-actions">
            <button 
              className="cv-tool-btn copy-btn" 
              onClick={handleCopyEmail}
              title="Copy Email Contact"
            >
              {copied ? <Check size={15} color="var(--accent-emerald)" /> : <Sparkles size={15} />}
              <span>{copied ? 'Copied Email!' : 'Quick Email'}</span>
            </button>

            <button 
              className="cv-tool-btn" 
              onClick={handlePrint}
              title="Print Resume"
            >
              <Printer size={15} />
              <span>Print</span>
            </button>

            <a 
              href={PROFILE.cvUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cv-tool-btn"
              title="Open PDF in new browser tab"
            >
              <ExternalLink size={15} />
              <span>New Tab</span>
            </a>

            <a 
              href={PROFILE.cvUrl} 
              download="Dang_Anh_Tuong_CV.pdf"
              className="cv-tool-btn primary"
              title="Download official PDF file"
            >
              <Download size={15} />
              <span>Download PDF</span>
            </a>

            <button className="cv-close-btn" onClick={onClose} aria-label="Close modal">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* PDF Viewer Body */}
        <div className="cv-modal-body">
          <iframe
            id="cv-frame-viewer"
            src={`${PROFILE.cvUrl}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
            title="Dang Anh Tuong - Software Engineer Resume"
            className="cv-pdf-frame"
          />

          {/* Fallback Banner for touch / mobile */}
          <div className="cv-mobile-fallback">
            <div className="fallback-card">
              <ShieldCheck size={28} color="var(--accent-emerald)" />
              <h4>Bản CV 1 trang chuẩn quốc tế ATS</h4>
              <p>Phù hợp tối ưu cho các hệ thống lọc tự động và nhà tuyển dụng.</p>
              <div className="fallback-actions">
                <a href={PROFILE.cvUrl} download className="btn btn-primary btn-sm">
                  <Download size={16} /> Tải PDF Về Máy
                </a>
                <a href={PROFILE.cvUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                  <ExternalLink size={16} /> Mở Toàn Màn Hình
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cv-modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(4, 7, 13, 0.82);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: cvModalFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cv-modal-container {
          width: 100%;
          max-width: 1020px;
          height: 92vh;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 30px rgba(14, 165, 233, 0.15);
        }

        .cv-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px;
          border-bottom: 1px solid var(--border-subtle);
          background: var(--bg-secondary);
          flex-wrap: wrap;
          gap: 12px;
        }

        .cv-header-left {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .cv-file-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 700;
          font-family: var(--font-mono);
          font-size: 0.92rem;
          color: var(--text-primary);
        }

        .cv-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: var(--accent-emerald);
          font-weight: 600;
        }

        .pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent-emerald);
          box-shadow: 0 0 8px var(--accent-emerald);
          animation: pulseAnim 1.6s infinite;
        }

        .cv-header-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .cv-tool-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 600;
          background: var(--badge-bg);
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          text-decoration: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .cv-tool-btn:hover {
          background: var(--border-subtle);
          color: var(--accent-cyan);
          border-color: var(--border-focus);
        }

        .cv-tool-btn.primary {
          background: var(--accent-cyan);
          border-color: var(--accent-cyan);
          color: #ffffff;
        }

        .cv-tool-btn.primary:hover {
          filter: brightness(1.1);
          box-shadow: 0 0 15px rgba(14, 165, 233, 0.4);
        }

        .cv-close-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: var(--radius-sm);
          background: transparent;
          border: 1px solid transparent;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .cv-close-btn:hover {
          background: rgba(239, 68, 68, 0.15);
          color: #ef4444;
          border-color: rgba(239, 68, 68, 0.3);
        }

        .cv-modal-body {
          flex: 1;
          position: relative;
          background: #1e293b;
          overflow: hidden;
        }

        .cv-pdf-frame {
          width: 100%;
          height: 100%;
          border: none;
          background: #ffffff;
        }

        .cv-mobile-fallback {
          display: none;
          position: absolute;
          inset: 0;
          background: var(--bg-card);
          align-items: center;
          justify-content: center;
          padding: 24px;
          text-align: center;
        }

        .fallback-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          max-width: 360px;
        }

        .fallback-actions {
          display: flex;
          gap: 10px;
          margin-top: 8px;
        }

        @keyframes cvModalFadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes pulseAnim {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.6; }
        }

        @media (max-width: 768px) {
          .cv-modal-container {
            height: 96vh;
            padding: 0;
          }
          .cv-header-actions span {
            display: none;
          }
          .cv-header-actions .cv-tool-btn {
            padding: 8px;
          }
          .cv-status-pill {
            display: none;
          }
          @supports (-webkit-touch-callout: none) {
            .cv-mobile-fallback {
              display: flex;
            }
            .cv-pdf-frame {
              display: none;
            }
          }
        }
      `}</style>
    </div>
  );
}
