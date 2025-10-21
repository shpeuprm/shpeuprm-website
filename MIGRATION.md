# Migration Guide: HTML to Next.js

This document explains the changes made during the migration from static HTML to Next.js.

## Overview

The website has been completely rebuilt using modern web technologies while preserving all original content and functionality.

## What Changed

### Technology Stack

**Before:**
- Static HTML files
- Inline CSS styles
- Vanilla JavaScript (calendar only)
- No build process

**After:**
- Next.js 14+ with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- React components
- Modern build tooling

### File Structure

**Before:**
```
shpeuprm-website/
├── index.html
├── about.html
├── events.html
├── resources.html
├── contact.html
├── assets/
│   └── style.css
└── calendar-app/
    └── src/
```

**After:**
```
shpeuprm-website/
├── app/                    # Next.js pages
│   ├── about/
│   ├── api/contact/       # NEW: Server-side form handling
│   ├── calendar/          # NEW: Integrated calendar
│   ├── contact/
│   ├── events/
│   ├── resources/
│   ├── layout.tsx         # NEW: Shared layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── manifest.ts        # NEW: PWA support
│   └── sitemap.ts         # NEW: SEO sitemap
├── components/            # NEW: Reusable components
│   ├── Calendar.tsx
│   ├── Header.tsx
│   └── Footer.tsx
└── public/                # Static assets
```

## Key Improvements

### 1. Reusable Components

**Before:** Header and footer duplicated across all pages
**After:** Single Header and Footer components shared across all pages

### 2. Consistent Styling

**Before:** Mix of inline styles and external CSS
**After:** Unified design system with Tailwind CSS

### 3. Type Safety

**Before:** Plain JavaScript (calendar only)
**After:** Full TypeScript coverage

### 4. Better Navigation

**Before:** Simple anchor tags
**After:** Client-side navigation with Next.js Link (faster page transitions)

### 5. SEO Optimization

**Before:** Basic HTML meta tags
**After:**
- Dynamic metadata for each page
- Automatic sitemap generation
- Open Graph tags for social sharing
- robots.txt for search engines

### 6. Contact Form

**Before:** mailto: link (opens email client)
**After:**
- Server-side API route
- Form validation
- Better user experience
- Ready for email service integration

### 7. Calendar Integration

**Before:** Separate standalone app
**After:** Fully integrated React component with events data

### 8. Performance

**Before:** No optimization
**After:**
- Code splitting
- Image optimization (Next.js Image component ready)
- Static page generation
- Faster load times

## Content Mapping

All content has been preserved and enhanced:

| Old File | New Location | Enhancements |
|----------|--------------|--------------|
| `index.html` | `app/page.tsx` | Hero section, feature cards, CTAs |
| `about.html` | `app/about/page.tsx` | Better typography, values section |
| `events.html` | `app/events/page.tsx` | Event cards, past events section |
| `resources.html` | `app/resources/page.tsx` | Category organization, better links |
| `contact.html` | `app/contact/page.tsx` | Working form, social links |
| `calendar-app/` | `app/calendar/page.tsx` | React component, event integration |

## Breaking Changes

### Old HTML Files

The old HTML files are still in the repository but are no longer used. They can be safely removed once you've verified the new site works correctly.

### URLs

All URLs remain the same:
- `/` - Home
- `/about` - About
- `/events` - Events
- `/resources` - Resources
- `/contact` - Contact
- `/calendar` - Calendar (new)

### Contact Form

The contact form no longer uses `mailto:`. You'll need to integrate an email service to receive form submissions. See README.md for instructions.

## How to Remove Old Files

Once you've tested the new site, you can remove:

```bash
# Remove old HTML files
rm index.html about.html events.html resources.html contact.html

# Remove old assets (styles now in Tailwind)
rm -rf assets/

# Remove old calendar app (now integrated)
rm -rf calendar-app/
```

## Testing Checklist

- [ ] Home page loads correctly
- [ ] All navigation links work
- [ ] About page displays mission and values
- [ ] Events page shows upcoming events
- [ ] Resources page links work
- [ ] Contact form validates input
- [ ] Calendar displays current month
- [ ] Calendar navigation works (prev/next month)
- [ ] Mobile responsive design works
- [ ] All pages have proper SEO metadata

## Next Steps

1. **Install dependencies:** `npm install`
2. **Run development server:** `npm run dev`
3. **Test all pages:** Visit http://localhost:3000
4. **Integrate email service:** Update `app/api/contact/route.ts`
5. **Add real content:** Update events, resources, etc.
6. **Deploy:** Push to GitHub and deploy to Vercel

## Getting Help

If you encounter any issues during the migration:

1. Check the README.md for detailed setup instructions
2. Review the build output for errors
3. Check the Next.js documentation: https://nextjs.org/docs
4. Review Tailwind CSS docs: https://tailwindcss.com/docs

## Rollback Plan

If you need to rollback to the old HTML version:

```bash
git checkout HEAD~1
```

The old HTML files are preserved in git history.
