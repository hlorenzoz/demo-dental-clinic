'use client';

import Image from "next/image";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - The Clinical Editorial */}
      <section className="relative h-[95vh] flex items-center overflow-hidden bg-surface">
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-0 top-0 w-2/3 h-full z-0 hidden lg:block"
        >
          <div className="relative w-full h-full">
            <Image
              src="/hero-clinic.png"
              alt="Aura Dental Collective Sanctuary"
              fill
              className="object-cover opacity-90 scale-105"
              priority
            />
            {/* Subtle Gradient Overlap */}
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent" />
          </div>
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-primary-container text-[11px] font-bold uppercase tracking-[0.5em] mb-10 block"
            >
              The Harley Street Sanctuary
            </motion.span>
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="text-foreground text-6xl md:text-8xl font-serif leading-[1.02] mb-12 tracking-tight text-balance"
            >
              The Art of <br />
              <span className="italic text-primary">Restorative</span> <br />
              Medicine.
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-lg md:text-xl text-[#3E4949] mb-16 leading-relaxed font-light max-w-lg"
            >
              Experience a sensory departure from traditional dentistry. 
              A curated space where advanced clinical precision meets 
              unrivaled restorative artistry.
            </motion.p>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-8"
            >
              <Link 
                href="/contact" 
                className="bg-gradient-to-br from-primary to-primary-container text-white px-12 py-5 rounded-lg font-bold text-lg shadow-soft hover:opacity-95 transition-all"
              >
                Book Assessment
              </Link>
              <Link 
                href="/services" 
                className="bg-surface-lowest text-foreground px-12 py-5 rounded-lg font-bold text-lg shadow-sm hover:bg-surface-low transition-all"
              >
                The Clinical Hub
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Tonal Layering */}
      <section className="py-40 px-8 bg-surface-low overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden z-20"
            >
              <Image
                src="/specialist.png"
                alt="Lead Specialist Dr. Vance"
                fill
                className="object-cover"
              />
            </motion.div>
            {/* Decentered Geometric Accent */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          </div>
          
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 lg:pl-12"
          >
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[11px] mb-8 block">Our Philosophy</span>
            <h2 className="text-5xl md:text-6xl font-serif text-foreground mb-10 leading-tight tracking-tight">
              Clinical Authority. <br />
              <span className="italic font-normal">Sanctuary Comfort.</span>
            </h2>
            <p className="text-xl text-[#3E4949] mb-12 leading-relaxed font-light">
              We transcend the sterile limitations of conventional care. Aura Dental Collective 
              represents a masterclass in patient-first infrastructure, utilizing the world's 
              most advanced restorative technologies within a space designed for total tranquility.
            </p>
            
            <div className="grid grid-cols-2 gap-16 pt-12 border-t border-zinc-200/40">
              <div>
                <h4 className="text-4xl font-serif text-primary mb-3 italic">Precision</h4>
                <p className="text-[#6E7979] text-[10px] uppercase tracking-[0.4em] font-bold">Cutting-Edge Tech</p>
              </div>
              <div>
                <h4 className="text-4xl font-serif text-primary mb-3 italic">Artistry</h4>
                <p className="text-[#6E7979] text-[10px] uppercase tracking-[0.4em] font-bold">Resorative Design</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - The Glass & Gradient Rule */}
      <section className="py-40 px-8 bg-surface">
        <motion.div 
          initial={{ scale: 0.98, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto bg-surface-lowest rounded-[3rem] p-16 md:p-32 text-center relative overflow-hidden shadow-[0_24px_80px_rgba(0,101,101,0.04)]"
        >
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-serif text-foreground mb-10 tracking-tight">
              Begin Your <span className="italic text-primary">Transformation</span>.
            </h2>
            <p className="text-[#3E4949] text-xl max-w-2xl mx-auto mb-16 leading-relaxed font-light">
              Secure your comprehensive aesthetic assessment today and step into 
              the future of private clinical care.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-gradient-to-br from-primary to-primary-container text-white px-16 py-6 rounded-lg font-bold text-xl shadow-soft hover:opacity-95 transition-all"
            >
              Consult the Collective
            </Link>
          </div>
          
          {/* Subtle Atmospheric Accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 blur-[150px] rounded-full -ml-48 -mb-48" />
        </motion.div>
      </section>
    </div>
  );
}
