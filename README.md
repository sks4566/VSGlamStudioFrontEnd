# VS Glam Studio Dynamic React Demo

A fully dynamic React + Vite project that mirrors the layout and structure of the referenced makeup portfolio site while fetching content from APIs.

## Stack
- Vite + React 18
- React Router
- Tailwind CSS

## Getting Started
```bash
npm install
npm run dev
```

## Environment
Create `.env` from `.env.example`:
```bash
cp .env.example .env
```

- `VITE_API_BASE_URL`: Base URL for your APIs.
- `VITE_USE_MOCK`: `true` uses the built-in mock data (no backend required).

## API Contract
All pages are driven by these endpoints. Replace them with your real APIs later.

Base: `${VITE_API_BASE_URL}`

### GET `/site`
```json
{
  "brand": {
    "name": "VS Glam Studio",
    "tagline": "Makeup Artist & Educator",
    "location": "Bhopal",
    "heroImage": "https://..."
  },
  "hero": {
    "title": "Soft glam for modern brides",
    "subtitle": "...",
    "primaryCta": "Book a consultation",
    "secondaryCta": "Explore services"
  },
  "stats": [{ "label": "Brides styled", "value": "450+" }],
  "about": {
    "title": "Signature glow",
    "description": "...",
    "image": "https://...",
    "highlights": ["Airbrush-ready complexion work"]
  },
  "brandLogos": ["https://..."],
  "cta": {
    "title": "Ready to glow?",
    "description": "...",
    "button": "Schedule your slot"
  },
  "socials": [{ "label": "Instagram", "url": "https://instagram.com" }],
  "contact": {
    "email": "hello@vsglamstudio.com",
    "phone": "+91 99999 12345",
    "studio": "Studio 24, Bhopal",
    "hours": "Mon-Sat · 10 AM - 7 PM"
  }
}
```

### GET `/services`
```json
[
  {
    "slug": "bridal",
    "title": "Bridal Makeup",
    "short": "...",
    "heroImage": "https://...",
    "packages": [
      { "name": "Signature Bride", "price": "₹40K", "details": "2 looks + trial" }
    ]
  }
]
```

### GET `/services/:slug`
Returns a single service object.

### GET `/courses`
```json
[
  {
    "slug": "basic-pro",
    "title": "Basic to Pro Makeup",
    "duration": "10 days",
    "level": "Beginner",
    "summary": "...",
    "image": "https://...",
    "modules": ["Skin prep fundamentals"]
  }
]
```

### GET `/courses/:slug`
Returns a single course object.

### GET `/gallery`
```json
[
  { "id": "gal-1", "title": "Soft peach bridal", "category": "Bridal", "image": "https://..." }
]
```

### GET `/reviews`
```json
[
  { "name": "Riya Sharma", "role": "Bride", "quote": "..." }
]
```

### GET `/blog`
```json
[
  { "slug": "bridal-skin-prep", "title": "...", "excerpt": "...", "date": "2026-01-18", "cover": "https://...", "content": "..." }
]
```

### GET `/blog/:slug`
Returns a single blog post.

### GET `/contact`
```json
{
  "email": "hello@vsglamstudio.com",
  "phone": "+91 99999 12345",
  "studio": "Studio 24, Bhopal",
  "hours": "Mon-Sat · 10 AM - 7 PM"
}
```

### POST `/contact`
```json
{ "name": "...", "email": "...", "phone": "...", "message": "..." }
```

### POST `/appointments`
```json
{ "name": "...", "email": "...", "phone": "...", "eventType": "...", "eventDate": "YYYY-MM-DD", "city": "...", "notes": "..." }
```

## Notes
- All image URLs are expected to come from your API.
- Tailwind theme and layout are customized to match the vibe of the referenced site but with original styling.
