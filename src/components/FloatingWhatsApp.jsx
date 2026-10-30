import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export default function FloatingWhatsApp() {
  const phoneNumber = '9315331798';
  const displayPhone = '+91 93153 31798';
  const whatsappUrl = `https://wa.me/91${phoneNumber}?text=Hello%20TopHill%20Textile,%20I%20would%20like%20to%20inquire%20about%20your%20services%20and%20Myntra%20plans.`;

  return (
    <aside className="floating-contact-container" aria-label="Quick contact desk">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        title={`Chat with TopHill Textile on WhatsApp: ${displayPhone}`}
        aria-label={`Chat with TopHill Textile on WhatsApp at ${displayPhone}`}
      >
        <span className="floating-pulse-ring" aria-hidden="true" />
        <MessageCircle size={24} className="floating-wa-icon" />
        <span className="floating-wa-label">
          <span className="floating-wa-status">Online Now</span>
          <span className="floating-wa-number">{displayPhone}</span>
        </span>
      </a>

      <a
        href={`tel:+91${phoneNumber}`}
        className="floating-call-btn"
        title={`Direct Call: ${displayPhone}`}
        aria-label={`Call TopHill Textile directly at ${displayPhone}`}
      >
        <Phone size={18} />
      </a>
    </aside>
  );
}
