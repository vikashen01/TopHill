import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import { InstagramIcon as Instagram, FacebookIcon as Facebook } from './SocialIcons';
import BrandLogo from './BrandLogo';

export default function Header({ currentRoute, navigateTo }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll listener for sticky header elevation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Our Products' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Our Services' },
    { id: 'plans', label: 'Business Plans' },
    { id: 'process', label: 'Our Process' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (routeId) => {
    setIsMobileMenuOpen(false);
    if (routeId === 'products') {
      if (currentRoute !== 'home') {
        navigateTo('home');
      }
      setTimeout(() => {
        const el = document.getElementById('our-products');
        if (el) {
          const yOffset = -75;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
      return;
    }
    navigateTo(routeId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      {/* Top Utility Announcement Bar */}
      <div className="topbar">
        <div className="site-container topbar-inner">
          <div className="topbar-left">
            <span className="topbar-tag">
              <ShieldCheck size={13} style={{ display: 'inline', marginRight: '4px' }} />
              TopHill Textile Pvt. Ltd.
            </span>
            <span className="topbar-divider">|</span>
            <span className="topbar-note">
              Manufacturing Top Myntra Brands &amp; Myntra Onboarding to QC Pass
            </span>
          </div>

          <div className="topbar-right">
            <a 
              href="mailto:tophilltextile25@gmail.com" 
              className="topbar-item topbar-link"
              title="Official Business Email"
            >
              <Mail size={13} />
              <span>tophilltextile25@gmail.com</span>
            </a>
            <span className="topbar-divider">|</span>
            <a 
              href="tel:+917983597645" 
              className="topbar-item topbar-link"
              title="Official Contact Number"
            >
              <Phone size={13} />
              <span>+91 7983597645</span>
            </a>
            <span className="topbar-divider">|</span>
            <div className="topbar-socials">
              <a 
                href="https://www.instagram.com/tophill_textile/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="topbar-social-link"
                title="TopHill Textile on Instagram: tophill_textile"
              >
                <Instagram size={13} />
                <span>@tophill_textile</span>
              </a>
              <a 
                href="https://www.facebook.com/TopHill" 
                target="_blank" 
                rel="noopener noreferrer"
                className="topbar-social-link"
                title="TopHill on Facebook: Top Hill"
              >
                <Facebook size={13} />
                <span>Top Hill</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="main-navbar" aria-label="Main Navigation">
        <div className="site-container navbar-inner">
          {/* Logo on Left */}
          <div className="navbar-brand">
            <BrandLogo onClick={() => handleNavClick('home')} />
          </div>

          {/* Desktop Navigation Links on Right */}
          <div className="navbar-links-desktop">
            <ul className="nav-list">
              {navItems.map((item) => {
                const isActive = currentRoute === item.id;
                return (
                  <li key={item.id} className="nav-item">
                    <button
                      type="button"
                      className={`nav-link ${isActive ? 'active' : ''}`}
                      onClick={() => handleNavClick(item.id)}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                      {item.id === 'plans' && <span className="nav-badge-hot">Myntra</span>}
                      {isActive && <span className="nav-active-pill" />}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Prominent Contact Us Button in Header */}
            <button
              type="button"
              className="btn btn-primary btn-sm header-cta-btn"
              onClick={() => handleNavClick('contact')}
            >
              <span>Contact Us</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="navbar-mobile-toggle">
            <button
              type="button"
              className="mobile-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div 
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden={!isMobileMenuOpen}
      >
        <div 
          className="mobile-menu-drawer"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mobile-menu-header">
            <BrandLogo onClick={() => handleNavClick('home')} />
            <button 
              type="button" 
              className="mobile-close-btn"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className="mobile-menu-body">
            <p className="mobile-menu-label">Navigation</p>
            <ul className="mobile-nav-list">
              {navItems.map((item) => {
                const isActive = currentRoute === item.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                      onClick={() => handleNavClick(item.id)}
                    >
                      <span>{item.label}</span>
                      <ArrowRight size={16} className="mobile-arrow" />
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="mobile-menu-cta">
              <button
                type="button"
                className="btn btn-primary btn-lg"
                style={{ width: '100%' }}
                onClick={() => handleNavClick('contact')}
              >
                <span>Contact Our Team</span>
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="mobile-menu-info">
              <p className="mobile-info-heading">Corporate Office</p>
              <p className="mobile-info-text">
                G-137, 2nd Floor, Sector 63, Noida, Uttar Pradesh-201301
              </p>
              <p className="mobile-info-text"><strong>GSTIN:</strong> 09AAMCT5200E1ZH</p>
              <p className="mobile-info-text"><strong>Email:</strong> tophilltextile25@gmail.com</p>
              <p className="mobile-info-text"><strong>Phone:</strong> +91 7983597645</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
