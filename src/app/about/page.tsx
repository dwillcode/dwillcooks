import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-orange-600">dwillcooks</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My culinary journey began as a simple curiosity and has evolved into a passionate 
            exploration of flavors, techniques, and the stories behind every dish.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">My Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              What started as weekend experiments in the kitchen has grown into a deep 
              appreciation for the art of cooking. I believe that great food comes from 
              understanding ingredients, respecting traditions, and being willing to try new things.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Through this blog and shop, I share my discoveries, failures, and successes 
              in the kitchen. Every recipe tells a story, and every technique learned is 
              a step forward in this never-ending culinary adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link href="/blog">Read My Blog</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/shop">Visit My Shop</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/placeholder.svg"
              alt="Chef portrait"
              width={500}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">My Cooking Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Learn Continuously</h3>
              <p className="text-gray-600">
                Every dish is an opportunity to learn something new about ingredients, 
                techniques, and cultural traditions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cook with Love</h3>
              <p className="text-gray-600">
                The best ingredient in any dish is the care and attention you put into 
                preparing it for yourself and others.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Embrace Experimentation</h3>
              <p className="text-gray-600">
                Don&apos;t be afraid to try new combinations and techniques. Some of the best 
                discoveries come from happy accidents.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Let&apos;s Connect</h2>
          <p className="text-lg text-gray-600 mb-8">
            I&apos;d love to hear about your own culinary adventures and answer any questions you might have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button asChild>
              <Link href="/blog">Read My Latest Posts</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
