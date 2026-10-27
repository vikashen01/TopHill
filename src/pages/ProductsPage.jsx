import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Scissors, 
  Layers, 
  ShoppingBag,
  HelpCircle,
  Truck,
  FileCheck
} from 'lucide-react';
import OurProductsSection from '../components/OurProductsSection';
import TopBrandsShowcase from '../components/TopBrandsShowcase';
import { WESTERN_WEAR_CATEGORIES } from '../data/westernWearCategories';

export default function ProductsPage({ navigateTo, onSelectPlan, setInquiryType }) {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleNav = (routeId) => {
    navigateTo(routeId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInquire = (subject) => {
    if (setInquiryType) {
      setInquiryType(subject);
    }
    handleNav('contact');
  };

  const toggleAccordion = (catId) => {
    setActiveAccordion(prev => prev === catId ? null : catId);
  };

  return (
    <div className="page-products animate-fade-in">
      
      {/* Page Hero Banner */}
      <section className="page-hero-banner">
        <div className="site-container">
          <div className="page-hero-content">
            <span className="section-tag">Manufacturing &amp; Marketplace Catalog</span>
            <h1 className="page-hero-title">Western Wear — Product Categories</h1>
            <p className="page-hero-subtitle">
              Comprehensive apparel manufacturing, tech-pack development, and catalog ingestion covering 11 core product categories and 88 high-demand styles for top brands on Myntra.
            </p>

            <div className="products-hero-metrics">
              <div className="hero-metric-pill">
                <span className="metric-pill-num">11</span>
                <span className="metric-pill-label">Core Categories</span>
              </div>
              <div className="hero-metric-pill">
                <span className="metric-pill-num">88</span>
                <span className="metric-pill-label">Curated Styles</span>
              </div>
              <div className="hero-metric-pill">
                <span className="metric-pill-num">XS–3XL</span>
                <span className="metric-pill-label">Graded Tech-Packs</span>
              </div>
              <div className="hero-metric-pill">
                <span className="metric-pill-num">100%</span>
                <span className="metric-pill-label">Myntra QC Pass</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Categories Section */}
      <OurProductsSection onInquire={handleInquire} />

      {/* Complete Category & Subcategory Master Directory */}
      <section className="section-spacing bg-beige">
        <div className="site-container">
          <div className="section-header text-center" style={{ maxWidth: '780px', margin: '0 auto 2.5rem' }}>
            <div className="section-tag tag-gold" style={{ display: 'inline-flex', marginBottom: '0.75rem' }}>
              <Layers size={14} />
              <span>Complete Master Directory</span>
            </div>
            <h2 className="section-title">All Categories &amp; Subcategories At A Glance</h2>
            <p className="section-description">
              Browse the complete hierarchical catalogue reference. Click on any subcategory to request instant tech-pack specifications or bulk production estimates.
            </p>
          </div>

          <div className="ww-directory-grid">
            {WESTERN_WEAR_CATEGORIES.map((cat) => (
              <div key={cat.id} className="ww-dir-card">
                <div className="ww-dir-header">
                  <div className="ww-dir-title-row">
                    <span className="ww-dir-num">{cat.number}</span>
                    <h3 className="ww-dir-title">{cat.name}</h3>
                  </div>
                  <span className="ww-dir-count">{cat.totalCount} styles</span>
                </div>

                <div className="ww-dir-body">
                  <ul className="ww-dir-list">
                    {cat.subcategories.map((sub, sIdx) => (
                      <li key={sIdx} className="ww-dir-item">
                        <button 
                          type="button" 
                          className="ww-dir-sub-link"
                          onClick={() => handleInquire(`Product Inquiry: Western Wear - ${cat.name} (${sub.name})`)}
                          title={`Inquire about ${sub.name}`}
                        >
                          <span className="ww-dir-sub-bullet">•</span>
                          <span className="ww-dir-sub-text">{sub.name}</span>
                          {sub.tag && <span className="ww-dir-tag">{sub.tag}</span>}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="ww-dir-footer">
                  <button 
                    type="button" 
                    className="ww-dir-action-btn"
                    onClick={() => handleInquire(`Product Inquiry: Western Wear - ${cat.name} Master Collection`)}
                  >
                    <span>Inquire {cat.name}</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production & QC Standards Bar */}
      <section className="section-spacing bg-white">
        <div className="site-container">
          <div className="section-header text-center" style={{ maxWidth: '750px', margin: '0 auto 2.5rem' }}>
            <div className="section-tag">Quality Assurance</div>
            <h2 className="section-title">Rigid Standards Across All 88 Styles</h2>
            <p className="section-description">
              Every garment manufactured through our network adheres to top marketplace benchmarks, ensuring seamless QC approvals and minimal returns.
            </p>
          </div>

          <div className="ww-standards-grid">
            <div className="ww-standard-card">
              <div className="ww-standard-icon">
                <Scissors size={24} />
              </div>
              <h4>Precision Tech-Pack Grading</h4>
              <p>Standardized measurement specifications across sizes XS to 3XL, eliminating sizing discrepancies and high return rates.</p>
            </div>

            <div className="ww-standard-card">
              <div className="ww-standard-icon">
                <FileCheck size={24} />
              </div>
              <h4>100% Pre-Shipment QC Pass</h4>
              <p>Stitch density, seam tensile strength, colorfastness Grade 4+, and zero Azo dyes certified before dispatch.</p>
            </div>

            <div className="ww-standard-card">
              <div className="ww-standard-icon">
                <ShieldCheck size={24} />
              </div>
              <h4>Myntra Barcode &amp; Packaging</h4>
              <p>Strict individual polybagging, barcode sticker scanning, and master carton markings complying with Myntra inbound SLA.</p>
            </div>

            <div className="ww-standard-card">
              <div className="ww-standard-icon">
                <Truck size={24} />
              </div>
              <h4>Fast Batch Turnarounds</h4>
              <p>Synchronized fabric sourcing, cutting, sewing, and studio cataloguing to achieve 15–25 day production cycles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Brands Showcase */}
      <TopBrandsShowcase 
        onExplorePlans={() => handleNav('plans')}
        onInquire={() => handleNav('contact')}
      />

      {/* Final Call to Action */}
      <section className="final-cta-section">
        <div className="site-container">
          <div className="final-cta-box">
            <h2 className="final-cta-title">Ready to Launch Your Western Wear Line?</h2>
            <p className="final-cta-desc">
              Whether you require sampling for a specific subcategory or a full-scale launch with Myntra onboarding and QC clearance, our specialists are ready to assist.
            </p>
            <div className="final-cta-buttons">
              <button 
                type="button" 
                className="btn btn-accent btn-lg"
                onClick={() => handleInquire("General Western Wear Production Inquiry")}
              >
                <span>Request Sample Tech-Packs &amp; Pricing</span>
                <ArrowRight size={18} />
              </button>
              <button 
                type="button" 
                className="btn btn-outline-white btn-lg"
                onClick={() => handleNav('plans')}
              >
                <span>Explore Myntra Business Plans</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
