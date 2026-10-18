import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PlansPage from './pages/PlansPage';
import ProcessPage from './pages/ProcessPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import AdminPage from './pages/AdminPage';
import './App.css';
import './myntra.css';
import './admin.css';

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
        'process', 
        'contact', 
        'privacy-policy', 
        'terms-conditions',
        'admin'
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

  // Update document title dynamically based on route
  useEffect(() => {
    const titleMap = {
      'home': 'TopHill Textile | Become a Partner with Top Brands on Myntra',
      'about': 'About Us | TopHill Textile Pvt. Ltd.',
      'services': 'Our Services | TopHill Textile',
      'plans': 'Myntra Business Plans | TopHill Textile',
      'process': 'Our Process | TopHill Textile',
      'contact': 'Contact Us | TopHill Textile Pvt. Ltd.',
      'privacy-policy': 'Privacy Policy | TopHill Textile',
      'terms-conditions': 'Terms & Conditions | TopHill Textile',
      'admin': 'Admin Portal | TopHill Textile Pvt. Ltd.'
    };

    document.title = titleMap[currentRoute] || 'TopHill Textile | Garment Business Solutions';
  }, [currentRoute]);

  const navigateTo = (routeId) => {
    setCurrentRoute(routeId);
    window.location.hash = `#/${routeId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setSelectedInquiryType(`Myntra Business Plan - ${plan.planName}`);
    navigateTo('contact');
  };

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case 'home':
        return <HomePage navigateTo={navigateTo} onSelectPlan={handleSelectPlan} />;
      case 'about':
        return <AboutPage navigateTo={navigateTo} />;
      case 'services':
        return <ServicesPage navigateTo={navigateTo} setInquiryType={setSelectedInquiryType} />;
      case 'plans':
        return <PlansPage navigateTo={navigateTo} onSelectPlan={handleSelectPlan} />;
      case 'process':
        return <ProcessPage navigateTo={navigateTo} />;
      case 'contact':
        return <ContactPage initialInquiryType={selectedInquiryType} initialPlan={selectedPlan} />;
      case 'privacy-policy':
        return <PrivacyPolicyPage navigateTo={navigateTo} />;
      case 'terms-conditions':
        return <TermsPage navigateTo={navigateTo} />;
      case 'admin':
        return <AdminPage navigateTo={navigateTo} />;
      default:
        return <HomePage navigateTo={navigateTo} onSelectPlan={handleSelectPlan} />;
    }
  };

  // If in admin view, render clean admin layout without conflicting standard header/footer if preferred, or keep standard footer for easy access
  const isAdminView = currentRoute === 'admin';

  return (
    <div className="site-wrapper">
      {!isAdminView && <Header currentRoute={currentRoute} navigateTo={navigateTo} />}
      <main id="main-content" tabIndex="-1">
        {renderCurrentPage()}
      </main>
      {!isAdminView && <Footer navigateTo={navigateTo} />}
      <BackToTop />
    </div>
  );
}
