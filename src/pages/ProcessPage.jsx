import React from 'react';
import { 
  MessageSquare, 
  FileSpreadsheet, 
  Scissors, 
  Camera, 
  Store, 
  Truck, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import TopBrandsShowcase from '../components/TopBrandsShowcase';

export default function ProcessPage({ navigateTo }) {
  const handleNav = (routeId) => {
    navigateTo(routeId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const steps = [
    {
      stepNum: '01',
      title: 'Initial Discussion',
      subtitle: 'Understanding Objectives & Requirements',
      icon: MessageSquare,
      summary: 'Understand the customer\'s garment requirements, objectives, and chosen Myntra growth plan.',
      details: [
        'Comprehensive discussion of apparel categories across Fashion, Beauty, Lifestyle & More.',
        'Review of target volumes, quality standards, and anticipated launch deadlines.',
        'Alignment on top Myntra brands (Roadster, DressBerry, Moda Rapido, CORSICA, Mast & Harbour, Here & NOW, Baesd) or custom private labels.'
      ],
      output: 'Documented requirement brief and plan alignment.'
    },
    {
      stepNum: '02',
      title: 'Requirements and Quotation',
      subtitle: 'Scope Definition, Timelines & Agreement',
      icon: FileSpreadsheet,
      summary: 'Discuss the required services, garment specifications, estimated costs, responsibilities, and timelines.',
      details: [
        'Selection of plan scope (Basic ₹10L / 30 SKU, Premium ₹25L / 100 SKU, Enterprise ₹50L / 300 SKU).',
        'Definition of tech packs, fabric compositions, trims, and packaging standards.',
        'Transparent cost breakdown, milestone payment structures, and defined delivery schedules.'
      ],
      output: 'Signed service agreement and defined project milestone schedule.'
    },
    {
      stepNum: '03',
      title: 'Production Coordination',
      subtitle: 'Sampling, Fabric Sourcing & Manufacturing Liaison',
      icon: Scissors,
      summary: 'Coordinate garment-related production activities according to the agreed scope.',
      details: [
        'Facilitating sample piece development and fit validation with production teams.',
        'Tracking raw fabric arrivals, lab-dip approvals, and bulk manufacturing progress.',
        'Maintaining structured status updates and communicating batch progress reports.'
      ],
      output: 'Approved production samples and coordinated manufacturing output.'
    },
    {
      stepNum: '04',
      title: 'Product Catalog Preparation',
      subtitle: 'Visual Capture, Specifications & Data Sheet Compilation',
      icon: Camera,
      summary: 'Organize product images, descriptions, sizes, colours, and other relevant listing information.',
      details: [
        'Arranging studio photoshoot adhering to standard Myntra background and lighting requirements.',
        'Drafting accurate, non-misleading garment descriptions detailing silhouette, fabric, and wash care.',
        'Creating comprehensive size charts and measurement tables for client review and verification.'
      ],
      output: 'Validated digital catalog package ready for Myntra flat file ingestion.'
    },
    {
      stepNum: '05',
      title: 'Myntra Onboarding to QC Pass',
      subtitle: 'Documentation, Template Ingestion & QC Clearance',
      icon: Store,
      summary: 'Assist with applicable seller documentation, brand authorization, and achieving Quality Control (QC) pass.',
      details: [
        'Guiding client on required GST, trademark certificates, and brand authorization documentation.',
        'Preparing Myntra category upload spreadsheets and attribute mappings aligned with Myntra standards.',
        'Pre-submission audit of images and attributes to secure flawless Myntra QC pass.'
      ],
      output: 'Complete Myntra listing files submitted and Quality Control (QC) clearance achieved.'
    },
    {
      stepNum: '06',
      title: 'Operational Coordination',
      subtitle: 'Sorting, Packaging Adherence & Dispatch Liaison',
      icon: Truck,
      summary: 'Coordinate relevant inventory, packaging, and dispatch activities according to the agreed arrangement.',
      details: [
        'Verifying individual garment polybag packaging, SKU barcode labels, and master carton markings.',
        'Coordinating pickup window appointments and courier manifest documentation.',
        'Ongoing operational communication based on the established service contract.'
      ],
      output: 'Order dispatch synchronization and operational record keeping.'
    }
  ];

  return (
    <div className="page-process animate-fade-in">
      {/* Page Hero */}
      <section className="page-hero-banner">
        <div className="site-container">
          <div className="page-hero-content">
            <span className="section-tag">Engagement Roadmap</span>
            <h1 className="page-hero-title">Our Process</h1>
            <p className="page-hero-subtitle">
              A transparent, six-step framework ensuring structured collaboration from initial consultation to Myntra QC pass and operational fulfillment.
            </p>
          </div>
        </div>
      </section>

      {/* Main Process Timeline */}
      <section className="section-spacing bg-white">
        <div className="site-container">
          <div className="section-header">
            <div className="section-tag tag-gold">Structured Workflow</div>
            <h2 className="section-title">The 6-Step Collaboration Model</h2>
            <p className="section-description">
              Every phase is designed to establish clarity of scope, verified data, and diligent coordination for top Myntra brands.
            </p>
          </div>

          <div className="timeline-container">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div key={step.stepNum} className="timeline-item">
                  {/* Timeline Badge Column */}
                  <div className="timeline-badge-col">
                    <div className="timeline-number-circle">
                      <span>{step.stepNum}</span>
                    </div>
                    {idx < steps.length - 1 && <div className="timeline-line" />}
                  </div>

                  {/* Timeline Content Card */}
                  <div className="timeline-card">
                    <div className="timeline-card-header">
                      <div className="timeline-icon-box">
                        <StepIcon size={22} />
                      </div>
                      <div>
                        <span className="timeline-sub">{step.subtitle}</span>
                        <h3 className="timeline-title">Step {step.stepNum}: {step.title}</h3>
                      </div>
                    </div>

                    <p className="timeline-summary">{step.summary}</p>

                    <div className="timeline-details-list">
                      <h4 className="details-title">Key Activities in this Stage:</h4>
                      <ul>
                        {step.details.map((item, dIdx) => (
                          <li key={dIdx}>
                            <CheckCircle2 size={16} className="item-bullet" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="timeline-output-box">
                      <strong className="output-label">Stage Milestone / Output:</strong>
                      <span className="output-text">{step.output}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Top Brands Showcase */}
      <TopBrandsShowcase 
        onExplorePlans={() => handleNav('plans')}
        onInquire={() => handleNav('contact')}
      />

      {/* CTA Box */}
      <section className="section-spacing bg-white text-center">
        <div className="site-container-narrow">
          <span className="section-tag">Take the First Step</span>
          <h2 className="section-title">Schedule an Initial Discussion</h2>
          <p style={{ maxWidth: '640px', margin: '0 auto 2.5rem auto' }}>
            Learn how TopHill Textile Pvt. Ltd. can coordinate garment manufacturing and guide your brand from onboarding through Myntra QC pass.
          </p>
          <button 
            type="button" 
            className="btn btn-primary btn-lg"
            onClick={() => handleNav('contact')}
          >
            <span>Proceed to Step 01: Initial Discussion</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
