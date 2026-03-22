import { Metadata } from 'next';
import { StandardContent } from '@/components/ui/StandardContent';

export const metadata: Metadata = {
  title: 'Privacy Policy | Aura Dental Collective',
  description: 'How we manage and protect your personal and clinical data.',
};

export default function PrivacyPolicy() {
  return (
    <StandardContent 
      title="Privacy Policy" 
      subtitle="How we manage and protect your personal and clinical data."
    >
      <section>
        <h2>The Commitment</h2>
        <p>
          At Aura Dental Collective, we are committed to protecting the privacy and security of our patients. 
          This policy outlines how we collect, use, and safeguard your personal information in 
          accordance with UK GDPR and clinical standards.
        </p>
      </section>

      <section>
        <h2>1. Data Collection</h2>
        <p>
          We collect personal information necessary for your clinical care, including contact details, 
          medical history, and payment information.
        </p>
      </section>

      <section>
        <h2>2. Data Usage</h2>
        <p>
          Your data is used solely for providing dental treatment, managing your appointments, 
          and ensuring clinical safety.
        </p>
      </section>

      <section>
        <h2>3. Your Rights</h2>
        <p>
          You have the right to access, correct, or request the deletion of your personal data. 
          Please contact our Patient Concierge for any inquiries.
        </p>
      </section>
    </StandardContent>
  );
}
