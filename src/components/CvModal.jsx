import React, { useEffect, useState } from 'react';
import { 
  X, Download, ExternalLink, FileText, Check, ShieldCheck, 
  Printer, Sparkles, ZoomIn, ZoomOut, RotateCcw, Eye, FileCheck
} from 'lucide-react';
import { PROFILE } from '../data/projects';

export default function CvModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState('paper'); // 'paper' or 'pdf'
  const [zoomLevel, setZoomLevel] = useState(100);

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
    if (viewMode === 'pdf') {
      const iframe = document.getElementById('cv-frame-viewer');
      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
        return;
      }
    }
    window.open(PROFILE.cvUrl, '_blank');
  };

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 15, 160));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 15, 70));
  const handleZoomReset = () => setZoomLevel(100);

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
              <span>1-Page ATS Resume · 2026</span>
            </div>

            {/* View Mode Switcher */}
            <div className="view-mode-tabs">
              <button 
                className={`view-tab-btn ${viewMode === 'paper' ? 'active' : ''}`}
                onClick={() => setViewMode('paper')}
                title="Crisp high-resolution document view"
              >
                <FileCheck size={14} />
                <span>Paper View</span>
              </button>
              <button 
                className={`view-tab-btn ${viewMode === 'pdf' ? 'active' : ''}`}
                onClick={() => setViewMode('pdf')}
                title="Browser native PDF reader"
              >
                <Eye size={14} />
                <span>PDF Embed</span>
              </button>
            </div>
          </div>

          {/* Action Tools */}
          <div className="cv-header-actions">
            {/* Zoom Controls (Paper Mode) */}
            {viewMode === 'paper' && (
              <div className="zoom-controls-group">
                <button className="zoom-btn" onClick={handleZoomOut} title="Zoom Out (-15%)">
                  <ZoomOut size={14} />
                </button>
                <button className="zoom-value-btn" onClick={handleZoomReset} title="Reset Zoom (100%)">
                  {zoomLevel}%
                </button>
                <button className="zoom-btn" onClick={handleZoomIn} title="Zoom In (+15%)">
                  <ZoomIn size={14} />
                </button>
              </div>
            )}

            <button 
              className="cv-tool-btn copy-btn" 
              onClick={handleCopyEmail}
              title="Copy Email Contact"
            >
              {copied ? <Check size={15} color="var(--accent-emerald)" /> : <Sparkles size={15} />}
              <span>{copied ? 'Copied!' : 'Quick Email'}</span>
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
              title="Open official PDF in new tab"
            >
              <ExternalLink size={15} />
              <span>New Tab</span>
            </a>

            <a 
              href={PROFILE.cvUrl} 
              download="Dang_Anh_Tuong_CV.pdf"
              className="cv-tool-btn primary"
              title="Download official ATS PDF file"
            >
              <Download size={15} />
              <span>Download PDF</span>
            </a>

            <button className="cv-close-btn" onClick={onClose} aria-label="Close modal">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="cv-modal-body">
          {viewMode === 'paper' ? (
            /* High-Resolution Paper Viewer (100% Reliable & Immune to X-Frame-Options) */
            <div className="paper-viewer-workbench">
              <div 
                className="paper-sheet-card"
                style={{ width: `${Math.round(820 * (zoomLevel / 100))}px` }}
              >
                <img 
                  src="/Dang_Anh_Tuong_CV.webp" 
                  alt="Đặng Ánh Tường - Software Engineer Intern ATS Resume"
                  className="paper-sheet-img"
                  loading="eager"
                />
              </div>
            </div>
          ) : (
            /* Native PDF Frame Viewer */
            <div className="pdf-frame-wrapper">
              <iframe
                id="cv-frame-viewer"
                src={`${PROFILE.cvUrl}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
                title="Dang Anh Tuong - Software Engineer Resume"
                className="cv-pdf-frame"
              />
            </div>
          )}

          {/* Quick Notice Footer Banner */}
          <div className="cv-footer-banner">
            <ShieldCheck size={15} color="var(--accent-emerald)" />
            <span>Format: 1-Page ATS Standard (Jake's Resume) · Expected Graduation: 2026 · Location: Ho Chi Minh City / Remote</span>
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
          background: rgba(4, 7, 13, 0.85);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          animation: cvModalFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cv-modal-container {
          width: 100%;
          max-width: 1060px;
          height: 94vh;
          background: #090e17;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 35px rgba(14, 165, 233, 0.2);
        }

        .cv-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 20px;
          background: rgba(15, 23, 42, 0.98);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          gap: 16px;
          flex-wrap: wrap;
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
          font-family: var(--font-mono);
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .cv-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: var(--accent-emerald);
          font-size: 0.74rem;
          font-weight: 600;
        }

        .pulse-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-emerald);
          box-shadow: 0 0 8px var(--accent-emerald);
          animation: pulseGlow 2s infinite;
        }

        /* View Mode Switcher */
        .view-mode-tabs {
          display: inline-flex;
          align-items: center;
          background: rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          padding: 2px;
          gap: 2px;
        }

        .view-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          font-family: var(--font-mono);
          border: none;
          background: transparent;
          color: var(--text-muted);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .view-tab-btn:hover {
          color: var(--text-primary);
        }

        .view-tab-btn.active {
          background: var(--accent-cyan);
          color: #ffffff;
          box-shadow: 0 2px 8px rgba(14, 165, 233, 0.35);
        }

        .cv-header-actions {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        /* Zoom Controls Group */
        .zoom-controls-group {
          display: inline-flex;
          align-items: center;
          background: rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          padding: 2px 4px;
        }

        .zoom-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          padding: 4px 7px;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          transition: all 0.2s ease;
        }

        .zoom-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.08);
        }

        .zoom-value-btn {
          background: transparent;
          border: none;
          color: var(--accent-cyan);
          font-family: var(--font-mono);
          font-size: 0.74rem;
          font-weight: 700;
          padding: 4px 6px;
          cursor: pointer;
        }

        .cv-tool-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
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
          color: #ffffff;
          border-color: var(--accent-cyan);
          box-shadow: 0 2px 10px rgba(14, 165, 233, 0.3);
        }

        .cv-tool-btn.primary:hover {
          background: #0284c7;
          border-color: #0284c7;
        }

        .cv-close-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 6px;
          border-radius: 4px;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cv-close-btn:hover {
          color: #ef4444;
          background: rgba(239, 68, 68, 0.1);
        }

        /* Modal Body */
        .cv-modal-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: #04070d;
          position: relative;
        }

        /* Paper Viewer Workbench */
        .paper-viewer-workbench {
          flex: 1;
          overflow-y: auto;
          overflow-x: auto;
          padding: 24px 16px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          background: radial-gradient(circle at 50% 30%, #0d1527 0%, #03060c 100%);
        }

        .paper-sheet-card {
          background: #ffffff;
          border-radius: 4px;
          box-shadow: 0 15px 45px rgba(0, 0, 0, 0.65), 0 2px 10px rgba(0, 0, 0, 0.4);
          overflow: hidden;
          transition: width 0.2s ease;
          margin-bottom: 20px;
        }

        .paper-sheet-img {
          width: 100%;
          height: auto;
          display: block;
        }

        /* PDF Frame Wrapper */
        .pdf-frame-wrapper {
          flex: 1;
          width: 100%;
          height: 100%;
        }

        .cv-pdf-frame {
          width: 100%;
          height: 100%;
          border: none;
          background: #ffffff;
        }

        /* Footer Banner */
        .cv-footer-banner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(15, 23, 42, 0.98);
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-muted);
          text-align: center;
        }

        @keyframes cvModalFadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to { opacity: 1; transform: scale(1); }
        }

        @media (max-width: 768px) {
          .cv-modal-header {
            padding: 10px 14px;
          }
          .cv-file-title {
            font-size: 0.8rem;
          }
          .cv-status-pill {
            display: none;
          }
          .zoom-controls-group {
            display: none;
          }
          .paper-sheet-card {
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}
