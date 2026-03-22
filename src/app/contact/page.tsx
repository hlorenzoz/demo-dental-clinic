import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Secure Booking & Contact | Aura Dental Collective',
  description: 'Book your comprehensive clinical assessment at our Harley Street sanctuary.',
};

export default function ContactPage() {
  return (
    <div className="bg-surface min-h-screen pt-40 pb-32 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header - The Direct Invite */}
        <section className="mb-32">
          <div className="max-w-4xl">
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[11px] mb-8 block">The Clinical Gateway</span>
            <h1 className="text-6xl md:text-8xl font-serif text-foreground mb-16 leading-[1.02] tracking-tight text-balance">
              Begin Your <br />
              <span className="italic">Transformation</span>.
            </h1>
            <p className="text-2xl text-[#3E4949] leading-relaxed font-light max-w-2xl">
              Acceptance into the collective begins with a comprehensive baseline assessment. 
              Our concierge team will guide you through our diagnostic protocol.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          {/* Practice Details - Tonal Info */}
          <div className="lg:col-span-5 space-y-20">
            <div className="space-y-12">
              <div className="group">
                <p className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 opacity-60">The Sanctuary</p>
                <p className="text-3xl font-serif text-foreground italic mb-2">Harley Street</p>
                <p className="text-lg text-[#3E4949] font-light">52 Harley Street, London, W1G 9PY</p>
              </div>
              <div className="group">
                <p className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 opacity-60">Direct Line</p>
                <p className="text-3xl font-serif text-foreground italic mb-2">+44 20 7486 6777</p>
                <p className="text-lg text-[#3E4949] font-light italic">Reception Triage: 08:30 – 18:30</p>
              </div>
            </div>

            {/* Map Placeholder/Link */}
            <div className="bg-surface-low aspect-video rounded-2xl flex items-center justify-center p-8 border border-zinc-200/40 relative overflow-hidden group">
              <div className="relative z-10 text-center">
                <p className="text-foreground font-serif italic text-xl mb-4 text-balance">The Collective Geography</p>
                <Link 
                  href="https://maps.google.com/?q=52+Harley+St+London" 
                  target="_blank"
                  className="text-primary font-bold uppercase tracking-[0.2em] text-[10px] hover:opacity-70 transition-all border-b border-primary/20 pb-1"
                >
                  View on Digital Map
                </Link>
              </div>
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>
          </div>

          {/* Booking Form - The Floating Sheet */}
          <div className="lg:col-span-7 bg-surface-lowest p-12 md:p-20 rounded-2xl shadow-soft">
            <h3 className="text-4xl font-serif text-foreground mb-12 italic">Secure Assessment</h3>
            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-[#6E7979] font-bold">Full Name</label>
                  <input type="text" className="w-full bg-surface-low px-8 py-5 rounded-lg focus:ring-1 focus:ring-primary/20 outline-none transition-all font-light text-foreground" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-[#6E7979] font-bold">Email Secure</label>
                  <input type="email" className="w-full bg-surface-low px-8 py-5 rounded-lg focus:ring-1 focus:ring-primary/20 outline-none transition-all font-light text-foreground" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] text-[#6E7979] font-bold">Clinical Interest</label>
                <select className="w-full bg-surface-low px-8 py-5 rounded-lg focus:ring-1 focus:ring-primary/20 outline-none transition-all font-light text-foreground/60 appearance-none">
                  <option>Precision Implants</option>
                  <option>Invisalign® Elite</option>
                  <option>Cosmetic Artistry</option>
                  <option>Total Health Maintenance</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] text-[#6E7979] font-bold">Clinical Goals</label>
                <textarea rows={5} className="w-full bg-surface-low px-8 py-5 rounded-lg focus:ring-1 focus:ring-primary/20 outline-none transition-all font-light text-foreground resize-none" />
              </div>
              <button className="w-full bg-gradient-to-br from-primary to-primary-container text-white py-6 rounded-lg font-bold text-xl shadow-soft hover:opacity-95 transition-all">
                Submit Consultation Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
