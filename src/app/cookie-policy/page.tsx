import { Metadata } from 'next';
import { StandardContent } from '@/components/ui/StandardContent';

export const metadata: Metadata = {
  title: 'Cookie Policy | Aura Dental Collective',
  description: 'How we use cookies to enhance your digital experience.',
};

export default function CookiePolicy() {
  return (
    <StandardContent 
      title="Cookie Policy" 
      subtitle="How we use cookies to enhance your digital experience."
    >
      <section>
        <p>
          We use cookies and similar technologies to understand how you interact with our website 
          and to provide a seamless, high-end browsing experience.
        </p>
      </section>

      <section>
        <h2>Essential Cookies</h2>
        <p>
          These are required for technical reasons such as maintaining your security settings 
          and ensuring the site loads correctly.
        </p>
      </section>

      <section>
        <h2>Analytics</h2>
        <p>
          We use anonymized analytics to improve our content and navigation flow, ensuring 
          that our patients can find the restorative information they need efficiently.
        </p>
      </section>
    </StandardContent>
  );
}
