
import Layout from '@/components/Layout';
import ProductList from '@/components/ProductList';
import { products } from '@/data/products';

const ProductsPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-cosmetic-charcoal">All Products</h1>
        <ProductList products={products} />
      </div>
    </Layout>
  );
};

export default ProductsPage;
