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
    <nav className="sticky top-0 z-50 w-full px-8 py-6 flex justify-between items-center glass">
      <Link href="/" className="text-2xl font-serif text-primary font-bold tracking-tight">
        Aura<span className="text-primary-container">.Dental</span>
      </Link>
      
      <div className="hidden md:flex gap-12 items-center">
        {links.map((link) => (
          <Link 
            key={link.href} 
            href={link.href}
            className={`text-[13px] font-sans font-medium tracking-widest uppercase transition-colors ${
              pathname === link.href ? 'text-primary' : 'text-[#6E7979] hover:text-foreground'
            }`}
          >
            {link.name}
          </Link>
        ))}
        <Link 
          href="/contact"
          className="bg-gradient-to-br from-primary to-primary-container text-white px-8 py-3 rounded-lg text-sm font-bold shadow-soft hover:opacity-90 transition-all"
        >
          Book Appointment
        </Link>
      </div>
    </nav>
  );
}
