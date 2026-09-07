'use client';
import React, { useEffect, useState } from 'react';
import { Globe, ShieldCheck, Target, TrendingUp, Car, ShoppingBag, Send } from 'lucide-react';

export function AboutView() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const values = [
    {
      icon: <Globe className="text-blue-500" size={32} />,
      title: "Global Reach",
      desc: "Sourcing premium products directly from top manufacturers globally."
    },
    {
      icon: <ShieldCheck className="text-blue-500" size={32} />,
      title: "Trusted Quality",
      desc: "Rigorous verification ensures every product meets our standards."
    },
    {
      icon: <Target className="text-blue-500" size={32} />,
      title: "Customer Centric",
      desc: "We handle logistics and customs so you focus on your core needs."
    },
    {
      icon: <TrendingUp className="text-blue-500" size={32} />,
      title: "Driving Growth",
      desc: "Empowering businesses with reliable global supply chains."
    }
  ];

  const businesses = [
    {
      icon: <Car className="text-white" size={28} />,
      name: "Ice AutoHaus",
      desc: "Quality vehicles, spare parts, and automotive solutions sourced globally."
    },
    {
      icon: <ShoppingBag className="text-white" size={28} />,
      name: "IceLink Market",
      desc: "A comprehensive marketplace for electronics, furniture, appliances, and machinery."
    },
    {
      icon: <Send className="text-white" size={28} />,
      name: "IceLink Sourcing",
      desc: "Direct, custom sourcing solutions. Tell us what you need; we'll find it, verify it, and ship it."
    }
  ];

  const flags = ['kr', 'cn', 'us', 'eu', 'ae', 'gh'];

  return (
    <div className="flex-1 bg-white text-slate-900 overflow-hidden">
      {/* ══════════════════════════════════════════════
          HERO — blue gradient with animated network & flags
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-4 bg-[#00051a] min-h-[60vh] flex items-center justify-center">
        {/* Animated grid dots */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle, rgba(59,130,246,0.15) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          animation: 'fadeInUp 1s ease'
        }} />
        
        {/* Background Image on the Right */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 pointer-events-none overflow-hidden z-0 flex items-center justify-center opacity-70">
          {/* eslint-disable-next-line @next/next/no-img-element */}
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

        {/* Floating Flags */}
        {mounted && (
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            {flags.map((flag, idx) => {
              // Randomize starting positions across the width
              const leftPos = 10 + (idx * 15) + (Math.random() * 10); // Spread evenly but slightly randomized
              const animDuration = 15 + Math.random() * 10;
              const delay = -(Math.random() * 20);
              const sizeClass = idx % 2 === 0 ? "w-16 h-16" : "w-12 h-12";
              
              return (
                <div 
                  key={flag}
                  className="absolute bottom-0"
                  style={{
                    left: `${leftPos}%`,
                    animation: `floatUpRandom ${animDuration}s linear infinite`,
                    animationDelay: `${delay}s`
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={`https://flagcdn.com/w80/${flag}.png`} 
                    alt={flag} 
                    className={`${sizeClass} object-cover shadow-2xl rounded-full opacity-60 border-2 border-white/20`} 
                  />
                </div>
              );
            })}
          </div>
        )}

        <div className="relative max-w-4xl mx-auto text-center z-10 pt-20 pb-20">
          <span className="text-xs text-blue-400 font-extrabold tracking-widest uppercase mb-4 block">About IceLink Global</span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-white">
            Connecting Markets.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Delivering Possibilities.</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We are your trusted partner for global sourcing, trade, and distribution across Africa. We bridge the gap between world-class international markets and local demand.
          </p>
        </div>
        
        {/* Style for float up animation */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes floatUpRandom {
            0% { transform: translateY(10vh) scale(0.8) rotate(0deg); opacity: 0; }
            10% { opacity: 0.7; }
            90% { opacity: 0.7; }
            100% { transform: translateY(-110vh) scale(1.1) rotate(20deg); opacity: 0; }
          }
        `}} />
      </section>

      {/* Mission & Vision */}
      <div className="py-16 px-4 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-blue-100 pb-2 inline-block">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To simplify international trade by providing seamless, transparent, and reliable sourcing solutions. We aim to empower businesses and individuals across Africa by delivering high-quality vehicles, machinery, electronics, and general goods directly to their doorstep without the traditional hassle.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-blue-100 pb-2 inline-block">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To become the premier, most trusted global sourcing and distribution platform in Africa, recognized for our commitment to quality, efficiency, and unwavering customer satisfaction. We envision an interconnected market where borders are no barrier to premium goods.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values - Styled like homepage metrics / satisfaction */}
      <div className="bg-[#00051a] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-white mb-4">Our Core Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">The principles that drive every transaction and partnership at IceLink Global.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-4 py-8 px-6 bg-[#040c2f]/70 border border-white/10 rounded-2xl backdrop-blur-sm transition-transform hover:-translate-y-2">
                <div className="w-16 h-16 rounded-xl bg-blue-500/15 flex items-center justify-center flex-shrink-0 mb-2">
                  {v.icon}
                </div>
                <h3 className="text-lg font-extrabold text-white leading-tight">{v.title}</h3>
                <p className="text-xs text-gray-400 font-medium leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Ecosystem - White BG, Blue Cards */}
      <div className="bg-white text-slate-900 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-black mb-4 text-gray-900">Our Ecosystem</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">IceLink Global operates through specialized divisions to cater to diverse market needs seamlessly.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {businesses.map((biz, i) => (
              <div key={i} className="bg-blue-600 rounded-xl p-8 hover:bg-blue-700 transition cursor-pointer shadow-lg hover:-translate-y-1">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  {biz.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{biz.name}</h3>
                <p className="text-sm text-blue-100 leading-relaxed">{biz.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
