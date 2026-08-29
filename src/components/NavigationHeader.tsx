'usesuper-client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X, Globe, Car, Smartphone, Gamepad, ShoppingBag, Send } from 'lucide-react';
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
    { label: 'Electronics & Gaming', tab: 'electronics-gaming' },
    { label: 'Market', tab: 'market' },
    { label: 'Sourcing', tab: 'sourcing' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-black/95 border-b border-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3" onClick={() => setCurrentTab('home')}>
          <div className="w-10 h-10 rounded bg-blue-600 flex items-center justify-center font-bold text-white tracking-widest text-lg">
            IL
          </div>
          <div>
            <div className="text-white font-extrabold tracking-wide text-lg flex items-center">
              ICELINK <span className="text-blue-500 ml-1">GLOBAL</span>
            </div>
            <div className="text-[10px] text-gray-400 tracking-widest uppercase">Connecting Africa to the World</div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.tab}
              onClick={() => setCurrentTab(link.tab)}
              className={`text-sm font-semibold tracking-wider transition-colors duration-200 uppercase ${
                currentTab === link.tab ? 'text-blue-500' : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setCurrentTab('sourcing')}
            className="px-5 py-2.5 rounded bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition duration-300 shadow-md shadow-blue-500/20"
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-white transition duration-200"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Sidebar/Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 bg-black/95 border-b border-white/10 py-6 px-4 flex flex-col gap-4 animate-fade-in backdrop-blur-lg">
          {navLinks.map((link) => (
            <button
              key={link.tab}
              onClick={() => {
                setCurrentTab(link.tab);
                setMobileMenuOpen(false);
              }}
              className={`text-left py-3 px-4 rounded text-base font-semibold tracking-wider uppercase transition duration-200 ${
                currentTab === link.tab ? 'bg-blue-600/20 text-blue-400' : 'text-gray-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              setCurrentTab('sourcing');
              setMobileMenuOpen(false);
            }}
            className="w-full mt-4 py-3.5 rounded bg-blue-600 text-white font-semibold tracking-wide text-center hover:bg-blue-700 transition duration-300"
          >
            Get a Quote
          </button>
        </div>
      )}
    </header>
  );
}
