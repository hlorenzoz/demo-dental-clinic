'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Team', href: '/team' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full px-4 md:px-6 xl:px-8 py-5 flex justify-between items-center glass border-b border-primary/5 max-w-[100vw] overflow-hidden">
      <Link href="/" className="text-[22px] font-serif text-primary font-bold tracking-tight">
        Aurora<span className="text-secondary/60 text-lg">.</span>
      </Link>
      
      <div className="hidden lg:flex gap-2 xl:gap-12 items-center">
        {links.map((link) => (
          <Link 
            key={link.href} 
            href={link.href}
            className={`text-[11px] lg:text-[13px] font-sans font-medium tracking-widest uppercase transition-colors ${
              pathname === link.href ? 'text-primary' : 'text-[#6E7979] hover:text-foreground'
            }`}
          >
            {link.name}
          </Link>
        ))}
        <Link 
          href="/contact"
          className="bg-primary text-white px-3 md:px-4 xl:px-8 py-3.5 rounded-full text-[11px] xl:text-[13px] font-bold shadow-md hover:bg-primary-container transition-all uppercase tracking-widest whitespace-nowrap"
        >
          Book Appointment
        </Link>
      </div>
    </nav>
  );
}
