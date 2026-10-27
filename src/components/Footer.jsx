import React from 'react';
import { Mail, Phone, MapPin, FileText, ArrowRight, Shield, AlertCircle } from 'lucide-react';
import { InstagramIcon as Instagram, FacebookIcon as Facebook } from './SocialIcons';
import BrandLogo from './BrandLogo';

export default function Footer({ navigateTo }) {
  const currentYear = new Date().getFullYear();

  const handleNav = (routeId) => {
    navigateTo(routeId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      {/* Top Banner Notice */}
      <div className="footer-notice-bar">
        <div className="site-container footer-notice-inner">
          <div className="footer-notice-content">
            <AlertCircle size={16} className="notice-icon" />
            <span>
              <strong>TopHill Textile Pvt. Ltd.:</strong> A structured, reliable partner coordinating garment production for top Myntra brands (Roadster, DressBerry, Moda Rapido, CORSICA, Mast &amp; Harbour, Here &amp; NOW, Baesd), catalog preparation, Myntra onboarding to QC pass, and operational execution.
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="site-container">
          <div className="footer-grid">
            {/* Column 1: Brand & Intro */}
            <div className="footer-col brand-col">
              <BrandLogo variant="light" onClick={() => handleNav('home')} />
              <p className="footer-intro-text">
                TopHill Textile Pvt. Ltd. is focused on supporting garment businesses through production coordination, high-precision product presentation, Myntra onboarding to QC pass, and structured business operations.
              </p>
              
              <div className="footer-legal-badge">
                <span className="badge-title">Registered Corporate Entity</span>
                <span className="badge-val">TopHill Textile Pvt. Ltd.</span>
                <span className="badge-note">GSTIN: 09AAMCT5200E1ZH</span>
              </div>

              {/* Social Channels */}
              <div className="footer-social-box">
                <span className="social-box-title">Follow Us:</span>
                <div className="social-links-row">
                  <a 
                    href="https://www.instagram.com/tophill_textile/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-btn instagram-btn"
                    title="TopHill Textile on Instagram: tophill_textile"
                  >
                    <Instagram size={16} />
                    <span>@tophill_textile</span>
                  </a>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61595064245118" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-btn facebook-btn"
                    title="TopHill Textile on Facebook"
                  >
                    <Facebook size={16} />
                    <span>Top Hill</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-col links-col">
              <h4 className="footer-col-title">Navigation</h4>
              <ul className="footer-links-list">
                <li>
                  <button type="button" className="footer-link-btn" onClick={() => handleNav('home')}>
                    <ArrowRight size={14} /> Home
                  </button>
                </li>
                <li>
                  <button type="button" className="footer-link-btn" onClick={() => handleNav('about')}>
                    <ArrowRight size={14} /> About Us
                  </button>
                </li>
                <li>
                  <button type="button" className="footer-link-btn" onClick={() => handleNav('services')}>
                    <ArrowRight size={14} /> Our Services
                  </button>
                </li>
                <li>
                  <button type="button" className="footer-link-btn" onClick={() => handleNav('plans')}>
                    <ArrowRight size={14} /> Business Plans
                  </button>
                </li>
                <li>
                  <button type="button" className="footer-link-btn" onClick={() => handleNav('products')}>
                    <ArrowRight size={14} /> Our Products
                  </button>
                </li>
                <li>
                  <button type="button" className="footer-link-btn" onClick={() => handleNav('contact')}>
                    <ArrowRight size={14} /> Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Services Breakdown */}
            <div className="footer-col services-col">
              <h4 className="footer-col-title">Core Capabilities</h4>
              <ul className="footer-links-list">
                <li>
                  <button type="button" className="footer-link-btn" onClick={() => handleNav('services')}>
                    <ArrowRight size={14} /> Garment Manufacturing Coordination
                  </button>
                </li>
                <li>
                  <button type="button" className="footer-link-btn" onClick={() => handleNav('services')}>
                    <ArrowRight size={14} /> Product Photography &amp; Catalog
                  </button>
                </li>
                <li>
                  <button type="button" className="footer-link-btn" onClick={() => handleNav('services')}>
                    <ArrowRight size={14} /> Myntra Onboarding to QC Pass
                  </button>
                </li>
                <li>
                  <button type="button" className="footer-link-btn" onClick={() => handleNav('services')}>
                    <ArrowRight size={14} /> Business Operations Support
                  </button>
                </li>
                <li>
                  <button type="button" className="footer-link-btn" onClick={() => handleNav('plans')}>
                    <ArrowRight size={14} /> Growth Plans (Basic / Premium / Enterprise)
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact & Office Details */}
            <div className="footer-col contact-col">
              <h4 className="footer-col-title">Corporate Office</h4>
              <ul className="footer-contact-list">
                <li className="footer-contact-item">
                  <MapPin size={18} className="footer-icon" />
                  <div>
                    <span className="contact-label">Office Address</span>
                    <p className="contact-value">
                      Sector 63,<br />
                      Noida, Uttar Pradesh - 201301
                    </p>
                  </div>
                </li>
                <li className="footer-contact-item">
                  <Mail size={18} className="footer-icon" />
                  <div>
                    <span className="contact-label">Official Email</span>
                    <a href="mailto:tophilltextile26@gmail.com" className="contact-value" style={{ textDecoration: 'underline' }}>
                      tophilltextile26@gmail.com
                    </a>
                  </div>
                </li>
                <li className="footer-contact-item">
                  <Phone size={18} className="footer-icon" />
                  <div>
                    <span className="contact-label">Contact Phone</span>
                    <a href="tel:+919899763193" className="contact-value" style={{ textDecoration: 'underline' }}>
                      +91 98997 63193
                    </a>
                  </div>
                </li>
                <li className="footer-contact-item">
                  <FileText size={18} className="footer-icon" />
                  <div>
                    <span className="contact-label">GSTIN</span>
                    <p className="contact-value" style={{ color: 'var(--color-accent)' }}>
                      09AAMCT5200E1ZH
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Legal */}
      <div className="footer-bottom">
        <div className="site-container footer-bottom-inner">
          <p className="copyright-text">
            &copy; {currentYear} TopHill Textile Pvt. Ltd. All rights reserved.
          </p>

          <div className="footer-legal-links">
            <button type="button" className="legal-link-btn" onClick={() => handleNav('privacy-policy')}>
              <Shield size={13} style={{ display: 'inline', marginRight: '4px' }} />
              Privacy Policy
            </button>
            <span className="footer-dot">&bull;</span>
            <button type="button" className="legal-link-btn" onClick={() => handleNav('terms-conditions')}>
              <FileText size={13} style={{ display: 'inline', marginRight: '4px' }} />
              Terms &amp; Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
