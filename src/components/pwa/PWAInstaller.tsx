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
      // Show banner after 30s — don't interrupt immediately
      setTimeout(() => setShowBanner(true), 30_000);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setShowBanner(false);
    }
  };

  if (!showBanner || !deferredPrompt) return null;

  return (
    <div
      role="dialog"
      aria-label="Install Aurora Dental app"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-sm
                 bg-white/95 backdrop-blur-md border border-primary/10 rounded-2xl shadow-2xl
                 flex items-center gap-4 px-5 py-4 animate-in slide-in-from-bottom-4 duration-300"
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
        <span className="text-white font-serif font-bold text-xl">A</span>
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-bold text-foreground leading-snug">Add to Home Screen</p>
        <p className="text-xs text-[#6E7979] mt-0.5 leading-snug">
          Access Aurora Dental instantly, even offline
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <button
          onClick={handleInstall}
          aria-label="Install app"
          className="bg-primary text-white rounded-full px-4 py-2 text-xs font-bold
                     flex items-center gap-1.5 hover:bg-primary/90 transition-colors"
        >
          <Download className="w-3.5 h-3.5" />
          Install
        </button>
        <button
          onClick={() => setShowBanner(false)}
          aria-label="Dismiss install banner"
          className="w-8 h-8 rounded-full flex items-center justify-center
                     text-[#6E7979] hover:bg-black/5 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
