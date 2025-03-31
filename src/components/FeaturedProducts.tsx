
import { useState, useEffect } from 'react';
import { Product } from '@/models/types';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface FeaturedProductsProps {
  products: Product[];
  title?: string;
  subtitle?: string;
  limit?: number;
}

const FeaturedProducts = ({ 
  products, 
  title = "Featured Products", 
  subtitle = "Discover our most popular beauty essentials",
  limit = 4
}: FeaturedProductsProps) => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    // Get products with the highest ratings
    const topRated = [...products]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, limit);
    
    setFeaturedProducts(topRated);
  }, [products, limit]);

  return (
    <section className="py-16 bg-cosmetic-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-cosmetic-charcoal">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            className="bg-cosmetic-rose hover:bg-cosmetic-pink text-white px-8"
            asChild
          >
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
