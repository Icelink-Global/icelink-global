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
  const [currency, setCurrency] = useState('GHS');
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  const currencies = [
    { code: 'GHS', flag: 'gh' },
    { code: 'NGN', flag: 'ng' },
    { code: 'USD', flag: 'us' },
    { code: 'GBP', flag: 'gb' },
    { code: 'KRW', flag: 'kr' },
    { code: 'EUR', flag: 'eu' },
    { code: 'CNY', flag: 'cn' },
    { code: 'JPY', flag: 'jp' },
  ];

  const navLinks = [
    { label: 'Home', tab: 'home' },
    { label: 'AutoHaus', tab: 'autohaus' },
    { label: 'Market', tab: 'market' },
    { label: 'Sourcing', tab: 'sourcing' },
    { label: 'About Us', tab: 'about' },
    { label: 'Resources', tab: 'resources' },
    { label: 'Contact', tab: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#00051a] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <button onClick={() => setCurrentTab('home')} className="flex items-center gap-3 flex-shrink-0 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="IceLink Global Logo"
            className="h-10 w-auto object-contain drop-shadow-[0_2px_10px_rgba(59,130,246,0.3)] group-hover:scale-105 transition-transform duration-300"
          />
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
          <div className="relative flex items-center text-gray-300 hover:text-white text-xs font-semibold">
            <button 
              onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
              className="flex items-center gap-1.5 px-2 py-1 focus:outline-none"
            >
              <span>{currency}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`https://flagcdn.com/w20/${currencies.find(c => c.code === currency)?.flag}.png`} alt={currency} className="w-4 h-3 object-cover shadow-sm" />
              <ChevronDown size={14} className="ml-0.5" />
            </button>

            {currencyDropdownOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setCurrencyDropdownOpen(false)}></div>
                <div className="absolute top-full right-0 mt-1 w-24 bg-white rounded shadow-lg border border-gray-100 py-1 z-50">
                  {currencies.map(c => (
                    <button
                      key={c.code}
                      onClick={() => { setCurrency(c.code); setCurrencyDropdownOpen(false); }}
                      className="flex items-center justify-between w-full px-3 py-1.5 hover:bg-gray-100 text-black text-xs text-left"
                    >
                      <span>{c.code}</span>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`https://flagcdn.com/w20/${c.flag}.png`} alt={c.code} className="w-4 h-3 object-cover shadow-sm" />
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
          
          <div className="flex items-center gap-3 border-l border-white/20 pl-4">
            <button className="text-gray-300 hover:text-white transition">
              <User size={18} />
            </button>
            <button className="text-gray-300 hover:text-white transition">
              <ShoppingCart size={18} />
            </button>
          </div>

          <div className="flex items-center ml-2 border border-blue-500 rounded bg-[#040c2f] overflow-hidden w-48 transition-all focus-within:w-64 focus-within:border-blue-400">
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent text-white text-xs px-3 py-2 outline-none w-full placeholder-gray-400"
            />
            <button className="pr-3 pl-2 text-blue-400 hover:text-white transition">
              <Search size={14} />
            </button>
          </div>
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
        <div className="lg:hidden bg-[#00051a] border-t border-white/10 px-4 py-4 flex flex-col gap-1">
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
          <div className="mt-3 flex items-center border border-blue-500 rounded bg-[#040c2f] overflow-hidden w-full transition-all focus-within:border-blue-400">
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent text-white text-sm px-4 py-3 outline-none w-full placeholder-gray-400"
            />
            <button className="pr-4 pl-3 text-blue-400 hover:text-white transition">
              <Search size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
