# Voice Demo Website

A standalone Next.js website for AI voice agent demos and pricing.

## Project Overview

- **Framework:** Next.js 15.5.9 with App Router
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **TypeScript:** Strict mode enabled
- **Port:** 3001 (development)

## Getting Started

### Development

```bash
npm run dev
```

Visit [http://localhost:3001](http://localhost:3001)

### Build

```bash
npm run build
```

### Production

```bash
npm run start
```

## Project Structure

```
voice-demo/
├── src/
│   ├── app/                    # Next.js pages
│   │   ├── page.tsx           # Homepage
│   │   ├── demo/page.tsx      # Live Demo (CRITICAL)
│   │   ├── pricing/page.tsx   # Pricing
│   │   └── use-cases/page.tsx # Use Cases
│   ├── components/
│   │   ├── layout/            # Navbar, Footer, ScrollToTop
│   │   ├── home/              # Homepage sections
│   │   └── demo/              # Demo form components (CRITICAL)
│   ├── lib/
│   │   ├── constants.ts       # Design tokens, API config
│   │   ├── utils.ts           # Validation, phone formatting
│   │   └── animations.ts      # Framer Motion variants
│   └── types/
│       └── index.ts           # TypeScript interfaces
├── public/                    # Static assets
└── package.json
```

## Key Features

### 1. Live Demo Form (CRITICAL)

Located at `/demo`, this form:
- Accepts name, phone, and email
- Validates all inputs (real-time)
- Auto-formats phone numbers as (XXX) XXX-XXXX
- POSTs to webhook: `https://n8n.digitalytics.us/webhook/get-call`
- Shows success message with user's phone number
- Handles errors (timeout, network, server)

**Webhook Payload:**
```json
{
  "name": "John Doe",
  "phoneNumber": "5551234567",
  "email": "john@example.com"
}
```

### 2. Design System

**Colors:**
- Primary: `#004D3E` (dark green)
- Accent: `#22c55e` (green-500)
- Matches main Digitalytics site

**Fonts:**
- Geist Sans (primary)
- Geist Mono (monospace)

**Components:**
- Buttons: `rounded-full`, `bg-green-800`, shadow effects
- Cards: `rounded-2xl`/`rounded-3xl`, shadow effects
- Animations: fadeInUp, staggerContainer, cardHover

### 3. Pages

- **Homepage:** Hero + Features + How It Works + CTA
- **Live Demo:** Form to trigger AI voice call
- **Pricing:** "Contact for Pricing" placeholder
- **Use Cases:** Focus on Appointment Scheduling

## Testing Checklist

### Form Validation
- [ ] Empty fields show "required" errors
- [ ] Invalid email shows validation error
- [ ] Phone < 10 digits shows validation error
- [ ] Name < 2 characters shows validation error

### Phone Formatting
- [ ] Input: "5551234567" → Display: "(555) 123-4567"
- [ ] Sent to webhook: "5551234567" (cleaned)

### Webhook Integration
- [ ] Successful submission shows success message
- [ ] Network errors display error message
- [ ] Timeout (10s) displays timeout message
- [ ] Success message shows formatted phone number

### Responsive Design
- [ ] Mobile: Hamburger menu works
- [ ] Tablet: Grid layouts adjust
- [ ] Desktop: Full navigation visible

## Environment Variables

None required. Webhook URL is hardcoded in `src/lib/constants.ts`.

## Deployment

This is a standalone project designed for subdomain deployment (e.g., voice.digitalytics.ai).

### Pre-deployment Checklist
- [ ] Build succeeds without errors
- [ ] All pages render correctly
- [ ] Demo form submits to webhook
- [ ] Animations work smoothly
- [ ] Mobile responsive

## Dependencies

- **next:** ^15.5.9
- **react:** ^19.0.0
- **framer-motion:** ^12.23.0
- **tailwindcss:** ^4
- **typescript:** ^5

## Important Notes

- Completely standalone (no dependencies on main project)
- Runs on port 3001 to avoid conflicts
- Design system duplicated from main site
- Focus is on the demo form - critical feature

## Support

For issues or questions, contact the development team.
