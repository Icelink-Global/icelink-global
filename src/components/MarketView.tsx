'use client';
import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';

export function MarketView() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { label: 'All Products', id: 'all' },
    { label: 'Furniture', id: 'furniture' },
    { label: 'Home Appliances', id: 'appliances' },
    { label: 'Machinery & Tools', id: 'machinery' },
    { label: 'Building Materials', id: 'building' }
  ];

  return (
    <div className="flex-1 bg-black text-white py-12 px-4 max-w-7xl mx-auto">
      <div className="mb-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
        <div>
          <span className="text-xs text-green-400 font-extrabold tracking-widest uppercase mb-2 block">IceLink Market</span>
          <h1 className="text-3xl sm:text-5xl font-black mb-3">Enterprise Marketplace</h1>
          <p className="text-gray-400 max-w-xl">
            Browse general products, building hardware materials, machinery setups, and high-quality office furnishings.
          </p>
        </div>
      </div>

      {/* Category selector */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveCategory(c.id)}
            className={`px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition duration-200 ${
              activeCategory === c.id ? 'bg-green-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="text-center py-20 bg-[#0a0a0a] rounded border border-white/5">
        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mx-auto mb-6">
          <ShoppingBag size={28} />
        </div>
        <h3 className="text-xl font-bold mb-2">Marketplace Sourcing Active</h3>
        <p className="text-gray-400 max-w-md mx-auto text-sm leading-relaxed mb-6">
          Direct checkout is deactivated. Add items or outline custom sourcing items through our Sourcing pre-order system.
        </p>
      </div>
    </div>
  );
}
