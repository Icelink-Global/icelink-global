export type Business = {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  banner_image?: string;
  status: 'active' | 'inactive';
};

export type Category = {
  id: string;
  business_id: string;
  name: string;
  slug: string;
  image_url?: string;
  parent_id?: string;
};

export type Product = {
  id: string;
  business_id: string;
  category_id: string;
  name: string;
  slug: string;
  price?: number;
  currency: string;
  description: string;
  specifications: Record<string, string>;
  images: string[];
  availability: 'in_stock' | 'out_of_stock' | 'incoming' | 'sold' | 'reserved';
  is_featured: boolean;
  source_market: string;
  stock_id?: string;
  vin?: string;
  mileage?: string;
  year?: string;
};

export type Enquiry = {
  id: string;
  product_id?: string;
  product_name?: string;
  stock_id?: string;
  quantity: number;
  customer_name: string;
  phone: string;
  whatsapp: string;
  email: string;
  country: string;
  message: string;
  status: 'new' | 'contacted' | 'completed' | 'cancelled';
  created_at: string;
};

export type SourcingRequest = {
  id: string;
  customer_name: string;
  phone: string;
  whatsapp: string;
  email: string;
  country: string;
  product_name: string;
  category: string;
  brand?: string;
  quantity: number;
  budget?: string;
  preferred_source: string;
  details: string;
  image_url?: string;
  status: 'new' | 'reviewing' | 'sourcing' | 'quote_ready' | 'contacted' | 'completed' | 'cancelled';
  created_at: string;
};
