'use client';

import { useEffect, useState } from 'react';
import { Download, X } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export function PWAInstaller() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showAnyway, setShowAnyway] = useState(false);

  useEffect(() => {
    // Register Service Worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js', { scope: '/' })
        .catch((err) => console.error('[SW] Registration failed:', err));
    }

    // Capture install prompt
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      // Show banner after 10s — let them see the site first
      setTimeout(() => setShowBanner(true), 10_000);
    };

    window.addEventListener('beforeinstallprompt', handler);
    
    // For testing/demo purposes, show it anyway if it's not dismissed
    const isDismissed = localStorage.getItem('pwa-dismissed');
    if (!isDismissed) {
      setTimeout(() => setShowAnyway(true), 5000);
    }

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
        setShowBanner(false);
        setShowAnyway(false);
      }
    } else {
      // Fallback or instructions
      alert('To install: Tap the share button and "Add to Home Screen"');
    }
  };

  const handleDismiss = () => {
    setShowBanner(false);
    setShowAnyway(false);
    localStorage.setItem('pwa-dismissed', 'true');
  };

  if (!showBanner && !showAnyway) return null;

  return (
    <div
      role="listitem"
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999] w-[calc(100%-2rem)] max-w-md
                 bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.15)]
                 flex items-center gap-4 px-6 py-5 animate-in slide-in-from-bottom-8 duration-500 ease-out font-sans"
    >
      {/* Brand Icon — Using the raw SVG which already includes the brand background */}
      <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
        <img 
          src="/favicon.svg" 
          alt="Aurora" 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Text Content */}
      <div className="flex-1 min-w-0 pr-2">
        <h3 className="text-base font-bold text-[#0A1A1A] leading-tight mb-0.5">
          Add to Home Screen
        </h3>
        <p className="text-[13px] text-[#556666] leading-snug font-medium">
          Access Aurora Dental instantly, even offline
        </p>
      </div>

      {/* Button & Close */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleInstall}
          className="bg-primary text-white rounded-full pl-5 pr-6 py-3 text-sm font-bold
                     flex items-center gap-2 hover:bg-primary-container transition-all active:scale-95 shadow-md shadow-primary/20"
        >
          <Download className="w-4 h-4" />
          <span>Install</span>
        </button>
        
        <button
          onClick={handleDismiss}
          className="p-2 -mr-2 rounded-full text-[#6E7979] hover:bg-black/5 transition-colors"
          aria-label="Dismiss banner"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
