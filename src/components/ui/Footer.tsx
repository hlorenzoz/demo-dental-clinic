import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-surface-low py-32 px-8 border-t border-primary/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
        <div className="md:col-span-5">
          <Link href="/" className="text-3xl font-serif text-primary font-bold mb-8 block">
            Ecladent<span className="text-secondary/60">.</span>
          </Link>
          <p className="text-[#6F7979] text-base leading-relaxed max-w-sm font-light">
            A restorative sanctuary where clinical excellence meets the art of dentistry. 
            Proudly women-owned, inclusive, and dedicated to Mill Hill's oral health.
          </p>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#006060] mb-8">The Practice</h3>
          <ul className="space-y-4 text-sm text-[#3F4948]">
            <li><Link href="/about" className="hover:text-primary transition-colors">Our Approach</Link></li>
            <li><Link href="/team" className="hover:text-primary transition-colors">The Specialists</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">Clinical Hub</Link></li>
            <li><Link href="/faq" className="hover:text-primary transition-colors">Curated FAQ</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
           <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#006060] mb-8">Services</h3>
           <ul className="space-y-4 text-sm text-[#3F4948]">
             <li><Link href="/services/restorative" className="hover:text-primary transition-colors">Restorative Art</Link></li>
             <li><Link href="/services/cosmetic" className="hover:text-primary transition-colors">Invisalign</Link></li>
             <li><Link href="/services/aesthetics" className="hover:text-primary transition-colors">Facial Aesthetics</Link></li>
             <li><Link href="/services/emergency" className="hover:text-primary transition-colors">Emergency Care</Link></li>
           </ul>
        </div>

        <div className="md:col-span-3">
           <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#006060] mb-8">Sanctuary Access</h3>
           <ul className="space-y-4 text-sm text-[#3F4948]">
             <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
             <li><Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link></li>
             <li><Link href="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
             <li><Link href="/contact" className="hover:text-primary transition-colors">GMB Profile</Link></li>
           </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-32 pt-16 flex flex-col md:flex-row justify-between items-start md:items-center text-[10px] text-[#4F5958] uppercase tracking-[0.3em] font-medium border-t border-primary/10">
        <p>© 2026 Ecladent Sanctuary. Curated with Precision.</p>
        <div className="mt-4 md:mt-0 flex flex-col md:flex-row gap-8">
          <span>53 Brockenhurst Gardens, London NW7 2JY</span>
          <span>+44 20 8959 9392</span>
        </div>
      </div>
    </footer>
  );
}
