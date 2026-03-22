import { Metadata } from 'next';

const faqs = [
  {
    q: 'Are you accepting new patients?',
    a: 'Yes, we are currently welcoming a limited number of new patients to our Harley Street sanctuary. Each patient begins their journey with a comprehensive clinical baseline assessment.',
  },
  {
    q: 'Do you offer emergency dental cover?',
    a: 'We provide 24-hour emergency support and triage for all our registered patients, ensuring consistent care in moments of clinical urgency.',
  },
  {
    q: 'Is there a consultation fee?',
    a: 'We offer a complimentary initial discovery call to discuss your restorative aesthetic goals. Formal diagnostic sessions are subject to professional fees.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'To maintain our dedicated patient schedule, we require 48 hours notice for any appointment modifications.',
  },
];

export const metadata: Metadata = {
  title: 'Patient FAQ | Aura Dental Collective',
  description: 'Common questions about our treatments, appointments, and clinical approach.',
};

export default function FAQPage() {
  return (
    <div className="bg-surface min-h-screen pt-40 pb-32 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header - The Knowledge Base */}
        <section className="mb-32 text-center">
          <span className="text-primary font-bold uppercase tracking-[0.4em] text-[11px] mb-8 block">Curated Wisdom</span>
          <h1 className="text-6xl md:text-8xl font-serif text-foreground mb-16 leading-[1.02] tracking-tight">
            Common <span className="italic underline decoration-primary/20 transition-all hover:decoration-primary/40">Inquiries</span>.
          </h1>
          <p className="text-2xl text-[#3E4949] leading-relaxed font-light max-w-2xl mx-auto italic">
            Clarity is the first step in clinical excellence. 
            Below we address the most common touchpoints of the Aura journey.
          </p>
        </section>

        {/* FAQ Grid - Tonal Accordions */}
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-surface-lowest p-10 md:p-14 rounded-2xl group hover:shadow-soft transition-all duration-700">
              <h3 className="text-2xl font-serif text-foreground mb-6 italic leading-snug group-hover:text-primary transition-colors">
                {faq.q}
              </h3>
              <p className="text-lg text-[#3E4949] leading-relaxed font-light opacity-80 group-hover:opacity-100 transition-opacity">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* Support CTA */}
        <div className="mt-32 p-16 rounded-3xl bg-primary/5 text-center">
          <p className="text-foreground font-serif italic text-2xl mb-8">Unanswered Questions?</p>
          <p className="text-lg text-[#3E4949] font-light mb-12 max-w-xl mx-auto">
            Our clinical concierge is available via secure line for specific treatment queries.
          </p>
          <a href="/contact" className="inline-block bg-gradient-to-br from-primary to-primary-container text-white px-12 py-5 rounded-lg font-bold uppercase tracking-widest text-[11px] hover:opacity-95 transition-all shadow-soft">
            Direct Concierge Access
          </a>
        </div>
      </div>
    </div>
  );
}
