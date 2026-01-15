# SHPE UPRM Website

Modern website for the Society of Hispanic Professional Engineers at University of Puerto Rico, Mayagüez Campus.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (recommended)

## Features

- ✅ Modern, responsive design
- ✅ SEO optimized with metadata and sitemap
- ✅ Interactive event calendar
- ✅ Contact form with API route
- ✅ Reusable components
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for consistent styling
- ✅ Mobile-first responsive design

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/shpeuprm-website.git
cd shpeuprm-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
shpeuprm-website/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── api/               # API routes
│   │   └── contact/       # Contact form API
│   ├── calendar/          # Calendar page
│   ├── contact/           # Contact page
│   ├── events/            # Events page
│   ├── resources/         # Resources page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── manifest.ts        # PWA manifest
│   └── sitemap.ts         # Sitemap for SEO
├── components/            # Reusable React components
│   ├── Calendar.tsx       # Interactive calendar
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Site footer
├── public/                # Static assets
│   └── robots.txt         # SEO robots file
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies
```

## Design System

### Colors

The website uses a consistent color palette defined in Tailwind config:

- **Primary:** `#003366` (Navy blue)
- **Secondary:** `#006341` (Dark green)
- **Accent:** `#ffc107` (Gold/Yellow)

### Components

Reusable Tailwind classes defined in `globals.css`:

- `.container-custom` - Max-width container with responsive padding
- `.btn-primary` - Primary button style
- `.btn-secondary` - Secondary button style
- `.card` - Card component with shadow
- `.section-heading` - Large section headings
- `.section-subheading` - Subsection headings

## Pages

- **Home (`/`)** - Welcome page with hero section and feature highlights
- **About (`/about`)** - Mission, vision, and what SHPE offers
- **Events (`/events`)** - Upcoming events and past highlights
- **Resources (`/resources`)** - Academic and professional resources
- **Contact (`/contact`)** - Contact form and information
- **Calendar (`/calendar`)** - Interactive event calendar

## Contact Form Integration

The contact form currently logs submissions to the console. To enable email functionality:

1. Choose an email service (SendGrid, AWS SES, Resend, etc.)
2. Update `app/api/contact/route.ts` with your email service integration
3. Add required environment variables in `.env.local`

Example with SendGrid:
```typescript
// Install: npm install @sendgrid/mail
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

await sgMail.send({
  to: 'shpe.uprm@upr.edu',
  from: 'noreply@shpeuprm.com',
  subject: `Contact Form: ${name}`,
  text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
});
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Google Cloud Platform
- Self-hosted with Node.js

## Environment Variables

Create a `.env.local` file for local development:

```env
# Email service (when integrated)
SENDGRID_API_KEY=your_api_key_here
# or
RESEND_API_KEY=your_api_key_here
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## SEO Features

- Meta tags for each page
- Open Graph tags for social sharing
- Sitemap generation (`/sitemap.xml`)
- Robots.txt for search engines
- Semantic HTML structure
- Fast page loads with Next.js optimization

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is maintained by SHPE UPRM.

## Contact

SHPE UPRM - shpe.uprm@upr.edu

Project Link: [https://github.com/yourusername/shpeuprm-website](https://github.com/yourusername/shpeuprm-website)

---

Built with ❤️ by SHPE UPRM



pulll dev 

