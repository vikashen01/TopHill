import React from 'react';

/**
 * BrandLogo Component
 * Features the official TopHill Textile Pvt. Ltd. emblem extracted directly from corporate card
 * and displays single clean official brand title "TOPHILL TEXTILE PVT. LTD."
 */
export default function BrandLogo({ variant = 'default', onClick }) {
  const isLight = variant === 'light';

  return (
    <div 
      className="brand-logo-container" 
      onClick={onClick}
      style={{ 
        cursor: onClick ? 'pointer' : 'default', 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '0.75rem' 
      }}
    >
      <div 
        style={{
          height: isLight ? '44px' : '46px',
          padding: '2px',
          borderRadius: '8px',
          backgroundColor: isLight ? 'rgba(255, 255, 255, 0.05)' : '#0E3320',
          border: isLight ? '1px solid rgba(212, 116, 44, 0.35)' : '1px solid rgba(212, 116, 44, 0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          overflow: 'hidden',
          boxShadow: isLight ? '0 2px 10px rgba(0, 0, 0, 0.3)' : '0 2px 8px rgba(14, 51, 32, 0.18)'
        }}
      >
        <img 
          src="/images/tophill-emblem.png" 
          alt="TopHill Textile Pvt. Ltd." 
          style={{
            height: '100%',
            width: 'auto',
            maxHeight: isLight ? '38px' : '40px',
            objectFit: 'contain',
            display: 'block'
          }}
        />
      </div>

      <span 
        className="brand-logo-title-text"
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(0.92rem, 1.9vw, 1.15rem)',
          fontWeight: '800',
          letterSpacing: '0.03em',
          color: isLight ? '#FFFFFF' : 'var(--color-primary)',
          lineHeight: 1.2
        }}
      >
        TOPHILL TEXTILE PVT. LTD.
      </span>
    </div>
  );
}
