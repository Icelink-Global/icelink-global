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
const AUTOHAUS_IMG = '/ah1.jpg';
const GAMING_IMG = '/ah2.jpg';
const SOURCING_IMG = '/ah3.jpg';

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
  { code: 'kr', name: 'SOUTH KOREA', short: 'S. Korea', sub: 'Quality & Innovation' },
  { code: 'cn', name: 'CHINA', short: 'China', sub: 'Manufacturing Power' },
  { code: 'us', name: 'USA', short: 'USA', sub: 'Technology & Quality' },
  { code: 'eu', name: 'EUROPE', short: 'Europe', sub: 'Premium Brands' },
  { code: 'ae', name: 'DUBAI (UAE)', short: 'Dubai', sub: 'Global Hub' },
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
      <section className="relative overflow-hidden px-4 bg-[#00051a]">
        {/* Animated grid dots */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle, rgba(59,130,246,0.15) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          animation: 'fadeInUp 1s ease'
        }} />
        {/* Background Image on the Right */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
          <img 
            src="/background.jpg" 
            alt="Satellite Internet Background" 
            className="w-full h-auto scale-[1.3] -translate-y-8 animate-pulse-opacity" 
          />
          {/* Fading gradients to blend image into the deep blue background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00051a] via-[#00051a]/60 to-transparent"></div>
          <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-[#00051a] to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#00051a] to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-0 sm:px-4 pt-6 pb-16 sm:pt-20 sm:pb-32 flex flex-col justify-center z-10" style={{ minHeight: '45vh' }}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex-1 w-full relative z-10">
              <h1 className="text-[28px] leading-[1.1] sm:text-5xl lg:text-6xl font-black text-white mb-5 max-w-4xl">
                <span className="block whitespace-nowrap hover:tracking-wide transition-all duration-500">Connecting Markets.</span>
                <span className="block whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-blue-300 hover:to-cyan-300 transition-all duration-500">
                  Delivering Possibilities.
                </span>
              </h1>
              <p className="text-gray-300 text-xs sm:text-base max-w-lg mb-8 leading-relaxed">
                We source quality vehicles, products and more from trusted markets worldwide and deliver value across Africa.
              </p>
              <div className="flex flex-row w-full sm:w-auto gap-2 sm:gap-3 mb-8">
                <button
                  onClick={() => setCurrentTab('autohaus')}
                  className="flex-1 sm:flex-none px-2 sm:px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-[9px] sm:text-sm rounded-lg transition whitespace-nowrap text-center"
                >
                  Explore Our Services
                </button>
                <button
                  onClick={() => setCurrentTab('sourcing')}
                  className="flex-1 sm:flex-none px-2 sm:px-6 py-3 bg-transparent border border-white/40 hover:bg-white/10 text-white font-bold text-[9px] sm:text-sm rounded-lg transition whitespace-nowrap text-center"
                >
                  Request Sourcing
                </button>
              </div>
            </div>
          </div>

          {/* Source countries — all in one card + Africa separate */}
          <div className="flex flex-row items-stretch w-full -mt-3 sm:mt-6 gap-2 sm:gap-4 overflow-x-auto hide-scrollbar pb-2 relative z-10">
            <div className="flex items-center justify-between min-w-0 w-full lg:flex-1 gap-2 sm:gap-5 px-3 sm:px-10 py-3 sm:py-7 rounded-xl sm:rounded-2xl bg-[#040c2f]/70 border border-white/15 backdrop-blur-sm">
              {SOURCE_MARKETS.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-0.5 sm:flex-row sm:gap-3 flex-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://flagcdn.com/w40/${item.code}.png`}
                    alt={item.name}
                    className="shadow-sm flex-shrink-0 object-cover w-6 h-4 sm:w-12 sm:h-8"
                  />
                  <span className="text-[6px] sm:text-[13px] sm:font-bold font-normal tracking-wide text-white text-center leading-tight">
                    <span className="sm:hidden">{item.short}</span>
                    <span className="hidden sm:inline">{item.name}</span>
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center px-1 sm:px-2">
              <ArrowRight size={16} className="text-blue-400 flex-shrink-0 sm:hidden animate-bounce-x" />
              <ArrowRight size={28} className="text-blue-400 flex-shrink-0 hidden sm:block animate-bounce-x" />
            </div>

            <div className="flex flex-col items-center justify-center gap-0.5 sm:flex-row sm:gap-3 px-3 py-3 sm:py-7 rounded-xl sm:rounded-2xl bg-[#040c2f]/70 border border-blue-400/40 backdrop-blur-sm flex-shrink-0 min-w-[52px] sm:min-w-[160px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_the_African_Union.svg"
                alt="Africa"
                className="shadow-sm flex-shrink-0 object-cover w-6 h-4 sm:w-12 sm:h-8"
              />
              <span className="text-[6px] sm:text-[14px] sm:font-bold font-normal tracking-wide text-blue-300 text-center leading-tight">AFRICA</span>
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
          <div className="animated-border-card cursor-pointer group hover:-translate-y-1 transition duration-300 shadow-[0_-15px_30px_-15px_rgba(0,0,0,0.3)]" 
               style={{ '--card-border-color': '#0d47a1', '--card-radius': '16px', '--card-bg': '#ffffff' } as React.CSSProperties}
               onClick={() => setCurrentTab('autohaus')}>
            <div className="p-6 pb-8 flex flex-col h-full rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="animated-border-card flex-shrink-0" style={{ '--card-border-color': '#0d47a1', '--card-radius': '9999px', '--card-bg': '#ffffff' } as React.CSSProperties}>
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src="/autohaus-logo.png" 
                      alt="Ice AutoHaus Logo"
                      className="w-[80%] h-[80%] object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-black text-[#0d47a1] text-xl leading-tight">Ice AutoHaus</h3>
                  <p className="text-slate-800 text-xs mt-1 font-medium leading-snug">Vehicles, EVs, Trucks, Spare<br/>Parts & Accessories</p>
                </div>
              </div>
              <div className="h-[1px] w-full bg-[#0d47a1] mb-0 rounded-full"></div>
              <div className="relative h-56 rounded-b-xl overflow-hidden bg-slate-50 mb-8 w-full flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={AUTOHAUS_IMG} alt="Ice AutoHaus vehicles" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <button className="flex items-center justify-center gap-1 sm:gap-2 px-3 py-2.5 sm:px-6 sm:py-3.5 rounded-lg sm:rounded-xl bg-[#0d47a1] hover:bg-blue-800 text-white font-bold text-[10px] sm:text-sm transition w-[60%] mt-auto whitespace-nowrap">
                Explore AutoHaus <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* IceLink Market / Gaming */}
          <div className="animated-border-card cursor-pointer group hover:-translate-y-1 transition duration-300 shadow-[0_-15px_30px_-15px_rgba(0,0,0,0.3)]" 
               style={{ '--card-border-color': '#1b5e20', '--card-radius': '16px', '--card-bg': '#ffffff' } as React.CSSProperties}
               onClick={() => setCurrentTab('market')}>
            <div className="p-6 pb-8 flex flex-col h-full rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-[#1b5e20] flex items-center justify-center flex-shrink-0 shadow-inner">
                  <ShoppingBag size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-black text-[#1b5e20] text-xl leading-tight">IceLink Market</h3>
                  <p className="text-slate-800 text-xs mt-1 font-medium leading-snug">Electronics, Gaming, Appliances<br/>& General Goods</p>
                </div>
              </div>
              <div className="h-[1px] w-full bg-[#1b5e20] mb-0 rounded-full"></div>
              <div className="relative h-56 rounded-b-xl overflow-hidden bg-slate-50 mb-8 w-full flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={GAMING_IMG} alt="Ice Electronics & Gaming" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <button className="flex items-center justify-center gap-1 sm:gap-2 px-3 py-2.5 sm:px-6 sm:py-3.5 rounded-lg sm:rounded-xl bg-[#1b5e20] hover:bg-green-800 text-white font-bold text-[10px] sm:text-sm transition w-[60%] mt-auto whitespace-nowrap">
                Explore Market <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* IceLink Sourcing */}
          <div className="animated-border-card cursor-pointer group hover:-translate-y-1 transition duration-300 shadow-[0_-15px_30px_-15px_rgba(0,0,0,0.3)]" 
               style={{ '--card-border-color': '#e65100', '--card-radius': '16px', '--card-bg': '#ffffff' } as React.CSSProperties}
               onClick={() => setCurrentTab('sourcing')}>
            <div className="p-6 pb-8 flex flex-col h-full relative overflow-hidden rounded-2xl">
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="w-14 h-14 rounded-full bg-[#e65100] flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Globe size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-black text-[#e65100] text-xl leading-tight">IceLink Sourcing</h3>
                  <p className="text-slate-800 text-xs mt-1 font-medium leading-snug">Source Anything, Anywhere.<br/>We find, verify and deliver.</p>
                </div>
              </div>
              <div className="h-[1px] w-full bg-[#e65100] mb-0 rounded-full relative z-10"></div>
              <div className="relative h-56 rounded-b-xl overflow-hidden bg-slate-50 mb-8 w-full flex items-center justify-center z-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={SOURCING_IMG} alt="IceLink Sourcing" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <button className="relative z-10 flex items-center justify-center gap-1 sm:gap-2 px-3 py-2.5 sm:px-6 sm:py-3.5 rounded-lg sm:rounded-xl bg-[#e65100] hover:bg-orange-800 text-white font-bold text-[10px] sm:text-sm transition w-[60%] mt-auto whitespace-nowrap">
                Request Sourcing <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          METRICS BAR — animated border cards, dark navy
      ══════════════════════════════════════════════ */}
      <section className="bg-[#00051a] py-16 px-4 mt-16">
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
          <div className="flex justify-between items-center gap-2">
            <h2 className="text-sm sm:text-lg font-black text-slate-900 leading-tight">Popular Categories in IceLink Market</h2>
            <button onClick={() => setCurrentTab('market')} className="flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-6 py-2 sm:py-3 rounded-lg border border-blue-500 text-blue-600 hover:bg-blue-50 font-bold text-[9px] sm:text-sm transition bg-white shadow-sm flex-shrink-0 whitespace-nowrap">
              View All <span className="hidden sm:inline">Categories</span> <ArrowRight size={12} />
            </button>
          </div>
        </div>

        {/* Looping Carousel — full width with fade edges */}
        <div className="relative w-full overflow-hidden mt-2">
          {/* Left Edge Overlay */}
          <div className="absolute left-0 top-0 bottom-0 bg-white z-10 pointer-events-none hidden xl:block xl:w-[calc(50vw-40rem)]"></div>
          <div className="absolute top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none left-0 xl:left-[calc(50vw-40rem)]"></div>

          <div className="flex gap-4 w-max animate-marquee px-4 sm:px-8">
            {[...CATEGORIES, ...CATEGORIES, ...CATEGORIES, ...CATEGORIES].map((cat, i) => (
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

          {/* Right Edge Overlay */}
          <div className="absolute right-0 top-0 bottom-0 bg-white z-10 pointer-events-none hidden xl:block xl:w-[calc(50vw-40rem)]"></div>
          <div className="absolute top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none right-0 xl:right-[calc(50vw-40rem)]"></div>
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
