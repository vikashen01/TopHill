import React, { useState, useEffect, useMemo } from 'react';
import { 
  Building2, 
  Search, 
  Filter, 
  Phone, 
  Mail, 
  MessageCircle, 
  Plus, 
  Download, 
  RefreshCw, 
  Trash2, 
  Clock, 
  AlertCircle, 
  Database, 
  Lock, 
  LogOut, 
  UserCheck, 
  Layers, 
  TrendingUp, 
  Edit3, 
  X, 
  ShieldCheck
} from 'lucide-react';
import { 
  getInquiries, 
  updateInquiry, 
  deleteInquiry, 
  insertInquiry, 
  checkSupabaseHealth, 
  PROJECT_DETAILS 
} from '../supabaseClient';

export default function AdminPage({ navigateTo }) {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('tophill_admin_auth') === 'true';
  });
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Dashboard Data State
  const [inquiries, setInquiries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [statusFilter, setStatusFilter] = useState('all');
  const [natureFilter, setNatureFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [adminNotesDraft, setAdminNotesDraft] = useState('');
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);

  // Manual Lead Modal State
  const [showAddModal, setShowAddModal] = useState(false);
  const [manualForm, setManualForm] = useState({
    fullName: '',
    companyName: '',
    phoneNumber: '',
    emailAddress: '',
    natureOfInquiry: 'Myntra Business Plan - Premium Plan (₹25,00,000/-)',
    message: '',
    status: 'new',
    adminNotes: ''
  });
  const [isSubmittingManual, setIsSubmittingManual] = useState(false);

  // Cloud Health State
  const [cloudHealth, setCloudHealth] = useState({ healthy: true, latency: null });

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError('');

    const trimmedEmail = loginEmail.trim().toLowerCase();
    const trimmedPass = loginPassword.trim();

    if (
      (trimmedEmail === 'admin@tophilltextile.com' || trimmedEmail === 'admin') &&
      trimmedPass === 'admin123'
    ) {
      sessionStorage.setItem('tophill_admin_auth', 'true');
      setIsAuthenticated(true);
    } else {
      setLoginError('Invalid credentials. Use admin@tophilltextile.com / admin123');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('tophill_admin_auth');
    setIsAuthenticated(false);
  };

  const fillDemoCredentials = () => {
    setLoginEmail('admin@tophilltextile.com');
    setLoginPassword('admin123');
    setLoginError('');
  };

  // Fetch Inquiries from Supabase
  const fetchLeads = async () => {
    setIsLoading(true);
    const res = await getInquiries();
    if (res.success) {
      setInquiries(res.data);
    } else {
      console.warn('Could not fetch from Supabase, loading local fallback:', res.error);
      try {
        const local = localStorage.getItem('tophill_inquiries_log');
        if (local) {
          const parsed = JSON.parse(local).map((item) => ({
            id: item.id || `local-${Math.random()}`,
            inquiry_ref: item.id || `THT-LOC`,
            full_name: item.fullName || item.full_name || 'Client',
            company_name: item.companyName || item.company_name || '',
            phone_number: item.phoneNumber || item.phone_number || '',
            email_address: item.emailAddress || item.email_address || '',
            nature_of_inquiry: item.natureOfInquiry || item.nature_of_inquiry || 'General Inquiry',
            message: item.message || '',
            status: item.status || 'new',
            admin_notes: item.admin_notes || '',
            created_at: item.timestamp || new Date().toISOString(),
          }));
          setInquiries(parsed);
        }
      } catch (e) {
        console.error('Local read error', e);
      }
    }

    // Health check
    const health = await checkSupabaseHealth();
    setCloudHealth(health);
    setIsLoading(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchLeads();
    }
  }, [isAuthenticated]);

  // Sync selected inquiry notes draft
  useEffect(() => {
    if (selectedInquiry) {
      setAdminNotesDraft(selectedInquiry.admin_notes || '');
    }
  }, [selectedInquiry]);

  // KPI Calculations
  const metrics = useMemo(() => {
    const total = inquiries.length;
    const newCount = inquiries.filter((i) => i.status === 'new').length;
    const inProgressCount = inquiries.filter((i) => i.status === 'in_progress' || i.status === 'contacted').length;
    const convertedCount = inquiries.filter((i) => i.status === 'converted').length;
    const myntraPlansCount = inquiries.filter((i) => 
      (i.nature_of_inquiry || '').toLowerCase().includes('myntra')
    ).length;

    return { total, newCount, inProgressCount, convertedCount, myntraPlansCount };
  }, [inquiries]);

  // Filtered Leads
  const filteredInquiries = useMemo(() => {
    return inquiries.filter((item) => {
      // Status filter
      if (statusFilter !== 'all' && item.status !== statusFilter) {
        return false;
      }

      // Nature filter
      if (natureFilter !== 'all') {
        if (natureFilter === 'myntra' && !(item.nature_of_inquiry || '').toLowerCase().includes('myntra')) {
          return false;
        }
        if (natureFilter === 'general' && (item.nature_of_inquiry || '').toLowerCase().includes('myntra')) {
          return false;
        }
      }

      // Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const text = `
          ${item.full_name || ''} 
          ${item.company_name || ''} 
          ${item.email_address || ''} 
          ${item.phone_number || ''} 
          ${item.inquiry_ref || ''} 
          ${item.nature_of_inquiry || ''}
        `.toLowerCase();
        return text.includes(query);
      }

      return true;
    });
  }, [inquiries, statusFilter, natureFilter, searchQuery]);

  // Update Status & Notes in Supabase
  const handleUpdateStatus = async (id, newStatus) => {
    setIsUpdatingStatus(true);
    const res = await updateInquiry(id, { status: newStatus });
    if (res.success) {
      setInquiries((prev) =>
        prev.map((i) => (i.id === id ? { ...i, status: newStatus } : i))
      );
      if (selectedInquiry && selectedInquiry.id === id) {
        setSelectedInquiry((prev) => ({ ...prev, status: newStatus }));
      }
    }
    setIsUpdatingStatus(false);
  };

  const handleSaveNotes = async () => {
    if (!selectedInquiry) return;
    setIsUpdatingStatus(true);
    const res = await updateInquiry(selectedInquiry.id, { admin_notes: adminNotesDraft });
    if (res.success) {
      setInquiries((prev) =>
        prev.map((i) => (i.id === selectedInquiry.id ? { ...i, admin_notes: adminNotesDraft } : i))
      );
      setSelectedInquiry((prev) => ({ ...prev, admin_notes: adminNotesDraft }));
    }
    setIsUpdatingStatus(false);
  };

  // Delete Lead
  const handleDeleteLead = async (id, ref) => {
    if (!window.confirm(`Are you sure you want to delete inquiry ${ref}? This will remove it from Supabase.`)) {
      return;
    }
    const res = await deleteInquiry(id);
    if (res.success) {
      setInquiries((prev) => prev.filter((i) => i.id !== id));
      if (selectedInquiry && selectedInquiry.id === id) {
        setSelectedInquiry(null);
      }
    }
  };

  // Add Manual Lead
  const handleCreateManualLead = async (e) => {
    e.preventDefault();
    if (!manualForm.fullName.trim() || !manualForm.phoneNumber.trim()) {
      alert('Client Name and Phone Number are required.');
      return;
    }

    setIsSubmittingManual(true);
    const payload = {
      fullName: manualForm.fullName,
      companyName: manualForm.companyName,
      phoneNumber: manualForm.phoneNumber,
      emailAddress: manualForm.emailAddress || 'phone-inquiry@tophilltextile.com',
      natureOfInquiry: manualForm.natureOfInquiry,
      message: manualForm.message || 'Client initiated via direct telephone/walk-in inquiry.',
      status: manualForm.status,
      adminNotes: manualForm.adminNotes,
    };

    const res = await insertInquiry(payload);
    if (res.success && res.data) {
      setInquiries((prev) => [res.data, ...prev]);
      setShowAddModal(false);
      setManualForm({
        fullName: '',
        companyName: '',
        phoneNumber: '',
        emailAddress: '',
        natureOfInquiry: 'Myntra Business Plan - Premium Plan (₹25,00,000/-)',
        message: '',
        status: 'new',
        adminNotes: ''
      });
    } else {
      alert(`Error creating lead: ${res.error}`);
    }
    setIsSubmittingManual(false);
  };

  // Export to CSV
  const handleExportCSV = () => {
    if (inquiries.length === 0) {
      alert('No inquiries available to export.');
      return;
    }

    const headers = [
      'Inquiry Ref',
      'Date (UTC)',
      'Client Name',
      'Company Name',
      'Phone Number',
      'Email Address',
      'Nature of Inquiry',
      'Status',
      'Admin Notes',
      'Message'
    ];

    const rows = inquiries.map((item) => [
      `"${item.inquiry_ref || ''}"`,
      `"${item.created_at || ''}"`,
      `"${(item.full_name || '').replace(/"/g, '""')}"`,
      `"${(item.company_name || '').replace(/"/g, '""')}"`,
      `"${item.phone_number || ''}"`,
      `"${item.email_address || ''}"`,
      `"${(item.nature_of_inquiry || '').replace(/"/g, '""')}"`,
      `"${item.status || ''}"`,
      `"${(item.admin_notes || '').replace(/"/g, '""')}"`,
      `"${(item.message || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `TopHill_Leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Status Badge Helper
  const renderStatusBadge = (status) => {
    const map = {
      new: { label: 'New Lead', bg: '#fee2e2', text: '#991b1b', dot: '#ef4444' },
      contacted: { label: 'Contacted', bg: '#fef3c7', text: '#92400e', dot: '#f59e0b' },
      in_progress: { label: 'In Progress', bg: '#e0e7ff', text: '#3730a3', dot: '#6366f1' },
      converted: { label: 'Converted Client', bg: '#dcfce7', text: '#166534', dot: '#22c55e' },
      closed: { label: 'Closed / Archived', bg: '#f3f4f6', text: '#4b5563', dot: '#9ca3af' },
    };
    const s = map[status] || map.new;
    return (
      <span 
        className="admin-status-badge"
        style={{ backgroundColor: s.bg, color: s.text }}
      >
        <span className="admin-status-dot" style={{ backgroundColor: s.dot }} />
        {s.label}
      </span>
    );
  };

  // WhatsApp Helper Link
  const getWhatsAppLink = (phone, name, ref) => {
    const cleanPhone = (phone || '').replace(/[^0-9]/g, '');
    const validPhone = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone.replace(/^0+/, '')}`;
    const text = encodeURIComponent(
      `Hello ${name}, thank you for contacting TopHill Textile Pvt. Ltd. regarding inquiry [${ref}]. We would love to discuss your Myntra apparel manufacturing and onboarding requirements.`
    );
    return `https://wa.me/${validPhone}?text=${text}`;
  };

  // -------------------------------------------------------------
  // LOGIN SCREEN
  // -------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="admin-login-wrapper animate-fade-in">
        <div className="admin-login-card">
          <div className="admin-login-header">
            <div className="admin-brand-icon">
              <Building2 size={32} />
            </div>
            <h2>TopHill Management Portal</h2>
            <p>Executive Dashboard &amp; Supabase Cloud Database</p>
          </div>

          <form onSubmit={handleLogin} className="admin-login-form">
            {loginError && (
              <div className="admin-login-error">
                <AlertCircle size={16} />
                <span>{loginError}</span>
              </div>
            )}

            <div className="form-group">
              <label>Admin Email or Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="admin@tophilltextile.com"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Portal Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="••••••••"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
              <Lock size={18} />
              <span>Sign In to Admin Portal</span>
            </button>

            <button 
              type="button" 
              onClick={fillDemoCredentials}
              className="btn btn-secondary btn-sm"
              style={{ width: '100%', marginTop: '0.75rem' }}
            >
              <ShieldCheck size={14} /> Auto-fill Demo Credentials
            </button>
          </form>

          <div className="admin-login-footer">
            <div className="db-badge">
              <Database size={14} style={{ color: '#10b981' }} />
              <span>Supabase Cloud: <strong>{PROJECT_DETAILS.projectId}</strong></span>
            </div>
            <button type="button" onClick={() => navigateTo('home')} className="back-link-btn">
              &larr; Back to Public Website
            </button>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // MAIN ADMIN DASHBOARD
  // -------------------------------------------------------------
  return (
    <div className="admin-dashboard-page animate-fade-in">
      {/* Top Admin Bar */}
      <header className="admin-topbar">
        <div className="site-container admin-topbar-inner">
          <div className="admin-topbar-brand">
            <Building2 size={24} className="admin-logo-icon" />
            <div>
              <h1 className="admin-topbar-title">TopHill Executive Portal</h1>
              <div className="admin-cloud-indicator">
                <span className="pulse-dot" />
                <span>Supabase Live: <strong>{PROJECT_DETAILS.region}</strong></span>
                {cloudHealth.latency && <span className="latency-text">({cloudHealth.latency}ms)</span>}
              </div>
            </div>
          </div>

          <div className="admin-topbar-actions">
            <button 
              type="button" 
              className="btn btn-secondary btn-sm"
              onClick={fetchLeads} 
              disabled={isLoading}
              title="Refresh leads from Supabase"
            >
              <RefreshCw size={14} className={isLoading ? 'spin-icon' : ''} />
              <span>Refresh</span>
            </button>

            <button 
              type="button" 
              className="btn btn-primary btn-sm"
              onClick={() => setShowAddModal(true)}
            >
              <Plus size={15} />
              <span>New Lead</span>
            </button>

            <button 
              type="button" 
              className="btn btn-outline btn-sm"
              onClick={handleExportCSV}
            >
              <Download size={14} />
              <span>Export CSV</span>
            </button>

            <button 
              type="button" 
              className="btn btn-danger-ghost btn-sm"
              onClick={handleLogout}
              title="Sign Out"
            >
              <LogOut size={15} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <main className="admin-main-container site-container">
        {/* KPI Cards Row */}
        <section className="admin-kpi-grid">
          <div className="kpi-card">
            <div className="kpi-icon-bubble bg-blue">
              <Layers size={22} />
            </div>
            <div>
              <span className="kpi-label">Total Inquiries</span>
              <h2 className="kpi-value">{metrics.total}</h2>
              <span className="kpi-sub">Synced with Supabase</span>
            </div>
          </div>

          <div className="kpi-card">
            <div className="kpi-icon-bubble bg-red">
              <AlertCircle size={22} />
            </div>
            <div>
              <span className="kpi-label">New / Action Required</span>
              <h2 className="kpi-value">{metrics.newCount}</h2>
              <span className="kpi-sub">Awaiting executive contact</span>
            </div>
          </div>

          <div className="kpi-card">
            <div className="kpi-icon-bubble bg-amber">
              <Clock size={22} />
            </div>
            <div>
              <span className="kpi-label">In Progress / Contacted</span>
              <h2 className="kpi-value">{metrics.inProgressCount}</h2>
              <span className="kpi-sub">Under active discussion</span>
            </div>
          </div>

          <div className="kpi-card">
            <div className="kpi-icon-bubble bg-green">
              <UserCheck size={22} />
            </div>
            <div>
              <span className="kpi-label">Converted Clients</span>
              <h2 className="kpi-value">{metrics.convertedCount}</h2>
              <span className="kpi-sub">Garment &amp; Myntra Partners</span>
            </div>
          </div>

          <div className="kpi-card highlight-kpi">
            <div className="kpi-icon-bubble bg-gold">
              <TrendingUp size={22} />
            </div>
            <div>
              <span className="kpi-label">Myntra Growth Plans</span>
              <h2 className="kpi-value">{metrics.myntraPlansCount}</h2>
              <span className="kpi-sub">₹10L / ₹25L / ₹50L packages</span>
            </div>
          </div>
        </section>

        {/* Filter and Search Controls */}
        <section className="admin-controls-card">
          <div className="controls-search-box">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search by client name, company, phone, email, or THT reference..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                type="button" 
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
              >
                <X size={14} />
              </button>
            )}
          </div>

          <div className="controls-filters">
            {/* Status Filter */}
            <div className="filter-select-wrapper">
              <Filter size={15} />
              <select 
                value={statusFilter} 
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Statuses ({inquiries.length})</option>
                <option value="new">New ({metrics.newCount})</option>
                <option value="contacted">Contacted</option>
                <option value="in_progress">In Progress</option>
                <option value="converted">Converted ({metrics.convertedCount})</option>
                <option value="closed">Closed / Archived</option>
              </select>
            </div>

            {/* Category Filter */}
            <div className="filter-select-wrapper">
              <select 
                value={natureFilter} 
                onChange={(e) => setNatureFilter(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="myntra">Myntra Business Plans Only</option>
                <option value="general">General Inquiries Only</option>
              </select>
            </div>
          </div>
        </section>

        {/* Inquiries Table & Detail Drawer Layout */}
        <div className={`admin-content-layout ${selectedInquiry ? 'has-drawer' : ''}`}>
          {/* Main Table Column */}
          <div className="admin-table-wrapper">
            <div className="table-header-info">
              <h3>
                Client Inquiries &amp; Leads 
                <span className="count-badge">{filteredInquiries.length}</span>
              </h3>
              <span className="table-sub">Click any row to open the complete details drawer</span>
            </div>

            {isLoading ? (
              <div className="admin-loading-state">
                <RefreshCw size={28} className="spin-icon" />
                <p>Loading real-time data from Supabase Cloud...</p>
              </div>
            ) : filteredInquiries.length === 0 ? (
              <div className="admin-empty-state">
                <AlertCircle size={36} />
                <h4>No Inquiries Found</h4>
                <p>No leads match your current search criteria or filter settings.</p>
                <button 
                  type="button" 
                  className="btn btn-secondary btn-sm"
                  onClick={() => { setSearchQuery(''); setStatusFilter('all'); setNatureFilter('all'); }}
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="table-responsive">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Ref &amp; Date</th>
                      <th>Client &amp; Company</th>
                      <th>Nature of Inquiry</th>
                      <th>Status</th>
                      <th>Direct Contact</th>
                      <th className="text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredInquiries.map((item) => {
                      const isSelected = selectedInquiry && selectedInquiry.id === item.id;
                      const formattedDate = item.created_at
                        ? new Date(item.created_at).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })
                        : 'Recent';

                      return (
                        <tr 
                          key={item.id} 
                          className={isSelected ? 'selected-row' : ''}
                          onClick={() => setSelectedInquiry(item)}
                        >
                          {/* Ref & Date */}
                          <td>
                            <span className="ref-tag">{item.inquiry_ref || 'THT-LEAD'}</span>
                            <span className="date-tag">{formattedDate}</span>
                          </td>

                          {/* Client & Company */}
                          <td>
                            <strong className="client-name">{item.full_name}</strong>
                            <span className="company-name">{item.company_name || 'Individual Proprietor'}</span>
                          </td>

                          {/* Nature of Inquiry */}
                          <td>
                            <span className="nature-tag">
                              {item.nature_of_inquiry}
                            </span>
                          </td>

                          {/* Status */}
                          <td onClick={(e) => e.stopPropagation()}>
                            <div className="status-dropdown-wrap">
                              <select
                                value={item.status}
                                onChange={(e) => handleUpdateStatus(item.id, e.target.value)}
                                className="status-select"
                                style={{
                                  backgroundColor: item.status === 'new' ? '#fef2f2' : item.status === 'converted' ? '#f0fdf4' : '#f8fafc',
                                  color: item.status === 'new' ? '#991b1b' : item.status === 'converted' ? '#166534' : '#1e293b'
                                }}
                              >
                                <option value="new">🔴 New Lead</option>
                                <option value="contacted">🟡 Contacted</option>
                                <option value="in_progress">🔵 In Progress</option>
                                <option value="converted">🟢 Converted</option>
                                <option value="closed">⚪ Closed</option>
                              </select>
                            </div>
                          </td>

                          {/* Direct Contact Actions */}
                          <td onClick={(e) => e.stopPropagation()}>
                            <div className="contact-quick-actions">
                              {/* WhatsApp */}
                              {item.phone_number && (
                                <a 
                                  href={getWhatsAppLink(item.phone_number, item.full_name, item.inquiry_ref)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="action-btn-whatsapp"
                                  title="Chat on WhatsApp"
                                >
                                  <MessageCircle size={15} />
                                </a>
                              )}

                              {/* Phone Call */}
                              {item.phone_number && (
                                <a 
                                  href={`tel:${item.phone_number}`}
                                  className="action-btn-phone"
                                  title="Call Client"
                                >
                                  <Phone size={15} />
                                </a>
                              )}

                              {/* Email */}
                              {item.email_address && (
                                <a 
                                  href={`mailto:${item.email_address}`}
                                  className="action-btn-email"
                                  title="Send Email"
                                >
                                  <Mail size={15} />
                                </a>
                              )}
                            </div>
                          </td>

                          {/* Row Actions */}
                          <td className="text-right" onClick={(e) => e.stopPropagation()}>
                            <button
                              type="button"
                              className="btn-icon-danger"
                              onClick={() => handleDeleteLead(item.id, item.inquiry_ref)}
                              title="Delete from Supabase"
                            >
                              <Trash2 size={15} />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Lead Detail Drawer (Opens on row click) */}
          {selectedInquiry && (
            <aside className="admin-detail-drawer animate-fade-in">
              <div className="drawer-header">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span className="drawer-ref">{selectedInquiry.inquiry_ref}</span>
                    {renderStatusBadge(selectedInquiry.status)}
                  </div>
                  <h3 className="drawer-title">{selectedInquiry.full_name}</h3>
                </div>
                <button 
                  type="button" 
                  className="drawer-close-btn"
                  onClick={() => setSelectedInquiry(null)}
                >
                  <X size={18} />
                </button>
              </div>

              <div className="drawer-body">
                {/* Status Bar */}
                <div className="drawer-section">
                  <label className="drawer-label">Current Pipeline Status</label>
                  <div className="drawer-status-select-wrap">
                    <select
                      value={selectedInquiry.status}
                      onChange={(e) => handleUpdateStatus(selectedInquiry.id, e.target.value)}
                      className="form-control"
                    >
                      <option value="new">🔴 New Lead (Immediate Action)</option>
                      <option value="contacted">🟡 Contacted (Waiting Client Response)</option>
                      <option value="in_progress">🔵 In Progress (Tech Pack / Plan Finalization)</option>
                      <option value="converted">🟢 Converted (Onboarded Partner)</option>
                      <option value="closed">⚪ Closed / Inactive</option>
                    </select>
                  </div>
                </div>

                {/* Client Profile */}
                <div className="drawer-section">
                  <label className="drawer-label">Client Information</label>
                  <div className="detail-meta-list">
                    <div className="meta-item">
                      <Building2 size={16} />
                      <div>
                        <span className="meta-sub">Company / Firm</span>
                        <p className="meta-main">{selectedInquiry.company_name || 'Individual'}</p>
                      </div>
                    </div>

                    <div className="meta-item">
                      <Phone size={16} />
                      <div>
                        <span className="meta-sub">Phone Number</span>
                        <p className="meta-main">
                          <a href={`tel:${selectedInquiry.phone_number}`}>{selectedInquiry.phone_number}</a>
                        </p>
                      </div>
                    </div>

                    <div className="meta-item">
                      <Mail size={16} />
                      <div>
                        <span className="meta-sub">Email Address</span>
                        <p className="meta-main">
                          <a href={`mailto:${selectedInquiry.email_address}`}>{selectedInquiry.email_address}</a>
                        </p>
                      </div>
                    </div>

                    <div className="meta-item">
                      <Clock size={16} />
                      <div>
                        <span className="meta-sub">Submission Timestamp</span>
                        <p className="meta-main">
                          {selectedInquiry.created_at ? new Date(selectedInquiry.created_at).toLocaleString('en-IN') : 'N/A'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Action Hub */}
                <div className="drawer-section">
                  <label className="drawer-label">Immediate Direct Action</label>
                  <div className="drawer-action-buttons">
                    <a
                      href={getWhatsAppLink(selectedInquiry.phone_number, selectedInquiry.full_name, selectedInquiry.inquiry_ref)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                    >
                      <MessageCircle size={16} />
                      <span>Chat on WhatsApp</span>
                    </a>

                    <a
                      href={`tel:${selectedInquiry.phone_number}`}
                      className="btn btn-call"
                    >
                      <Phone size={16} />
                      <span>Direct Phone Call</span>
                    </a>
                  </div>
                </div>

                {/* Nature & Message */}
                <div className="drawer-section">
                  <label className="drawer-label">Inquiry Scope / Plan</label>
                  <div className="inquiry-scope-box">
                    <strong>{selectedInquiry.nature_of_inquiry}</strong>
                  </div>

                  <label className="drawer-label" style={{ marginTop: '1rem' }}>Client Message</label>
                  <div className="client-message-box">
                    {selectedInquiry.message || 'No additional message text.'}
                  </div>
                </div>

                {/* Admin Internal Follow-up Notes */}
                <div className="drawer-section">
                  <div className="notes-header">
                    <label className="drawer-label">
                      <Edit3 size={14} style={{ display: 'inline', marginRight: '6px' }} />
                      Executive Follow-up Notes (Saved to Supabase)
                    </label>
                  </div>
                  <textarea
                    className="form-control admin-notes-textarea"
                    rows="4"
                    placeholder="Record notes on sample tech packs, meeting dates, quotation shared, Myntra category discussion..."
                    value={adminNotesDraft}
                    onChange={(e) => setAdminNotesDraft(e.target.value)}
                  />
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    style={{ marginTop: '0.5rem', width: '100%' }}
                    onClick={handleSaveNotes}
                    disabled={isUpdatingStatus}
                  >
                    {isUpdatingStatus ? 'Saving Notes...' : 'Save Notes to Supabase'}
                  </button>
                </div>
              </div>
            </aside>
          )}
        </div>
      </main>

      {/* Manual Lead Modal */}
      {showAddModal && (
        <div className="admin-modal-backdrop">
          <div className="admin-modal-card animate-fade-in">
            <div className="modal-header">
              <div>
                <h3>Add Walk-in or Phone Lead</h3>
                <p>Instantly records into Supabase cloud database</p>
              </div>
              <button 
                type="button" 
                className="drawer-close-btn"
                onClick={() => setShowAddModal(false)}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleCreateManualLead} className="modal-form">
              <div className="form-grid-2">
                <div className="form-group">
                  <label>Client Full Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    value={manualForm.fullName}
                    onChange={(e) => setManualForm({ ...manualForm, fullName: e.target.value })}
                    placeholder="e.g. Ramesh Gupta"
                  />
                </div>

                <div className="form-group">
                  <label>Company / Brand Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={manualForm.companyName}
                    onChange={(e) => setManualForm({ ...manualForm, companyName: e.target.value })}
                    placeholder="e.g. Gupta Apparels"
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    className="form-control"
                    required
                    value={manualForm.phoneNumber}
                    onChange={(e) => setManualForm({ ...manualForm, phoneNumber: e.target.value })}
                    placeholder="+91 9899763193"
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    value={manualForm.emailAddress}
                    onChange={(e) => setManualForm({ ...manualForm, emailAddress: e.target.value })}
                    placeholder="client@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Nature of Inquiry / Selected Plan</label>
                <select
                  className="form-control"
                  value={manualForm.natureOfInquiry}
                  onChange={(e) => setManualForm({ ...manualForm, natureOfInquiry: e.target.value })}
                >
                  <option value="Myntra Business Plan - Basic Plan (₹10,00,000/-)">
                    Myntra Business Plan - Basic Plan (₹10,00,000/-)
                  </option>
                  <option value="Myntra Business Plan - Premium Plan (₹25,00,000/-)">
                    Myntra Business Plan - Premium Plan (₹25,00,000/-)
                  </option>
                  <option value="Myntra Business Plan - Enterprise Plan (₹50,00,000/-)">
                    Myntra Business Plan - Enterprise Plan (₹50,00,000/-)
                  </option>
                  <option value="Garment Manufacturing Coordination (Roadster/DressBerry/Moda Rapido)">
                    Garment Manufacturing Coordination (Roadster/DressBerry/Moda Rapido)
                  </option>
                  <option value="Myntra Onboarding to QC Pass">
                    Myntra Onboarding to QC Pass
                  </option>
                  <option value="Product Photography &amp; Catalog Preparation">
                    Product Photography &amp; Catalog Preparation
                  </option>
                  <option value="General Business Inquiry">
                    General Business Inquiry
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label>Initial Status</label>
                <select
                  className="form-control"
                  value={manualForm.status}
                  onChange={(e) => setManualForm({ ...manualForm, status: e.target.value })}
                >
                  <option value="new">New Lead</option>
                  <option value="contacted">Contacted</option>
                  <option value="in_progress">In Progress</option>
                  <option value="converted">Converted Client</option>
                </select>
              </div>

              <div className="form-group">
                <label>Meeting Notes / Discussion Summary</label>
                <textarea
                  className="form-control"
                  rows="3"
                  value={manualForm.message}
                  onChange={(e) => setManualForm({ ...manualForm, message: e.target.value })}
                  placeholder="Details discussed during phone call or office visit..."
                />
              </div>

              <div className="modal-actions">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowAddModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmittingManual}
                >
                  {isSubmittingManual ? 'Saving to Supabase...' : 'Save Lead to Supabase'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
