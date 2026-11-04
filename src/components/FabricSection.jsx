import React, { useState } from 'react';
import { Layers, ArrowRight, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { FABRIC_CATEGORIES } from '../data/fabricCategories';

// Color palette for each fabric category card
const CARD_COLORS = [
  { bg: '#F0F7F2', border: '#1A6035', accent: '#1A6035', num: '#1A6035' },   // Cotton - Green
  { bg: '#FFF8F0', border: '#C2651A', accent: '#C2651A', num: '#C2651A' },   // Viscose - Orange
  { bg: '#F0F4FF', border: '#2D52A0', accent: '#2D52A0', num: '#2D52A0' },   // Polyester - Blue
  { bg: '#FDF5E6', border: '#8B6914', accent: '#8B6914', num: '#8B6914' },   // Linen - Amber
  { bg: '#F5F0FF', border: '#6B2FA0', accent: '#6B2FA0', num: '#6B2FA0' },   // Knitted - Purple
  { bg: '#F0F0F0', border: '#333333', accent: '#333333', num: '#333333' },   // Denim - Charcoal
];

export default function FabricSection({ onInquire }) {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <section id="fabrics-section" className="fabric-section-wrapper section-spacing" style={{ background: 'linear-gradient(135deg, #071E12 0%, #0E2E1A 60%, #131A0C 100%)' }}>
      <div className="site-container">

        {/* Section Header */}
        <div className="section-header text-center" style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
          <div className="section-tag" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(199, 164, 106, 0.18)',
            border: '1px solid rgba(199, 164, 106, 0.4)',
            color: '#EBD6B5',
            padding: '0.4rem 1.1rem',
            borderRadius: '9999px',
            fontSize: '0.85rem',
            fontWeight: 600,
            marginBottom: '1rem'
          }}>
            <Layers size={15} />
            <span>Premium Textile Sourcing • 6 Fabric Families • 27 Varieties</span>
          </div>

          <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Our <span style={{ color: '#F5C842' }}>Fabrics</span> &amp; Material Portfolio
          </h2>

          <p style={{ color: '#C8BAA8', fontSize: '1.05rem', lineHeight: 1.65 }}>
            Mill-direct fabric sourcing across 6 core commercial textile categories — Cotton, Viscose, Polyester, Linen, Knitted Fabrics &amp; Denim. All verified for GSM, tensile strength, colorfastness Grade 4+, and zero AZO compliance.
          </p>
        </div>

        {/* Fabric Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2.5rem'
        }}>
          {FABRIC_CATEGORIES.map((fCat, idx) => {
            const color = CARD_COLORS[idx % CARD_COLORS.length];
            const isExpanded = expandedId === fCat.id;

            return (
              <div
                key={fCat.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '14px',
                  border: `1px solid ${color.border}30`,
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.12)';
                }}
              >
                {/* Card Header */}
                <div style={{
                  background: color.bg,
                  borderBottom: `3px solid ${color.border}`,
                  padding: '1.25rem 1.4rem 1rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem' }}>
                    <div>
                      <span style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: color.num,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        marginBottom: '0.3rem',
                        display: 'block'
                      }}>{fCat.number}</span>
                      <h3 style={{
                        fontSize: '1.3rem',
                        fontWeight: 800,
                        color: color.accent,
                        margin: 0,
                        letterSpacing: '-0.01em'
                      }}>{fCat.name}</h3>
                      <p style={{
                        fontSize: '0.78rem',
                        color: '#6B6B6B',
                        margin: '0.35rem 0 0',
                        lineHeight: 1.4,
                        fontStyle: 'italic'
                      }}>{fCat.tagline}</p>
                    </div>
                    <span style={{
                      background: color.accent,
                      color: '#FFF',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.65rem',
                      borderRadius: '20px',
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}>{fCat.badge}</span>
                  </div>
                </div>

                {/* Varieties List */}
                <div style={{ padding: '1rem 1.4rem' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '0.75rem' }}>
                    {fCat.varieties.slice(0, isExpanded ? fCat.varieties.length : 4).map((v, i) => (
                      <span
                        key={v.slug || i}
                        style={{
                          background: `${color.border}12`,
                          border: `1px solid ${color.border}30`,
                          color: color.accent,
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          padding: '0.3rem 0.7rem',
                          borderRadius: '6px',
                          cursor: 'default'
                        }}
                      >
                        {v.name}
                      </span>
                    ))}
                    {!isExpanded && fCat.varieties.length > 4 && (
                      <span style={{
                        background: '#F5F5F5',
                        border: '1px solid #E0E0E0',
                        color: '#888',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        padding: '0.3rem 0.7rem',
                        borderRadius: '6px'
                      }}>+{fCat.varieties.length - 4} more</span>
                    )}
                  </div>

                  {/* Expanded details */}
                  {isExpanded && (
                    <div style={{ marginBottom: '0.75rem' }}>
                      <p style={{ fontSize: '0.84rem', color: '#555', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                        {fCat.description}
                      </p>
                    </div>
                  )}

                  {/* Toggle + Inquire */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', paddingTop: '0.5rem', borderTop: '1px solid #F0F0F0' }}>
                    <button
                      type="button"
                      onClick={() => toggleExpand(fCat.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        background: 'none',
                        border: 'none',
                        color: color.accent,
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        padding: '0.4rem 0',
                        textDecoration: 'underline',
                        textDecorationColor: `${color.accent}50`
                      }}
                    >
                      {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                      {isExpanded ? 'Show Less' : 'View Details'}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        if (onInquire) onInquire(`Fabric Sourcing Inquiry: ${fCat.name} Range`);
                      }}
                      style={{
                        marginLeft: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        background: color.accent,
                        color: '#FFF',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        padding: '0.45rem 0.9rem',
                        cursor: 'pointer',
                        transition: 'opacity 0.2s ease'
                      }}
                      onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                      onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                    >
                      <MessageCircle size={13} />
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Summary Strip */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.07)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '14px',
          padding: '1.75rem 2rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.25rem'
        }}>
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.15rem', fontWeight: 700, margin: '0 0 0.3rem' }}>
              Mill-Direct Fabric Sourcing for Bulk Production
            </h4>
            <p style={{ color: '#B8A898', fontSize: '0.9rem', margin: 0 }}>
              Cotton Poplin, Cambric, Rayon, Viscose Crepe, Poly Georgette, Moss Crepe, Cotton-Linen, Rib Knit, Stretch Denim &amp; more — all GSM verified.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/919315331798?text=Hello%20TopHill%20Textile,%20I%20would%20like%20to%20inquire%20about%20fabric%20sourcing%20and%20swatches.`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: '#25D366',
                color: '#FFF',
                borderRadius: '8px',
                padding: '0.65rem 1.25rem',
                fontWeight: 700,
                fontSize: '0.9rem',
                textDecoration: 'none',
                transition: 'opacity 0.2s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              <MessageCircle size={16} />
              WhatsApp: +91 93153 31798
            </a>
            <button
              type="button"
              onClick={() => { if (onInquire) onInquire('Mill-Direct Fabric Sourcing & Swatches Request'); }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: '#F5C842',
                color: '#1A0800',
                borderRadius: '8px',
                padding: '0.65rem 1.25rem',
                fontWeight: 700,
                fontSize: '0.9rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'opacity 0.2s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              <ArrowRight size={16} />
              Request Fabric Swatches
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

