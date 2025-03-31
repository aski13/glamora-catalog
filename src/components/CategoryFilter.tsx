
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Category } from '@/models/types';

interface CategoryFilterProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const CategoryFilter = ({ activeCategory, onCategoryChange }: CategoryFilterProps) => {
  const categories: { name: string; value: Category }[] = [
    { name: 'Все', value: 'all' },
    { name: 'Уход за кожей', value: 'skincare' },
    { name: 'Макияж', value: 'makeup' },
    { name: 'Уход за волосами', value: 'haircare' },
    { name: 'Ароматы', value: 'fragrance' },
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map((category) => (
        <Button
          key={category.value}
          onClick={() => onCategoryChange(category.value)}
          variant={activeCategory === category.value ? 'default' : 'outline'}
          className={
            activeCategory === category.value
              ? 'bg-cosmetic-rose hover:bg-cosmetic-pink text-white'
              : 'text-gray-700 hover:text-cosmetic-rose'
          }
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
