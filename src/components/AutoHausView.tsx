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

  const autoHausProducts = mockProducts.filter(
    (p) => p.business_id === 'b1' && (filterType === 'all' || p.category_id === filterType)
  );

  return (
    <div className="flex-1 bg-[#090b10] text-white">
      {/* Premium Hero Banner */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden py-20 px-4 bg-gradient-to-r from-blue-950 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl text-center z-10">
          <span className="text-xs text-blue-400 font-extrabold tracking-widest uppercase mb-3 block">
            Ice AutoHaus
          </span>
          <h1 className="text-4xl sm:text-6xl font-black mb-6">
            Quality Vehicles.<br />
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Global Standards.</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-8">
            Korean, Chinese, American and more. Cars, EVs, Trucks, Spare Parts & Accessories – all sourced with trust and delivered to Africa.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => {
                const element = document.getElementById('vehicle-listings');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3.5 rounded bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition"
            >
              Browse Vehicles
            </button>
            <button
              onClick={() => setCurrentTab('sourcing')}
              className="px-6 py-3.5 rounded bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-wider transition"
            >
              Source a Vehicle
            </button>
          </div>
        </div>
      </section>

      {/* Grid listing section */}
      <section id="vehicle-listings" className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-6 mb-10 pb-6 border-b border-white/5">
          <h2 className="text-2xl sm:text-3xl font-black">All Vehicles</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'All (256)', id: 'all' },
              { label: 'Sedan (84)', id: 'sedan' },
              { label: 'SUV (78)', id: 'cat_suv' },
              { label: 'EV / Hybrid (22)', id: 'cat_ev' },
              { label: 'Truck / Bus (24)', id: 'truck' },
              { label: 'Luxury (26)', id: 'luxury' }
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilterType(btn.id)}
                className={`px-4 py-2 rounded text-[11px] font-extrabold uppercase tracking-wider transition ${
                  filterType === btn.id ? 'bg-blue-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {autoHausProducts.map((p) => (
            <div key={p.id} className="rounded-xl bg-[#11141c] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-blue-500/50 transition-all duration-300">
              <div className="relative aspect-video w-full bg-neutral-900 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 px-2 py-1 rounded bg-blue-600 border border-blue-500/20 text-[9px] text-white font-extrabold uppercase tracking-wider">
                  {p.source_market}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">{p.stock_id || 'AUTO'}</span>
                  <span className="px-2 py-0.5 rounded bg-green-500/10 text-green-400 text-[10px] font-bold uppercase">In Stock</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{p.name}</h3>

                {/* Specification indicators */}
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
                    <span className="text-[10px] text-gray-500 font-bold uppercase">GHS Equivalent</span>
                    <span className="text-lg font-black text-blue-400">GHS {(p.price ? p.price * 14.5 : 220000).toLocaleString()}</span>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedProduct(p);
                      setCurrentTab('product-details');
                    }}
                    className="px-4 py-2.5 rounded bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
