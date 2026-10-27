import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Search, 
  X, 
  ExternalLink,
  ChevronRight,
  Filter,
  Layers,
  ShoppingBag,
  SlidersHorizontal,
  Info,
  Send
} from 'lucide-react';
import { WESTERN_WEAR_CATEGORIES } from '../data/westernWearCategories';

export default function OurProductsSection({ onInquire, onNavigateToContact }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [modalSearch, setModalSearch] = useState('');

  // Filter categories based on search or category tabs
  const filteredCategories = useMemo(() => {
    let list = WESTERN_WEAR_CATEGORIES;

    if (activeTab !== 'all') {
      list = list.filter(cat => cat.id === activeTab);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(cat => {
        const matchesCategoryName = cat.name.toLowerCase().includes(q);
        const matchesTagline = cat.tagline.toLowerCase().includes(q);
        const matchesSubcategory = cat.subcategories.some(sub => 
          sub.name.toLowerCase().includes(q) || (sub.tag && sub.tag.toLowerCase().includes(q))
        );
        return matchesCategoryName || matchesTagline || matchesSubcategory;
      });
    }

    return list;
  }, [searchQuery, activeTab]);

  const handleOpenCategory = (cat) => {
    setSelectedCategory(cat);
    setModalSearch('');
  };

  const handleCloseCategory = () => {
    setSelectedCategory(null);
    setModalSearch('');
  };

  const handleSubcategoryClick = (categoryName, subcategoryName) => {
    const inquiryText = `Product Inquiry: Western Wear - ${categoryName} (${subcategoryName})`;
    if (onInquire) {
      onInquire(inquiryText);
    } else if (onNavigateToContact) {
      onNavigateToContact(inquiryText);
    }
    handleCloseCategory();
  };

  const handleCategoryInquiry = (categoryName) => {
    const inquiryText = `Product Inquiry: Western Wear - ${categoryName} Collection`;
    if (onInquire) {
      onInquire(inquiryText);
    } else if (onNavigateToContact) {
      onNavigateToContact(inquiryText);
    }
    handleCloseCategory();
  };

  // Subcategories filtered in modal
  const modalSubcategories = useMemo(() => {
    if (!selectedCategory) return [];
    if (!modalSearch.trim()) return selectedCategory.subcategories;
    const q = modalSearch.toLowerCase().trim();
    return selectedCategory.subcategories.filter(s => 
      s.name.toLowerCase().includes(q) || (s.tag && s.tag.toLowerCase().includes(q))
    );
  }, [selectedCategory, modalSearch]);

  return (
    <section id="our-products" className="our-products-section section-spacing bg-white">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="section-header text-center" style={{ maxWidth: '820px', margin: '0 auto 2.5rem' }}>
          <div className="section-tag tag-gold" style={{ display: 'inline-flex', marginBottom: '0.75rem' }}>
            <Sparkles size={14} />
            <span>Western Wear – Product Categories</span>
          </div>

          <h2 className="section-title" style={{ fontSize: '2.4rem', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Our Product Collections
          </h2>

          <p className="section-description" style={{ fontSize: '1.05rem', lineHeight: '1.6', color: 'var(--color-text-muted)' }}>
            Explore our comprehensive 11 core product categories and 88 curated subcategories. Click any category card to view its complete styles, specifications, and sample manufacturing tech-packs.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="ww-filter-toolbar">
          {/* Search Bar */}
          <div className="ww-search-box">
            <Search size={18} className="ww-search-icon" />
            <input 
              type="text"
              placeholder="Search all 88 styles (e.g. Crop Tops, Blazers, Midi Dresses, Denim, Flannel)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="ww-search-input"
              id="ww-category-search-input"
            />
            {searchQuery && (
              <button 
                type="button" 
                className="ww-search-clear" 
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Quick Categories Filter Pills */}
          <div className="ww-category-pills-bar" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'all'}
              className={`ww-cat-pill ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Categories (11)
            </button>
            {WESTERN_WEAR_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeTab === cat.id}
                className={`ww-cat-pill ${activeTab === cat.id ? 'active' : ''}`}
                onClick={() => setActiveTab(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter if searching */}
        {searchQuery.trim() && (
          <div className="ww-search-status-bar">
            <span>Showing results for "<strong>{searchQuery}</strong>" — {filteredCategories.length} categories matched</span>
            <button type="button" className="ww-reset-link" onClick={() => setSearchQuery('')}>Reset</button>
          </div>
        )}

        {/* =========================================================================
            RESPONSIVE 11 CATEGORY CARDS GRID
            Desktop: 4 or 5 per row | Tablet: 2-3 per row | Mobile: 2 per row
            ========================================================================= */}
        <div className="ww-categories-grid">
          {filteredCategories.map((cat) => (
            <div 
              key={cat.id} 
              className="ww-category-card"
              onClick={() => handleOpenCategory(cat)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpenCategory(cat);
                }
              }}
              aria-haspopup="dialog"
              aria-label={`View subcategories for ${cat.name}`}
            >
              {/* Image Container with 3:4 Aspect Ratio */}
              <div className="ww-category-image-wrap">
                <img 
                  src={cat.image} 
                  alt={`Western Wear - ${cat.name}`} 
                  loading="lazy"
                  className="ww-category-img"
                />
                
                {/* Gradient Overlays for readability */}
                <div className="ww-card-scrim-top" />
                <div className="ww-card-scrim-bottom" />

                {/* Top Floating Badge */}
                <div className="ww-card-top-badges">
                  <span className="ww-card-num-pill">{cat.number}</span>
                  <span className="ww-card-count-pill">{cat.badge}</span>
                </div>

                {/* Bottom Content Over Image */}
                <div className="ww-card-content">
                  <h3 className="ww-card-title">{cat.name}</h3>
                  <p className="ww-card-tagline">{cat.tagline}</p>
                  
                  <div className="ww-card-explore-btn">
                    <span>View {cat.totalCount} Subcategories</span>
                    <ChevronRight size={16} className="ww-explore-arrow" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCategories.length === 0 && (
          <div className="ww-empty-state">
            <Filter size={40} className="ww-empty-icon" />
            <h3>No matching categories found</h3>
            <p>Try searching for a different keyword like "Tops", "Dresses", "Shirts", or "Blazers".</p>
            <button 
              type="button" 
              className="btn btn-outline-burgundy btn-sm"
              onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
            >
              Show All 11 Categories
            </button>
          </div>
        )}

        {/* Quick Sourcing Advisory Callout */}
        <div className="ww-sourcing-banner">
          <div className="ww-sourcing-content">
            <div className="ww-sourcing-icon-box">
              <ShoppingBag size={26} />
            </div>
            <div>
              <h4 className="ww-sourcing-title">Looking for Complete Garment Tech-Packs &amp; Production Batch Runs?</h4>
              <p className="ww-sourcing-desc">
                From grading XS to 3XL to achieving Myntra Quality Control (QC) clearance, we manage seamless manufacturing coordination across all 11 western wear categories.
              </p>
            </div>
          </div>
          <div className="ww-sourcing-actions">
            <button 
              type="button" 
              className="btn btn-accent btn-md"
              onClick={() => {
                if (onInquire) onInquire("Custom Western Wear Production & Tech-Pack Inquiry");
                else if (onNavigateToContact) onNavigateToContact("Custom Western Wear Production & Tech-Pack Inquiry");
              }}
            >
              <span>Request Tech-Pack / Bulk Quote</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>

      {/* =========================================================================
          INTERACTIVE EXPANDABLE SUBCATEGORIES MODAL / DRAWER
          Opens when user clicks on any category card
          ========================================================================= */}
      {selectedCategory && (
        <div 
          className="ww-modal-backdrop animate-fade-in"
          onClick={handleCloseCategory}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-category-title"
        >
          <div 
            className="ww-modal-window animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="ww-modal-header">
              <div className="ww-modal-header-left">
                <img 
                  src={selectedCategory.image} 
                  alt={selectedCategory.name} 
                  className="ww-modal-thumb"
                />
                <div>
                  <div className="ww-modal-pill-row">
                    <span className="ww-modal-num-badge">Category {selectedCategory.number}</span>
                    <span className="ww-modal-count-badge">{selectedCategory.totalCount} Subcategories</span>
                  </div>
                  <h2 id="modal-category-title" className="ww-modal-title">
                    {selectedCategory.name}
                  </h2>
                  <p className="ww-modal-tagline">
                    {selectedCategory.tagline}
                  </p>
                </div>
              </div>

              <button 
                type="button" 
                className="ww-modal-close-btn"
                onClick={handleCloseCategory}
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Filter / Search within category */}
            <div className="ww-modal-search-bar">
              <Search size={16} className="ww-modal-search-icon" />
              <input 
                type="text"
                placeholder={`Search inside ${selectedCategory.name} (e.g., ${selectedCategory.subcategories.slice(0, 2).map(s => s.name).join(', ')})...`}
                value={modalSearch}
                onChange={(e) => setModalSearch(e.target.value)}
                className="ww-modal-search-input"
                autoFocus
              />
              {modalSearch && (
                <button 
                  type="button" 
                  className="ww-search-clear" 
                  onClick={() => setModalSearch('')}
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Modal Body: Subcategories Grid */}
            <div className="ww-modal-body">
              <div className="ww-modal-note-box">
                <Info size={16} />
                <span>Click any subcategory below to initiate a production inquiry, request tech pack specifications, or explore bulk sample sets.</span>
              </div>

              <div className="ww-subcategories-grid">
                {modalSubcategories.map((sub, idx) => (
                  <div 
                    key={sub.slug || idx} 
                    className="ww-subcategory-tile"
                    onClick={() => handleSubcategoryClick(selectedCategory.name, sub.name)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleSubcategoryClick(selectedCategory.name, sub.name);
                      }
                    }}
                  >
                    <div className="ww-sub-tile-main">
                      <div className="ww-sub-bullet" />
                      <span className="ww-sub-name">{sub.name}</span>
                    </div>

                    <div className="ww-sub-tile-right">
                      {sub.tag && <span className="ww-sub-tag">{sub.tag}</span>}
                      <span className="ww-sub-inquire-hint">
                        Inquire <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {modalSubcategories.length === 0 && (
                <div className="ww-modal-empty">
                  <p>No subcategories match "{modalSearch}"</p>
                  <button 
                    type="button" 
                    className="btn btn-outline-burgundy btn-xs"
                    onClick={() => setModalSearch('')}
                  >
                    Clear Filter
                  </button>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="ww-modal-footer">
              <button 
                type="button" 
                className="btn btn-outline-burgundy btn-sm"
                onClick={handleCloseCategory}
              >
                <span>← Back to All Categories</span>
              </button>

              <button 
                type="button" 
                className="btn btn-accent btn-sm"
                onClick={() => handleCategoryInquiry(selectedCategory.name)}
              >
                <Send size={14} />
                <span>Inquire About Entire {selectedCategory.name} Collection</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
