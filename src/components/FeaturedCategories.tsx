
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Уход за кожей',
    description: 'Питание и защита вашей кожи',
    image: 'https://images.unsplash.com/photo-1606830733744-0ad778449672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    link: '/categories/skincare'
  },
  {
    name: 'Макияж',
    description: 'Выразите свою красоту',
    image: 'https://images.unsplash.com/photo-1631214503927-43536b9d8cba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
    link: '/categories/makeup'
  },
  {
    name: 'Уход за волосами',
    description: 'Здоровые, роскошные волосы',
    image: 'https://images.unsplash.com/photo-1580086240628-bf174c336f5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    link: '/categories/haircare'
  },
  {
    name: 'Ароматы',
    description: 'Запахи, которые расскажут вашу историю',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    link: '/categories/fragrance'
  }
];

const FeaturedCategories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-cosmetic-charcoal">
          Выбрать по категории
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link to={category.link} key={index}>
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                <div className="h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-xl mb-1 text-cosmetic-charcoal">{category.name}</h3>
                  <p className="text-gray-500">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
