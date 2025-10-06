# dwillcooks - Amateur Chef Blog & Ecommerce Website

A modern blog and ecommerce website for an amateur chef, built with Next.js, TypeScript, and Tailwind CSS.

## Features

### Blog
- ✅ Responsive blog layout
- ✅ Blog post cards with categories and tags
- ✅ Featured posts on homepage
- ✅ Category filtering
- ✅ Clean, modern design

### Ecommerce
- ✅ Product catalog with categories
- ✅ Product cards with pricing and stock status
- ✅ Shopping cart functionality (UI ready)
- ✅ Product filtering by category
- ✅ Newsletter signup

### Design & UX
- ✅ Fully responsive design
- ✅ Modern, clean UI with orange/amber color scheme
- ✅ Mobile-first approach
- ✅ Accessible navigation
- ✅ SEO-friendly structure

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Headless UI
- **Icons**: Heroicons
- **Font**: Inter

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dwillcooks
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── blog/              # Blog pages
│   ├── shop/              # Ecommerce pages
│   ├── about/              # About page
│   ├── layout.tsx          # Root layout
│   └── page.tsx           # Homepage
├── components/             # React components
│   ├── ui/                # Reusable UI components
│   ├── blog/              # Blog-specific components
│   └── ecommerce/         # Ecommerce components
├── data/                  # Sample data
├── lib/                   # Utility functions
└── types/                 # TypeScript type definitions
```

## Pages

- **Home** (`/`) - Hero section, featured posts, and products
- **Blog** (`/blog`) - All blog posts with category filtering
- **Shop** (`/shop`) - Product catalog with filtering
- **About** (`/about`) - Chef's story and philosophy

## Customization

### Colors
The website uses a warm orange/amber color scheme. You can customize colors in `src/app/globals.css`:

```css
:root {
  --primary: #ea580c;        /* Orange-600 */
  --accent: #fef3c7;         /* Amber-100 */
  --destructive: #ef4444;    /* Red-500 */
}
```

### Content
- Blog posts: Edit `src/data/blog-posts.ts`
- Products: Edit `src/data/products.ts`
- Site metadata: Edit `src/app/layout.tsx`

## Deployment

The site is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any static hosting service

### Vercel Deployment
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## Future Enhancements

- [ ] Individual blog post pages
- [ ] Individual product pages
- [ ] Shopping cart functionality
- [ ] User authentication
- [ ] Content management system
- [ ] Payment integration
- [ ] Search functionality
- [ ] Comments system
- [ ] Newsletter integration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or support, please contact [your-email@example.com].