'use client';
import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  HelpCircle, 
  BookOpen, 
  Search, 
  ExternalLink, 
  CheckCircle2, 
  Truck, 
  ShieldCheck, 
  Globe, 
  ChevronRight, 
  MessageSquare,
  FileCheck,
  Calculator,
  ArrowRight
} from 'lucide-react';

interface ResourcesViewProps {
  setCurrentTab?: (tab: string) => void;
}

export function ResourcesView({ setCurrentTab }: ResourcesViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const resourceGuides = [
    {
      id: 'import-guide-ghana',
      title: 'Vehicle Importation Guide for Ghana & Nigeria',
      category: 'guides',
      type: 'PDF Guide',
      size: '2.4 MB',
      description: 'Comprehensive step-by-step breakdown of customs duties, port handling fees, documentation, and compliance required when importing vehicles from South Korea, UAE, and USA.',
      icon: <Truck className="text-blue-500" size={24} />,
      date: 'Updated Sep 2026'
    },
    {
      id: 'customs-calculator-cheatsheet',
      title: 'Customs Duty & Tariff Breakdown Cheat Sheet',
      category: 'tools',
      type: 'Excel Sheet / PDF',
      size: '1.8 MB',
      description: 'Quick reference sheet for estimating import tariffs, ICUMS valuation codes, VAT rates, and port charges for electronics, machinery, and automotive parts.',
      icon: <Calculator className="text-cyan-500" size={24} />,
      date: 'Updated Aug 2026'
    },
    {
      id: 'inspection-checklist',
      title: 'Vehicle & Electronics Pre-Shipment Inspection Checklist',
      category: 'templates',
      type: 'Interactive Checklist',
      size: '1.2 MB',
      description: 'The exact 150-point inspection protocol IceLink agents execute in Seoul, Guangzhou, and Dubai before issuing quality clearance certificates.',
      icon: <FileCheck className="text-emerald-500" size={24} />,
      date: 'Updated Jul 2026'
    },
    {
      id: 'b2b-sourcing-playbook',
      title: 'B2B Wholesale Procurement & Logistics Playbook',
      category: 'guides',
      type: 'E-Book / PDF',
      size: '4.5 MB',
      description: 'Learn how African enterprises leverage IceLink Global to manage bulk sourcing, Container LCL/FCL consolidation, and escrow payment protection.',
      icon: <BookOpen className="text-blue-400" size={24} />,
      date: 'Updated Sep 2026'
    },
    {
      id: 'bill-of-lading-explained',
      title: 'Understanding Shipping & Logistics Documentation',
      category: 'guides',
      type: 'PDF Guide',
      size: '1.5 MB',
      description: 'A plain-English explanation of Bills of Lading, Commercial Invoices, Certificates of Origin, and Customs Clearance documentation.',
      icon: <FileText className="text-purple-400" size={24} />,
      date: 'Updated Jun 2026'
    },
    {
      id: 'shipping-rate-card',
      title: 'Q3 2026 Freight Rate & Shipping Schedule',
      category: 'tools',
      type: 'PDF Schedule',
      size: '950 KB',
      description: 'Current ocean freight schedules, air cargo transit times, and estimated freight rates from Korea, China, UAE, and USA to major West African ports.',
      icon: <Globe className="text-indigo-400" size={24} />,
      date: 'Updated Sep 2026'
    }
  ];

  const faqs = [
    {
      category: 'shipping',
      question: 'How long does shipping take from South Korea or China to West Africa?',
      answer: 'Ocean freight transit time from South Korea (Incheon/Busan) or China (Guangzhou/Ningbo) to Tema/Takoradi or Lagos typically takes 30 to 45 days. Air freight express delivery takes 5 to 9 business days depending on customs handling.'
    },
    {
      category: 'ordering',
      question: 'How does IceLink Sourcing guarantee product quality before shipment?',
      answer: 'Our local inspection teams in South Korea, China, USA, and Dubai perform comprehensive pre-shipment inspections. For vehicles, we conduct engine diagnostics, chassis checks, and exterior evaluations. We send high-resolution video proofs and detailed condition reports before you authorize final shipment.'
    },
    {
      category: 'customs',
      question: 'Are customs duty and port clearance included in the quoted prices?',
      answer: 'We offer both FOB/CIF quotes (where you handle destination customs) and All-Inclusive Door-to-Door Delivery options (where IceLink handles full customs clearance, port tariffs, and local transport to your specified destination).'
    },
    {
      category: 'payment',
      question: 'What payment currencies and payment methods do you accept?',
      answer: 'We accept GHS (Ghana Cedi), NGN (Nigerian Naira), USD, EUR, GBP, KRW, and AED. Payments can be made via local bank transfers, international wire transfers, or secured escrow channels for wholesale bulk orders.'
    },
    {
      category: 'shipping',
      question: 'Can I track my container or vehicle shipment in real-time?',
      answer: 'Yes! Once your order is dispatched, you receive a tracking ID that connects directly to vessel tracking and port clearance status updates right inside your IceLink portal.'
    },
    {
      category: 'ordering',
      question: 'Can I request custom product sourcing for item types not on the Market page?',
      answer: 'Absolutely! Our Custom Sourcing division allows you to specify any item — whether commercial machinery, heavy industrial equipment, luxury vehicles, or specialized electronics. Simply submit your requirements through our Sourcing tab.'
    }
  ];

  const filteredGuides = resourceGuides.filter(g => {
    const matchesCategory = activeCategory === 'all' || g.category === activeCategory;
    const matchesSearch = g.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          g.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filteredFaqs = faqs.filter(f => {
    const matchesCategory = activeFaqCategory === 'all' || f.category === activeFaqCategory;
    const matchesSearch = f.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          f.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="flex-1 bg-white text-slate-900 overflow-hidden">
      {/* HERO SECTION — Matching dark theme header & glow */}
      <section className="relative overflow-hidden px-4 bg-[#00051a] min-h-[55vh] flex items-center justify-center">
        {/* Animated grid dots background pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle, rgba(59,130,246,0.15) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }} />

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-4xl mx-auto text-center z-10 pt-20 pb-16">
          <span className="text-xs text-blue-400 font-extrabold tracking-widest uppercase mb-4 block">
            Knowledge Center & Downloads
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-white">
            Trade Resources & <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
              Import Guides
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Access free official import documentation guides, shipping schedules, customs tariff frameworks, and answers to your trade logistics questions.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative flex items-center">
            <div className="relative flex-1 flex items-center bg-[#040c2f]/90 border border-blue-500/40 rounded-xl overflow-hidden shadow-2xl focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
              <Search className="ml-4 text-blue-400 flex-shrink-0" size={20} />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search guides, customs procedures, shipping FAQs..." 
                className="w-full bg-transparent text-white placeholder-gray-400 px-4 py-4 text-sm outline-none"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="mr-3 text-xs text-gray-400 hover:text-white bg-white/10 px-2 py-1 rounded"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* QUICK STATS & HELPFUL LINKS */}
      <section className="bg-gray-50 border-b border-gray-200 py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 font-bold">
              <Download size={20} />
            </div>
            <div>
              <div className="text-lg font-bold text-gray-900">12,500+</div>
              <div className="text-xs text-gray-500">Guides Downloaded</div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600 font-bold">
              <Globe size={20} />
            </div>
            <div>
              <div className="text-lg font-bold text-gray-900">4 Ports</div>
              <div className="text-xs text-gray-500">Global Hubs Covered</div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold">
              <ShieldCheck size={20} />
            </div>
            <div>
              <div className="text-lg font-bold text-gray-900">100%</div>
              <div className="text-xs text-gray-500">Verified Process</div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 font-bold">
              <HelpCircle size={20} />
            </div>
            <div>
              <div className="text-lg font-bold text-gray-900">24/7</div>
              <div className="text-xs text-gray-500">Support Assistance</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED DOWNLOADABLE GUIDES */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs text-blue-600 font-bold tracking-widest uppercase mb-1 block">Downloadable Knowledge</span>
            <h2 className="text-3xl font-black text-gray-900">Import Documentation & Toolkits</h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: 'all', label: 'All Resources' },
              { id: 'guides', label: 'Import Guides' },
              { id: 'tools', label: 'Tariff & Duty Tools' },
              { id: 'templates', label: 'Checklists' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  activeCategory === tab.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuides.map(guide => (
            <div 
              key={guide.id}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-blue-50/80 group-hover:bg-blue-100 transition-colors">
                    {guide.icon}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                    {guide.type}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  {guide.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <span>{guide.size}</span>
                  <span>•</span>
                  <span>{guide.date}</span>
                </div>
                <button 
                  onClick={() => alert(`Downloading: ${guide.title}`)}
                  className="flex items-center gap-1.5 font-bold text-blue-600 hover:text-blue-800 transition"
                >
                  <Download size={14} />
                  <span>Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredGuides.length === 0 && (
          <div className="text-center py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
            <HelpCircle size={40} className="mx-auto text-gray-400 mb-3" />
            <h3 className="text-lg font-bold text-gray-700">No matching resources found</h3>
            <p className="text-xs text-gray-500 mt-1">Try adjusting your search term or filter category.</p>
          </div>
        )}
      </section>

      {/* INTERACTIVE TRADE PROCESS BANNER */}
      <section className="bg-[#00051a] text-white py-16 px-4 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs text-blue-400 font-extrabold tracking-widest uppercase mb-2 block">How We Work</span>
            <h2 className="text-3xl font-black mb-4">The IceLink Sourcing & Import Journey</h2>
            <p className="text-sm text-gray-300">We streamline global commerce into four simple, fully transparent steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {[
              {
                step: '01',
                title: 'Order & Selection',
                desc: 'Select from Ice AutoHaus or IceLink Market catalog, or submit a custom sourcing request.'
              },
              {
                step: '02',
                title: 'Inspection & Proof',
                desc: 'Local agents in Korea, China, Dubai or US verify condition, issuing photo/video reports.'
              },
              {
                step: '03',
                title: 'Shipping & Freight',
                desc: 'Goods are consolidated and shipped via sea or air with live container tracking updates.'
              },
              {
                step: '04',
                title: 'Port Customs & Delivery',
                desc: 'Customs clearance processed smoothly and delivered directly to your doorstep.'
              }
            ].map((s, idx) => (
              <div key={s.step} className="bg-[#040c2f]/80 p-6 rounded-2xl border border-white/10 relative group hover:border-blue-500/50 transition">
                <div className="text-4xl font-black text-blue-500/30 mb-3 group-hover:text-blue-400 transition-colors">
                  {s.step}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs text-blue-600 font-extrabold tracking-widest uppercase mb-2 block">Clear Answers</span>
          <h2 className="text-3xl font-black text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-sm text-gray-600">Everything you need to know about purchasing, shipping, and customs clearance.</p>

          {/* FAQ Category Filter */}
          <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
            {[
              { id: 'all', label: 'All Questions' },
              { id: 'shipping', label: 'Shipping & Transit' },
              { id: 'ordering', label: 'Quality & Inspection' },
              { id: 'customs', label: 'Customs & Clearance' },
              { id: 'payment', label: 'Payments & Escrow' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveFaqCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition ${
                  activeFaqCategory === cat.id
                    ? 'bg-blue-600 text-white shadow'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-gray-50/80 transition-colors"
                >
                  <span className="text-sm font-bold text-gray-900 flex items-center gap-3">
                    <HelpCircle size={18} className="text-blue-600 flex-shrink-0" />
                    {faq.question}
                  </span>
                  <div className={`w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold transition-transform duration-300 ${isOpen ? 'rotate-180 bg-blue-600 text-white' : ''}`}>
                    ↓
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                    <p className="pl-7">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12 text-gray-500 text-xs">
            No questions found matching your filter criteria.
          </div>
        )}
      </section>

      {/* SUPPORT & ASSISTANCE CALLOUT */}
      <section className="bg-gradient-to-r from-[#00051a] via-[#040c2f] to-[#00051a] text-white py-14 px-4 my-8 max-w-7xl mx-auto rounded-3xl border border-blue-500/20 shadow-2xl relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-blue-500/10 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-6">
          <div>
            <span className="text-xs text-blue-400 font-bold uppercase tracking-widest mb-2 block">Need Dedicated Trade Assistance?</span>
            <h3 className="text-2xl md:text-3xl font-black mb-3">Have Specific Custom Clearance Questions?</h3>
            <p className="text-xs md:text-sm text-gray-300 max-w-xl leading-relaxed">
              Our global trade specialists in South Korea, China, UAE, and West Africa are ready to assist you with custom quotes, logistics tracking, and enterprise procurement.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0 w-full md:w-auto">
            <button 
              onClick={() => setCurrentTab && setCurrentTab('contact')}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02]"
            >
              <MessageSquare size={16} />
              <span>Contact Support Specialist</span>
            </button>
            <button 
              onClick={() => setCurrentTab && setCurrentTab('sourcing')}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-6 py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 transition"
            >
              <span>Submit Sourcing Ticket</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
