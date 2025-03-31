
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import Cart from './Cart';

const Header = () => {
  const { totalItems, isCartOpen, setIsCartOpen } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Add search functionality here
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-cosmetic-charcoal">
            Glamora
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-cosmetic-rose font-medium">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-cosmetic-rose font-medium">
              Products
            </Link>
            <Link to="/categories/skincare" className="text-gray-700 hover:text-cosmetic-rose font-medium">
              Skincare
            </Link>
            <Link to="/categories/makeup" className="text-gray-700 hover:text-cosmetic-rose font-medium">
              Makeup
            </Link>
            <Link to="/categories/haircare" className="text-gray-700 hover:text-cosmetic-rose font-medium">
              Haircare
            </Link>
          </nav>

          {/* Search, Cart, and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="hidden md:flex items-center relative">
              <Input
                type="text"
                placeholder="Search..."
                className="w-64 pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button 
                type="submit" 
                variant="ghost" 
                size="icon" 
                className="absolute right-1"
              >
                <Search size={18} />
              </Button>
            </form>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative" 
              onClick={toggleCart}
              aria-label="Cart"
            >
              <ShoppingCart />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-cosmetic-rose text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden" 
              onClick={toggleMenu}
              aria-label="Menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-700 hover:text-cosmetic-rose font-medium py-2" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/products" className="text-gray-700 hover:text-cosmetic-rose font-medium py-2" onClick={toggleMenu}>
                Products
              </Link>
              <Link to="/categories/skincare" className="text-gray-700 hover:text-cosmetic-rose font-medium py-2" onClick={toggleMenu}>
                Skincare
              </Link>
              <Link to="/categories/makeup" className="text-gray-700 hover:text-cosmetic-rose font-medium py-2" onClick={toggleMenu}>
                Makeup
              </Link>
              <Link to="/categories/haircare" className="text-gray-700 hover:text-cosmetic-rose font-medium py-2" onClick={toggleMenu}>
                Haircare
              </Link>
            </nav>
            <form onSubmit={handleSearch} className="mt-4">
              <div className="flex">
                <Input
                  type="text"
                  placeholder="Search..."
                  className="w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit" className="ml-2 bg-cosmetic-rose hover:bg-cosmetic-pink text-white">
                  <Search size={18} />
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
      
      {/* Cart Drawer */}
      <Cart />
    </header>
  );
};

export default Header;
