'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  ChevronRight, 
  ArrowRight,
  Stethoscope,
  Smile,
  Activity
} from 'lucide-react';

const serviceCategories = [
  {
    id: 'emergency',
    title: 'Urgent Relief',
    subtitle: 'Immediate Clinical Intervention',
    description: 'Acute pain management and stabilization for dental emergencies. Guaranteed same-day triage for bookings before 11AM.',
    offer: 'Relief from £75',
    icon: <Zap className="w-10 h-10" />,
    features: ['Same-day Priority', 'Immediate Pain Management', 'NHS & Private Care'],
    color: 'bg-primary text-white',
    accent: 'text-[#a2f0ef]'
  },
  {
    id: 'cosmetic',
    title: 'Smile Design',
    subtitle: 'Bespoke Aesthetic Iteration',
    description: 'Transformative orthodontic and cosmetic procedures utilizing 3D digital modeling to visualize your future smile.',
    offer: 'Free Consultations',
    icon: <Sparkles className="w-10 h-10" />,
    features: ['Invisalign® Elite', 'Porcelain Artistry', 'Digital Iteration'],
    color: 'bg-surface-lowest text-foreground border border-primary/5',
    accent: 'text-primary'
  },
  {
    id: 'restorative',
    title: 'Precision Care',
    subtitle: 'Heritage Guided Restoration',
    description: 'Expert restorative mastery focusing on implants, bridges, and crown work with a focus on long-term structural integrity.',
    offer: 'Clinical Excellence',
    icon: <ShieldCheck className="w-10 h-10" />,
    features: ['Precision Implants', 'Functional Restoration', 'Biocompatible Grade 5'],
    color: 'bg-surface-lowest text-foreground border border-primary/5',
    accent: 'text-primary'
  },
  {
    id: 'prevention',
    title: 'Hygiene Hub',
    subtitle: 'Sensory Comfort Cleaning',
    description: 'Utilizing Airflow® technology for a non-invasive, sensory-calm cleaning experience. Patient favorite: Corinne’s Touch.',
    offer: 'Airflow® Tech',
    icon: <Heart className="w-10 h-10" />,
    features: ['Non-Invasive Hygiene', 'Gingival Mapping', 'Stain Removal'],
    color: 'bg-surface-low text-foreground border border-primary/5',
    accent: 'text-primary'
  }
];

