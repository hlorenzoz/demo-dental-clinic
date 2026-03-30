import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sitemap | Aura Dental Collective',
  description: 'Navigate through the Aura Dental Collective sanctuary architecture.',
};

export default function SitemapPage() {
  return (
    <div className="bg-surface min-h-screen pt-40 pb-32 px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header - The Architecture */}
        <section className="mb-32">
          <span className="text-primary font-bold uppercase tracking-[0.4em] text-[11px] mb-8 block">Sanctuary Architecture</span>
          <h1 className="text-6xl md:text-8xl font-serif text-foreground mb-16 leading-[1.02] tracking-tight text-balance">
            Digital <br />
            <span className="italic">Navigation</span>.
          </h1>
          <p className="text-2xl text-[#3E4949] leading-relaxed font-light max-w-2xl italic">
            Trace your journey through our clinical ecosystem. 
            From restorative theory to direct specialist access.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {/* Main Sanctuary */}
          <div className="space-y-10">
            <h3 className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">The Foundation</h3>
            <ul className="space-y-6">
              <li><Link href="/" className="text-2xl font-serif text-foreground hover:text-primary transition-colors italic">Home Sanctuary</Link></li>
              <li><Link href="/about" className="text-2xl font-serif text-foreground hover:text-primary transition-colors italic">Our Heritage</Link></li>
              <li><Link href="/team" className="text-2xl font-serif text-foreground hover:text-primary transition-colors italic">The Specialists</Link></li>
              <li><Link href="/contact" className="text-2xl font-serif text-foreground hover:text-primary transition-colors italic">Secure Booking</Link></li>
            </ul>
          </div>

          {/* Clinical Areas */}
          <div className="space-y-10">
            <h3 className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">Clinical Protocol</h3>
            <ul className="space-y-6">
              <li><Link href="/services" className="text-2xl font-serif text-foreground hover:text-primary transition-colors italic">Services Hub</Link></li>
              <li><Link href="/services/dental-implants" className="text-lg text-[#3E4949] hover:text-primary font-light transition-colors">Precision Implants</Link></li>
              <li><Link href="/services/invisalign" className="text-lg text-[#3E4949] hover:text-primary font-light transition-colors">Invisalign® Elite</Link></li>
              <li><Link href="/services/cosmetic-dentistry" className="text-lg text-[#3E4949] hover:text-primary font-light transition-colors">Cosmetic Artistry</Link></li>
              <li><Link href="/services/general-dentistry" className="text-lg text-[#3E4949] hover:text-primary font-light transition-colors">Baseline Dental Health</Link></li>
            </ul>
          </div>

          {/* Regulatory & Support */}
          <div className="space-y-10">
            <h3 className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">Patient Integrity</h3>
            <ul className="space-y-6">
              <li><Link href="/faq" className="text-2xl font-serif text-foreground hover:text-primary transition-colors italic">Curated Wisdom (FAQ)</Link></li>
              <li><Link href="/privacy-policy" className="text-lg text-[#3E4949] hover:text-primary font-light transition-colors">Data Privacy Protocol</Link></li>
              <li><Link href="/terms-of-service" className="text-lg text-[#3E4949] hover:text-primary font-light transition-colors">Engagement Terms</Link></li>
              <li><Link href="/cookie-policy" className="text-lg text-[#3E4949] hover:text-primary font-light transition-colors">Digital Integrity (Cookies)</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
