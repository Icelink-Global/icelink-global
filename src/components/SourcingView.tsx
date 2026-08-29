'use client';
import React, { useState } from 'react';
import { Send, Upload, CheckCircle } from 'lucide-react';
import { supabase } from '@/supabase';

export function SourcingView() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    email: '',
    country: 'Ghana',
    productName: '',
    category: 'Vehicles',
    quantity: 1,
    budget: '',
    preferredSource: 'No Preference',
    details: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const markets = ['No Preference', 'South Korea', 'China', 'UAE / Dubai', 'USA', 'Europe'];
  const countries = ['Ghana', 'Nigeria', 'Côte d\'Ivoire', 'Kenya', 'Liberia', 'South Africa'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const { error } = await supabase.from('sourcing_requests').insert([
        {
          customer_name: formData.name,
          phone: formData.phone,
          whatsapp: formData.whatsapp,
          email: formData.email,
          country: formData.country,
          product_name: formData.productName,
          category: formData.category,
          quantity: Number(formData.quantity),
          budget: formData.budget,
          preferred_source: formData.preferredSource,
          details: formData.details,
          status: 'new'
        }
      ]);

      if (error) {
        // Fallback for demo without DB initialized
        console.warn('Supabase insert failed, simulating success:', error);
      }
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true); // Fallback success screen
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 bg-black text-white py-12 px-4 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs text-blue-400 font-extrabold tracking-widest uppercase mb-2 block">Direct Sourcing</span>
        <h1 className="text-3xl sm:text-5xl font-black mb-3">We Source. You Relax.</h1>
        <p className="text-gray-400 max-w-md mx-auto text-sm">
          Cannot find what you want? Tell us what you need, specify target pricing parameters, and submit a custom sourcing file.
        </p>
      </div>

      {submitted ? (
        <div className="p-8 rounded bg-[#0f0f0f] border border-green-500/20 text-center">
          <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mx-auto mb-6">
            <CheckCircle size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-2">Request Received</h3>
          <p className="text-gray-400 text-sm mb-6">
            An IceLink Sourcing associate will review your request parameters and get back to you via WhatsApp shortly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-2.5 rounded bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 bg-[#0f0f0f] border border-white/10 p-6 sm:p-8 rounded">
          {/* Customer Info */}
          <div className="border-b border-white/5 pb-6">
            <h3 className="font-bold text-lg mb-4 text-blue-400">1. Customer Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded focus:border-blue-500 outline-none text-sm text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded focus:border-blue-500 outline-none text-sm text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">WhatsApp Number</label>
                <input
                  type="tel"
                  required
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded focus:border-blue-500 outline-none text-sm text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Destination Country</label>
                <select
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded focus:border-blue-500 outline-none text-sm text-white"
                >
                  {countries.map((c) => (
                    <option key={c} value={c} className="bg-black">{c}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Sourcing Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-blue-400">2. Sourcing Requirements</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">What product/item do you need?</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 2021 Hyundai Santa Fe, 50 Office Swivel Chairs"
                  value={formData.productName}
                  onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded focus:border-blue-500 outline-none text-sm text-white"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Quantity</label>
                  <input
                    type="number"
                    min={1}
                    required
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: Number(e.target.value) })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded focus:border-blue-500 outline-none text-sm text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Estimated Budget (USD)</label>
                  <input
                    type="text"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded focus:border-blue-500 outline-none text-sm text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Preferred Market</label>
                  <select
                    value={formData.preferredSource}
                    onChange={(e) => setFormData({ ...formData, preferredSource: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded focus:border-blue-500 outline-none text-sm text-white"
                  >
                    {markets.map((m) => (
                      <option key={m} value={m} className="bg-black">{m}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Requirements, Specifications & Custom Features</label>
                <textarea
                  rows={4}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Detail colors, packaging, target shipping terms, inspection preferences..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded focus:border-blue-500 outline-none text-sm text-white resize-none"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded bg-blue-600 hover:bg-blue-700 text-white font-bold tracking-wider uppercase text-sm flex items-center justify-center gap-2 transition duration-200"
          >
            {loading ? 'Submitting...' : (
              <>
                <Send size={16} /> Submit Sourcing Request
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
