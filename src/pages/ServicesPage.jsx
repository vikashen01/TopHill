import React from 'react';
import { 
  Scissors, 
  Camera, 
  Store, 
  Truck, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  FileText, 
  Layers, 
  Tag, 
  ShieldCheck, 
  Sparkles,
  PackageCheck
} from 'lucide-react';
import TopBrandsShowcase from '../components/TopBrandsShowcase';

export default function ServicesPage({ navigateTo, setInquiryType }) {
  const handleNavToContact = (serviceType) => {
    if (setInquiryType) {
      setInquiryType(serviceType);
    }
    navigateTo('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page-services animate-fade-in">
      {/* Page Header */}
      <section className="page-hero-banner">
        <div className="site-container">
          <div className="page-hero-content">
            <span className="section-tag">Structured Solutions</span>
            <h1 className="page-hero-title">Our Services</h1>
            <p className="page-hero-subtitle">
              Comprehensive garment business support spanning manufacturing coordination for top Myntra brands, catalog preparation, Myntra onboarding to QC pass, and operational management.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Quick Jump */}
      <div className="services-jump-bar">
        <div className="site-container jump-inner">
          <span className="jump-title">Quick Jump:</span>
          <div className="jump-links">
            <a href="#service-manufacturing" className="jump-pill">Manufacturing Coordination</a>
            <a href="#service-catalog" className="jump-pill">Photography &amp; Catalog</a>
            <a href="#service-myntra-qc" className="jump-pill">Myntra Onboarding to QC Pass</a>
            <a href="#service-operations" className="jump-pill">Business Operations</a>
          </div>
        </div>
      </div>

      {/* Top Brands Showcase */}
      <TopBrandsShowcase 
        onExplorePlans={() => navigateTo('plans')}
        onInquire={() => handleNavToContact('Garment Manufacturing Coordination')}
      />

      {/* =========================================================================
          SERVICE A: GARMENT MANUFACTURING COORDINATION
          ========================================================================= */}
      <section className="service-detail-section section-spacing bg-white" id="service-manufacturing">
        <div className="site-container">
          <div className="service-layout-grid">
            <div className="service-content-col">
              <div className="service-badge">
                <Scissors size={18} />
                <span>Service Pillar 01</span>
              </div>
              <h2 className="service-heading">Garment Manufacturing Coordination</h2>
              
              <p className="service-lead">
                Manufacturing coordination for top private brands of Myntra — including <strong>Roadster, DressBerry, Moda Rapido, CORSICA, Mast &amp; Harbour, Here &amp; NOW, and Baesd</strong> across Fashion, Beauty, Lifestyle &amp; More categories.
              </p>

              <p className="service-desc">
                When included in the agreed scope, TopHill Textile Pvt. Ltd. assists with translating brand design requirements and tech-packs into executable production workflows. We liaise between our clients and specialized manufacturing partners, tracking apparel development milestones with rigorous adherence to Myntra quality benchmarks.
              </p>

              <div className="service-deliverables">
                <h4 className="deliverables-heading">What This Service Coordinates:</h4>
                <div className="deliverable-item">
                  <CheckCircle2 size={18} className="deliv-icon" />
                  <div>
                    <strong>Top Myntra Brand Specifications:</strong>
                    <p>Reviewing tech packs, stitch densities, size grading parameters, and silhouette specifications for Roadster, DressBerry, Moda Rapido, CORSICA, Mast &amp; Harbour, Here &amp; NOW, and Baesd.</p>
                  </div>
                </div>

                <div className="deliverable-item">
                  <CheckCircle2 size={18} className="deliv-icon" />
                  <div>
                    <strong>Fabrics, Blends &amp; Trims:</strong>
                    <p>Coordinating fabric quality inspection, GSM testing, lab-dip color approvals, buttons, zips, wash treatments, and hang-tags.</p>
                  </div>
                </div>

                <div className="deliverable-item">
                  <CheckCircle2 size={18} className="deliv-icon" />
                  <div>
                    <strong>Production Communication &amp; Quality Checkpoints:</strong>
                    <p>Facilitating regular production updates, monitoring lead times, and scheduling batch reviews prior to packaging.</p>
                  </div>
                </div>
              </div>

              <div className="service-action-wrap">
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={() => handleNavToContact('Garment Manufacturing Coordination')}
                >
                  <span>Inquire Regarding Manufacturing Coordination</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="service-media-col">
              <div className="service-image-card">
                <img 
                  src="/images/garment-production.jpg" 
                  alt="Garment fabric inspection and production review" 
                  className="service-feature-img"
                />
                <div className="service-image-caption">
                  <span className="caption-bold">Production Governance:</span>
                  <span> Ensuring style specifications match top brand requirements through regular status tracking.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SERVICE B: PRODUCT PHOTOGRAPHY & CATALOG PREPARATION
          ========================================================================= */}
      <section className="service-detail-section section-spacing bg-beige" id="service-catalog">
        <div className="site-container">
          <div className="service-layout-grid reverse-grid">
            <div className="service-media-col">
              <div className="service-image-card">
                <img 
                  src="/images/catalog-photography.jpg" 
                  alt="Professional apparel photography studio with mannequin and softboxes" 
                  className="service-feature-img"
                />
                <div className="service-image-caption">
                  <span className="caption-bold">Catalog Rigor:</span>
                  <span> Crisp high-resolution visuals aligned with Myntra-specific color, crop, and lighting requirements.</span>
                </div>
              </div>
            </div>

            <div className="service-content-col">
              <div className="service-badge">
                <Camera size={18} />
                <span>Service Pillar 02</span>
              </div>
              <h2 className="service-heading">Product Photography &amp; Catalog Preparation</h2>
              
              <p className="service-lead">
                Organizing high-standard visual presentation, exact fabric details, sizing matrices, and descriptive catalog copy ready for publication.
              </p>

              <p className="service-desc">
                High-quality visual and technical product presentation is critical to customer confidence and low return rates in the apparel sector. We support brands by coordinating professional apparel photography and assembling comprehensive catalog sheets.
              </p>

              <div className="service-deliverables">
                <h4 className="deliverables-heading">Key Catalog Support Elements:</h4>
                <div className="deliverable-item">
                  <CheckCircle2 size={18} className="deliv-icon" />
                  <div>
                    <strong>Product Photography Coordination:</strong>
                    <p>Arranging flat-lay, ghost mannequin, or model photography adhering to Myntra neutral background standards.</p>
                  </div>
                </div>

                <div className="deliverable-item">
                  <CheckCircle2 size={18} className="deliv-icon" />
                  <div>
                    <strong>Garment Descriptions &amp; Attributes:</strong>
                    <p>Drafting clear, factual descriptions detailing weave, silhouette, neck design, sleeve length, care instructions, and closure types.</p>
                  </div>
                </div>

                <div className="deliverable-item">
                  <CheckCircle2 size={18} className="deliv-icon" />
                  <div>
                    <strong>Accurate Size &amp; Colour Matrices:</strong>
                    <p>Structuring standardized measurement charts (chest, waist, inseam, length) and verified colour variants to pass Myntra QC.</p>
                  </div>
                </div>
              </div>

              <div className="service-action-wrap">
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={() => handleNavToContact('Product Photography and Catalog Preparation')}
                >
                  <span>Inquire Regarding Catalog Preparation</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SERVICE C: MYNTRA ONBOARDING TO QC PASS (Second Change)
          ========================================================================= */}
      <section className="service-detail-section section-spacing bg-white" id="service-myntra-qc">
        <div className="site-container">
          <div className="service-layout-grid">
            <div className="service-content-col">
              <div className="service-badge">
                <Store size={18} />
                <span>Service Pillar 03</span>
              </div>
              <h2 className="service-heading">Myntra Onboarding to QC Pass</h2>
              
              <p className="service-lead">
                Dedicated operational assistance specialized exclusively on Myntra — managing seller onboarding checklists, brand authorization documentation, category attribute flat files, and Quality Control (QC) clearance.
              </p>

              <p className="service-desc">
                Myntra enforces rigorous onboarding criteria and quality benchmarks. We provide end-to-end operational guidance to prepare, format, audit, and submit your brand's listing data to achieve seamless Quality Control (QC) approval.
              </p>

              <div className="service-deliverables">
                <h4 className="deliverables-heading">Areas of Myntra Listing &amp; QC Guidance:</h4>
                <div className="deliverable-item">
                  <CheckCircle2 size={18} className="deliv-icon" />
                  <div>
                    <strong>Seller Onboarding Documentation:</strong>
                    <p>Guidance on organizing required business documents, GST registration, trademark certificates, and brand authorization letters.</p>
                  </div>
                </div>

                <div className="deliverable-item">
                  <CheckCircle2 size={18} className="deliv-icon" />
                  <div>
                    <strong>Myntra Category Template Ingestion:</strong>
                    <p>Compiling inventory upload flat files, HSN codes, tax slabs, MRP/selling prices, and backend search keywords in Myntra format.</p>
                  </div>
                </div>

                <div className="deliverable-item">
                  <CheckCircle2 size={18} className="deliv-icon" />
                  <div>
                    <strong>QC Pass Clearance &amp; Image Audits:</strong>
                    <p>Pre-submission verification of image resolutions, crop ratios, margin padding, and restricted keyword avoidance to ensure first-time QC pass.</p>
                  </div>
                </div>
              </div>

              <div className="scope-notice-card" style={{ borderColor: 'var(--color-primary)' }}>
                <ShieldCheck size={20} className="notice-icon" style={{ color: 'var(--color-primary)' }} />
                <p>
                  <strong>Exclusive Myntra Focus:</strong> Our listing assistance is specialized exclusively on Myntra. We guide you through every milestone until your catalog successfully achieves Quality Control (QC) pass.
                </p>
              </div>

              <div className="service-action-wrap">
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={() => handleNavToContact('Myntra Onboarding to QC Pass')}
                >
                  <span>Inquire Regarding Myntra Onboarding to QC Pass</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="service-media-col">
              <div className="service-image-card">
                <img 
                  src="/images/hero-banner.jpg" 
                  alt="Organized textile rolls and apparel catalog planning studio" 
                  className="service-feature-img"
                />
                <div className="service-image-caption">
                  <span className="caption-bold">Myntra QC Expertise:</span>
                  <span> Eliminating formatting rejections through systematic pre-submission audits.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SERVICE D: BUSINESS OPERATIONS SUPPORT
          ========================================================================= */}
      <section className="service-detail-section section-spacing bg-beige" id="service-operations">
        <div className="site-container">
          <div className="service-layout-grid reverse-grid">
            <div className="service-media-col">
              <div className="service-image-card">
                <img 
                  src="/images/operations-logistics.jpg" 
                  alt="Modern clean apparel warehouse with organized packaging and inventory dispatch" 
                  className="service-feature-img"
                />
                <div className="service-image-caption">
                  <span className="caption-bold">Operations Discipline:</span>
                  <span> Systematic inventory tagging, standardized polybag packaging, and dispatch tracking.</span>
                </div>
              </div>
            </div>

            <div className="service-content-col">
              <div className="service-badge">
                <Truck size={18} />
                <span>Service Pillar 04</span>
              </div>
              <h2 className="service-heading">Business Operations Support</h2>
              
              <p className="service-lead">
                Coordination support for inventory sorting, packaging adherence, order communication, and dispatch milestones based on agreed arrangements.
              </p>

              <p className="service-desc">
                After garments are manufactured and cataloged, sustaining smooth fulfillment requires reliable operational follow-through. We support clients with the operational coordination required to keep inventory sorted, packaged to standard, and dispatched punctually.
              </p>

              <div className="service-deliverables">
                <h4 className="deliverables-heading">Operational Support Areas:</h4>
                <div className="deliverable-item">
                  <CheckCircle2 size={18} className="deliv-icon" />
                  <div>
                    <strong>Inventory &amp; SKU Coordination:</strong>
                    <p>Assistance with barcode labeling, size-wise SKU sorting, and batch reconciliation against production manifests.</p>
                  </div>
                </div>

                <div className="deliverable-item">
                  <CheckCircle2 size={18} className="deliv-icon" />
                  <div>
                    <strong>Packaging &amp; Barcode Adherence:</strong>
                    <p>Guidance on moisture-resistant polybag packing, hang tags, carton labeling, and marketplace-compliant shipping labels.</p>
                  </div>
                </div>

                <div className="deliverable-item">
                  <CheckCircle2 size={18} className="deliv-icon" />
                  <div>
                    <strong>Dispatch &amp; Courier Communication:</strong>
                    <p>Coordinating pickup windows, preparing manifest sheets, and facilitating status communication with logistics carriers.</p>
                  </div>
                </div>
              </div>

              <div className="service-action-wrap">
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={() => handleNavToContact('Business Operations Support')}
                >
                  <span>Inquire Regarding Operations Support</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary CTA Box */}
      <section className="section-spacing bg-white text-center">
        <div className="site-container-narrow">
          <span className="section-tag">Custom Engagements</span>
          <h2 className="section-title">Ready to Sell Top Brands on Myntra?</h2>
          <p style={{ maxWidth: '640px', margin: '0 auto 2.2rem auto' }}>
            Explore our structured Basic, Premium, or Enterprise Myntra Growth Plans designed to scale your apparel business.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              type="button" 
              className="btn btn-primary btn-lg"
              onClick={() => navigateTo('plans')}
            >
              <span>View Myntra Business Plans</span>
              <ArrowRight size={18} />
            </button>
            <button 
              type="button" 
              className="btn btn-secondary btn-lg"
              onClick={() => handleNavToContact('General Inquiry')}
            >
              <span>Submit a Project Inquiry</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
