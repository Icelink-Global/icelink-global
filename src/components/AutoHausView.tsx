'use client';
import React, { useState } from 'react';
import { mockProducts } from '@/mockData';
import { Car, Fuel, Zap, Settings, Milestone, HelpCircle, FileDown, ShieldAlert, PhoneCall } from 'lucide-react';

interface AutoHausViewProps {
  setSelectedProduct: (p: any) => void;
  setCurrentTab: (tab: string) => void;
}

export function AutoHausView({ setSelectedProduct, setCurrentTab }: AutoHausViewProps) {
  const [filterType, setFilterType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const autoHausProducts = mockProducts.filter(
    (p) => p.business_id === 'b1' && (filterType === 'all' || p.category_id === filterType)
  );

  return (
    <div className="flex-1 bg-black text-white py-12 px-4 max-w-7xl mx-auto">
      {/* Title & Banner */}
      <div className="mb-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
        <div>
          <span className="text-xs text-blue-400 font-extrabold tracking-widest uppercase mb-2 block">Premium Importing</span>
          <h1 className="text-3xl sm:text-5xl font-black mb-3">Ice AutoHaus</h1>
          <p className="text-gray-400 max-w-xl">
            Source vehicles, spare parts, and custom automotive products directly from South Korea, China, UAE, and Europe.
          </p>
        </div>
        <button
          onClick={() => setCurrentTab('sourcing')}
          className="px-6 py-3.5 rounded bg-blue-600 hover:bg-blue-700 text-white font-bold transition duration-300 shadow-lg shadow-blue-500/20"
        >
          Sourcing Pre-Orders
        </button>
      </div>

      {/* Quick Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        {[
          { label: 'All Vehicles', id: 'all' },
          { label: 'SUV', id: 'cat_suv' },
          { label: 'EV / Hybrid', id: 'cat_ev' }
        ].map((btn) => (
          <button
            key={btn.id}
            onClick={() => setFilterType(btn.id)}
            className={`px-5 py-2 rounded text-xs font-bold uppercase tracking-wider transition duration-200 ${
              filterType === btn.id ? 'bg-blue-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Grid listing */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {autoHausProducts.map((p) => (
          <div key={p.id} className="rounded bg-[#0f0f0f] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-blue-500/50 transition-all duration-300">
            <div className="relative aspect-video w-full bg-neutral-900 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover" />
              <span className="absolute top-3 left-3 px-2 py-1 rounded bg-black/80 border border-white/10 text-[10px] text-gray-300 font-bold uppercase tracking-wider">
                {p.source_market}
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">{p.stock_id || 'AUTO'}</span>
                <span className="px-2 py-0.5 rounded bg-green-500/10 text-green-400 text-[10px] font-bold uppercase">In Stock</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{p.name}</h3>

              {/* Grid Specifications Preview */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Milestone size={14} className="text-blue-500" />
                  <span>{p.specifications['Mileage'] || 'N/A'}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Fuel size={14} className="text-blue-500" />
                  <span>{p.specifications['Fuel'] || 'N/A'}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Settings size={14} className="text-blue-500" />
                  <span>{p.specifications['Transmission'] || 'Automatic'}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Car size={14} className="text-blue-500" />
                  <span>{p.specifications['Year'] || '2020'}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 font-bold uppercase">Cash Price</span>
                  <span className="text-xl font-black text-blue-400">{p.currency} {p.price?.toLocaleString()}</span>
                </div>
                <button
                  onClick={() => {
                    setSelectedProduct(p);
                    setCurrentTab('product-details');
                  }}
                  className="px-4 py-2.5 rounded bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition duration-200"
                >
                  Inspect details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
