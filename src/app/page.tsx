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
    <div className="min-h-screen">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Coming Soon Content */}
        <div className="text-center">
          {/* Logo/Brand */}
          <header className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-[#022F70] mb-4">
              <span className="text-[#F17816]">dwill</span>cooks
            </h1>
            <div 
              className="w-24 h-1 bg-[#F17816] mx-auto rounded-full"
              role="presentation"
              aria-hidden="true"
            ></div>
          </header>

          {/* Main Message */}
          <section className="mb-12" aria-labelledby="main-message">
            <h2 id="main-message" className="text-3xl md:text-4xl font-bold text-[#022F70] mb-6">
              Something Delicious is Coming Soon
            </h2>
            <p className="text-xl text-[#022F70] mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm working hard to bring you an amazing culinary experience. 
              Get ready for recipes, cooking tips, and everything you need to 
              elevate your kitchen game.
            </p>
          </section>

          {/* Features Preview */}
          <section className="mb-12" aria-labelledby="features-heading">
            <h2 id="features-heading" className="sr-only">Upcoming Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="bg-[#FEF1CF]/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-[#17D1A5]/20">
                <div className="w-12 h-12 bg-[#F17816]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeartIcon 
                    className="w-6 h-6 text-[#F17816]" 
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#022F70] mb-2">Culinary Blog</h3>
                <p className="text-[#022F70] text-sm">
                  Discover recipes, techniques, and stories from my kitchen adventures.
                </p>
              </article>

              <article className="bg-[#FEF1CF]/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-[#17D1A5]/20">
                <div className="w-12 h-12 bg-[#17D1A5]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ClockIcon 
                    className="w-6 h-6 text-[#17D1A5]" 
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#022F70] mb-2">Cooking Tools</h3>
                <p className="text-[#022F70] text-sm">
                  Essential equipment and ingredients to help you cook like a pro.
                </p>
              </article>

              <article className="bg-[#FEF1CF]/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-[#17D1A5]/20">
                <div className="w-12 h-12 bg-[#FCC022]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <EnvelopeIcon 
                    className="w-6 h-6 text-[#FCC022]" 
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#022F70] mb-2">Stay Updated</h3>
                <p className="text-[#022F70] text-sm">
                  Get notified when we launch and receive exclusive cooking tips.
                </p>
              </article>
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="bg-[#FEF1CF]/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-12 border border-[#17D1A5]/30" aria-labelledby="newsletter-heading">
            <h3 id="newsletter-heading" className="text-2xl font-bold text-[#022F70] mb-4">
              Be the First to Know
            </h3>
            <p className="text-[#022F70] mb-6">
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
                    className="w-full px-4 py-3 border border-[#17D1A5] rounded-lg focus:ring-2 focus:ring-[#F17816] focus:border-transparent outline-none transition-colors placeholder:text-[#022F70]/60"
                  />
                  <div id="email-help" className="sr-only">
                    Enter your email address to receive launch notifications
                  </div>
                </div>
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#F17816] hover:bg-[#F17816]/90 text-[#FEF1CF] px-6 py-3 focus:ring-2 focus:ring-[#F17816] focus:ring-offset-2"
                  aria-describedby="submit-status"
                >
                  {isSubmitting ? 'Submitting...' : 'Notify Me'}
                </Button>
              </div>
              {submitMessage && (
                <div 
                  id="submit-status"
                  className="mt-4 text-[#17D1A5] text-sm"
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
            <h3 id="social-heading" className="text-[#022F70] mb-4">Follow the journey</h3>
            <nav aria-label="Social media links">
              <ul className="flex justify-center space-x-6" role="list">
                <li>
                  <a 
                    href="https://instagram.com/dwillcooks" 
                    className="text-[#022F70]/60 hover:text-[#F17816] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F17816] focus:ring-offset-2 rounded"
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
                    className="text-[#022F70]/60 hover:text-[#F17816] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F17816] focus:ring-offset-2 rounded"
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
                    className="text-[#022F70]/60 hover:text-[#F17816] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F17816] focus:ring-offset-2 rounded"
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
          <footer className="text-sm text-[#022F70]/70">
            <p>© 2024 dwillcooks. All rights reserved.</p>
          </footer>
        </div>
      </main>
    </div>
  )
}
