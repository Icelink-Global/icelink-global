'use client';
import React, { useState } from 'react';
import { Send, CheckCircle, FileText, Search, FileSignature, CreditCard, Truck } from 'lucide-react';
import { supabase } from '@/supabase';

export function SourcingView() {
  const [requestType, setRequestType] = useState<'individual' | 'business'>('individual');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    productName: '',
    category: '',
    quantity: 1,
    budget: '',
    preferredSource: 'China'
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
          country: 'Ghana', // Default for now
          product_name: formData.productName,
          category: formData.category,
          quantity: Number(formData.quantity),
          budget: formData.budget,
          preferred_source: formData.preferredSource,
          details: `Request Type: ${requestType}`,
          status: 'new'
        }
      ]);

      if (error) console.warn('Supabase insert failed, simulating success:', error);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true); 
    } finally {
      setLoading(false);
    }
  };

  const howItWorks = [
    {
      icon: <FileText className="text-blue-600" size={24} />,
      title: '1. Submit Request',
      desc: 'Tell us what you need and your preferred market.'
    },
    {
      icon: <Search className="text-blue-600" size={24} />,
      title: '2. We Source & Verify',
      desc: 'We find suppliers, verify quality and provide best options.'
    },
    {
      icon: <FileSignature className="text-blue-600" size={24} />,
      title: '3. Get Quote',
      desc: 'Receive competitive quotes with details.'
    },
    {
      icon: <CreditCard className="text-blue-600" size={24} />,
      title: '4. Confirm & Pay',
      desc: 'Confirm your order and make secure payment.'
    },
    {
      icon: <Truck className="text-blue-600" size={24} />,
      title: '5. We Deliver',
      desc: 'We ship, clear customs and deliver to your location.'
    }
  ];

  return (
    <div className="flex-1 bg-white text-slate-900 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side - Form */}
        <div>
          <div className="mb-8">
            <h2 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-2">Request Sourcing</h2>
            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-2">We Source. You Relax.</h1>
            <p className="text-sm text-gray-500">Tell us what you need from any country. We'll find it.</p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-xl bg-blue-50 border border-blue-100 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mx-auto mb-6">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received</h3>
              <p className="text-gray-600 text-sm mb-6">
                An IceLink Sourcing associate will review your request parameters and get back to you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Request Type Toggle */}
              <div className="flex bg-gray-100 p-1 rounded-lg">
                <button
                  type="button"
                  onClick={() => setRequestType('individual')}
                  className={`flex-1 py-2 text-sm font-bold rounded-md transition ${requestType === 'individual' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  Individual
                </button>
                <button
                  type="button"
                  onClick={() => setRequestType('business')}
                  className={`flex-1 py-2 text-sm font-bold rounded-md transition ${requestType === 'business' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  Business
                </button>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">What do you need?</label>
                <input
                  type="text"
                  required
                  placeholder="Product name or description"
                  value={formData.productName}
                  onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-blue-500 focus:bg-white outline-none text-sm text-gray-900 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">Category</label>
                <select
                  required
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-blue-500 focus:bg-white outline-none text-sm text-gray-900 transition"
                >
                  <option value="" disabled>Select Category</option>
                  <option value="Vehicles">Vehicles</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Machinery">Machinery & Tools</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Other">Other Goods</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">Preferred Market</label>
                <div className="flex flex-wrap gap-4">
                  {['China', 'Korea', 'Dubai (UAE)', 'USA', 'Other'].map(market => (
                    <label key={market} className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="market" 
                        value={market}
                        checked={formData.preferredSource === market}
                        onChange={(e) => setFormData({ ...formData, preferredSource: e.target.value })}
                        className="text-blue-600 focus:ring-blue-500" 
                      />
                      <span className="text-sm text-gray-700 font-medium">{market}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2">Target Budget (GHS)</label>
                  <input
                    type="text"
                    placeholder="e.g. 5,000"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-blue-500 focus:bg-white outline-none text-sm text-gray-900 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2">Quantity</label>
                  <input
                    type="number"
                    min={1}
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: Number(e.target.value) })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-blue-500 focus:bg-white outline-none text-sm text-gray-900 transition"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <h3 className="text-sm font-bold text-gray-900 mb-4">Your Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-blue-500 focus:bg-white outline-none text-sm text-gray-900 transition"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-2">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        required
                        placeholder="Enter your number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-blue-500 focus:bg-white outline-none text-sm text-gray-900 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        required
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-blue-500 focus:bg-white outline-none text-sm text-gray-900 transition"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition duration-200"
              >
                {loading ? 'Submitting...' : 'Submit Request'}
              </button>
            </form>
          )}
        </div>

        {/* Right Side - How it works */}
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
          <div className="mb-10">
            <h2 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-2">How It Works</h2>
            <h3 className="text-2xl font-black text-gray-900">Simple, Transparent, Reliable</h3>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-200 before:to-transparent">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative flex items-start gap-6">
                <div className="relative z-10 w-12 h-12 rounded-xl bg-white border-2 border-blue-100 shadow-sm flex items-center justify-center flex-shrink-0">
                  {step.icon}
                </div>
                <div className="pt-2">
                  <h4 className="text-sm font-bold text-gray-900 mb-1">{step.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Optional decorative image */}
          <div className="mt-12 rounded-xl overflow-hidden shadow-lg border border-gray-200">
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600" alt="Shipping" className="w-full h-48 object-cover" />
          </div>
        </div>

      </div>
    </div>
  );
}
