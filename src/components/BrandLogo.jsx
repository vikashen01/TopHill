import React from 'react';

/**
 * BrandLogo Component
 * Uses the official TopHill Textile Pvt. Ltd. logo image
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
        gap: '0' 
      }}
    >
      <div 
        style={{
          height: isLight ? '62px' : '68px',
          padding: '3px',
          borderRadius: '10px',
          backgroundColor: '#FFFFFF',
          border: isLight ? '1px solid rgba(212, 116, 44, 0.3)' : '1px solid rgba(212, 116, 44, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          overflow: 'hidden',
          boxShadow: isLight ? '0 2px 10px rgba(0, 0, 0, 0.3)' : '0 2px 8px rgba(14, 51, 32, 0.15)'
        }}
      >
        <img 
          src="/images/tophill-logo-new.jpg" 
          alt="TopHill Textile Pvt. Ltd." 
          style={{
            height: '100%',
            width: 'auto',
            maxHeight: isLight ? '56px' : '62px',
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </div>
    </div>
  );
}
