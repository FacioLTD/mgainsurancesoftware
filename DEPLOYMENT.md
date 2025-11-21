# Deployment Guide for mgainsurancesoftware.com

This guide walks you through deploying the MGA Insurance Software website to Vercel.

## Prerequisites

1. **Vercel Account**: Sign up at https://vercel.com (free account works)
2. **GitHub Account** (recommended) or GitLab/Bitbucket
3. **Domain**: mgainsurancesoftware.com (you'll configure this in Vercel)

## Option 1: Deploy via Vercel CLI (Recommended)

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Navigate to Project Directory

```bash
cd /Users/urielaharoni/Desktop/mgainsurancesoftware
```

### Step 4: Deploy

```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Yes**
- Which scope? **Your account**
- Link to existing project? **No** (first time)
- Project name? **mgainsurancesoftware** (or press Enter)
- Directory? **./** (press Enter)
- Override settings? **No** (press Enter)

### Step 5: Production Deployment

```bash
vercel --prod
```

This will deploy to production and give you a URL.

## Option 2: Deploy via Vercel Dashboard (Easier)

### Step 1: Push to GitHub

1. Create a new repository on GitHub (e.g., `mgainsurancesoftware`)
2. Initialize git and push:

```bash
cd /Users/urielaharoni/Desktop/mgainsurancesoftware
git init
git add .
git commit -m "Initial commit - MGA Insurance Software website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/mgainsurancesoftware.git
git push -u origin main
```

### Step 2: Import to Vercel

1. Go to https://vercel.com/dashboard
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository
4. Vercel will auto-detect settings (it's a static site)
5. Click **"Deploy"**

### Step 3: Configure Domain

1. Go to your project settings in Vercel
2. Navigate to **"Domains"**
3. Add `mgainsurancesoftware.com`
4. Add `www.mgainsurancesoftware.com` (optional)
5. Follow DNS configuration instructions

## DNS Configuration

Add these DNS records to your domain registrar:

### For Root Domain (mgainsurancesoftware.com)

**Type:** A  
**Name:** @  
**Value:** 76.76.21.21

**Type:** CNAME  
**Name:** www  
**Value:** cname.vercel-dns.com

### Alternative (Vercel will provide exact values)

Vercel will show you the exact DNS records to add after you add the domain.

## Post-Deployment Checklist

### 1. Verify Deployment
- [ ] Visit https://mgainsurancesoftware.com
- [ ] Check all pages load correctly
- [ ] Test navigation
- [ ] Verify mobile responsiveness

### 2. SSL Certificate
- [ ] Vercel automatically provides SSL (HTTPS)
- [ ] Verify HTTPS is working

### 3. Performance
- [ ] Run PageSpeed Insights: https://pagespeed.web.dev/
- [ ] Check Core Web Vitals
- [ ] Verify images are optimized (when you add them)

### 4. SEO Verification
- [ ] Submit sitemap to Google Search Console: https://search.google.com/search-console
  - Sitemap URL: https://mgainsurancesoftware.com/sitemap.xml
- [ ] Submit to Bing Webmaster Tools: https://www.bing.com/webmasters
- [ ] Verify structured data: https://validator.schema.org/
- [ ] Test rich results: https://search.google.com/test/rich-results

### 5. Analytics (Optional)
- [ ] Set up Google Analytics
- [ ] Add tracking code to all pages
- [ ] Set up Vercel Analytics (built-in)

### 6. Monitoring
- [ ] Set up Vercel monitoring
- [ ] Configure uptime alerts
- [ ] Monitor error logs

## Environment Variables (If Needed)

If you need environment variables later:

1. Go to Project Settings → Environment Variables
2. Add variables (e.g., API keys)
3. Redeploy

## Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch = automatic production deployment
- Every push to other branches = preview deployment

## Troubleshooting

### Issue: 404 on subpages
**Solution:** The `vercel.json` rewrite rules should handle this. If not, ensure `cleanUrls` is set to `true`.

### Issue: CSS/JS not loading
**Solution:** Check that file paths are correct (no leading slashes in HTML, or ensure they're absolute paths).

### Issue: Domain not working
**Solution:** 
1. Check DNS propagation: https://dnschecker.org
2. Wait 24-48 hours for DNS propagation
3. Verify DNS records match Vercel's requirements

### Issue: Build errors
**Solution:** This is a static site, so there shouldn't be build errors. If you see any, check:
- File paths are correct
- No syntax errors in HTML/CSS/JS
- All referenced files exist

## Performance Tips

1. **Enable Vercel Edge Functions** (if needed for dynamic content)
2. **Use Vercel Image Optimization** (when you add images)
3. **Enable Automatic HTTPS**
4. **Use Vercel Analytics** for performance monitoring

## Support

- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support

