'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ClockIcon, EnvelopeIcon, HeartIcon } from '@heroicons/react/24/outline'

export default function Home() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitMessage('Thank you! We\'ll notify you when we launch.')
    setEmail('')
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-rose-50 to-pink-50">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Coming Soon Content */}
        <div className="text-center">
          {/* Logo/Brand */}
          <header className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              <span className="text-red-600">dwill</span>cooks
            </h1>
            <div 
              className="w-24 h-1 bg-red-600 mx-auto rounded-full"
              role="presentation"
              aria-hidden="true"
            ></div>
          </header>

          {/* Main Message */}
          <section className="mb-12" aria-labelledby="main-message">
            <h2 id="main-message" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Something Delicious is Coming Soon
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm working hard to bring you an amazing culinary experience. 
              Get ready for recipes, cooking tips, and everything you need to 
              elevate your kitchen game.
            </p>
          </section>

          {/* Features Preview */}
          <section className="mb-12" aria-labelledby="features-heading">
            <h2 id="features-heading" className="sr-only">Upcoming Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeartIcon 
                    className="w-6 h-6 text-red-600" 
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Culinary Blog</h3>
                <p className="text-gray-700 text-sm">
                  Discover recipes, techniques, and stories from my kitchen adventures.
                </p>
              </article>

              <article className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ClockIcon 
                    className="w-6 h-6 text-red-600" 
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cooking Tools</h3>
                <p className="text-gray-700 text-sm">
                  Essential equipment and ingredients to help you cook like a pro.
                </p>
              </article>

              <article className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <EnvelopeIcon 
                    className="w-6 h-6 text-red-600" 
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Stay Updated</h3>
                <p className="text-gray-700 text-sm">
                  Get notified when we launch and receive exclusive cooking tips.
                </p>
              </article>
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-12" aria-labelledby="newsletter-heading">
            <h3 id="newsletter-heading" className="text-2xl font-bold text-gray-900 mb-4">
              Be the First to Know
            </h3>
            <p className="text-gray-700 mb-6">
              Sign up to get notified when dwillcooks launches and receive exclusive early access.
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    aria-describedby="email-help"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-colors placeholder:text-gray-500"
                  />
                  <div id="email-help" className="sr-only">
                    Enter your email address to receive launch notifications
                  </div>
                </div>
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  aria-describedby="submit-status"
                >
                  {isSubmitting ? 'Submitting...' : 'Notify Me'}
                </Button>
              </div>
              {submitMessage && (
                <div 
                  id="submit-status"
                  className="mt-4 text-green-700 text-sm"
                  role="status"
                  aria-live="polite"
                >
                  {submitMessage}
                </div>
              )}
            </form>
          </section>

          {/* Social Links */}
          <section className="mb-8" aria-labelledby="social-heading">
            <h3 id="social-heading" className="text-gray-700 mb-4">Follow the journey</h3>
            <nav aria-label="Social media links">
              <ul className="flex justify-center space-x-6" role="list">
                <li>
                  <a 
                    href="https://instagram.com/dwillcooks" 
                    className="text-gray-500 hover:text-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded"
                    aria-label="Follow dwillcooks on Instagram"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281c-.49 0-.98-.49-.98-.98s.49-.98.98-.98.98.49.98.98-.49.98-.98.98z"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://youtube.com/@dwillcooks" 
                    className="text-gray-500 hover:text-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded"
                    aria-label="Subscribe to dwillcooks on YouTube"
                  >
                    <span className="sr-only">YouTube</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://facebook.com/dwillcooks" 
                    className="text-gray-500 hover:text-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded"
                    aria-label="Follow dwillcooks on Facebook"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </section>

          {/* Footer Note */}
          <footer className="text-sm text-gray-600">
            <p>© 2024 dwillcooks. All rights reserved.</p>
          </footer>
        </div>
      </main>
    </div>
  )
}
