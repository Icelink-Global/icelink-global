'use client';
import React, { useState } from 'react';
import { Product } from '@/types';
import { Car, Fuel, Settings, Milestone, ArrowLeft, Send, Check } from 'lucide-react';
import { supabase } from '@/supabase';

interface ProductDetailsViewProps {
  product: Product;
  setCurrentTab: (tab: string) => void;
}

export function ProductDetailsView({ product, setCurrentTab }: ProductDetailsViewProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    email: '',
    country: 'Ghana',
    message: `Hello, I'm interested in the ${product.name}${product.stock_id ? ` - Stock ID ${product.stock_id}` : ''}.`
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleWhatsAppEnquiry = () => {
    const text = encodeURIComponent(
      `Hello IceLink, I am interested in the ${product.name} (Stock ID: ${product.stock_id || 'N/A'}, Market: ${product.source_market}). Please provide pricing details.`
    );
    window.open(`https://wa.me/233549685770?text=${text}`, '_blank');
  };

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await supabase.from('enquiries').insert([
        {
          product_id: product.id,
          product_name: product.name,
          stock_id: product.stock_id,
          quantity: 1,
          customer_name: formData.name,
          phone: formData.phone,
          whatsapp: formData.whatsapp,
          email: formData.email,
          country: formData.country,
          message: formData.message,
          status: 'new'
        }
      ]);
      setSuccess(true);
    } catch (err) {
      console.error(err);
      setSuccess(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex-1 bg-[#090b10] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => setCurrentTab(product.stock_id ? 'autohaus' : 'home')}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition duration-200 mb-8 font-semibold text-sm"
        >
          <ArrowLeft size={16} /> Back to Listings
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Gallery block */}
          <div>
            <div className="relative aspect-video w-full rounded-2xl bg-[#11141c] overflow-hidden border border-white/10 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
              <span className="absolute top-4 left-4 px-3 py-1 rounded bg-black/85 border border-white/10 text-xs font-bold uppercase tracking-wider text-white">
                {product.source_market}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="aspect-video bg-[#11141c] rounded-xl border border-white/5 overflow-hidden">
                <img src={product.images[0]} alt="thumbnail" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Details column */}
          <div className="space-y-8">
            <div>
              <span className="text-xs text-blue-400 font-extrabold tracking-widest uppercase mb-2 block">
                {product.stock_id ? 'Ice AutoHaus' : 'IceLink Market'}
              </span>
              <h1 className="text-3xl sm:text-5xl font-black mb-3">{product.name}</h1>
              <div className="flex flex-wrap gap-4 items-center">
                <p className="text-2xl sm:text-3xl font-black text-blue-400">
                  GHS {(product.price ? product.price * 14.5 : 220000).toLocaleString()}
                </p>
                <span className="text-sm text-gray-500 font-bold">
                  Approx. ${product.price?.toLocaleString()} USD
                </span>
              </div>
            </div>

            {/* Spec info */}
            <div className="p-6 rounded-2xl bg-[#11141c] border border-white/10">
              <h3 className="font-bold text-lg mb-4 pb-2 border-b border-white/5">Vehicle Specifications</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {Object.entries(product.specifications).map(([key, val]) => (
                  <div key={key} className="flex flex-col">
                    <span className="text-[10px] text-gray-500 font-bold uppercase">{key}</span>
                    <span className="text-sm font-semibold text-white mt-1">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="p-6 rounded-2xl bg-[#11141c] border border-white/10 space-y-4">
              <button
                onClick={handleWhatsAppEnquiry}
                className="w-full py-4 rounded bg-green-600 hover:bg-green-700 text-white font-bold tracking-wider uppercase text-xs transition flex items-center justify-center gap-2"
              >
                Enquire on WhatsApp
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('enquiry-form');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-4 rounded bg-blue-600 hover:bg-blue-700 text-white font-bold tracking-wider uppercase text-xs transition"
              >
                Request Financing
              </button>
            </div>
          </div>
        </div>

        {/* Enquiry form details */}
        <div id="enquiry-form" className="max-w-xl mt-16 p-8 rounded-2xl bg-[#11141c] border border-white/10">
          <h3 className="font-black text-xl mb-6">Submit Sourcing Pre-order Enquiry</h3>
          {success ? (
            <div className="p-6 text-center text-green-400 font-bold flex items-center justify-center gap-2">
              <Check size={20} /> Request logged! We will correspond shortly.
            </div>
          ) : (
            <form onSubmit={handleEnquirySubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded focus:border-blue-500 outline-none text-sm text-white"
                />
                <input
                  type="tel"
                  required
                  placeholder="WhatsApp Number"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded focus:border-blue-500 outline-none text-sm text-white"
                />
              </div>
              <textarea
                rows={3}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded focus:border-blue-500 outline-none text-sm text-white resize-none"
              />
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 rounded bg-blue-600 hover:bg-blue-700 text-white font-bold tracking-wider uppercase text-xs transition"
              >
                {submitting ? 'Sending Request...' : 'Send Sourcing Details'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
