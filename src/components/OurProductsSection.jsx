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
  Send,
  Scissors
} from 'lucide-react';
import { WESTERN_WEAR_CATEGORIES } from '../data/westernWearCategories';
import { FABRIC_CATEGORIES } from '../data/fabricCategories';

export default function OurProductsSection({ onInquire, onNavigateToContact, initialMode = 'garments' }) {
  const [catalogMode, setCatalogMode] = useState(initialMode); // 'garments' | 'fabrics'

  // Garment Category State
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [modalSearch, setModalSearch] = useState('');

  // Fabric Category State
  const [selectedFabricCategory, setSelectedFabricCategory] = useState(null);
  const [fabricSearchQuery, setFabricSearchQuery] = useState('');
  const [activeFabricTab, setActiveFabricTab] = useState('all');
  const [fabricModalSearch, setFabricModalSearch] = useState('');

  // Filter Garment categories based on search or category tabs
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

  // Filter Fabric categories based on search or category tabs
  const filteredFabricCategories = useMemo(() => {
    let list = FABRIC_CATEGORIES;

    if (activeFabricTab !== 'all') {
      list = list.filter(cat => cat.id === activeFabricTab);
    }

    if (fabricSearchQuery.trim()) {
      const q = fabricSearchQuery.toLowerCase().trim();
      list = list.filter(cat => {
        const matchesCategoryName = cat.name.toLowerCase().includes(q);
        const matchesTagline = cat.tagline.toLowerCase().includes(q);
        const matchesVariety = cat.varieties.some(v => 
          v.name.toLowerCase().includes(q) || (v.tag && v.tag.toLowerCase().includes(q))
        );
        return matchesCategoryName || matchesTagline || matchesVariety;
      });
    }

    return list;
  }, [fabricSearchQuery, activeFabricTab]);

  const handleOpenCategory = (cat) => {
    setSelectedCategory(cat);
    setModalSearch('');
  };

  const handleCloseCategory = () => {
    setSelectedCategory(null);
    setModalSearch('');
  };

  const handleOpenFabricCategory = (cat) => {
    setSelectedFabricCategory(cat);
    setFabricModalSearch('');
  };

  const handleCloseFabricCategory = () => {
    setSelectedFabricCategory(null);
    setFabricModalSearch('');
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

  const handleFabricVarietyClick = (fabricCatName, varietyName) => {
    const inquiryText = `Fabric Sourcing Inquiry: ${fabricCatName} - ${varietyName}`;
    if (onInquire) {
      onInquire(inquiryText);
    } else if (onNavigateToContact) {
      onNavigateToContact(inquiryText);
    }
    handleCloseFabricCategory();
  };

  const handleFabricCategoryInquiry = (fabricCatName) => {
    const inquiryText = `Fabric Sourcing Inquiry: ${fabricCatName} Range`;
    if (onInquire) {
      onInquire(inquiryText);
    } else if (onNavigateToContact) {
      onNavigateToContact(inquiryText);
    }
    handleCloseFabricCategory();
  };

  // Subcategories filtered in garment modal
  const modalSubcategories = useMemo(() => {
    if (!selectedCategory) return [];
    if (!modalSearch.trim()) return selectedCategory.subcategories;
    const q = modalSearch.toLowerCase().trim();
    return selectedCategory.subcategories.filter(s => 
      s.name.toLowerCase().includes(q) || (s.tag && s.tag.toLowerCase().includes(q))
    );
  }, [selectedCategory, modalSearch]);

  // Varieties filtered in fabric modal
  const modalFabricVarieties = useMemo(() => {
    if (!selectedFabricCategory) return [];
    if (!fabricModalSearch.trim()) return selectedFabricCategory.varieties;
    const q = fabricModalSearch.toLowerCase().trim();
    return selectedFabricCategory.varieties.filter(v => 
      v.name.toLowerCase().includes(q) || (v.tag && v.tag.toLowerCase().includes(q)) || (v.desc && v.desc.toLowerCase().includes(q))
    );
  }, [selectedFabricCategory, fabricModalSearch]);

  return (
    <section id="our-products" className="our-products-section section-spacing bg-white">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="section-header text-center" style={{ maxWidth: '840px', margin: '0 auto 2rem' }}>
          <div className="section-tag tag-gold" style={{ display: 'inline-flex', marginBottom: '0.75rem' }}>
            <Sparkles size={14} />
            <span>Manufacturing &amp; Material Sourcing</span>
          </div>

          <h2 className="section-title" style={{ fontSize: '2.4rem', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Our Products &amp; Sourcing Portfolio
          </h2>

          <p className="section-description" style={{ fontSize: '1.05rem', lineHeight: '1.6', color: 'var(--color-text-muted)' }}>
            Explore our comprehensive range across finished Western Wear garments (11 core categories, 88 curated styles) and mill-direct Fabric sourcing (6 core categories, 27 fabric varieties).
          </p>

          {/* Mode Switcher Tabs */}
          <div className="catalog-mode-switcher-wrap" style={{ marginTop: '1.75rem', display: 'flex', justifyContent: 'center' }}>
            <div className="catalog-mode-pill-box">
              <button
                type="button"
                className={`catalog-mode-btn ${catalogMode === 'garments' ? 'active' : ''}`}
                onClick={() => setCatalogMode('garments')}
                id="tab-btn-garments"
              >
                <ShoppingBag size={18} />
                <span>Western Wear (11 Categories &bull; 88 Styles)</span>
              </button>
              <button
                type="button"
                className={`catalog-mode-btn ${catalogMode === 'fabrics' ? 'active' : ''}`}
                onClick={() => setCatalogMode('fabrics')}
                id="tab-btn-fabrics"
              >
                <Layers size={18} />
                <span>Fabric Details (6 Categories &bull; 27 Varieties)</span>
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================================
            TAB 1: WESTERN WEAR APPARELS
            ========================================================================= */}
        {catalogMode === 'garments' && (
          <div className="catalog-view-panel animate-fade-in">
            {/* Search & Filter Toolbar */}
            <div className="ww-filter-toolbar">
              {/* Search Bar */}
              <div className="ww-search-box">
                <Search size={18} className="ww-search-icon" />
                <input 
                  type="text"
                  placeholder="Search all 88 apparel styles (e.g. Crop Tops, Blazers, Midi Dresses, Denim, Flannel)..."
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

            {/* RESPONSIVE 11 CATEGORY CARDS GRID */}
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
                  <div className="ww-category-image-wrap">
                    <img 
                      src={cat.image} 
                      alt={`Western Wear - ${cat.name}`} 
                      loading="lazy"
                      className="ww-category-img"
                    />
                    
                    <div className="ww-card-scrim-top" />
                    <div className="ww-card-scrim-bottom" />

                    <div className="ww-card-top-badges">
                      <span className="ww-card-num-pill">{cat.number}</span>
                      <span className="ww-card-count-pill">{cat.badge}</span>
                    </div>

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

            {/* Sourcing Advisory Callout */}
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
        )}

        {/* =========================================================================
            TAB 2: FABRIC DETAILS & SOURCING
            ========================================================================= */}
        {catalogMode === 'fabrics' && (
          <div className="catalog-view-panel animate-fade-in">
            {/* Search & Filter Toolbar */}
            <div className="ww-filter-toolbar">
              {/* Search Bar */}
              <div className="ww-search-box">
                <Search size={18} className="ww-search-icon" />
                <input 
                  type="text"
                  placeholder="Search fabric varieties (e.g. Cotton Poplin, Rayon, Poly Georgette, Moss Crepe, Linen Blend, Rib Knit)..."
                  value={fabricSearchQuery}
                  onChange={(e) => setFabricSearchQuery(e.target.value)}
                  className="ww-search-input"
                  id="fabric-search-input"
                />
                {fabricSearchQuery && (
                  <button 
                    type="button" 
                    className="ww-search-clear" 
                    onClick={() => setFabricSearchQuery('')}
                    aria-label="Clear fabric search"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {/* Quick Fabric Categories Filter Pills */}
              <div className="ww-category-pills-bar" role="tablist">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeFabricTab === 'all'}
                  className={`ww-cat-pill ${activeFabricTab === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveFabricTab('all')}
                >
                  All Fabrics (6)
                </button>
                {FABRIC_CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={activeFabricTab === cat.id}
                    className={`ww-cat-pill ${activeFabricTab === cat.id ? 'active' : ''}`}
                    onClick={() => setActiveFabricTab(cat.id)}
                  >
                    {cat.name} ({cat.totalCount})
                  </button>
                ))}
              </div>
            </div>

            {/* Results Counter if searching */}
            {fabricSearchQuery.trim() && (
              <div className="ww-search-status-bar">
                <span>Showing results for "<strong>{fabricSearchQuery}</strong>" — {filteredFabricCategories.length} fabric categories matched</span>
                <button type="button" className="ww-reset-link" onClick={() => setFabricSearchQuery('')}>Reset</button>
              </div>
            )}

            {/* FABRIC CARDS GRID */}
            <div className="fabrics-grid">
              {filteredFabricCategories.map((cat) => (
                <div key={cat.id} className="fabric-card">
                  <div className="fabric-card-header">
                    <div className="fabric-card-num-box">
                      <span className="fabric-num">{cat.number}</span>
                      <div>
                        <h3 className="fabric-title">{cat.name}</h3>
                        <span className="fabric-count-badge">{cat.badge}</span>
                      </div>
                    </div>
                    <button 
                      type="button" 
                      className="fabric-inquire-icon-btn"
                      title={`Inquire about ${cat.name}`}
                      onClick={() => handleFabricCategoryInquiry(cat.name)}
                    >
                      <Send size={15} />
                    </button>
                  </div>

                  <p className="fabric-tagline">{cat.tagline}</p>
                  <p className="fabric-desc">{cat.description}</p>

                  <div className="fabric-varieties-box">
                    <div className="fabric-varieties-label">
                      <span>Fabric Varieties Available:</span>
                    </div>
                    <div className="fabric-chips-wrap">
                      {cat.varieties.map((v, i) => (
                        <button
                          key={v.slug || i}
                          type="button"
                          className="fabric-variety-chip"
                          title={`Click to inquire about ${v.name}`}
                          onClick={() => handleFabricVarietyClick(cat.name, v.name)}
                        >
                          <span className="chip-bullet" />
                          <span className="chip-text">{v.name}</span>
                          {v.tag && <span className="chip-tag">{v.tag}</span>}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="fabric-card-footer">
                    <button
                      type="button"
                      className="btn btn-outline-burgundy btn-sm fabric-action-btn"
                      onClick={() => handleOpenFabricCategory(cat)}
                    >
                      <span>View Specifications</span>
                      <ChevronRight size={15} />
                    </button>
                    <button
                      type="button"
                      className="btn btn-accent btn-sm fabric-action-btn"
                      onClick={() => handleFabricCategoryInquiry(cat.name)}
                    >
                      <span>Inquire Sourcing</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredFabricCategories.length === 0 && (
              <div className="ww-empty-state">
                <Filter size={40} className="ww-empty-icon" />
                <h3>No matching fabrics found</h3>
                <p>Try searching for Cotton, Viscose, Polyester, Linen, Knitted Fabrics, or Denim.</p>
                <button 
                  type="button" 
                  className="btn btn-outline-burgundy btn-sm"
                  onClick={() => { setFabricSearchQuery(''); setActiveFabricTab('all'); }}
                >
                  Show All 6 Fabric Categories
                </button>
              </div>
            )}

            {/* Fabric Sourcing Advisory Callout */}
            <div className="ww-sourcing-banner">
              <div className="ww-sourcing-content">
                <div className="ww-sourcing-icon-box">
                  <Layers size={26} />
                </div>
                <div>
                  <h4 className="ww-sourcing-title">Need Mill-Direct Fabric Sourcing &amp; Laboratory Test Reports?</h4>
                  <p className="ww-sourcing-desc">
                    We coordinate high-grade mill supplies with lab-tested colorfastness, shrinkage control, GSM verification, and Myntra Quality Control (QC) compliance across all commercial weaves.
                  </p>
                </div>
              </div>
              <div className="ww-sourcing-actions">
                <button 
                  type="button" 
                  className="btn btn-accent btn-md"
                  onClick={() => {
                    if (onInquire) onInquire("Mill-Direct Fabric Sourcing & Swatches Request");
                    else if (onNavigateToContact) onNavigateToContact("Mill-Direct Fabric Sourcing & Swatches Request");
                  }}
                >
                  <span>Request Fabric Swatches</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* =========================================================================
          INTERACTIVE EXPANDABLE SUBCATEGORIES MODAL (GARMENTS)
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

            {/* Modal Filter */}
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

            {/* Modal Body */}
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

      {/* =========================================================================
          INTERACTIVE EXPANDABLE FABRICS MODAL
          ========================================================================= */}
      {selectedFabricCategory && (
        <div 
          className="ww-modal-backdrop animate-fade-in"
          onClick={handleCloseFabricCategory}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-fabric-title"
        >
          <div 
            className="ww-modal-window animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="ww-modal-header">
              <div className="ww-modal-header-left">
                <div className="fabric-modal-icon-badge">
                  <Layers size={28} />
                </div>
                <div>
                  <div className="ww-modal-pill-row">
                    <span className="ww-modal-num-badge">Fabric Category {selectedFabricCategory.number}</span>
                    <span className="ww-modal-count-badge">{selectedFabricCategory.totalCount} Varieties</span>
                  </div>
                  <h2 id="modal-fabric-title" className="ww-modal-title">
                    {selectedFabricCategory.name}
                  </h2>
                  <p className="ww-modal-tagline">
                    {selectedFabricCategory.tagline}
                  </p>
                </div>
              </div>

              <button 
                type="button" 
                className="ww-modal-close-btn"
                onClick={handleCloseFabricCategory}
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Filter */}
            <div className="ww-modal-search-bar">
              <Search size={16} className="ww-modal-search-icon" />
              <input 
                type="text"
                placeholder={`Search inside ${selectedFabricCategory.name} (e.g., ${selectedFabricCategory.varieties.slice(0, 2).map(v => v.name).join(', ')})...`}
                value={fabricModalSearch}
                onChange={(e) => setFabricModalSearch(e.target.value)}
                className="ww-modal-search-input"
                autoFocus
              />
              {fabricModalSearch && (
                <button 
                  type="button" 
                  className="ww-search-clear" 
                  onClick={() => setFabricModalSearch('')}
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Modal Body */}
            <div className="ww-modal-body">
              <div className="ww-modal-note-box">
                <Info size={16} />
                <span>Click any fabric variety below to request sample swatches, GSM &amp; weave test reports, or bulk yardage procurement.</span>
              </div>

              <div className="fabric-spec-grid">
                {modalFabricVarieties.map((v, idx) => (
                  <div 
                    key={v.slug || idx} 
                    className="fabric-spec-tile"
                    onClick={() => handleFabricVarietyClick(selectedFabricCategory.name, v.name)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleFabricVarietyClick(selectedFabricCategory.name, v.name);
                      }
                    }}
                  >
                    <div className="fabric-spec-head">
                      <span className="fabric-spec-name">{v.name}</span>
                      {v.tag && <span className="chip-tag">{v.tag}</span>}
                    </div>
                    <p className="fabric-spec-desc">{v.desc}</p>
                    <div className="fabric-spec-action">
                      <span>Request Swatch / Quote</span>
                      <ArrowRight size={13} />
                    </div>
                  </div>
                ))}
              </div>

              {modalFabricVarieties.length === 0 && (
                <div className="ww-modal-empty">
                  <p>No fabric varieties match "{fabricModalSearch}"</p>
                  <button 
                    type="button" 
                    className="btn btn-outline-burgundy btn-xs"
                    onClick={() => setFabricModalSearch('')}
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
                onClick={handleCloseFabricCategory}
              >
                <span>← Back to All Fabrics</span>
              </button>

              <button 
                type="button" 
                className="btn btn-accent btn-sm"
                onClick={() => handleFabricCategoryInquiry(selectedFabricCategory.name)}
              >
                <Send size={14} />
                <span>Inquire About Entire {selectedFabricCategory.name} Collection</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
