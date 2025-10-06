import { Product } from '@/types'

export const products: Product[] = [
  {
    id: '1',
    name: 'Artisan Sourdough Starter Kit',
    description: 'Everything you need to begin your sourdough journey, including a live starter culture and detailed instructions.',
    price: 24.99,
    image: '/images/placeholder.svg',
    images: ['/images/placeholder.svg', '/images/placeholder.svg'],
    category: 'Baking Supplies',
    inStock: true,
    stock: 15,
    tags: ['sourdough', 'starter', 'baking', 'kit'],
    slug: 'artisan-sourdough-starter-kit'
  },
  {
    id: '2',
    name: 'Handmade Pasta Cutter Set',
    description: 'Professional-grade pasta cutters for creating perfect fettuccine, tagliatelle, and more.',
    price: 45.00,
    image: '/images/placeholder.svg',
    images: ['/images/placeholder.svg', '/images/placeholder.svg'],
    category: 'Kitchen Tools',
    inStock: true,
    stock: 8,
    tags: ['pasta', 'cutter', 'italian', 'tools'],
    slug: 'handmade-pasta-cutter-set'
  },
  {
    id: '3',
    name: 'Fresh Herb Growing Kit',
    description: 'Start your own herb garden with this complete kit including seeds, pots, and growing medium.',
    price: 19.99,
    image: '/images/placeholder.svg',
    images: ['/images/placeholder.svg', '/images/placeholder.svg'],
    category: 'Gardening',
    inStock: true,
    stock: 20,
    tags: ['herbs', 'gardening', 'fresh', 'kit'],
    slug: 'fresh-herb-growing-kit'
  },
  {
    id: '4',
    name: 'Cooking Techniques E-Book',
    description: 'A comprehensive guide to fundamental cooking techniques every home chef should master.',
    price: 12.99,
    image: '/images/placeholder.svg',
    images: ['/images/placeholder.svg'],
    category: 'Digital Products',
    inStock: true,
    stock: 999,
    tags: ['ebook', 'cooking', 'techniques', 'guide'],
    slug: 'cooking-techniques-ebook'
  }
]
