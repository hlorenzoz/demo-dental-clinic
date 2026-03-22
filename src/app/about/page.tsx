import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Heritage | Aura Dental Collective',
  description: 'A masterclass in clinical departure. Discover the philosophy of the restorative sanctuary.',
};

export default function AboutPage() {
  return (
    <div className="bg-surface min-h-screen pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-8">
        {/* Hero Section - The Asymmetric Heritage */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center mb-40">
          <div className="lg:col-span-12">
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[11px] mb-8 block">The Origins of Aura</span>
            <h1 className="text-6xl md:text-8xl font-serif text-foreground mb-16 leading-[1.02] tracking-tight text-balance">
              The <span className="italic">Heritage</span> <br />
              of the Sanctuary.
            </h1>
          </div>
          
          <div className="lg:col-span-7 relative">
            <div className="aspect-[16/9] bg-surface-low rounded-2xl overflow-hidden shadow-2xl relative">
              <Image 
                src="/premium-dental-clinic-interior_1774182886318.png"
                alt="Aura Dental Interior"
                fill
                className="object-cover opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Tonal Overlap */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
          </div>
          
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="text-2xl text-[#3E4949] leading-relaxed font-light italic mb-8">
              "We believe clinical excellence is a prerequisite, but the experience is a choice."
            </p>
            <p className="text-lg text-[#3E4949] leading-relaxed font-light mb-8">
              Aura Dental Collective was founded as a departure from the sterile anxiety 
              of traditional care. We envisioned a space where Harley Street precision 
              meets the tranquility of a high-end sanctuary.
            </p>
          </div>
        </section>

        {/* Narrative - Wide Margins & High Contrast */}
        <section className="max-w-4xl mx-auto text-left mb-40">
          <div className="space-y-16 text-xl text-[#3E4949] leading-[1.8] font-light">
            <p>
              Our architecture is built on the principle of <span className="italic font-normal">Tonal Serenity</span>. 
              By utilizing a palette of expansive whites and deep primary teals, we create an 
              environment that immediately lowers cortisol levels, allowing our restorative 
              mastery to be the primary focus of your visit.
            </p>
            <p>
              We reject the "Industrial Scale" model. Every patient within our collective 
              is treated as a unique masterclass in clinical care, ensuring that technical 
              outcomes are balanced with personal aesthetic goals.
            </p>
          </div>
        </section>

        {/* The Three Pillars - Tonal Layering Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: 'Clinical Precision', desc: 'Surgical accuracy meets advanced diagnostic mapping.' },
            { title: 'Sensory Comfort', desc: 'A departure from clinical anxiety through curated environments.' },
            { title: 'Artistic Integrity', desc: 'Restoring natural beauty with an editorial eye for detail.' },
          ].map((pillar) => (
            <div key={pillar.title} className="bg-surface-lowest p-12 rounded-2xl shadow-soft">
              <h4 className="text-2xl font-serif text-primary mb-6 italic">{pillar.title}</h4>
              <p className="text-[#3E4949] font-light leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
