# Quick Setup Guide

Follow these steps to get your ArmProgress landing page up and running.

## 1. Install Dependencies

```bash
cd landing-page
npm install
```

This will install all required dependencies including:
- React & React DOM
- TypeScript
- Vite
- Tailwind CSS
- React Intersection Observer (for scroll animations)

## 2. Start Development Server

```bash
npm run dev
```

The site will open at [http://localhost:3000](http://localhost:3000)

## 3. Customize Your Landing Page

### Update App Store Links

**File**: `src/components/Hero.tsx` and `src/components/Download.tsx`

Replace these placeholder URLs:
```typescript
// iOS App Store
href="https://apps.apple.com/app/armprogress"

// Google Play Store
href="https://play.google.com/store/apps/details?id=com.armprogress"
```

### Update Colors

**File**: `tailwind.config.js`

```javascript
colors: {
  primary: '#E63946',    // Red - your brand color
  secondary: '#1A1A1A',  // Dark background
  accent: '#FFD700',     // Gold for ratings
}
```

### Update SEO Meta Tags

**File**: `index.html`

Update these tags:
- `<title>` - Your page title
- `<meta name="description">` - Page description
- `<meta property="og:image">` - Social media preview image URL
- Structured data (JSON-LD) - Update URLs and ratings

### Add Your Logo/Favicon

Replace these files in the `public/` folder:
- `favicon.png` - Your favicon (32x32 or 64x64 px)
- Add `og-image.png` - Social media preview (1200x630 px)
- Add `twitter-image.png` - Twitter preview (1200x675 px)

### Update Content

**Features** - `src/components/Features.tsx`
- Modify the `features` array to match your app's features

**Testimonials** - `src/components/Testimonials.tsx`
- Update the `testimonials` array with real user reviews

**Pricing** - `src/components/Pricing.tsx`
- Update the `plans` array with your actual pricing

**Stats** - `src/components/Hero.tsx`
- Update the numbers (users, workouts, rating) in the stats section

### Update Social Links

**File**: `src/components/Footer.tsx`

Update these URLs:
```typescript
href="https://twitter.com/armprogress"
href="https://instagram.com/armprogress"
href="https://facebook.com/armprogress"
```

## 4. Test Your Changes

### Check Responsiveness
- Mobile: Chrome DevTools (Cmd+Opt+I) > Toggle device toolbar
- Tablet: Test iPad and Android tablets
- Desktop: Test at 1920px and 1366px widths

### Test Links
- Click all navigation links
- Test all external links
- Verify download buttons work
- Check footer links

### Test Performance
```bash
npm run build
npm run preview
```

Then test with:
- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [GTmetrix](https://gtmetrix.com)

## 5. Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

## 6. Deploy

Choose your preferred hosting platform (see [DEPLOYMENT.md](DEPLOYMENT.md)):

**Quick Deploy (Recommended):**
```bash
# Vercel
npm install -g vercel
vercel

# Or Netlify
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## Common Customizations

### Add Google Analytics

Add to `index.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Add More Sections

Create a new component in `src/components/`:
```typescript
export const NewSection = () => {
  return (
    <section className="py-20 md:py-32">
      {/* Your content */}
    </section>
  );
};
```

Then import and add to `App.tsx`:
```typescript
import { NewSection } from './components/NewSection';

function App() {
  return (
    <div>
      {/* ... */}
      <NewSection />
      {/* ... */}
    </div>
  );
}
```

### Change Fonts

**File**: `index.html`

Update the Google Fonts link:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet" />
```

**File**: `tailwind.config.js`

```javascript
fontFamily: {
  sans: ['YourFont', 'sans-serif'],
}
```

## Troubleshooting

### Port 3000 already in use

```bash
# Kill the process
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- --port 3001
```

### TypeScript errors

```bash
# Check for errors
npm run typecheck

# If you get module errors, restart the dev server
```

### Styling not working

```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

### Build fails

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

## Next Steps

1. ✅ Customize content and links
2. ✅ Add your branding (logo, colors, images)
3. ✅ Update SEO meta tags
4. ✅ Test on multiple devices
5. ✅ Add analytics tracking
6. ✅ Deploy to production
7. ✅ Set up custom domain
8. ✅ Monitor performance

## Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [TypeScript Documentation](https://www.typescriptlang.org)

## Need Help?

- Check [README.md](README.md) for full documentation
- Check [DEPLOYMENT.md](DEPLOYMENT.md) for deployment guides
- Open an issue or contact support@armprogress.app

---

Happy building! 🚀
