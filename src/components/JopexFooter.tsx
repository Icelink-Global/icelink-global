import React from 'react';

interface FooterProps {
  setCurrentTab?: (tab: string) => void;
  currentTab?: string;
}

export function JopexFooter({ setCurrentTab, currentTab }: FooterProps) {
  const handleNav = (tab: string, e: React.MouseEvent) => {
    if (setCurrentTab) {
      e.preventDefault();
      setCurrentTab(tab);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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
          <div className="footer-logo flex items-center gap-3 cursor-pointer" onClick={(e) => handleNav('home', e)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="IceLink Global Logo"
              className="h-14 w-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-[0_2px_12px_rgba(59,130,246,0.3)]"
            />
          </div>
          <p className="footer-description text-sm leading-relaxed text-gray-400">
            Connecting international markets to deliver premium vehicles, components, general goods, and enterprise solutions across the African continent.
          </p>
          <div className="footer-social flex gap-4">
            {currentTab === 'autohaus' ? (
              <>
                <a href="https://www.facebook.com/share/1WabP2wP25/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-icon w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white hover:border-blue-500 transition-all duration-300 hover:-translate-y-0.5">
                  <span>f</span>
                </a>
                <a href="https://www.instagram.com/ice_autohaus?stkn=M3U2aGNjaDh4NHF2&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-icon w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white hover:border-blue-500 transition-all duration-300 hover:-translate-y-0.5">
                  <span>ig</span>
                </a>
                <a href="https://www.tiktok.com/@ice.auto.haus?_r=1&_t=ZS-9AIcby3bACy" target="_blank" rel="noopener noreferrer" className="social-icon w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white hover:border-blue-500 transition-all duration-300 hover:-translate-y-0.5">
                  <span>tk</span>
                </a>
                <a href="https://youtube.com/@iceautohaus?si=VKAN-g_adJtK9NIY" target="_blank" rel="noopener noreferrer" className="social-icon w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white hover:border-blue-500 transition-all duration-300 hover:-translate-y-0.5">
                  <span>yt</span>
                </a>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>

        <div className="footer-section">
          <h4 className="text-white text-sm font-semibold mb-5 tracking-wider uppercase">Businesses</h4>
          <div className="footer-links flex flex-col gap-2.5 text-sm">
            <button onClick={(e) => handleNav('autohaus', e)} className="text-left hover:text-blue-500 transition-all duration-300 hover:pl-2">Ice AutoHaus</button>
            <button onClick={(e) => handleNav('electronics-gaming', e)} className="text-left hover:text-blue-500 transition-all duration-300 hover:pl-2">Ice Electronics</button>
            <button onClick={(e) => handleNav('electronics-gaming', e)} className="text-left hover:text-blue-500 transition-all duration-300 hover:pl-2">Ice Gaming</button>
            <button onClick={(e) => handleNav('market', e)} className="text-left hover:text-blue-500 transition-all duration-300 hover:pl-2">IceLink Market</button>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="text-white text-sm font-semibold mb-5 tracking-wider uppercase">Sourcing Markets</h4>
          <div className="footer-links flex flex-col gap-2.5 text-sm">
            <button onClick={(e) => handleNav('sourcing', e)} className="text-left hover:text-blue-500 transition-all duration-300 hover:pl-2">South Korea</button>
            <button onClick={(e) => handleNav('sourcing', e)} className="text-left hover:text-blue-500 transition-all duration-300 hover:pl-2">China</button>
            <button onClick={(e) => handleNav('sourcing', e)} className="text-left hover:text-blue-500 transition-all duration-300 hover:pl-2">Dubai / UAE</button>
            <button onClick={(e) => handleNav('sourcing', e)} className="text-left hover:text-blue-500 transition-all duration-300 hover:pl-2">USA & Europe</button>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="text-white text-sm font-semibold mb-5 tracking-wider uppercase">Resources</h4>
          <div className="footer-links flex flex-col gap-2.5 text-sm">
            <button onClick={(e) => handleNav('sourcing', e)} className="text-left hover:text-blue-500 transition-all duration-300 hover:pl-2">Order Tracking</button>
            <button onClick={(e) => handleNav('sourcing', e)} className="text-left hover:text-blue-500 transition-all duration-300 hover:pl-2">Inspection Status</button>
            <button onClick={(e) => handleNav('home', e)} className="text-left hover:text-blue-500 transition-all duration-300 hover:pl-2">About Us</button>
            <button onClick={(e) => handleNav('sourcing', e)} className="text-left hover:text-blue-500 transition-all duration-300 hover:pl-2">Contact Support</button>
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

