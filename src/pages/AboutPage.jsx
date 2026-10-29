import React from 'react';
import { 
  Building2, 
  MapPin, 
  Mail, 
  Phone, 
  FileCheck, 
  Layers, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Tag, 
  Sparkles 
} from 'lucide-react';
import { InstagramIcon as Instagram, FacebookIcon as Facebook } from '../components/SocialIcons';
import TopBrandsShowcase from '../components/TopBrandsShowcase';

export default function AboutPage({ navigateTo }) {
  const handleNav = (routeId) => {
    navigateTo(routeId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const workAreas = [
    {
      title: 'Garment Production Coordination for Top Myntra Brands',
      desc: 'Liaising with fabric suppliers and garment production partners to oversee sampling, sizing specifications, material alignments, and timeline management for top brands: Roadster, DressBerry, Moda Rapido, CORSICA, Mast & Harbour, Here & NOW, and Baesd.'
    },
    {
      title: 'Product Presentation & Catalog Preparation',
      desc: 'Coordinating high-standard garment photography, digital assets, product specifications, accurate sizing charts, and descriptive catalog content tailored to Myntra guidelines.'
    },
    {
      title: 'Myntra Onboarding to QC Pass',
      desc: 'Dedicated assistance specialized exclusively on Myntra: brand authorization documentation, seller onboarding, listing flat file templates, and clearing Quality Control (QC) pass checkpoints.'
    },
    {
      title: 'Brand Documentation Guidance',
      desc: 'Structuring essential business documentation, trademark authorization letters, quality declaration forms, and brand profile dossiers required by Myntra platform administrators.'
    },
    {
      title: 'Relevant Inventory & Fulfilment Coordination',
      desc: 'Assisting in setting up structured barcode labeling, standard packaging protocols, and inventory dispatch schedules aligned with agreed business terms.'
    }
  ];

  const approachPillars = [
    {
      num: '01',
      title: 'Understanding Customer Requirements',
      desc: 'Every apparel brand possesses distinct volume goals, aesthetic guidelines, and target timelines. We begin by thoroughly cataloging the client’s commercial scope before proposing any workflow.'
    },
    {
      num: '02',
      title: 'Communicating Scope & Expectations Clearly',
      desc: 'Transparency is paramount. We outline explicit boundaries of responsibility, avoiding vague assumptions regarding manufacturing capacities or marketplace onboarding criteria.'
    },
    {
      num: '03',
      title: 'Coordinating Relevant Business Activities',
      desc: 'We manage day-to-day coordination between fabric sources, pattern makers, photographers, and Myntra listing consoles with consistent checkpoints.'
    },
    {
      num: '04',
      title: 'Providing Support According to Agreed Terms',
      desc: 'Deliverables, milestones, and ongoing assistance strictly reflect the agreed scope of work, ensuring accountability and predictable operations.'
    }
  ];

  return (
    <div className="page-about animate-fade-in">
      {/* Page Header Banner */}
      <section className="page-hero-banner">
        <div className="site-container">
          <div className="page-hero-content">
            <span className="section-tag">About Our Business</span>
            <h1 className="page-hero-title">About TopHill Textile Pvt. Ltd.</h1>
            <p className="page-hero-subtitle">
              A structured, reliable partner coordinating garment production, catalog preparation, Myntra onboarding to QC pass, and operational execution.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          COMPANY INTRODUCTION
          ========================================================================= */}
      <section className="section-spacing bg-white">
        <div className="site-container">
          <div className="about-intro-split">
            <div className="about-intro-text">
              <div className="section-tag">Corporate Background</div>
              <h2 className="section-title">Partner with Top Brands on Myntra</h2>

              <p className="lead-text">
                TopHill Textile Pvt. Ltd. operates with a clear mandate: to assist garment brands, clothing enterprises, and textile merchants in manufacturing clothes for top brands of Myntra and managing complete onboarding through QC pass.
              </p>

              <p className="body-text">
                We coordinate garment manufacturing for India's foremost private apparel labels on Myntra, including <strong>Roadster</strong>, <strong>DressBerry</strong>, <strong>Moda Rapido</strong>, <strong>CORSICA</strong>, <strong>Mast &amp; Harbour</strong>, <strong>Here &amp; NOW</strong>, and <strong>Baesd</strong>. Our manufacturing capabilities span the <strong>Fashion, Beauty, Lifestyle &amp; More</strong> categories.
              </p>

              <p className="body-text">
                Rather than offering unverified promises or generic solutions, our model centers on clarity, scope fidelity, and professional coordination. Our listing assistance is specialized exclusively on Myntra, ensuring every product catalog meets Myntra's rigorous quality control and technical listing requirements.
              </p>

              <div className="approach-bullet-box">
                <div className="approach-bullet">
                  <CheckCircle2 size={18} className="bullet-icon" />
                  <span>Garment production coordination for top Myntra private labels.</span>
                </div>
                <div className="approach-bullet">
                  <CheckCircle2 size={18} className="bullet-icon" />
                  <span>Specialized listing assistance exclusively on Myntra (Onboarding to QC Pass).</span>
                </div>
                <div className="approach-bullet">
                  <CheckCircle2 size={18} className="bullet-icon" />
                  <span>Categories manufactured: Fashion, Beauty, Lifestyle &amp; More.</span>
                </div>
              </div>
            </div>

            <div className="about-intro-media">
              <div className="about-image-card">
                <img 
                  src="/images/catalog-photography.jpg" 
                  alt="Garment photography and digital catalog preparation studio" 
                  className="about-side-img"
                />
                <div className="about-caption-box">
                  <span className="caption-tag">Operations Philosophy</span>
                  <p className="caption-text">
                    "Precision in manufacturing, diligence in cataloging, and complete mastery of Myntra QC clearance."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Brands Showcase component */}
      <TopBrandsShowcase 
        onExplorePlans={() => handleNav('plans')}
        onInquire={() => handleNav('contact')}
      />

      {/* =========================================================================
          WHAT WE DO
          ========================================================================= */}
      <section className="section-spacing bg-white">
        <div className="site-container">
          <div className="section-header">
            <div className="section-tag">Scope of Activities</div>
            <h2 className="section-title">What We Do</h2>
            <p className="section-description">
              Our service model encompasses five dedicated operational areas designed to address specific needs in the garment business lifecycle.
            </p>
          </div>

          <div className="work-areas-grid">
            {workAreas.map((area, idx) => (
              <div key={idx} className="work-area-card">
                <div className="work-area-index">0{idx + 1}</div>
                <h3 className="work-area-title">{area.title}</h3>
                <p className="work-area-desc">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          OUR APPROACH
          ========================================================================= */}
      <section className="section-spacing bg-beige">
        <div className="site-container">
          <div className="section-header">
            <div className="section-tag tag-gold">Working Principles</div>
            <h2 className="section-title">Our Working Approach</h2>
            <p className="section-description">
              How we structure each client engagement from initial discussion to long-term operational support.
            </p>
          </div>

          <div className="approach-grid">
            {approachPillars.map((pillar) => (
              <div key={pillar.num} className="approach-card">
                <div className="approach-number-badge">{pillar.num}</div>
                <h3 className="approach-card-title">{pillar.title}</h3>
                <p className="approach-card-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          COMPANY INFORMATION (OFFICIAL VERIFIED DETAILS)
          ========================================================================= */}
      <section className="section-spacing bg-white" id="corporate-details">
        <div className="site-container">
          <div className="section-header">
            <div className="section-tag">Corporate Governance</div>
            <h2 className="section-title">Official Company Information</h2>
            <p className="section-description">
              Verified corporate credentials and registered office identification for TopHill Textile Pvt. Ltd.
            </p>
          </div>

          <div className="company-info-card">
            <div className="info-card-header">
              <div className="info-header-icon">
                <Building2 size={24} />
              </div>
              <div>
                <h3 className="info-header-title">TopHill Textile Pvt. Ltd.</h3>
                <p className="info-header-sub">Corporate Identification &amp; Office Credentials</p>
              </div>
              <div className="info-badge-verified">
                <ShieldCheck size={16} />
                <span>Verified Entity</span>
              </div>
            </div>

            <div className="info-fields-table">
              <div className="info-row">
                <div className="info-cell-label">Official Registered Name:</div>
                <div className="info-cell-value">
                  <strong>TopHill Textile Pvt. Ltd.</strong>
                  <span className="field-note">Incorporated under the Companies Act</span>
                </div>
              </div>

              <div className="info-row">
                <div className="info-cell-label">Registered Office Address:</div>
                <div className="info-cell-value">
                  <strong style={{ color: 'var(--color-primary)' }}>
                    Sector 63, Noida, Uttar Pradesh - 201301
                  </strong>
                  <span className="field-note">Industrial &amp; Corporate Hub, Noida, Gautam Buddha Nagar</span>
                </div>
              </div>

              <div className="info-row">
                <div className="info-cell-label">Goods &amp; Services Tax (GSTIN):</div>
                <div className="info-cell-value">
                  <span className="official-badge-text">09AAMCT5200E1ZH</span>
                  <span className="field-note">State of Uttar Pradesh (Code 09) Tax Registered</span>
                </div>
              </div>

              <div className="info-row">
                <div className="info-cell-label">Official Corporate Email:</div>
                <div className="info-cell-value">
                  <a href="mailto:tophilltextile26@gmail.com" style={{ fontWeight: 600, color: 'var(--color-primary)', textDecoration: 'underline' }}>
                    tophilltextile26@gmail.com
                  </a>
                  <span className="field-note">Mon – Sat (10:00 AM – 6:30 PM IST)</span>
                </div>
              </div>

              <div className="info-row">
                <div className="info-cell-label">Official Contact Number:</div>
                <div className="info-cell-value">
                  <a href="tel:+919315331798" style={{ fontWeight: 600, color: 'var(--color-primary)', textDecoration: 'underline' }}>
                    +91 93153 31798
                  </a>
                  <span className="field-note">Direct commercial coordination phone line</span>
                </div>
              </div>

              <div className="info-row">
                <div className="info-cell-label">Social Media Channels:</div>
                <div className="info-cell-value" style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                  <a 
                    href="https://www.instagram.com/tophill_textile/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#E1306C', display: 'inline-flex', alignItems: 'center', gap: '5px', fontWeight: 600 }}
                  >
                    <Instagram size={17} /> Instagram: @tophill_textile
                  </a>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61595064245118" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#1877F2', display: 'inline-flex', alignItems: 'center', gap: '5px', fontWeight: 600 }}
                  >
                    <Facebook size={17} /> Facebook: Top Hill
                  </a>
                </div>
              </div>
            </div>

            <div className="info-footer-note">
              <ShieldCheck size={16} />
              <span>
                <strong>Verified Business Credentials:</strong> TopHill Textile Pvt. Ltd. is officially registered with GSTIN 09AAMCT5200E1ZH at Sector 63, Noida.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Page CTA */}
      <section className="section-spacing bg-beige text-center">
        <div className="site-container-narrow">
          <h2 className="section-title">Ready to Partner With Top Brands on Myntra?</h2>
          <p style={{ marginBottom: '2rem' }}>
            Reach out to our coordination team with your product line and explore our Basic, Premium, or Enterprise Myntra growth plans.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              type="button" 
              className="btn btn-primary btn-lg"
              onClick={() => handleNav('plans')}
            >
              <span>Explore Myntra Business Plans</span>
              <ArrowRight size={18} />
            </button>
            <button 
              type="button" 
              className="btn btn-secondary btn-lg"
              onClick={() => handleNav('contact')}
            >
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
