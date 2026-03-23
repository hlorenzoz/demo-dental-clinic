'use client';

import Image from "next/image";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Star, 
  Clock, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  Heart, 
  Zap, 
  Calendar,
  ChevronRight,
  ShieldCheck,
  UserCheck
} from 'lucide-react';
import JsonLd from '@/components/ui/JsonLd';

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ecladent Sanctuary - Mill Hill Dental Clinic",
    "image": "https://cdn.hlorenzoz.com/dental_clinic_1_minimalist/hero_sanctuary.webp",
    "@id": "https://dental-clinic-1-minimalist.pages.dev/",
    "url": "https://dental-clinic-1-minimalist.pages.dev/",
    "telephone": "+44 20 8959 9392",
    "priceRange": "££-£££",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "53 Brockenhurst Gardens",
      "addressLocality": "London",
      "postalCode": "NW7 2JY",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.6152,
      "longitude": -0.2523
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday", "Saturday"],
        "opens": "09:00",
        "closes": "15:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "391"
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://dental-clinic-1-minimalist.pages.dev/"
    }]
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeInUp: any = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col min-h-screen selection:bg-primary/20">
      <JsonLd data={structuredData} />
      <JsonLd data={breadcrumbData} />
      
      {/* 1. HERO - The Promise & Primary CTA */}
      <section className="relative h-[90vh] lg:h-[95vh] flex items-center overflow-hidden bg-surface">
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <Image
              src="https://cdn.hlorenzoz.com/dental_clinic_1_minimalist/hero_sanctuary.webp"
              alt="Ecladent Sanctuary Atmosphere"
              fill
              className="object-cover opacity-60 lg:opacity-100 lg:translate-x-1/4"
              priority
              fetchPriority="high"
              sizes="100vw"
            />
            {/* Editorial Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent lg:from-surface lg:via-surface/40" />
          </motion.div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-8 h-[1px] bg-primary"></span>
              <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] md:text-[11px]">
                The Sanctuary Mill Hill
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-foreground text-5xl md:text-8xl font-serif leading-[1.05] mb-10 tracking-tight text-balance"
            >
              Restore Your <br />
              <span className="italic font-normal text-primary">Confidence.</span>
            </motion.h1>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg md:text-2xl text-[#3F4948] mb-12 leading-relaxed font-light max-w-xl"
            >
              Experience restorative excellence in a dedicated dental sanctuary. 
              Precision clinical care meets a women-owned, inclusive environment.
            </motion.p>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link 
                href="/contact" 
                className="group relative overflow-hidden bg-primary text-white px-10 py-5 rounded-full font-bold text-lg shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book Free Consultation
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="tel:+442089599392" 
                className="bg-surface-lowest backdrop-blur-md border border-primary/10 text-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-surface-low transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Zap className="w-5 h-5" />
                Emergency Relief
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. SOCIAL PROOF - Multi-layered Trust */}
      <section className="py-24 bg-surface-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center lg:items-start"
            >
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-4xl md:text-5xl font-serif text-foreground mb-2">4.9 / 5.0</p>
              <p className="text-primary font-bold uppercase tracking-widest text-xs">Excellence Awarded</p>
              <p className="text-[#4A5453] text-sm mt-4">Based on 391+ patient reviews</p>
            </motion.div>

            <div className="h-[1px] w-full lg:h-24 lg:w-[1px] bg-primary/10"></div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              <motion.div variants={fadeInUp} className="max-w-sm">
                <p className="text-foreground text-lg mb-6 italic leading-relaxed">
                  "Corinne the hygienist is exceptional. The whole team at Ecladent makes you feel 
                  safe and supported from the moment you walk in."
                </p>
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary font-bold">SJ</span>
                  <span className="text-sm font-bold text-foreground">Sarah J. — Harley St. Patient</span>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="max-w-sm">
                <p className="text-foreground text-lg mb-6 italic leading-relaxed">
                  "Eileen at reception is a lovely soul. I was terrified of dentist visits until I found Ecladent. 
                  A true sanctuary for nervous patients."
                </p>
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary font-bold">MK</span>
                  <span className="text-sm font-bold text-foreground">Miles K. — Mill Hill Resident</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. LOGICAL OFFER - The Emergency Hook */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ scale: 0.98, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-primary overflow-hidden rounded-[2.5rem] lg:rounded-[4rem] relative shadow-2xl"
          >
            <div className="absolute inset-0 z-0 opacity-10">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-white blur-[80px]" />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
                <div className="flex items-center gap-2 mb-8">
                  <Zap className="w-6 h-6 text-[#ffb690]" />
                  <span className="text-white font-bold uppercase tracking-[0.3em] text-[11px]">Priority Emergency Care</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
                  Same-Day Relief <br />
                  <span className="italic font-normal">Starting at £75.</span>
                </h2>
                <p className="text-white/80 text-lg mb-12 max-w-md font-light">
                  Inclusive of X-rays and initial clinical diagnosis. Don't let dental pain stop your life. 
                  Book your urgent slot before 11AM for guaranteed same-day attention.
                </p>
                <Link 
                  href="/contact?type=emergency" 
                  className="bg-white text-primary px-12 py-5 rounded-full font-bold text-lg hover:bg-surface-low transition-all text-center lg:self-start"
                >
                  Secure Emergency Slot
                </Link>
              </div>
              <div className="p-12 lg:p-24 bg-primary-container/30 backdrop-blur-sm">
                <div className="space-y-8">
                  <div className="flex gap-4 items-start text-white">
                    <CheckCircle2 className="w-6 h-6 text-[#a2f0ef]" />
                    <div>
                      <p className="font-bold text-xl mb-1">Painless Diagnostics</p>
                      <p className="text-white/70 font-light">Advanced imaging including 3D scanning to pinpoint the source of pain immediately.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start text-white">
                    <CheckCircle2 className="w-6 h-6 text-[#a2f0ef]" />
                    <div>
                      <p className="font-bold text-xl mb-1">Instant Stabilization</p>
                      <p className="text-white/70 font-light">Temporary fillings, nerve relief, or recementing to ensure you leave comfort-ready.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start text-white">
                    <CheckCircle2 className="w-6 h-6 text-[#a2f0ef]" />
                    <div>
                      <p className="font-bold text-xl mb-1">NHS & Private Care</p>
                      <p className="text-white/70 font-light">Flexible care pathways including new patient consultations and NHS assistance.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. SERVICES - The Bento Grid */}
      <section className="py-32 px-6 bg-surface-low">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-[11px] mb-6 block leading-none">Clinical Excellence</span>
              <h2 className="text-4xl md:text-7xl font-serif text-foreground leading-[1.1] tracking-tight">
                Curated <span className="italic">Restorative</span> <br /> Treatments.
              </h2>
            </div>
            <Link href="/services" className="text-primary font-bold group flex items-center gap-2 mb-4 whitespace-nowrap">
              Explore All Procedures
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
            {/* Main Service */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-8 bg-surface-lowest rounded-3xl p-12 flex flex-col justify-between relative overflow-hidden group shadow-sm border border-black/5"
            >
              <div className="relative z-10">
                <span className="bg-primary/5 text-primary px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-8 inline-block">Bespoke Cosmetic</span>
                <h3 className="text-4xl md:text-6xl font-serif text-foreground mb-6">Invisalign & Smile Makeovers</h3>
                <p className="text-[#3F4948] text-xl max-w-md font-light leading-relaxed mb-8">
                  Utilizing state-of-the-art iteration technology to design your perfect smile 
                  digitally before we start treatment.
                </p>
                <Link href="/services/cosmetic" className="text-primary font-bold flex items-center gap-2 text-sm uppercase tracking-widest">
                  Observe Smile Design Results
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="absolute right-0 bottom-0 w-1/2 h-2/3 grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none">
                <Image 
                  src="https://cdn.hlorenzoz.com/dental_clinic_1_minimalist/specialist_sam.webp" 
                  alt="Service Detail" 
                  fill 
                  className="object-cover object-top" 
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            {/* Smaller Service 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-4 bg-primary text-white rounded-3xl p-10 flex flex-col justify-center border border-white/5 shadow-lg shadow-primary/10"
            >
              <Zap className="w-12 h-12 text-[#a2f0ef] mb-8" />
              <h3 className="text-3xl font-serif mb-6 leading-tight">Emergency <br />Stabilization</h3>
              <p className="text-white/70 font-light leading-relaxed mb-8">
                Broken tooth? Acute pain? We reserve priority slots daily for rapid relief.
              </p>
              <Link 
                href="/services/emergency" 
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all"
                aria-label="Access Emergency Care Stabilization"
              >
                <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Smaller Service 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-4 bg-surface-lowest rounded-3xl p-10 flex flex-col justify-center border border-black/5 shadow-sm"
            >
              <Heart className="w-12 h-12 text-primary mb-8" />
              <h3 className="text-3xl font-serif text-foreground mb-6 leading-tight">Facial <br />Aesthetics</h3>
              <p className="text-[#4A5453] font-light leading-relaxed mb-8">
                Botox and anti-wrinkle treatments delivered with medical precision.
              </p>
              <Link href="/services/aesthetics" className="text-primary font-bold flex items-center gap-2 text-sm uppercase tracking-widest">
                Observe Aesthetic Standards
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Long Service */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-8 bg-surface-lowest rounded-3xl p-12 flex flex-col md:flex-row gap-12 border border-black/5 shadow-sm"
            >
              <div className="md:w-1/2 flex flex-col justify-center">
                <ShieldCheck className="w-12 h-12 text-primary mb-8" />
                <h3 className="text-4xl font-serif text-foreground mb-6">Preventative Care</h3>
                <p className="text-[#4A5453] font-light leading-relaxed">
                  Our advanced hygiene protocols (Airflow) provide a sensory, 
                  comfortable alternative to traditional cleaning.
                </p>
              </div>
              <div className="md:w-1/2 relative rounded-2xl overflow-hidden bg-primary/5 min-h-[200px]">
                <div className="p-8 text-center flex flex-col h-full justify-center">
                  <p className="text-primary font-serif italic text-2xl mb-2">"Corinne's Touch"</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-[#4A5453]">Patient Favorite Service</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. PHILOSOPHY - The Sanctuary Values */}
      <section className="py-40 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden z-20 shadow-2xl"
            >
              <Image
                src="https://cdn.hlorenzoz.com/dental_clinic_1_minimalist/specialist_daniel.webp"
                alt="Aura Sanctuary Atmosphere"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </motion.div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
          </div>
          
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 lg:pl-16"
          >
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[11px] mb-8 block">Inclusive Clinical Space</span>
            <h2 className="text-5xl md:text-7xl font-serif text-foreground mb-10 leading-[1.1] tracking-tight">
              A Private Sanctuary <br />
              <span className="italic font-normal">Owned by Women.</span>
            </h2>
            <div className="space-y-8 text-xl text-[#3F4948] mb-16 leading-relaxed font-light">
              <p>
                Ecladent represents a departure from traditional corporate dentistry. As a proudly 
                women-owned boutique clinic, we prioritize the emotional well-being of our patients 
                as much as their clinical outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 py-8 border-y border-primary/10">
                <div className="flex items-center gap-4">
                  <UserCheck className="w-8 h-8 text-primary" />
                  <span className="text-sm font-bold uppercase tracking-widest text-foreground">LGBTQ+ Safe Space</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                  <span className="text-sm font-bold uppercase tracking-widest text-foreground">Inclusive Environment</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-12">
              <div>
                <p className="text-primary font-serif italic text-4xl mb-4 leading-none">Calm</p>
                <p className="text-[#4A5453] text-[10px] uppercase tracking-widest font-bold">Atmosphere Focused</p>
              </div>
              <div className="w-[1px] h-16 bg-primary/10 hidden sm:block"></div>
              <div>
                <p className="text-primary font-serif italic text-4xl mb-4 leading-none">Safe</p>
                <p className="text-[#4A5453] text-[10px] uppercase tracking-widest font-bold">Informed Consent</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. BUSINESS BLOCK - GMB Integration */}
      <section className="py-32 px-6 bg-surface-low border-t border-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32">
            
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:col-span-4"
            >
              <Link href="/" className="inline-block mb-10">
                <span className="text-2xl font-serif font-bold text-primary tracking-tight">Ecladent</span>
              </Link>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground mb-1 uppercase tracking-wider text-xs">Our Location</p>
                    <p className="text-[#4A5453] font-light">53 Brockenhurst Gardens,<br />London NW7 2JY</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground mb-1 uppercase tracking-wider text-xs">Speak with us</p>
                    <p className="text-[#4A5453] font-light">+44 20 8959 9392</p>
                  </div>
                </div>
                <div className="pt-8 border-t border-primary/10">
                  <Link 
                    href="https://maps.app.goo.gl/k36asjLgB63vmVj7A" 
                    target="_blank"
                    className="w-full bg-surface-lowest border border-primary/10 text-primary py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-surface-high transition-all shadow-sm"
                  >
                    View Interactive Map
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="lg:col-span-4 bg-surface-lowest p-10 rounded-3xl shadow-sm border border-black/5"
            >
              <div className="flex items-center gap-3 mb-10">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-serif text-foreground">Clinic Hours</h3>
              </div>
              <div className="space-y-4">
                {[
                  { day: 'Mon - Thu', hours: '9:00 AM – 5:00 PM' },
                  { day: 'Friday', hours: '9:00 AM – 3:00 PM' },
                  { day: 'Saturday', hours: '9:00 AM – 3:00 PM' },
                  { day: 'Sunday', hours: 'Closed', closed: true },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-primary/5 last:border-0">
                    <span className="text-sm font-bold text-foreground uppercase tracking-widest">{item.day}</span>
                    <span className={`text-sm ${item.closed ? 'text-[#ffb690] font-bold italic' : 'text-[#4A5453] font-light'}`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-primary/5 p-4 rounded-xl flex items-center justify-center gap-3">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary text-center">
                  Emergencies prioritized daily
                </span>
              </div>
            </motion.div>

             <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-4 rounded-3xl overflow-hidden min-h-[400px] relative bg-primary/5 border border-black/5 shadow-sm group"
             >
               <Image 
                 src="https://cdn.hlorenzoz.com/dental_clinic_1_minimalist/clinic_interior.webp"
                 alt="Clinic Interior Sanctuary"
                 fill
                 className="object-cover group-hover:scale-110 transition-transform duration-[2s] opacity-40 group-hover:opacity-60"
                 sizes="(max-width: 1024px) 100vw, 33vw"
               />
               <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none">
                 <div className="text-center rounded-2xl p-6 bg-surface-lowest/60 backdrop-blur-md border border-white/20">
                   <p className="text-primary font-serif italic text-2xl mb-4 underline decoration-[#6a3516]/30 px-4">Mill Hill Sanctuary</p>
                   <p className="text-[10px] text-[#4A5453] uppercase tracking-widest font-bold px-4">Located in the heart of NW7 London</p>
                 </div>
               </div>
             </motion.div>

          </div>
        </div>
      </section>

      {/* 7. FRICTIONLESS FORM - Lead Capture */}
      <section className="py-40 px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-[11px] mb-8 block font-manrope">The First Step</span>
          <h2 className="text-5xl md:text-7xl font-serif text-foreground mb-10 tracking-tight leading-tight">
             Start Your <span className="italic">Journey.</span>
          </h2>
          <p className="text-[#3F4948] text-xl font-light mb-16 leading-relaxed max-w-2xl mx-auto">
            Ready to experience clinical dentistry without the stress? Complete our minimalist lead 
            form to request your initial aesthetic or clinical assessment.
          </p>
        </div>

        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-surface-lowest p-12 lg:p-20 rounded-[3rem] shadow-[0_24px_80px_rgba(0,101,101,0.06)] border border-primary/5"
        >
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3 group">
                <label htmlFor="hp-full-name" className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A5453] ml-1">Full Name</label>
                <input 
                  id="hp-full-name"
                  type="text" 
                  placeholder="E.g. Alexander Vance"
                  className="bg-surface-low border-none rounded-2xl p-5 focus:ring-1 focus:ring-primary focus:bg-white transition-all outline-none text-foreground placeholder-[#bec9c8]"
                />
              </div>
              <div className="flex flex-col gap-3 group">
                <label htmlFor="hp-phone-number" className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A5453] ml-1">Phone Number</label>
                <input 
                  id="hp-phone-number"
                  type="tel" 
                  placeholder="+44 20 8959 9392"
                  className="bg-surface-low border-none rounded-2xl p-5 focus:ring-1 focus:ring-primary focus:bg-white transition-all outline-none text-foreground placeholder-[#bec9c8]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 group">
              <label htmlFor="hp-clinical-interest" className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A5453] ml-1">Clinical Interest</label>
              <select 
                id="hp-clinical-interest"
                className="bg-surface-low border-none rounded-2xl p-5 focus:ring-1 focus:ring-primary focus:bg-white appearance-none transition-all outline-none text-[#3F4948]"
              >
                <option>General Assessment</option>
                <option>Emergency Care</option>
                <option>Cosmetic Smile Transformation</option>
                <option>Facial Aesthetics (Botox)</option>
              </select>
            </div>
            <div className="pt-6">
              <button className="w-full bg-primary text-white py-6 rounded-2xl font-bold text-xl shadow-xl hover:shadow-primary/20 transition-all flex items-center justify-center gap-2 group">
                Request Assessment
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="mt-8 flex items-center justify-center gap-2 text-[#bec9c8]">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="text-[11px] font-bold uppercase tracking-widest leading-none">
                  No obligation. Your data is protected.
                </span>
              </div>
            </div>
          </form>
        </motion.div>
      </section>

    </div>
  );
}
