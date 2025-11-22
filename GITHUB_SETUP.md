# GitHub + Vercel Deployment Steps

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `mgainsurancesoftware` (or any name you prefer)
3. Description: "MGA Insurance Software - Comprehensive guides and comparisons for MGA software and policy administration systems"
4. Choose **Public** or **Private**
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **"Create repository"**

## Step 2: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
cd /Users/urielaharoni/Desktop/mgainsurancesoftware
git remote add origin https://github.com/YOUR_USERNAME/mgainsurancesoftware.git
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username.**

## Step 3: Push to GitHub

Run the push command from Step 2. You'll be prompted for your GitHub credentials.

## Step 4: Deploy to Vercel

1. Go to https://vercel.com/dashboard
2. Click **"Add New..."** → **"Project"**
3. Click **"Import Git Repository"**
4. Find and select your `mgainsurancesoftware` repository
5. Click **"Import"**

## Step 5: Configure Vercel Project

Vercel will auto-detect settings:
- **Framework Preset:** Other (or leave blank)
- **Root Directory:** `./` (default)
- **Build Command:** Leave empty (static site)
- **Output Directory:** Leave empty (static site)
- **Install Command:** Leave empty

Click **"Deploy"**

## Step 6: Add Custom Domain

After deployment:

1. Go to your project dashboard
2. Click **"Settings"** → **"Domains"**
3. Add `mgainsurancesoftware.com`
4. Add `www.mgainsurancesoftware.com` (optional)
5. Follow DNS configuration instructions

Vercel will provide DNS records to add to your domain registrar.

## Step 7: Verify Deployment

1. Visit your Vercel deployment URL (e.g., `mgainsurancesoftware.vercel.app`)
2. Test all pages
3. Once DNS propagates, visit `https://mgainsurancesoftware.com`

## Troubleshooting

### If git push asks for credentials:
- Use a Personal Access Token instead of password
- Create one at: https://github.com/settings/tokens
- Select "repo" scope
- Use token as password when prompted

### If Vercel can't find repository:
- Make sure repository is public, OR
- Authorize Vercel to access your GitHub account
- Go to Vercel Settings → Git → Connect GitHub

