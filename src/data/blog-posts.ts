import { BlogPost } from '@/types'

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'My Journey into Homemade Pasta',
    excerpt: 'Discover the art of making fresh pasta from scratch with simple ingredients and traditional techniques.',
    content: 'Making pasta from scratch has been one of the most rewarding culinary adventures I\'ve embarked on...',
    author: 'Dwill',
    publishedAt: '2024-01-15',
    updatedAt: '2024-01-15',
    tags: ['pasta', 'italian', 'homemade', 'cooking'],
    category: 'Italian Cuisine',
    image: '/images/placeholder.svg',
    slug: 'homemade-pasta-journey'
  },
  {
    id: '2',
    title: 'Perfecting the Art of Sourdough',
    excerpt: 'Learn the secrets to creating the perfect sourdough bread with a crispy crust and tangy flavor.',
    content: 'Sourdough bread has become my obsession over the past year. The process of creating a starter...',
    author: 'Dwill',
    publishedAt: '2024-01-10',
    updatedAt: '2024-01-10',
    tags: ['bread', 'sourdough', 'baking', 'fermentation'],
    category: 'Baking',
    image: '/images/placeholder.svg',
    slug: 'perfecting-sourdough-art'
  },
  {
    id: '3',
    title: 'Farm-to-Table: Growing Your Own Herbs',
    excerpt: 'Transform your cooking with fresh herbs grown right in your kitchen or garden.',
    content: 'There\'s something magical about plucking fresh basil or rosemary directly from your own garden...',
    author: 'Dwill',
    publishedAt: '2024-01-05',
    updatedAt: '2024-01-05',
    tags: ['herbs', 'gardening', 'fresh', 'sustainable'],
    category: 'Gardening',
    image: '/images/placeholder.svg',
    slug: 'farm-to-table-herbs'
  }
]
