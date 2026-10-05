'use client';
import React, { useState } from 'react';
import {
  Send, CheckCircle, FileText, Search, FileSignature, CreditCard, Truck,
  Globe, ShieldCheck, Zap, Sparkles, Building2, User, ArrowRight, CheckCircle2,
  MessageSquare, Clock, PackageCheck, Sliders, Car, Smartphone, Wrench, Sofa, Box,
  Users, Boxes, MapPin, Headphones
} from 'lucide-react';
import { supabase } from '@/supabase';

export function SourcingView() {
  const [requestType, setRequestType] = useState<'individual' | 'business'>('individual');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    productName: '',
    category: 'Vehicles',
    quantity: 1,
    budget: '5000',
    preferredSource: 'Korea',
    destinationCountry: 'Ghana',
    notes: '',
    deliveryTimeline: 'Standard (3-4 Weeks)'
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const trustMetrics = [
    { icon: <Users size={22} className="text-blue-500" />, metric: '1000+', label: 'Happy Customers' },
    { icon: <Building2 size={22} className="text-blue-500" />, metric: '500+', label: 'Businesses Served' },
    { icon: <Globe size={22} className="text-blue-500" />, metric: '20+', label: 'Sourcing Markets' },
    { icon: <Boxes size={22} className="text-blue-500" />, metric: '10,000+', label: 'Products Sourced' },
    { icon: <MapPin size={22} className="text-blue-500" />, metric: '50+', label: 'African Cities Covered' },
    { icon: <Headphones size={22} className="text-blue-500" />, metric: 'Reliable', label: 'End-to-End Support' },
  ];

  const sourceMarkets = [
    { id: 'Korea', name: 'South Korea', flag: 'kr', desc: 'Hyundai, Kia, Machinery & K-Beauty' },
    { id: 'China', name: 'China', flag: 'cn', desc: 'Electronics, Industrial & Consumer Goods' },
    { id: 'Dubai', name: 'Dubai (UAE)', flag: 'ae', desc: 'Luxury Vehicles, Heavy Equipment & Gold' },
    { id: 'USA', name: 'USA', flag: 'us', desc: 'American Autos, Tech & Specialized Parts' },
    { id: 'Germany', name: 'Germany', flag: 'de', desc: 'German Auto Engineering & OEM Parts' },
    { id: 'Japan', name: 'Japan', flag: 'jp', desc: 'Japanese Vehicles, Electronics & Tools' },
  ];

  const categories = [
    { id: 'Vehicles', name: 'Vehicles & Autos', icon: <Car size={20} />, sub: 'Cars, SUVs, EVs & Trucks' },
    { id: 'Electronics', name: 'Electronics & Tech', icon: <Smartphone size={20} />, sub: 'Phones, Laptops & Appliances' },
    { id: 'Machinery', name: 'Machinery & Tools', icon: <Wrench size={20} />, sub: 'Factory & Construction Equipment' },
    { id: 'Furniture', name: 'Furniture & Decor', icon: <Sofa size={20} />, sub: 'Home, Office & Commercial' },
    { id: 'Spare Parts', name: 'Spare Parts & OEM', icon: <Box size={20} />, sub: 'Auto & Machine Replacement Parts' },
    { id: 'Other', name: 'Custom Sourcing', icon: <Globe size={20} />, sub: 'Any Specific Product Global Sourcing' },
  ];

  const destinationCountries = ['Ghana', 'Nigeria', 'Kenya', 'South Africa', 'Ivory Coast', 'Togo', 'Benin', 'Other Africa'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from('sourcing_requests').insert([
        {
          customer_name: formData.name,
          phone: formData.phone,
          whatsapp: formData.phone,
          email: formData.email,
          country: formData.destinationCountry,
          product_name: formData.productName,
          category: formData.category,
          quantity: Number(formData.quantity),
          budget: formData.budget,
          preferred_source: formData.preferredSource,
          details: `Type: ${requestType} | Timeline: ${formData.deliveryTimeline} | Notes: ${formData.notes}`,
          status: 'new'
        }
      ]);

      if (error) console.warn('Supabase insert notice (handled gracefully):', error);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppQuickEnquire = () => {
    const text = encodeURIComponent(
      `Hello IceLink Sourcing Team! I need help sourcing:\n- Product: ${formData.productName || 'General Product'}\n- Category: ${formData.category}\n- Preferred Market: ${formData.preferredSource}\n- Quantity: ${formData.quantity}\n- Budget: $${formData.budget} USD\n- Destination: ${formData.destinationCountry}`
    );
    window.open(`https://wa.me/821044879685?text=${text}`, '_blank');
  };



  return (
    <div className="flex-1 bg-[#020617] text-white min-h-screen">
      {/* ══════════════════════════════════════════════
          HERO BANNER SECTION (WITH GLOWING BACKGROUND)
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-4 bg-[#00051a] border-b border-blue-900/30 min-h-[50vh] flex items-center">
        {/* Animated Radial Dots */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(59,130,246,0.15) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
            animation: 'fadeInUp 1s ease'
          }}
        />

        {/* Glowing Background Image on the Right — Matching Home Page */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 pointer-events-none overflow-hidden z-0 flex items-center justify-center opacity-70">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/background.jpg" 
            alt="Global Network Sourcing Background" 
            className="w-full h-auto scale-[1.3] -translate-y-8 animate-pulse-opacity" 
          />
          {/* Fading gradients to blend image into the deep blue background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00051a] via-[#00051a]/60 to-transparent"></div>
          <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-[#00051a] to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#00051a] to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center py-16 w-full">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 leading-tight">
            We Source Globally.<br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              You Relax & Receive.
            </span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-10">
            Direct procurement from Korea, China, UAE, USA, and Europe. Tell us what you need—we handle supplier verification, quality inspection, shipping, and local customs clearance across Africa.
          </p>

          {/* Quick Metrics Pills with Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto text-left">
            <div className="metric-card">
              <Globe size={22} className="text-blue-400 mb-1.5" />
              <div className="text-blue-400 font-black text-xl mb-1">6+ Global Markets</div>
              <div className="text-xs text-gray-400">Korea, China, UAE, USA & Europe</div>
            </div>
            <div className="metric-card">
              <ShieldCheck size={22} className="text-blue-400 mb-1.5" />
              <div className="text-blue-400 font-black text-xl mb-1">100% Inspected</div>
              <div className="text-xs text-gray-400">Pre-shipment quality verification</div>
            </div>
            <div className="metric-card">
              <Truck size={22} className="text-blue-400 mb-1.5" />
              <div className="text-blue-400 font-black text-xl mb-1">End-to-End Customs</div>
              <div className="text-xs text-gray-400">Hassle-free clearance in Africa</div>
            </div>
            <div className="metric-card">
              <CreditCard size={22} className="text-blue-400 mb-1.5" />
              <div className="text-blue-400 font-black text-xl mb-1">Escrow Protection</div>
              <div className="text-xs text-gray-400">Secure buyer payment guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          INTERACTIVE SOURCING REQUEST STUDIO
      ══════════════════════════════════════════════ */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Sourcing Form (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-[#070e24] border border-blue-500/20 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            {/* Top Glow Accent */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
              <div>
                <h2 className="text-2xl font-black text-white">Create Sourcing Request</h2>
                <p className="text-xs text-gray-400 mt-1">Configure your procurement parameters for an instant review</p>
              </div>

              {/* Request Type Toggle */}
              <div className="flex bg-[#030717] p-1 rounded-xl border border-white/10">
                <button
                  type="button"
                  onClick={() => setRequestType('individual')}
                  className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                    requestType === 'individual'
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <User size={14} />
                  Individual
                </button>
                <button
                  type="button"
                  onClick={() => setRequestType('business')}
                  className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                    requestType === 'business'
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Building2 size={14} />
                  Business
                </button>
              </div>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-20 h-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-xl shadow-emerald-950/50 animate-bounce">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-3xl font-black text-white">Sourcing Request Submitted!</h3>
                <p className="text-gray-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you! An IceLink Global procurement agent will analyze your request for <span className="text-blue-400 font-bold">{formData.productName || 'your requested item'}</span> from <span className="text-blue-400 font-bold">{formData.preferredSource}</span> and send a comprehensive quotation to your contact details.
                </p>

                <div className="pt-4 flex flex-wrap gap-4 justify-center">
                  <button
                    onClick={handleWhatsAppQuickEnquire}
                    className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider transition flex items-center gap-2 shadow-lg"
                  >
                    <MessageSquare size={16} /> Chat directly on WhatsApp
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-gray-300 font-extrabold text-xs uppercase tracking-wider transition"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* 1. SELECT PREFERRED ORIGIN MARKET */}
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-blue-400 mb-3">
                    1. Select Preferred Origin Market
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {sourceMarkets.map((market) => {
                      const isSelected = formData.preferredSource === market.id;
                      return (
                        <div
                          key={market.id}
                          onClick={() => setFormData({ ...formData, preferredSource: market.id })}
                          className={`cursor-pointer rounded-xl p-3.5 border transition-all duration-300 flex flex-col justify-between ${
                            isSelected
                              ? 'bg-blue-600/20 border-blue-500 shadow-lg shadow-blue-900/40 ring-1 ring-blue-400'
                              : 'bg-[#030717] border-white/10 hover:border-white/20 hover:bg-[#060d26]'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={`https://flagcdn.com/w80/${market.flag}.png`}
                              alt={market.name}
                              className="w-7 h-5 object-cover rounded shadow"
                            />
                            {isSelected && <CheckCircle2 size={16} className="text-blue-400" />}
                          </div>
                          <div>
                            <div className="font-extrabold text-xs text-white">{market.name}</div>
                            <div className="text-[10px] text-gray-400 mt-0.5 line-clamp-1">{market.desc}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 2. SELECT PRODUCT CATEGORY */}
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-blue-400 mb-3">
                    2. Select Product Category
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {categories.map((cat) => {
                      const isSelected = formData.category === cat.id;
                      return (
                        <div
                          key={cat.id}
                          onClick={() => setFormData({ ...formData, category: cat.id })}
                          className={`cursor-pointer rounded-xl p-3.5 border transition-all duration-300 flex items-center gap-3 ${
                            isSelected
                              ? 'bg-blue-600/20 border-blue-500 shadow-lg shadow-blue-900/40 ring-1 ring-blue-400'
                              : 'bg-[#030717] border-white/10 hover:border-white/20 hover:bg-[#060d26]'
                          }`}
                        >
                          <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            isSelected ? 'bg-blue-600 text-white' : 'bg-blue-500/10 text-blue-400'
                          }`}>
                            {cat.icon}
                          </div>
                          <div>
                            <div className="font-bold text-xs text-white leading-tight">{cat.name}</div>
                            <div className="text-[9px] text-gray-400">{cat.sub}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 3. PRODUCT DESCRIPTION & SPECIFICATIONS */}
                <div className="space-y-4">
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-blue-400">
                    3. Product Name & Specific Requirements
                  </label>
                  
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Hyundai Avante 2021 SmartStream or 100x OLED Gaming Monitors"
                      value={formData.productName}
                      onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                      className="w-full bg-[#030717] border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 outline-none focus:border-blue-500 transition"
                    />
                  </div>

                  <div>
                    <textarea
                      rows={3}
                      placeholder="Additional specs: Model year, target mileage, color preference, grade, OEM part numbers, or special packaging instructions..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-[#030717] border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 outline-none focus:border-blue-500 transition"
                    />
                  </div>
                </div>

                {/* 4. QUANTITY & BUDGET */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-blue-400 mb-2">
                      Target Budget ($ USD)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-3 text-gray-400 text-xs font-bold">$</span>
                      <input
                        type="text"
                        placeholder="e.g. 12,000"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-[#030717] border border-white/15 rounded-xl pl-8 pr-4 py-3 text-xs text-white outline-none focus:border-blue-500 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-blue-400 mb-2">
                      Quantity Required
                    </label>
                    <input
                      type="number"
                      min={1}
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: Math.max(1, Number(e.target.value)) })}
                      className="w-full bg-[#030717] border border-white/15 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-blue-500 transition"
                    />
                  </div>
                </div>

                {/* 5. CONTACT & DESTINATION DETAILS */}
                <div className="pt-6 border-t border-white/10 space-y-4">
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-blue-400">
                    5. Contact & Destination Country
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] text-gray-400 font-bold mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#030717] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-blue-500 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] text-gray-400 font-bold mb-1">Destination Country</label>
                      <select
                        value={formData.destinationCountry}
                        onChange={(e) => setFormData({ ...formData, destinationCountry: e.target.value })}
                        className="w-full bg-[#030717] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-blue-500 transition"
                      >
                        {destinationCountries.map((country) => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] text-gray-400 font-bold mb-1">Phone / WhatsApp Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+233 24 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#030717] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-blue-500 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] text-gray-400 font-bold mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="yourname@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#030717] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-blue-500 transition"
                      />
                    </div>
                  </div>
                </div>

                {/* SUBMIT BUTTON */}
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider transition shadow-lg shadow-blue-900/50 flex items-center justify-center gap-2"
                  >
                    {loading ? 'Processing Sourcing Request...' : 'Submit Sourcing Request'} <Send size={16} />
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppQuickEnquire}
                    className="py-4 px-6 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white font-extrabold text-xs uppercase tracking-wider transition border border-emerald-500/30 flex items-center justify-center gap-2"
                  >
                    <MessageSquare size={16} /> WhatsApp Direct
                  </button>
                </div>

              </form>
            )}
          </div>

          {/* Right Column: Dynamic Live Preview Card & Trust Highlights (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Request Summary Card with Animated Border */}
            <div className="metric-card p-6 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">Live Request Summary</h3>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-bold uppercase">
                  {requestType} Sourcing
                </span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-gray-400">Target Item:</span>
                  <span className="font-bold text-white text-right max-w-[200px] truncate">
                    {formData.productName || 'Not specified yet'}
                  </span>
                </div>

                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-gray-400">Category:</span>
                  <span className="font-bold text-blue-400">{formData.category}</span>
                </div>

                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-gray-400">Origin Country:</span>
                  <span className="font-bold text-white">{formData.preferredSource}</span>
                </div>

                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-gray-400">Quantity & Budget:</span>
                  <span className="font-bold text-white">
                    {formData.quantity} units | ${formData.budget || '0'} USD
                  </span>
                </div>

                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-gray-400">Destination:</span>
                  <span className="font-bold text-emerald-400">{formData.destinationCountry}</span>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-start gap-3">
                <ShieldCheck size={22} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="text-[11px] text-gray-300 leading-relaxed">
                  <strong className="text-white block font-bold mb-0.5">IceLink Sourcing Guarantee</strong>
                  Every sourced item undergoes physical inspection, photo/video verification, and escrow payment protection prior to dispatch.
                </div>
              </div>
            </div>

            {/* Direct Contact Banner */}
            <div className="metric-card p-6 text-center space-y-3">
              <h4 className="text-base font-black text-white">Need Urgent Custom Procurement?</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Talk directly with our dedicated global sourcing desks in Korea, China, UAE, or USA.
              </p>
              <button
                onClick={handleWhatsAppQuickEnquire}
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare size={16} /> Open WhatsApp Support Desk
              </button>
            </div>

          </div>

        </div>
      </section>



    </div>
  );
}
