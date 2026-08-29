import { Business, Product } from '@/types';

export const mockBusinesses: Business[] = [
  {
    id: 'b1',
    name: 'Ice AutoHaus',
    slug: 'autohaus',
    description: 'Quality vehicles, spare parts & automotive solutions from trusted markets globally.',
    icon: 'car',
    status: 'active'
  },
  {
    id: 'b2',
    name: 'Ice Electronics',
    slug: 'electronics',
    description: 'Phones, TVs, laptops, and home appliances sourced directly.',
    icon: 'smartphone',
    status: 'active'
  },
  {
    id: 'b3',
    name: 'Ice Gaming',
    slug: 'gaming',
    description: 'Latest gaming consoles, games, and gaming equipment.',
    icon: 'gamepad',
    status: 'active'
  },
  {
    id: 'b4',
    name: 'IceLink Market',
    slug: 'market',
    description: 'General marketplace offering furniture, building materials, machinery, and more.',
    icon: 'shopping-bag',
    status: 'active'
  },
  {
    id: 'b5',
    name: 'IceLink Sourcing',
    slug: 'sourcing',
    description: 'Source anything from South Korea, China, UAE, USA, and Europe.',
    icon: 'globe',
    status: 'active'
  }
];

export const mockProducts: Product[] = [
  // AutoHaus
  {
    id: 'p1',
    business_id: 'b1',
    category_id: 'cat_suv',
    name: '2020 Hyundai Avante AD',
    slug: '2020-hyundai-avante-ad',
    price: 15400,
    currency: 'USD',
    description: 'Extremely clean Used 2020 Hyundai Avante AD. Sourced directly from South Korea. Fuel efficient, smart key, and premium navigation setup.',
    specifications: {
      'Year': '2020',
      'Mileage': '45,000 km',
      'Fuel': 'Gasoline',
      'Transmission': 'Automatic',
      'Engine': '1.6L LPi',
      'Drive Type': 'FWD',
      'Exterior': 'White',
      'Interior': 'Black Leather'
    },
    images: ['https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=600'],
    availability: 'in_stock',
    is_featured: true,
    source_market: 'South Korea',
    stock_id: 'IA-000234'
  },
  {
    id: 'p2',
    business_id: 'b1',
    category_id: 'cat_ev',
    name: '2022 Kia EV6 Long Range',
    slug: '2022-kia-ev6-long-range',
    price: 38500,
    currency: 'USD',
    description: 'Premium electric vehicle from South Korea. Incredible range, fast charging, futuristic HUD, high specification interior.',
    specifications: {
      'Year': '2022',
      'Mileage': '18,500 km',
      'Fuel': 'Electric',
      'Transmission': 'Automatic',
      'Drive Type': 'RWD',
      'Exterior': 'Matte Gray',
      'Interior': 'Vegan Leather'
    },
    images: ['https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=600'],
    availability: 'in_stock',
    is_featured: true,
    source_market: 'South Korea',
    stock_id: 'IA-000235'
  },
  // Electronics
  {
    id: 'p3',
    business_id: 'b2',
    category_id: 'cat_phones',
    name: 'Samsung Galaxy S24 Ultra',
    slug: 'samsung-galaxy-s24-ultra',
    price: 1199,
    currency: 'USD',
    description: 'Latest high-end Samsung device. Sourced globally, titanium frame, 512GB, fully unlocked.',
    specifications: {
      'Storage': '512GB',
      'RAM': '12GB',
      'Color': 'Titanium Gray',
      'Network': '5U Unlocked'
    },
    images: ['https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=600'],
    availability: 'in_stock',
    is_featured: true,
    source_market: 'UAE'
  },
  // Gaming
  {
    id: 'p4',
    business_id: 'b3',
    category_id: 'cat_consoles',
    name: 'PlayStation 5 Slim Console',
    slug: 'playstation-5-slim-console',
    price: 499,
    currency: 'USD',
    description: 'PlayStation 5 Slim Disc Edition. Seamless high frame-rate gameplay.',
    specifications: {
      'Edition': 'Disc Version',
      'Storage': '1TB SSD',
      'Controller': '1x DualSense'
    },
    images: ['https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=600'],
    availability: 'in_stock',
    is_featured: true,
    source_market: 'USA'
  }
];
