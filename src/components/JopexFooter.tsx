import React from 'react';

export function JopexFooter() {
  return (
    <footer className="footer bg-[#00051a] border-t border-white/10 px-8 py-14 relative overflow-hidden text-gray-400">
      {/* Background Image */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 pointer-events-none z-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://archive.opengovasia.com/wp-content/uploads/2023/03/Mar-2_PH_2_1270.jpg"
          alt=""
          className="w-full h-full object-cover object-center animate-pulse-opacity-low"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00051a] via-[#00051a]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#00051a] via-transparent to-[#00051a]/60"></div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 mb-10 relative z-10">
        <div className="footer-brand flex flex-col gap-5 md:col-span-2">
          <div className="footer-logo flex items-center gap-3">
            <div className="w-11 h-11 bg-blue-600 rounded flex items-center justify-center font-black text-white text-base tracking-widest">
              ILG
            </div>
            <span className="logo-text font-bold text-lg tracking-wider text-white">
              <span className="text-white font-extrabold mr-1">ICELINK</span>
              <span className="text-blue-500 font-bold">GLOBAL</span>
            </span>
          </div>
          <p className="footer-description text-sm leading-relaxed text-gray-400">
            Connecting international markets to deliver premium vehicles, components, general goods, and enterprise solutions across the African continent.
          </p>
          <div className="footer-social flex gap-4">
            <a href="#" className="social-icon w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white hover:border-blue-500 transition-all duration-300 hover:-translate-y-0.5">
              <span>f</span>
            </a>
            <a href="#" className="social-icon w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white hover:border-blue-500 transition-all duration-300 hover:-translate-y-0.5">
              <span>t</span>
            </a>
            <a href="#" className="social-icon w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white hover:border-blue-500 transition-all duration-300 hover:-translate-y-0.5">
              <span>in</span>
            </a>
            <a href="#" className="social-icon w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white hover:border-blue-500 transition-all duration-300 hover:-translate-y-0.5">
              <span>ig</span>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="text-white text-sm font-semibold mb-5 tracking-wider uppercase">Businesses</h4>
          <div className="footer-links flex flex-col gap-2.5 text-sm">
            <a href="#" className="hover:text-blue-500 transition-all duration-300 hover:pl-2">Ice AutoHaus</a>
            <a href="#" className="hover:text-blue-500 transition-all duration-300 hover:pl-2">Ice Electronics</a>
            <a href="#" className="hover:text-blue-500 transition-all duration-300 hover:pl-2">Ice Gaming</a>
            <a href="#" className="hover:text-blue-500 transition-all duration-300 hover:pl-2">IceLink Market</a>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="text-white text-sm font-semibold mb-5 tracking-wider uppercase">Sourcing Markets</h4>
          <div className="footer-links flex flex-col gap-2.5 text-sm">
            <a href="#" className="hover:text-blue-500 transition-all duration-300 hover:pl-2">South Korea</a>
            <a href="#" className="hover:text-blue-500 transition-all duration-300 hover:pl-2">China</a>
            <a href="#" className="hover:text-blue-500 transition-all duration-300 hover:pl-2">Dubai / UAE</a>
            <a href="#" className="hover:text-blue-500 transition-all duration-300 hover:pl-2">USA & Europe</a>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="text-white text-sm font-semibold mb-5 tracking-wider uppercase">Resources</h4>
          <div className="footer-links flex flex-col gap-2.5 text-sm">
            <a href="#" className="hover:text-blue-500 transition-all duration-300 hover:pl-2">Order Tracking</a>
            <a href="#" className="hover:text-blue-500 transition-all duration-300 hover:pl-2">Inspection Status</a>
            <a href="#" className="hover:text-blue-500 transition-all duration-300 hover:pl-2">About Us</a>
            <a href="#" className="hover:text-blue-500 transition-all duration-300 hover:pl-2">Contact Support</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom pt-8 border-t border-white/10 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4 relative z-10">
        <div className="copyright">
          © {new Date().getFullYear()} IceLink Global. All rights reserved.
        </div>
        <div className="footer-credits">
          Creatively designed by Jopex Creatives
        </div>
      </div>
    </footer>
  );
}
