# TopHill Textile Pvt. Ltd. — Corporate Informational Website & Admin Portal

A modern, premium, professional, and trustworthy corporate informational website for **TopHill Textile Pvt. Ltd.** with a built-in **Admin Management Portal**.

---

## 🌟 Executive Summary

TopHill Textile Pvt. Ltd. is a structured, reliable partner coordinating:
1. **Garment Production Coordination** for India's Top Brands on Myntra:
   - **Roadster**
   - **DressBerry**
   - **Moda Rapido**
   - **CORSICA**
   - **Mast & Harbour**
   - **Here & NOW**
   - **Baesd**
2. **Product Photography & Catalog Preparation**
3. **Myntra Onboarding to QC Pass** (Exclusive Myntra Focus)
4. **Business Operations Support** (Sorting, Packaging & Dispatch)
5. **Myntra Growth Plans**:
   - **Basic Plan:** ₹10,00,000/- (30 SKU)
   - **Premium Plan:** ₹25,00,000/- (100 SKU) &bull; *Most Popular*
   - **Enterprise Plan:** ₹50,00,000/- (300 SKU)
6. **Supabase Cloud Backend Integration**:
   - Real-time client inquiries and leads storage in Postgres
   - High availability hosted in Mumbai, India (`ap-south-1`)
   - Direct WhatsApp, telephone desk & email liaison channels

---

## 🏢 Official Corporate Credentials

- **Legal Entity:** TopHill Textile Pvt. Ltd.
- **Registered Address:** Sector 63, Noida, Uttar Pradesh - 201301
- **GSTIN:** 09AAMCT5200E1ZH
- **Official Email:** tophilltextile26@gmail.com
- **Official Phone:** +91 93153 31798
- **Instagram:** [@tophill_textile](https://www.instagram.com/tophill_textile/)
- **Facebook:** [Top Hill](https://www.facebook.com/profile.php?id=61595064245118)

---

## 📁 Project Structure

```
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── images/
│       ├── tophill-logo.jpg      # Official TopHill Textile logo
│       ├── myntra-plans.png      # Official Myntra growth plans poster
│       ├── hero-banner.jpg       # Hero apparel workspace banner
│       ├── garment-production.jpg# Production inspection
│       ├── catalog-photography.jpg# Studio lighting setup
│       └── operations-logistics.jpg# Fulfillment operations
├── src/
│   ├── components/
│   │   ├── BrandLogo.jsx         # Official TopHill Textile logo component
│   │   ├── Header.jsx            # Topbar with phone, email, socials, sticky navbar
│   │   ├── Footer.jsx            # 4-column footer with official credentials & Admin Portal link
│   │   ├── MyntraPlans.jsx       # Basic, Premium & Enterprise plans with direct inquiry
│   │   ├── TopBrandsShowcase.jsx # 7 Top Myntra brands + categories showcase
│   │   ├── SocialIcons.jsx       # SVG icons for Instagram and Facebook
│   │   └── BackToTop.jsx         # Floating smooth back-to-top button
│   ├── pages/
│   │   ├── HomePage.jsx          # Hero, Top Brands, Myntra Plans, Capabilities, CTA
│   │   ├── AboutPage.jsx         # Company profile, What We Do, Approach, Corporate Credentials
│   │   ├── ServicesPage.jsx      # Detailed breakdown of all 4 pillars
│   │   ├── PlansPage.jsx         # Dedicated Myntra Business Plans view
│   │   ├── ProcessPage.jsx       # 6-step workflow from discussion to Myntra QC pass
│   │   ├── ContactPage.jsx       # Functional form, WhatsApp button, Google Maps embed
│   │   ├── PrivacyPolicyPage.jsx # Informational corporate privacy policy
│   │   └── TermsPage.jsx         # Informational website terms of use
│   ├── App.jsx                   # Client routing, hash sync, plan pre-fill state
│   ├── App.css                   # Global styles & responsive layout
│   ├── myntra.css                # Myntra plans, yellow highlight, and top brands styles
│   ├── supabaseClient.js         # Supabase client SDK integration
│   ├── index.css                 # Design tokens and resets
│   └── main.jsx
├── index.html                    # SEO tags, OpenGraph, JSON-LD schema with GSTIN & address
├── package.json
└── vite.config.js
```

---

## 🚀 How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Build for production
npm run build
```
Live local dev URL: `http://localhost:5173/`
Admin portal URL: `http://localhost:5173/#/admin`
