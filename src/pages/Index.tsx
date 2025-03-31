
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
                alt="Натуральная косметика" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-cosmetic-charcoal">Чистая красота, выдающиеся результаты</h2>
              <p className="text-gray-600 mb-4">
                В Glamora мы верим в силу натуральных ингредиентов. Наши формулы сочетают лучшее из науки и природы для создания продуктов, которые дают реальные результаты, при этом бережно относясь к вашей коже и планете.
              </p>
              <p className="text-gray-600 mb-4">
                Мы никогда не идем на компромисс в вопросах качества. Каждый продукт тестируется дерматологами, не тестируется на животных и изготавливается без вредных химических веществ. Откройте для себя разницу, которую делает продуманный состав.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-cosmetic-cream rounded-lg">
                  <div className="text-cosmetic-rose text-3xl font-bold">100%</div>
                  <div className="text-gray-600">Без тестов на животных</div>
                </div>
                <div className="text-center p-4 bg-cosmetic-cream rounded-lg">
                  <div className="text-cosmetic-rose text-3xl font-bold">Чистые</div>
                  <div className="text-gray-600">Формулы</div>
                </div>
                <div className="text-center p-4 bg-cosmetic-cream rounded-lg">
                  <div className="text-cosmetic-rose text-3xl font-bold">Эко</div>
                  <div className="text-gray-600">Упаковка</div>
                </div>
                <div className="text-center p-4 bg-cosmetic-cream rounded-lg">
                  <div className="text-cosmetic-rose text-3xl font-bold">24/7</div>
                  <div className="text-gray-600">Поддержка клиентов</div>
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
