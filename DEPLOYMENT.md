# Deployment Guide

This guide covers various deployment options for the ArmProgress landing page.

## Quick Deploy Options

### Option 1: Vercel (Recommended)

Vercel offers the easiest deployment with automatic CI/CD.

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   cd landing-page
   vercel
   ```

4. **For production:**
   ```bash
   vercel --prod
   ```

**Vercel Dashboard Method:**
1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"

### Option 2: Netlify

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Deploy:**
   ```bash
   netlify deploy --prod --dir=dist
   ```

**Netlify Dashboard Method:**
1. Push code to GitHub
2. Visit [app.netlify.com](https://app.netlify.com)
3. Click "Add new site" > "Import an existing project"
4. Connect to GitHub
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Option 3: GitHub Pages

1. **Update `vite.config.ts`:**
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/',
     // ... rest of config
   });
   ```

2. **Build:**
   ```bash
   npm run build
   ```

3. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

4. **Add to package.json scripts:**
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

5. **Deploy:**
   ```bash
   npm run deploy
   ```

### Option 4: Cloudflare Pages

1. Push code to GitHub
2. Visit [dash.cloudflare.com](https://dash.cloudflare.com)
3. Go to "Pages" > "Create a project"
4. Connect to GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Click "Save and Deploy"

### Option 5: AWS S3 + CloudFront

1. **Build:**
   ```bash
   npm run build
   ```

2. **Create S3 bucket:**
   ```bash
   aws s3 mb s3://armprogress-landing
   ```

3. **Upload:**
   ```bash
   aws s3 sync dist/ s3://armprogress-landing --acl public-read
   ```

4. **Enable static website hosting in S3 console**

5. **Create CloudFront distribution for HTTPS and CDN**

### Option 6: Firebase Hosting

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login:**
   ```bash
   firebase login
   ```

3. **Initialize:**
   ```bash
   firebase init hosting
   ```
   - Choose `dist` as public directory
   - Configure as single-page app: Yes

4. **Build and deploy:**
   ```bash
   npm run build
   firebase deploy
   ```

## Custom Domain Setup

### Vercel
1. Go to Project Settings > Domains
2. Add your custom domain
3. Update DNS records as instructed
4. SSL is automatic

### Netlify
1. Go to Site Settings > Domain Management
2. Add custom domain
3. Update DNS records
4. SSL is automatic

### Cloudflare Pages
1. Go to Custom domains
2. Add your domain
3. DNS is auto-configured if domain is on Cloudflare
4. SSL is automatic

## Environment Variables

If you need environment variables:

1. **Create `.env` file:**
   ```env
   VITE_API_URL=https://api.armprogress.app
   VITE_GA_ID=G-XXXXXXXXXX
   ```

2. **Access in code:**
   ```typescript
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

3. **Set in hosting platform:**
   - **Vercel**: Project Settings > Environment Variables
   - **Netlify**: Site Settings > Environment Variables
   - **Cloudflare**: Settings > Environment Variables

## Performance Checklist

Before deploying, ensure:

- ✅ Images are optimized (use WebP format)
- ✅ Meta tags are set for SEO
- ✅ Analytics code is added (Google Analytics, etc.)
- ✅ Error tracking is set up (Sentry, etc.)
- ✅ App Store/Play Store links are updated
- ✅ Social media links are updated
- ✅ Contact information is correct
- ✅ Test on multiple devices and browsers
- ✅ Check mobile responsiveness
- ✅ Verify all links work
- ✅ Test load time (aim for < 3s)

## Analytics Setup

### Google Analytics

1. Add to `index.html` before `</head>`:
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

### Plausible Analytics (Privacy-friendly alternative)

```html
<script defer data-domain="armprogress.app" src="https://plausible.io/js/script.js"></script>
```

## Monitoring

### Uptime Monitoring
- [UptimeRobot](https://uptimerobot.com) - Free
- [Pingdom](https://www.pingdom.com)

### Performance Monitoring
- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [GTmetrix](https://gtmetrix.com)
- [WebPageTest](https://www.webpagetest.org)

## Continuous Deployment

Most platforms support automatic deployment on git push:

1. Connect repository to hosting platform
2. Set main/master branch for production
3. Set develop branch for preview (optional)
4. Every push automatically triggers deployment

## Troubleshooting

### Build Fails

**Issue**: `npm run build` fails

**Solution**:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 on Routes

**Issue**: Refresh on routes gives 404

**Solution**: Configure as SPA
- **Vercel**: Auto-configured
- **Netlify**: Add `_redirects` file to `public/`:
  ```
  /*    /index.html   200
  ```
- **S3**: Set error page to `index.html`

### Slow Load Times

**Solutions**:
- Enable CDN (most platforms include this)
- Optimize images (use WebP, compress)
- Enable Brotli/Gzip compression (usually automatic)
- Check bundle size: `npm run build -- --stats`

## Need Help?

- [Vite Deployment Docs](https://vitejs.dev/guide/static-deploy.html)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- Contact: support@armprogress.app

---

Good luck with your deployment! 🚀
