import React from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

export default function TermsPage({ navigateTo }) {
  return (
    <div className="page-legal animate-fade-in">
      <section className="page-hero-banner">
        <div className="site-container">
          <div className="page-hero-content">
            <span className="section-tag">Terms of Website Use</span>
            <h1 className="page-hero-title">Terms and Conditions</h1>
            <p className="page-hero-subtitle">
              Corporate website terms of use for TopHill Textile Pvt. Ltd.
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

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using this corporate website, you agree to comply with and be bound by these Terms and Conditions. This website is owned and operated by TopHill Textile Pvt. Ltd., located at G-137, 2nd Floor, Sector 63, Noida, Uttar Pradesh-201301.
            </p>

            <h2>2. Informational Purpose &amp; Growth Plans Scope</h2>
            <p>
              This website is published to communicate the garment business support model and Myntra growth plans offered by TopHill Textile Pvt. Ltd., including garment manufacturing coordination for top private brands of Myntra (such as Roadster, DressBerry, Moda Rapido, CORSICA, Mast &amp; Harbour, Here &amp; NOW, Baesd) and Myntra onboarding to QC pass.
            </p>
            <p>
              This website does not constitute an online retail cart or consumer shopping store. Specific service engagements and production contracts are governed by formal bilateral written agreements.
            </p>

            <h2>3. Third-Party Marketplace Trademarks</h2>
            <p>
              Trademarks and brand names referenced on this website (such as Myntra, Roadster, DressBerry, Moda Rapido, CORSICA, Mast &amp; Harbour, Here &amp; NOW, Baesd) are the property of their respective trademark holders. Reference to these brands is made to accurately describe the scope of garment manufacturing and listing assistance services provided.
            </p>

            <h2>4. Governing Law and Jurisdiction</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any legal disputes arising in connection with this website shall be subject to the exclusive jurisdiction of the competent courts in Gautam Buddha Nagar / Noida, Uttar Pradesh, India.
            </p>

            <h2>5. Contact Regarding Terms</h2>
            <div className="company-info-card" style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
              <div className="info-fields-table">
                <div className="info-row">
                  <div className="info-cell-label">Corporate Entity:</div>
                  <div className="info-cell-value"><strong>TopHill Textile Pvt. Ltd.</strong></div>
                </div>
                <div className="info-row">
                  <div className="info-cell-label">Registered Office:</div>
                  <div className="info-cell-value">G-137, 2nd Floor, Sector 63, Noida, Uttar Pradesh-201301</div>
                </div>
                <div className="info-row">
                  <div className="info-cell-label">GSTIN:</div>
                  <div className="info-cell-value">09AAMCT5200E1ZH</div>
                </div>
                <div className="info-row">
                  <div className="info-cell-label">Email:</div>
                  <div className="info-cell-value">tophilltextile26@gmail.com</div>
                </div>
                <div className="info-row">
                  <div className="info-cell-label">Contact Phone:</div>
                  <div className="info-cell-value">+91 98997 63193</div>
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
