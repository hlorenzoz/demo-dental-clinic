'use client';

import Image from "next/image";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Heart, 
  ShieldCheck, 
  Users, 
  Leaf,
  ChevronRight,
  ArrowRight,
  UserCheck
} from 'lucide-react';
import JsonLd from '@/components/ui/JsonLd';

export default function AboutPage() {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://dental-clinic-1-minimalist.pages.dev/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://dental-clinic-1-minimalist.pages.dev/about"
      }
    ]
  };
  const fadeInUp: any = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <JsonLd data={breadcrumbData} />
      
      {/* 1. HERO - Editorial Manifesto */}
      <section className="relative pt-32 pb-40 lg:pt-48 lg:pb-60 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-12"
          >
            <span className="w-12 h-[1px] bg-primary"></span>
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] md:text-[11px]">
              Our Manifesto
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1.2 }}
            className="text-foreground text-5xl md:text-[9rem] font-serif leading-[0.95] mb-20 tracking-tighter"
          >
            A Rejection <br />
            of the <span className="italic font-normal text-primary">Sterile.</span>
          </motion.h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-end">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="lg:col-span-6"
            >
              <p className="text-2xl md:text-4xl text-[#3F4948] leading-tight font-light text-balance mb-12">
                We didn't just build a dental clinic. We curated a digital and physical deep breath 
                for the modern patient.
              </p>
              <div className="flex gap-8 items-center border-t border-primary/10 pt-12">
                <div className="flex -space-x-3">
                   {[1,2,3].map(i => (
                     <div key={i} className="w-12 h-12 rounded-full border-2 border-surface bg-surface-low overflow-hidden relative">
                        <Image 
                           src={`https://cdn.hlorenzoz.com/dental_clinic_1_minimalist/staff_avatar_${i}.webp`} 
                           fill 
                           alt="Team member" 
                           className="object-cover" 
                           sizes="48px"
                         />
                     </div>
                   ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Established in Mill Hill</p>
                  <p className="text-xs text-[#6F7979] uppercase tracking-widest mt-1">NW7 London Heritage</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.8, duration: 1.5 }}
               className="lg:col-span-6 relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <Image 
                src="https://cdn.hlorenzoz.com/dental_clinic_1_minimalist/hero_sanctuary.webp" 
                alt="Sanctuary Atmosphere" 
                fill 
                className="object-cover" 
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
        
        {/* Background Tonal Element */}
        <div className="absolute top-0 right-[-10%] w-[60%] h-full bg-primary/5 rounded-full blur-[150px] -z-10 opacity-50" />
      </section>

      {/* 2. THE STORY - Women-Owned & Precision */}
      <section className="py-40 px-6 bg-surface-low overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40 items-start">
            
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-12"
            >
              <div className="flex items-center gap-4">
                 <ShieldCheck className="w-10 h-10 text-primary" />
                 <h2 className="text-3xl font-serif text-foreground italic">Restorative Artistry</h2>
              </div>
              <h3 className="text-4xl md:text-7xl font-serif text-foreground leading-[1.1] tracking-tight">
                Owned by Women. <br />
                Guided by <span className="italic">Empathy.</span>
              </h3>
              <div className="space-y-8 text-xl text-[#3F4948] font-light leading-relaxed">
                <p>
                  Ecladent Sanctuary was founded as a departure from the "industrial-scale" corporate 
                  dentistry model. We believe clinical mastery is a prerequisite, but the emotional 
                  experience is what truly defines excellence.
                </p>
                <p>
                  As a proudly women-owned boutique practice, our core philosophy is centered on 
                  informed consent and sensory comfort. We take the time and space needed to ensure 
                  you are fully heard, creating a partnership between specialist and patient.
                </p>
              </div>
              <Link href="/services" className="inline-flex items-center gap-4 py-4 px-10 bg-primary text-white rounded-full font-bold shadow-lg hover:shadow-primary/20 transition-all group">
                Observe Our Standards
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="relative aspect-[3/4] rounded-[4rem] overflow-hidden shadow-2xl"
            >
               <Image 
                src="https://cdn.hlorenzoz.com/dental_clinic_1_minimalist/clinic_interior.webp" 
                alt="Ecladent Specialist at work" 
                fill 
                className="object-cover" 
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-12 left-12 right-12 p-10 bg-surface-lowest/80 backdrop-blur-xl rounded-3xl border border-white/20">
                 <p className="text-primary font-serif italic text-2xl mb-2">"Precision clinical heritage meets a human, artisanal touch."</p>
                 <p className="text-[10px] font-bold uppercase tracking-widest text-[#6F7979]">The Mill Hill Commitment</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. INCLUSIVITY - A Sanctuary for All */}
      <section className="py-40 px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-10"
          >
             <UserCheck className="w-10 h-10 text-primary" />
          </motion.div>
          <h2 className="text-5xl md:text-8xl font-serif text-foreground mb-12 tracking-tight">
            A Sanctuary <br />
            <span className="italic font-normal">for Everyone.</span>
          </h2>
          <p className="text-2xl text-[#3F4948] font-light leading-relaxed max-w-2xl mx-auto">
            Diversity is our strength. We are a dedicated safe space for LGBTQ+, neurodivergent, 
            and nervous patients, ensuring clinical care is accessible to all.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { 
               icon: <Heart className="w-8 h-8"/>, 
               title: "LGBTQ+ Safe", 
               desc: "A proudly transgender and non-binary safe clinical environment with gender-neutral facilities and inclusive intake protocols." 
             },
             { 
               icon: <Leaf className="w-8 h-8"/>, 
               title: "Sensory Calm", 
               desc: "Utilizing low-noise technology and aromatherapy to reduce sensory overload, making visits comfortable for neurodivergent patients." 
             },
             { 
               icon: <Users className="w-8 h-8"/>, 
               title: "Trauma Informed", 
               desc: "Our team is specifically trained in anxiety management and trauma-informed care for patients with negative past dental experiences." 
             }
           ].map((pillar, i) => (
             <motion.div 
               key={i}
               initial={{ y: 20, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1, duration: 0.8 }}
               className="p-12 bg-surface-lowest rounded-[2.5rem] border border-primary/5 shadow-sm hover:shadow-xl hover:border-primary/10 transition-all group"
             >
                <div className="text-primary mb-10 group-hover:scale-110 transition-transform origin-left">{pillar.icon}</div>
                <h4 className="text-2xl font-serif text-foreground mb-6">{pillar.title}</h4>
                <p className="text-[#6F7979] font-light leading-relaxed">{pillar.desc}</p>
             </motion.div>
           ))}
        </div>
      </section>

      {/* 4. TEAM - Restorative Artists */}
      <section className="py-40 px-6 bg-surface-low border-y border-primary/5">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
                <div className="max-w-2xl">
                    <span className="text-primary font-bold uppercase tracking-[0.3em] text-[11px] mb-8 block">The Specialists</span>
                    <h2 className="text-5xl md:text-7xl font-serif text-foreground leading-tight tracking-tight">
                        Our Restorative <br />
                        <span className="italic">Artists.</span>
                    </h2>
                </div>
                <div className="lg:mb-3">
                   <p className="text-[#6F7979] text-xl font-light italic border-l-2 border-primary/20 pl-8 py-2">
                     "We curate clinicians who combine technical mastery <br /> with the heart of the sanctuary."
                   </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
               {[
                 { name: "Clinical Lead", role: "Women-Owned Practice", id: "01" },
                 { name: "Corinne", role: "Exceptional Hygienist", id: "02" },
                 { name: "Eileen", role: "Patient Coordinator", id: "03" }
               ].map((member, i) => (
                 <motion.div 
                    key={i}
                    whileHover={{ y: -10 }}
                    className="relative"
                 >
                    <div className="aspect-[3/4] rounded-[2.5rem] bg-surface-lowest overflow-hidden mb-8 shadow-sm">
                       <Image 
                        src={`https://cdn.hlorenzoz.com/dental_clinic_1_minimalist/${
                          member.name.includes('Lead') ? 'specialist_sam.webp' : 
                          member.name.includes('Corinne') ? 'hygiene_airflow.webp' : 
                          'specialist_eileen.webp'
                        }`}
                        alt={member.name} 
                        fill 
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                       />
                       <div className="absolute top-8 left-8 text-white z-20">
                          <span className="text-xs font-bold uppercase tracking-[0.4em] opacity-60">specialist {member.id}</span>
                       </div>
                    </div>
                    <div>
                       <h4 className="text-2xl font-serif text-foreground mb-1 leading-tight">{member.name}</h4>
                       <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">{member.role}</p>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. CTA - Final Step */}
      <section className="py-40 px-6 bg-surface overflow-hidden relative">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-serif text-foreground mb-12 tracking-tight leading-tight"
          >
            Experience the <br />
            <span className="italic">Difference.</span>
          </motion.h2>
          <p className="text-2xl text-[#3F4948] font-light leading-relaxed mb-16 max-w-2xl mx-auto">
            Ready to step into a dental space that values your tranquility as much as your clinical health?
          </p>
          <Link href="/contact" className="inline-flex items-center gap-6 py-6 px-16 bg-primary text-white rounded-full font-bold text-2xl shadow-[0_24px_50px_-12px_rgba(0,0,0,0.3)] hover:shadow-primary/30 transition-all group">
            Secure Your Assessment
            <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
        
        {/* Artistic Background Overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
           <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[1000px] h-[1000px] border border-primary rounded-full blur-[200px]" />
           <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] border border-[#ffb690] rounded-full blur-[180px]" />
        </div>
      </section>

    </div>
  );
}
