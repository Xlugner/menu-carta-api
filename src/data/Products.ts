export interface Product {
  id: string | number;
  name: string;
  description: string;
  price: number;
  image: string;
  altText: string;
  category: string;
  rating?: number;
  reviews?: number;
}

export const products: Product[] = [
  // Electrónica
  {
    id: 'e1',
    name: 'Auriculares Premium',
    description: 'Auriculares inalámbricos con cancelación de ruido',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    altText: 'Auriculares premium',
    category: 'electronica',
    rating: 4.5,
    reviews: 128,
  },
  {
    id: 'e2',
    name: 'Cámara Digital',
    description: 'Cámara digital compacta 20MP',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop',
    altText: 'Cámara digital',
    category: 'electronica',
    rating: 4.3,
    reviews: 95,
  },
  {
    id: 'e3',
    name: 'Smartwatch',
    description: 'Reloj inteligente con monitoreo de salud',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    altText: 'Smartwatch',
    category: 'electronica',
    rating: 4.2,
    reviews: 87,
  },
  // Moda
  {
    id: 'm1',
    name: 'Camiseta Premium',
    description: 'Camiseta de algodón 100% orgánico',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    altText: 'Camiseta premium',
    category: 'moda',
    rating: 4.6,
    reviews: 234,
  },
  {
    id: 'm2',
    name: 'Jeans Clásicos',
    description: 'Jeans de mezclilla de alta calidad',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500&h=500&fit=crop',
    altText: 'Jeans clásicos',
    category: 'moda',
    rating: 4.4,
    reviews: 156,
  },
  {
    id: 'm3',
    name: 'Zapatos Deportivos',
    description: 'Zapatillas cómodas para correr',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
    altText: 'Zapatos deportivos',
    category: 'moda',
    rating: 4.7,
    reviews: 312,
  },
  // Hogar
  {
    id: 'h1',
    name: 'Lámpara LED',
    description: 'Lámpara inteligente RGB',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1565636192335-14c46fa1120d?w=500&h=500&fit=crop',
    altText: 'Lámpara LED',
    category: 'hogar',
    rating: 4.5,
    reviews: 78,
  },
  {
    id: 'h2',
    name: 'Almohada Ergonómica',
    description: 'Almohada de espuma viscoelástica',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1584622335990-4876acc1eb4f?w=500&h=500&fit=crop',
    altText: 'Almohada ergonómica',
    category: 'hogar',
    rating: 4.3,
    reviews: 102,
  },
  {
    id: 'h3',
    name: 'Organizador de Closet',
    description: 'Sistema de almacenamiento modular',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1523217311519-d595dc36e06b?w=500&h=500&fit=crop',
    altText: 'Organizador de closet',
    category: 'hogar',
    rating: 4.6,
    reviews: 145,
  },
  // Deportes
  {
    id: 'd1',
    name: 'Botella de Agua Inteligente',
    description: 'Botella que monitorea tu hidratación',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1602088113235-229c19758e9f?w=500&h=500&fit=crop',
    altText: 'Botella de agua inteligente',
    category: 'deportes',
    rating: 4.4,
    reviews: 89,
  },
  {
    id: 'd2',
    name: 'Mochila Deportiva',
    description: 'Mochila ergonómica para ejercicio',
    price: 54.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
    altText: 'Mochila deportiva',
    category: 'deportes',
    rating: 4.5,
    reviews: 127,
  },
  {
    id: 'd3',
    name: 'Banda de Resistencia',
    description: 'Set de bandas elásticas de ejercicio',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500&h=500&fit=crop',
    altText: 'Banda de resistencia',
    category: 'deportes',
    rating: 4.7,
    reviews: 203,
  },
  // Libros
  {
    id: 'l1',
    name: 'El Quijote',
    description: 'Novela clásica de Miguel de Cervantes',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=500&fit=crop',
    altText: 'El Quijote',
    category: 'libros',
    rating: 4.8,
    reviews: 456,
  },
  {
    id: 'l2',
    name: 'Sapiens',
    description: 'Historia breve de la humanidad',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=500&h=500&fit=crop',
    altText: 'Sapiens',
    category: 'libros',
    rating: 4.6,
    reviews: 234,
  },
  {
    id: 'l3',
    name: 'Hábitos Atómicos',
    description: 'Cambios pequeños, resultados extraordinarios',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1543002588-d83cedbc747b?w=500&h=500&fit=crop',
    altText: 'Hábitos Atómicos',
    category: 'libros',
    rating: 4.7,
    reviews: 389,
  },
];

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category);
}

export function getProductById(id: string | number): Product | undefined {
  return products.find((product) => product.id === id);
}
