
import { useState, useEffect } from 'react';
import { Product, Category } from '@/models/types';
import ProductCard from './ProductCard';
import CategoryFilter from './CategoryFilter';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface ProductListProps {
  products: Product[];
  initialCategory?: Category;
}

const ProductList = ({ products, initialCategory = 'all' }: ProductListProps) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [activeCategory, setActiveCategory] = useState<Category>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    filterProducts();
  }, [activeCategory, searchQuery, products]);

  const filterProducts = () => {
    let result = [...products];
    
    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter(product => product.category === activeCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        product => 
          product.name.toLowerCase().includes(query) || 
          product.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredProducts(result);
  };

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
  };

  return (
    <div>
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <CategoryFilter 
            activeCategory={activeCategory} 
            onCategoryChange={handleCategoryChange} 
          />
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-full md:w-64"
            />
          </div>
        </div>
      </div>
      
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-700">No products found</h3>
          <p className="text-gray-500 mt-2">
            Try changing your search or filter criteria
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
