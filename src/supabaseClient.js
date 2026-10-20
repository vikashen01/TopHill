import { createClient } from '@supabase/supabase-js';

// Supabase Project Credentials
const SUPABASE_URL = 
  import.meta.env.VITE_SUPABASE_URL || 
  'https://ibybgkprblqpvbweegnu.supabase.co';

const SUPABASE_ANON_KEY = 
  import.meta.env.VITE_SUPABASE_ANON_KEY || 
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlieWJna3ByYmxxcHZid2VlZ251Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI1MTIyOTAsImV4cCI6MjEwODA4ODI5MH0.eM7_bmwr9gJqujlw1DrfVJTSValHF2ErbYe72st74A8';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

export const PROJECT_DETAILS = {
  projectId: 'ibybgkprblqpvbweegnu',
  region: 'ap-south-1 (Mumbai, India)',
  url: SUPABASE_URL,
  organization: 'TopHill website',
};

/**
 * Insert a new inquiry into Supabase
 */
export async function insertInquiry(inquiryData) {
  try {
    const inquiryRef = inquiryData.inquiryRef || `THT-${Date.now().toString().slice(-6)}`;
    
    const payload = {
      inquiry_ref: inquiryRef,
      full_name: inquiryData.fullName?.trim() || 'Anonymous Client',
      company_name: inquiryData.companyName?.trim() || null,
      phone_number: inquiryData.phoneNumber?.trim() || '',
      email_address: inquiryData.emailAddress?.trim() || '',
      nature_of_inquiry: inquiryData.natureOfInquiry || 'General Inquiry',
      message: inquiryData.message?.trim() || '',
      status: inquiryData.status || 'new',
      admin_notes: inquiryData.adminNotes || '',
    };

    const { data, error } = await supabase
      .from('inquiries')
      .insert([payload])
      .select()
      .single();

    if (error) {
      console.error('Supabase insert inquiry error:', error);
      return { success: false, error: error.message, data: null };
    }

    return { success: true, data, error: null };
  } catch (err) {
    console.error('Unexpected error inserting inquiry:', err);
    return { success: false, error: err.message || 'Unknown network error', data: null };
  }
}

/**
 * Fetch all inquiries from Supabase
 */
export async function getInquiries({ status = 'all', searchQuery = '', limit = 100 } = {}) {
  try {
    let query = supabase
      .from('inquiries')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit);

    if (status && status !== 'all') {
      query = query.eq('status', status);
    }

    if (searchQuery && searchQuery.trim()) {
      const term = searchQuery.trim();
      query = query.or(
        `full_name.ilike.%${term}%,company_name.ilike.%${term}%,email_address.ilike.%${term}%,phone_number.ilike.%${term}%,inquiry_ref.ilike.%${term}%`
      );
    }

    const { data, error } = await query;

    if (error) {
      console.error('Supabase fetch inquiries error:', error);
      return { success: false, error: error.message, data: [] };
    }

    return { success: true, data: data || [], error: null };
  } catch (err) {
    console.error('Unexpected error fetching inquiries:', err);
    return { success: false, error: err.message || 'Unknown network error', data: [] };
  }
}

/**
 * Update inquiry status or admin notes
 */
export async function updateInquiry(id, updates) {
  try {
    const payload = {
      ...updates,
      updated_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from('inquiries')
      .update(payload)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Supabase update inquiry error:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err) {
    console.error('Unexpected error updating inquiry:', err);
    return { success: false, error: err.message || 'Unknown network error' };
  }
}

/**
 * Delete an inquiry
 */
export async function deleteInquiry(id) {
  try {
    const { error } = await supabase
      .from('inquiries')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Supabase delete inquiry error:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error('Unexpected error deleting inquiry:', err);
    return { success: false, error: err.message || 'Unknown network error' };
  }
}

/**
 * Test live health connection to Supabase
 */
export async function checkSupabaseHealth() {
  try {
    const start = performance.now();
    const { data, error } = await supabase
      .from('inquiries')
      .select('count', { count: 'exact', head: true });

    const latency = Math.round(performance.now() - start);

    if (error) {
      return { healthy: false, error: error.message, latency };
    }

    return { healthy: true, latency, timestamp: new Date().toISOString() };
  } catch (err) {
    return { healthy: false, error: err.message, latency: null };
  }
}
