# Deployment Guide - CV Portfolio

This guide will walk you through deploying your CV website to Vercel with a custom domain (aaronglewis.com).

## Prerequisites

- A GitHub account
- A domain name (we'll cover purchasing one if needed)

---

## Step 1: Prepare Your Code for Git

### 1.1 Initialize Git Repository (if not already done)

```bash
git init
git add .
git commit -m "Initial commit - CV portfolio"
```

### 1.2 Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Name it: `cv` or `portfolio` or `aaronglewis-cv`
4. Choose **Public** or **Private** (Public is fine for a CV site)
5. **Don't** initialize with README, .gitignore, or license (we already have these)
6. Click **"Create repository"**

### 1.3 Push Your Code to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

---

## Step 2: Purchase a Domain Name

### Option A: Cloudflare Registrar (Recommended - Cheapest)

1. Go to [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/)
2. Search for `aaronglewis.com`
3. Add to cart and complete purchase (~$8-12/year)
4. Cloudflare will automatically set up DNS management

### Option B: Namecheap

1. Go to [Namecheap.com](https://www.namecheap.com)
2. Search for `aaronglewis.com`
3. Add to cart and purchase (~$10-15/year)
4. Free privacy protection included

### Option C: Google Domains (Now Squarespace Domains)

1. Go to [domains.google](https://domains.google)
2. Search and purchase (~$12/year)

**Note:** Domain registration can take a few minutes to a few hours to fully activate.

---

## Step 3: Deploy to Vercel

### 3.1 Sign Up for Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"** (recommended - easiest integration)
4. Authorize Vercel to access your GitHub account

### 3.2 Import Your Project

1. Once logged in, click **"Add New..."** → **"Project"**
2. You'll see your GitHub repositories listed
3. Find your CV repository and click **"Import"**
4. Vercel will auto-detect Next.js settings:
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (leave as is)
   - **Build Command:** `next build` (auto-detected)
   - **Output Directory:** `.next` (auto-detected)
5. Click **"Deploy"**

### 3.3 Wait for Deployment

- Vercel will build and deploy your site
- This usually takes 1-2 minutes
- You'll get a URL like: `your-project-name.vercel.app`
- **Test this URL** to make sure everything works!

---

## Step 4: Add Custom Domain to Vercel

### 4.1 Add Domain in Vercel

1. In your Vercel project dashboard, go to **"Settings"** tab
2. Click **"Domains"** in the left sidebar
3. Enter your domain: `aaronglewis.com`
4. Click **"Add"**
5. Vercel will also suggest adding `www.aaronglewis.com` - click **"Add"** for that too

### 4.2 Get DNS Configuration from Vercel

After adding the domain, Vercel will show you DNS records to add. You'll see something like:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Keep this page open** - you'll need these values!

---

## Step 5: Configure DNS Records

### If Using Cloudflare:

1. Log into [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Select your domain
3. Go to **"DNS"** → **"Records"**
4. Delete any existing A or CNAME records for `@` and `www`
5. Add the records Vercel provided:
   - Click **"Add record"**
   - For root domain (`@`):
     - Type: `A`
     - Name: `@` (or leave blank)
     - IPv4 address: `76.76.21.21` (use Vercel's value)
     - Proxy status: **DNS only** (gray cloud, not orange)
     - TTL: Auto
   - Click **"Save"**
   - For `www` subdomain:
     - Type: `CNAME`
     - Name: `www`
     - Target: `cname.vercel-dns.com` (use Vercel's value)
     - Proxy status: **DNS only**
     - TTL: Auto
     - Click **"Save"**

### If Using Namecheap:

1. Log into [Namecheap](https://www.namecheap.com)
2. Go to **"Domain List"** → Click **"Manage"** next to your domain
3. Go to **"Advanced DNS"** tab
4. Delete existing A and CNAME records
5. Add new records:
   - **A Record:**
     - Type: `A Record`
     - Host: `@`
     - Value: `76.76.21.21` (use Vercel's value)
     - TTL: Automatic
   - **CNAME Record:**
     - Type: `CNAME Record`
     - Host: `www`
     - Value: `cname.vercel-dns.com` (use Vercel's value)
     - TTL: Automatic
6. Click the **"Save"** icon

### If Using Google Domains:

1. Log into [Google Domains](https://domains.google.com)
2. Click on your domain
3. Go to **"DNS"** section
4. Scroll to **"Custom resource records"**
5. Add the A and CNAME records Vercel provided
6. Save changes

---

## Step 6: Wait for DNS Propagation

- DNS changes can take **5 minutes to 48 hours** to propagate
- Usually it's **5-30 minutes** for most cases
- You can check status in Vercel dashboard - it will show "Valid Configuration" when ready
- Test by visiting `aaronglewis.com` in your browser

---

## Step 7: SSL Certificate (Automatic!)

- Vercel **automatically** provisions SSL certificates via Let's Encrypt
- Your site will be available at both:
  - `http://aaronglewis.com` (redirects to HTTPS)
  - `https://aaronglewis.com` (secure)
- This happens automatically - no action needed!

---

## Step 8: Verify Everything Works

1. Visit `https://aaronglewis.com` - should load your CV
2. Visit `https://www.aaronglewis.com` - should also work
3. Check that all links work correctly
4. Test on mobile device
5. Check that dark mode works

---

## Troubleshooting

### Domain Not Working After 24 Hours?

1. **Check DNS records** - Make sure they match exactly what Vercel provided
2. **Check DNS propagation** - Use [whatsmydns.net](https://www.whatsmydns.net) to see if DNS has propagated globally
3. **Clear browser cache** - Try incognito/private browsing
4. **Check Vercel dashboard** - Look for any error messages in the Domains section

### Common Issues:

- **"Invalid Configuration"** in Vercel:
  - Double-check DNS records match exactly
  - Make sure TTL is set correctly
  - Wait a bit longer for propagation

- **Site loads but shows Vercel default page:**
  - Make sure domain is added to the correct Vercel project
  - Check that deployment was successful

- **SSL Certificate Issues:**
  - Wait 24-48 hours for automatic SSL provisioning
  - Check Vercel dashboard for SSL status

---

## Future Updates

Every time you push to GitHub, Vercel will automatically:
1. Detect the changes
2. Build your site
3. Deploy the new version
4. Update your live site

Just do:
```bash
git add .
git commit -m "Update CV"
git push
```

And your site updates automatically! 🚀

---

## Cost Summary

- **Vercel Hosting:** FREE (Hobby plan is perfect for personal sites)
- **Domain Name:** ~$8-15/year
- **SSL Certificate:** FREE (automatic via Vercel)
- **Total:** ~$8-15/year

---

## Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Domain Setup Guide](https://vercel.com/docs/concepts/projects/domains)
- [Cloudflare DNS Help](https://developers.cloudflare.com/dns/)

Good luck with your deployment! 🎉
