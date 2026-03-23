'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Clock, 
  ChevronRight, 
  ShieldAlert,
  ArrowUpRight
} from 'lucide-react';

const workingHours = [
  { day: 'Monday', hours: '08:30 – 17:30' },
  { day: 'Tuesday', hours: '08:30 – 17:30' },
  { day: 'Wednesday', hours: '08:30 – 17:30' },
  { day: 'Thursday', hours: '10:00 – 19:30', note: 'Late Clinic' },
  { day: 'Friday', hours: '08:30 – 17:30' },
  { day: 'Saturday', hours: 'By Appointment', note: 'Private' },
  { day: 'Sunday', hours: 'Closed' }
];

export default function ContactPage() {
  const fadeInUp: any = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      
      {/* 1. HERO - Sanctuary Journey */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-10"
          >
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] md:text-[11px]">
              Clinical Entry
            </span>
          </motion.div>
          
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 1.2 }}
              className="text-foreground text-5xl md:text-8xl font-serif leading-[1.05] mb-12 tracking-tight"
            >
              Start Your <br />
              <span className="italic font-normal text-primary">Sanctuary Journey.</span>
            </motion.h1>
            <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5, duration: 1 }}
               className="text-xl md:text-2xl text-[#3F4948] font-light leading-relaxed max-w-2xl"
            >
              Secure your comprehensive clinical assessment. Our concierge team manages 
              every nuance of your restorative journey with absolute clinical priority.
            </motion.p>
          </div>
        </div>
        
        {/* Decorative Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      </section>

      {/* 2. CONTACT HUB - The Frictionless Interface */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            
            {/* Left: Info Stack */}
            <div className="lg:col-span-5 space-y-16">
              
              {/* NAP Details */}
              <motion.div 
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-12"
              >
                <div>
                  <div className="flex items-center gap-4 text-primary mb-6">
                    <MapPin className="w-6 h-6" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em]">The Sanctuary</span>
                  </div>
                  <h3 className="text-3xl font-serif text-foreground italic mb-2">Mill Hill Clinic</h3>
                  <p className="text-lg font-light text-[#3F4948] leading-relaxed">
                    53 Brockenhurst Gardens, <br />
                    London NW7 2JY
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-4 text-primary mb-6">
                    <Phone className="w-6 h-6" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Direct Line</span>
                  </div>
                  <h3 className="text-3xl font-serif text-foreground italic mb-2">020 8959 9392</h3>
                  <p className="text-sm font-bold text-primary italic">Emergency Triage Available</p>
                </div>

                <div>
                  <div className="flex items-center gap-4 text-primary mb-6">
                    <Mail className="w-6 h-6" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Clinical Secure</span>
                  </div>
                  <p className="text-xl font-light text-foreground border-b border-primary/20 pb-1 w-fit group cursor-pointer hover:border-primary transition-all">
                    concierge@ecladent.co.uk
                  </p>
                </div>
              </motion.div>

              {/* Working Hours Container */}
              <motion.div 
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-surface-low rounded-[3rem] p-10 md:p-12 border border-primary/5"
              >
                <div className="flex items-center gap-4 text-primary mb-10">
                  <Clock className="w-6 h-6" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Clinical Availability</span>
                </div>
                <div className="space-y-6">
                  {workingHours.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-4 border-b border-zinc-200/50 last:border-0 group">
                      <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{item.day}</span>
                      <div className="text-right">
                        <span className="text-sm font-light text-[#6F7979]">{item.hours}</span>
                        {item.note && (
                          <span className="block text-[9px] font-bold text-primary uppercase tracking-widest mt-1">
                            {item.note}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Emergency Module */}
              <motion.div 
                 initial={{ backgroundColor: "#ffffff" }}
                 whileHover={{ backgroundColor: "#004c4c" }}
                 className="group p-10 rounded-[2.5rem] border border-primary text-primary transition-all duration-500 overflow-hidden relative cursor-pointer"
              >
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6 group-hover:text-white transition-colors">
                      <ShieldAlert className="w-10 h-10" />
                      <h4 className="text-2xl font-serif italic">Relief from £75</h4>
                    </div>
                    <p className="text-sm font-light mb-8 group-hover:text-white/80 transition-colors">
                      Acute dental pain? We provide same-day stabilization and clinical relief with priority triage.
                    </p>
                    <a href="tel:02089599392" className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                       Call Emergency Line 
                       <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary group-hover:scale-[10] transition-transform duration-1000 origin-top-right rounded-full opacity-0 group-hover:opacity-100" />
              </motion.div>

            </div>

            {/* Right: Booking Form */}
            <div className="lg:col-span-7 sticky top-32">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="bg-surface-lowest p-12 md:p-16 lg:p-20 rounded-[4rem] shadow-soft border border-primary/5 relative group"
              >
                <div className="mb-16">
                  <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6 italic">Secure Assessment</h2>
                  <p className="text-lg font-light text-[#6F7979]">Complete your clinical profile for priority consideration.</p>
                </div>

                <form className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#6F7979]">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="Clinical Name"
                        className="w-full bg-surface-low border-none rounded-2xl px-8 py-5 focus:ring-2 focus:ring-primary/10 transition-all font-light outline-none" 
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#6F7979]">Phone Secure</label>
                      <input 
                        type="tel" 
                        placeholder="Primary Contact"
                        className="w-full bg-surface-low border-none rounded-2xl px-8 py-5 focus:ring-2 focus:ring-primary/10 transition-all font-light outline-none" 
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#6F7979]">Clinical Interest</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                       {['Implants', 'Invisalign', 'Hygiene', 'Emergency', 'Cosmetic'].map((item) => (
                         <label key={item} className="flex items-center gap-3 p-4 bg-surface-low rounded-xl cursor-pointer hover:bg-primary/5 transition-colors">
                            <input type="checkbox" className="w-4 h-4 accent-primary" />
                            <span className="text-[11px] font-bold uppercase tracking-widest">{item}</span>
                         </label>
                       ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#6F7979]">Clinical Notes</label>
                    <textarea 
                      rows={5} 
                      placeholder="Please describe your restorative goals or urgent needs..."
                      className="w-full bg-surface-low border-none rounded-3xl px-8 py-6 focus:ring-2 focus:ring-primary/10 transition-all font-light outline-none resize-none" 
                    />
                  </div>

                  <button className="w-full py-6 px-12 bg-primary text-white rounded-full font-bold text-xl shadow-xl hover:translate-y-[-4px] hover:shadow-2xl transition-all flex items-center justify-center gap-4">
                    Request Secure Assessment
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </form>
                
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 p-12 opacity-5">
                   <ShieldAlert className="w-32 h-32 text-primary" />
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MAP SECTOR - GMB Integration */}
      <section className="py-24 px-6 bg-surface-low rounded-t-[5rem]">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
               <div className="max-w-lg">
                  <span className="text-primary font-bold uppercase tracking-[0.3em] text-[11px] mb-8 block">The Geography</span>
                  <h2 className="text-4xl md:text-6xl font-serif text-foreground tracking-tight italic">Mill Hill Sanctuary</h2>
                  <p className="text-[#3F4948] font-light mt-6 italic">Find us in the heart of Mill Hill gardens. Secured parking and accessibility protocols in place.</p>
               </div>
               <Link 
                href="https://maps.app.goo.gl/k36asjLgB63vmVj7A" 
                target="_blank"
                className="flex items-center gap-4 py-5 px-10 rounded-full border border-primary text-primary font-bold uppercase tracking-widest text-sm hover:bg-primary hover:text-white transition-all shadow-sm"
               >
                  Get Direct Link
                  <ArrowUpRight className="w-5 h-5" />
               </Link>
            </div>
            
            <div className="w-full h-[600px] rounded-[4rem] overflow-hidden shadow-2xl border border-primary/5 relative">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.4124316086884!2d-0.24765620000000002!3d51.615625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487610bd8b4b741d%3A0xe549cd2981509618!2sEcladent%20Dental%20Sanctuary!5e0!3m2!1sen!2suk!4v1711200000000!5m2!1sen!2suk" 
                 className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
                 style={{ border: 0 }} 
                 allowFullScreen={true} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
               />
               <div className="absolute inset-0 pointer-events-none border-[12px] border-surface-low rounded-[4rem]" />
            </div>
         </div>
      </section>

      {/* 4. CLINICAL GALLERY PREVIEW */}
      <section className="py-40 px-6">
         <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-7xl font-serif text-foreground mb-16 tracking-tight">The <span className="italic">Environment.</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[1, 2, 3].map((i) => (
                 <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="aspect-[4/5] bg-surface-low rounded-[3rem] overflow-hidden group relative"
                 >
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-12 text-white">
                       <p className="text-xl font-serif italic text-center">Engineered for absolute clinical calm.</p>
                    </div>
                    {/* Placeholder for local gallery images */}
                    <div className="w-full h-full bg-primary/5" />
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

    </div>
  );
}
