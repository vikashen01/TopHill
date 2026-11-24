import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PlansPage from './pages/PlansPage';
import ProductsPage from './pages/ProductsPage';
import ProcessPage from './pages/ProcessPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import './App.css';
import './myntra.css';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('home');
  const [selectedInquiryType, setSelectedInquiryType] = useState('General Inquiry');
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Sync route with URL hash on mount & hashchange event
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      const validRoutes = [
        'home', 
        'about', 
        'services', 
        'plans', 
        'products',
        'process', 
        'contact', 
        'privacy-policy', 
        'terms-conditions'
      ];
      
      if (validRoutes.includes(hash)) {
        setCurrentRoute(hash);
      } else if (!hash) {
        setCurrentRoute('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update document title + meta tags dynamically based on route
  useEffect(() => {
    const metaMap = {
      'home': {
        title: 'TOPHILL TEXTILE | Official Website – TopHill Textile Private Limited',
        description: 'TOPHILL TEXTILE (TopHill Textile Private Limited) – Garment manufacturing for top Myntra brands: Roadster, DressBerry, Moda Rapido, CORSICA, Mast & Harbour, Here & NOW, Baesd. Myntra onboarding to QC pass. Noida, UP. GSTIN: 09AAMCT5200E1ZH.',
        canonical: 'https://www.tophilltextile.com/'
      },
      'about': {
        title: 'About TopHill Textile Private Limited | Top Hill Textile Pvt Ltd – Noida, UP',
        description: 'About TopHill Textile Private Limited (Top Hill Textile Pvt. Ltd.) – A registered garment manufacturing coordination company in Noida, UP. GSTIN: 09AAMCT5200E1ZH. Partner for Myntra top brands.',
        canonical: 'https://www.tophilltextile.com/#/about'
      },
      'services': {
        title: 'Services | TopHill Textile – Garment Manufacturing & Myntra Onboarding',
        description: 'TopHill Textile Pvt. Ltd. services: Garment manufacturing coordination, product photography & catalog preparation, Myntra onboarding to QC pass, business operations support. Noida, UP.',
        canonical: 'https://www.tophilltextile.com/#/services'
      },
      'plans': {
        title: 'Myntra Business Plans | TopHill Textile Private Limited',
        description: 'TopHill Textile Myntra Business Plans – Basic, Premium & Enterprise. Become a Myntra seller with Top Hill Textile Pvt. Ltd. as your manufacturing & onboarding partner. Contact: +91 93153 31798.',
        canonical: 'https://www.tophilltextile.com/#/plans'
      },
      'products': {
        title: 'Our Products | Western Wear – 20 Top CATEGORIES & 4000+ STYLES | TopHill Textile',
        description: 'TopHill Textile products: 11 Western Wear categories (Tops, Shirts, Dresses, Co-ord Sets, Office Wear, Skirts, Bottom Wear, Party Wear, T-Shirts, Outerwear) and 6 fabric families. Mill-direct sourcing.',
        canonical: 'https://www.tophilltextile.com/#/products'
      },
      'process': {
        title: 'Business Process | TopHill Textile – Myntra Production Workflow',
        description: 'TopHill Textile business process: From style requirements to Myntra QC pass. Garment manufacturing, catalog preparation, Myntra onboarding, fulfillment coordination.',
        canonical: 'https://www.tophilltextile.com/#/process'
      },
      'contact': {
        title: 'Contact TopHill Textile | +91 93153 31798 | tophilltextile26@gmail.com',
        description: 'Contact TopHill Textile Private Limited: Phone +91 93153 31798, Email tophilltextile26@gmail.com, Address: Sector 63, Noida, UP 201301. GSTIN: 09AAMCT5200E1ZH.',
        canonical: 'https://www.tophilltextile.com/#/contact'
      },
      'privacy-policy': {
        title: 'Privacy Policy | TopHill Textile Pvt. Ltd.',
        description: 'Privacy Policy of TopHill Textile Private Limited (tophilltextile.com) – How we collect, use, and protect your personal information.',
        canonical: 'https://www.tophilltextile.com/#/privacy-policy'
      },
      'terms-conditions': {
        title: 'Terms & Conditions | TopHill Textile Private Limited',
        description: 'Terms & Conditions of TopHill Textile Private Limited (TopHill Textile Pvt. Ltd.) – Rules governing use of tophilltextile.com and our services.',
        canonical: 'https://www.tophilltextile.com/#/terms-conditions'
      }
    };

    const meta = metaMap[currentRoute] || metaMap['home'];

    // Update title
    document.title = meta.title;

    // Update or create meta description
    let descEl = document.querySelector('meta[name="description"]');
    if (descEl) descEl.setAttribute('content', meta.description);

    // Update canonical
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (canonicalEl) canonicalEl.setAttribute('href', meta.canonical);

    // Update OG tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', meta.title);
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', meta.description);
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', meta.canonical);

    // Update Twitter tags
    let twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', meta.title);
    let twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', meta.description);
  }, [currentRoute]);

  const navigateTo = (routeId) => {
    setCurrentRoute(routeId);
    window.location.hash = `#/${routeId}`;
    if (routeId === 'contact') {
      setTimeout(() => {
        const formEl = document.getElementById('inquiry-form-card');
        if (formEl) {
          const yOffset = -85;
          const y = formEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
          const firstInput = document.getElementById('fullName');
          if (firstInput) firstInput.focus({ preventScroll: true });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 180);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setSelectedInquiryType(`Myntra Business Plan - ${plan.planName}`);
    navigateTo('contact');
  };

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case 'home':
        return <HomePage navigateTo={navigateTo} onSelectPlan={handleSelectPlan} setInquiryType={setSelectedInquiryType} />;
      case 'about':
        return <AboutPage navigateTo={navigateTo} />;
      case 'services':
        return <ServicesPage navigateTo={navigateTo} setInquiryType={setSelectedInquiryType} />;
      case 'plans':
        return <PlansPage navigateTo={navigateTo} onSelectPlan={handleSelectPlan} />;
      case 'products':
      case 'process':
        return <ProductsPage navigateTo={navigateTo} onSelectPlan={handleSelectPlan} setInquiryType={setSelectedInquiryType} />;
      case 'contact':
        return <ContactPage initialInquiryType={selectedInquiryType} initialPlan={selectedPlan} />;
      case 'privacy-policy':
        return <PrivacyPolicyPage navigateTo={navigateTo} />;
      case 'terms-conditions':
        return <TermsPage navigateTo={navigateTo} />;
      default:
        return <HomePage navigateTo={navigateTo} onSelectPlan={handleSelectPlan} setInquiryType={setSelectedInquiryType} />;
    }
  };

  return (
    <div className="site-wrapper">
      <Header currentRoute={currentRoute} navigateTo={navigateTo} />
      <main id="main-content" tabIndex="-1">
        {renderCurrentPage()}
      </main>
      <Footer navigateTo={navigateTo} />
      <BackToTop />
      <FloatingWhatsApp />
    </div>
  );
}
