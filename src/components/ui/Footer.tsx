import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#F3F3F3] py-32 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
        <div className="md:col-span-5">
          <Link href="/" className="text-3xl font-serif text-primary font-bold mb-8 block">
            Aura<span className="text-primary-container">.Dental</span>
          </Link>
          <p className="text-[#6E7979] text-base leading-relaxed max-w-sm">
            A restorative sanctuary where clinical excellence meets the art of dentistry. 
            Redefining the aesthetic landscape of modern oral care.
          </p>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#bdc9c8] mb-8">The Practice</h4>
          <ul className="space-y-4 text-sm text-[#3E4949]">
            <li><Link href="/about" className="hover:text-primary transition-colors">Our Heritage</Link></li>
            <li><Link href="/team" className="hover:text-primary transition-colors">The Specialists</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">Clinical Hub</Link></li>
            <li><Link href="/faq" className="hover:text-primary transition-colors">Curated FAQ</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
           <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#bdc9c8] mb-8">Services</h4>
           <ul className="space-y-4 text-sm text-[#3E4949]">
             <li><Link href="/services/implants" className="hover:text-primary transition-colors">Restorative Art</Link></li>
             <li><Link href="/services/invisalign" className="hover:text-primary transition-colors">Invisalign</Link></li>
             <li><Link href="/services/cosmetic" className="hover:text-primary transition-colors">Cosmetic Design</Link></li>
             <li><Link href="/services/preventative" className="hover:text-primary transition-colors">Preventative Care</Link></li>
           </ul>
        </div>

        <div className="md:col-span-3">
           <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#bdc9c8] mb-8">Legal Sanctuary</h4>
           <ul className="space-y-4 text-sm text-[#3E4949]">
             <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
             <li><Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link></li>
             <li><Link href="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
             <li><Link href="/sitemap" className="hover:text-primary transition-colors">Sitemap</Link></li>
           </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-32 pt-16 flex flex-col md:flex-row justify-between items-start md:items-center text-[10px] text-[#bdc9c8] uppercase tracking-[0.3em] font-medium border-t border-zinc-200/40">
        <p>© 2024 Aura Dental Collective. Curated with Precision.</p>
        <div className="mt-4 md:mt-0 flex gap-8">
          <span>52 Harley Street, London</span>
          <span>+44 20 7123 4567</span>
        </div>
      </div>
    </footer>
  );
}
