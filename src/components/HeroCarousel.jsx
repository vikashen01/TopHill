import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  ShoppingBag, 
  Layers, 
  Scissors, 
  CheckCircle2, 
  Info, 
  ShieldCheck, 
  Camera, 
  Truck, 
  FileCheck,
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import { WESTERN_WEAR_CATEGORIES } from '../data/westernWearCategories';
import { FABRIC_CATEGORIES } from '../data/fabricCategories';

export default function HeroCarousel({ onNavigate, onSelectPlan, onInquire }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = 3;
  const slideTimerRef = useRef(null);

  // Auto-play interval: 7 seconds
  useEffect(() => {
    if (isPaused) return;

    slideTimerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 7000);

    return () => {
      if (slideTimerRef.current) clearInterval(slideTimerRef.current);
    };
  }, [isPaused, totalSlides]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="hero-carousel-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="TopHill Textile Hero Showcase"
    >
      {/* Slide Container */}
      <div className="hero-slides-wrapper">
        
        {/* =========================================================================
            SLIDE 1: BECOME A PARTNER WITH TOP BRANDS ON MYNTRA
            Balanced 2-Column Full-Width Layout (Zero empty space on right)
            ========================================================================= */}
        <div className={`hero-slide ${currentSlide === 0 ? 'active' : ''}`} aria-hidden={currentSlide !== 0}>
          <div className="hero-backdrop-container">
            <img 
              src="/images/hero-banner.jpg" 
              alt="Modern garment manufacturing studio and apparel production coordination workspace" 
              className="hero-backdrop-img"
            />
            <div className="hero-overlay hero-overlay-emerald"></div>
          </div>

          <div className="hero-container-wide">
            <div className="hero-grid-2col">
              
              {/* Left Column: Heading, Proposition & Actions */}
              <div className="hero-content-col">
                <div className="hero-badge">
                  <Sparkles size={14} className="gold-icon" />
                  <span>Garment Business Operations &bull; Fashion, Beauty, Lifestyle &amp; More</span>
                </div>

                <h1 className="hero-headline">
                  BECOME A <span className="highlight-yellow">PARTNER</span> WITH TOP BRANDS ON MYNTRA
                </h1>

                <p className="hero-subheading">
                  A structured, reliable partner coordinating garment production, catalog preparation, Myntra onboarding to QC pass, and operational execution. We manufacture clothes for top brands of Myntra including <strong>Roadster</strong>, <strong>DressBerry</strong>, <strong>Moda Rapido</strong>, <strong>CORSICA</strong>, <strong>Mast &amp; Harbour</strong>, <strong>Here &amp; NOW</strong>, and <strong>Baesd</strong>.
                </p>

                {/* Top Myntra Brands Pills */}
                <div className="hero-brands-chips-row">
                  <span className="hero-brands-label">Top Brands:</span>
                  <span className="hero-brand-pill">Roadster</span>
                  <span className="hero-brand-pill">DressBerry</span>
                  <span className="hero-brand-pill">Moda Rapido</span>
                  <span className="hero-brand-pill">CORSICA</span>
                  <span className="hero-brand-pill">Mast &amp; Harbour</span>
                  <span className="hero-brand-pill">Here &amp; NOW</span>
                  <span className="hero-brand-pill">Baesd</span>
                </div>

                <div className="hero-actions">
                  <button 
                    type="button"
                    onClick={() => scrollToSection('myntra-plans')}
                    className="btn btn-accent btn-lg"
                  >
                    <span>View Growth Plans</span>
                    <ArrowRight size={18} />
                  </button>

                  <button 
                    type="button" 
                    className="btn btn-secondary btn-lg hero-btn-secondary"
                    onClick={() => onNavigate('contact')}
                  >
                    <span>Contact Us</span>
                  </button>

                  <a 
                    href="https://wa.me/919315331798?text=Hello%20TopHill%20Textile,%20I%20would%20like%20to%20partner%20with%20top%20brands%20on%20Myntra."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp-hero"
                    title="Direct WhatsApp Desk"
                  >
                    <MessageCircle size={18} />
                    <span>WhatsApp: +91 93153 31798</span>
                  </a>
                </div>

                <div className="hero-trust-note">
                  <Info size={14} />
                  <span>Listing assistance is specialized exclusively on Myntra from onboarding to QC pass. Category of clothes manufactured: Fashion, Beauty, Lifestyle &amp; More.</span>
                </div>
              </div>

              {/* Right Column: High-Impact Operations & Partnership Highlights Cards */}
              <div className="hero-showcase-col">
                <div className="hero-partner-feature-grid">
                  
                  <div className="hero-feature-card">
                    <div className="hero-feature-card-icon">
                      <Scissors size={20} />
                    </div>
                    <div>
                      <h4 className="hero-feature-title">Top Brand Manufacturing</h4>
                      <p className="hero-feature-desc">
                        Full-scale production for Roadster, DressBerry, Moda Rapido &amp; CORSICA with strict tech-pack adherence.
                      </p>
                    </div>
                  </div>

                  <div className="hero-feature-card">
                    <div className="hero-feature-card-icon">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <h4 className="hero-feature-title">100% Myntra QC Pass</h4>
                      <p className="hero-feature-desc">
                        XS to 3XL graded measurement specs, seam tensile testing, and Grade 4+ colorfastness compliance.
                      </p>
                    </div>
                  </div>

                  <div className="hero-feature-card">
                    <div className="hero-feature-card-icon">
                      <Camera size={20} />
                    </div>
                    <div>
                      <h4 className="hero-feature-title">Cataloguing &amp; Photography</h4>
                      <p className="hero-feature-desc">
                        Professional studio shoot coordination, Myntra flat-file ingestion, and brand registry clearance.
                      </p>
                    </div>
                  </div>

                  <div className="hero-feature-card">
                    <div className="hero-feature-card-icon">
                      <Truck size={20} />
                    </div>
                    <div>
                      <h4 className="hero-feature-title">Fulfillment &amp; SLA Barcodes</h4>
                      <p className="hero-feature-desc">
                        Standardized polybagging, barcode sticker verification, and master packaging meeting Myntra inbound rules.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Partnership Performance Banner */}
                <div className="hero-stats-strip">
                  <div className="hero-stat-box">
                    <span className="hero-stat-number">11</span>
                    <span className="hero-stat-text">Core Categories</span>
                  </div>
                  <div className="hero-stat-divider" />
                  <div className="hero-stat-box">
                    <span className="hero-stat-number">88</span>
                    <span className="hero-stat-text">Western Styles</span>
                  </div>
                  <div className="hero-stat-divider" />
                  <div className="hero-stat-box">
                    <span className="hero-stat-number">27</span>
                    <span className="hero-stat-text">Mill Weaves</span>
                  </div>
                  <div className="hero-stat-divider" />
                  <div className="hero-stat-box">
                    <span className="hero-stat-number">100%</span>
                    <span className="hero-stat-text">QC Pass Rate</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* =========================================================================
            SLIDE 2: COMPLETE APPAREL RANGE (11 CATEGORIES • 88 STYLES WITH PHOTOS)
            Full-Width Layout: Left Text & CTAs, Right Category Cards Grid with Photos
            ========================================================================= */}
        <div className={`hero-slide ${currentSlide === 1 ? 'active' : ''}`} aria-hidden={currentSlide !== 1}>
          <div className="hero-backdrop-container">
            <img 
              src="/images/garment-production.jpg" 
              alt="Western wear garment manufacturing and apparel collection sampling" 
              className="hero-backdrop-img"
            />
            <div className="hero-overlay hero-overlay-emerald"></div>
          </div>

          <div className="hero-container-wide">
            <div className="hero-grid-2col">
              
              {/* Left Column */}
              <div className="hero-content-col">
                <div className="hero-badge">
                  <ShoppingBag size={14} className="gold-icon" />
                  <span>Western Wear Range &bull; 11 Core Categories &bull; 88 Styles</span>
                </div>

                <h1 className="hero-headline">
                  COMPLETE APPAREL RANGE — <span className="highlight-yellow">11 CORE CATEGORIES</span> &amp; 88 STYLES
                </h1>

                <p className="hero-subheading">
                  End-to-end garment manufacturing with precision tech-pack grading XS to 3XL. Complete production support across 11 core categories including Tops, Shirts, Dresses, Co-ord Sets, Office Wear, Skirts, Bottom Wear, Party Wear, T-Shirts, and Outerwear.
                </p>

                {/* Subcategories Highlight Ribbon */}
                <div className="hero-subcategories-scroller">
                  <span className="hero-subcat-badge">Crop Tops</span>
                  <span className="hero-subcat-badge">Oversized Shirts</span>
                  <span className="hero-subcat-badge">Midi Dresses</span>
                  <span className="hero-subcat-badge">Blazer Co-ords</span>
                  <span className="hero-subcat-badge">Wide-Leg Pants</span>
                  <span className="hero-subcat-badge">Pleated Skirts</span>
                  <span className="hero-subcat-badge">Sequin Party Tops</span>
                  <span className="hero-subcat-badge">Bio-Washed Tees</span>
                  <span className="hero-subcat-badge">+ 80 More</span>
                </div>

                <div className="hero-actions">
                  <button 
                    type="button"
                    onClick={() => {
                      scrollToSection('our-products');
                      const garmentsBtn = document.getElementById('tab-btn-garments');
                      if (garmentsBtn) garmentsBtn.click();
                    }}
                    className="btn btn-accent btn-lg"
                  >
                    <span>Explore All 88 Styles</span>
                    <ArrowRight size={18} />
                  </button>

                  <button 
                    type="button" 
                    className="btn btn-secondary btn-lg hero-btn-secondary"
                    onClick={() => {
                      if (onInquire) onInquire("Apparel Manufacturing Inquiry (Western Wear)");
                      onNavigate('contact');
                    }}
                  >
                    <span>Inquire Production</span>
                  </button>
                </div>

                <div className="hero-trust-note">
                  <CheckCircle2 size={14} />
                  <span>100% Myntra Quality Control (QC) clearance adherence with fabric testing and barcode compliance.</span>
                </div>
              </div>

              {/* Right Column: Visual Category Photo Cards Grid */}
              <div className="hero-showcase-col">
                <div className="hero-categories-photo-grid">
                  {WESTERN_WEAR_CATEGORIES.slice(0, 6).map((cat) => (
                    <div 
                      key={cat.id} 
                      className="hero-cat-photo-card"
                      onClick={() => {
                        scrollToSection('our-products');
                        const garmentsBtn = document.getElementById('tab-btn-garments');
                        if (garmentsBtn) garmentsBtn.click();
                      }}
                      role="button"
                      tabIndex={0}
                    >
                      <img src={cat.image} alt={cat.name} className="hero-cat-photo-img" />
                      <div className="hero-cat-photo-overlay">
                        <div className="hero-cat-photo-header">
                          <span className="hero-cat-num">{cat.number}</span>
                          <span className="hero-cat-count-badge">{cat.totalCount} Styles</span>
                        </div>
                        <h4 className="hero-cat-photo-title">{cat.name}</h4>
                        <p className="hero-cat-photo-sub">
                          {cat.subcategories.slice(0, 2).map(s => s.name).join(', ')}...
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* =========================================================================
            SLIDE 3: FABRICS & MILL SOURCING (COTTON, VISCOSE, POLYESTER, LINEN, KNITS, DENIM)
            Full-Width Layout: Left Text & CTAs, Right Fabric Category Cards Grid
            ========================================================================= */}
        <div className={`hero-slide ${currentSlide === 2 ? 'active' : ''}`} aria-hidden={currentSlide !== 2}>
          <div className="hero-backdrop-container">
            <img 
              src="/images/catalog-photography.jpg" 
              alt="Textile swatches, fabric rolls and mill sourcing operations" 
              className="hero-backdrop-img"
            />
            <div className="hero-overlay hero-overlay-emerald"></div>
          </div>

          <div className="hero-container-wide">
            <div className="hero-grid-2col">
              
              {/* Left Column */}
              <div className="hero-content-col">
                <div className="hero-badge">
                  <Layers size={14} className="gold-icon" />
                  <span>Textile Sourcing &bull; 6 Core Fabric Families &bull; 27 Mill Weaves</span>
                </div>

                <h1 className="hero-headline">
                  PREMIUM <span className="highlight-yellow">FABRICS &amp; TEXTILES</span> SUPPLY
                </h1>

                <p className="hero-subheading">
                  Mill-direct fabric sourcing and inventory coordination supporting high-volume garment manufacturing. Verified GSM, high tensile strength, colorfastness Grade 4+, and zero AZO compliance across 6 core commercial textile categories.
                </p>

                {/* Key Fabric Types Highlights */}
                <div className="hero-subcategories-scroller">
                  <span className="hero-subcat-badge">Cotton Poplin &amp; Cambric</span>
                  <span className="hero-subcat-badge">Rayon &amp; Viscose Slub</span>
                  <span className="hero-subcat-badge">Poly Georgette &amp; Satin</span>
                  <span className="hero-subcat-badge">Moss Crepe</span>
                  <span className="hero-subcat-badge">Cotton-Linen</span>
                  <span className="hero-subcat-badge">Rib Knit &amp; Interlock</span>
                  <span className="hero-subcat-badge">Stretch Denim</span>
                </div>

                <div className="hero-actions">
                  <button 
                    type="button"
                    onClick={() => {
                      scrollToSection('our-products');
                      const fabricsBtn = document.getElementById('tab-btn-fabrics');
                      if (fabricsBtn) fabricsBtn.click();
                    }}
                    className="btn btn-accent btn-lg"
                  >
                    <span>Explore All Fabric Details</span>
                    <ArrowRight size={18} />
                  </button>

                  <button 
                    type="button" 
                    className="btn btn-secondary btn-lg hero-btn-secondary"
                    onClick={() => {
                      if (onInquire) onInquire("Mill-Direct Fabric Sourcing & Swatches Request");
                      onNavigate('contact');
                    }}
                  >
                    <span>Request Fabric Swatches</span>
                  </button>
                </div>

                <div className="hero-trust-note">
                  <Info size={14} />
                  <span>Supplying Cotton Poplin, Cambric, Twill, Rayon, Viscose Crepe, Poly Satin, Moss Crepe, Cotton-Linen, Rib Knit, and Heavy Denim.</span>
                </div>
              </div>

              {/* Right Column: 6 Fabric Category Cards from Excel Spreadsheet */}
              <div className="hero-showcase-col">
                <div className="hero-fabrics-cards-grid">
                  {FABRIC_CATEGORIES.map((fCat) => (
                    <div 
                      key={fCat.id} 
                      className="hero-fabric-card"
                      onClick={() => {
                        scrollToSection('our-products');
                        const fabricsBtn = document.getElementById('tab-btn-fabrics');
                        if (fabricsBtn) fabricsBtn.click();
                      }}
                      role="button"
                      tabIndex={0}
                    >
                      <div className="hero-fabric-card-top">
                        <span className="hero-fabric-card-num">{fCat.number}</span>
                        <h4 className="hero-fabric-card-name">{fCat.name}</h4>
                        <span className="hero-fabric-card-badge">{fCat.badge}</span>
                      </div>
                      
                      <div className="hero-fabric-varieties-list">
                        {fCat.varieties.map((v, i) => (
                          <span key={v.slug || i} className="hero-fabric-chip">
                            {v.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Outer Arrow Navigation (Visible on wider desktop viewports) */}
      <button 
        type="button" 
        className="hero-arrow-btn hero-arrow-prev"
        onClick={handlePrev}
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button 
        type="button" 
        className="hero-arrow-btn hero-arrow-next"
        onClick={handleNext}
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Bottom Pagination & Arrow Controls Bar (Never overlaps text) */}
      <div className="hero-bottom-controls-bar">
        <button 
          type="button" 
          className="hero-bottom-arrow-btn"
          onClick={handlePrev}
          aria-label="Previous Slide"
          title="Previous Slide"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="hero-carousel-dots" role="tablist" aria-label="Hero carousel pagination">
          <button
            type="button"
            role="tab"
            aria-selected={currentSlide === 0}
            className={`hero-dot ${currentSlide === 0 ? 'active' : ''}`}
            onClick={() => goToSlide(0)}
            aria-label="Slide 1: Myntra Top Brands Partner"
          >
            <span className="dot-label">01. Myntra Partner</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={currentSlide === 1}
            className={`hero-dot ${currentSlide === 1 ? 'active' : ''}`}
            onClick={() => goToSlide(1)}
            aria-label="Slide 2: 11 Apparel Categories & 88 Styles"
          >
            <span className="dot-label">02. 88 Apparel Styles</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={currentSlide === 2}
            className={`hero-dot ${currentSlide === 2 ? 'active' : ''}`}
            onClick={() => goToSlide(2)}
            aria-label="Slide 3: 6 Fabric Categories & 27 Varieties"
          >
            <span className="dot-label">03. Fabric Details</span>
          </button>
        </div>

        <button 
          type="button" 
          className="hero-bottom-arrow-btn"
          onClick={handleNext}
          aria-label="Next Slide"
          title="Next Slide"
        >
          <ChevronRight size={18} />
        </button>
      </div>

    </section>
  );
}
