'use client';
import React, { useRef } from 'react';
import {
  ArrowRight, Car, ShoppingBag, Globe, Users, Building2,
  PackageSearch, Boxes, MapPin, Headphones, ChevronLeft, ChevronRight
} from 'lucide-react';

interface HomeViewProps {
  setCurrentTab: (tab: string) => void;
  setSelectedProduct: (p: any) => void;
}

const HERO_BG = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop';
const AUTOHAUS_IMG = 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=600&auto=format&fit=crop';
const MARKET_IMG = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop';
const SOURCING_IMG = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop';

const CATEGORIES = [
  { name: 'Electronics', sub: 'Phones, TVs, Laptops', img: 'https://images.unsplash.com/photo-1550009158-9c4c4149fa86?q=80&w=300&h=200&fit=crop' },
  { name: 'Furniture', sub: 'Sofas, Beds, Tables', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=300&h=200&fit=crop' },
  { name: 'Home Appliances', sub: 'Fridges, Washers, ACs', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=300&h=200&fit=crop' },
  { name: 'Machinery & Tools', sub: 'Generators, Compressors', img: 'https://images.unsplash.com/photo-1504917595217-d4bf4313f8d6?q=80&w=300&h=200&fit=crop' },
  { name: 'Building & Hardware', sub: 'Cement, Tiles, Pipes', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=300&h=200&fit=crop' },
  { name: 'Office & Business', sub: 'Chairs, Desks, Printers', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=300&h=200&fit=crop' },
  { name: 'Fashion & Lifestyle', sub: 'Clothing, Shoes', img: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=300&h=200&fit=crop' },
  { name: 'Other Goods', sub: 'Sports, Health & more', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=300&h=200&fit=crop' },
];

const METRICS = [
  { icon: <Users size={22} className="text-blue-500" />, metric: '1000+', label: 'Happy Customers' },
  { icon: <Building2 size={22} className="text-blue-500" />, metric: '500+', label: 'Businesses Served' },
  { icon: <Globe size={22} className="text-blue-500" />, metric: '20+', label: 'Sourcing Markets' },
  { icon: <Boxes size={22} className="text-blue-500" />, metric: '10,000+', label: 'Products Available' },
  { icon: <MapPin size={22} className="text-blue-500" />, metric: '50+', label: 'African Cities Covered' },
  { icon: <Headphones size={22} className="text-blue-500" />, metric: 'Reliable', label: 'End-to-End Support' },
];

const SOURCE_MARKETS = [
  { code: 'kr', name: 'SOUTH KOREA', sub: 'Quality & Innovation' },
  { code: 'cn', name: 'CHINA', sub: 'Manufacturing Power' },
  { code: 'ae', name: 'DUBAI (UAE)', sub: 'Global Hub' },
  { code: 'us', name: 'USA', sub: 'Technology & Quality' },
  { code: 'eu', name: 'EUROPE', sub: 'Premium Brands' },
];

export function HomeView({ setCurrentTab, setSelectedProduct }: HomeViewProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (dir: 'left' | 'right') => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: dir === 'right' ? 320 : -320, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex-grow bg-white text-slate-900">

      {/* ══════════════════════════════════════════════
          HERO — blue gradient with animated network
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #030c1e 0%, #0a1f4e 50%, #0d2860 100%)' }}>
        {/* Animated grid dots */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle, rgba(59,130,246,0.15) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          animation: 'fadeInUp 1s ease'
        }} />
        {/* Moving link lines overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-[600px] h-[600px] rounded-full border border-blue-500/10 animate-spin-slow" style={{ top: '-200px', right: '-200px', animationDuration: '25s' }} />
          <div className="absolute w-[400px] h-[400px] rounded-full border border-blue-400/10 animate-spin-slow" style={{ top: '-100px', right: '-100px', animationDuration: '18s', animationDirection: 'reverse' }} />
          <div className="absolute w-[800px] h-[800px] rounded-full border border-cyan-500/5 animate-spin-slow" style={{ top: '-300px', right: '-300px', animationDuration: '35s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-28 sm:pt-20 sm:pb-32 flex flex-col justify-center" style={{ minHeight: '65vh' }}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5 max-w-2xl">
            <span className="block whitespace-nowrap hover:tracking-wide transition-all duration-500">Connecting Markets.</span>
            <span className="block whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-blue-300 hover:to-cyan-300 transition-all duration-500">
              Delivering Possibilities.
            </span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-lg mb-8 leading-relaxed">
            We source quality vehicles, products and more from trusted markets worldwide and deliver value across Africa.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <button
              onClick={() => setCurrentTab('autohaus')}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-lg transition"
            >
              Explore Our Services
            </button>
            <button
              onClick={() => setCurrentTab('sourcing')}
              className="px-6 py-3 bg-transparent border border-white/40 hover:bg-white/10 text-white font-bold text-sm rounded-lg transition"
            >
              Request Sourcing
            </button>
          </div>

          {/* Source countries — all in one card + Africa separate */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex flex-wrap items-center gap-4 px-4 py-3 rounded-xl bg-white/5 border border-white/15 backdrop-blur-sm">
              {SOURCE_MARKETS.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://flagcdn.com/w40/${item.code}.png`}
                    alt={item.name}
                    width={36}
                    height={25}
                    className="rounded shadow-sm flex-shrink-0 object-cover"
                    style={{ width: 36, height: 25 }}
                  />
                  <span className="text-[12px] font-bold tracking-wide text-white whitespace-nowrap">{item.name}</span>
                </div>
              ))}
            </div>

            <ArrowRight size={20} className="text-blue-400 flex-shrink-0 animate-bounce-x" />

            <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-blue-600/25 border border-blue-400/40 backdrop-blur-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://flagcdn.com/w40/gh.png"
                alt="Africa"
                width={36}
                height={25}
                className="rounded shadow-sm flex-shrink-0 object-cover"
                style={{ width: 36, height: 25 }}
              />
              <span className="text-[12px] font-bold tracking-wide text-blue-300 whitespace-nowrap">AFRICA</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          BUSINESS CARDS — vertical cards, overlapping hero
      ══════════════════════════════════════════════ */}
      <section className="px-4 pt-0 pb-6 relative z-10 -mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Ice AutoHaus */}
          <div className="animated-border-card cursor-pointer group hover:-translate-y-1 transition duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)]" 
               style={{ '--card-border-color': '#0d47a1', '--card-radius': '24px', '--card-bg': '#ffffff' } as React.CSSProperties}
               onClick={() => setCurrentTab('autohaus')}>
            <div className="p-6 pb-8 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-[#0d47a1] flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Car size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-black text-[#0d47a1] text-xl leading-tight">Ice AutoHaus</h3>
                  <p className="text-slate-800 text-xs mt-1 font-medium leading-snug">Vehicles, EVs, Trucks, Spare<br/>Parts & Accessories</p>
                </div>
              </div>
              <div className="h-[1px] w-full bg-[#0d47a1] mb-6 rounded-full"></div>
              <div className="relative h-56 rounded-xl overflow-hidden bg-slate-50 mb-8 w-full flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={AUTOHAUS_IMG} alt="Ice AutoHaus vehicles" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition duration-500" />
              </div>
              <button className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0d47a1] hover:bg-blue-800 text-white font-bold text-sm transition w-[60%] mt-auto">
                Explore AutoHaus <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* IceLink Market */}
          <div className="animated-border-card cursor-pointer group hover:-translate-y-1 transition duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)]" 
               style={{ '--card-border-color': '#1b5e20', '--card-radius': '24px', '--card-bg': '#ffffff' } as React.CSSProperties}
               onClick={() => setCurrentTab('market')}>
            <div className="p-6 pb-8 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-[#1b5e20] flex items-center justify-center flex-shrink-0 shadow-inner">
                  <ShoppingBag size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-black text-[#1b5e20] text-xl leading-tight">IceLink Market</h3>
                  <p className="text-slate-800 text-xs mt-1 font-medium leading-snug">Electronics, Furniture, Appliances<br/>& General Goods</p>
                </div>
              </div>
              <div className="h-[1px] w-full bg-[#1b5e20] mb-6 rounded-full"></div>
              <div className="relative h-56 rounded-xl overflow-hidden bg-slate-50 mb-8 w-full flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={MARKET_IMG} alt="IceLink Market goods" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition duration-500" />
              </div>
              <button className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#1b5e20] hover:bg-green-800 text-white font-bold text-sm transition w-[60%] mt-auto">
                Explore Market <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* IceLink Sourcing */}
          <div className="animated-border-card cursor-pointer group hover:-translate-y-1 transition duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)]" 
               style={{ '--card-border-color': '#e65100', '--card-radius': '24px', '--card-bg': '#ffffff' } as React.CSSProperties}
               onClick={() => setCurrentTab('sourcing')}>
            <div className="p-6 pb-8 flex flex-col h-full relative overflow-hidden rounded-3xl">
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="w-14 h-14 rounded-full bg-[#e65100] flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Globe size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-black text-[#e65100] text-xl leading-tight">IceLink Sourcing</h3>
                  <p className="text-slate-800 text-xs mt-1 font-medium leading-snug">Source Anything, Anywhere.<br/>We find, verify and deliver.</p>
                </div>
              </div>
              <div className="h-[1px] w-full bg-[#e65100] mb-6 rounded-full relative z-10"></div>
              <div className="relative h-56 rounded-xl overflow-hidden bg-slate-50 mb-8 w-full flex items-center justify-center z-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={SOURCING_IMG} alt="IceLink Sourcing" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition duration-500" />
              </div>
              <button className="relative z-10 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#e65100] hover:bg-orange-800 text-white font-bold text-sm transition w-[60%] mt-auto">
                Request Sourcing <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          METRICS BAR — animated border cards, dark navy
      ══════════════════════════════════════════════ */}
      <section className="bg-[#0a1120] py-16 px-4 mt-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
          {METRICS.map((item, idx) => (
            <div key={idx} className="metric-card flex flex-col items-center text-center gap-2 py-5 px-3">
              <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center flex-shrink-0 mb-1">
                {item.icon}
              </div>
              <div className="text-xl font-extrabold text-white leading-tight">{item.metric}</div>
              <div className="text-[11px] text-gray-400 font-medium leading-tight">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          POPULAR CATEGORIES — horizontal carousel, square tiles
      ══════════════════════════════════════════════ */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 mb-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-black text-slate-900">Popular Categories in IceLink Market</h2>
            <button onClick={() => setCurrentTab('market')} className="flex items-center gap-2 px-4 py-2 rounded-xl border border-blue-500 text-blue-600 hover:bg-blue-50 font-bold text-xs transition bg-white shadow-sm">
              View All Categories <ArrowRight size={12} />
            </button>
          </div>
        </div>

        {/* Looping Carousel — contained within page */}
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <div className="flex gap-4 w-max animate-marquee">
            {[...CATEGORIES, ...CATEGORIES, ...CATEGORIES].map((cat, i) => (
              <div
                key={`${cat.name}-${i}`}
                className="flex-shrink-0 w-44 cursor-pointer"
                onClick={() => setCurrentTab('market')}
              >
                <div className="w-full h-52 rounded-xl overflow-hidden border border-slate-100 shadow-sm transition mb-2 hover:border-blue-300 hover:shadow-md">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={cat.img} alt={cat.name} className="w-full h-full object-cover hover:scale-105 transition duration-300" />
                </div>
                <div className="text-[12px] font-bold text-slate-800 leading-tight">{cat.name}</div>
                <div className="text-[10px] text-slate-400 mt-0.5">{cat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CTA BANNER — light blue
      ══════════════════════════════════════════════ */}
      <section className="bg-white py-6 px-4 pb-14">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl bg-[#deeeff] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="z-10 max-w-lg">
              <h3 className="text-xl sm:text-2xl font-black text-blue-900 mb-2">Need something specific?</h3>
              <p className="text-blue-900/70 text-sm leading-relaxed">
                Tell us what you need and we will source it for you from our trusted suppliers worldwide.
              </p>
            </div>
            <button
              onClick={() => setCurrentTab('sourcing')}
              className="z-10 flex-shrink-0 px-8 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition shadow-md"
            >
              Request Sourcing
            </button>

            {/* Decorative clipped image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://static.vecteezy.com/system/resources/thumbnails/039/400/812/small/graduation-3d-icon-png.png" 
              alt="Graduation Cap" 
              className="absolute -bottom-16 -right-10 w-64 h-64 object-contain opacity-40 pointer-events-none" 
            />
          </div>
        </div>
      </section>

    </div>
  );
}
