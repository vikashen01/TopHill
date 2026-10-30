import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

export default function PrivacyPolicyPage({ navigateTo }) {
  return (
    <div className="page-legal animate-fade-in">
      <section className="page-hero-banner">
        <div className="site-container">
          <div className="page-hero-content">
            <span className="section-tag">Privacy &amp; Data Protection</span>
            <h1 className="page-hero-title">Privacy Policy</h1>
            <p className="page-hero-subtitle">
              Corporate privacy practices regarding inquiry handling for TopHill Textile Pvt. Ltd.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="site-container-narrow">
          <div className="legal-article">
            <p className="legal-meta">
              <strong>Last Updated:</strong> October 2026 | <strong>Effective Date:</strong> Immediate
            </p>

            <h2>1. Introduction</h2>
            <p>
              TopHill Textile Pvt. Ltd. ("TopHill Textile", "we", "us", or "our"), having its registered corporate office at Sector 63, Noida, Uttar Pradesh - 201301, respects the privacy of individuals and corporate partners who visit our corporate website. This Privacy Policy outlines our practices concerning the collection, use, and protection of information submitted through our online inquiry forms.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              We collect information voluntarily provided by visitors through our contact and inquiry channels:
            </p>
            <ul>
              <li><strong>Contact Information:</strong> Full name, company / brand name, business email address, and telephone number.</li>
              <li><strong>Inquiry Scope:</strong> Selected business plan (Basic, Premium, Enterprise), garment categories (Fashion, Beauty, Lifestyle &amp; More), and production details.</li>
              <li><strong>Technical Logs:</strong> Standard web server logs for security, abuse prevention, and site reliability.</li>
            </ul>

            <h2>3. Purpose of Processing</h2>
            <p>
              Information collected through this website is utilized exclusively for:
            </p>
            <ul>
              <li>Responding to your specific commercial inquiries and requirement briefs.</li>
              <li>Providing consultation regarding our Myntra growth plans and garment manufacturing coordination.</li>
              <li>Preventing automated spam or abuse.</li>
            </ul>

            <h2>4. Corporate Contact for Privacy Inquiries</h2>
            <div className="company-info-card" style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
              <div className="info-fields-table">
                <div className="info-row">
                  <div className="info-cell-label">Corporate Entity:</div>
                  <div className="info-cell-value"><strong>TopHill Textile Pvt. Ltd.</strong></div>
                </div>
                <div className="info-row">
                  <div className="info-cell-label">Registered Office:</div>
                  <div className="info-cell-value">Sector 63, Noida, Uttar Pradesh - 201301</div>
                </div>
                <div className="info-row">
                  <div className="info-cell-label">GSTIN:</div>
                  <div className="info-cell-value">09AAMCT5200E1ZH</div>
                </div>
                <div className="info-row">
                  <div className="info-cell-label">Official Email:</div>
                  <div className="info-cell-value">
                    <a href="mailto:tophilltextile26@gmail.com" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>
                      tophilltextile26@gmail.com
                    </a>
                  </div>
                </div>
                <div className="info-row">
                  <div className="info-cell-label">Contact Phone:</div>
                  <div className="info-cell-value">
                    <a href="tel:+919315331798" style={{ color: 'var(--color-primary)', textDecoration: 'underline', fontWeight: 600 }}>
                      +91 93153 31798
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2.5rem' }}>
              <button 
                type="button" 
                className="btn btn-outline-burgundy"
                onClick={() => {
                  navigateTo('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <ArrowLeft size={16} />
                <span>Return to Home</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
