import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'The Clinical Collective | Aura Dental Specialists',
  description: 'Meet the masterminds of restorative medicine. A convergence of surgical precision and artistic mastery.',
};

const team = [
  {
    name: 'Dr. Alexander Thorne',
    role: 'Principal Implantologist',
    bio: 'A master of structural integration, Dr. Thorne specializes in complex Swiss-engineered restorative foundations and 3D bone mapping architecture.',
    image: '/professional_female_dentist_headshot_1774182900032.png', // Using the available high-res image
  },
  {
    name: 'Dr. Elena Vance',
    role: 'Aesthetic Orthodontist',
    bio: 'Dr. Vance combines AI-driven alignment technology with an editorial eye for facial harmony, leading our Invisalign® Elite protocols.',
    image: '/professional_female_dentist_headshot_1774182900032.png', // Placeholder reuse for now
  },
  {
    name: 'Clara Sterling',
    role: 'Clinical Concierge',
    bio: ' orchestrating the patient journey with absolute precision, Clara ensures every visit to the collective is a departure into tranquility.',
    image: '/professional_female_dentist_headshot_1774182900032.png', // Placeholder reuse for now
  },
];

export default function TeamPage() {
  return (
    <div className="bg-surface min-h-screen pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header - The Direct Gaze */}
        <section className="mb-40">
          <div className="max-w-4xl">
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[11px] mb-8 block">The Clinical Collective</span>
            <h1 className="text-6xl md:text-8xl font-serif text-foreground mb-16 leading-[1.02] tracking-tight text-balance">
              Masterminds of <br />
              <span className="italic">Restorative Mastery</span>.
            </h1>
            <p className="text-2xl text-[#3E4949] leading-relaxed font-light max-w-2xl">
              Meet the specialists who transcend traditional care. A curated team 
              dedicated to the intersection of clinical precision and artistic integrity.
            </p>
          </div>
        </section>

        {/* Team Grid - Tonal Asymmetry */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-24 items-start">
          {team.map((member, index) => (
            <div key={member.name} className={`flex flex-col ${index % 2 !== 0 ? 'md:mt-24' : ''}`}>
              <div className="relative aspect-[4/5] bg-surface-low rounded-2xl overflow-hidden shadow-2xl mb-12 group">
                <Image 
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              </div>
              
              <h3 className="text-3xl font-serif text-foreground mb-3 italic">{member.name}</h3>
              <p className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold mb-8">{member.role}</p>
              <p className="text-[#3E4949] leading-relaxed font-light text-lg">
                {member.bio}
              </p>
              
              <div className="mt-8 pt-6 border-t border-zinc-200/40 w-16 group-hover:w-full transition-all duration-700">
                <span className="text-[10px] uppercase tracking-widest text-primary/40 font-bold">In the Collective since 2018</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
