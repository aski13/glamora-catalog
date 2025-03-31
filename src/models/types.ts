
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  rating: number;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type Category = 'skincare' | 'makeup' | 'haircare' | 'fragrance' | 'all';

// Русские переводы категорий
export const categoryTranslations: Record<Category, string> = {
  'skincare': 'Уход за кожей',
  'makeup': 'Макияж',
  'haircare': 'Уход за волосами',
  'fragrance': 'Ароматы',
  'all': 'Все'
};
