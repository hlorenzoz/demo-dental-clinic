import { test, expect } from '@playwright/test';

test.describe('Ecladent Sanctuary - Full Project Audit', () => {
  
  test('homepage should load with high-conversion elements', async ({ page }) => {
    await page.goto('/');
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
    await expect(h1).toContainText('Restore Your');
    
    // Check for SEO tags
    await expect(page).toHaveTitle(/Ecladent.*Sanctuary/i);
    const description = await page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute('content', /dentistry.*sanctuary/i);

    const primaryCTA = page.getByRole('link', { name: /Book Free Consultation/i });
    await expect(primaryCTA).toBeVisible();
  });

  test('navigation and page existence', async ({ page }) => {
    const mainPages = [
      { name: 'About', path: '/about', text: /Rejection of the Sterile/i },
      { name: 'Team', path: '/team', text: /Clinical Artisans/i },
      { name: 'Services', path: '/services', text: /Clinical Restoration/i },
      { name: 'Restorative', path: '/services/restorative', text: /Structural Mastery/i },
      { name: 'Cosmetic', path: '/services/cosmetic', text: /Invisible Alignment/i },
      { name: 'FAQ', path: '/faq', text: /Curated Clarity/i },
      { name: 'Contact', path: '/contact', text: /Start Your/i }
    ];

    for (const p of mainPages) {
      await page.goto(p.path);
      await expect(page.locator('h1')).toContainText(p.text);
      
      // Verify images are not broken (CDN check)
      const images = page.locator('img');
      const count = await images.count();
      for (let i = 0; i < count; i++) {
        const src = await images.nth(i).getAttribute('src');
        if (src?.includes('cdn.hlorenzoz.com')) {
           const response = await page.request.get(src);
           expect(response.status()).toBe(200);
        }
      }
    }
  });

  test('contact form features', async ({ page }) => {
    await page.goto('/contact');
    await expect(page.getByLabel(/Full Name/i)).toBeVisible();
    await expect(page.getByLabel(/Phone Number|Phone Secure/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /Request/i })).toBeVisible();
  });

  test('Structured Data presence', async ({ page }) => {
    await page.goto('/');
    const script = await page.locator('script[type="application/ld+json"]');
    await expect(script.first()).toBeAttached();
    
    const content = await script.first().innerText();
    const json = JSON.parse(content);
    expect(json["@type"]).toBe('LocalBusiness');
  });

});
