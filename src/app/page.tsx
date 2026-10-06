'use client';
import React, { useState, useEffect } from 'react';
import { NavigationHeader } from '@/components/NavigationHeader';
import { JopexFooter } from '@/components/JopexFooter';
import { HomeView } from '@/components/HomeView';
import { AutoHausView } from '@/components/AutoHausView';
import { ElectronicsGamingView } from '@/components/ElectronicsGamingView';
import { MarketView } from '@/components/MarketView';
import { SourcingView } from '@/components/SourcingView';
import { AboutView } from '@/components/AboutView';
import { ContactView } from '@/components/ContactView';
import { ProductDetailsView } from '@/components/ProductDetailsView';
import { ResourcesView } from '@/components/ResourcesView';
import { Product } from '@/types';

const TAB_TITLES: Record<string, string> = {
  home: 'Icelink Global | Quality Vehicles. Global Standards.',
  autohaus: 'Vehicles | Icelink Global',
  'electronics-gaming': 'Electronics & Gaming | Icelink Global',
  market: 'Market | Icelink Global',
  sourcing: 'Vehicle Inspection & Sourcing | Icelink Global',
  about: 'About Us | Icelink Global',
  resources: 'Resources | Icelink Global',
  contact: 'Contact | Icelink Global',
};

const TAB_DESCRIPTIONS: Record<string, string> = {
  home: 'Icelink Global connects trusted international markets with customers and businesses across Africa. Quality vehicles, sourcing, parts & accessories.',
  autohaus: 'Browse quality imported vehicles available through Icelink Global — cars, SUVs, trucks, and more. Competitive prices, verified stock.',
  'electronics-gaming': 'Explore electronics and gaming products sourced globally and delivered to Africa through Icelink Global.',
  market: 'Access Icelink Global marketplace — sourced products, parts, and accessories from trusted international suppliers.',
  sourcing: 'Professional vehicle inspection and sourcing services through Icelink Global. We verify quality before it reaches you.',
  about: 'Learn about Icelink Global — our mission, values, and commitment to connecting international markets with Africa.',
  resources: 'Helpful resources, guides, and information from Icelink Global for vehicle buyers and business partners.',
  contact: 'Get in touch with Icelink Global. Reach us for vehicle inquiries, sourcing requests, or general information.',
};

export default function Home() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currency, setCurrency] = useState<string>('GHS');

  useEffect(() => {
    let title: string;
    let description: string;

    if (currentTab === 'product-details' && selectedProduct) {
      title = `${selectedProduct.name} | Icelink Global`;
      description = `View details, specs, and pricing for the ${selectedProduct.name}${selectedProduct.stock_id ? ` (Stock ID: ${selectedProduct.stock_id})` : ''} at Icelink Global.`;
    } else {
      title = TAB_TITLES[currentTab] ?? 'Icelink Global';
      description = TAB_DESCRIPTIONS[currentTab] ?? 'Icelink Global — Quality Vehicles. Global Standards.';
    }

    document.title = title;

    // Update meta description
    let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // Update OG title
    let ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = title;

    // Update OG description
    let ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = description;

    // Update Twitter title
    let twTitle = document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]');
    if (twTitle) twTitle.content = title;

    // Update Twitter description
    let twDesc = document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]');
    if (twDesc) twDesc.content = description;
  }, [currentTab, selectedProduct]);

  const renderContent = () => {
    switch (currentTab) {
      case 'home':
        return <HomeView setCurrentTab={setCurrentTab} setSelectedProduct={setSelectedProduct} />;
      case 'autohaus':
        return <AutoHausView setSelectedProduct={setSelectedProduct} setCurrentTab={setCurrentTab} currency={currency} setCurrency={setCurrency} />;
      case 'electronics-gaming':
        return <ElectronicsGamingView setSelectedProduct={setSelectedProduct} setCurrentTab={setCurrentTab} />;
      case 'market':
        return <MarketView />;
      case 'sourcing':
        return <SourcingView />;
      case 'about':
        return <AboutView />;
      case 'resources':
        return <ResourcesView setCurrentTab={setCurrentTab} />;
      case 'contact':
        return <ContactView />;
      case 'product-details':
        return selectedProduct ? (
          <ProductDetailsView product={selectedProduct} setCurrentTab={setCurrentTab} />
        ) : (
          <HomeView setCurrentTab={setCurrentTab} setSelectedProduct={setSelectedProduct} />
        );
      default:
        return <HomeView setCurrentTab={setCurrentTab} setSelectedProduct={setSelectedProduct} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <NavigationHeader currentTab={currentTab} setCurrentTab={setCurrentTab} currency={currency} setCurrency={setCurrency} />
      <main className="flex-1 flex flex-col">{renderContent()}</main>
      <JopexFooter setCurrentTab={setCurrentTab} currentTab={currentTab} />
    </div>
  );
}
