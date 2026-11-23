import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Tag } from 'lucide-react';

export default function TopBrandsShowcase({ onExplorePlans, onInquire }) {
  const topBrands = [
    {
      name: 'Roadster',
      tag: 'Denim, Casual & Outerwear',
      image: '/images/brands/brand-roadster.png',
      alt: 'The Roadster Life Co. Official Logo – manufactured by TopHill Textile',
      myntraUrl: 'https://www.myntra.com/roadster'
    },
    {
      name: 'DressBerry',
      tag: "Contemporary Women's Wear",
      image: '/images/brands/brand-dressberry.png',
      alt: 'DressBerry Official Logo – manufactured by TopHill Textile',
      myntraUrl: 'https://www.myntra.com/dressberry'
    },
    {
      name: 'Moda Rapido',
      tag: 'Fast Trend Apparel',
      image: '/images/brands/brand-modarapido.png',
      alt: 'Moda Rapido Official Logo – manufactured by TopHill Textile',
      myntraUrl: 'https://www.myntra.com/moda-rapido'
    },
    {
      name: 'CORSICA',
      tag: 'Premium Western Styles',
      image: '/images/brands/brand-corsica.png',
      alt: 'CORSICA Official Logo – manufactured by TopHill Textile',
      myntraUrl: 'https://www.myntra.com/corsica'
    },
    {
      name: 'Mast & Harbour',
      tag: 'Urban Casuals & Shirts',
      image: '/images/brands/brand-mastharbour.png',
      alt: 'Mast & Harbour Official Logo – manufactured by TopHill Textile',
      myntraUrl: 'https://www.myntra.com/mast-harbour'
    },
    {
      name: 'Here & NOW',
      tag: 'Youth & Streetwear',
      image: '/images/brands/brand-herenow.png',
      alt: 'Here & NOW Official Logo – manufactured by TopHill Textile',
      isDark: true,
      myntraUrl: 'https://www.myntra.com/here-and-now'
    },
    {
      name: 'Baesd',
      tag: 'Modern Essentials',
      image: '/images/brands/brand-baesd.svg',
      alt: 'BAESD Official Logo – manufactured by TopHill Textile',
      myntraUrl: 'https://www.myntra.com/baesd'
    }
  ];

  return (
    <section className="top-brands-section section-spacing bg-beige">
      <div className="site-container">
        <div className="section-header">
          <div className="section-tag tag-gold">
            <Sparkles size={14} />
            <span>Premium Myntra Label Manufacturer</span>
          </div>

          <h2 className="section-title">
            We are a clothing manufacturer for premium labels available on Myntra
          </h2>

          <p className="section-description">
            TopHill Textile coordinates end-to-end garment production for India's leading private apparel labels on Myntra, ensuring precision quality, tech-pack compliance, and prompt batch delivery.
          </p>
        </div>

        {/* Brands Badges Grid — Each card is a clickable Myntra link */}
        <div className="top-brands-grid">
          {topBrands.map((b, idx) => (
            <a
              key={idx}
              href={b.myntraUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="brand-card-item"
              title={`View ${b.name} on Myntra`}
              style={{ textDecoration: 'none', cursor: 'pointer' }}
            >
              <div className="brand-card-inner">
                {/* Brand Logo */}
                <div
                  className={`brand-logo-wrap ${b.isDark ? 'brand-logo-dark' : ''}`}
                  title={`${b.name} on Myntra`}
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
            </a>
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
