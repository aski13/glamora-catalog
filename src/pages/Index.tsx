
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import FeaturedCategories from '@/components/FeaturedCategories';
import { products } from '@/data/products';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts products={products} />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Natural beauty products" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-cosmetic-charcoal">Clean Beauty, Extraordinary Results</h2>
              <p className="text-gray-600 mb-4">
                At Glamora, we believe in the power of natural ingredients. Our formulations combine the best of science and nature to create products that deliver real results while being kind to your skin and the planet.
              </p>
              <p className="text-gray-600 mb-4">
                We never compromise on quality. Every product is dermatologist-tested, cruelty-free, and made without harmful chemicals. Discover the difference that thoughtful formulation makes.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-cosmetic-cream rounded-lg">
                  <div className="text-cosmetic-rose text-3xl font-bold">100%</div>
                  <div className="text-gray-600">Cruelty-Free</div>
                </div>
                <div className="text-center p-4 bg-cosmetic-cream rounded-lg">
                  <div className="text-cosmetic-rose text-3xl font-bold">Clean</div>
                  <div className="text-gray-600">Formulations</div>
                </div>
                <div className="text-center p-4 bg-cosmetic-cream rounded-lg">
                  <div className="text-cosmetic-rose text-3xl font-bold">Eco</div>
                  <div className="text-gray-600">Friendly Packaging</div>
                </div>
                <div className="text-center p-4 bg-cosmetic-cream rounded-lg">
                  <div className="text-cosmetic-rose text-3xl font-bold">24/7</div>
                  <div className="text-gray-600">Customer Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
