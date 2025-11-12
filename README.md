# ArmProgress Landing Page

A modern, responsive, SEO-optimized landing page for the ArmProgress iOS and Android apps. Built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional UI with smooth animations and transitions
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, and structured data
- **Performance**: Built with Vite for lightning-fast load times
- **Accessibility**: Semantic HTML and ARIA labels for screen readers
- **Type Safe**: Built with TypeScript for reliability
- **Tailwind CSS**: Utility-first CSS framework for rapid development

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Intersection Observer** - Scroll animations

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Navigate to the landing page directory:
   ```bash
   cd landing-page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The site will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
landing-page/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Pricing.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Download.tsx
│   │   └── Footer.tsx
│   ├── styles/          # Global styles
│   │   └── index.css
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies
```

## Deployment

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Deploy to Netlify

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build and deploy:
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

### Deploy to GitHub Pages

1. Update `vite.config.ts` with your repo name:
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/',
     // ... rest of config
   });
   ```

2. Build:
   ```bash
   npm run build
   ```

3. Deploy the `dist` folder to GitHub Pages

### Deploy to Any Static Host

Simply upload the contents of the `dist` folder to your hosting provider (AWS S3, Cloudflare Pages, Firebase Hosting, etc.)

## Customization

### Update App Store Links

Edit the download links in:
- `src/components/Hero.tsx`
- `src/components/Download.tsx`

Replace placeholder URLs with your actual App Store and Google Play URLs.

### Update Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#E63946',    // Your primary color
      secondary: '#1A1A1A',  // Your secondary color
      accent: '#FFD700',     // Your accent color
    },
  },
}
```

### Update Content

- **Hero section**: Edit `src/components/Hero.tsx`
- **Features**: Edit `src/components/Features.tsx`
- **Pricing**: Edit `src/components/Pricing.tsx`
- **Testimonials**: Edit `src/components/Testimonials.tsx`

### Update SEO

Edit meta tags in `index.html`:
- Title, description, keywords
- Open Graph tags for social sharing
- Twitter Card tags
- Structured data (Schema.org)

## Performance Optimization

The landing page is optimized for performance:

- **Code Splitting**: Automatic vendor chunk splitting
- **Tree Shaking**: Unused code is removed
- **Minification**: HTML, CSS, and JS are minified
- **Lazy Loading**: Components load on scroll using Intersection Observer
- **Asset Optimization**: Images and fonts are optimized

## SEO Features

- **Meta Tags**: Title, description, keywords
- **Open Graph**: Facebook sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **Structured Data**: JSON-LD schema for search engines
- **Semantic HTML**: Proper heading hierarchy
- **Sitemap**: Generate with `npm run build`
- **robots.txt**: Configure search engine access

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This landing page is part of the ArmProgress project.

## Support

For issues or questions, please contact:
- Email: support@armprogress.app
- Website: https://armprogress.app

---

Built with ❤️ for arm wrestlers worldwide 💪
