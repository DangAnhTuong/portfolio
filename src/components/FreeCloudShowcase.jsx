import React from 'react';
import { Cloud, Zap, Shield, DollarSign, Check, Globe, Database, Server, RefreshCw } from 'lucide-react';

export default function FreeCloudShowcase() {
  const tiers = [
    {
      provider: "Vercel / Cloudflare Pages",
      role: "Frontend Hosting & Custom Domain",
      icon: <Globe size={22} color="var(--accent-cyan)" />,
      cost: "0 VNĐ / Tháng",
      perks: [
        "Băng thông 100GB/tháng miễn phí",
        "CDN toàn cầu Edge Network < 20ms",
        "Gắn tên miền riêng + SSL/HTTPS tự động",
        "CI/CD tự động deploy mỗi khi push Git"
      ],
      badge: "Edge Native"
    },
    {
      provider: "Render / Fly.io",
      role: "Backend APIs & Microservices",
      icon: <Server size={22} color="var(--accent-indigo)" />,
      cost: "0 VNĐ / Tháng",
      perks: [
        "750 giờ hoạt động miễn phí mỗi tháng",
        "Hỗ trợ Docker / Node.js / Python FastAPI",
        "Miễn phí chứng chỉ SSL và domain phụ",
        "Tự động tích hợp Environment Variables"
      ],
      badge: "Web Service"
    },
    {
      provider: "Neon.tech Serverless",
      role: "PostgreSQL Database",
      icon: <Database size={22} color="var(--accent-emerald)" />,
      cost: "0 VNĐ / Tháng",
      perks: [
        "0.5 GB lưu trữ Serverless Postgres miễn phí",
        "Tự động co giãn (Auto-suspend khi không dùng)",
        "Tính năng Database Branching như Git",
        "Kết nối mượt mà với Prisma ORM"
      ],
      badge: "Serverless SQL"
    },
    {
      provider: "Upstash Redis",
      role: "Distributed Lock & BullMQ Queue",
      icon: <Zap size={22} color="var(--accent-amber)" />,
      cost: "0 VNĐ / Tháng",
      perks: [
        "10.000 lệnh (Requests) miễn phí mỗi ngày",
        "Độ trễ thấp < 5ms cho Caching & Token rate-limit",
        "Khóa phân tán Redis Distributed Lock chống tranh chấp vé",
        "Hàng đợi mua vé BullMQ hoạt động trơn tru"
      ],
      badge: "In-Memory Cache"
    }
  ];

  return (
    <section id="cloud-architecture" className="cloud-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Kiến Trúc & Tối Ưu Chi Phí</span>
          <h2 className="section-title">
            Hạ Tầng Đám Mây <span className="text-gradient">100% Miễn Phí (0đ)</span>
          </h2>
          <p className="section-desc">
            Cách tôi kiến trúc và kết hợp các nền tảng Serverless hàng đầu thế giới để vận hành hệ thống chịu tải cao mà không tốn chi phí thuê máy chủ đắt đỏ.
          </p>
        </div>

        {/* Comparison Banner */}
        <div className="compare-banner glass-panel">
          <div className="compare-stat">
            <span className="compare-label">Chi Phí Thuê Máy Chủ / VPS Truyền Thống:</span>
            <span className="compare-value text-red">~$30 - $60 / Tháng (750.000đ - 1.500.000đ)</span>
          </div>
          <div className="compare-divider" />
          <div className="compare-stat">
            <span className="compare-label">Kiến Trúc Multi-Cloud Free Tier của Đặng Anh Tường:</span>
            <span className="compare-value text-green">0 VNĐ Trọn Đời (Vẫn đảm bảo High Concurrency)</span>
          </div>
        </div>

        {/* Tiers Grid */}
        <div className="tiers-grid">
          {tiers.map((tier, idx) => (
            <div key={idx} className="tier-card glass-panel">
              <div className="tier-header">
                <div className="tier-icon-wrap">{tier.icon}</div>
                <div>
                  <span className="badge tier-badge">{tier.badge}</span>
                  <h3 className="tier-provider">{tier.provider}</h3>
                  <p className="tier-role">{tier.role}</p>
                </div>
              </div>

              <div className="tier-price-row">
                <span className="tier-price">{tier.cost}</span>
                <span className="tier-price-sub">Generous Free Tier</span>
              </div>

              <ul className="tier-perks">
                {tier.perks.map((perk, pIdx) => (
                  <li key={pIdx} className="perk-item">
                    <Check size={16} color="var(--accent-emerald)" className="perk-icon" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .cloud-section {
          padding: 80px 0;
          position: relative;
        }

        .compare-banner {
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 24px 32px;
          margin-bottom: 48px;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(0, 242, 254, 0.2);
          background: rgba(13, 19, 33, 0.85);
        }

        .compare-stat {
          display: flex;
          flex-direction: column;
          gap: 6px;
          text-align: center;
        }

        .compare-label {
          font-size: 0.88rem;
          color: var(--text-secondary);
          font-family: var(--font-body);
        }

        .compare-value {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 700;
        }

        .text-red {
          color: #f87171;
          text-decoration: line-through;
        }

        .text-green {
          color: var(--accent-emerald);
          text-shadow: 0 0 15px rgba(16, 185, 129, 0.3);
        }

        .compare-divider {
          width: 1px;
          height: 50px;
          background: var(--border-subtle);
        }

        .tiers-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .tier-card {
          padding: 28px;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          gap: 20px;
          border: 1px solid var(--border-subtle);
          background: rgba(16, 22, 36, 0.7);
        }

        .tier-header {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .tier-icon-wrap {
          width: 46px;
          height: 46px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .tier-badge {
          font-size: 0.7rem;
          margin-bottom: 6px;
          color: var(--accent-cyan);
          border-color: rgba(0, 242, 254, 0.3);
        }

        .tier-provider {
          font-size: 1.25rem;
          color: var(--text-primary);
          font-weight: 700;
        }

        .tier-role {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .tier-price-row {
          display: flex;
          align-items: baseline;
          gap: 8px;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-subtle);
        }

        .tier-price {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--accent-emerald);
        }

        .tier-price-sub {
          font-size: 0.78rem;
          color: var(--text-secondary);
          font-family: var(--font-mono);
        }

        .tier-perks {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .perk-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.9rem;
          color: #cbd5e1;
        }

        .perk-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        @media (max-width: 768px) {
          .compare-banner {
            flex-direction: column;
            gap: 18px;
          }
          .compare-divider {
            display: none;
          }
          .tiers-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