export default function ServicesPage() {
  const fadeInUp: any = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      
      {/* 1. HERO - The Art of Restoration */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-10"
          >
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] md:text-[11px]">
              Clinical Hub
            </span>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-end">
            <div className="lg:col-span-8">
              <motion.h1 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 1.2 }}
                className="text-foreground text-5xl md:text-8xl font-serif leading-[1.05] mb-12 tracking-tight"
              >
                The Art of Clinical <br />
                <span className="italic font-normal text-primary">Restoration.</span>
              </motion.h1>
              <motion.p
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.5, duration: 1 }}
                 className="text-xl md:text-2xl text-[#3F4948] font-light leading-relaxed max-w-2xl"
              >
                Bespoke restorative artistry and precision clinical heritage converge at Ecladent. 
                We move beyond standard dentistry to curate long-term oral wellness.
              </motion.p>
            </div>
            <motion.div 
               initial={{ opacity: 0, y: 40 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.8, duration: 1 }}
               className="lg:col-span-4 hidden lg:block"
            >
               <div className="bg-surface-low rounded-[2rem] p-10 flex flex-col justify-center gap-4">
                  <div className="flex items-center gap-2 text-primary">
                    <Activity className="w-5 h-5" />
                    <span className="font-bold text-xs uppercase tracking-[0.3em]">Latest Tech</span>
                  </div>
                  <p className="text-sm font-light text-[#6F7979] italic leading-relaxed">
                    "Every procedure is Itero-scanned and digitally planned before clinical execution begins."
                  </p>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID - The Bento Hub */}
      <section className="py-24 px-6 bg-surface-low overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            
            {/* Category Grid Items */}
            {serviceCategories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className={`${
                  cat.id === 'emergency' ? 'lg:col-span-12' : 
                  cat.id === 'cosmetic' ? 'lg:col-span-7' : 
                  cat.id === 'restorative' ? 'lg:col-span-5' : 
                  'lg:col-span-12'
                } ${cat.color} rounded-[3rem] p-12 relative overflow-hidden group shadow-sm`}
              >
                <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-24 items-start lg:items-center">
                   <div className="lg:max-w-xl">
                      <div className={`${cat.accent} mb-10 group-hover:scale-110 transition-transform origin-left`}>
                        {cat.icon}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block opacity-60">
                        {cat.subtitle}
                      </span>
                      <h2 className="text-4xl md:text-6xl font-serif mb-8 tracking-tight">{cat.title}</h2>
                      <p className="text-lg font-light leading-relaxed mb-10 opacity-80">
                        {cat.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 items-center">
                         {cat.features.map((f, fi) => (
                           <span key={fi} className={`text-[11px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-full ${
                             cat.id === 'emergency' ? 'bg-white/10' : 'bg-primary/5'
                           }`}>
                             {f}
                           </span>
                         ))}
                      </div>
                   </div>

                   <div className="ml-auto flex flex-col items-center lg:items-end justify-center w-full lg:w-fit py-12 lg:py-0 border-t lg:border-t-0 lg:border-l border-current/10 px-0 lg:px-16">
                       <span className={`text-4xl md:text-5xl font-serif italic mb-10 ${cat.accent}`}>{cat.offer}</span>
                       <Link 
                        href={`/contact?service=${cat.id}`}
                        className={`flex items-center gap-3 py-5 px-10 rounded-full font-bold text-lg shadow-xl hover:translate-x-1 transition-all ${
                          cat.id === 'emergency' ? 'bg-white text-primary' : 'bg-primary text-white'
                        }`}
                       >
                          Agendar Consulta
                          <ChevronRight className="w-5 h-5" />
                       </Link>
                   </div>
                </div>
                
                {/* Visual Accent */}
                <div className="absolute right-0 bottom-0 w-1/3 h-1/2 bg-gradient-to-tl from-current/5 to-transparent pointer-events-none" />
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* 3. AESTHETICS FOCUS - Botox & Medical Precision */}
      <section className="py-40 px-6 overflow-hidden">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
               initial={{ opacity: 0, x: -40 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2 }}
               className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl"
            >
               <div className="absolute inset-0 bg-primary/40 grayscale mix-blend-multiply transition-all duration-700 hover:grayscale-0 hover:mix-blend-normal cursor-pointer">
                  {/* Image Placeholder */}
                  <div className="w-full h-full bg-surface-low" />
               </div>
               <div className="absolute inset-0 p-12 flex flex-col justify-end text-white relative h-full">
                  <div className="relative z-10">
                    <p className="text-xl font-serif italic mb-4 opacity-100 uppercase tracking-widest">Medical Artistry</p>
                    <h3 className="text-5xl md:text-7xl font-serif leading-tight mb-8">Facial <br />Aesthetics.</h3>
                    <p className="text-lg font-light opacity-90 leading-relaxed max-w-sm">
                      Deliver anti-wrinkle and filler treatments with the surgical precision 
                      that only a clinical specialist can provide.
                    </p>
                  </div>
               </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               className="lg:pl-16"
            >
               <span className="text-primary font-bold uppercase tracking-[0.3em] text-[11px] mb-8 block">Beyond Oral Health</span>
               <h2 className="text-5xl md:text-7xl font-serif text-foreground mb-12 tracking-tight leading-[1.1]">
                  Digital Iteration. <br />
                  <span className="italic font-normal text-primary">Zero Surprises.</span>
               </h2>
               <div className="space-y-10 text-xl text-[#3F4948] font-light leading-relaxed mb-16">
                  <div className="flex gap-6">
                    <Smile className="w-10 h-10 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold text-foreground mb-2 italic">Invisalign® Elite</h4>
                      <p className="text-base text-[#6F7979]">Strategic tooth movement protocols designed for comfort and rapid results.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <Stethoscope className="w-10 h-10 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold text-foreground mb-2 italic">Itero® 3D Scanning</h4>
                      <p className="text-base text-[#6F7979]">Visualize your results before we even start. Digital precision for total confidence.</p>
                    </div>
                  </div>
               </div>
               <Link href="/contact" className="inline-flex items-center gap-4 text-primary font-bold uppercase tracking-[0.3em] text-[12px] group">
                  Book Aesthetic Assessment
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
               </Link>
            </motion.div>
         </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="py-40 px-6 bg-primary overflow-hidden relative rounded-t-[5rem]">
        <div className="max-w-5xl mx-auto text-center relative z-10 text-white">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-serif mb-12 tracking-tight leading-tight"
          >
            Start Your <br />
            <span className="italic font-normal">Transformation.</span>
          </motion.h2>
          <p className="text-2xl text-white/80 font-light leading-relaxed mb-16 max-w-2xl mx-auto">
            Clinical excellence meets artisanal design. Secure your spot at Ecladent Sanctuary.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-6 py-6 px-16 bg-white text-primary rounded-full font-bold text-2xl shadow-2xl hover:bg-surface-low transition-all group">
            Book Appointment
            <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  );
}
