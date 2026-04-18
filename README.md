# Novultex Technologies - Next.js Website

A modern, fully-responsive website for Novultex Technologies built with **Next.js 14**, **React 18**, **TypeScript**, and **Tailwind CSS**.

This is a complete rewrite of the original HTML/CSS/JS website with modern best practices and performance optimizations.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# Visit http://localhost:3000
```

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm run start
```

---

## 📁 Project Structure

```
Novultex-nextjs/
├── app/                      # Next.js App Router
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   ├── about/page.tsx        # About page
│   ├── services/page.tsx     # Services page
│   ├── projects/page.tsx     # Projects portfolio
│   └── contact/page.tsx      # Contact form page
├── components/
│   ├── Navigation.tsx        # Main navigation header
│   └── Footer.tsx            # Footer component
├── lib/
│   └── hooks.ts              # Custom React hooks
├── styles/
│   └── globals.css           # Tailwind & global styles
├── public/                   # Static assets
├── package.json              # Dependencies
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md               # This file
```

---

## 🛠 Key Technologies

- **Next.js 14** - React framework with App Router
- **React 18** - UI library with hooks
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS transformations

---

## ✨ Features

### Pages Implemented
✅ **Home** - Hero section, services grid, process, why us, CTA
✅ **About** - Company story, mission/vision, values, founder
✅ **Services** - Detailed service offerings (6 services)
✅ **Projects** - Portfolio with filtering and modal details
✅ **Contact** - Contact form with email integration

### Components & Functionality
✅ Responsive navigation with mobile menu
✅ Smooth scroll detection
✅ Form handling with mailto integration
✅ Project filtering system
✅ Modal for project details
✅ Intersection observer for animations
✅ Mobile-first responsive design
✅ Accessibility (semantic HTML, ARIA labels)

---

## 🎨 Customization

### Update Email Address
Replace `info@Novultex.com` in:
- `/components/Footer.tsx`
- `/app/contact/page.tsx`
- Footer in all pages

### Change Brand Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  accent: '#00c896',  // Change this
  primary: '#1a202c',
  dark: '#0f1419',
}
```

### Update Company Name
Search and replace `Novultex` and `Novultex` throughout the codebase.

### Replace Logo
The logo is currently a simple "Z" badge. To use a custom logo:
1. Add your logo to `public/` folder
2. Update Navigation and Footer components to import and display it

### Add Your Images/Assets
Place all images in the `public/` folder:
```
public/
├── logo.png
├── favicon.ico
├── images/
│   ├── project1.jpg
│   └── project2.jpg
```

Then reference them in components:
```jsx
<img src="/images/project1.jpg" alt="Project" />
// or with Next.js Image component
<Image src="/images/project1.jpg" alt="Project" width={400} height={300} />
```

---

## 📝 Contact Form

### Current Setup
The form uses `mailto:` links to open the user's default email client with pre-filled content.

### To Enable Real Email Submissions

#### Option 1: Formspree (Recommended)
1. Go to [formspree.io](https://formspree.io) and sign up
2. Create a new form and get your endpoint
3. Create an API route `/app/api/contact/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()

  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (response.ok) {
    return NextResponse.json({ success: true })
  }
  return NextResponse.json({ error: 'Failed to send' }, { status: 400 })
}
```

4. Update the form in `/app/contact/page.tsx` to use the API

#### Option 2: SendGrid
1. Get API key from [SendGrid](https://sendgrid.com)
2. Create API route with SendGrid SDK
3. Update contact form to call the route

#### Option 3: Your Own Backend
Create `/app/api/contact/route.ts` and handle emails with your preferred service.

---

## 🚀 Deployment

### Option 1: Vercel (Recommended - Free)
```bash
npm install -g vercel
vercel
```
Just follow the prompts. Your site will be live instantly.

### Option 2: Netlify
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect your GitHub repo
4. Deploy with one click

### Option 3: Traditional Hosting (cPanel, etc.)
1. Build the project: `npm run build`
2. The `out` directory contains static files
3. Upload to `public_html` on your host
4. Configure your hosting to serve from the build directory

### Option 4: Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 🔍 SEO

### Already Implemented
✅ Metadata in root layout
✅ Semantic HTML structure
✅ Open Graph meta tags (can be added)
✅ Mobile-responsive design
✅ Fast performance (Next.js optimizations)

### To Improve
Add Open Graph and Twitter Card meta tags:
```typescript
export const metadata: Metadata = {
  title: 'Novultex | Embedded Systems, IoT & Software',
  openGraph: {
    title: 'Novultex Technologies',
    description: '...',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
  },
}
```

---

## 📦 Environment Variables

Create `.env.local` for local development:
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Create `.env.production` for production:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## 🐛 Troubleshooting

### "Cannot find module" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### TypeScript errors
```bash
npm run lint
```

### Images not loading
- Ensure images are in `public/` folder
- Use `/image-name.jpg` (with leading slash)
- Check case sensitivity on Linux servers

---

## 📱 Responsive Breakpoints

Configured in Tailwind:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

## 🔐 Security

✅ Built-in XSS protection (React)
✅ No SQL injection (no database in this version)
✅ CSRF protection (Next.js handles this)
✅ Content Security Policy (can be configured)

---

## 📊 Performance

- **Core Web Vitals**: Optimized
- **Image Optimization**: Next.js Image component ready
- **Code Splitting**: Automatic via Next.js
- **Lazy Loading**: Intersection Observer for animations
- **CSS**: Tailwind purges unused styles in production

---

## 🎯 Next Steps

1. **Customize Content** - Update text, images, and branding
2. **Set Up Email** - Configure contact form backend
3. **Add Analytics** - Integrate Google Analytics or similar
4. **Deploy** - Choose your hosting platform
5. **Domain** - Point your domain to the deployment
6. **SSL** - Enable HTTPS (usually automatic on modern hosts)

---

## 📞 Support & Customization

For help with:
- Custom features
- Email backend integration
- Deployment issues
- Design changes

Refer to the official documentation:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)

---

## 📄 License

This project is built for Novultex Technologies. All content and branding © 2025 Novultex Technologies.

---

**Built with ❤️ using Next.js**
