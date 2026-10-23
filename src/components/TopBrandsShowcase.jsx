import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Tag } from 'lucide-react';

export default function TopBrandsShowcase({ onExplorePlans, onInquire }) {
  const topBrands = [
    {
      name: 'Roadster',
      tag: 'Denim, Casual & Outerwear',
      image: '/images/brands/brand-roadster.png',
      alt: 'The Roadster Life Co. Official Logo'
    },
    {
      name: 'DressBerry',
      tag: 'Contemporary Women’s Wear',
      image: '/images/brands/brand-dressberry.png',
      alt: 'DressBerry Official Logo'
    },
    {
      name: 'Moda Rapido',
      tag: 'Fast Trend Apparel',
      image: '/images/brands/brand-modarapido.png',
      alt: 'Moda Rapido Official Logo'
    },
    {
      name: 'CORSICA',
      tag: 'Premium Western Styles',
      image: '/images/brands/brand-corsica.png',
      alt: 'CORSICA Official Logo'
    },
    {
      name: 'Mast & Harbour',
      tag: 'Urban Casuals & Shirts',
      image: '/images/brands/brand-mastharbour.png',
      alt: 'Mast & Harbour Official Logo'
    },
    {
      name: 'Here & NOW',
      tag: 'Youth & Streetwear',
      image: '/images/brands/brand-herenow.png',
      alt: 'Here & NOW Official Logo',
      isDark: true
    },
    {
      name: 'Baesd',
      tag: 'Modern Essentials',
      image: '/images/brands/brand-baesd.svg',
      alt: 'BAESD Official Logo'
    }
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

        {/* Brands Badges Grid with Official Logos On Top of Brand Names */}
        <div className="top-brands-grid">
          {topBrands.map((b, idx) => (
            <div key={idx} className="brand-card-item">
              <div className="brand-card-inner">
                {/* Brand Logo on Top of Name */}
                <div 
                  className={`brand-logo-wrap ${b.isDark ? 'brand-logo-dark' : ''}`} 
                  title={`${b.name} Official Label`}
                >
                  <img 
                    src={b.image} 
                    alt={b.alt} 
                    className="brand-logo-img" 
                    loading="lazy"
                  />
                </div>
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
