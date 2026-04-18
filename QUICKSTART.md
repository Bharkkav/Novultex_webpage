# ⚡ Quick Setup Guide

Get your Novultex Next.js site running in 5 minutes!

## 1️⃣ Install Dependencies
```bash
npm install
```

## 2️⃣ Start Development Server
```bash
npm run dev
```

Your site is now running at `http://localhost:3000` 🎉

## 3️⃣ Make Changes
- Edit files in the `app/` folder
- Changes reload automatically (hot reload)
- Open `http://localhost:3000` in your browser

## 4️⃣ Build for Production
```bash
npm run build
npm start
```

## 5️⃣ Deploy
Choose one option below:

### 🟣 Vercel (Recommended - 1 minute)
```bash
npm install -g vercel
vercel
```
Follow prompts and your site is live!

### 🟢 Netlify (2 minutes)
1. Push code to GitHub
2. Go to netlify.com
3. Connect repo and deploy
4. Done!

### 🔵 Traditional Host (5 minutes)
1. Run `npm run build`
2. Upload to `public_html`
3. Point domain to host

---

## 📝 Common Customizations

### Change Email
Search for `info@Novultex.com` and replace everywhere

### Change Brand Color
Edit `tailwind.config.js`:
```javascript
accent: '#00c896', // Your color here
```

### Update Logo
Replace the "Z" badge in `/components/Navigation.tsx` and `/components/Footer.tsx`

### Add Your Images
Put images in `public/` folder and use:
```jsx
<img src="/image-name.jpg" alt="description" />
```

### Edit Content
- **Home page**: `/app/page.tsx`
- **About page**: `/app/about/page.tsx`
- **Services**: `/app/services/page.tsx`
- **Projects**: `/app/projects/page.tsx`
- **Contact**: `/app/contact/page.tsx`

---

## 🐛 Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Dependencies not installing?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build errors?**
```bash
npm run lint
```

---

## 📚 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [React Docs](https://react.dev)
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Full deployment guide

---

## ✅ Ready to Deploy?

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete deployment instructions for:
- ✅ Vercel (recommended)
- ✅ Netlify
- ✅ Traditional hosting
- ✅ Docker
- ✅ AWS
- ✅ And more!

---

**Questions?** Check the main README.md
