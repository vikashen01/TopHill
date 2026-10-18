import React, { useState, useEffect } from 'react';
import { 
  Lock, 
  ShieldCheck, 
  User, 
  LogOut, 
  LayoutDashboard, 
  Inbox, 
  Package, 
  Building2, 
  Search, 
  Filter, 
  Download, 
  Plus, 
  Trash2, 
  Eye, 
  MessageCircle, 
  Phone, 
  Mail, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  TrendingUp, 
  AlertCircle,
  Sparkles,
  FileText,
  DollarSign
} from 'lucide-react';
import BrandLogo from '../components/BrandLogo';

export default function AdminPage({ navigateTo }) {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('tophill_admin_session') === 'true';
  });

  const [loginCreds, setLoginCreds] = useState({
    username: '',
    password: ''
  });
  const [loginError, setLoginError] = useState('');

  // Active Tab: 'dashboard' | 'inquiries' | 'plans' | 'settings'
  const [activeTab, setActiveTab] = useState('dashboard');

  // Inquiries State
  const [inquiries, setInquiries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [typeFilter, setTypeFilter] = useState('ALL');

  // Detail Modal State
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [adminNoteInput, setAdminNoteInput] = useState('');

  // Add Manual Lead Modal
  const [showAddModal, setShowAddModal] = useState(false);
  const [newLead, setNewLead] = useState({
    fullName: '',
    companyName: '',
    phoneNumber: '',
    emailAddress: '',
    natureOfInquiry: 'Myntra Business Plan - PREMIUM PLAN',
    message: ''
  });

  // Load inquiries and seed sample data if empty
  useEffect(() => {
    try {
      const stored = localStorage.getItem('tophill_inquiries_log');
      if (stored && JSON.parse(stored).length > 0) {
        setInquiries(JSON.parse(stored));
      } else {
        // Seed initial sample inquiries for demonstration
        const seedData = [
          {
            id: 'THT-982145',
            fullName: 'Aarav Sharma',
            companyName: 'Sharma Apparel Studio',
            phoneNumber: '+91 98765 43210',
            emailAddress: 'aarav@sharmaapparel.com',
            natureOfInquiry: 'Myntra Business Plan - PREMIUM PLAN',
            message: 'Interested in PREMIUM PLAN (₹25,00,000/- for 100 SKU). We manufacture cotton shirts and need Myntra top brand authorization.',
            timestamp: '17/10/2026, 8:15:30 pm',
            status: 'NEW',
            notes: 'Priority lead. Interested in 100 SKU onboarding.'
          },
          {
            id: 'THT-845120',
            fullName: 'Rajesh Verma',
            companyName: 'Apex Fashion Exports',
            phoneNumber: '+91 98111 22334',
            emailAddress: 'rajesh@apexfashion.in',
            natureOfInquiry: 'Garment Manufacturing Coordination',
            message: 'Need garment production coordination for Roadster and Mast & Harbour styles. Looking for 5,000 units initial batch.',
            timestamp: '17/10/2026, 6:40:12 pm',
            status: 'CONTACTED',
            notes: 'Spoke with client on phone. Sent sample tech-pack specifications.'
          },
          {
            id: 'THT-712390',
            fullName: 'Priya Kapoor',
            companyName: 'Urban Silhouette Ltd',
            phoneNumber: '+91 98222 33445',
            emailAddress: 'priya@urbansilhouette.com',
            natureOfInquiry: 'Myntra Business Plan - ENTERPRISE PLAN',
            message: 'Discussing ENTERPRISE PLAN (₹50,00,000/- for 300 SKU) for DressBerry women wear collection.',
            timestamp: '16/10/2026, 3:20:05 pm',
            status: 'CONVERTED',
            notes: 'MOU signed for 300 SKU cataloging and Myntra QC pass.'
          }
        ];
        localStorage.setItem('tophill_inquiries_log', JSON.stringify(seedData));
        setInquiries(seedData);
      }
    } catch (e) {
      console.warn('Inquiries storage read error', e);
    }
  }, []);

  // Save changes to localStorage
  const saveInquiries = (updated) => {
    setInquiries(updated);
    try {
      localStorage.setItem('tophill_inquiries_log', JSON.stringify(updated));
    } catch (e) {
      console.warn('Failed to save inquiries', e);
    }
  };

  // Login handler
  const handleLogin = (e) => {
    e.preventDefault();
    const cleanUser = (loginCreds.username || '').trim().toLowerCase();
    const cleanPass = (loginCreds.password || '').trim();

    const validUsernames = [
      'tophilltextile26@gmail.com',
      'admin@tophilltextile.com',
      'admin',
      '9899763193'
    ];

    if (validUsernames.includes(cleanUser) && cleanPass === 'admin123') {
      setIsAuthenticated(true);
      sessionStorage.setItem('tophill_admin_session', 'true');
      setLoginError('');
    } else {
      setLoginError('Invalid credentials. Use tophilltextile26@gmail.com / admin123');
    }
  };

  // Quick autofill demo credentials
  const handleAutofill = () => {
    setLoginCreds({
      username: 'tophilltextile26@gmail.com',
      password: 'admin123'
    });
    setLoginError('');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('tophill_admin_session');
  };

  // Status Change
  const handleStatusChange = (inquiryId, newStatus) => {
    const updated = inquiries.map((item) => {
      if (item.id === inquiryId) {
        return { ...item, status: newStatus };
      }
      return item;
    });
    saveInquiries(updated);
    if (selectedInquiry && selectedInquiry.id === inquiryId) {
      setSelectedInquiry((prev) => ({ ...prev, status: newStatus }));
    }
  };

  // Save Admin Note
  const handleSaveNote = () => {
    if (!selectedInquiry) return;
    const updated = inquiries.map((item) => {
      if (item.id === selectedInquiry.id) {
        return { ...item, notes: adminNoteInput };
      }
      return item;
    });
    saveInquiries(updated);
    setSelectedInquiry((prev) => ({ ...prev, notes: adminNoteInput }));
  };

  // Delete Inquiry
  const handleDeleteInquiry = (id) => {
    if (window.confirm(`Are you sure you want to delete inquiry ${id}?`)) {
      const updated = inquiries.filter((item) => item.id !== id);
      saveInquiries(updated);
      if (selectedInquiry && selectedInquiry.id === id) {
        setSelectedInquiry(null);
      }
    }
  };

  // Add Manual Lead
  const handleAddLeadSubmit = (e) => {
    e.preventDefault();
    if (!newLead.fullName.trim() || !newLead.phoneNumber.trim()) {
      alert('Name and Phone are mandatory');
      return;
    }
    const leadRecord = {
      id: `THT-${Date.now().toString().slice(-6)}`,
      fullName: newLead.fullName.trim(),
      companyName: newLead.companyName.trim() || 'Direct Lead',
      phoneNumber: newLead.phoneNumber.trim(),
      emailAddress: newLead.emailAddress.trim() || 'N/A',
      natureOfInquiry: newLead.natureOfInquiry,
      message: newLead.message.trim() || 'Recorded manually via Admin Portal.',
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      status: 'NEW',
      notes: 'Manually logged by admin.'
    };
    saveInquiries([leadRecord, ...inquiries]);
    setShowAddModal(false);
    setNewLead({
      fullName: '',
      companyName: '',
      phoneNumber: '',
      emailAddress: '',
      natureOfInquiry: 'Myntra Business Plan - PREMIUM PLAN',
      message: ''
    });
  };

  // Export to CSV
  const handleExportCSV = () => {
    if (inquiries.length === 0) {
      alert('No inquiries to export');
      return;
    }
    const headers = ['Inquiry ID', 'Full Name', 'Company', 'Phone', 'Email', 'Nature/Plan', 'Status', 'Timestamp', 'Message', 'Notes'];
    const rows = inquiries.map((inq) => [
      `"${inq.id || ''}"`,
      `"${(inq.fullName || '').replace(/"/g, '""')}"`,
      `"${(inq.companyName || '').replace(/"/g, '""')}"`,
      `"${(inq.phoneNumber || '').replace(/"/g, '""')}"`,
      `"${(inq.emailAddress || '').replace(/"/g, '""')}"`,
      `"${(inq.natureOfInquiry || '').replace(/"/g, '""')}"`,
      `"${inq.status || 'NEW'}"`,
      `"${inq.timestamp || ''}"`,
      `"${(inq.message || '').replace(/"/g, '""')}"`,
      `"${(inq.notes || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `TopHill_Inquiries_Export_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtered Inquiries
  const filteredInquiries = inquiries.filter((inq) => {
    const matchesSearch =
      inq.fullName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.companyName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.phoneNumber?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.emailAddress?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.id?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.message?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'ALL' || (inq.status || 'NEW') === statusFilter;
    const matchesType = typeFilter === 'ALL' || (inq.natureOfInquiry || '').includes(typeFilter);

    return matchesSearch && matchesStatus && matchesType;
  });

  // Calculate Metrics
  const totalInquiries = inquiries.length;
  const newInquiries = inquiries.filter((i) => !i.status || i.status === 'NEW').length;
  const convertedInquiries = inquiries.filter((i) => i.status === 'CONVERTED').length;
  const myntraPlanInquiries = inquiries.filter((i) => (i.natureOfInquiry || '').includes('Plan')).length;

  // ==========================================
  // RENDER: LOGIN VIEW (If not logged in)
  // ==========================================
  if (!isAuthenticated) {
    return (
      <div className="admin-wrapper animate-fade-in">
        <div className="admin-login-container">
          <div className="admin-login-card">
            <div className="login-header">
              <div className="login-badge">
                <Lock size={14} />
                <span>TopHill Textile Staff</span>
              </div>
              <h1 className="login-title">Admin Management Portal</h1>
              <p className="login-sub">Secure access to inquiries, client leads, and corporate operations.</p>
            </div>

            <div className="login-hint-box">
              <strong>Official Admin Authentication Credentials:</strong><br />
              Authorized Email: <code>tophilltextile26@gmail.com</code><br />
              Password: <code>admin123</code><br />
              <small style={{ color: 'var(--color-text-muted)', fontSize: '0.72rem' }}>
                Also accepts: <code>admin</code> or <code>admin@tophilltextile.com</code> or <code>9899763193</code>
              </small>
              <button 
                type="button" 
                onClick={handleAutofill}
                style={{
                  display: 'block',
                  marginTop: '0.45rem',
                  fontSize: '0.78rem',
                  color: 'var(--color-primary)',
                  fontWeight: 700,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }}
              >
                Click to Auto-fill Login Credentials
              </button>
            </div>

            {loginError && (
              <div style={{ color: '#D32F2F', fontSize: '0.85rem', marginBottom: '1rem', fontWeight: 600 }}>
                {loginError}
              </div>
            )}

            <form onSubmit={handleLogin}>
              <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                <label className="form-label" style={{ fontSize: '0.85rem' }}>Admin Email / Username</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="tophilltextile26@gmail.com"
                  value={loginCreds.username}
                  onChange={(e) => setLoginCreds({ ...loginCreds, username: e.target.value })}
                  required
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1.75rem' }}>
                <label className="form-label" style={{ fontSize: '0.85rem' }}>Password</label>
                <input
                  type="password"
                  className="form-input"
                  placeholder="••••••••"
                  value={loginCreds.password}
                  onChange={(e) => setLoginCreds({ ...loginCreds, password: e.target.value })}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                <span>Access Admin Portal</span>
                <ArrowRight size={18} />
              </button>
            </form>

            <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              <button
                type="button"
                onClick={() => navigateTo('home')}
                style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', fontSize: '0.85rem', cursor: 'pointer' }}
              >
                &larr; Return to Public Website
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // RENDER: AUTHENTICATED PORTAL VIEW
  // ==========================================
  return (
    <div className="admin-wrapper animate-fade-in">
      <div className="admin-dashboard-layout">
        {/* Sidebar */}
        <aside className="admin-sidebar">
          <div className="sidebar-brand-header">
            <span className="sidebar-title">TopHill Textile</span>
            <span className="sidebar-subtitle">Corporate Admin Portal</span>
          </div>

          <nav className="sidebar-nav">
            <button
              type="button"
              className={`sidebar-tab-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              <div className="sidebar-tab-content">
                <LayoutDashboard size={18} />
                <span>Dashboard</span>
              </div>
            </button>

            <button
              type="button"
              className={`sidebar-tab-btn ${activeTab === 'inquiries' ? 'active' : ''}`}
              onClick={() => setActiveTab('inquiries')}
            >
              <div className="sidebar-tab-content">
                <Inbox size={18} />
                <span>Inquiries &amp; Leads</span>
              </div>
              <span className="sidebar-counter">{inquiries.length}</span>
            </button>

            <button
              type="button"
              className={`sidebar-tab-btn ${activeTab === 'plans' ? 'active' : ''}`}
              onClick={() => setActiveTab('plans')}
            >
              <div className="sidebar-tab-content">
                <Package size={18} />
                <span>Myntra Plans</span>
              </div>
            </button>

            <button
              type="button"
              className={`sidebar-tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              <div className="sidebar-tab-content">
                <Building2 size={18} />
                <span>Corporate Coordinates</span>
              </div>
            </button>
          </nav>

          <div className="sidebar-footer">
            <div className="admin-user-info">
              <div className="admin-avatar">TH</div>
              <div>
                <strong style={{ fontSize: '0.85rem', color: '#FFFFFF', display: 'block' }}>Administrator</strong>
                <span style={{ fontSize: '0.72rem', color: '#BDB4A5' }}>tophilltextile26@gmail.com</span>
              </div>
            </div>

            <button
              type="button"
              className="sidebar-logout-btn"
              onClick={handleLogout}
            >
              <LogOut size={16} />
              <span>Log Out</span>
            </button>

            <button
              type="button"
              onClick={() => navigateTo('home')}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--color-accent-light)',
                fontSize: '0.8rem',
                cursor: 'pointer',
                textAlign: 'center',
                paddingTop: '0.25rem'
              }}
            >
              &larr; View Public Site
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="admin-main-viewport">
          {/* Header Title */}
          <div className="admin-view-header">
            <div>
              <h1 className="view-heading-title">
                {activeTab === 'dashboard' && 'Executive Overview'}
                {activeTab === 'inquiries' && 'Inquiry Management System'}
                {activeTab === 'plans' && 'Myntra Business Plans Scope'}
                {activeTab === 'settings' && 'Corporate Identification & Credentials'}
              </h1>
              <p className="view-heading-sub">
                TopHill Textile Pvt. Ltd. &bull; G-137, Sector 63, Noida &bull; GSTIN: 09AAMCT5200E1ZH
              </p>
            </div>

            <div className="view-header-actions">
              {activeTab === 'inquiries' && (
                <>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => setShowAddModal(true)}
                  >
                    <Plus size={16} />
                    <span>Add Manual Lead</span>
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={handleExportCSV}
                  >
                    <Download size={16} />
                    <span>Export to CSV</span>
                  </button>
                </>
              )}
            </div>
          </div>

          {/* ========================================================
              TAB 1: DASHBOARD OVERVIEW
              ======================================================== */}
          {activeTab === 'dashboard' && (
            <div>
              {/* KPI Cards */}
              <div className="admin-kpi-grid">
                <div className="admin-kpi-card">
                  <div>
                    <div className="kpi-label">Total Inquiries</div>
                    <div className="kpi-value">{totalInquiries}</div>
                    <div className="kpi-sub">Total inbound records</div>
                  </div>
                  <div className="kpi-icon-bubble" style={{ background: '#E3F2FD', color: '#1565C0' }}>
                    <Inbox size={22} />
                  </div>
                </div>

                <div className="admin-kpi-card">
                  <div>
                    <div className="kpi-label">New / Pending</div>
                    <div className="kpi-value" style={{ color: '#E91E63' }}>{newInquiries}</div>
                    <div className="kpi-sub">Requires follow-up</div>
                  </div>
                  <div className="kpi-icon-bubble" style={{ background: '#FCE4EC', color: '#E91E63' }}>
                    <Clock size={22} />
                  </div>
                </div>

                <div className="admin-kpi-card">
                  <div>
                    <div className="kpi-label">Myntra Growth Plans</div>
                    <div className="kpi-value" style={{ color: '#B8860B' }}>{myntraPlanInquiries}</div>
                    <div className="kpi-sub">Basic, Premium, Enterprise</div>
                  </div>
                  <div className="kpi-icon-bubble" style={{ background: '#FFF8E1', color: '#B8860B' }}>
                    <Sparkles size={22} />
                  </div>
                </div>

                <div className="admin-kpi-card">
                  <div>
                    <div className="kpi-label">Converted MOUs</div>
                    <div className="kpi-value" style={{ color: '#2E7D32' }}>{convertedInquiries}</div>
                    <div className="kpi-sub">Active agreements</div>
                  </div>
                  <div className="kpi-icon-bubble" style={{ background: '#E8F5E9', color: '#2E7D32' }}>
                    <CheckCircle2 size={22} />
                  </div>
                </div>
              </div>

              {/* Quick Actions & Recent Table Preview */}
              <div className="corporate-card" style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary)', margin: 0 }}>
                    Recent Client Inquiries
                  </h3>
                  <button
                    type="button"
                    className="btn btn-outline-burgundy btn-sm"
                    onClick={() => setActiveTab('inquiries')}
                  >
                    <span>View All Inquiries ({inquiries.length})</span>
                    <ArrowRight size={14} />
                  </button>
                </div>

                <div className="inquiries-table-container">
                  <table className="admin-data-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Client</th>
                        <th>Contact</th>
                        <th>Plan / Scope</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {inquiries.slice(0, 5).map((inq) => (
                        <tr key={inq.id}>
                          <td><span className="table-id-pill">{inq.id}</span></td>
                          <td>
                            <strong className="table-client-name">{inq.fullName}</strong>
                            <span className="table-company-sub">{inq.companyName || 'Not specified'}</span>
                          </td>
                          <td>
                            <div className="table-contact-info">
                              <span>{inq.phoneNumber}</span>
                              <span style={{ color: 'var(--color-text-subtle)' }}>{inq.emailAddress}</span>
                            </div>
                          </td>
                          <td>
                            <span 
                              className="table-plan-badge"
                              style={{
                                background: inq.natureOfInquiry.includes('ENTERPRISE') ? '#E3F2FD' : (inq.natureOfInquiry.includes('PREMIUM') ? '#FCE4EC' : '#FFF8E1'),
                                color: inq.natureOfInquiry.includes('ENTERPRISE') ? '#0D47A1' : (inq.natureOfInquiry.includes('PREMIUM') ? '#880E4F' : '#B8860B')
                              }}
                            >
                              {inq.natureOfInquiry.replace('Myntra Business Plan - ', '')}
                            </span>
                          </td>
                          <td>
                            <span className={`status-pill status-${(inq.status || 'NEW').toLowerCase()}`}>
                              {inq.status || 'NEW'}
                            </span>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn-table-action"
                              title="View details"
                              onClick={() => {
                                setSelectedInquiry(inq);
                                setAdminNoteInput(inq.notes || '');
                              }}
                            >
                              <Eye size={15} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================
              TAB 2: INQUIRIES & LEADS MANAGEMENT
              ======================================================== */}
          {activeTab === 'inquiries' && (
            <div>
              {/* Search & Filter Toolbar */}
              <div className="inquiries-toolbar">
                <div className="toolbar-search-box">
                  <Search size={18} style={{ color: 'var(--color-text-subtle)' }} />
                  <input
                    type="text"
                    className="toolbar-search-input"
                    placeholder="Search by name, company, phone, email, or inquiry ID..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#999' }}
                    >
                      &times;
                    </button>
                  )}
                </div>

                <div className="toolbar-filters-group">
                  <select
                    className="filter-select"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option value="ALL">All Statuses</option>
                    <option value="NEW">Status: NEW</option>
                    <option value="CONTACTED">Status: CONTACTED</option>
                    <option value="CONVERTED">Status: CONVERTED</option>
                    <option value="ARCHIVED">Status: ARCHIVED</option>
                  </select>

                  <select
                    className="filter-select"
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                  >
                    <option value="ALL">All Categories</option>
                    <option value="Plan">Myntra Plans</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="QC Pass">QC Pass</option>
                    <option value="General">General Inquiry</option>
                  </select>
                </div>
              </div>

              {/* Inquiries Table */}
              <div className="inquiries-table-container">
                <table className="admin-data-table">
                  <thead>
                    <tr>
                      <th>Inquiry ID</th>
                      <th>Client Name &amp; Brand</th>
                      <th>Direct Contact</th>
                      <th>Scope / Plan</th>
                      <th>Received Date</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredInquiries.length === 0 ? (
                      <tr>
                        <td colSpan="7" style={{ textAlign: 'center', padding: '3rem', color: 'var(--color-text-subtle)' }}>
                          No inquiries match the current search / filter criteria.
                        </td>
                      </tr>
                    ) : (
                      filteredInquiries.map((inq) => (
                        <tr key={inq.id}>
                          <td>
                            <span className="table-id-pill">{inq.id}</span>
                          </td>
                          <td>
                            <strong className="table-client-name">{inq.fullName}</strong>
                            <span className="table-company-sub">{inq.companyName || 'Not specified'}</span>
                          </td>
                          <td>
                            <div className="table-contact-info">
                              <a href={`tel:${inq.phoneNumber}`} className="table-contact-link">
                                <Phone size={12} /> {inq.phoneNumber}
                              </a>
                              <a href={`mailto:${inq.emailAddress}`} className="table-contact-link" style={{ color: 'var(--color-text-muted)' }}>
                                <Mail size={12} /> {inq.emailAddress}
                              </a>
                            </div>
                          </td>
                          <td>
                            <span 
                              className="table-plan-badge"
                              style={{
                                background: inq.natureOfInquiry.includes('ENTERPRISE') ? '#E3F2FD' : (inq.natureOfInquiry.includes('PREMIUM') ? '#FCE4EC' : '#FFF8E1'),
                                color: inq.natureOfInquiry.includes('ENTERPRISE') ? '#0D47A1' : (inq.natureOfInquiry.includes('PREMIUM') ? '#880E4F' : '#B8860B')
                              }}
                            >
                              {inq.natureOfInquiry.replace('Myntra Business Plan - ', '')}
                            </span>
                          </td>
                          <td style={{ fontSize: '0.8rem', color: 'var(--color-text-subtle)' }}>
                            {inq.timestamp}
                          </td>
                          <td>
                            <select
                              value={inq.status || 'NEW'}
                              onChange={(e) => handleStatusChange(inq.id, e.target.value)}
                              className={`status-pill status-${(inq.status || 'NEW').toLowerCase()}`}
                              style={{ border: 'none', cursor: 'pointer', outline: 'none' }}
                            >
                              <option value="NEW">NEW</option>
                              <option value="CONTACTED">CONTACTED</option>
                              <option value="CONVERTED">CONVERTED</option>
                              <option value="ARCHIVED">ARCHIVED</option>
                            </select>
                          </td>
                          <td>
                            <div className="table-actions-cell">
                              <button
                                type="button"
                                className="btn-table-action"
                                title="View inquiry message & add notes"
                                onClick={() => {
                                  setSelectedInquiry(inq);
                                  setAdminNoteInput(inq.notes || '');
                                }}
                              >
                                <Eye size={15} />
                              </button>
                              <a
                                href={`https://wa.me/${(inq.phoneNumber || '').replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(inq.fullName)},%20this%20is%20TopHill%20Textile%20regarding%20your%20inquiry%20${inq.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-table-action"
                                title="Chat on WhatsApp"
                                style={{ color: '#25D366' }}
                              >
                                <MessageCircle size={15} />
                              </a>
                              <button
                                type="button"
                                className="btn-table-action delete-action"
                                title="Delete inquiry record"
                                onClick={() => handleDeleteInquiry(inq.id)}
                              >
                                <Trash2 size={15} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ========================================================
              TAB 3: MYNTRA PLANS BREAKDOWN
              ======================================================== */}
          {activeTab === 'plans' && (
            <div>
              <div className="corporate-card" style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
                  Myntra Partnership Growth Plans
                </h3>
                <p style={{ marginBottom: '1.5rem' }}>
                  TopHill Textile coordinates full production and Myntra onboarding to QC pass under three commercial tiers:
                </p>

                <div className="admin-kpi-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                  <div className="corporate-card" style={{ borderTop: '4px solid #B8860B' }}>
                    <h4 style={{ color: '#B8860B', fontSize: '1.25rem' }}>BASIC PLAN</h4>
                    <p style={{ fontSize: '1.75rem', fontWeight: 800, margin: '0.5rem 0' }}>₹10,00,000/-</p>
                    <p style={{ fontWeight: 700, color: '#B8860B' }}>30 SKU</p>
                    <ul style={{ paddingLeft: '1.2rem', fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
                      <li>Products: 10 lacs</li>
                      <li>Myntra's top 10 private brand approval</li>
                      <li>Retailer &amp; wholesale authorization</li>
                      <li>Royalty / Commission*</li>
                      <li>100 Free product listings*</li>
                    </ul>
                  </div>

                  <div className="corporate-card" style={{ borderTop: '4px solid #C2185B' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <h4 style={{ color: '#C2185B', fontSize: '1.25rem' }}>PREMIUM PLAN</h4>
                      <span className="popular-badge" style={{ position: 'static', transform: 'none', width: 'auto', padding: '0.2rem 0.5rem', background: '#C2185B' }}>POPULAR</span>
                    </div>
                    <p style={{ fontSize: '1.75rem', fontWeight: 800, margin: '0.5rem 0' }}>₹25,00,000/-</p>
                    <p style={{ fontWeight: 700, color: '#C2185B' }}>100 SKU</p>
                    <ul style={{ paddingLeft: '1.2rem', fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
                      <li>Products: 25 lacs</li>
                      <li>Authorization for eCommerce platforms</li>
                      <li>Royalty / Commission* 2%</li>
                      <li>200 Free product listings*</li>
                    </ul>
                  </div>

                  <div className="corporate-card" style={{ borderTop: '4px solid #1565C0' }}>
                    <h4 style={{ color: '#1565C0', fontSize: '1.25rem' }}>ENTERPRISE PLAN</h4>
                    <p style={{ fontSize: '1.75rem', fontWeight: 800, margin: '0.5rem 0' }}>₹50,00,000/-</p>
                    <p style={{ fontWeight: 700, color: '#1565C0' }}>300 SKU</p>
                    <ul style={{ paddingLeft: '1.2rem', fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
                      <li>Products: 50 lacs</li>
                      <li>Royalty / Commission* 5%</li>
                      <li>500 Free product listings*</li>
                      <li>Full eCommerce sale and logistic support*</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================
              TAB 4: CORPORATE COORDINATES
              ======================================================== */}
          {activeTab === 'settings' && (
            <div className="corporate-card">
              <h3 style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
                Corporate Entity Details &amp; Contact Configurations
              </h3>

              <div className="info-fields-table">
                <div className="info-row">
                  <div className="info-cell-label">Registered Corporate Name:</div>
                  <div className="info-cell-value"><strong>TopHill Textile Pvt. Ltd.</strong></div>
                </div>

                <div className="info-row">
                  <div className="info-cell-label">Corporate Office Address:</div>
                  <div className="info-cell-value">
                    G-137, 2nd Floor, Sector 63, Noida, Uttar Pradesh - 201301
                  </div>
                </div>

                <div className="info-row">
                  <div className="info-cell-label">Goods &amp; Services Tax (GSTIN):</div>
                  <div className="info-cell-value">
                    <span className="official-badge-text">09AAMCT5200E1ZH</span>
                  </div>
                </div>

                <div className="info-row">
                  <div className="info-cell-label">Official Inbound Email:</div>
                  <div className="info-cell-value">
                    <a href="mailto:tophilltextile26@gmail.com" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>
                      tophilltextile26@gmail.com
                    </a>
                  </div>
                </div>

                <div className="info-row">
                  <div className="info-cell-label">Official Contact Number / WhatsApp:</div>
                  <div className="info-cell-value">
                    <a href="tel:+919899763193" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>
                      +91 9899763193
                    </a>
                  </div>
                </div>

                <div className="info-row">
                  <div className="info-cell-label">Instagram Handle:</div>
                  <div className="info-cell-value">
                    <a href="https://www.instagram.com/tophill_textile/" target="_blank" rel="noopener noreferrer" style={{ color: '#E1306C' }}>
                      @tophill_textile
                    </a>
                  </div>
                </div>

                <div className="info-row">
                  <div className="info-cell-label">Facebook Profile:</div>
                  <div className="info-cell-value">
                    <a href="https://www.facebook.com/TopHill" target="_blank" rel="noopener noreferrer" style={{ color: '#1877F2' }}>
                      Top Hill
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* ========================================================
          MODAL: INQUIRY DETAIL & NOTES DRAWER
          ======================================================== */}
      {selectedInquiry && (
        <div className="inquiry-detail-modal" onClick={() => setSelectedInquiry(null)}>
          <div className="detail-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="detail-modal-header">
              <div>
                <span className="table-id-pill" style={{ marginRight: '0.5rem' }}>{selectedInquiry.id}</span>
                <strong style={{ fontSize: '1.1rem', color: 'var(--color-primary)' }}>
                  Inquiry from {selectedInquiry.fullName}
                </strong>
              </div>
              <button
                type="button"
                className="btn-close-modal"
                onClick={() => setSelectedInquiry(null)}
              >
                &times;
              </button>
            </div>

            <div className="detail-modal-body">
              <div className="detail-info-grid">
                <div>
                  <small style={{ color: 'var(--color-text-subtle)', display: 'block' }}>Company / Brand:</small>
                  <strong>{selectedInquiry.companyName || 'Not Provided'}</strong>
                </div>
                <div>
                  <small style={{ color: 'var(--color-text-subtle)', display: 'block' }}>Submission Date:</small>
                  <strong>{selectedInquiry.timestamp}</strong>
                </div>
                <div>
                  <small style={{ color: 'var(--color-text-subtle)', display: 'block' }}>Phone Contact:</small>
                  <a href={`tel:${selectedInquiry.phoneNumber}`} style={{ color: 'var(--color-primary)', fontWeight: 700 }}>
                    {selectedInquiry.phoneNumber}
                  </a>
                </div>
                <div>
                  <small style={{ color: 'var(--color-text-subtle)', display: 'block' }}>Email Address:</small>
                  <a href={`mailto:${selectedInquiry.emailAddress}`} style={{ color: 'var(--color-primary)' }}>
                    {selectedInquiry.emailAddress}
                  </a>
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-text-subtle)', textTransform: 'uppercase' }}>
                  Requested Plan / Service Scope:
                </span>
                <p style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-primary)', margin: '0.25rem 0' }}>
                  {selectedInquiry.natureOfInquiry}
                </p>
              </div>

              <div className="detail-message-box">
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-text-subtle)', display: 'block', marginBottom: '0.5rem' }}>
                  CLIENT MESSAGE / BRIEF:
                </span>
                <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--color-text-main)' }}>
                  {selectedInquiry.message}
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                  Internal Admin Follow-up Notes:
                </label>
                <textarea
                  rows="3"
                  className="detail-notes-area"
                  placeholder="e.g. Called client on 17/10. Sent quotation for 100 SKU. Follow up on Tuesday."
                  value={adminNoteInput}
                  onChange={(e) => setAdminNoteInput(e.target.value)}
                ></textarea>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  style={{ marginTop: '0.5rem' }}
                  onClick={handleSaveNote}
                >
                  Save Internal Note
                </button>
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary)', display: 'block', marginBottom: '0.4rem' }}>
                  Update Lead Status:
                </label>
                <select
                  value={selectedInquiry.status || 'NEW'}
                  onChange={(e) => handleStatusChange(selectedInquiry.id, e.target.value)}
                  className="form-select"
                  style={{ maxWidth: '240px' }}
                >
                  <option value="NEW">NEW - Pending Review</option>
                  <option value="CONTACTED">CONTACTED - Discussion Active</option>
                  <option value="CONVERTED">CONVERTED - Agreement Signed</option>
                  <option value="ARCHIVED">ARCHIVED - Closed / Inactive</option>
                </select>
              </div>
            </div>

            <div className="detail-modal-footer">
              <a
                href={`https://wa.me/${(selectedInquiry.phoneNumber || '').replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(selectedInquiry.fullName)},%20this%20is%20TopHill%20Textile%20regarding%20your%20inquiry%20${selectedInquiry.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}
              >
                <MessageCircle size={15} />
                <span>Open WhatsApp Chat</span>
              </a>

              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => setSelectedInquiry(null)}
              >
                Close Drawer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          MODAL: ADD MANUAL LEAD
          ======================================================== */}
      {showAddModal && (
        <div className="inquiry-detail-modal" onClick={() => setShowAddModal(false)}>
          <div className="detail-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="detail-modal-header">
              <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--color-primary)' }}>
                Add New Client Lead
              </h3>
              <button
                type="button"
                className="btn-close-modal"
                onClick={() => setShowAddModal(false)}
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleAddLeadSubmit}>
              <div className="detail-modal-body">
                <div className="form-group" style={{ marginBottom: '1rem' }}>
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Vikram Malhotra"
                    value={newLead.fullName}
                    onChange={(e) => setNewLead({ ...newLead, fullName: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '1rem' }}>
                  <label className="form-label">Company / Brand</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Malhotra Apparel"
                    value={newLead.companyName}
                    onChange={(e) => setNewLead({ ...newLead, companyName: e.target.value })}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="+91 98997 63193"
                      value={newLead.phoneNumber}
                      onChange={(e) => setNewLead({ ...newLead, phoneNumber: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="vikram@malhotraapparel.com"
                      value={newLead.emailAddress}
                      onChange={(e) => setNewLead({ ...newLead, emailAddress: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: '1rem' }}>
                  <label className="form-label">Plan / Nature of Inquiry</label>
                  <select
                    className="form-select"
                    value={newLead.natureOfInquiry}
                    onChange={(e) => setNewLead({ ...newLead, natureOfInquiry: e.target.value })}
                  >
                    <option value="Myntra Business Plan - BASIC PLAN">Myntra Business Plan - BASIC PLAN (₹10L / 30 SKU)</option>
                    <option value="Myntra Business Plan - PREMIUM PLAN">Myntra Business Plan - PREMIUM PLAN (₹25L / 100 SKU)</option>
                    <option value="Myntra Business Plan - ENTERPRISE PLAN">Myntra Business Plan - ENTERPRISE PLAN (₹50L / 300 SKU)</option>
                    <option value="Garment Manufacturing Coordination">Garment Manufacturing Coordination</option>
                    <option value="Myntra Onboarding to QC Pass">Myntra Onboarding to QC Pass</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Lead Details / Requirement</label>
                  <textarea
                    rows="3"
                    className="form-textarea"
                    placeholder="Enter discussion notes from call or meeting..."
                    value={newLead.message}
                    onChange={(e) => setNewLead({ ...newLead, message: e.target.value })}
                  ></textarea>
                </div>
              </div>

              <div className="detail-modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => setShowAddModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary btn-sm"
                >
                  Save Client Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
