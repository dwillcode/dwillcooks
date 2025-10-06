import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import BlogPostCard from '@/components/blog/blog-post-card'
import ProductCard from '@/components/ecommerce/product-card'
import { blogPosts } from '@/data/blog-posts'
import { products } from '@/data/products'

export default function Home() {
  const featuredPosts = blogPosts.slice(0, 3)
  const featuredProducts = products.slice(0, 4)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to{' '}
              <span className="text-orange-600">dwillcooks</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join me on my culinary journey as I explore the world of cooking, 
              from traditional techniques to modern innovations. Discover recipes, 
              tips, and tools to elevate your kitchen experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Link href="/blog">Explore Blog</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/shop">Visit Shop</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest from the Blog</h2>
            <p className="text-lg text-gray-600">
              Discover my latest culinary adventures and cooking tips
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-lg text-gray-600">
              Essential tools and ingredients for your culinary journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/shop">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About dwillcooks</h2>
              <p className="text-lg text-gray-600 mb-6">
                I'm an amateur chef passionate about exploring the world of cooking. 
                From traditional Italian pasta-making to modern fermentation techniques, 
                I love sharing my discoveries and helping others on their culinary journey.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're a beginner or an experienced cook, you'll find something 
                here to inspire your next kitchen adventure.
              </p>
              <Button asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3">
                <Image
                  src="/images/placeholder.svg"
                  alt="Chef cooking in kitchen"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
