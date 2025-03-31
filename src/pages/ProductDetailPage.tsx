
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/contexts/CartContext';
import { products } from '@/data/products';
import { Product, categoryTranslations } from '@/models/types';
import { Star, Minus, Plus, ShoppingCart, ChevronLeft } from 'lucide-react';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useCart();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    
    // Find the product by id
    const productId = parseInt(id || '0');
    const foundProduct = products.find(p => p.id === productId) || null;
    
    if (foundProduct) {
      setProduct(foundProduct);
      setIsLoading(false);
    } else {
      // Product not found, redirect after a short delay
      setTimeout(() => {
        navigate('/products');
      }, 1000);
    }
  }, [id, navigate]);
  
  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };
  
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };
  
  const renderRating = () => {
    if (!product) return null;
    
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            className={`${
              i < Math.floor(product.rating)
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
        <span className="ml-2 text-gray-600">{product.rating.toFixed(1)}</span>
      </div>
    );
  };
  
  if (isLoading || !product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="h-96 bg-gray-100 rounded-lg shimmer"></div>
            <div className="space-y-4">
              <div className="h-8 w-3/4 bg-gray-100 rounded shimmer"></div>
              <div className="h-6 w-1/2 bg-gray-100 rounded shimmer"></div>
              <div className="h-4 w-1/3 bg-gray-100 rounded shimmer"></div>
              <div className="h-32 w-full bg-gray-100 rounded shimmer"></div>
              <div className="h-10 w-1/2 bg-gray-100 rounded shimmer"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <Button 
          variant="ghost" 
          className="mb-8 flex items-center text-cosmetic-charcoal hover:text-cosmetic-rose"
          asChild
        >
          <Link to="/products">
            <ChevronLeft size={16} className="mr-1" /> Назад к товарам
          </Link>
        </Button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div>
            <div className="mb-2 text-cosmetic-rose uppercase text-sm tracking-wider">
              {product.category && categoryTranslations[product.category as keyof typeof categoryTranslations] || product.category}
            </div>
            <h1 className="text-3xl font-bold text-cosmetic-charcoal mb-3">
              {product.name}
            </h1>
            
            <div className="mb-4">
              {renderRating()}
            </div>
            
            <div className="text-2xl font-bold text-cosmetic-charcoal mb-6">
              {product.price.toLocaleString()} ₽
            </div>
            
            <p className="text-gray-600 mb-8">
              {product.description}
            </p>
            
            <Separator className="my-6" />
            
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <span className="mr-4 text-gray-700">Количество:</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                  className="h-8 w-8"
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="mx-4 text-lg w-8 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(1)}
                  className="h-8 w-8"
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
              
              <Button 
                className="w-full bg-cosmetic-rose hover:bg-cosmetic-pink text-white py-6"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-5 w-5" /> Добавить в корзину
              </Button>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600 space-y-2">
              <p className="flex items-center">
                <span className="material-icons mr-2 text-green-500">✓</span>
                Бесплатная доставка при заказе от 4500 ₽
              </p>
              <p className="flex items-center">
                <span className="material-icons mr-2 text-green-500">✓</span>
                30-дневная гарантия возврата денег
              </p>
              <p className="flex items-center">
                <span className="material-icons mr-2 text-green-500">✓</span>
                Продукты не тестируются на животных и подходят для веганов
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
