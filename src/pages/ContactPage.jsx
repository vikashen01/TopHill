import React, { useState, useEffect, useRef } from 'react';
import { 
  Building2, 
  MapPin, 
  Mail, 
  Phone, 
  FileText, 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  ShieldCheck, 
  RefreshCw,
  Sparkles,
  ArrowDown
} from 'lucide-react';
import { InstagramIcon as Instagram, FacebookIcon as Facebook } from '../components/SocialIcons';
import { insertInquiry } from '../supabaseClient';

export default function ContactPage({ initialInquiryType = 'General Inquiry', initialPlan = null }) {
  const formCardRef = useRef(null);
  const [isFormFocused, setIsFormFocused] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phoneNumber: '',
    emailAddress: '',
    natureOfInquiry: initialPlan 
      ? `Myntra Business Plan - ${initialPlan.planName}` 
      : (initialInquiryType || 'General Inquiry'),
    message: initialPlan ? initialPlan.summary : '',
    honeypot: '' // Anti-spam trap field
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState(null);

  // Smooth slide directly down to the form
  const scrollToForm = () => {
    if (formCardRef.current) {
      const yOffset = -85;
      const y = formCardRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsFormFocused(true);
      setTimeout(() => {
        const input = document.getElementById('fullName');
        if (input) input.focus({ preventScroll: true });
      }, 500);
      setTimeout(() => setIsFormFocused(false), 3000);
    }
  };

  // Sync if initial props change and automatically slide to form
  useEffect(() => {
    if (initialPlan) {
      setFormData((prev) => ({
        ...prev,
        natureOfInquiry: `Myntra Business Plan - ${initialPlan.planName}`,
        message: initialPlan.summary
      }));
    } else if (initialInquiryType) {
      setFormData((prev) => ({ ...prev, natureOfInquiry: initialInquiryType }));
    }

    const t = setTimeout(scrollToForm, 250);
    return () => clearTimeout(t);
  }, [initialInquiryType, initialPlan]);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required.';
    } else if (!/^[0-9+() -]{7,20}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = 'Please enter a valid phone number (digits, +, -).';
    }

    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress.trim())) {
      newErrors.emailAddress = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details regarding your inquiry.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Message must be at least 15 characters.';
    }

    // Spam honeypot check
    if (formData.honeypot) {
      newErrors.honeypot = 'Automated bot submission detected.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const refId = `THT-${Date.now().toString().slice(-6)}`;
    const inquiryRecord = {
      id: refId,
      inquiryRef: refId,
      fullName: formData.fullName.trim(),
      companyName: formData.companyName.trim() || 'Not Provided',
      phoneNumber: formData.phoneNumber.trim(),
      emailAddress: formData.emailAddress.trim(),
      natureOfInquiry: formData.natureOfInquiry,
      message: formData.message.trim(),
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    };

    // Insert directly into Supabase Cloud Database (Write-Only)
    const res = await insertInquiry(inquiryRecord);

    setSubmittedInquiry({
      id: refId,
      fullName: inquiryRecord.fullName,
      emailAddress: inquiryRecord.emailAddress,
      phoneNumber: inquiryRecord.phoneNumber,
      success: res.success
    });
    setIsSubmitting(false);

    setFormData({
      fullName: '',
      companyName: '',
      phoneNumber: '',
      emailAddress: '',
      natureOfInquiry: 'General Inquiry',
      message: '',
      honeypot: ''
    });
  };

  return (
    <div className="page-contact animate-fade-in">
      {/* Page Hero */}
      <section className="page-hero-banner">
        <div className="site-container">
          <div className="page-hero-content">
            <span className="section-tag">Direct Communication</span>
            <h1 className="page-hero-title">Contact TopHill Textile Pvt. Ltd.</h1>
            <p className="page-hero-subtitle">
              Reach out for garment manufacturing coordination, Myntra onboarding to QC pass, and Myntra business growth plan inquiries.
            </p>
            <button
              type="button"
              className="btn btn-accent btn-sm hero-direct-form-btn"
              onClick={scrollToForm}
              style={{ marginTop: '1.25rem', display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
            >
              <span>Fill Business Inquiry Form Directly</span>
              <ArrowDown size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-spacing bg-white">
        <div className="site-container">
          <div className="contact-layout-grid">
            {/* Left Column: Official Contact Information */}
            <div className="contact-info-col">
              <div className="section-tag">Corporate Headquarters</div>
              <h2 className="contact-col-title">Get in Touch With Our Team</h2>
              <p className="contact-col-desc">
                Visit our registered corporate office or reach us directly via telephone, email, or WhatsApp.
              </p>

              <div className="official-contact-box">
                {/* Company Name */}
                <div className="official-contact-item">
                  <div className="contact-icon-bubble">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <span className="contact-item-label">Corporate Entity</span>
                    <p className="contact-item-primary">TopHill Textile Pvt. Ltd.</p>
                    <span className="contact-item-sub">Registered Corporate Entity</span>
                  </div>
                </div>

                {/* Office Address */}
                <div className="official-contact-item">
                  <div className="contact-icon-bubble">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="contact-item-label">Registered Office Address</span>
                    <p className="contact-item-primary">
                      Sector 63, Noida, Uttar Pradesh - 201301
                    </p>
                    <span className="contact-item-sub">Industrial Area Sector 63, Noida</span>
                  </div>
                </div>

                {/* Email Address */}
                <div className="official-contact-item">
                  <div className="contact-icon-bubble">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="contact-item-label">Official Corporate Email</span>
                    <a 
                      href="mailto:tophilltextile26@gmail.com" 
                      className="contact-item-primary" 
                      style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}
                    >
                      tophilltextile26@gmail.com
                    </a>
                    <span className="contact-item-sub">Mon – Sat (10:00 AM – 6:30 PM IST)</span>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="official-contact-item">
                  <div className="contact-icon-bubble">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="contact-item-label">Official Contact Phone</span>
                    <a 
                      href="tel:+919899763193" 
                      className="contact-item-primary" 
                      style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}
                    >
                      +91 98997 63193
                    </a>
                    <span className="contact-item-sub">Direct telephone liaison desk</span>
                  </div>
                </div>

                {/* GSTIN */}
                <div className="official-contact-item">
                  <div className="contact-icon-bubble">
                    <FileText size={20} />
                  </div>
                  <div>
                    <span className="contact-item-label">Tax Registration (GSTIN)</span>
                    <p className="contact-item-primary" style={{ color: 'var(--color-accent-dark)', fontWeight: 700 }}>
                      09AAMCT5200E1ZH
                    </p>
                    <span className="contact-item-sub">Verified Uttar Pradesh GST Registration</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Contact Button */}
              <div className="whatsapp-active-box">
                <div className="whatsapp-placeholder-header">
                  <MessageCircle size={22} className="wa-icon" />
                  <strong>Direct WhatsApp Desk</strong>
                </div>
                <p>
                  Connect instantly with our coordination team on WhatsApp for quick inquiries regarding Myntra plans and garment manufacturing.
                </p>
                <a 
                  href="https://wa.me/919899763193?text=Hello%20TopHill%20Textile,%20I%20would%20like%20to%20inquire%20about%20your%20services%20and%20Myntra%20plans."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ marginTop: '0.75rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <MessageCircle size={18} />
                  <span>Chat on WhatsApp: +91 98997 63193</span>
                </a>
              </div>

              {/* Social Media Links */}
              <div className="contact-social-card">
                <h4 style={{ fontSize: '0.95rem', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
                  Connect on Social Media
                </h4>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a 
                    href="https://www.instagram.com/tophill_textile/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-pill instagram-pill"
                  >
                    <Instagram size={17} />
                    <span>Instagram: @tophill_textile</span>
                  </a>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61595064245118" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-pill facebook-pill"
                  >
                    <Facebook size={17} />
                    <span>Facebook: Top Hill</span>
                  </a>
                </div>
              </div>

              {/* Google Maps Embed to Sector 63 Noida */}
              <div className="map-embed-box">
                <div className="map-header">
                  <MapPin size={18} style={{ color: 'var(--color-primary)' }} />
                  <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>
                    Office Location: Sector 63, Noida
                  </span>
                </div>
                <iframe
                  title="TopHill Textile Office Location - Sector 63, Noida"
                  src="https://maps.google.com/maps?q=Sector%2063%2C%20Noida%2C%20Uttar%20Pradesh%20201301&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="220"
                  style={{ border: 0, borderRadius: '6px' }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Right Column: Functional Inquiry Form */}
            <div className="contact-form-col">
              <div 
                ref={formCardRef} 
                id="inquiry-form-card" 
                className={`inquiry-form-card ${isFormFocused ? 'form-slide-focus' : ''}`}
              >
                <div className={`form-direct-attention-bar ${isFormFocused ? 'pulse' : ''}`}>
                  <Sparkles size={16} className="sparkle-pulse" />
                  <span>Direct Business Inquiry Desk &bull; Fill Details Below</span>
                </div>

                <div className="form-card-header">
                  <div className="form-header-badge">
                    <Send size={15} />
                    <span>Business Inquiry Desk</span>
                  </div>
                  <h3 className="form-card-title">Send Us an Inquiry</h3>
                  <p className="form-card-subtitle">
                    Inquire about our Myntra growth plans or garment manufacturing for top brands. Fields marked with (<span className="text-burgundy">*</span>) are mandatory.
                  </p>
                </div>

                {/* Selected Plan Highlight Banner */}
                {formData.natureOfInquiry.includes('Plan') && (
                  <div className="plan-selected-notice">
                    <Sparkles size={18} className="gold-icon" />
                    <div>
                      <strong>Selected Plan:</strong> {formData.natureOfInquiry}
                      <p style={{ fontSize: '0.82rem', margin: 0, color: 'var(--color-text-muted)' }}>
                        Fill out your contact details below to receive full onboarding criteria and commercial terms.
                      </p>
                    </div>
                  </div>
                )}

                {/* Success Banner if Submitted */}
                {submittedInquiry && (
                  <div className="inquiry-success-banner" role="alert">
                    <CheckCircle2 size={24} className="success-icon" />
                    <div>
                      <h4 className="success-title">
                        Business Inquiry Received Successfully
                      </h4>
                      <p className="success-text">
                        Thank you, <strong>{submittedInquiry.fullName}</strong>. Your inquiry has been registered with Reference ID: <strong>{submittedInquiry.id}</strong>.
                      </p>
                      <p className="success-sub">
                        Our coordination desk at Sector 63, Noida will review your requirements and connect with you via email ({submittedInquiry.emailAddress}) or phone ({submittedInquiry.phoneNumber}) within 24 business hours.
                      </p>
                      <button 
                        type="button" 
                        className="btn-dismiss-success"
                        onClick={() => setSubmittedInquiry(null)}
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  {/* Anti-spam honeypot */}
                  <div style={{ display: 'none' }} aria-hidden="true">
                    <label htmlFor="honeypot">Leave this blank</label>
                    <input 
                      type="text" 
                      id="honeypot" 
                      name="honeypot" 
                      value={formData.honeypot} 
                      onChange={handleChange} 
                      tabIndex="-1" 
                      autoComplete="off" 
                    />
                  </div>

                  {/* Row 1: Full Name & Company Name */}
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="fullName" className="form-label">
                        Full Name <span className="req-star">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        className={`form-input ${errors.fullName ? 'has-error' : ''}`}
                        placeholder="e.g. Rajesh Kumar"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                      {errors.fullName && <span className="error-message">{errors.fullName}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="companyName" className="form-label">
                        Company / Brand Name <span className="optional-tag">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        className="form-input"
                        placeholder="e.g. Apex Apparel Studio"
                        value={formData.companyName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Email */}
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phoneNumber" className="form-label">
                        Phone Number <span className="req-star">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        className={`form-input ${errors.phoneNumber ? 'has-error' : ''}`}
                        placeholder="e.g. +91 98997 63193"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                      />
                      {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="emailAddress" className="form-label">
                        Email Address <span className="req-star">*</span>
                      </label>
                      <input
                        type="email"
                        id="emailAddress"
                        name="emailAddress"
                        className={`form-input ${errors.emailAddress ? 'has-error' : ''}`}
                        placeholder="e.g. rajesh@company.com"
                        value={formData.emailAddress}
                        onChange={handleChange}
                        required
                      />
                      {errors.emailAddress && <span className="error-message">{errors.emailAddress}</span>}
                    </div>
                  </div>

                  {/* Row 3: Nature of Inquiry */}
                  <div className="form-group">
                    <label htmlFor="natureOfInquiry" className="form-label">
                      Nature of Inquiry <span className="req-star">*</span>
                    </label>
                    <select
                      id="natureOfInquiry"
                      name="natureOfInquiry"
                      className="form-select"
                      value={formData.natureOfInquiry}
                      onChange={handleChange}
                    >
                      <option value="General Inquiry">General Business Inquiry</option>
                      <option value="Myntra Business Plan - BASIC PLAN">Myntra Growth Plan — BASIC PLAN (₹10,00,000 / 30 SKU)</option>
                      <option value="Myntra Business Plan - PREMIUM PLAN">Myntra Growth Plan — PREMIUM PLAN (₹25,00,000 / 100 SKU)</option>
                      <option value="Myntra Business Plan - ENTERPRISE PLAN">Myntra Growth Plan — ENTERPRISE PLAN (₹50,00,000 / 300 SKU)</option>
                      <option value="Garment Manufacturing Coordination">Garment Manufacturing Coordination (Roadster, DressBerry, etc.)</option>
                      <option value="Product Photography and Catalog Preparation">Product Photography &amp; Catalog Preparation</option>
                      <option value="Myntra Onboarding to QC Pass">Myntra Onboarding to QC Pass</option>
                      <option value="Business Operations Support">Business Operations Support</option>
                    </select>
                  </div>

                  {/* Row 4: Message */}
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message / Requirement Scope <span className="req-star">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      className={`form-textarea ${errors.message ? 'has-error' : ''}`}
                      placeholder="Please describe your garment category (Fashion, Beauty, Lifestyle), target volumes, plan selection, or questions..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    {errors.message && <span className="error-message">{errors.message}</span>}
                  </div>

                  {/* Privacy Consent Tag */}
                  <div className="form-privacy-note">
                    <ShieldCheck size={16} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>
                      By submitting this form, you acknowledge that TopHill Textile Pvt. Ltd. will store and process your contact details solely for responding to your business inquiry in accordance with our Privacy Policy.
                    </span>
                  </div>

                  {/* Submit Button */}
                  <div className="form-submit-row">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      style={{ width: '100%' }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw size={18} className="spin-icon" />
                          <span>Recording Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Business Inquiry</span>
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </div>
                </form>


              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
