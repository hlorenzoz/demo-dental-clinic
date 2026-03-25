'use client';

import Link from 'next/link';
import { Zap } from 'lucide-react';

export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center">
      {/* Logo */}
      <Link href="/" className="text-3xl font-serif text-primary font-bold mb-12 block">
        Aurora<span className="text-secondary/60">.</span>
      </Link>

      {/* Icon */}
      <div className="w-20 h-20 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center mb-8">
        <Zap className="w-8 h-8 text-primary" />
      </div>

      {/* Content */}
      <h1 className="text-4xl font-serif text-foreground mb-4">You&apos;re Offline</h1>
      <p className="text-[#6E7979] text-lg max-w-sm mb-10 leading-relaxed">
        It looks like your internet connection is unavailable. Please check your network and try again.
      </p>

      {/* Emergency CTA — always visible, hardcoded */}
      <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 max-w-xs w-full mb-8">
        <p className="text-[11px] uppercase tracking-[0.3em] font-bold text-primary mb-3">
          Dental Emergency?
        </p>
        <a
          href="tel:+442012345678"
          className="block w-full bg-primary text-white rounded-full py-4 font-bold text-lg hover:bg-primary/90 transition-colors"
        >
          Call Us Now
        </a>
      </div>

      {/* Retry */}
      <button
        onClick={() => window.location.reload()}
        className="text-sm text-[#6E7979] underline underline-offset-4 hover:text-primary transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
