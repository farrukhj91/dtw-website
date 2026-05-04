# DTW Website — v2 Patch

## What this patch adds
- React Router (multi-page routing)
- 5 new pages: Services, Platforms, Portfolio, About, Contact
- Updated: App.jsx, Navbar, Footer, index.html, index.css, tailwind.config.js, package.json
- New folders: src/layouts/, src/data/, src/hooks/
- Full consultation form on Contact page
- Detailed case studies on Portfolio page
- Platform comparison table on Platforms page

## How to apply

1. Copy ALL files from this zip into your existing `dtw/` project folder
   (overwrite when prompted — every file here is either new or an update)

2. Install the new dependency:
   npm install

3. Test locally:
   npm run dev

4. When happy, push to GitHub:
   git add .
   git commit -m "v2: multi-page site with services, platforms, portfolio, contact"
   git push

Vercel will auto-deploy on push. No settings changes needed.
