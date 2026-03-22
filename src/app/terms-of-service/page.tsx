import { Metadata } from 'next';
import { StandardContent } from '@/components/ui/StandardContent';

export const metadata: Metadata = {
  title: 'Terms of Service | Aura Dental Collective',
  description: 'The agreement governing your relationship with Aura Dental Collective.',
};

export default function TermsOfService() {
  return (
    <StandardContent 
      title="Terms of Service" 
      subtitle="The agreement governing your relationship with Aura Dental Collective."
    >
      <section>
        <p className="font-medium italic">Effective Date: January 1, 2024</p>
        <p>
          By accessing this website and engaging our clinical services, you agree to the following terms 
          and conditions. Our commitment is to provide the highest standard of restorative care.
        </p>
      </section>

      <section>
        <h2>Clinical Care</h2>
        <p>
          All treatments are subject to a thorough clinical assessment. Treatment outcomes may vary 
          based on individual health factors.
        </p>
      </section>

      <section>
        <h2>Appointments</h2>
        <p>
          We require 48 hours notice for cancellations to ensure that our specialists can 
          maintain their dedicated patient schedule.
        </p>
      </section>
    </StandardContent>
  );
}
