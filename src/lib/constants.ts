// Design tokens matching main site
export const COLORS = {
  primary: '#004D3E',
  primaryLight: '#0a5f4a',
  accent: '#22c55e',
  accentDark: '#16a34a',
  green400: '#4ade80',
  green500: '#22c55e',
  green800: '#166534',
  emerald500: '#10b981',
  gray50: '#f9fafb',
  gray100: '#f3f4f6',
  gray300: '#d1d5db',
  gray600: '#4b5563',
  gray800: '#1f2937',
  gray900: '#111827',
  red500: '#ef4444',
} as const;

export const FONTS = {
  sans: 'var(--font-geist-sans)',
  mono: 'var(--font-geist-mono)',
} as const;

export const SPACING = {
  sectionPaddingX: 'px-4 sm:px-8 md:px-16 lg:px-32',
  sectionPaddingY: 'py-20',
  sectionPaddingYLarge: 'py-24',
} as const;

export const RADIUS = {
  button: 'rounded-full',
  card: 'rounded-2xl',
  cardLarge: 'rounded-3xl',
} as const;

// API Configuration (kept for backward compatibility)
export const API_CONFIG = {
  webhookUrl: 'https://n8n.digitalytics.us/webhook/get-call',
  timeout: 10000, // 10 seconds
} as const;

// Agent configurations
export const AGENTS = [
  {
    id: 'real-estate' as const,
    name: 'Real Estate Agent',
    tagline: 'Property listings, viewings & more',
    description: 'Fill out the form and receive a live demo call from our Real Estate AI agent within 2 minutes.',
    iconKey: 'home' as const,
    webhookUrl: 'https://n8n.digitalytics.us/webhook/get-call',
  },
  {
    id: 'tourbot' as const,
    name: 'TourBot',
    tagline: 'Travel & Tour FAQ Agent',
    description: 'Fill out the form and receive a live demo call from our TourBot AI agent within 2 minutes.',
    iconKey: 'globe' as const,
    webhookUrl: 'https://n8n.digitalytics.us/webhook/tour-outbound-call',
  },
  {
    id: 'medibook' as const,
    name: 'MediBook',
    tagline: 'AI Medical Receptionist',
    description: 'Fill out the form and receive a live demo call from MediBook — your 24/7 virtual medical receptionist.',
    iconKey: 'stethoscope' as const,
    webhookUrl: 'https://n8n.digitalytics.us/webhook/medical-outbound-call',
  },
];

// Navigation Links
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/demo', label: 'Live Demo' },
  { href: '/use-cases', label: 'Use Cases' },
  { href: '/agents/medibook', label: 'MediBook' },
  { href: '/agents/hvac', label: 'HVAC Agent' },
  { href: '/pricing', label: 'Pricing' },
] as const;

// Company Info
export const COMPANY = {
  name: 'Digitalytics Voice',
  email: 'contact@digitalytics.ai',
  mainWebsite: 'https://digitalytics.ai',
} as const;
