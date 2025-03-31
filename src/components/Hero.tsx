
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-cosmetic-cream py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-cosmetic-charcoal mb-4">
              Beauty that's uniquely <span className="text-cosmetic-rose">you</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover premium cosmetics that enhance your natural beauty. From luxurious skincare to stunning makeup, express yourself with our expertly crafted products.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                className="px-6 py-2 bg-cosmetic-rose hover:bg-cosmetic-pink text-white"
                asChild
              >
                <Link to="/products">Shop Now</Link>
              </Button>
              <Button
                variant="outline"
                className="px-6 py-2 border-cosmetic-rose text-cosmetic-charcoal hover:bg-cosmetic-cream"
                asChild
              >
                <Link to="/categories/skincare">Our Bestsellers</Link>
              </Button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
                alt="Cosmetics collection"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 rounded-lg bg-cosmetic-pink z-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
