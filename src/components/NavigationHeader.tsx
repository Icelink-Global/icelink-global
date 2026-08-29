'use client';
import React, { useState } from 'react';
import { Menu, X, ChevronDown, Globe, Search, Heart, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export function NavigationHeader({ currentTab, setCurrentTab }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', tab: 'home' },
    { label: 'AutoHaus', tab: 'autohaus' },
    { label: 'Market', tab: 'market' },
    { label: 'Sourcing', tab: 'sourcing' },
    { label: 'Solutions', tab: 'solutions' },
    { label: 'About Us', tab: 'about' },
    { label: 'Resources', tab: 'resources' },
    { label: 'Contact', tab: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0c1424] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <button onClick={() => setCurrentTab('home')} className="flex items-center gap-2 flex-shrink-0">
          <div className="w-9 h-9 rounded bg-blue-600 flex items-center justify-center">
            <span className="text-white font-black text-xs tracking-tighter leading-none">ICE<br/>LINK</span>
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-white font-black text-sm tracking-widest">ICELINK</span>
            <span className="text-blue-400 font-bold text-[9px] tracking-widest">GLOBAL</span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.tab}
              onClick={() => setCurrentTab(link.tab)}
              className={`px-3 py-2 text-xs font-semibold tracking-wide transition-colors rounded ${
                currentTab === link.tab
                  ? 'text-blue-400'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right controls */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="flex items-center gap-1 text-gray-300 hover:text-white text-xs font-semibold">
            <Globe size={14} /> EN
          </button>
          
          <div className="flex items-center gap-3 border-l border-white/20 pl-4">
            <button className="text-gray-300 hover:text-white transition">
              <User size={18} />
            </button>
            <button className="text-gray-300 hover:text-white transition">
              <ShoppingCart size={18} />
            </button>
          </div>

          <button
            onClick={() => setCurrentTab('sourcing')}
            className="px-5 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wide transition ml-2"
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-gray-300 hover:text-white p-1"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c1424] border-t border-white/10 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.tab}
              onClick={() => { setCurrentTab(link.tab); setMobileMenuOpen(false); }}
              className={`text-left px-4 py-3 rounded text-sm font-semibold transition ${
                currentTab === link.tab ? 'text-blue-400 bg-blue-500/10' : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => { setCurrentTab('sourcing'); setMobileMenuOpen(false); }}
            className="mt-3 px-5 py-3 rounded bg-blue-600 text-white font-bold text-sm text-center"
          >
            Get a Quote
          </button>
        </div>
      )}
    </header>
  );
}
