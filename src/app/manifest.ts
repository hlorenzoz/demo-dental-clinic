import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Aurora Dental Sanctuary',
    short_name: 'Aurora Dental',
    description:
      'Advanced restorative & emergency dentistry in a calm, inclusive environment. Mill Hill, London NW7.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F8FAFA',
    theme_color: '#006060',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en-GB',
    categories: ['health', 'medical', 'lifestyle'],
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
    ],
    screenshots: [
      {
        src: '/screenshots/desktop.png',
        sizes: '1280x800',
        type: 'image/png',
        form_factor: 'wide',
      },
      {
        src: '/screenshots/mobile.png',
        sizes: '390x844',
        type: 'image/png',
        form_factor: 'narrow',
      },
    ],
    prefer_related_applications: false,
  };
}
