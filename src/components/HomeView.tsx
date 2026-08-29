'use client';
import React, { useState } from 'react';
import { Globe, Car, Smartphone, Gamepad, ShoppingBag, Check } from 'lucide-react';
import { mockProducts } from '@/mockData';

interface HomeViewProps {
  setCurrentTab: (tab: string) => void;
  setSelectedProduct: (p: any) => void;
}

export function HomeView({ setCurrentTab, setSelectedProduct }: HomeViewProps) {
  return (
    <div className="flex-1 bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-20 px-4 bg-radial-gradient">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl text-center z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-xs font-bold tracking-widest text-blue-400 uppercase mb-6 animate-pulse">
            Introducing IceLink Global
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-8">
            Connecting Markets.<br />
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Delivering Possibilities.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
            We source quality vehicles, electronics, and custom business solutions from trusted markets worldwide and deliver premium value directly across Africa.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <button
              onClick={() => setCurrentTab('autohaus')}
              className="px-8 py-4 rounded bg-blue-600 text-white font-bold text-base hover:bg-blue-700 transition duration-300 shadow-lg shadow-blue-500/30"
            >
              Explore Vehicles
            </button>
            <button
              onClick={() => setCurrentTab('sourcing')}
              className="px-8 py-4 rounded bg-transparent border border-white/20 text-white font-bold text-base hover:bg-white/5 transition duration-300"
            >
              Request Custom Sourcing
            </button>
          </div>
        </div>
      </section>

      {/* Global Sourcing Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight mb-4">Sourcing Globally, Servicing Africa</h2>
          <p className="text-gray-400 max-w-xl mx-auto">We establish links across core hubs to procure quality products and fulfill imports seamlessly.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {[
            { name: 'South Korea', flag: '🇰🇷' },
            { name: 'China', flag: '🇨🇳' },
            { name: 'UAE / Dubai', flag: '🇦🇪' },
            { name: 'USA', flag: '🇺🇸' },
            { name: 'Europe', flag: '🇪🇺' }
          ].map((market) => (
            <div key={market.name} className="p-6 rounded bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <span className="text-4xl block mb-3">{market.flag}</span>
              <span className="font-bold text-white tracking-wide text-sm">{market.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Business Verticals cards */}
      <section className="py-20 px-4 bg-white/[0.02] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight mb-4">Our Businesses</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Operating units dedicated to specific supply areas, logistics, and marketplaces.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded bg-black border border-white/10 flex flex-col justify-between hover:border-blue-500/50 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded bg-blue-600/10 flex items-center justify-center text-blue-500 mb-6">
                  <Car size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Ice AutoHaus</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Quality sedans, SUVs, electric vehicles (EVs), commercial trucks, and automotive spare parts imported directly from South Korea, China, and UAE.
                </p>
              </div>
              <button onClick={() => setCurrentTab('autohaus')} className="w-full py-3 rounded bg-blue-600/10 text-blue-400 hover:bg-blue-600 hover:text-white transition duration-300 font-semibold text-sm">
                Browse Vehicles
              </button>
            </div>

            <div className="p-8 rounded bg-black border border-white/10 flex flex-col justify-between hover:border-blue-500/50 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded bg-indigo-600/10 flex items-center justify-center text-indigo-500 mb-6">
                  <Smartphone size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Ice Electronics & Gaming</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Premium smart devices, high definition television screens, personal computers, home appliances, and video game consoles.
                </p>
              </div>
              <button onClick={() => setCurrentTab('electronics-gaming')} className="w-full py-3 rounded bg-indigo-600/10 text-indigo-400 hover:bg-indigo-600 hover:text-white transition duration-300 font-semibold text-sm">
                Browse Hardware
              </button>
            </div>

            <div className="p-8 rounded bg-black border border-white/10 flex flex-col justify-between hover:border-blue-500/50 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded bg-green-600/10 flex items-center justify-center text-green-500 mb-6">
                  <ShoppingBag size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">IceLink Market</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  The generalized wholesale and retail marketplace for bulk furniture, hardware fixtures, machinery, and custom enterprise orders.
                </p>
              </div>
              <button onClick={() => setCurrentTab('market')} className="w-full py-3 rounded bg-green-600/10 text-green-400 hover:bg-green-600 hover:text-white transition duration-300 font-semibold text-sm">
                Browse Marketplace
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight mb-4">Featured Deals</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Explore some of our latest verified inventory imports ready for procurement details.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockProducts.map((p) => (
            <div key={p.id} className="rounded bg-white/5 border border-white/10 overflow-hidden flex flex-col justify-between hover:border-blue-500/50 transition-all duration-300">
              <div className="relative aspect-video w-full bg-neutral-900 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 px-2 py-1 rounded bg-black/70 border border-white/10 text-[10px] text-gray-300 font-bold uppercase tracking-wider">
                  {p.source_market}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest block mb-2">{p.stock_id ? 'AutoHaus' : 'Hardware'}</span>
                  <h3 className="font-bold text-white mb-2 line-clamp-1">{p.name}</h3>
                  <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-4">{p.description}</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="font-extrabold text-blue-400 text-sm">
                    {p.price ? `${p.currency} ${p.price.toLocaleString()}` : 'Quote on Request'}
                  </span>
                  <button
                    onClick={() => {
                      setSelectedProduct(p);
                      setCurrentTab('product-details');
                    }}
                    className="px-3.5 py-1.5 rounded bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition duration-200"
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
