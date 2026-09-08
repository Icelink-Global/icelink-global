'use client';
import React, { useState, useEffect } from 'react';
import { mockProducts } from '@/mockData';
import { Product } from '@/types';
import {
  Car, Fuel, Settings, Milestone, ShieldCheck, Ship, FileCheck, Headphones,
  Search, ArrowRight, CheckCircle2, SlidersHorizontal, MessageSquare, Wrench,
  DollarSign, PackageCheck, Sparkles, Filter, X
} from 'lucide-react';

interface AutoHausViewProps {
  setSelectedProduct: (p: Product) => void;
  setCurrentTab: (tab: string) => void;
}

export function AutoHausView({ setSelectedProduct, setCurrentTab }: AutoHausViewProps) {
  const [filterType, setFilterType] = useState<string>('all');
  const [selectedCountry, setSelectedCountry] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showSourceModal, setShowSourceModal] = useState<boolean>(false);

  const bgImages = [
    "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200",
    "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200",
    "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1200"
  ];
  const [currentBg, setCurrentBg] = useState(0);

  const heroSlideImages = [
    '/hero-cars/car-slide-1.png',
    '/hero-cars/car-slide-2.png',
    '/hero-cars/car-slide-3.png',
    '/hero-cars/car-slide-4.png'
  ];
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [bgImages.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlideImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlideImages.length]);

  // Sourcing form state
  const [sourcingForm, setSourcingForm] = useState({
    vehicleType: 'Sedan',
    make: '',
    model: '',
    yearFrom: '2018',
    yearTo: '2024',
    budgetUsd: '',
    preferredOrigin: 'Korea',
    notes: '',
    phoneWhatsapp: ''
  });

  const vehicles = mockProducts.filter((p) => p.business_id === 'b1');
  const spareParts = mockProducts.filter((p) => p.business_id === 'b1_parts');

  // Filter vehicles
  const filteredVehicles = vehicles.filter((v) => {
    const matchesCategory = filterType === 'all' || v.category_id === filterType;
    const matchesCountry =
      selectedCountry === 'all' ||
      v.source_market.toLowerCase().includes(selectedCountry.toLowerCase());
    const matchesSearch =
      v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (v.stock_id && v.stock_id.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesCountry && matchesSearch;
  });

  const handleWhatsAppEnquiry = (vehicleName: string, stockId?: string) => {
    const text = encodeURIComponent(
      `Hello IceLink Global, I am interested in inquiring about the vehicle: ${vehicleName} (Stock ID: ${stockId || 'N/A'}). Please provide further details and total shipping cost.`
    );
    window.open(`https://wa.me/233241234567?text=${text}`, '_blank');
  };

  const handleSourcingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Your vehicle sourcing request has been received. Our team will contact you on WhatsApp shortly.');
    setShowSourceModal(false);
  };

  const brandLogos = [
    { name: 'KIA', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/kia.svg' },
    { name: 'HYUNDAI', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/hyundai.svg' },
    { name: 'HONDA', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/honda.svg' },
    { name: 'CHEVROLET', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/chevrolet.svg' },
    { name: 'AUDI', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/audi.svg' },
    { name: 'TOYOTA', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/toyota.svg' },
    { name: 'NISSAN', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nissan.svg' },
    { name: 'MERCEDES', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mercedes.svg' },
    { name: 'LEXUS', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/lexus.svg' },
    { name: 'VOLKSWAGEN', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/volkswagen.svg' },
    { name: 'MAZDA', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mazda.svg' },
    { name: 'BMW', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/bmw.svg' },
    { name: 'TESLA', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tesla.svg' },
  ];

  return (
    <div className="flex-1 bg-[#050811] text-white">
      {/* ══════════════════════════════════════════════
          HERO BANNER
      ══════════════════════════════════════════════ */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-16 px-4 bg-[#00051a] border-b border-blue-900/30">
        {/* Animated Radial Dots Effect */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(59,130,246,0.15) 1px, transparent 1px)',
            backgroundSize: '36px 36px'
          }}
        />

        {/* Right Side Hero Images — Smooth crossfade transition */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          <div className="absolute top-0 bottom-0 left-1/2 right-0 flex items-center justify-start">
            {heroSlideImages.map((imgSrc, idx) => {
              const isActive = idx === currentHeroSlide;
              const isPrev = idx === (currentHeroSlide - 1 + heroSlideImages.length) % heroSlideImages.length;
              
              let styleClass = 'opacity-0 translate-x-[20vw] z-0'; // Waiting on the right
              if (isActive) {
                styleClass = 'opacity-100 translate-x-0 z-10'; // Active in center
              } else if (isPrev) {
                styleClass = 'opacity-0 -translate-x-[10vw] z-0'; // Fading out to the left
              }

              return (
                <img
                  key={imgSrc}
                  src={imgSrc}
                  alt={`Featured Hero Vehicle ${idx + 1}`}
                  className={`absolute w-full h-full object-contain object-left scale-[0.95] transform origin-left drop-shadow-[0_20px_45px_rgba(59,130,246,0.35)] transition-all duration-[2500ms] ease-in-out ${styleClass}`}
                />
              );
            })}
          </div>
        </div>

        {/* Hero Main Content */}
        <div className="max-w-7xl mx-auto px-4 z-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-6">
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-6xl font-black mb-6 leading-tight">
              Quality Vehicles.<br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-300 bg-clip-text text-transparent">
                Global Standards.
              </span>
            </h1>
            <p className="text-gray-300 max-w-xl text-sm sm:text-base leading-relaxed mb-8">
              Korean, Chinese, American and more. Cars, EVs, Trucks, Spare Parts & Accessories – all sourced with trust and delivered directly across Africa.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                  const element = document.getElementById('vehicle-listings');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-7 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition shadow-lg shadow-blue-900/40"
              >
                Browse vehicles
              </button>
              <button
                onClick={() => setShowSourceModal(true)}
                className="px-7 py-3.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold text-sm transition backdrop-blur-sm"
              >
                Source a vehicle
              </button>
            </div>
          </div>
        </div>

        {/* Floating Brand Logos — matching AboutUs floatUpRandom style with 10% opacity */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          {brandLogos.map((brand, idx) => {
            const leftPos = 40 + ((idx * 4.5) % 55);
            const animDuration = 14 + (idx % 5) * 3;
            const delay = -(idx * 2.8);
            const sizeClass = idx % 2 === 0 ? "w-9 h-9" : "w-7 h-7";

            return (
              <div
                key={brand.name}
                className="absolute bottom-0 transform -translate-x-1/2"
                style={{
                  left: `${leftPos}%`,
                  animation: `floatUpRandomBrand ${animDuration}s linear infinite`,
                  animationDelay: `${delay}s`
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className={`${sizeClass} object-contain filter invert opacity-10 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]`}
                />
              </div>
            );
          })}
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes floatUpRandomBrand {
            0%   { transform: translateY(10vh) scale(0.8) rotate(0deg); opacity: 0; }
            15%  { opacity: 0.1; }
            85%  { opacity: 0.1; }
            100% { transform: translateY(-110vh) scale(1.1) rotate(15deg); opacity: 0; }
          }
        `}} />
      </section>

      {/* ══════════════════════════════════════════════
          FEATURE HIGHLIGHTS ROW
      ══════════════════════════════════════════════ */}
      <section className="bg-[#03091e] border-y border-blue-900/30 py-6 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
              <Car size={20} />
            </div>
            <div>
              <div className="text-xs font-black text-white">Multi-Country Sourcing</div>
              <div className="text-[10px] text-gray-400">Korea, China, Dubai, USA & more</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <div className="text-xs font-black text-white">Inspected & Verified</div>
              <div className="text-[10px] text-gray-400">Quality you can trust</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
              <Ship size={20} />
            </div>
            <div>
              <div className="text-xs font-black text-white">Safe Shipping</div>
              <div className="text-[10px] text-gray-400">By sea or by air</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
              <FileCheck size={20} />
            </div>
            <div>
              <div className="text-xs font-black text-white">Customs Support</div>
              <div className="text-[10px] text-gray-400">End-to-end support in Africa</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
              <Headphones size={20} />
            </div>
            <div>
              <div className="text-xs font-black text-white">After Sales Service</div>
              <div className="text-[10px] text-gray-400">We've got you covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SHOP BY CATEGORY THROUGH ALL VEHICLES SECTION (WHITE BACKGROUND WRAPPER)
      ══════════════════════════════════════════════ */}
      <div className="bg-white text-slate-900 border-b border-gray-200">
        
        {/* SHOP BY CATEGORY */}
        <section className="py-14 px-4 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#00051a]">Shop by Category</h2>
              <p className="text-xs text-blue-950/70 font-medium mt-1">Select a vehicle category to filter inventory</p>
            </div>
            <button
              onClick={() => setFilterType('all')}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-md shadow-blue-600/20"
            >
              <span>View all categories</span> <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              {
                id: 'all',
                name: 'All Vehicles',
                sub: 'Explore all vehicles',
                icon: 'https://images.vexels.com/media/users/3/155413/isolated/preview/02fa4279f1759a65b62bafe7caf5be32-suv-car-front-view-silhouette.png'
              },
              {
                id: 'sedan',
                name: 'Sedan',
                sub: 'Comfort & Style',
                icon: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=300'
              },
              {
                id: 'cat_suv',
                name: 'SUV',
                sub: 'Power & Versatility',
                icon: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=300'
              },
              {
                id: 'cat_ev',
                name: 'EV / Hybrid',
                sub: 'Smart & Efficient',
                icon: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=300'
              },
              {
                id: 'truck',
                name: 'Truck / Bus',
                sub: 'Commercial Vehicles',
                icon: 'https://images.unsplash.com/photo-1559416523-140dd55d222c?q=80&w=300'
              },
              {
                id: 'luxury',
                name: 'Luxury',
                sub: 'Premium Selection',
                icon: 'https://images.unsplash.com/photo-1594502184342-2e12f877aa73?q=80&w=300'
              }
            ].map((cat) => (
              <div
                key={cat.id}
                onClick={() => {
                  setFilterType(cat.id);
                  const element = document.getElementById('vehicle-listings');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`cursor-pointer rounded-xl p-4 border transition-all duration-300 flex flex-col items-center text-center ${
                  filterType === cat.id
                    ? 'bg-blue-600/20 border-blue-500 shadow-lg shadow-blue-900/30'
                    : 'bg-[#0a0f24] border-white/10 hover:border-blue-500/50 hover:bg-[#0e1638]'
                }`}
              >
                <div className="w-16 h-12 rounded-lg overflow-hidden mb-3 bg-neutral-900 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={cat.icon} alt={cat.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-extrabold text-sm text-white mb-0.5">{cat.name}</h3>
                <p className="text-[10px] text-gray-400">{cat.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CAN'T FIND WHAT YOU'RE LOOKING FOR BANNER */}
        <section className="px-4 max-w-7xl mx-auto mb-16">
          <div className="relative rounded-2xl bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border border-blue-500/30 p-8 sm:p-10 overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="z-10 max-w-xl">
              <h3 className="text-2xl font-black text-white mb-2">Can't find what you're looking for?</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Let us source the perfect vehicle for you from our trusted global network in Korea, China, UAE, and USA.
              </p>
            </div>
            <button
              onClick={() => setShowSourceModal(true)}
              className="z-10 flex-shrink-0 px-7 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider transition shadow-lg"
            >
              Source a Vehicle
            </button>
            <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 pointer-events-none">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=600"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* ALL VEHICLES CATALOG LISTINGS */}
        <section id="vehicle-listings" className="pb-16 px-4 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#00051a]">All Vehicles</h2>
              <p className="text-xs text-blue-950/70 font-medium mt-1">Find your perfect vehicle from our global inventory</p>
            </div>

            {/* Search bar */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search make, model, stock ID..."
                className="w-full bg-[#0a0f24] border border-white/15 rounded-lg px-3.5 py-2 pl-9 text-xs text-white placeholder-gray-400 outline-none focus:border-blue-500"
              />
              <Search size={14} className="absolute left-3 top-2.5 text-gray-400" />
            </div>
          </div>

          {/* Toolbar & Filters */}
          <div className="bg-[#0a0f24] border border-white/10 rounded-xl p-4 mb-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
              <div>
                <label className="text-[10px] font-bold text-gray-400 block mb-1 uppercase">Country of Origin</label>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full bg-[#050811] border border-white/10 rounded px-2.5 py-1.5 text-xs text-white outline-none focus:border-blue-500"
                >
                  <option value="all">All Countries</option>
                  <option value="korea">South Korea</option>
                  <option value="china">China</option>
                  <option value="usa">USA</option>
                  <option value="dubai">Dubai (UAE)</option>
                  <option value="japan">Japan</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-400 block mb-1 uppercase">Category</label>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="w-full bg-[#050811] border border-white/10 rounded px-2.5 py-1.5 text-xs text-white outline-none focus:border-blue-500"
                >
                  <option value="all">All Categories</option>
                  <option value="sedan">Sedan</option>
                  <option value="cat_suv">SUV</option>
                  <option value="cat_ev">EV / Hybrid</option>
                  <option value="truck">Truck / Bus</option>
                  <option value="luxury">Luxury</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-400 block mb-1 uppercase">Fuel Type</label>
                <select className="w-full bg-[#050811] border border-white/10 rounded px-2.5 py-1.5 text-xs text-white outline-none focus:border-blue-500">
                  <option value="all">All Types</option>
                  <option value="gasoline">Gasoline</option>
                  <option value="diesel">Diesel</option>
                  <option value="electric">Electric</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-400 block mb-1 uppercase">Price Range</label>
                <div className="flex items-center gap-1">
                  <input type="text" placeholder="Min" className="w-full bg-[#050811] border border-white/10 rounded px-2 py-1.5 text-xs text-white outline-none" />
                  <span className="text-gray-500 text-xs">-</span>
                  <input type="text" placeholder="Max" className="w-full bg-[#050811] border border-white/10 rounded px-2 py-1.5 text-xs text-white outline-none" />
                </div>
              </div>

              <div className="col-span-2 flex items-end gap-2">
                <button
                  onClick={() => {
                    setSelectedCountry('all');
                    setFilterType('all');
                    setSearchQuery('');
                  }}
                  className="flex-1 py-1.5 rounded bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 font-bold text-xs transition"
                >
                  Clear All
                </button>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
              {[
                { label: `All (${vehicles.length})`, id: 'all' },
                { label: 'Sedan', id: 'sedan' },
                { label: 'SUV', id: 'cat_suv' },
                { label: 'EV / Hybrid', id: 'cat_ev' },
                { label: 'Truck / Bus', id: 'truck' },
                { label: 'Luxury', id: 'luxury' }
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setFilterType(btn.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition ${
                    filterType === btn.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredVehicles.map((p) => {
            const priceGhs = p.price ? p.price * 14.5 : 150000;
            return (
              <div
                key={p.id}
                className="rounded-xl bg-[#0a0f24] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-blue-500/50 transition-all duration-300 group shadow-md"
              >
                <div className="relative aspect-[16/10] w-full bg-neutral-900 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  {/* Country badge */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-blue-600/90 backdrop-blur-sm border border-blue-400/30 text-[9px] text-white font-extrabold uppercase tracking-wider shadow">
                    {p.source_market}
                  </span>
                  <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm text-gray-300 text-[10px] font-mono">
                    {p.stock_id}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-0.5 rounded bg-green-500/10 text-green-400 text-[10px] font-bold uppercase">
                        In Stock
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-blue-400 transition">
                      {p.name}
                    </h3>

                    {/* Specification list */}
                    <div className="text-xs text-gray-400 space-y-1 mb-4">
                      <div>
                        {p.specifications['Fuel'] || 'Gasoline'} | {p.specifications['Transmission'] || 'Automatic'}
                      </div>
                      <div className="font-mono text-[11px] text-gray-300">
                        {p.specifications['Mileage'] || 'N/A'}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="pt-4 border-t border-white/5 mb-4">
                      <div className="text-[10px] text-gray-400 font-bold uppercase">Price</div>
                      <div className="text-lg font-black text-blue-400">
                        GHS {priceGhs.toLocaleString()}
                      </div>
                      <div className="text-[11px] text-gray-400">
                        ${p.price?.toLocaleString()} USD
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => {
                          setSelectedProduct(p);
                          setCurrentTab('product-details');
                        }}
                        className="w-full py-2 rounded bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => handleWhatsAppEnquiry(p.name, p.stock_id)}
                        className="w-full py-2 rounded bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white font-bold text-xs uppercase tracking-wider transition border border-emerald-500/30 flex items-center justify-center gap-1"
                      >
                        <MessageSquare size={12} /> WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      </div>

      {/* ══════════════════════════════════════════════
          WHY CHOOSE ICE AUTOHAUS?
      ══════════════════════════════════════════════ */}
      <section className="relative py-16 px-4 bg-[#03081a] border-t border-blue-900/30 overflow-hidden">
        {/* Background Image - Upscaled Car */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 pointer-events-none opacity-20 overflow-hidden flex items-center justify-end z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/upscaled-car-v2.png"
            alt=""
            className="w-full h-full object-contain object-right scale-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#03081a] via-[#03081a]/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-black text-white mb-3">Why Choose Ice AutoHaus?</h2>
            <p className="text-sm text-gray-400">
              We bridge international auto markets with African buyers through transparency, inspection, and full logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                title: 'Wide Selection',
                desc: 'Thousands of vehicles from trusted suppliers in Korea, China, UAE & USA.',
                icon: <Car size={24} className="text-blue-400" />
              },
              {
                title: 'Competitive Prices',
                desc: 'Best market prices guaranteed direct from auctions and certified dealers.',
                icon: <DollarSign size={24} className="text-blue-400" />
              },
              {
                title: 'Transparent Process',
                desc: 'Full inspection reports, history check, and real-time tracking from start to finish.',
                icon: <CheckCircle2 size={24} className="text-blue-400" />
              },
              {
                title: 'Flexible Options',
                desc: 'Direct purchasing, custom sourcing, cash & leasing support options.',
                icon: <SlidersHorizontal size={24} className="text-blue-400" />
              },
              {
                title: 'Reliable Delivery',
                desc: 'On-time shipping and clearance support to ports across Africa.',
                icon: <PackageCheck size={24} className="text-blue-400" />
              }
            ].map((item, idx) => (
              <div key={idx} className="rounded-xl bg-[#0a0f24] border border-white/10 p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-base text-white mb-2">{item.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FEATURED PARTS & ACCESSORIES
      ══════════════════════════════════════════════ */}
      <section id="featured-parts" className="py-16 px-4 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#00051a]">Featured Parts & Accessories</h2>
              <p className="text-xs text-blue-950/70 font-medium mt-1">OEM and high quality replacement auto spare parts</p>
            </div>
            <button
              onClick={() => setCurrentTab('sourcing')}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-md shadow-blue-600/20"
            >
              <span>Request Specific Part</span> <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {spareParts.map((part) => (
              <div key={part.id} className="rounded-xl bg-[#0a0f24] border border-white/10 p-4 flex flex-col justify-between hover:border-blue-500/40 transition shadow-md">
                <div>
                  <div className="aspect-square rounded-lg bg-neutral-900 overflow-hidden mb-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={part.images[0]} alt={part.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-bold text-sm text-white mb-1">{part.name}</h4>
                  <p className="text-[11px] text-gray-400 mb-3">{part.description}</p>
                </div>
                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase block font-bold">Price</span>
                    <span className="text-sm font-black text-blue-400">GHS {((part.price || 20) * 14.5).toLocaleString()}</span>
                  </div>
                  <button
                    onClick={() => handleWhatsAppEnquiry(part.name, part.id)}
                    className="px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-500 text-white font-bold text-[10px] uppercase"
                  >
                    Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SOURCE A VEHICLE MODAL
      ══════════════════════════════════════════════ */}
      {showSourceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0a0f24] border border-blue-500/40 rounded-2xl max-w-lg w-full p-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowSourceModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-1"
            >
              <X size={20} />
            </button>

            <h3 className="text-xl font-black text-white mb-1">Source Your Dream Vehicle</h3>
            <p className="text-xs text-gray-400 mb-6">Tell us what vehicle you need and we will source & deliver it for you.</p>

            <form onSubmit={handleSourcingSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-gray-300 font-bold mb-1">Vehicle Type</label>
                <select
                  value={sourcingForm.vehicleType}
                  onChange={(e) => setSourcingForm({ ...sourcingForm, vehicleType: e.target.value })}
                  className="w-full bg-[#050811] border border-white/15 rounded-lg px-3 py-2.5 text-white outline-none focus:border-blue-500"
                >
                  <option value="Sedan">Sedan</option>
                  <option value="SUV">SUV</option>
                  <option value="EV / Hybrid">EV / Hybrid</option>
                  <option value="Truck / Van">Truck / Bus / Van</option>
                  <option value="Luxury">Luxury</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 font-bold mb-1">Make (e.g. Hyundai, Toyota)</label>
                  <input
                    type="text"
                    required
                    value={sourcingForm.make}
                    onChange={(e) => setSourcingForm({ ...sourcingForm, make: e.target.value })}
                    placeholder="Hyundai"
                    className="w-full bg-[#050811] border border-white/15 rounded-lg px-3 py-2 text-white outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-bold mb-1">Model (e.g. Avante, Tucson)</label>
                  <input
                    type="text"
                    required
                    value={sourcingForm.model}
                    onChange={(e) => setSourcingForm({ ...sourcingForm, model: e.target.value })}
                    placeholder="Avante"
                    className="w-full bg-[#050811] border border-white/15 rounded-lg px-3 py-2 text-white outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 font-bold mb-1">Preferred Origin</label>
                  <select
                    value={sourcingForm.preferredOrigin}
                    onChange={(e) => setSourcingForm({ ...sourcingForm, preferredOrigin: e.target.value })}
                    className="w-full bg-[#050811] border border-white/15 rounded-lg px-3 py-2 text-white outline-none focus:border-blue-500"
                  >
                    <option value="Korea">South Korea</option>
                    <option value="China">China</option>
                    <option value="Dubai">Dubai (UAE)</option>
                    <option value="USA">USA</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 font-bold mb-1">Target Budget ($ USD)</label>
                  <input
                    type="text"
                    value={sourcingForm.budgetUsd}
                    onChange={(e) => setSourcingForm({ ...sourcingForm, budgetUsd: e.target.value })}
                    placeholder="$12,000"
                    className="w-full bg-[#050811] border border-white/15 rounded-lg px-3 py-2 text-white outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 font-bold mb-1">Phone / WhatsApp Number</label>
                <input
                  type="tel"
                  required
                  value={sourcingForm.phoneWhatsapp}
                  onChange={(e) => setSourcingForm({ ...sourcingForm, phoneWhatsapp: e.target.value })}
                  placeholder="+233 24 123 4567"
                  className="w-full bg-[#050811] border border-white/15 rounded-lg px-3 py-2 text-white outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-bold mb-1">Additional Requirements (Color, Mileage, Specs)</label>
                <textarea
                  rows={3}
                  value={sourcingForm.notes}
                  onChange={(e) => setSourcingForm({ ...sourcingForm, notes: e.target.value })}
                  placeholder="White exterior, low mileage, leather seats..."
                  className="w-full bg-[#050811] border border-white/15 rounded-lg px-3 py-2 text-white outline-none focus:border-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider transition shadow-lg mt-2"
              >
                Submit Sourcing Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
