import React, { useState } from 'react';
import { 
  Star, 
  Crown, 
  Building, 
  Package, 
  ShieldCheck, 
  Users, 
  Percent, 
  Camera, 
  TrendingUp, 
  Headphones, 
  Truck, 
  FileText, 
  Sparkles, 
  Gift, 
  ArrowRight, 
  CheckCircle2,
  Image as ImageIcon
} from 'lucide-react';

export default function MyntraPlans({ onSelectPlan }) {
  const [showGraphicModal, setShowGraphicModal] = useState(false);

  const plans = [
    {
      id: 'basic',
      name: 'BASIC PLAN',
      tagline: 'Ideal for Emerging Sellers & Retailers',
      price: '₹10,00,000/-',
      skuCount: '30 SKU',
      icon: Star,
      themeColor: '#B8860B', // Warm Gold/Bronze
      headerBg: 'linear-gradient(135deg, #A26D24 0%, #D4A359 100%)',
      accentBadgeBg: '#FFF8E7',
      accentBadgeColor: '#8B5A14',
      badgeBorder: '#F0D4A0',
      features: [
        { icon: Package, text: 'Products- 10 lacs' },
        { icon: ShieldCheck, text: "Myntra's top 10 private brand approval" },
        { icon: Users, text: 'Authorization for retailers & wholesale' },
        { icon: Percent, text: 'Royalty/Commission*' },
        { icon: Camera, text: 'Product photography and descriptions.' },
        { icon: TrendingUp, text: 'Suggestions To Improve Sale' },
        { icon: Headphones, text: 'Support for Ecommerce Sale' },
        { icon: Truck, text: 'Logistic Support*' },
        { icon: FileText, text: 'Products listing support in Myntra' },
        { icon: Sparkles, text: 'Suggestions To Higher Profits' },
        { icon: TrendingUp, text: 'Suggestions To Faster growth' },
        { icon: Gift, text: '100 Free product listing*' }
      ]
    },
    {
      id: 'premium',
      name: 'PREMIUM PLAN',
      tagline: 'Most Popular for High-Growth Brands',
      price: '₹25,00,000/-',
      skuCount: '100 SKU',
      isPopular: true,
      icon: Crown,
      themeColor: '#C2185B', // Deep Rose / Magenta
      headerBg: 'linear-gradient(135deg, #AD1457 0%, #E91E63 100%)',
      accentBadgeBg: '#FCE4EC',
      accentBadgeColor: '#880E4F',
      badgeBorder: '#F8BBD0',
      features: [
        { icon: Package, text: 'Products- 25 lacs' },
        { icon: ShieldCheck, text: 'Authorization For Ecommerce Platforms' },
        { icon: Users, text: 'Authorization for retailers & wholesale' },
        { icon: Percent, text: 'Royalty/Commission* 2%' },
        { icon: Camera, text: 'Product photography and descriptions.' },
        { icon: TrendingUp, text: 'Suggestions To Improve Sale' },
        { icon: Headphones, text: 'Support for Ecommerce Sale' },
        { icon: Truck, text: 'Logistic Support*' },
        { icon: FileText, text: 'Products listing support' },
        { icon: Sparkles, text: 'Suggestions To Higher Profits' },
        { icon: TrendingUp, text: 'Suggestions To Faster growth' },
        { icon: Gift, text: '200 Free product listing*' }
      ]
    },
    {
      id: 'enterprise',
      name: 'ENTERPRISE PLAN',
      tagline: 'Comprehensive Scale for High-Volume Operations',
      price: '₹50,00,000/-',
      skuCount: '300 SKU',
      icon: Building,
      themeColor: '#1565C0', // Royal Blue
      headerBg: 'linear-gradient(135deg, #0D47A1 0%, #1976D2 100%)',
      accentBadgeBg: '#E3F2FD',
      accentBadgeColor: '#0D47A1',
      badgeBorder: '#BBDEFB',
      features: [
        { icon: Package, text: 'Products- 50 lacs' },
        { icon: ShieldCheck, text: 'Authorization For Ecommerce Platforms' },
        { icon: Users, text: 'Authorization for retailers & wholesale' },
        { icon: Percent, text: 'Royalty/Commission* 5%' },
        { icon: Camera, text: 'Product photography and descriptions.' },
        { icon: TrendingUp, text: 'Suggestions To Improve Sale' },
        { icon: Headphones, text: 'Support For Ecommerce Sale' },
        { icon: Truck, text: 'Logistic Support*' },
        { icon: FileText, text: 'Products listing support' },
        { icon: Sparkles, text: 'Suggestions To Higher Profits' },
        { icon: TrendingUp, text: 'Suggestions To Faster growth' },
        { icon: Gift, text: '500 Free product listing*' }
      ]
    }
  ];

  const handlePlanClick = (plan) => {
    if (onSelectPlan) {
      onSelectPlan({
        planName: plan.name,
        price: plan.price,
        sku: plan.skuCount,
        summary: `Interested in ${plan.name} (${plan.price} for ${plan.skuCount}). Please provide onboarding details for Myntra top brands.`
      });
    }
  };

  return (
    <section className="myntra-plans-section section-spacing bg-white" id="myntra-plans">
      <div className="site-container">
        {/* Header Block */}
        <div className="section-header">
          <div className="myntra-partner-tag">
            <span className="myntra-m-badge">M</span>
            <span>BUSINESS PLANS FOR YOUR GROWTH</span>
          </div>

          <h2 className="section-title myntra-plans-main-heading">
            SELL TOP BRANDS ON MYNTRA
          </h2>

          <p className="section-description myntra-plans-sub">
            Scaling Your Business, Together &bull; Bigger Brands, Bigger Opportunities
          </p>

          <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
            <button 
              type="button" 
              className="btn btn-outline-burgundy btn-sm"
              onClick={() => setShowGraphicModal(true)}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <ImageIcon size={15} />
              <span>View Official Plan Poster</span>
            </button>
          </div>
        </div>

        {/* 3 Plans Grid */}
        <div className="myntra-plans-grid">
          {plans.map((plan) => {
            const PlanIcon = plan.icon;
            return (
              <div 
                key={plan.id} 
                className={`myntra-plan-card ${plan.isPopular ? 'popular-plan' : ''}`}
                style={{ borderColor: plan.isPopular ? plan.themeColor : 'var(--color-border)' }}
              >
                {/* Popular Pill */}
                {plan.isPopular && (
                  <div className="popular-badge" style={{ backgroundColor: plan.themeColor }}>
                    MOST POPULAR
                  </div>
                )}

                {/* Plan Header */}
                <div className="plan-card-header" style={{ background: plan.headerBg }}>
                  <div className="plan-icon-wrap">
                    <PlanIcon size={24} />
                  </div>
                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-tagline">{plan.tagline}</p>
                </div>

                {/* Price & SKU Bar */}
                <div className="plan-pricing-box">
                  <div className="plan-price-text">{plan.price}</div>
                  <div 
                    className="plan-sku-pill"
                    style={{ 
                      backgroundColor: plan.accentBadgeBg, 
                      color: plan.accentBadgeColor,
                      border: `1px solid ${plan.badgeBorder}`
                    }}
                  >
                    <strong>{plan.skuCount}</strong>
                  </div>
                </div>

                {/* Features List */}
                <ul className="plan-features-list">
                  {plan.features.map((item, fIdx) => {
                    const FeatIcon = item.icon;
                    return (
                      <li key={fIdx} className="plan-feature-row">
                        <span 
                          className="feat-icon-bullet" 
                          style={{ color: plan.themeColor }}
                        >
                          <FeatIcon size={16} />
                        </span>
                        <span className="feat-text">{item.text}</span>
                      </li>
                    );
                  })}
                </ul>

                {/* CTA Button */}
                <div className="plan-cta-wrap">
                  <button
                    type="button"
                    className="btn plan-select-btn"
                    style={{
                      backgroundColor: plan.themeColor,
                      color: '#FFFFFF'
                    }}
                    onClick={() => handlePlanClick(plan)}
                  >
                    <span>Choose {plan.name}</span>
                    <ArrowRight size={16} />
                  </button>
                  <span className="plan-cta-subtext">Click to open inquiry form pre-filled</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Badges */}
        <div className="myntra-trust-badges-bar">
          <div className="trust-badge-item">
            <ShieldCheck size={20} className="trust-icon" />
            <span>PREMIUM BRANDS</span>
          </div>
          <div className="trust-badge-divider" />
          <div className="trust-badge-item">
            <TrendingUp size={20} className="trust-icon" />
            <span>BETTER OPPORTUNITIES</span>
          </div>
          <div className="trust-badge-divider" />
          <div className="trust-badge-item">
            <Users size={20} className="trust-icon" />
            <span>FULL SUPPORT</span>
          </div>
          <div className="trust-badge-divider" />
          <div className="trust-badge-item">
            <Sparkles size={20} className="trust-icon" />
            <span>LONG-TERM GROWTH</span>
          </div>
        </div>

        {/* Global CTA Banner matching attached poster */}
        <div className="myntra-grow-banner">
          <button
            type="button"
            className="myntra-grow-btn"
            onClick={() => handlePlanClick(plans[1])}
          >
            <span>LET'S GROW YOUR BUSINESS ON MYNTRA</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Official Poster Modal */}
      {showGraphicModal && (
        <div 
          className="plans-modal-overlay" 
          onClick={() => setShowGraphicModal(false)}
        >
          <div 
            className="plans-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="plans-modal-header">
              <h4>Official Myntra Business Plans Chart</h4>
              <button 
                type="button" 
                className="btn-close-modal"
                onClick={() => setShowGraphicModal(false)}
              >
                &times;
              </button>
            </div>
            <div className="plans-modal-body">
              <img 
                src="/images/myntra-plans.png" 
                alt="Myntra Business Plans - Sell Top Brands On Myntra" 
                style={{ width: '100%', height: 'auto', borderRadius: '6px' }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
