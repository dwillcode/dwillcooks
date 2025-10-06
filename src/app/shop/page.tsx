import { products } from '@/data/products'
import ProductCard from '@/components/ecommerce/product-card'

export default function ShopPage() {
  const categories = [...new Set(products.map(product => product.category))]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Essential tools, ingredients, and resources for your culinary journey. 
            Carefully curated products to help you master the art of cooking.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Categories</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors">
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-orange-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6">
            Get notified about new products, special offers, and cooking tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <button className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
