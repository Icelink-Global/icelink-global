'use client';
import React, { useState, useEffect } from 'react';
import { mockProducts } from '@/mockData';
import { Product } from '@/types';
import {
  Car, Fuel, Settings, Milestone, ShieldCheck, Ship, FileCheck, Headphones,
  Search, ArrowRight, CheckCircle2, SlidersHorizontal, MessageSquare, Wrench,
  DollarSign, PackageCheck, Sparkles, Filter, X,
  Camera, Zap, Gauge, ClipboardList
} from 'lucide-react';

interface AutoHausViewProps {
  setSelectedProduct: (p: Product) => void;
  setCurrentTab: (tab: string) => void;
  currency: string;
  setCurrency: (currency: string) => void;
}

export function AutoHausView({ setSelectedProduct, setCurrentTab, currency, setCurrency }: AutoHausViewProps) {
  const [filterType, setFilterType] = useState<string>('all');
  const [selectedCountry, setSelectedCountry] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showSourceModal, setShowSourceModal] = useState<boolean>(false);
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [minPriceUsd, setMinPriceUsd] = useState<number>(0);
  const [maxPriceUsd, setMaxPriceUsd] = useState<number>(0);

  // Currency conversion rates (relative to USD)
  const exchangeRates: Record<string, number> = {
    USD: 1,
    GHS: 14.5,
    NGN: 1550,
    GBP: 0.79,
    KRW: 1320,
    EUR: 0.92,
    CNY: 7.2,
    JPY: 149
  };

  // Convert price from USD to selected currency
  const convertPrice = (priceUsd: number): number => {
    if (currency === 'USD') return priceUsd;
    return priceUsd * exchangeRates[currency] || priceUsd;
  };

  // Format price in thousands (K) format
  const formatPrice = (price: number): string => {
    if (price >= 1000) {
      return `${(price / 1000).toFixed(0)}k`;
    }
    return price.toFixed(0);
  };

  // Parse K format to actual number
  const parsePrice = (priceStr: string): number => {
    if (!priceStr) return 0;
    // Remove currency prefix if present
    const cleanStr = priceStr.replace(/^[A-Z]{3}\s+/, '').toLowerCase().replace('k', '');
    const num = parseFloat(cleanStr);
    return isNaN(num) ? 0 : num * 1000;
  };

  // Convert price range when currency changes
  useEffect(() => {
    if (minPriceUsd > 0) {
      const convertedValue = minPriceUsd * exchangeRates[currency];
      setMinPrice(`${currency} ${formatPrice(convertedValue)}`);
    }
    if (maxPriceUsd > 0) {
      const convertedValue = maxPriceUsd * exchangeRates[currency];
      setMaxPrice(`${currency} ${formatPrice(convertedValue)}`);
    }
  }, [currency]);

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
    window.open(`https://wa.me/821044879685?text=${text}`, '_blank');
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
                styleClass = 'opacity-0 translate-x-0 z-0'; // Fading out in place
              }

              return (
                <img
                  key={imgSrc}
                  src={imgSrc}
                  alt={`Featured Hero Vehicle ${idx + 1}`}
                  className={`absolute w-full h-full object-contain object-left scale-[0.95] transform origin-left drop-shadow-[0_20px_45px_rgba(59,130,246,0.35)] transition-all duration-[1200ms] ease-out ${styleClass}`}
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
        
        {/* ALL VEHICLES CATALOG LISTINGS */}
        <section id="vehicle-listings" className="py-14 px-4 max-w-7xl mx-auto">
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
                className="w-full bg-gray-100 border border-blue-900 rounded-lg px-3.5 py-2 pl-9 pr-8 text-xs text-gray-900 placeholder-gray-500 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              />
              <Search size={14} className="absolute left-3 top-2.5 text-gray-500" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Toolbar & Filters */}
          <div className="bg-[#00051a] border border-white/10 rounded-xl p-6 mb-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
              <div>
                <label className="text-[10px] font-bold text-gray-400 block mb-2 uppercase">Country of Origin</label>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full bg-[#00051a] border border-white/10 rounded-lg px-3 py-2.5 text-xs text-white outline-none focus:border-blue-500"
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
                <label className="text-[10px] font-bold text-gray-400 block mb-2 uppercase">Category</label>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="w-full bg-[#00051a] border border-white/10 rounded-lg px-3 py-2.5 text-xs text-white outline-none focus:border-blue-500"
                >
                  <option value="all">All Categories</option>
                  <option value="sedan">Sedan</option>
                  <option value="cat_suv">SUV</option>
                  <option value="cat_ev">EV / Hybrid</option>
                  <option value="truck">Truck / Bus</option>
                  <option value="luxury">Luxury</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="text-[10px] font-bold text-gray-400 block mb-2 uppercase">Fuel Type</label>
                <select className="w-full bg-[#00051a] border border-white/10 rounded-lg px-3 py-2.5 text-xs text-white outline-none focus:border-blue-500">
                  <option value="all">All Types</option>
                  <option value="gasoline">Gasoline</option>
                  <option value="diesel">Diesel</option>
                  <option value="electric">Electric</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>

              <div className="sm:col-span-2 lg:col-span-2">
                <label className="text-[10px] font-bold text-gray-400 block mb-2 uppercase">Price Range ({currency})</label>
                <div className="flex items-center gap-1">
                  <div className="relative flex-1">
                    <input
                      list="price-min-options"
                      value={minPrice}
                      onChange={(e) => {
                        const value = e.target.value;
                        setMinPrice(value);
                        if (value) {
                          const parsedValue = parsePrice(value);
                          // Convert current currency value to USD for storage
                          setMinPriceUsd(parsedValue / exchangeRates[currency]);
                        } else {
                          setMinPriceUsd(0);
                        }
                      }}
                      onBlur={(e) => {
                        if (e.target.value && !e.target.value.includes(currency)) {
                          setMinPrice(`${currency} ${e.target.value}`);
                        }
                      }}
                      onFocus={(e) => {
                        // Remove currency prefix when focusing for editing
                        if (e.target.value.includes(currency)) {
                          const cleanValue = e.target.value.replace(`${currency} `, '').trim();
                          setMinPrice(cleanValue);
                        }
                      }}
                      placeholder="Min"
                      className="w-full bg-[#00051a] border border-white/10 rounded-lg px-3 py-2.5 text-xs text-white outline-none focus:border-blue-500 placeholder-gray-500"
                    />
                    <datalist id="price-min-options">
                      <option value="50k" />
                      <option value="100k" />
                      <option value="150k" />
                      <option value="200k" />
                      <option value="300k" />
                      <option value="500k" />
                    </datalist>
                  </div>
                  <span className="text-gray-500 text-xs">-</span>
                  <div className="relative flex-1">
                    <input
                      list="price-max-options"
                      value={maxPrice}
                      onChange={(e) => {
                        const value = e.target.value;
                        setMaxPrice(value);
                        if (value) {
                          const parsedValue = parsePrice(value);
                          // Convert current currency value to USD for storage
                          setMaxPriceUsd(parsedValue / exchangeRates[currency]);
                        } else {
                          setMaxPriceUsd(0);
                        }
                      }}
                      onBlur={(e) => {
                        if (e.target.value && !e.target.value.includes(currency)) {
                          setMaxPrice(`${currency} ${e.target.value}`);
                        }
                      }}
                      onFocus={(e) => {
                        // Remove currency prefix when focusing for editing
                        if (e.target.value.includes(currency)) {
                          const cleanValue = e.target.value.replace(`${currency} `, '').trim();
                          setMaxPrice(cleanValue);
                        }
                      }}
                      placeholder="Max"
                      className="w-full bg-[#00051a] border border-white/10 rounded-lg px-3 py-2.5 text-xs text-white outline-none focus:border-blue-500 placeholder-gray-500"
                    />
                    <datalist id="price-max-options">
                      <option value="50k" />
                      <option value="100k" />
                      <option value="150k" />
                      <option value="200k" />
                      <option value="300k" />
                      <option value="500k" />
                    </datalist>
                  </div>
                </div>
              </div>

              <div className="flex items-end">
                <button
                  onClick={() => {
                    setSelectedCountry('all');
                    setFilterType('all');
                    setSearchQuery('');
                    setMinPrice('');
                    setMaxPrice('');
                    setMinPriceUsd(0);
                    setMaxPriceUsd(0);
                  }}
                  className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 font-bold text-xs transition"
                >
                  Clear All
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Vehicles Grid */}
        <section className="pb-16 px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredVehicles.map((p) => {
              const convertedPrice = p.price ? convertPrice(p.price) : convertPrice(10345);
              return (
                <div
                  key={p.id}
                  className="rounded-xl bg-white border border-gray-200 overflow-hidden flex flex-col hover:border-blue-400 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="relative aspect-[4/3] w-full bg-neutral-100 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    
                    {/* Top Left - Country */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-sm text-[10px] text-white font-bold uppercase tracking-wide flex items-center gap-1.5">
                      {p.source_market.toLowerCase().includes('korea') && '🇰🇷'}
                      {p.source_market.toLowerCase().includes('china') && '🇨🇳'}
                      {p.source_market.toLowerCase().includes('usa') && '🇺🇸'}
                      {(p.source_market.toLowerCase().includes('dubai') || p.source_market.toLowerCase().includes('uae')) && '🇦🇪'}
                      {p.source_market.toLowerCase().includes('japan') && '🇯🇵'}
                      {p.source_market}
                    </div>

                    {/* Top Right - Status */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-[#20b26c] text-[10px] text-white font-bold tracking-wide">
                      In Stock
                    </div>

                    {/* Bottom Right - Stock ID */}
                    <div className="absolute bottom-3 right-3 px-2 py-1.5 rounded bg-black/60 backdrop-blur-sm text-gray-200 text-[9px] font-mono tracking-wider">
                      {p.stock_id}
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                        {p.name}
                      </h3>

                      {/* Specs */}
                      <div className="grid grid-cols-2 gap-y-2 gap-x-1 text-[11px] text-gray-600 mb-5 font-medium bg-gray-50 border border-gray-100 rounded-lg p-3">
                        <div className="flex items-center gap-1.5">
                          <Fuel size={14} className="text-gray-400" />
                          <span className="truncate">{p.specifications['Fuel'] || 'Gasoline'}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Settings size={14} className="text-gray-400" />
                          <span className="truncate">{p.specifications['Transmission'] || 'Auto'}</span>
                        </div>
                        <div className="flex items-center gap-1.5 col-span-2">
                          <Milestone size={14} className="text-gray-400" />
                          <span className="truncate">{p.specifications['Mileage'] || 'N/A'}</span>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="mb-5">
                        <div className="text-[11px] text-gray-500 font-medium mb-0.5">Price</div>
                        <div className="text-xl font-bold text-blue-600 mb-0.5">
                          {currency} {formatPrice(convertedPrice)}
                        </div>
                        <div className="text-[11px] text-gray-400">
                          {convertedPrice.toLocaleString(undefined, { maximumFractionDigits: 0 })} {currency}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-auto">
                      <button
                        onClick={() => {
                          setSelectedProduct(p);
                          setCurrentTab('product-details');
                        }}
                        className="w-full py-2.5 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-bold text-xs transition-colors"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => handleWhatsAppEnquiry(p.name, p.stock_id)}
                        className="w-full py-2.5 rounded-lg bg-[#0a1e3f] hover:bg-blue-900 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                      >
                        <MessageSquare size={14} /> WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
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
          VEHICLE INSPECTION SECTION
      ══════════════════════════════════════════════ */}
      <section className="pt-20 pb-10 px-4 bg-white border-t border-gray-200 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-[#00051a] mb-4">Inspect Before You Invest.</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Every vehicle deserves a proper check before it reaches your hands. Our vehicle inspection service helps buyers understand the condition of a vehicle before purchase, with detailed checks covering its mechanical, exterior, interior and electrical components.
            </p>
          </div>

          {/* Inspection Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8 hover:border-blue-500/40 hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Camera size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">1. Exterior & Body</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Check the vehicle's exterior condition, including visible dents, scratches, rust, repainting and signs of previous damage.
              </p>
            </div>

            <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8 hover:border-blue-500/40 hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Wrench size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">2. Engine & Transmission</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Check the engine and transmission for visible mechanical concerns, leaks, unusual sounds and other signs that may require attention.
              </p>
            </div>

            <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8 hover:border-blue-500/40 hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Zap size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">3. Interior & Electrical</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Check the interior, dashboard, lights, air conditioning, electronics, controls and other visible electrical functions.
              </p>
            </div>

            <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8 hover:border-blue-500/40 hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Settings size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">4. Brakes, Tyres & Suspension</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Check tyre condition, braking components and visible suspension issues to help identify areas that may need attention.
              </p>
            </div>

            <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8 hover:border-blue-500/40 hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Milestone size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">5. Road Test</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Where applicable, test the vehicle's steering, braking, acceleration and handling while checking for unusual sounds or driving concerns.
              </p>
            </div>

            <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8 hover:border-blue-500/40 hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <ClipboardList size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">6. Inspection Report</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Receive documented inspection findings with relevant photos and observations, giving you a clearer understanding of the vehicle before making your decision.
              </p>
            </div>
          </div>

          {/* Process Indicator */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between relative">
              {/* Line connector for desktop */}
              <div className="hidden md:block absolute top-6 left-10 right-10 h-[2px] bg-gray-200 z-0"></div>
              
              {[
                { step: '01', title: 'Request Inspection', desc: 'Submit the vehicle details and inspection request.' },
                { step: '02', title: 'Vehicle Assessment', desc: 'Our team checks the vehicle based on the available inspection points.' },
                { step: '03', title: 'Findings & Report', desc: 'Receive the inspection findings, observations and relevant photos.' },
                { step: '04', title: 'Make Your Decision', desc: 'Use the inspection information to decide whether to proceed with the purchase.' }
              ].map((item, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center px-4 mb-8 md:mb-0 w-full md:w-1/4">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center text-blue-600 font-black text-sm mb-4 shadow-[0_4px_10px_rgba(59,130,246,0.2)]">
                    {item.step}
                  </div>
                  <h4 className="text-gray-900 font-bold text-sm mb-2">{item.title}</h4>
                  <p className="text-xs text-gray-600 max-w-[200px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 pt-10 px-4 bg-[#050811] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">

          {/* CTA / Visual Area */}
          <div className="relative rounded-3xl overflow-hidden bg-[#03081a] border border-blue-500/20 p-8 sm:p-12">
            <div className="absolute inset-0 z-0 opacity-40">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://images.unsplash.com/photo-1503375894314-d0e889b78e24?q=80&w=1200" 
                alt="Professional vehicle inspection" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#03081a] via-[#03081a]/90 to-transparent"></div>
            </div>
            
            <div className="relative z-10 max-w-xl">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">Know Before You Buy</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
                Don't rely on pictures alone. Get the vehicle checked before committing to your purchase. We source it → We inspect it → We ship it → We deliver it.
              </p>
              <button
                onClick={() => handleWhatsAppEnquiry('Vehicle Inspection Request', 'N/A')}
                className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition shadow-lg shadow-blue-600/30 flex items-center gap-2"
              >
                <MessageSquare size={18} />
                Request an Inspection
              </button>
            </div>
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
