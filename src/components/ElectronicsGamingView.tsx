'use client';
import React, { useState } from 'react';
import { mockProducts } from '@/mockData';

interface ElectronicsGamingViewProps {
  setSelectedProduct: (p: any) => void;
  setCurrentTab: (tab: string) => void;
}

export function ElectronicsGamingView({ setSelectedProduct, setCurrentTab }: ElectronicsGamingViewProps) {
  const products = mockProducts.filter((p) => p.business_id === 'b2' || p.business_id === 'b3');

  return (
    <div className="flex-1 bg-black text-white py-12 px-4 max-w-7xl mx-auto">
      <div className="mb-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
        <div>
          <span className="text-xs text-indigo-400 font-extrabold tracking-widest uppercase mb-2 block">Direct Importing</span>
          <h1 className="text-3xl sm:text-5xl font-black mb-3">Ice Electronics & Gaming</h1>
          <p className="text-gray-400 max-w-xl">
            Laptops, gaming units, home electronics, screens, and premium accessories procured worldwide.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map((p) => (
          <div key={p.id} className="rounded bg-[#0f0f0f] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-indigo-500/50 transition-all duration-300">
            <div className="relative aspect-video w-full bg-neutral-900 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover" />
              <span className="absolute top-3 left-3 px-2 py-1 rounded bg-black/80 border border-white/10 text-[10px] text-gray-300 font-bold uppercase tracking-wider">
                {p.source_market}
              </span>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest block mb-2">
                  {p.business_id === 'b2' ? 'Electronics' : 'Gaming'}
                </span>
                <h3 className="font-bold text-white mb-2 line-clamp-1">{p.name}</h3>
                <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-4">{p.description}</p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <span className="font-extrabold text-indigo-400 text-sm">
                  {p.price ? `${p.currency} ${p.price.toLocaleString()}` : 'Quote on Request'}
                </span>
                <button
                  onClick={() => {
                    setSelectedProduct(p);
                    setCurrentTab('product-details');
                  }}
                  className="px-3 py-1.5 rounded bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition duration-200"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
