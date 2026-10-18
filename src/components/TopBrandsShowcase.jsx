import React from 'react';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Tag } from 'lucide-react';

export default function TopBrandsShowcase({ onExplorePlans, onInquire }) {
  const topBrands = [
    { name: 'Roadster', tag: 'Denim, Casual & Outerwear' },
    { name: 'DressBerry', tag: 'Contemporary Women’s Wear' },
    { name: 'Moda Rapido', tag: 'Fast Trend Apparel' },
    { name: 'CORSICA', tag: 'Premium Western Styles' },
    { name: 'Mast & Harbour', tag: 'Urban Casuals & Shirts' },
    { name: 'Here & NOW', tag: 'Youth & Streetwear' },
    { name: 'Baesd', tag: 'Modern Essentials' }
  ];

  return (
    <section className="top-brands-section section-spacing bg-beige">
      <div className="site-container">
        <div className="section-header">
          <div className="section-tag tag-gold">
            <Sparkles size={14} />
            <span>Garment Manufacturing for Top Myntra Brands</span>
          </div>

          <h2 className="section-title">
            We Manufacture Clothes for Top Brands of Myntra
          </h2>

          <p className="section-description">
            TopHill Textile coordinates end-to-end garment production for India's leading private apparel labels on Myntra, ensuring precision quality, tech-pack compliance, and prompt batch delivery.
          </p>
        </div>

        {/* Brands Badges Grid */}
        <div className="top-brands-grid">
          {topBrands.map((b, idx) => (
            <div key={idx} className="brand-card-item">
              <div className="brand-card-inner">
                <span className="brand-num">0{idx + 1}</span>
                <h3 className="brand-name-text">{b.name}</h3>
                <span className="brand-category-tag">{b.tag}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Categories & Specialized Scope Box */}
        <div className="brands-scope-card">
          <div className="scope-col">
            <div className="scope-icon-title">
              <Tag size={20} className="scope-icon" />
              <h4>Categories Manufactured</h4>
            </div>
            <p className="scope-highlight-text">
              <strong>Fashion, Beauty, Lifestyle &amp; More</strong>
            </p>
            <p className="scope-sub">
              Complete garment development covering shirts, t-shirts, dresses, trousers, ethnic wear, outerwear, and accessories.
            </p>
          </div>

          <div className="scope-divider" />

          <div className="scope-col">
            <div className="scope-icon-title">
              <ShieldCheck size={20} className="scope-icon" />
              <h4>Listing &amp; Operational Specialization</h4>
            </div>
            <p className="scope-highlight-text">
              <strong>Exclusively on Myntra &bull; Onboarding to QC Pass</strong>
            </p>
            <p className="scope-sub">
              Focused marketplace listing assistance specialized strictly on Myntra platform guidelines, category templates, catalog guidelines, and quality control (QC) pass.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ marginTop: '2.5rem', textAlign: 'center', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            type="button" 
            className="btn btn-primary btn-lg"
            onClick={onExplorePlans}
          >
            <span>Explore Myntra Business Plans</span>
            <ArrowRight size={18} />
          </button>
          <button 
            type="button" 
            className="btn btn-secondary btn-lg"
            onClick={onInquire}
          >
            <span>Inquire for Garment Manufacturing</span>
          </button>
        </div>
      </div>
    </section>
  );
}
