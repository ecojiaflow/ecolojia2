export interface Product {
  id: string;
  name: string;
  name_en?: string;
  description: string;
  description_en?: string;
  image: string;
  category: string;
  brand: string;
  ethicalScore: number;
  price: number;
  currency: string;
  tags: string[];
  verified: boolean;
  affiliate_link_fr: string;
  affiliate_link_en: string;
  certifications: string[];
  ai_confidence?: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface SearchFilters {
  category?: string;
  certifications?: string[];
  tags?: string[];
  minConfidence?: number;
}

export interface SubmitProductForm {
  name: string;
  description: string;
  image_url: string;
  brand: string;
  category: string;
  origin: string;
}