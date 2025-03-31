
import { Product } from '@/models/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const renderRating = () => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${
              i < Math.floor(product.rating)
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
        <span className="ml-1 text-sm text-gray-600">{product.rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <Link to={`/product/${product.id}`}>
      <Card className="overflow-hidden h-full product-card hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-64 overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-2 right-2">
            <div className="bg-white rounded-full px-2 py-1 text-xs font-medium text-cosmetic-charcoal">
              {product.category}
            </div>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-1 text-cosmetic-charcoal">{product.name}</h3>
          <p className="text-gray-500 text-sm mb-2 line-clamp-2">{product.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-cosmetic-charcoal">
              ${product.price.toFixed(2)}
            </span>
            {renderRating()}
          </div>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <Button 
            className="w-full bg-cosmetic-rose hover:bg-cosmetic-pink text-white product-actions"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
