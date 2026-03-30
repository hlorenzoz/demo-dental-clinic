<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Mandatory Project Protocols

### 1. Visual Assets (Nano Banana Pro)
- **Generation**: All images MUST be generated using AI toolsets (`generate_image`).
- **Conversion**: Convert all generated images to `.webp` format for performance.
- **Hosting**: Upload to Cloudflare R2. Assets served via: `https://cdn.hlorenzoz.com/dental_clinic_1_minimalist/`.
- **Implementation**: Reference ONLY the CDN URLs in the codebase. No local `/public` assets for images.

### 2. Test-Driven Development (TDD)
- **Pre-requisite**: Functional and E2E tests (Playwright) MUST be created for every feature BEFORE implementation.
- **Coverage**: Ensure 100% coverage for core conversion paths (forms, hero CTAs, navigation).
- **Automation**: Tests must pass before any code is committed or deployed.

### 3. Quality Assurance (QA) Protocols
- **Accessibility (a11y)**: Every page must maintain a Lighthouse Accessibility score of 95+. Use semantic HTML and proper ARIA labels.
- **Responsive Audit**: New features must be verified on Desktop, Tablet, and Mobile viewports via Playwright.
- **Visual Regression**: Perform manual visual audits after image generation to ensure "Clinical Sanctuary" aesthetic consistency.
- **E2E Validation**: Every implementation PR must include a passing `bun run test:e2e` report.
- **SEO Hygiene**: Title tags, meta descriptions, and OpenGraph tags must be uniquely defined and verified for every new page. Implement Structured Data (JSON-LD) for Rich Results (Breadcrumb, LocalBusiness, FAQPage, ReviewSnippet) following Google Search Central standards.
- **Rich Results**: Every page must implement Schema.org microdata/JSON-LD (BreadcrumbList/LocalBusiness). Specifically, `/faq` must use FAQPage schema, and `/services` must use Product/Service snippets.

### 4. Persistence for AI Agents
- **Engram Memory**: After any significant protocol update or milestone, call `mem_save` to record discoveries, decisions, and established patterns.
- **Project History**: Maintain a clear `CHANGELOG.md` or similar log for session handovers.
- **Context Recovery**: Always call `mem_context` at the start of a session after context compaction.
