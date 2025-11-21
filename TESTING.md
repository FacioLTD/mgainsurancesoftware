# Testing the Website Locally

This guide shows you how to test the MGA Insurance Software website on your local machine.

## Quick Start (Python - Recommended)

If you have Python installed (most Macs have it pre-installed):

### Python 3 (Recommended)
```bash
cd /Users/urielaharoni/Desktop/mgainsurancesoftware
python3 -m http.server 8000
```

Then open your browser and go to:
- **Main page:** http://localhost:8000/
- **What Is an MGA:** http://localhost:8000/what-is-an-mga.html
- **Lloyd's Coverholder:** http://localhost:8000/lloyds-coverholder-software.html
- **PAS Buyer's Checklist:** http://localhost:8000/pas-buyers-checklist.html
- **AI Agents:** http://localhost:8000/ai-agents-for-mgas.html

### Python 2 (if Python 3 doesn't work)
```bash
cd /Users/urielaharoni/Desktop/mgainsurancesoftware
python -m SimpleHTTPServer 8000
```

## Alternative Methods

### Method 1: Node.js http-server

If you have Node.js installed:

1. Install http-server globally:
```bash
npm install -g http-server
```

2. Navigate to the project directory and run:
```bash
cd /Users/urielaharoni/Desktop/mgainsurancesoftware
http-server -p 8000
```

### Method 2: PHP Built-in Server

If you have PHP installed:

```bash
cd /Users/urielaharoni/Desktop/mgainsurancesoftware
php -S localhost:8000
```

### Method 3: VS Code Live Server Extension

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Method 4: Using npx (No Installation Required)

If you have Node.js but don't want to install globally:

```bash
cd /Users/urielaharoni/Desktop/mgainsurancesoftware
npx http-server -p 8000
```

## Testing Checklist

Once your server is running, test the following:

### Navigation
- [ ] Main navigation menu works on all pages
- [ ] Mobile menu toggle works (resize browser to mobile width)
- [ ] All internal links work correctly
- [ ] Footer links work correctly

### Pages to Test
- [ ] Home page (`/` or `/index.html`)
- [ ] What Is an MGA? (`/what-is-an-mga.html`)
- [ ] Lloyd's Coverholder Software (`/lloyds-coverholder-software.html`)
- [ ] PAS Buyer's Checklist (`/pas-buyers-checklist.html`)
- [ ] AI Agents for MGAs (`/ai-agents-for-mgas.html`)

### Functionality
- [ ] Smooth scrolling works for anchor links
- [ ] Mobile responsive design works (test on different screen sizes)
- [ ] All facio.io links open in new tabs
- [ ] CTA buttons are visible and styled correctly
- [ ] Tables display correctly
- [ ] Images load (when you add them)

### SEO & Technical
- [ ] Page titles display correctly in browser tabs
- [ ] Meta descriptions are present (check page source)
- [ ] Structured data is present (check page source for JSON-LD)
- [ ] Canonical URLs are correct
- [ ] No console errors (check browser developer tools)

## Browser Developer Tools

To inspect the site:

1. **Open Developer Tools:**
   - Chrome/Edge: `Cmd + Option + I` (Mac) or `F12`
   - Firefox: `Cmd + Option + I` (Mac) or `F12`
   - Safari: `Cmd + Option + I` (enable Developer menu first)

2. **Check Console:**
   - Look for any JavaScript errors
   - Verify structured data is loading

3. **Check Network Tab:**
   - Verify CSS and JS files load correctly
   - Check for 404 errors

4. **Mobile Testing:**
   - Use device emulation in DevTools
   - Test responsive breakpoints

## Stopping the Server

To stop the local server:
- Press `Ctrl + C` in the terminal where the server is running

## Troubleshooting

### Port Already in Use
If port 8000 is already in use, try a different port:
```bash
python3 -m http.server 8080
```
Then access at: http://localhost:8080

### CORS Issues
If you see CORS errors, make sure you're accessing via `http://localhost` and not `file://` protocol.

### Links Not Working
- Make sure you're using a web server (not opening files directly)
- Check that file paths are correct (case-sensitive on some systems)
- Verify all HTML files are in the same directory

## Next Steps

After local testing:
1. Test on different browsers (Chrome, Firefox, Safari, Edge)
2. Test on mobile devices (use browser DevTools device emulation)
3. Validate HTML: https://validator.w3.org/
4. Check structured data: https://validator.schema.org/
5. Test page speed: https://pagespeed.web.dev/

