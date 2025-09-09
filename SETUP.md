# Dagmar Mazalová - Coaching Website Setup

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-09-09

# Sanity Revalidation Secret (generate a random string)
SANITY_REVALIDATE_SECRET=your-revalidation-secret

# Contact Form (optional - for email sending)
RESEND_API_KEY=your-resend-api-key

# Next.js
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Sanity Setup

1. Create a new Sanity project at https://sanity.io
2. Copy the project ID and dataset name to your `.env.local` file
3. Deploy the Sanity Studio:
   ```bash
   npm run sanity deploy
   ```
4. Set up webhook for revalidation in Sanity Studio:
   - Go to Settings > Webhooks
   - Add webhook URL: `https://your-domain.com/api/revalidate`
   - Set secret to match `SANITY_REVALIDATE_SECRET`

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Open Sanity Studio:
   ```bash
   npm run sanity dev
   ```

## Deployment

### Vercel

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy

### Sanity Studio

Deploy Sanity Studio separately:
```bash
npm run sanity deploy
```

## Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript
- ✅ Tailwind CSS with custom color palette
- ✅ Framer Motion animations
- ✅ Sanity CMS integration
- ✅ Responsive design
- ✅ Contact form with API
- ✅ SEO optimization
- ✅ Czech language support

## Pages

- `/` - Landing page with circle visualization
- `/sluzby` - Services overview
- `/o-mne` - About page
- `/cenik` - Pricing page
- `/kontakt` - Contact page with form
- `/studio` - Sanity Studio

## Content Management

All content is managed through Sanity Studio. After deployment, you can:

1. Add/edit site settings
2. Create and manage pages
3. Add testimonials
4. Update offerings
5. Manage FAQ content

The website will automatically revalidate when content is updated in Sanity.
