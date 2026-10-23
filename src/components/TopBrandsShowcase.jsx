import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Tag } from 'lucide-react';

export default function TopBrandsShowcase({ onExplorePlans, onInquire }) {
  const topBrands = [
    {
      name: 'Roadster',
      tag: 'Denim, Casual & Outerwear',
      logo: (
        <svg viewBox="0 0 100 46" width="94" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 23 L26 9 L74 9 L88 23 L50 41 Z" fill="#0E3320" stroke="#D4742C" strokeWidth="1.5" />
          <path d="M24 23 L50 14 L76 23" stroke="#D4742C" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="50" cy="18" r="2.5" fill="#D4742C" />
          <text x="50" y="29" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="900" fontFamily="sans-serif" letterSpacing="1.8">ROADSTER</text>
        </svg>
      )
    },
    {
      name: 'DressBerry',
      tag: 'Contemporary Women’s Wear',
      logo: (
        <svg viewBox="0 0 100 46" width="94" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="6" width="80" height="34" rx="17" fill="#F4F7F5" stroke="#D4742C" strokeWidth="1.2" />
          <path d="M42 12 Q50 8 58 12" stroke="#2D6A4F" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="46" cy="11" r="1.8" fill="#D4742C" />
          <circle cx="54" cy="11" r="1.8" fill="#D4742C" />
          <text x="50" y="27" textAnchor="middle" fill="#0E3320" fontSize="12" fontWeight="800" fontFamily="serif" fontStyle="italic">DressBerry</text>
          <path d="M36 31 Q50 34 64 31" stroke="#D4742C" strokeWidth="1" />
        </svg>
      )
    },
    {
      name: 'Moda Rapido',
      tag: 'Fast Trend Apparel',
      logo: (
        <svg viewBox="0 0 100 46" width="94" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="7" width="84" height="32" rx="6" fill="#071E12" stroke="#15472E" strokeWidth="1" />
          <path d="M20 29 L26 15 L32 25 L38 15 L44 29" stroke="#D4742C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <text x="66" y="21" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="800" letterSpacing="1">MODA</text>
          <text x="66" y="30" textAnchor="middle" fill="#D4742C" fontSize="7.5" fontWeight="700" letterSpacing="1.5">RAPIDO</text>
        </svg>
      )
    },
    {
      name: 'CORSICA',
      tag: 'Premium Western Styles',
      logo: (
        <svg viewBox="0 0 100 46" width="94" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,4 62,17 50,30 38,17" fill="#0E3320" stroke="#D4742C" strokeWidth="1.4" />
          <polygon points="50,9 56,17 50,25 44,17" fill="#D4742C" />
          <text x="50" y="39" textAnchor="middle" fill="#0E3320" fontSize="9.5" fontWeight="800" letterSpacing="2.5" fontFamily="sans-serif">CORSICA</text>
        </svg>
      )
    },
    {
      name: 'Mast & Harbour',
      tag: 'Urban Casuals & Shirts',
      logo: (
        <svg viewBox="0 0 100 46" width="94" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="18" r="14" fill="#071E12" stroke="#D4742C" strokeWidth="1.4" />
          <circle cx="50" cy="9.5" r="2" stroke="#FFFFFF" strokeWidth="1" />
          <line x1="50" y1="11.5" x2="50" y2="24" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="44" y1="15" x2="56" y2="15" stroke="#D4742C" strokeWidth="1.3" strokeLinecap="round" />
          <path d="M43 21 C45 26, 55 26, 57 21" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
          <text x="50" y="39" textAnchor="middle" fill="#0E3320" fontSize="7" fontWeight="800" letterSpacing="1">MAST &amp; HARBOUR</text>
        </svg>
      )
    },
    {
      name: 'Here & NOW',
      tag: 'Youth & Streetwear',
      logo: (
        <svg viewBox="0 0 100 46" width="94" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="7" width="80" height="32" rx="5" fill="#0E3320" stroke="#D4742C" strokeWidth="1.4" />
          <text x="50" y="21" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontWeight="900" letterSpacing="1">HERE &amp; NOW</text>
          <line x1="20" y1="25" x2="80" y2="25" stroke="#D4742C" strokeWidth="1" />
          <text x="50" y="33" textAnchor="middle" fill="#D4742C" fontSize="6.5" fontWeight="700" letterSpacing="2">STREETWEAR</text>
        </svg>
      )
    },
    {
      name: 'Baesd',
      tag: 'Modern Essentials',
      logo: (
        <svg viewBox="0 0 100 46" width="94" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="8" width="76" height="30" rx="6" fill="#F4F7F5" stroke="#0E3320" strokeWidth="1.4" />
          <circle cx="27" cy="23" r="6.5" fill="#0E3320" />
          <text x="27" y="27" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="800">B</text>
          <text x="56" y="27" textAnchor="middle" fill="#0E3320" fontSize="10.5" fontWeight="900" letterSpacing="2">BAESD</text>
        </svg>
      )
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
                <div className="brand-logo-wrap" title={`${b.name} Official Label`}>
                  {b.logo}
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
