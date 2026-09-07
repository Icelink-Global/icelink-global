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
  // AutoHaus Vehicles
  {
    id: 'p1',
    business_id: 'b1',
    category_id: 'sedan',
    name: '2020 Hyundai Avante AD',
    slug: '2020-hyundai-avante-ad',
    price: 10085,
    currency: 'USD',
    description: 'Extremely clean 2020 Hyundai Avante AD. Sourced directly from South Korea. Fuel efficient, smart key, and premium navigation setup.',
    specifications: {
      'Year': '2020',
      'Mileage': '64,500 km',
      'Fuel': '1.6 Gasoline',
      'Transmission': 'Automatic',
      'Engine': '1.6L Gamma',
      'Drive Type': 'Front Wheel Drive',
      'Exterior Color': 'Silver',
      'Interior Color': 'Black',
      'VIN': 'KMH-DB41C0LU009848',
      'Stock ID': 'IAH-0000-1124',
      'Country of Origin': 'Korea'
    },
    images: ['https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=600'],
    availability: 'in_stock',
    is_featured: true,
    source_market: 'KOREA',
    stock_id: 'IAH-0000-1124'
  },
  {
    id: 'p2',
    business_id: 'b1',
    category_id: 'cat_ev',
    name: '2023 BYD Yuan Plus EV',
    slug: '2023-byd-yuan-plus-ev',
    price: 14399,
    currency: 'USD',
    description: 'Electric SUV from China. Incredible range, fast charging, futuristic HUD, high specification interior.',
    specifications: {
      'Year': '2023',
      'Mileage': '40,800 km',
      'Fuel': 'Electric',
      'Transmission': 'Automatic',
      'Drive Type': 'FWD',
      'Exterior Color': 'White',
      'Interior Color': 'Blue/Grey',
      'Country of Origin': 'China'
    },
    images: ['https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=600'],
    availability: 'in_stock',
    is_featured: true,
    source_market: 'CHINA',
    stock_id: 'IAH-0000-1125'
  },
  {
    id: 'p3',
    business_id: 'b1',
    category_id: 'cat_suv',
    name: '2021 Ford Explorer XLT',
    slug: '2021-ford-explorer-xlt',
    price: 16667,
    currency: 'USD',
    description: '3.3L Gasoline Automatic 4WD SUV from USA. Spacious family vehicle with top safety ratings.',
    specifications: {
      'Year': '2021',
      'Mileage': '35,000 km',
      'Fuel': '3.3L Gasoline',
      'Transmission': 'Automatic',
      'Drive Type': '4WD',
      'Exterior Color': 'Grey',
      'Interior Color': 'Black Leather',
      'Country of Origin': 'USA'
    },
    images: ['https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=600'],
    availability: 'in_stock',
    is_featured: true,
    source_market: 'USA',
    stock_id: 'IAH-0000-1126'
  },
  {
    id: 'p4',
    business_id: 'b1',
    category_id: 'luxury',
    name: '2022 Toyota Land Cruiser V8',
    slug: '2022-toyota-land-cruiser-v8',
    price: 32906,
    currency: 'USD',
    description: '4.6L V8 Automatic full option luxury SUV sourced from Dubai (UAE). Unmatched power and reliability.',
    specifications: {
      'Year': '2022',
      'Mileage': '72,000 km',
      'Fuel': '4.6L V8 Petrol',
      'Transmission': 'Automatic',
      'Drive Type': '4WD',
      'Exterior Color': 'White Pearl',
      'Interior Color': 'Beige Leather',
      'Country of Origin': 'Dubai (UAE)'
    },
    images: ['https://images.unsplash.com/photo-1594502184342-2e12f877aa73?q=80&w=600'],
    availability: 'in_stock',
    is_featured: true,
    source_market: 'DUBAI (UAE)',
    stock_id: 'IAH-0000-1127'
  },
  {
    id: 'p5',
    business_id: 'b1',
    category_id: 'cat_suv',
    name: '2019 Kia Sportage 4WD',
    slug: '2019-kia-sportage-4wd',
    price: 12393,
    currency: 'USD',
    description: '2.0 Diesel Automatic SUV from South Korea. Fuel efficient and comfortable city SUV.',
    specifications: {
      'Year': '2019',
      'Mileage': '58,000 km',
      'Fuel': '2.0 Diesel',
      'Transmission': 'Automatic',
      'Drive Type': '4WD',
      'Exterior Color': 'Black',
      'Country of Origin': 'Korea'
    },
    images: ['https://images.unsplash.com/photo-1541348263662-e082662d82da?q=80&w=600'],
    availability: 'in_stock',
    is_featured: false,
    source_market: 'KOREA',
    stock_id: 'IAH-0000-1128'
  },
  {
    id: 'p6',
    business_id: 'b1',
    category_id: 'sedan',
    name: '2023 Changan CS55 Plus',
    slug: '2023-changan-cs55-plus',
    price: 10940,
    currency: 'USD',
    description: '1.5T Turbo Gasoline Automatic compact SUV from China. Feature packed with panoramic roof.',
    specifications: {
      'Year': '2023',
      'Mileage': '29,000 km',
      'Fuel': '1.5T Turbo',
      'Transmission': 'Automatic',
      'Drive Type': 'FWD',
      'Exterior Color': 'Silver',
      'Country of Origin': 'China'
    },
    images: ['https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=600'],
    availability: 'in_stock',
    is_featured: false,
    source_market: 'CHINA',
    stock_id: 'IAH-0000-1129'
  },
  {
    id: 'p7',
    business_id: 'b1',
    category_id: 'luxury',
    name: '2020 Chevrolet Tahoe LT',
    slug: '2020-chevrolet-tahoe-lt',
    price: 27350,
    currency: 'USD',
    description: '5.3L V8 Automatic 7-seater American SUV. Sourced from USA.',
    specifications: {
      'Year': '2020',
      'Mileage': '60,000 km',
      'Fuel': '5.3L V8',
      'Transmission': 'Automatic',
      'Drive Type': '4WD',
      'Exterior Color': 'Black',
      'Country of Origin': 'USA'
    },
    images: ['https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600'],
    availability: 'in_stock',
    is_featured: false,
    source_market: 'USA',
    stock_id: 'IAH-0000-1130'
  },
  {
    id: 'p8',
    business_id: 'b1',
    category_id: 'truck',
    name: '2018 Toyota Hiace Van',
    slug: '2018-toyota-hiace-van',
    price: 11538,
    currency: 'USD',
    description: '2.8 Diesel Manual passenger & cargo van sourced from Japan / Korea. Durable and spacious.',
    specifications: {
      'Year': '2018',
      'Mileage': '90,000 km',
      'Fuel': '2.8 Diesel',
      'Transmission': 'Manual',
      'Drive Type': 'RWD',
      'Exterior Color': 'White',
      'Country of Origin': 'JAPAN'
    },
    images: ['https://images.unsplash.com/photo-1559416523-140dd55d222c?q=80&w=600'],
    availability: 'in_stock',
    is_featured: false,
    source_market: 'JAPAN',
    stock_id: 'IAH-0000-1131'
  },

  // AutoHaus Spare Parts
  {
    id: 'part1',
    business_id: 'b1_parts',
    category_id: 'parts',
    name: 'Brake Pad Set (Front)',
    slug: 'brake-pad-set',
    price: 24,
    currency: 'USD',
    description: 'Hyundai / Kia Genuine OEM Ceramic Front Brake Pads.',
    specifications: { 'Fits': 'Hyundai Avante, Tucson, Sonota / Kia Optima' },
    images: ['https://images.unsplash.com/photo-1600706432502-76a1beb2d2c6?q=80&w=300'],
    availability: 'in_stock',
    is_featured: true,
    source_market: 'South Korea'
  },
  {
    id: 'part2',
    business_id: 'b1_parts',
    category_id: 'parts',
    name: 'Engine Oil Filter',
    slug: 'engine-oil-filter',
    price: 10,
    currency: 'USD',
    description: 'Toyota / Kia OEM High filtration oil filter.',
    specifications: { 'Fits': 'Multiple Models' },
    images: ['https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=300'],
    availability: 'in_stock',
    is_featured: true,
    source_market: 'South Korea'
  },
  {
    id: 'part3',
    business_id: 'b1_parts',
    category_id: 'parts',
    name: 'Air Intake Filter Element',
    slug: 'air-intake-filter',
    price: 12,
    currency: 'USD',
    description: 'Premium Air Cleaner Element for Japanese & Korean vehicles.',
    specifications: { 'Fits': 'Toyota / Hyundai' },
    images: ['https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=300'],
    availability: 'in_stock',
    is_featured: true,
    source_market: 'Japan'
  },
  {
    id: 'part4',
    business_id: 'b1_parts',
    category_id: 'parts',
    name: 'Heavy Duty Car Battery 12V',
    slug: 'car-battery-12v',
    price: 58,
    currency: 'USD',
    description: 'Maintenance-free 70Ah 12V Automotive Battery.',
    specifications: { 'Voltage': '12V', 'Capacity': '70Ah' },
    images: ['https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=300'],
    availability: 'in_stock',
    is_featured: true,
    source_market: 'South Korea'
  },
  {
    id: 'part5',
    business_id: 'b1_parts',
    category_id: 'parts',
    name: 'Synthetic Engine Oil 5W-30 (4L)',
    slug: 'synthetic-engine-oil',
    price: 32,
    currency: 'USD',
    description: 'Full Synthetic Engine Oil for high performance engines.',
    specifications: { 'Viscosity': '5W-30', 'Volume': '4 Liter' },
    images: ['https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=300'],
    availability: 'in_stock',
    is_featured: true,
    source_market: 'UAE'
  },

  // Electronics
  {
    id: 'p9',
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
      'Color': 'Titanium Gray'
    },
    images: ['https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=600'],
    availability: 'in_stock',
    is_featured: true,
    source_market: 'UAE'
  },
  // Gaming
  {
    id: 'p10',
    business_id: 'b3',
    category_id: 'cat_consoles',
    name: 'PlayStation 5 Slim Console',
    slug: 'playstation-5-slim-console',
    price: 499,
    currency: 'USD',
    description: 'PlayStation 5 Slim Disc Edition. Seamless high frame-rate gameplay.',
    specifications: {
      'Edition': 'Disc Version',
      'Storage': '1TB SSD'
    },
    images: ['https://images.unsplash.com/photo-1600813907291-d86efa9b94db?q=80&w=600'],
    availability: 'in_stock',
    is_featured: true,
    source_market: 'USA'
  },
  // Market
  {
    id: 'm1',
    business_id: 'b4',
    category_id: 'furniture',
    name: 'Modern 5-Seater Sectional Sofa',
    slug: 'modern-5-seater-sectional-sofa',
    price: 331,
    currency: 'USD',
    description: 'Comfortable and stylish sectional sofa perfect for modern living rooms.',
    specifications: {
      'Quality': 'Premium fabric',
      'Frame': 'Durable wood'
    },
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600'],
    availability: 'in_stock',
    is_featured: true,
    source_market: 'China'
  },
  {
    id: 'm2',
    business_id: 'b4',
    category_id: 'electronics',
    name: 'Samsung 65" QLED 4K TV',
    slug: 'samsung-65-qled-4k-tv',
    price: 427,
    currency: 'USD',
    description: 'Experience stunning visuals with Samsung QLED technology.',
    specifications: {
      'Screen': '65 Inch',
      'Resolution': '4K UHD'
    },
    images: ['https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=600'],
    availability: 'in_stock',
    is_featured: true,
    source_market: 'Korea'
  },
  {
    id: 'm3',
    business_id: 'b4',
    category_id: 'appliances',
    name: 'Hisense 530L Side by Side',
    slug: 'hisense-530l-side-by-side',
    price: 537,
    currency: 'USD',
    description: 'Spacious side-by-side refrigerator for all your family needs.',
    specifications: {
      'Capacity': '530L',
      'Type': 'Side by Side'
    },
    images: ['https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600'],
    availability: 'in_stock',
    is_featured: true,
    source_market: 'Dubai (UAE)'
  },
  {
    id: 'm4',
    business_id: 'b4',
    category_id: 'machinery',
    name: 'Perkins 20KVA Generator',
    slug: 'perkins-20kva-generator',
    price: 1965,
    currency: 'USD',
    description: 'Reliable backup power with Perkins diesel generator.',
    specifications: {
      'Power': '20KVA',
      'Fuel': 'Diesel'
    },
    images: ['https://images.unsplash.com/photo-1524168019665-de062e70e284?q=80&w=600'],
    availability: 'in_stock',
    is_featured: true,
    source_market: 'USA'
  }
];
