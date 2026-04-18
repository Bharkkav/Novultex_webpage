# Deployment Guide - Novultex Next.js Website

Complete step-by-step instructions to deploy your Next.js site to various platforms.

---

## 🚀 Vercel Deployment (Recommended - Free & Easiest)

Vercel is the company behind Next.js, so it's the easiest way to deploy.

### Step 1: Push Code to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/Novultex-nextjs.git
git push -u origin main
```

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "Add New" → "Project"
4. Select your GitHub repo
5. Click "Deploy"

✅ Your site is live! Vercel gives you a free `.vercel.app` domain.

### Step 3: Connect Custom Domain
1. In Vercel project settings
2. Go to "Domains"
3. Add your custom domain
4. Follow DNS instructions from your domain registrar

---

## 🌐 Netlify Deployment (Free Alternative)

### Step 1: Create Netlify Account
1. Go to [netlify.com](https://netlify.com)
2. Sign up (GitHub recommended)

### Step 2: Deploy
1. Click "Add new site" → "Import an existing project"
2. Select GitHub
3. Choose your repository
4. Build settings (usually auto-detected):
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Deploy

### Step 3: Custom Domain
In site settings → Domain management → add your domain

---

## 💻 Self-Hosted (cPanel/Traditional Hosting)

### Build Step
```bash
npm run build
```

This creates a `.next` folder with all compiled files.

### Option A: Node.js Hosting
If your host supports Node.js:
1. Upload entire project
2. Install dependencies: `npm install`
3. Run: `npm run build && npm run start`
4. Use a process manager like PM2

### Option B: Static Export (Limited Features)
Add to `next.config.js`:
```javascript
const nextConfig = {
  output: 'export',
  // ... other config
}
```

Then:
```bash
npm run build
```

Upload the `out` folder to your `public_html`.

---

## 🐳 Docker Deployment

### Create Dockerfile
```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source
COPY . .

# Build
RUN npm run build

# Expose port
EXPOSE 3000

# Start
CMD ["npm", "start"]
```

### Build & Run Locally
```bash
docker build -t Novultex-nextjs .
docker run -p 3000:3000 Novultex-nextjs
```

### Deploy to Platforms
- **Railway.app** - Easy Docker deployment
- **Render.com** - Free tier available
- **DigitalOcean** - Droplet with Docker
- **AWS** - ECS or Elastic Beanstalk

---

## 📦 AWS Deployment (Amplify)

### Step 1: Install Amplify CLI
```bash
npm install -g @aws-amplify/cli
amplify configure
```

### Step 2: Initialize Amplify
```bash
amplify init
```

### Step 3: Deploy
```bash
amplify publish
```

Your site is live at an amplifyapp.com domain.

---

## 🔒 Environment Variables

Create `.env.production` before deploying:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

On Vercel/Netlify:
1. Go to project settings
2. Add environment variables
3. Redeploy

---

## 📊 Domain Configuration

### Nameserver Method (Recommended)
1. Buy domain from GoDaddy, Namecheap, etc.
2. Get nameservers from your hosting provider
3. Update domain nameservers in registrar
4. Wait 24-48 hours for DNS propagation

### CNAME Method
1. Create CNAME record pointing to hosting provider
2. Faster than nameserver method
3. Provider will give you exact CNAME value

### A Record Method
1. Point A record to hosting provider's IP
2. Update in domain registrar
3. Wait for DNS propagation

---

## ✅ Pre-Deployment Checklist

- [ ] Update `info@Novultex.com` to your email
- [ ] Update company name/branding
- [ ] Test contact form locally
- [ ] Optimize images (compress and place in `public/`)
- [ ] Update favicon
- [ ] Update meta tags for SEO
- [ ] Test on mobile devices
- [ ] Check for broken links
- [ ] Set up analytics (Google Analytics, Vercel Analytics)
- [ ] Enable HTTPS (automatic on modern hosts)

---

## 🔍 Post-Deployment

### Test Your Site
```
✓ Visit homepage
✓ Click all navigation links
✓ Test contact form
✓ Test mobile responsiveness
✓ Check page load speed
✓ Verify images load correctly
```

### Monitor Performance
- **Vercel Analytics** - Built-in
- **Google Analytics** - Add to layout.tsx
- **Lighthouse** - Chrome DevTools

### Keep Updated
```bash
npm update
npm audit fix
```

---

## 🆘 Troubleshooting Deployments

### "Build Failed"
- Check build logs
- Ensure `npm run build` works locally
- Verify all imports are correct
- Check for TypeScript errors

### "Site Won't Load"
- Check DNS configuration
- Verify environment variables
- Check browser console for errors
- Check server logs

### "Contact Form Not Working"
- Verify email configuration
- Check API route logs
- Test with form data locally
- Check email service credentials

### "Slow Performance"
- Enable image optimization
- Check bundle size with `npm run build`
- Enable caching headers
- Use CDN for static assets

---

## 📞 Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Netlify Docs**: https://docs.netlify.com
- **AWS Docs**: https://docs.aws.amazon.com

---

## 💡 Pro Tips

1. **Enable Automatic Deployments** - Deploy on every git push
2. **Set Up Preview Deployments** - Test PRs before merging
3. **Use Environment Variables** - Keep secrets secure
4. **Enable Monitoring** - Get alerts for errors
5. **Regular Backups** - Use git for version control
6. **Update Dependencies** - Keep packages current
7. **Test Before Deploy** - Run `npm run build` locally first

---

**Happy Deploying! 🎉**
