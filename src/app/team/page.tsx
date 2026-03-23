'use client';

import { motion } from 'framer-motion';
import { 
  Award, 
  GraduationCap, 
  Heart, 
  ArrowRight,
  Stethoscope,
  Smile,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

const specialists = [
  {
    name: 'Dr. Sam Dehpour',
    role: 'Principal Dentist & Founder',
    specialty: 'Cosmetic Artistry & Advanced Aesthetics',
    background: 'Qualified from King\'s College London, Senior Instructor in Facial Aesthetics. Expert in Smile Design and Adult Orthodontics.',
    tags: ['KCL Alumna', 'Aesthetic Mentor', 'Precision Clinical Art']
  },
  {
    name: 'Dr. Daniel Smith',
    role: 'Principal Dentist',
    specialty: 'Implantology & Complex Endodontics',
    background: 'Extensively trained in restorative precision and implants. Specialized in treating nervous patients with clinical empathy.',
    tags: ['Implant Master', 'Clinical Lead', 'Nervous Patient Specialist']
  },
  {
    name: 'Dr. Saul Konviser',
    role: 'Associate Dentist',
    specialty: 'Restorative & Gentle Dentistry',
    background: 'Passionate about restorative mastery and foundation oral health. Active contributor to the Dental Wellness Trust.',
    tags: ['Restorative Lead', 'Charity Contributor', 'Gentle Approach']
  },
  {
    name: 'Sonal',
    role: 'Oral Surgeon & Clinical Tutor',
    specialty: 'Maxillofacial Surgery',
    background: 'Honours from KCL, Diploma from RCS Edinburgh. Teaches dental students at Guy\'s Hospital.',
    tags: ['Clinical Expert', 'Surgery Lead', 'Academic Tutor']
  }
];

const hygieneTeam = [
  {
    name: 'Dimple',
    role: 'Dental Hygiene Therapist',
    specialty: 'Airflow® & Gum Health',
    focus: 'Scale, Polish, and Advanced Stain Removal.'
  },
  {
    name: 'Corinne',
    role: 'Hygienist',
    specialty: 'Sensory Comfort Cleaning',
    focus: 'Praised for providing a relaxing, clinical sanctuary experience.'
  }
];

export default function TeamPage() {
  const fadeInUp: any = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface pb-32">
      
      {/* 1. HERO - The Human Element */}
      <section className="pt-32 pb-24 lg:pt-48 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-10"
          >
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] md:text-[11px]">
               Technical Heritage
            </span>
          </motion.div>
          
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 1.2 }}
              className="text-foreground text-5xl md:text-8xl font-serif leading-[1.05] mb-12 tracking-tight"
            >
              The Clinical <br />
              <span className="italic font-normal text-primary">Artisans.</span>
            </motion.h1>
            <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5, duration: 1 }}
               className="text-xl md:text-2xl text-[#3F4948] font-light leading-relaxed max-w-2xl"
            >
              Our team represents a convergence of surgical precision and aesthetic vision. 
              Each expert has been selected for their technical heritage and patient-first empathy.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. SPECIALISTS GRID - Bento Layout */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            {specialists.map((doc, i) => (
              <motion.div
                key={doc.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className={`${i % 3 === 0 ? 'lg:col-span-12' : 'lg:col-span-6'} bg-surface-lowest rounded-[3rem] p-12 md:p-16 shadow-soft border border-primary/5 group relative overflow-hidden`}
              >
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                   <div>
                      <div className="flex items-center gap-4 mb-8 text-primary">
                         <div className="bg-primary/5 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                            {doc.name.includes('Smith') ? <Stethoscope className="w-8 h-8" /> : <Smile className="w-8 h-8" />}
                         </div>
                         <div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-60 block mb-1">{doc.role}</span>
                            <h3 className="text-3xl font-serif italic text-foreground">{doc.name}</h3>
                         </div>
                      </div>
                      
                      <div className="space-y-6">
                         <p className="text-lg font-light text-[#3F4948] leading-relaxed italic border-l-2 border-primary/20 pl-8">
                           "{doc.background}"
                         </p>
                         <div className="flex flex-wrap gap-3 pt-4">
                            {doc.tags.map(t => (
                              <span key={t} className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-4 py-2 rounded-full">
                                {t}
                              </span>
                            ))}
                         </div>
                      </div>
                   </div>

                   <div className="hidden lg:flex justify-end pr-8">
                      <div className="w-64 h-80 bg-surface-low rounded-[2rem] flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
                        <Award className="w-16 h-16 text-primary" />
                      </div>
                   </div>
                </div>
                
                {/* Visual Flair */}
                <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HYGIENE TEAM & SUPPORT */}
      <section className="pt-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-24 items-start">
             <div className="lg:w-1/3">
                <h2 className="text-5xl font-serif text-foreground mb-8 tracking-tight italic">Support & <br /> Wellness.</h2>
                <p className="text-lg font-light text-[#3F4948] leading-relaxed mb-12">
                   The clinical experience is defined by the quality of our preventative care and administrative support. 
                   Meet the team that manages the sanctuary environment.
                </p>
                <div className="p-8 bg-primary rounded-[2.5rem] text-white">
                   <h4 className="text-2xl font-serif italic mb-4">Patient favorite.</h4>
                   <p className="text-sm font-light opacity-80 leading-relaxed mb-8">
                     "Every clinical session with Eileen and the hygiene team is engineered for zero-stress."
                   </p>
                   <Link href="/contact" className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:translate-x-1 transition-transform">
                      Join the Sanctuary
                      <ChevronRight className="w-4 h-4" />
                   </Link>
                </div>
             </div>

             <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {hygieneTeam.map((h, hi) => (
                  <motion.div
                    key={h.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: hi * 0.2 }}
                    className="bg-surface-low rounded-[3rem] p-12 border border-primary/5 group"
                  >
                    <div className="bg-white p-5 rounded-2xl w-fit mb-8 shadow-sm group-hover:scale-110 transition-transform">
                       <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4 block">
                      {h.role}
                    </span>
                    <h4 className="text-2xl font-serif text-foreground mb-4 italic">{h.name}</h4>
                    <p className="text-sm text-[#6F7979] font-light leading-relaxed mb-8">
                       <span className="font-bold text-foreground">{h.specialty}:</span> {h.focus}
                    </p>
                    <div className="flex items-center gap-3 text-primary font-bold text-xs uppercase tracking-widest opacity-60">
                       Wellness Focused <ChevronRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 4. CLINICAL CALL */}
      <section className="pt-40 px-6 text-center">
         <div className="max-w-4xl mx-auto bg-surface-lowest p-20 rounded-[4rem] shadow-xl border border-primary/5">
            <h2 className="text-4xl md:text-6xl font-serif text-foreground mb-10 tracking-tight leading-tight">
               Experience <br /> <span className="italic">Excellence.</span>
            </h2>
            <p className="text-xl text-[#6F7979] font-light leading-relaxed mb-16 mx-auto max-w-lg">
               Secure your consultation with our clinical specialists today.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-6 py-6 px-16 bg-primary text-white rounded-full font-bold text-xl shadow-xl hover:translate-y-[-4px] hover:shadow-2xl transition-all group">
               Start Assessment
               <ArrowRight className="w-6 h-6 group-hover:rotate-[-45deg] transition-transform" />
            </Link>
         </div>
      </section>

    </div>
  );
}
