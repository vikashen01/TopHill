import React from 'react';

/**
 * BrandLogo Component
 * Features the official TopHill Textile Pvt. Ltd. logo provided by the company.
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
        gap: '0.85rem' 
      }}
    >
      <div 
        style={{
          height: isLight ? '48px' : '52px',
          padding: isLight ? '4px 8px' : '2px',
          borderRadius: '8px',
          backgroundColor: isLight ? '#FFFFFF' : 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          boxShadow: isLight ? '0 2px 8px rgba(0, 0, 0, 0.2)' : 'none'
        }}
      >
        <img 
          src="/images/tophill-logo.jpg" 
          alt="TopHill Textile Pvt. Ltd. Official Logo" 
          style={{
            height: '100%',
            width: 'auto',
            maxHeight: isLight ? '40px' : '48px',
            objectFit: 'contain',
            display: 'block'
          }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.25rem',
          fontWeight: '800',
          letterSpacing: '0.03em',
          color: isLight ? '#FFFFFF' : '#641333',
          lineHeight: 1.15
        }}>
          TOPHILL TEXTILE
        </span>
        <span style={{
          fontSize: '0.72rem',
          fontWeight: '600',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: isLight ? '#D5B582' : '#2d6a4f',
          lineHeight: 1.2,
          marginTop: '2px'
        }}>
          TopHill Textile Pvt. Ltd.
        </span>
      </div>
    </div>
  );
}
