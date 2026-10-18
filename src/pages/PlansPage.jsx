import React from 'react';
import MyntraPlans from '../components/MyntraPlans';
import TopBrandsShowcase from '../components/TopBrandsShowcase';
import { Sparkles, ArrowRight, ShieldCheck, Tag } from 'lucide-react';

export default function PlansPage({ navigateTo, onSelectPlan }) {
  return (
    <div className="page-plans animate-fade-in">
      {/* Page Hero */}
      <section className="page-hero-banner">
        <div className="site-container">
          <div className="page-hero-content">
            <span className="section-tag">Scaling Your Business, Together</span>
            <h1 className="page-hero-title">Myntra Business Growth Plans</h1>
            <p className="page-hero-subtitle">
              Structured partnership plans to sell top private brands on Myntra — including production, listing assistance, and dedicated eCommerce sales support.
            </p>
          </div>
        </div>
      </section>

      {/* Top Brands Showcase */}
      <TopBrandsShowcase 
        onExplorePlans={() => {
          const el = document.getElementById('myntra-plans');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onInquire={() => navigateTo('contact')}
      />

      {/* Main Interactive Plans Section */}
      <MyntraPlans onSelectPlan={onSelectPlan} />

      {/* Additional FAQ / Information */}
      <section className="section-spacing bg-beige">
        <div className="site-container-narrow">
          <div className="section-header">
            <div className="section-tag tag-gold">Plan Details &amp; Governance</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-description">
              Clear information regarding our Myntra growth plans and garment manufacturing arrangements.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div className="corporate-card" style={{ padding: '1.75rem' }}>
              <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                Which brands are included in the manufacturing scope?
              </h4>
              <p style={{ margin: 0 }}>
                We manufacture clothes for top brands of Myntra including <strong>Roadster</strong>, <strong>DressBerry</strong>, <strong>Moda Rapido</strong>, <strong>CORSICA</strong>, <strong>Mast &amp; Harbour</strong>, <strong>Here &amp; NOW</strong>, and <strong>Baesd</strong> across Fashion, Beauty, Lifestyle &amp; More categories.
              </p>
            </div>

            <div className="corporate-card" style={{ padding: '1.75rem' }}>
              <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                How does the inquiry process work when I select a plan?
              </h4>
              <p style={{ margin: 0 }}>
                Selecting any plan (Basic, Premium, or Enterprise) directs you immediately to our business inquiry form with your chosen plan details pre-populated. Our team at Sector 63, Noida will review your requirements and connect with you within 24–48 hours.
              </p>
            </div>

            <div className="corporate-card" style={{ padding: '1.75rem' }}>
              <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                What is included in "Myntra Onboarding to QC Pass"?
              </h4>
              <p style={{ margin: 0 }}>
                We guide you through the entire onboarding lifecycle: brand authorization paperwork, category attribute flat file preparation, photography audit, and clearing Myntra's stringent Quality Control (QC) checks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
