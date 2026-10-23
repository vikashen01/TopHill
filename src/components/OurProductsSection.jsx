import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Tag, 
  ShoppingBag, 
  Scissors, 
  Feather, 
  ShieldCheck,
  Package
} from 'lucide-react';

export default function OurProductsSection({ onInquire }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const products = [
    {
      id: 'women-garments',
      number: '01',
      name: 'Women Garments',
      category: 'garments',
      badge: 'High-Demand Apparel',
      tagline: 'Contemporary & Ethnic Ready-To-Wear Manufacturing',
      desc: "Comprehensive production coordination for women's apparel catering to top brands like Roadster, DressBerry, and CORSICA. From tech-pack development to final Myntra QC pass.",
      brands: [
        { name: 'Roadster', logo: '/images/brands/brand-roadster.png' },
        { name: 'DressBerry', logo: '/images/brands/brand-dressberry.png' },
        { name: 'CORSICA', logo: '/images/brands/brand-corsica.png' }
      ],
      specs: [
        'Kurtis, Anarkalis & Ethnic Ensembles',
        'Western Dresses, Tops & Tunics',
        'Co-ord Sets, Bottoms & Loungewear',
        'Precision Tech-Pack Grading (XS to 3XL)',
        'Full Pre-Shipment QC Pass Compliance'
      ],
      leadTime: '15 - 25 Days Batch Turnaround',
      moq: 'Flexible Batch Capacities',
      icon: ShoppingBag,
      gradient: 'linear-gradient(135deg, #0E3320 0%, #15472E 100%)'
    },
    {
      id: 'grey-fabrics',
      number: '02',
      name: 'Grey Fabrics',
      category: 'fabrics',
      badge: 'Loom-State Textiles',
      tagline: 'High-Grade Unprocessed Raw Greige Looms',
      desc: 'Uniform high-tensile loom-state grey textiles direct from modern air-jet and rapier weaving setups, ready for dying, bleaching, rotary printing, and finishing.',
      specs: [
        'Air-Jet & Rapier Woven Greige',
        'Consistent Reed & Pick Density',
        'Yarn Count Range: 20s to 80s Combed/Carded',
        'Defect-Free Clean Woven Selvedge',
        '100% Inspected on Illuminated Perches'
      ],
      leadTime: 'Prompt Mill Rolling & Dispatch',
      moq: 'Commercial Bulk Rolls',
      icon: Layers,
      gradient: 'linear-gradient(135deg, #1A3E2A 0%, #0B2416 100%)'
    },
    {
      id: 'denim',
      number: '03',
      name: 'Denim',
      category: 'denim',
      badge: 'Rugged & Stretch Weaves',
      tagline: 'Heavy-Duty & Comfort Stretch Denim Solutions',
      desc: 'Authentic indigo rope-dyed, sulphur black, and stretch denim fabrics alongside full bottom-wear jeans production tailored for youth labels like Roadster, Mast & Harbour, and Here & NOW.',
      brands: [
        { name: 'Roadster', logo: '/images/brands/brand-roadster.png' },
        { name: 'Mast & Harbour', logo: '/images/brands/brand-mastharbour.png' },
        { name: 'Here & NOW', logo: '/images/brands/brand-herenow.png', isDark: true }
      ],
      specs: [
        'Fabric Weights: 8.5 oz to 14.5 oz Heavyweight',
        'Cotton-Spandex Stretch & Ring-Spun Indigos',
        'Enzyme, Acid, Stone & Raw Rinse Washes',
        'Heavy Bar-Tack & Rivet Reinforced Seams',
        'Mens & Womens Jeans, Jackets & Dungarees'
      ],
      leadTime: '20 - 30 Days Finished Lots',
      moq: 'Optimized Batch Volumes',
      icon: Scissors,
      gradient: 'linear-gradient(135deg, #0A2218 0%, #173827 100%)'
    },
    {
      id: 'woven-fabrics',
      number: '04',
      name: 'Woven Fabrics',
      category: 'fabrics',
      badge: 'Structured Shirting & Suiting',
      tagline: 'Engineered High-Density Dimensional Textiles',
      desc: 'Premium interlaced plain, twill, satin, poplin, and jacquard woven textiles designed for luxury shirting, casual wear, uniforms, and commercial garment runs.',
      specs: [
        'Plain, Twill, Satin, Oxford & Poplin Weaves',
        'Yarn-Dyed Checks, Stripes & Solid Dyes',
        'Mercerized Silk-Touch Smooth Finish',
        'High Tensile & Tear Strength Standards',
        'Color Fastness Grade 4+ Certified'
      ],
      leadTime: 'Custom Dyeing & Standard Lots',
      moq: 'Sampling & Bulk Production Available',
      icon: Package,
      gradient: 'linear-gradient(135deg, #071E12 0%, #1B4E34 100%)'
    },
    {
      id: 'cotton-fabrics',
      number: '05',
      name: 'Cotton Fabrics',
      category: 'fabrics',
      badge: '100% Pure Natural Fiber',
      tagline: 'Breathable, Hypoallergenic Everyday Comfort Textiles',
      desc: '100% pure combed natural cotton, organic cotton blends, and biowashed knits/wovens engineered for maximum breathability, soft skin hand-feel, and all-weather wear.',
      specs: [
        '100% Combed & Compact Natural Cotton',
        'Single Jersey, Pique Knit & Cambric Weaves',
        'Azo-Free Eco-Friendly Reactive Dyes',
        'Bio-Washed Anti-Pilling Super-Soft Touch',
        'Ideal for Tees, Dailywear, Shirts & Linens'
      ],
      leadTime: 'Ready Stock & Custom Mills',
      moq: 'Continuous Supply Lines',
      icon: Feather,
      gradient: 'linear-gradient(135deg, #103322 0%, #0E291C 100%)'
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handleInquireProduct = (productName) => {
    if (onInquire) {
      onInquire(`Product Inquiry: ${productName}`);
    }
  };

  return (
    <section id="our-products" className="our-products-section section-spacing bg-white">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag tag-gold">
            <Sparkles size={14} />
            <span>Manufacturing &amp; Textile Capabilities</span>
          </div>

          <h2 className="section-title">
            Our Products
          </h2>

          <p className="section-description">
            Explore our specialized five core product lines — engineered to meet rigid quality standards, brand tech-packs, and seamless marketplace commercialization.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="products-filter-bar">
          <button 
            type="button" 
            className={`product-filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Products (5)
          </button>
          <button 
            type="button" 
            className={`product-filter-btn ${activeCategory === 'garments' ? 'active' : ''}`}
            onClick={() => setActiveCategory('garments')}
          >
            Women Garments
          </button>
          <button 
            type="button" 
            className={`product-filter-btn ${activeCategory === 'fabrics' ? 'active' : ''}`}
            onClick={() => setActiveCategory('fabrics')}
          >
            Fabrics (Grey, Woven, Cotton)
          </button>
          <button 
            type="button" 
            className={`product-filter-btn ${activeCategory === 'denim' ? 'active' : ''}`}
            onClick={() => setActiveCategory('denim')}
          >
            Denim Solutions
          </button>
        </div>

        {/* Products Grid */}
        <div className="products-cards-grid">
          {filteredProducts.map((p) => {
            const IconComponent = p.icon;
            return (
              <div key={p.id} className="product-card-item">
                <div className="product-card-header" style={{ background: p.gradient }}>
                  <div className="product-card-topbar">
                    <span className="product-number-tag">{p.number}</span>
                    <span className="product-badge-pill">{p.badge}</span>
                  </div>

                  <div className="product-icon-circle">
                    <IconComponent size={28} color="#FFFFFF" />
                  </div>

                  <h3 className="product-title-text">{p.name}</h3>
                  <p className="product-tagline-text">{p.tagline}</p>
                </div>

                <div className="product-card-body">
                  <p className="product-description-text">{p.desc}</p>

                  {p.brands && (
                    <div className="product-brands-strip">
                      <span className="product-brands-strip-title">Associated Labels:</span>
                      <div className="product-brands-strip-logos">
                        {p.brands.map((b, bIdx) => (
                          <div 
                            key={bIdx} 
                            className={`product-mini-brand-badge ${b.isDark ? 'mini-dark' : ''}`} 
                            title={b.name}
                          >
                            <img src={b.logo} alt={b.name} />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="product-specs-block">
                    <span className="product-specs-heading">Key Specifications:</span>
                    <ul className="product-specs-list">
                      {p.specs.map((item, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={15} className="product-check-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="product-metrics-row">
                    <div className="metric-cell">
                      <span className="metric-label">Turnaround:</span>
                      <strong className="metric-val">{p.leadTime}</strong>
                    </div>
                    <div className="metric-cell">
                      <span className="metric-label">Supply:</span>
                      <strong className="metric-val">{p.moq}</strong>
                    </div>
                  </div>

                  <div className="product-card-action">
                    <button 
                      type="button" 
                      className="btn btn-primary btn-sm product-inquire-btn"
                      onClick={() => handleInquireProduct(p.name)}
                    >
                      <span>Inquire About {p.name}</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner for Custom Textile Sourcing */}
        <div className="products-footer-box">
          <div className="products-footer-content">
            <div className="products-footer-icon">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h4>Looking for Custom GSM, Specialized Weaves, or Private Label Bulk?</h4>
              <p>We coordinate custom dyeing, yarn counts, and tech-pack approvals tailored strictly to your brand specifications.</p>
            </div>
          </div>
          <button 
            type="button" 
            className="btn btn-accent btn-md"
            onClick={() => onInquire && onInquire('Custom Product & Fabric Sourcing')}
          >
            <span>Request Custom Fabric Sourcing</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
