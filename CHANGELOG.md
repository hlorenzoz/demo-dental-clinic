# Changelog

All notable changes to the **Dental Clinic Minimalist** project will be documented in this file.

## [Unreleased]

### Added
- Created `AGENTS.md` with Mandatory Project Protocols (Visual Assets, TDD, QA).
- Initialized `CHANGELOG.md` for project persistence.
- Implemented `team`, `about`, `services`, and `contact` pages with "Clinical Sanctuary" aesthetic.
- Added `JsonLd` structured data across all pages for SEO and Rich Results (Breadcrumb, LocalBusiness, FAQPage).
- Optimized all `Image` components with `sizes` prop for Next.js performance.

### Changed
- Migrated all visual assets to Cloudflare R2 object storage.
- Updated all CDN URLs to `https://cdn.hlorenzoz.com/dental_clinic_1_minimalist/` to match direct custom domain mapping.
- Refined `FAQ` page design with Framer Motion animations and sensory layout.

### Fixed
- Resolved 404 errors by correcting Cloudflare R2 URL path patterns.
- Fixed TypeScript/parsing error in `src/app/faq/page.tsx` related to incorrect bracket placement during imports.
- Fixed image repetition on About and Team pages by generating and uploading 7 unique specialist portraits and staff avatars.
