import React from 'react';
import { 
  Scissors, 
  Camera, 
  Store, 
  Truck, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  MessageSquare,
  Sparkles,
  Info,
  Tag
} from 'lucide-react';
import TopBrandsShowcase from '../components/TopBrandsShowcase';
import MyntraPlans from '../components/MyntraPlans';
import OurProductsSection from '../components/OurProductsSection';

export default function HomePage({ navigateTo, onSelectPlan, setInquiryType }) {
  const handleNav = (routeId) => {
    navigateTo(routeId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      id: 'manufacturing',
      title: 'Garment Manufacturing Coordination',
      icon: Scissors,
      desc: 'Support with garment requirements, production coordination, and communication related to apparel development for top Myntra brands.',
      highlights: ['Style & tech-pack review', 'Fabric & trim sourcing', 'Batch production communication']
    },
    {
      id: 'catalog',
      title: 'Product Photography & Catalog Preparation',
      icon: Camera,
      desc: 'Support with product presentation, photography coordination, descriptions, and catalog preparation aligned with Myntra standards.',
      highlights: ['Visual presentation', 'Garment specifications', 'Accurate size & colour matrices']
    },
    {
      id: 'myntra-qc',
      title: 'Myntra Onboarding to QC Pass',
      icon: Store,
      desc: 'Complete assistance with seller onboarding documentation, brand authorization, listing templates, and Quality Control (QC) clearance.',
      highlights: ['Brand authorization review', 'Myntra flat file templates', 'Strict QC pass assistance']
    },
    {
      id: 'operations',
      title: 'Business Operations Support',
      icon: Truck,
      desc: 'Coordination support for relevant inventory, packaging, and fulfilment activities, according to the agreed business arrangement.',
      highlights: ['Barcode labeling adherence', 'Standardized polybag packing', 'Dispatch communication']
    }
  ];

  const benefits = [
    {
      title: 'Organized Business Coordination',
      desc: 'Structured project workflows designed to keep apparel development, timelines, and communications aligned and orderly.',
      icon: Layers
    },
    {
      title: 'Product Presentation Support',
      desc: 'Careful attention to photography coordination, specifications, color details, and accurate product catalog assets.',
      icon: Camera
    },
    {
      title: 'Myntra Specialized Process',
      desc: 'Specialized focus on Myntra category guidelines, brand registry, and Quality Control (QC) pass requirements.',
      icon: ShieldCheck
    },
    {
      title: 'Clear Communication & Support',
      desc: 'Transparent scopes, defined deliverables, and consistent updates tailored to each client’s operational agreement.',
      icon: MessageSquare
    }
  ];

  const workflowSteps = [
    { num: '01', title: 'Understand Requirements', desc: 'Detailed discussion of styles, volumes, target criteria, and operating scope.' },
    { num: '02', title: 'Coordinate Production', desc: 'Facilitating communications with manufacturing partners for sampling and production runs.' },
    { num: '03', title: 'Prepare Catalog', desc: 'Organizing professional images, descriptions, size charts, and listing attributes.' },
    { num: '04', title: 'Myntra Onboarding & QC', desc: 'Preparing seller documentation and compliance data for Myntra QC pass.' },
    { num: '05', title: 'Coordinate Operations', desc: 'Aligning packaging standards, dispatch milestones, and fulfillment coordination.' }
  ];

  return (
    <div className="page-home animate-fade-in">
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="hero-section">
        <div className="hero-backdrop-container">
          <img 
            src="/images/hero-banner.jpg" 
            alt="Modern garment manufacturing studio and apparel production coordination workspace" 
            className="hero-backdrop-img"
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="site-container hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={14} className="gold-icon" />
              <span>Garment Business Operations &bull; Fashion, Beauty, Lifestyle &amp; More</span>
            </div>

            {/* Seventh Change: BECOME A PARTNER WITH TOP BRANDS ON MYNTRA (PARTNER in highlighted yellow) */}
            <h1 className="hero-headline">
              BECOME A <span className="highlight-yellow">PARTNER</span> WITH TOP BRANDS ON MYNTRA
            </h1>

            {/* Sixth Change: Comprehensive value proposition */}
            <p className="hero-subheading">
              A structured, reliable partner coordinating garment production, catalog preparation, Myntra onboarding to QC pass, and operational execution. We manufacture clothes for top brands of Myntra including <strong>Roadster</strong>, <strong>DressBerry</strong>, <strong>Moda Rapido</strong>, <strong>CORSICA</strong>, <strong>Mast &amp; Harbour</strong>, <strong>Here &amp; NOW</strong>, and <strong>Baesd</strong>.
            </p>

            <div className="hero-actions">
              <a 
                href="#myntra-plans"
                className="btn btn-accent btn-lg"
              >
                <span>View Growth Plans</span>
                <ArrowRight size={18} />
              </a>

              <button 
                type="button" 
                className="btn btn-secondary btn-lg hero-btn-secondary"
                onClick={() => handleNav('contact')}
              >
                <span>Contact Us</span>
              </button>
            </div>

            {/* Quick Transparency Note */}
            <div className="hero-trust-note">
              <Info size={14} />
              <span>Listing assistance is specialized exclusively on Myntra from onboarding to QC pass. Category of clothes manufactured: Fashion, Beauty, Lifestyle &amp; More.</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          TOP MYNTRA BRANDS SHOWCASE SECTION (Sixth Change)
          ========================================================================= */}
      <TopBrandsShowcase 
        onExplorePlans={() => {
          const el = document.getElementById('myntra-plans');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onInquire={() => handleNav('contact')}
      />

      {/* =========================================================================
          OUR PRODUCTS SECTION
          1. Women Garments 2. Grey Fabrics 3. Denim 4. Woven Fabrics 5. Cotton Fabrics
          ========================================================================= */}
      <OurProductsSection 
        onInquire={(subject) => {
          if (setInquiryType) setInquiryType(subject);
          handleNav('contact');
        }}
      />

      {/* =========================================================================
          MYNTRA BUSINESS PLANS SECTION (Third Change)
          ========================================================================= */}
      <MyntraPlans onSelectPlan={onSelectPlan} />

      {/* =========================================================================
          COMPANY INTRODUCTION
          ========================================================================= */}
      <section className="section-spacing bg-white">
        <div className="site-container">
          <div className="intro-grid">
            <div className="intro-text-col">
              <div className="section-tag">Corporate Profile</div>
              <h2 className="section-title">About TopHill Textile</h2>
              
              <p className="intro-lead">
                TopHill Textile is focused on supporting garment-related business activities through a structured approach to production coordination, product presentation, and Myntra marketplace operations. Our services are designed around the requirements of each business engagement.
              </p>

              <p className="intro-paragraph">
                A structured, reliable partner coordinating garment production, catalog preparation, Myntra onboarding to QC pass, and operational execution. We manufacture clothes for top private brands of Myntra across the Fashion, Beauty, Lifestyle &amp; More categories.
              </p>

              <div className="intro-features-list">
                <div className="intro-feature-item">
                  <CheckCircle2 size={20} className="feature-icon" />
                  <div>
                    <strong>Top Myntra Brand Manufacturing:</strong>
                    <span> Manufacturing coordination for Roadster, DressBerry, Moda Rapido, CORSICA, Mast &amp; Harbour, Here &amp; NOW, and Baesd.</span>
                  </div>
                </div>

                <div className="intro-feature-item">
                  <CheckCircle2 size={20} className="feature-icon" />
                  <div>
                    <strong>Myntra Onboarding to QC Pass:</strong>
                    <span> Dedicated guidance through Myntra brand authorization, flat file ingestion, and strict quality control standards.</span>
                  </div>
                </div>

                <div className="intro-feature-item">
                  <CheckCircle2 size={20} className="feature-icon" />
                  <div>
                    <strong>Verified Corporate Base:</strong>
                    <span> Headquartered at Sector 63, Noida, Uttar Pradesh (GSTIN: 09AAMCT5200E1ZH).</span>
                  </div>
                </div>
              </div>

              <div className="intro-action">
                <button 
                  type="button" 
                  className="btn btn-outline-burgundy"
                  onClick={() => handleNav('about')}
                >
                  <span>Read Full Company Profile</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="intro-media-col">
              <div className="intro-image-frame">
                <img 
                  src="/images/garment-production.jpg" 
                  alt="Textile quality inspection and garment production coordination"
                  className="intro-image" 
                />
                <div className="intro-floating-badge">
                  <span className="badge-number">7+</span>
                  <span className="badge-text">Top Myntra Brands Manufactured &bull; Fashion &amp; Lifestyle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SERVICES OVERVIEW
          ========================================================================= */}
      <section className="section-spacing bg-beige">
        <div className="site-container">
          <div className="section-header">
            <div className="section-tag">Core Capabilities</div>
            <h2 className="section-title">Our Garment Support Services</h2>
            <p className="section-description">
              Professional coordination services designed to support every crucial operational stage of an apparel business.
            </p>
          </div>

          <div className="services-cards-grid">
            {services.map((service) => {
              const IconComp = service.icon;
              return (
                <div key={service.id} className="corporate-card service-card">
                  <div className="card-icon-wrap">
                    <IconComp size={28} />
                  </div>

                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-desc">{service.desc}</p>

                  <ul className="service-highlights-list">
                    {service.highlights.map((item, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={15} className="highlight-bullet" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="service-card-footer">
                    <button 
                      type="button" 
                      className="service-link-btn"
                      onClick={() => handleNav('services')}
                    >
                      <span>Learn More</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="services-bottom-cta">
            <p>Ready to sell top brands on Myntra with structured business plans?</p>
            <button 
              type="button" 
              className="btn btn-primary btn-sm"
              onClick={() => handleNav('plans')}
            >
              <span>Explore Myntra Growth Plans</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHY WORK WITH US?
          ========================================================================= */}
      <section className="section-spacing bg-white">
        <div className="site-container">
          <div className="section-header">
            <div className="section-tag tag-gold">The TopHill Advantage</div>
            <h2 className="section-title">A Structured Approach to Garment Business Support</h2>
            <p className="section-description">
              We focus on clarity, accountability, and dependable coordination so your team can manage apparel operations smoothly.
            </p>
          </div>

          <div className="benefits-grid">
            {benefits.map((b, idx) => {
              const BenefitIcon = b.icon;
              return (
                <div key={idx} className="benefit-card">
                  <div className="benefit-icon-box">
                    <BenefitIcon size={24} />
                  </div>
                  <h4 className="benefit-title">{b.title}</h4>
                  <p className="benefit-desc">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          BUSINESS PROCESS PREVIEW
          ========================================================================= */}
      <section className="section-spacing bg-beige">
        <div className="site-container">
          <div className="section-header">
            <div className="section-tag">How Engagements Work</div>
            <h2 className="section-title">Business Process Preview</h2>
            <p className="section-description">
              A transparent, step-by-step roadmap from initial discussions to Myntra QC pass and operational coordination.
            </p>
          </div>

          <div className="process-preview-track">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="process-preview-step">
                <div className="step-num-pill">{step.num}</div>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="process-preview-note">
            <p>
              <em>Note: The exact sequence, milestones, and deliverables depend upon each customer's specific commercial arrangement and Myntra onboarding criteria.</em>
            </p>
            <button 
              type="button" 
              className="btn btn-outline-burgundy btn-sm"
              style={{ marginTop: '1.25rem' }}
              onClick={() => handleNav('process')}
            >
              <span>View Full 6-Step Process &amp; Timelines</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FINAL CALL TO ACTION
          ========================================================================= */}
      <section className="final-cta-section">
        <div className="site-container">
          <div className="final-cta-box">
            <div className="final-cta-text">
              <span className="cta-subtag">Connect With TopHill Textile</span>
              <h2 className="cta-heading">Looking for Garment Business Support?</h2>
              <p className="cta-description">
                Get in touch with TopHill Textile Pvt. Ltd. to discuss your requirements and learn how to become a partner with top brands on Myntra.
              </p>
            </div>

            <div className="final-cta-action">
              <button 
                type="button" 
                className="btn btn-accent btn-lg"
                onClick={() => handleNav('contact')}
              >
                <span>Contact Our Team</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
