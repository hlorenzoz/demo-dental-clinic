import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Clinical Collective | Aura Dental',
  description: 'A masterclass in restorative precision. Explore our curated range of premium dental services.',
};

const services = [
  {
    id: 'dental-implants',
    title: 'Precision Implants',
    category: 'Restorative Mastery',
    description: 'Bespoke Swiss-engineered foundations designed for lifetime stability and natural integration.',
    features: ['3D Bone Mapping', 'Biocompatible Grade 5 Titanium', 'Surgical Precision'],
  },
  {
    id: 'invisalign',
    title: 'Invisalign® Elite',
    category: 'Aesthetic Alignment',
    description: 'Discreet orthodontic refinement tailored to your unique facial architecture and dynamic smile.',
    features: ['SmartTrack® Tech', 'Itero® 5D Scanning', 'Accelerated Protocol'],
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Artistry',
    category: 'Aesthetic Design',
    description: 'Hand-crafted porcelain veneers and boutique whitening systems for a naturally radiant result.',
    features: ['Digital Smile Design', 'Micro-Layered Ceramics', 'Boutique Whitening'],
  },
  {
    id: 'general-dentistry',
    title: 'General Health',
    category: 'Clinical Foundation',
    description: 'Comprehensive preventive care and health maintenance utilizing the latest diagnostic protocols.',
    features: ['Laser Diagnostics', 'Airflow® Hygiene', 'Total Gum Health'],
  },
  {
    id: 'emergency-care',
    title: 'Urgent Response',
    category: 'Immediate Care',
    description: 'On-demand clinical support for acute dental needs, delivered with absolute clinical priority.',
    features: ['24/7 Triage', 'Pain Management', 'Same-Day Stabilization'],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-surface min-h-screen pt-32">
      {/* Header - Editorial Asymmetry */}
      <section className="px-8 max-w-7xl mx-auto mb-32">
        <div className="max-w-3xl">
          <span className="text-primary font-bold uppercase tracking-[0.4em] text-[11px] mb-8 block">The Services Collective</span>
          <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-12 leading-[1.1] tracking-tight">
            Advanced Clinical <br />
            <span className="italic">Procedures</span>.
          </h1>
          <p className="text-xl text-[#3E4949] leading-relaxed font-light max-w-xl">
            We transcend conventional dentistry through a convergence of world-leading 
            restorative technology and an editorial eye for clinical excellence.
          </p>
        </div>
      </section>

      {/* Services Grid - Floating White Sheets */}
      <section className="px-8 max-w-7xl mx-auto pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <Link 
              key={service.id} 
              href={`/services/${service.id}`}
              className={`group block p-12 md:p-16 rounded-2xl bg-surface-lowest shadow-[0_24px_80px_rgba(0,101,101,0.03)] hover:shadow-[0_40px_100px_rgba(0,101,101,0.06)] transition-all duration-700 relative overflow-hidden ${
                index % 3 === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="relative z-10 flex flex-col h-full">
                <span className="text-primary font-bold uppercase tracking-[0.2em] text-[10px] mb-8 block opacity-80 group-hover:opacity-100 transition-opacity">
                  {service.category}
                </span>
                <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-8 group-hover:text-primary transition-colors italic">
                  {service.title}
                </h3>
                <p className="text-lg text-[#3E4949] leading-relaxed font-light mb-12 max-w-2xl">
                  {service.description}
                </p>
                
                <div className="mt-auto flex flex-wrap gap-4 pt-8 border-t border-zinc-100/60">
                  {service.features.map(feature => (
                    <span key={feature} className="text-[10px] uppercase tracking-widest text-[#6E7979] font-medium bg-surface-low px-4 py-2 rounded-full">
                      {feature}
                    </span>
                  ))}
                  <div className="ml-auto text-primary font-bold text-sm flex items-center gap-3">
                    View Procedure 
                    <span className="group-hover:translate-x-2 transition-transform duration-500 text-lg">→</span>
                  </div>
                </div>
              </div>
              
              {/* Subtle Tonal Shift on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </Link>
          ))}
        </div>
      </section>

      {/* Tonal Divider Section */}
      <section className="bg-surface-low py-40 px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif text-foreground mb-8 italic">Bespoke Consultations</h2>
          <p className="text-[#3E4949] font-light mb-12">
            Every clinical journey begins with a comprehensive baseline assessment. 
            Experience our diagnostic excellence firsthand.
          </p>
          <Link 
            href="/contact" 
            className="text-primary font-bold uppercase tracking-[0.4em] text-xs pb-1 border-b border-primary/40 hover:border-primary transition-all"
          >
            Start Your Case Review
          </Link>
        </div>
      </section>
    </div>
  );
}
