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

  return (
    <div className="flex flex-col min-h-screen bg-surface pb-40">
      
      {/* 1. HERO - Curated Clarity */}
      <section className="pt-32 pb-24 lg:pt-48 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-10"
          >
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] md:text-[11px]">
               Patient Knowledge
            </span>
          </motion.div>
          
          <div className="max-w-4xl text-center mx-auto">
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 1.2 }}
              className="text-foreground text-5xl md:text-8xl font-serif leading-[1.05] mb-12 tracking-tight"
            >
              Curated <br />
              <span className="italic font-normal text-primary">Clarity.</span>
            </motion.h1>
            <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5, duration: 1 }}
               className="text-xl md:text-2xl text-[#3F4948] font-light leading-relaxed max-w-2xl mx-auto"
            >
              Transparency is core to our clinical heritage. Below we address the most common 
              touchpoints of the Ecladent Sanctuary journey.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. FAQ INTERFACE - The Sanctuary Accordion */}
      <section className="px-6 flex-grow">
        <div className="max-w-4xl mx-auto">
           <div className="space-y-6">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`bg-surface-lowest rounded-[2.5rem] overflow-hidden transition-all duration-700 ${
                      isOpen ? 'shadow-xl' : 'shadow-sm hover:shadow-md'
                    }`}
                  >
                    <button 
                       onClick={() => setOpenIndex(isOpen ? null : i)}
                       className="w-full p-10 md:p-12 text-left flex items-center justify-between gap-8 focus:outline-none group"
                    >
                       <div className="flex items-center gap-6">
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                            isOpen ? 'bg-primary text-white' : 'bg-primary/5 text-primary group-hover:bg-primary/10'
                          }`}>
                             <HelpCircle className="w-5 h-5" />
                          </div>
                          <h3 className="text-xl md:text-2xl font-serif italic text-foreground leading-tight tracking-tight">
                            {faq.q}
                          </h3>
                       </div>
                       <div className={`shrink-0 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
                          {isOpen ? <Minus className="w-6 h-6 text-primary" /> : <Plus className="w-6 h-6 text-primary" />}
                       </div>
                    </button>
                    
                    <motion.div 
                       initial={false}
                       animate={{ 
                         height: isOpen ? 'auto' : 0,
                         opacity: isOpen ? 1 : 0
                       }}
                       transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                       className="overflow-hidden"
                    >
                       <div className="px-10 md:px-12 pb-12 md:pb-16 pt-0 ml-16 md:ml-20 max-w-2xl border-l border-primary/10">
                          <p className="text-lg text-[#3F4948] font-light leading-relaxed opacity-90">
                            {faq.a}
                          </p>
                          <div className="mt-8 flex items-center gap-4 text-primary font-bold text-xs uppercase tracking-widest cursor-pointer group">
                             Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                       </div>
                    </motion.div>
                  </motion.div>
                );
              })}
           </div>
        </div>
      </section>

      {/* 3. DIAGNOSTIC CTA */}
      <section className="pt-40 px-6">
         <div className="max-w-5xl mx-auto relative group">
            <div className="absolute inset-0 bg-primary/5 rounded-[4rem] group-hover:scale-105 transition-transform duration-700" />
            <div className="relative p-16 md:p-24 text-center">
               <div className="flex justify-center mb-10">
                  <div className="bg-primary p-5 rounded-3xl text-white shadow-xl animate-pulse">
                    <Activity className="w-8 h-8" />
                  </div>
               </div>
               <h2 className="text-4xl md:text-6xl font-serif text-foreground mb-10 tracking-tight leading-tight italic">
                  Specific <span className="text-primary not-italic">Concerns?</span>
               </h2>
               <p className="text-xl text-[#3F4948] font-light leading-relaxed mb-16 mx-auto max-w-lg">
                  Every patient profile is unique. Start your tailored sanctuary journey with a secure assessment.
               </p>
               <Link href="/contact" className="inline-flex items-center gap-6 py-6 px-16 bg-primary text-white rounded-full font-bold text-xl shadow-xl hover:translate-y-[-4px] transition-all">
                  Request Secure Assessment
                  <ChevronRight className="w-6 h-6" />
               </Link>
            </div>
         </div>
      </section>

    </div>
  );
}
