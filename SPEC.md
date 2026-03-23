# Product Specification: Aura Dental Minimalist

## 1. Overview
A highly polished, conversion-optimized Next.js web application for Aura Dental Collective. The site emphasizes a minimalist aesthetic, white space, and subtle glassmorphism to convey a high-end, $10,000+ brand presence.

## 2. Architecture & Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS + raw Vanilla CSS for complex Glassmorphism.
- **Components**: React Server Components (RSC) where possible.
- **Animations**: Framer Motion.
- **Testing**: Playwright (E2E) and Vitest (Unit).
- **Deployment**: Vercel.

## 3. Required Pages & Routing
1. `/` (Home)
2. `/about` (About Us)
3. `/team` (Meet The Team)
4. `/contact` (Contact)
5. `/services` (Services Hub)
6. `/services/dental-implants`
7. `/services/invisalign`
8. `/services/cosmetic-dentistry`
9. `/services/general-dentistry`
10. `/services/emergency-care`
11. `/privacy-policy`
12. `/terms-of-service`
13. `/cookie-policy`
14. `/faq`
15. `/sitemap`

## 4. Testing Requirements (TDD)
Before any component is built, Playwright tests must be written to verify:
- Navigation header links map to the correct pages.
- The Contact form successfully handles submissions (mocked).
- Service sub-pages render without 404s.
- `DESIGN.md` rules (e.g., absence of hard borders) are respected where testable.

## 5. Deployment Pipeline
The application will be deployed automatically to Vercel upon push to the `main` branch of its respective GitHub repository.
