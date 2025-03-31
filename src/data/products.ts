
import { Product } from "../models/types";

export const products: Product[] = [
  {
    id: 1,
    name: "Осветляющая сыворотка",
    description: "Передовая формула с витамином С для осветления кожи и уменьшения темных пятен.",
    price: 4499,
    imageUrl: "https://images.unsplash.com/photo-1570194065650-d99fb4d8a370?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "skincare",
    rating: 4.7,
    inStock: true
  },
  {
    id: 2,
    name: "Увлажняющий крем для лица",
    description: "24-часовое увлажнение для всех типов кожи с гиалуроновой кислотой.",
    price: 3465,
    imageUrl: "https://images.unsplash.com/photo-1595586995003-461b6b712d7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    category: "skincare",
    rating: 4.5,
    inStock: true
  },
  {
    id: 3,
    name: "Матовая помада",
    description: "Стойкая матовая помада в различных оттенках.",
    price: 2249,
    imageUrl: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80",
    category: "makeup",
    rating: 4.3,
    inStock: true
  },
  {
    id: 4,
    name: "Объемная тушь",
    description: "Мгновенный объем и длина для ваших ресниц.",
    price: 1979,
    imageUrl: "https://images.unsplash.com/photo-1590156945880-4f180f800fb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    category: "makeup",
    rating: 4.6,
    inStock: true
  },
  {
    id: 5,
    name: "Восстанавливающий шампунь",
    description: "Восстанавливающий шампунь для поврежденных волос с аргановым маслом.",
    price: 2475,
    imageUrl: "https://images.unsplash.com/photo-1626766904473-0fea37898636?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "haircare",
    rating: 4.2,
    inStock: true
  },
  {
    id: 6,
    name: "Маска для волос",
    description: "Глубокое кондиционирование для мягких, блестящих волос.",
    price: 3149,
    imageUrl: "https://images.unsplash.com/photo-1610705267928-1b9f2fa7f1c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "haircare",
    rating: 4.4,
    inStock: true
  },
  {
    id: 7,
    name: "Розовый парфюм",
    description: "Элегантный розовый аромат с нотками жасмина и ванили.",
    price: 8099,
    imageUrl: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "fragrance",
    rating: 4.8,
    inStock: true
  },
  {
    id: 8,
    name: "Цитрусовый одеколон",
    description: "Свежий и бодрящий цитрусовый аромат для повседневного использования.",
    price: 6795,
    imageUrl: "https://images.unsplash.com/photo-1619994403073-2cec844b8e63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    category: "fragrance",
    rating: 4.1,
    inStock: true
  },
  {
    id: 9,
    name: "Тональный крем",
    description: "Легкое, наращиваемое покрытие для естественного результата.",
    price: 3869,
    imageUrl: "https://images.unsplash.com/photo-1590156945880-4f180f800fb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    category: "makeup",
    rating: 4.5,
    inStock: true
  },
  {
    id: 10,
    name: "Антивозрастной крем",
    description: "Уменьшение видимости тонких линий и морщин.",
    price: 4949,
    imageUrl: "https://images.unsplash.com/photo-1614859324967-b02bed52900f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "skincare",
    rating: 4.9,
    inStock: true
  },
  {
    id: 11,
    name: "Палетка теней",
    description: "12 высокопигментированных оттенков для любого случая.",
    price: 3285,
    imageUrl: "https://images.unsplash.com/photo-1631214503927-43536b9d8cba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    category: "makeup",
    rating: 4.7,
    inStock: true
  },
  {
    id: 12,
    name: "Несмываемый кондиционер",
    description: "Питание и защита для всех типов волос.",
    price: 2699,
    imageUrl: "https://images.unsplash.com/photo-1624723263888-e9b584f90c5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "haircare",
    rating: 4.3,
    inStock: true
  },
  {
    id: 13,
    name: "Глиняная маска",
    description: "Очищающая глиняная маска для детоксикации и очищения кожи.",
    price: 2339,
    imageUrl: "https://images.unsplash.com/photo-1607602132700-068258431c6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "skincare",
    rating: 4.4,
    inStock: true
  },
  {
    id: 14,
    name: "Карандаш для бровей",
    description: "Точный карандаш для бровей для выразительных, натуральных бровей.",
    price: 1709,
    imageUrl: "https://images.unsplash.com/photo-1631214493942-a431ac1f0f41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    category: "makeup",
    rating: 4.2,
    inStock: true
  },
  {
    id: 15,
    name: "Парфюм Дерево и Пряности",
    description: "Теплый, пряный аромат с сандаловым деревом и корицей.",
    price: 8550,
    imageUrl: "https://images.unsplash.com/photo-1585650328207-fc178cbd268f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "fragrance",
    rating: 4.6,
    inStock: true
  }
];
