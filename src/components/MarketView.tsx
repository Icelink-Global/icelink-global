'use client';
import React, { useState, useEffect } from 'react';
import { mockProducts } from '@/mockData';
import { Product } from '@/types';
import {
  ShoppingBag, Search, ChevronLeft, ChevronRight, Heart, ShoppingCart, 
  Tv, Sofa, Refrigerator, Wrench, Hammer, Shirt, Dumbbell, Grid,
  ArrowRight
} from 'lucide-react';

export function MarketView() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const carouselSlides = [
    {
      id: 1,
      title: "Let's make your life happier",
      subtitle: "Healthy Living & Premium Goods",
      btnText: "Explore Products",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1600"
    },
    {
      id: 2,
      title: "Discover Innovation",
      subtitle: "Latest Electronics & Gadgets",
      btnText: "Shop Electronics",
      image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1600"
    },
    {
      id: 3,
      title: "Build Your Future",
      subtitle: "Heavy Machinery & Building Materials",
      btnText: "View Machinery",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? carouselSlides.length - 1 : prev - 1));

  const marketProducts = mockProducts.filter(p => p.business_id === 'b4');

  const categories = [
    { label: 'TV & Audio', icon: <Tv size={24} />, id: 'electronics' },
    { label: 'Home & Living', icon: <Sofa size={24} />, id: 'furniture' },
    { label: 'Appliances', icon: <Refrigerator size={24} />, id: 'appliances' },
    { label: 'Machinery', icon: <Wrench size={24} />, id: 'machinery' },
    { label: 'Building', icon: <Hammer size={24} />, id: 'building' },
    { label: 'Fashion', icon: <Shirt size={24} />, id: 'fashion' },
    { label: 'Sports', icon: <Dumbbell size={24} />, id: 'sports' },
    { label: 'More', icon: <Grid size={24} />, id: 'more' },
  ];

  const sourceCountries = [
    { name: 'China', code: 'cn', text: 'Top quality, best prices' },
    { name: 'Korea', code: 'kr', text: 'Innovation & reliability' },
    { name: 'Dubai (UAE)', code: 'ae', text: 'Fast shipping' },
    { name: 'USA', code: 'us', text: 'Premium quality' }
  ];

  return (
    <div className="flex-1 bg-white text-slate-900">
      
      {/* Search Header Area */}
      <div className="border-b border-gray-200 py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
          <div className="hidden md:block w-48">
            <h1 className="text-xl font-black text-blue-900 tracking-tight leading-tight">
              IceLink Market
              <span className="block text-xs text-gray-500 font-normal mt-0.5">Everything you need, sourced</span>
            </h1>
          </div>
          <div className="flex-1 relative max-w-2xl">
            <input 
              type="text" 
              placeholder="Search products, categories, brands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-100 border-none rounded-full px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute right-4 top-3 text-gray-400" size={18} />
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-blue-600 transition"><Heart size={22} /></button>
            <button className="text-gray-600 hover:text-blue-600 transition relative">
              <ShoppingCart size={22} />
              <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Carousel */}
      <div className="relative w-full h-[350px] md:h-[500px] overflow-hidden bg-gray-900 group">
        {carouselSlides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
            
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-8 sm:px-16 w-full">
                <div className="max-w-lg animate-fadeInUp">
                  <h3 className="text-blue-400 font-bold text-sm sm:text-lg tracking-wider mb-2 uppercase">{slide.title}</h3>
                  <h1 className="text-white text-3xl sm:text-5xl font-black leading-tight mb-6">{slide.subtitle}</h1>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded transition shadow-lg">
                    {slide.btnText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Carousel Controls */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition">
          <ChevronRight size={24} />
        </button>
        
        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {carouselSlides.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrentSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentSlide ? 'bg-blue-500 w-6' : 'bg-white/50 hover:bg-white'}`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Categories Icons */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-12">
          {categories.map((cat) => (
            <div key={cat.id} className="flex flex-col items-center justify-center gap-2 cursor-pointer group">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${activeCategory === cat.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-50 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-500 group-hover:shadow-sm'}`}>
                {cat.icon}
              </div>
              <span className={`text-[11px] font-bold text-center ${activeCategory === cat.id ? 'text-blue-600' : 'text-gray-600 group-hover:text-blue-500'}`}>{cat.label}</span>
            </div>
          ))}
        </div>

        {/* Filters & Source Markets */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 mb-10 shadow-sm">
          <div className="flex flex-wrap items-center gap-4 border-b border-gray-100 pb-4 mb-4">
            <select className="bg-gray-50 border border-gray-200 text-gray-700 text-xs rounded-md px-3 py-2 outline-none focus:border-blue-400">
              <option>All Categories</option>
              <option>Furniture</option>
              <option>Electronics</option>
            </select>
            <select className="bg-gray-50 border border-gray-200 text-gray-700 text-xs rounded-md px-3 py-2 outline-none focus:border-blue-400">
              <option>All Countries</option>
              <option>China</option>
              <option>Korea</option>
            </select>
            <select className="bg-gray-50 border border-gray-200 text-gray-700 text-xs rounded-md px-3 py-2 outline-none focus:border-blue-400">
              <option>Price Range</option>
              <option>Under $100</option>
              <option>$100 - $500</option>
            </select>
            <div className="flex-1"></div>
            <select className="bg-gray-50 border border-gray-200 text-gray-700 text-xs rounded-md px-3 py-2 outline-none focus:border-blue-400">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Newest Arrivals</option>
            </select>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sourceCountries.map(sc => (
              <div key={sc.code} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`https://flagcdn.com/w40/${sc.code}.png`} alt={sc.name} className="w-8 h-5 object-cover rounded shadow-sm" />
                <div>
                  <div className="text-xs font-bold text-gray-800">From {sc.name}</div>
                  <div className="text-[10px] text-gray-500">{sc.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-black text-gray-900">Featured Products</h2>
          <a href="#" className="text-xs font-bold text-blue-600 flex items-center gap-1 hover:underline">
            View All <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {marketProducts.map(p => {
            const priceGhs = p.price ? p.price * 14.5 : 0;
            return (
              <div key={p.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all duration-300 group flex flex-col">
                <div className="relative w-full aspect-square bg-gray-100 p-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.images[0]} alt={p.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition duration-500" />
                  <button className="absolute top-3 right-3 text-gray-400 hover:text-red-500 bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm">
                    <Heart size={16} />
                  </button>
                  {p.availability === 'in_stock' ? (
                    <span className="absolute bottom-3 left-3 bg-green-100 text-green-700 text-[9px] font-bold px-2 py-1 rounded">In Stock</span>
                  ) : (
                    <span className="absolute bottom-3 left-3 bg-orange-100 text-orange-700 text-[9px] font-bold px-2 py-1 rounded">Pre-order</span>
                  )}
                </div>
                
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-bold text-sm text-gray-900 mb-1 line-clamp-2 leading-snug">{p.name}</h3>
                  <div className="text-[10px] text-gray-500 mb-3 flex-1">{p.description}</div>
                  
                  <div className="flex items-end justify-between mb-4 mt-auto">
                    <div>
                      <div className="text-lg font-black text-blue-700">GHS {priceGhs.toLocaleString()}</div>
                      <div className="text-[10px] text-gray-400">Approx. ${p.price?.toLocaleString()}</div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2.5 rounded transition">
                    Add to Enquiry
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
