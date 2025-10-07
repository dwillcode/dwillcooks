import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/types'
import { formatPrice } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-w-1 aspect-h-1">
        <Link href={`/shop/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">{product.category}</span>
          {!product.inStock && (
            <span className="text-sm text-red-600 font-medium">Out of Stock</span>
          )}
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          <Link 
            href={`/shop/${product.slug}`}
            className="hover:text-red-600 transition-colors"
          >
            {product.name}
          </Link>
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">
            {formatPrice(product.price)}
          </span>
          
          <Button 
            disabled={!product.inStock}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            <ShoppingCartIcon className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
        
        {product.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {product.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
