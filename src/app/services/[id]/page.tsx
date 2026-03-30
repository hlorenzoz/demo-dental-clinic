import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const service = services[id as keyof typeof services];
  if (!service) return { title: 'Service Not Found' };
  return {
    title: `${service.title} | Aurora Sanctuary`,
    description: service.description,
  };
}

const services = {
  'restorative': {
    title: 'Precision Care',
    headline: 'Structural Mastery. Permanent Integration.',
    category: 'Restorative Excellence',
    description: 'Our restorative protocols represent a masterclass in biomechanical engineering. Using Swiss-grade foundations and 3D bone mapping, we restore structural integrity with absolute surgical precision.',
    benefits: ['Swiss-Grade foundations', 'Digital Bone Mapping', 'Lifetime structural stability'],
  },
  'cosmetic': {
    title: 'Smile Design',
    headline: 'Invisible Alignment. Dynamic Precision.',
    category: 'Orthodontic Artistry',
    description: 'Transcend the limitations of traditional ceramics. Our cosmetic protocols utilize AI-driven path tracing to orchestrate tooth movement with millimeter-level accuracy.',
    benefits: ['Itero® 5D Intelligence', 'SmartTrack® Technology', 'Discreet, removable comfort'],
  },
  'prevention': {
    title: 'Hygiene Hub',
    headline: 'Sensory Comfort. Biofilm Removal.',
    category: 'Preventative Care',
    description: 'Bespoke hygiene systems utilizing Airflow® technology for a non-invasive, pain-free experience. We focus on gingival health as the foundation of aesthetics.',
    benefits: ['Airflow® Biofilm removal', 'Guided Biofilm Therapy', 'Stain removal without abrasion'],
  },
  'emergency': {
    title: 'Urgent Response',
    category: 'Immediate Care',
    headline: 'Immediate Triage. Clinical Priority.',
    description: 'On-demand clinical support for acute restorative needs. Our emergency protocol ensures immediate pain management and structural stabilization.',
    benefits: ['Rapid-response triage', 'Pain Neutralization', 'Immediate Stabilization'],
  },
  'aesthetics': {
    title: 'Facial Aesthetics',
    category: 'Medical Artistry',
    headline: 'Medical Precision. Natural Radiance.',
    description: 'Expertly delivered anti-wrinkle and filler treatments focusing on facial symmetry and architectural balance. Administered with clinical mastery.',
    benefits: ['Anti-wrinkle precision', 'Dermal architecture', 'Subtle, natural motion'],
  },
};

export default async function ServicePage({ params }: Props) {
  const { id } = await params;
  const service = services[id as keyof typeof services];
  if (!service) notFound();

  return (
    <div className="bg-surface min-h-screen pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header - Editorial Shift */}
        <section className="mb-32">
          <div className="max-w-4xl">
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block opacity-80">
              {service.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-12 leading-[1.05] tracking-tight">
              {service.headline.split('.')[0]}. <br />
              <span className="italic">{service.headline.split('.')[1]}</span>
            </h1>
            <p className="text-2xl text-[#3E4949] leading-relaxed font-light max-w-3xl">
              {service.description}
            </p>
          </div>
        </section>

        {/* Content Section - Floating Sheets */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 bg-surface-lowest p-12 md:p-16 rounded-2xl shadow-[0_24px_80px_rgba(0,101,101,0.03)]">
            <h3 className="text-primary font-bold uppercase tracking-[0.3em] text-[11px] mb-12 block italic">Clinical Intelligence</h3>
            <div className="space-y-12">
              {service.benefits.map((benefit) => (
                <div key={benefit} className="flex gap-8 group">
                  <div className="w-1.5 h-1.5 bg-primary/20 rounded-full mt-3 group-hover:bg-primary transition-colors" />
                  <p className="text-xl text-[#3E4949] font-light leading-snug">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center h-full lg:pl-12">
            <h3 className="text-3xl font-serif text-foreground mb-8 italic">Direct Consultation</h3>
            <p className="text-lg text-[#3E4949] mb-12 font-light leading-relaxed">
              Step into the collective for a comprehensive clinical review. Our specialists 
              will map your unique architectural needs and design your bespoke restorative path.
            </p>
            <Link 
              href="/contact" 
              className="bg-gradient-to-br from-primary to-primary-container text-white px-12 py-6 rounded-lg font-bold text-lg shadow-soft hover:opacity-95 transition-all w-fit"
            >
              Secure Assessment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
