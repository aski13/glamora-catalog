
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import ProductList from '@/components/ProductList';
import { products } from '@/data/products';
import { Category } from '@/models/types';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const [pageTitle, setPageTitle] = useState('');
  const [validCategory, setValidCategory] = useState<Category>('all');

  useEffect(() => {
    // Validate the category param
    if (category === 'skincare' || category === 'makeup' || 
        category === 'haircare' || category === 'fragrance') {
      setValidCategory(category);
      
      // Set the page title based on the category
      switch (category) {
        case 'skincare':
          setPageTitle('Skincare Products');
          break;
        case 'makeup':
          setPageTitle('Makeup Products');
          break;
        case 'haircare':
          setPageTitle('Haircare Products');
          break;
        case 'fragrance':
          setPageTitle('Fragrances');
          break;
        default:
          setPageTitle('Products');
      }
    } else {
      setValidCategory('all');
      setPageTitle('All Products');
    }
  }, [category]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-cosmetic-charcoal">{pageTitle}</h1>
        <ProductList products={products} initialCategory={validCategory} />
      </div>
    </Layout>
  );
};

export default CategoryPage;
