import { blogPosts } from '@/data/blog-posts'
import BlogPostCard from '@/components/blog/blog-post-card'

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover my culinary journey through recipes, techniques, and kitchen adventures. 
            From traditional methods to modern innovations, there's something for every cooking enthusiast.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Categories */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Categories</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Italian Cuisine', 'Baking', 'Gardening'].map((category) => (
              <span
                key={category}
                className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full hover:bg-orange-200 transition-colors cursor-pointer"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
