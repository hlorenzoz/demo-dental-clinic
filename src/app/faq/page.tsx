'use client';

import { motion } from 'framer-motion';
import { 
  Plus, 
  Minus, 
  HelpCircle, 
  ArrowRight,
  ChevronRight,
  Activity
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import JsonLd from '@/components/ui/JsonLd';

const faqs = [
  {
    q: 'Are you accepting new patients at Mill Hill?',
    a: 'Yes, Ecladent Sanctuary is currently welcoming new patients into our Mill Hill collective. Every patient begins with a comprehensive 3D clinical assessment to establish a restorative baseline.'
  },
  {
    q: 'How does the £75 emergency relief work?',
    a: 'Our emergency priority triage is designed for acute pain and stabilization. If you book before 11AM, we guarantee same-day intervention. The £75 covers the assessment and initial relief protocol.'
  },
  {
    q: 'Do you offer Saturday or evening appointments?',
    a: 'We operate a late clinic on Thursdays (until 19:30) and offer exclusive Saturday sessions by prior appointment to accommodate your schedule.'
  },
  {
    q: 'Is Ecladent LGBTQ+ and neurodivergent friendly?',
    a: 'Absolutely. We have engineered our environment to be a "Sanctuary" for all. This includes a sensory-calm atmosphere, inclusive protocols, and a focus on clinical empathy.'
  },
  {
    q: 'What is Airflow® technology hygiene?',
    a: 'Airflow® is a revolutionary, non-invasive cleaning method using a controlled spray of air, warm water, and fine powder. It is significantly gentler and more effective than traditional scaling, making it a sensory-friendly patient favorite.'
  },
  {
    q: 'Can I visualize my cosmetic results first?',
    a: 'Using our Itero® 5D scanners and Smile Design software, we provide a digital iteration of your smile before any permanent clinical work begins. Zero surprises, total confidence.'
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

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
        "name": "FAQ",
        "item": "https://dental-clinic-1-minimalist.pages.dev/faq"
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface pb-40">
      <JsonLd data={faqData} />
      <JsonLd data={breadcrumbData} />
      
      {/* 1. HERO - Curated Clarity */}
      <section className="pt-32 pb-24 lg:pt-48 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center border border-primary/10">
               <HelpCircle className="w-6 h-6 text-primary" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary">Patient Sanctuary Support</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl md:text-7xl lg:text-8xl font-serif text-foreground leading-[1.1] italic mb-8"
              >
                Ecladent <br />Curated Clarity
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl font-light text-[#6F7979] max-w-xl leading-relaxed"
              >
                Everything you need to know about starting your clinical 
                journey within our Mill Hill sanctuary.
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="hidden lg:block bg-surface-lowest p-12 rounded-[3.5rem] border border-primary/5 shadow-soft relative overflow-hidden group"
            >
              <div className="relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4">Direct Stabilization</p>
                <p className="text-2xl font-serif text-foreground mb-8">Need immediate relief?</p>
                <Link href="/contact" className="flex items-center gap-4 text-primary font-bold uppercase tracking-widest text-[11px] group">
                   Book Emergency Relief
                   <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white scale-90 group-hover:scale-110 transition-transform">
                      <ArrowRight className="w-4 h-4" />
                   </div>
                </Link>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary group-hover:scale-[10] transition-transform duration-1000 origin-top-right rounded-full opacity-0 group-hover:opacity-100" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. FAQ SECTOR - Sensory Layout */}
      <section className="px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className={`w-full text-left p-10 md:p-12 rounded-[2.5rem] border transition-all duration-500 flex justify-between items-start gap-8 ${
                    openIndex === index 
                      ? 'bg-surface-lowest border-primary/10 shadow-soft' 
                      : 'bg-surface-lowest/50 border-black/5 hover:border-primary/10'
                  }`}
                >
                  <div className="flex-1">
                    <h3 className={`text-xl md:text-2xl font-serif mb-6 transition-colors ${openIndex === index ? 'text-primary' : 'text-foreground'}`}>
                      {faq.q}
                    </h3>
                    <motion.div
                      initial={false}
                      animate={{ 
                        height: openIndex === index ? 'auto' : 0,
                        opacity: openIndex === index ? 1 : 0
                      }}
                      className="overflow-hidden"
                    >
                      <p className="text-lg font-light text-[#6F7979] leading-relaxed pb-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  </div>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 border transition-all duration-500 ${
                    openIndex === index 
                      ? 'bg-primary border-primary text-white rotate-180' 
                      : 'bg-white border-black/5 text-[#6F7979]'
                  }`}>
                    {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ASSURANCE SECTOR */}
      <section className="pt-40 px-6">
         <div className="max-w-7xl mx-auto">
            <div className="bg-primary p-20 lg:p-32 rounded-[5rem] relative overflow-hidden">
               <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center mb-10 border border-white/20">
                     <Activity className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white italic mb-10">Still have a <br />clinical inquiry?</h2>
                  <p className="text-xl text-white/70 font-light mb-12 leading-relaxed">
                     Our clinical support collective is available for deeper 
                     consultations regarding complex restorative journeys.
                  </p>
                  <Link href="/contact" className="px-14 py-6 bg-white text-primary rounded-full font-bold text-xl hover:translate-y-[-4px] transition-all shadow-2xl flex items-center gap-4">
                     Contact Clinician
                     <ChevronRight className="w-6 h-6" />
                  </Link>
               </div>
               
               {/* Abstract background graphics */}
               <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[60%] bg-[#a2f0ef] opacity-20 blur-[120px] rounded-full" />
               <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[50%] bg-[#ffb690] opacity-10 blur-[100px] rounded-full" />
            </div>
         </div>
      </section>

    </div>
  );
}
