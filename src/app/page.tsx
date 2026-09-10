'use client';
import React, { useState } from 'react';
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

export default function Home() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currency, setCurrency] = useState<string>('GHS');

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
      <JopexFooter setCurrentTab={setCurrentTab} />
    </div>
  );
}
