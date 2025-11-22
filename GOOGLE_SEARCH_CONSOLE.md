# Google Search Console Setup Guide

Follow these steps to submit your site to Google Search Console and get it indexed.

## Step 1: Create/Verify Google Search Console Account

1. Go to https://search.google.com/search-console
2. Sign in with your Google account
3. Click **"Add Property"**
4. Select **"URL prefix"** and enter: `https://www.mgainsurancesoftware.com`
5. Click **"Continue"**

## Step 2: Verify Ownership

You have several verification options:

### Option A: HTML File Upload (Easiest)
1. Download the verification HTML file from Google Search Console
2. Upload it to your site's root directory via:
   - Vercel dashboard → Project Settings → Files
   - Or add it to your GitHub repo and push

### Option B: HTML Tag (Recommended)
1. Google will provide an HTML meta tag
2. Add it to the `<head>` section of `index.html`
3. Commit and push to GitHub
4. Vercel will auto-deploy
5. Click "Verify" in Search Console

### Option C: Domain Name Provider
1. Add a TXT record to your DNS settings
2. Follow Google's instructions for your domain registrar

## Step 3: Submit Sitemap

Once verified:

1. In Google Search Console, go to **"Sitemaps"** in the left menu
2. Enter: `https://www.mgainsurancesoftware.com/sitemap.xml`
3. Click **"Submit"**
4. Google will start crawling your site

## Step 4: Request Indexing (Optional but Recommended)

For faster indexing of key pages:

1. Go to **"URL Inspection"** tool
2. Enter each important URL:
   - `https://www.mgainsurancesoftware.com/`
   - `https://www.mgainsurancesoftware.com/what-is-an-mga.html`
   - `https://www.mgainsurancesoftware.com/lloyds-coverholder-software.html`
   - `https://www.mgainsurancesoftware.com/pas-buyers-checklist.html`
   - `https://www.mgainsurancesoftware.com/ai-agents-for-mgas.html`
3. Click **"Request Indexing"** for each

## Step 5: Monitor Performance

After submission:

1. **Coverage**: Check which pages are indexed
2. **Performance**: Monitor search impressions and clicks
3. **Enhancements**: Verify structured data is recognized
4. **Mobile Usability**: Ensure mobile-friendly status

## Important Notes

- **Indexing takes time**: Usually 1-7 days for new sites
- **Sitemap updates**: Google will automatically re-crawl your sitemap periodically
- **Structured Data**: Your JSON-LD schemas should appear in "Enhancements" section
- **Core Web Vitals**: Monitor page speed and user experience metrics

## Troubleshooting

### If pages aren't indexing:
- Check robots.txt isn't blocking crawlers
- Verify sitemap.xml is accessible
- Ensure pages return 200 status codes
- Check for crawl errors in Search Console

### If structured data isn't recognized:
- Use Google's Rich Results Test: https://search.google.com/test/rich-results
- Validate JSON-LD syntax
- Ensure schemas are in the HTML, not just referenced

## Next Steps After Indexing

1. **Submit to Bing Webmaster Tools**: https://www.bing.com/webmasters
2. **Monitor Analytics**: Set up Google Analytics if not already done
3. **Track Rankings**: Use tools to monitor keyword positions
4. **Build Backlinks**: Reach out to industry publications for links
5. **Create More Content**: Regular updates help with rankings

## Quick Links

- **Google Search Console**: https://search.google.com/search-console
- **Rich Results Test**: https://search.google.com/test/rich-results
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly

